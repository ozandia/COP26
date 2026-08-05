// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function iniciarServidor() {
  const app = express();
  const server = createServer(app);
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  const uploadsDir = path.resolve(__dirname, "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
  const uploadsMetadataFile = path.resolve(__dirname, "uploads.json");
  app.post("/api/upload", (req, res) => {
    try {
      const { nomeCompleto, instituicao, relatorio, canhotos } = req.body;
      const timestamp = Date.now();
      const savedFiles = [];
      const sanitizedNome = (nomeCompleto || "Anonimo").replace(/[^a-zA-Z0-9._-]/g, "_");
      if (relatorio && relatorio.data) {
        const buffer = Buffer.from(relatorio.data.split(",")[1] || relatorio.data, "base64");
        const fileName = `${timestamp}_${sanitizedNome}_relatorio_${relatorio.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
        const filePath = path.join(uploadsDir, fileName);
        fs.writeFileSync(filePath, buffer);
        savedFiles.push(fileName);
      }
      if (canhotos && Array.isArray(canhotos)) {
        canhotos.forEach((item, index) => {
          if (item.data) {
            const buffer = Buffer.from(item.data.split(",")[1] || item.data, "base64");
            const fileName = `${timestamp}_${sanitizedNome}_canhoto_${index + 1}_${item.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
            const filePath = path.join(uploadsDir, fileName);
            fs.writeFileSync(filePath, buffer);
            savedFiles.push(fileName);
          }
        });
      }
      let currentLog = [];
      if (fs.existsSync(uploadsMetadataFile)) {
        try {
          currentLog = JSON.parse(fs.readFileSync(uploadsMetadataFile, "utf-8"));
        } catch (e) {
          currentLog = [];
        }
      }
      const newRecord = {
        id: `ENV-${timestamp}`,
        date: (/* @__PURE__ */ new Date()).toISOString(),
        nomeCompleto: nomeCompleto || "N\xE3o informado",
        instituicao: instituicao || "N\xE3o informada",
        relatorioName: relatorio?.name || null,
        canhotosCount: canhotos?.length || 0,
        savedFiles
      };
      currentLog.push(newRecord);
      fs.writeFileSync(uploadsMetadataFile, JSON.stringify(currentLog, null, 2), "utf-8");
      return res.status(200).json({
        success: true,
        message: "Documentos salvos com sucesso no servidor!",
        record: newRecord
      });
    } catch (error) {
      console.error("Erro no upload:", error);
      return res.status(500).json({ success: false, error: "Falha ao salvar documentos no servidor." });
    }
  });
  const staticPath = process.env.NODE_ENV === "production" ? path.resolve(__dirname, "public") : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
  const port = process.env.PORT || 5e3;
  server.listen(port, () => {
    console.log(`Servidor Express em execu\xE7\xE3o em http://localhost:${port}/`);
  });
}
iniciarServidor().catch(console.error);
