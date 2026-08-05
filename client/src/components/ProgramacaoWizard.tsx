import { useState } from "react";
import { Clock } from "lucide-react";
import { ScheduleCard } from "@/components/ScheduleCard";
import { ScheduleCardDay2 } from "@/components/ScheduleCardDay2";
import { ScheduleFundoAFundo } from "@/components/ScheduleFundoAFundo";
import { ScheduleLogistica } from "@/components/ScheduleLogistica";
import { ScheduleOrcamento } from "@/components/ScheduleOrcamento";

// Reusable day card components
function Day03Card() {
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-4">
            <div className="bg-slate-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <h2 className="text-sm font-semibold text-slate-700">03 de março</h2>
            </div>
            <div className="px-6 py-5 space-y-5">
                {/* Soft Opening */}
                <div>
                    <div className="flex justify-between items-center group">
                        <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            Soft Opening
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-blue-600 font-semibold">
                            <span className="hidden md:inline">14h - 18h | iLab-Segurança (Expo São Paulo)</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed italic">
                        Visitação antecipada aos estandes, limitada aos Grandes Conselhos, Câmaras Técnicas, Rede Interfederativa e GTIs.
                    </p>
                    <p className="md:hidden text-xs text-gray-500 mt-1">14h - 18h | iLab-Segurança (Expo São Paulo)</p>
                </div>

                <div className="border-t border-gray-100 italic"></div>

                {/* Abertura */}
                <div>
                    <div className="flex justify-between items-center group">
                        <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            Abertura
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="hidden md:inline">19h | Expo São Paulo</span>
                        </div>
                    </div>
                    <p className="md:hidden text-xs text-gray-500 mt-1">19h | Expo São Paulo</p>
                </div>
            </div>
        </div>
    );
}

function Day06Card() {
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-slate-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <h2 className="text-sm font-semibold text-slate-700">06 de março - Palestras SENASP</h2>
            </div>
            <div className="px-6 py-5">
                <div className="flex justify-between items-center group">
                    <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Programação Técnica
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="hidden md:inline">9h - 17h | Expo São Paulo</span>
                    </div>
                </div>
                <p className="md:hidden text-xs text-gray-500 mt-1">9h - 17h | Expo São Paulo</p>
            </div>
        </div>
    );
}

// Simple card for other days
function SimpleCard({ title, items }: { title: string; items: { label: string; detail?: string }[] }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-slate-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
            </div>
            <div className="px-6 py-5 space-y-4">
                {items.map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between items-center group">
                            <p className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.label}
                            </p>
                            {item.detail && (
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className="hidden md:inline">{item.detail}</span>
                                </div>
                            )}
                        </div>
                        {item.detail && <p className="md:hidden text-xs text-gray-500 mt-1">{item.detail}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ProgramacaoWizard() {
    const [currentStep, setCurrentStep] = useState(1);

    const gtiSteps = [
        {
            id: 1,
            label: "CONSESP",
            description: "Conselho Nacional de Secretários de Segurança Pública",
            content: (
                <div className="space-y-4">
                    <Day03Card />
                    <ScheduleFundoAFundo />
                </div>
            )
        },
        {
            id: 2,
            label: "CNCG",
            description: "Conselho Nacional de Comandantes-Gerais",
            content: (
                <div className="space-y-4">
                    <Day03Card />
                    <ScheduleCard />
                    <ScheduleCardDay2 />
                    <Day06Card />
                </div>
            )
        },
        {
            id: 3,
            label: "CONCPC",
            description: "Conselho Nacional dos Chefes de Polícia Civil",
            content: (
                <div className="space-y-4">
                    <Day03Card />
                    <ScheduleOrcamento />
                </div>
            )
        },
        {
            id: 4,
            label: "CONDPC",
            description: "Conselho Nacional de Dirigentes de Perícia Criminal",
            content: (
                <div className="space-y-4">
                    <Day03Card />
                    <ScheduleLogistica />
                </div>
            )
        },
        {
            id: 5,
            label: "LIGABOM",
            description: "Ligação dos Corpos de Bombeiros Militares do Brasil",
            content: (
                <div className="space-y-4">
                    <Day03Card />
                    <ScheduleLogistica />
                </div>
            )
        }
    ];

    return (
        <div className="br-wizard" data-vertical="vertical" data-step={currentStep}>
            {/* Mobile: numbered dots + dynamic label */}
            <div className="wizard-mobile-steps md:hidden" aria-label="Grupos de trabalho">
                <div className="wizard-steps-row" role="tablist">
                    {gtiSteps.map((step) => (
                        <button
                            key={step.id}
                            type="button"
                            role="tab"
                            aria-selected={currentStep === step.id}
                            aria-controls={`panel-step-${step.id}`}
                            aria-label={`${step.label} — passo ${step.id} de ${gtiSteps.length}`}
                            onClick={() => setCurrentStep(step.id)}
                            className={`wizard-step-dot ${currentStep === step.id ? "active" : ""}`}
                        >
                            {step.id}
                        </button>
                    ))}
                </div>
                <div className="wizard-step-label flex flex-col items-center" aria-live="polite">
                    <span className="wizard-step-title text-center">
                        {gtiSteps.find((s) => s.id === currentStep)?.label}
                    </span>
                    {gtiSteps.find((s) => s.id === currentStep)?.description && (
                        <span className="wizard-step-desc text-[10px] text-primary/60 mt-0.5 block text-center italic">
                            {gtiSteps.find((s) => s.id === currentStep)?.description}
                        </span>
                    )}
                </div>
            </div>

            {/* Desktop: vertical sidebar tabs */}
            <div className="wizard-header hidden md:block">
                <div className="wizard-progress space-y-3" role="tablist" aria-label="Grupos de trabalho">
                    {gtiSteps.map((step) => (
                        <button
                            key={step.id}
                            className={`w-full flex flex-row items-center gap-[15px] px-[20px] py-[15px] rounded-xl transition-all duration-200 text-left border-none shadow-sm
                               ${currentStep === step.id
                                    ? "bg-[#0E4DA4] shadow-md scale-[1.01]"
                                    : "bg-[#F4F8FF] border border-[#E6EFFF] hover:bg-[#E0EAFF] shadow-sm hover:scale-[1.005]"
                                }`}
                            type="button"
                            role="tab"
                            data-step={step.id}
                            aria-selected={currentStep === step.id}
                            aria-controls={`panel-step-${step.id}`}
                            id={`tab-step-${step.id}`}
                            onClick={() => setCurrentStep(step.id)}
                        >
                            <div className={`flex-shrink-0 w-[45px] h-[45px] rounded-full flex items-center justify-center font-bold text-[20px] transition-colors
                               ${currentStep === step.id ? "bg-white text-[#0E4DA4]" : "bg-[#0E4DA4] text-white"}`}>
                                {step.id}
                            </div>
                            <div className="flex flex-col justify-center min-w-0 flex-1">
                                <span className={`text-[18px] font-bold leading-[1.1] transition-colors break-words whitespace-normal
                                   ${currentStep === step.id ? "text-white" : "text-[#0E4DA4]"}`}>
                                    {step.label}
                                </span>
                                {step.description && (
                                    <span className={`text-[12px] font-normal italic leading-[1.2] transition-colors mt-[3px] break-words whitespace-normal
                                       ${currentStep === step.id ? "text-[#E0E0E0]" : "text-[#333333]"}`}>
                                        {step.description}
                                    </span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content panels */}
            <div className="wizard-form">
                {gtiSteps.map((step) => (
                    <div
                        key={step.id}
                        id={`panel-step-${step.id}`}
                        role="tabpanel"
                        aria-labelledby={`tab-step-${step.id}`}
                        className={`wizard-panel ${currentStep === step.id ? "active" : ""}`}
                        style={{ display: currentStep === step.id ? "block" : "none" }}
                    >
                        <div className="wizard-panel-content">
                            {step.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
