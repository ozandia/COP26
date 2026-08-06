import React from "react";
import { Clock, FileText } from "lucide-react";

export function PrestacaoContasUpload() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
        A entrega da documentação é <span className="font-bold text-black underline decoration-accent/30 decoration-4">imprescindível</span> para a regularização da sua viagem no sistema.
      </p>

      {/* Aviso de Prazo de Entrega */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-primary/5 border border-primary/10 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg">
          <Clock className="w-6 h-6 text-accent" aria-hidden="true" />
          PRAZO DE ENTREGA
        </div>
        <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
          Os Cartões de Embarque (Ida e Volta) e Relatório de Viagem (Assinado) devem ser entregues até a data de retorno.
        </p>
      </div>
    </div>
  );
}
