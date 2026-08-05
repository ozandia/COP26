import { useState } from "react";
import { Clock, ChevronDown, ChevronUp, User, Coffee } from "lucide-react";

interface TimelineItem {
    time: string;
    title: string;
    speaker?: string;
    bullets?: string[];
    isBreak?: boolean;
}

const timeline: TimelineItem[] = [
    {
        time: "14h00–14h30",
        title: "Abertura e Alinhamento dos Objetivos",
        speaker: "Keila Silveira Vasconcelos",
        bullets: [
            "Apresentação dos participantes e objetivos estratégicos da reunião.",
            "Visão geral da pauta e metodologia de trabalho do encontro.",
        ],
    },
    {
        time: "14h30–16h00",
        title: "Procedimento Licitatório sob visão da CGU",
        speaker: "Carlos Henrique Benedito Nitão Loureiro",
        bullets: [
            "Análise dos principais achados das fiscalizações recentes da CGU.",
            "Critérios de regularidade formal e material dos processos licitatórios.",
            "Gestão de riscos e controles internos aplicados às contratações.",
            "Boas práticas e recomendações para garantia de conformidade.",
        ],
    },
    {
        time: "16h00–16h15",
        title: "Intervalo",
        isBreak: true,
    },
    {
        time: "16h15–16h30",
        title: "Panorama Geral dos Instrumentos de Repasse",
        speaker: "Suzana Mara Fontes Cunha",
        bullets: [
            "Mapeamento dos instrumentos vigentes, suas especificidades e aplicabilidade.",
        ],
    },
    {
        time: "16h30–17h15",
        title: "Aceites de Procedimentos Licitatórios",
        speaker: "Edivaldo Marques Rodrigues",
        bullets: [
            "Critérios técnicos para aceite de documentação licitatória nos convênios.",
            "Procedimentos de análise, conformidade e homologação dos processos.",
            "Prazos regulatórios e fluxos internos de aprovação.",
        ],
    },
    {
        time: "17h15–18h00",
        title: "Processo de Pagamento",
        speaker: "Edivaldo Marques Rodrigues",
        bullets: [
            "Documentação obrigatória para processamento e liquidação de pagamentos.",
            "Prazos e fluxos financeiros no âmbito dos convênios federais.",
            "Conformidade legal, vedações e responsabilidades do gestor.",
        ],
    },
    {
        time: "18h00",
        title: "Encerramento",
    },
];

export function ScheduleCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center gap-2 px-5 py-3 bg-slate-50 border-b border-gray-200">
                <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-700">04 de março</span>
            </div>

            <div className="divide-y divide-gray-100">
                {/* Section 1 — Static: Plenária */}
                <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-semibold text-slate-800">Plenária</span>
                    <span className="text-sm text-slate-500">9h – 12h &nbsp;|&nbsp; Expo São Paulo</span>
                </div>

                {/* Section 2 — Accordion: Reunião Técnica */}
                <div>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="w-full px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-left hover:bg-slate-50 transition-colors"
                        aria-expanded={open}
                    >
                        <span className="font-semibold text-slate-800">Reunião Técnica</span>
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="text-sm text-slate-500">14h – 18h &nbsp;|&nbsp; Sala da Rede Interfederativa de Convênios</span>
                            {open ? (
                                <ChevronUp className="w-4 h-4 text-slate-400" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-slate-400" />
                            )}
                        </div>
                    </button>

                    {/* Expanded Timeline */}
                    {open && (
                        <div className="px-5 pb-6 pt-2">
                            <ol className="relative">
                                {timeline.map((item, idx) => {
                                    const isLast = idx === timeline.length - 1;
                                    return (
                                        <li key={idx} className="flex gap-4 group">
                                            {/* Vertical line + dot */}
                                            <div className="flex flex-col items-center">
                                                <div
                                                    className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 z-10 ${item.isBreak
                                                            ? "bg-gray-300"
                                                            : item.time === "18h00"
                                                                ? "bg-slate-400"
                                                                : "bg-blue-500"
                                                        }`}
                                                />
                                                {!isLast && (
                                                    <div className="w-px flex-1 bg-gray-200 mt-1" />
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className={`pb-6 flex-1 min-w-0 ${isLast ? "pb-0" : ""}`}>
                                                {/* Time badge */}
                                                <span className="inline-block text-xs font-mono font-semibold text-blue-600 bg-blue-50 rounded px-2 py-0.5 mb-1">
                                                    {item.time}
                                                </span>

                                                {item.isBreak ? (
                                                    /* Break row */
                                                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                                                        <Coffee className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                                        <span className="text-sm font-medium text-slate-600">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <p className="font-semibold text-slate-800 leading-snug">
                                                            {item.title}
                                                        </p>

                                                        {item.speaker && (
                                                            <div className="flex items-center gap-1.5 mt-1 mb-2">
                                                                <User className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                                                                <span className="text-xs text-slate-500 italic">
                                                                    {item.speaker}
                                                                </span>
                                                            </div>
                                                        )}

                                                        {item.bullets && item.bullets.length > 0 && (
                                                            <ul className="mt-1 space-y-1">
                                                                {item.bullets.map((b, bi) => (
                                                                    <li
                                                                        key={bi}
                                                                        className="flex gap-2 text-sm text-slate-600"
                                                                    >
                                                                        <span className="text-blue-400 mt-0.5 flex-shrink-0">›</span>
                                                                        <span>{b}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
