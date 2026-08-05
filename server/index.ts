import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import fs from "node:fs";

async function iniciarServidor() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // Pasta para persistência real dos arquivos enviados
  const uploadsDir = path.resolve(__dirname, "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const uploadsMetadataFile = path.resolve(__dirname, "uploads.json");

  // Endpoint de Upload permanente
  app.post("/api/upload", (req, res) => {
    try {
      const { nomeCompleto, instituicao, relatorio, canhotos } = req.body;
      const timestamp = Date.now();
      const savedFiles: string[] = [];

      const sanitizedNome = (nomeCompleto || "Anonimo").replace(/[^a-zA-Z0-9._-]/g, "_");

      // Salvar Relatório em disco
      if (relatorio && relatorio.data) {
        const buffer = Buffer.from(relatorio.data.split(",")[1] || relatorio.data, "base64");
        const fileName = `${timestamp}_${sanitizedNome}_relatorio_${relatorio.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
        const filePath = path.join(uploadsDir, fileName);
        fs.writeFileSync(filePath, buffer);
        savedFiles.push(fileName);
      }

      // Salvar Canhotos em disco
      if (canhotos && Array.isArray(canhotos)) {
        canhotos.forEach((item: { name: string; data: string }, index: number) => {
          if (item.data) {
            const buffer = Buffer.from(item.data.split(",")[1] || item.data, "base64");
            const fileName = `${timestamp}_${sanitizedNome}_canhoto_${index + 1}_${item.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
            const filePath = path.join(uploadsDir, fileName);
            fs.writeFileSync(filePath, buffer);
            savedFiles.push(fileName);
          }
        });
      }

      // Gravar registro no banco de dados JSON (uploads.json)
      let currentLog: any[] = [];
      if (fs.existsSync(uploadsMetadataFile)) {
        try {
          currentLog = JSON.parse(fs.readFileSync(uploadsMetadataFile, "utf-8"));
        } catch (e) {
          currentLog = [];
        }
      }

      const newRecord = {
        id: `ENV-${timestamp}`,
        date: new Date().toISOString(),
        nomeCompleto: nomeCompleto || "Não informado",
        instituicao: instituicao || "Não informada",
        relatorioName: relatorio?.name || null,
        canhotosCount: canhotos?.length || 0,
        savedFiles,
      };

      currentLog.push(newRecord);
      fs.writeFileSync(uploadsMetadataFile, JSON.stringify(currentLog, null, 2), "utf-8");

      return res.status(200).json({
        success: true,
        message: "Documentos salvos com sucesso no servidor!",
        record: newRecord,
      });
    } catch (error) {
      console.error("Erro no upload:", error);
      return res.status(500).json({ success: false, error: "Falha ao salvar documentos no servidor." });
    }
  });

  // Rota para listar todos os envios de prestação de contas
  app.get("/api/uploads/list", (_req, res) => {
    if (!fs.existsSync(uploadsMetadataFile)) {
      return res.json([]);
    }
    try {
      const data = JSON.parse(fs.readFileSync(uploadsMetadataFile, "utf-8"));
      return res.json(data);
    } catch (e) {
      return res.status(500).json({ error: "Erro ao ler lista de envios." });
    }
  });

  // Rota para baixar qualquer arquivo salvo pelo nome
  app.get("/api/uploads/download/:filename", (req, res) => {
    const filename = req.params.filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = path.join(uploadsDir, filename);

    if (fs.existsSync(filePath)) {
      return res.download(filePath);
    } else {
      return res.status(404).json({ error: "Arquivo não encontrado." });
    }
  });

  // Servir a pasta de uploads publicamente
  app.use("/uploads", express.static(uploadsDir));

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Servidor Express em execução em http://localhost:${port}/`);
  });
}

iniciarServidor().catch(console.error);
