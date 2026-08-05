import React, { useState, useRef } from "react";
import { Upload, FileText, CheckCircle2, Trash2, AlertCircle, FileCheck, Clock, UserSquare2, Building2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface UploadedFile {
  id: string;
  file: File;
  name: string;
  size: string;
  type: string;
}

export function PrestacaoContasUpload() {
  // Identification state
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [instituicao, setInstituicao] = useState("");

  // State for Relatório de Viagem (single PDF)
  const [relatorio, setRelatorio] = useState<UploadedFile | null>(null);

  // State for Canhotos de Embarque (multiple files: PDF, JPG, PNG)
  const [canhotos, setCanhotos] = useState<UploadedFile[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [protocolo, setProtocolo] = useState<string | null>(null);

  const relatorioInputRef = useRef<HTMLInputElement>(null);
  const canhotosInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleRelatorioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const selectedFile = files[0];
    const extension = selectedFile.name.split(".").pop()?.toLowerCase();

    if (extension !== "pdf") {
      toast.error("Formato inválido!", {
        description: "O Relatório de Viagem deve ser obrigatoriamente um arquivo em formato PDF (.pdf).",
      });
      if (relatorioInputRef.current) relatorioInputRef.current.value = "";
      return;
    }

    const uploaded: UploadedFile = {
      id: Math.random().toString(36).substring(2, 9),
      file: selectedFile,
      name: selectedFile.name,
      size: formatFileSize(selectedFile.size),
      type: selectedFile.type,
    };

    setRelatorio(uploaded);
    setSubmitted(false);
    toast.success("Relatório de Viagem anexado!", {
      description: `${selectedFile.name} (${formatFileSize(selectedFile.size)})`,
    });
  };

  const handleCanhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const validExtensions = ["pdf", "jpg", "jpeg", "png", "webp"];
    const newCanhotos: UploadedFile[] = [];
    let hasInvalid = false;

    Array.from(files).forEach((file) => {
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      if (validExtensions.includes(ext)) {
        newCanhotos.push({
          id: Math.random().toString(36).substring(2, 9),
          file,
          name: file.name,
          size: formatFileSize(file.size),
          type: file.type,
        });
      } else {
        hasInvalid = true;
      }
    });

    if (hasInvalid) {
      toast.error("Alguns arquivos possuem formato não permitido.", {
        description: "Formatos aceitos para canhotos: PDF, JPG, JPEG, PNG.",
      });
    }

    if (newCanhotos.length > 0) {
      setCanhotos((prev) => [...prev, ...newCanhotos]);
      setSubmitted(false);
      toast.success(`${newCanhotos.length} comprovante(s) de embarque adicionado(s)!`);
    }

    if (canhotosInputRef.current) canhotosInputRef.current.value = "";
  };

  const removeCanhoto = (id: string) => {
    setCanhotos((prev) => prev.filter((item) => item.id !== id));
    toast.info("Comprovante removido.");
  };

  const removeRelatorio = () => {
    setRelatorio(null);
    if (relatorioInputRef.current) relatorioInputRef.current.value = "";
    toast.info("Relatório de viagem removido.");
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmitAll = async () => {
    if (!nomeCompleto.trim()) {
      toast.warning("Nome Completo obrigatório", {
        description: "Por favor, preencha seu Nome Completo para identificação.",
      });
      return;
    }

    if (!instituicao.trim()) {
      toast.warning("Instituição obrigatória", {
        description: "Por favor, preencha sua Instituição de Origem.",
      });
      return;
    }

    if (!relatorio) {
      toast.warning("Relatório de Viagem pendente", {
        description: "Por favor, anexe o Relatório de Viagem em formato PDF antes de enviar.",
      });
      return;
    }

    if (canhotos.length === 0) {
      toast.warning("Canhotos de Embarque pendentes", {
        description: "Por favor, anexe ao menos um Cartão/Canhoto de Embarque (Ida/Volta).",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const relatorioBase64 = await fileToBase64(relatorio.file);

      const canhotosBase64 = await Promise.all(
        canhotos.map(async (c) => ({
          name: c.name,
          data: await fileToBase64(c.file),
        }))
      );

      const response = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nomeCompleto: nomeCompleto.trim(),
          instituicao: instituicao.trim(),
          relatorio: {
            name: relatorio.name,
            data: relatorioBase64,
          },
          canhotos: canhotosBase64,
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
        setProtocolo(resData.record?.id || "ENV-OK");
        toast.success("Documentação salva com sucesso!", {
          description: `Participante: ${nomeCompleto.trim()} • Protocolo: ${resData.record?.id || "ENV-OK"}`,
        });
      } else {
        toast.error("Erro no envio", {
          description: resData.error || "Não foi possível salvar os arquivos no servidor.",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Erro de conexão com o servidor", {
        description: "Verifique se o servidor backend está em execução.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto">
        A entrega da documentação é <span className="font-bold text-black underline decoration-accent/30 decoration-4">imprescindível</span> para a regularização da sua viagem no sistema.
      </p>

      {/* Bloco 0: Identificação Obrigatória do Participante */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-primary/5 border border-primary/10 max-w-4xl mx-auto space-y-4">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <UserSquare2 className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">Identificação do Participante</h3>
            <p className="text-xs text-gray-500">Informe seu Nome Completo e Instituição de Origem antes de anexar a documentação</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm text-gray-800 font-medium transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Instituição de Origem <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={instituicao}
              onChange={(e) => setInstituicao(e.target.value)}
              placeholder="Polícia Civil/Estado"
              className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm text-gray-800 font-medium transition-all"
              required
            />
          </div>
        </div>
      </div>

      {/* Grid de Upload */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* Card 1: Relatório de Viagem */}
        <div className="flex flex-col justify-between p-6 sm:p-8 bg-white rounded-2xl shadow-xl shadow-primary/5 border border-primary/10 hover:border-accent/40 transition-all">
          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-black text-xl font-black shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Relatório de Viagem</h3>
                <p className="text-sm font-semibold text-amber-700">Documento Assinado</p>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-red-50 text-red-700 font-bold rounded-md text-xs border border-red-200">
                  Obrigatório em PDF (.pdf)
                </span>
              </div>
            </div>

            {/* Input oculto PDF */}
            <input
              type="file"
              ref={relatorioInputRef}
              accept=".pdf,application/pdf"
              onChange={handleRelatorioChange}
              className="hidden"
            />

            {/* Área de Seleção ou Exibição do Arquivo */}
            {!relatorio ? (
              <div
                onClick={() => relatorioInputRef.current?.click()}
                className="mt-4 border-2 border-dashed border-gray-300 hover:border-accent bg-slate-50/70 hover:bg-amber-50/40 rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 group"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-500 group-hover:text-accent transition-colors">
                  <Upload className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-gray-700 group-hover:text-primary">
                  Clique para selecionar o PDF
                </span>
                <span className="text-xs text-gray-400">Apenas arquivos no formato .pdf</span>
              </div>
            ) : (
              <div className="mt-4 p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <FileText className="w-8 h-8 text-emerald-600 shrink-0" />
                  <div className="truncate">
                    <p className="text-sm font-bold text-emerald-900 truncate">{relatorio.name}</p>
                    <p className="text-xs text-emerald-700">{relatorio.size} • PDF Assinado</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeRelatorio}
                  className="text-emerald-700 hover:text-red-600 p-1.5 rounded-lg hover:bg-emerald-100/50 transition-colors"
                  title="Remover arquivo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <FileCheck className="w-4 h-4 text-emerald-500" /> Formato .pdf aceito
            </span>
            {relatorio && (
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Pronto
              </span>
            )}
          </div>
        </div>

        {/* Card 2: Canhotos de Embarque */}
        <div className="flex flex-col justify-between p-6 sm:p-8 bg-white rounded-2xl shadow-xl shadow-primary/5 border border-primary/10 hover:border-accent/40 transition-all">
          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-black text-xl font-black shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Canhotos de Embarque</h3>
                <p className="text-sm text-gray-500">Comprovantes originais (Ida e Volta)</p>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 font-bold rounded-md text-xs border border-blue-200">
                  PDF, PNG, JPG ou JPEG
                </span>
              </div>
            </div>

            {/* Input oculto imagens/PDF */}
            <input
              type="file"
              ref={canhotosInputRef}
              accept=".pdf,.jpg,.jpeg,.png,image/*,application/pdf"
              multiple
              onChange={handleCanhotosChange}
              className="hidden"
            />

            {/* Botão de Inserir Arquivos */}
            <div
              onClick={() => canhotosInputRef.current?.click()}
              className="mt-4 border-2 border-dashed border-gray-300 hover:border-accent bg-slate-50/70 hover:bg-amber-50/40 rounded-xl p-5 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-500 group-hover:text-accent transition-colors">
                <Upload className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-primary">
                Anexar Cartões de Embarque
              </span>
              <span className="text-xs text-gray-400">Você pode selecionar múltiplos arquivos (Ida e Volta)</span>
            </div>

            {/* Lista de Arquivos Inseridos */}
            {canhotos.length > 0 && (
              <div className="mt-4 space-y-2 max-h-40 overflow-y-auto pr-1">
                {canhotos.map((item) => (
                  <div key={item.id} className="p-2.5 bg-slate-100/90 border border-gray-200 rounded-lg flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 truncate">
                      <FileCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-semibold text-slate-800 truncate">{item.name}</span>
                      <span className="text-gray-400">({item.size})</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeCanhoto(item.id)}
                      className="text-gray-400 hover:text-red-600 p-1 rounded transition-colors"
                      title="Remover"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>{canhotos.length} arquivo(s) anexo(s)</span>
            {canhotos.length > 0 && (
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Anexados
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Botão de Ação para Envio */}
      <div className="flex flex-col items-center gap-4 pt-4">
        <Button
          onClick={handleSubmitAll}
          disabled={isSubmitting}
          className="h-12 px-8 text-base font-bold bg-accent text-primary hover:bg-accent/90 shadow-lg rounded-xl transition-all"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
              Enviando documentação...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Enviar Documentação
            </span>
          )}
        </Button>

        {submitted && (
          <div className="p-4 px-6 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl flex flex-col items-center gap-1 text-center text-sm font-bold animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-2 text-emerald-700 text-base">
              <CheckCircle2 className="w-5 h-5" />
              Documentos enviados com sucesso para a Prestação de Contas!
            </div>
            <p className="text-xs text-emerald-800 font-medium">
              Participante: <strong>{nomeCompleto}</strong> ({instituicao}) • Protocolo: <strong>{protocolo}</strong>
            </p>
          </div>
        )}
      </div>

      {/* Aviso de Prazo */}
      <div className="flex flex-col items-center gap-2 pt-8 border-t border-accent/10">
        <div className="flex items-center gap-2 text-primary font-bold">
          <Clock className="w-5 h-5" aria-hidden="true" />
          PRAZO DE ENTREGA
        </div>
        <p className="text-base sm:text-lg font-semibold text-black text-center">
          Os Cartões de Embarque (Ida e volta) e Relatório de Viagem (Assinado) devem ser entregues até a data de retorno.
        </p>
      </div>
    </div>
  );
}
