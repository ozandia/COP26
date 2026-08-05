import { useState } from "react";
import { Clock } from "lucide-react";
import { GroupScheduleViewer } from "@/components/GroupScheduleViewer";

export function ProgramacaoWizard() {
    const [currentStep, setCurrentStep] = useState(1);

    const gtiSteps = [
        {
            id: 1,
            label: "CONSESP",
            description: "Conselho Nacional de Secretários de Segurança Pública",
            content: (
                <GroupScheduleViewer
                    groupKey="CONSESP"
                    groupTitle="CONSESP"
                    groupDescription="Conselho Nacional de Secretários de Segurança Pública"
                />
            )
        },
        {
            id: 2,
            label: "CNCG",
            description: "Conselho Nacional de Comandantes-Gerais",
            content: (
                <GroupScheduleViewer
                    groupKey="CNCG"
                    groupTitle="CNCG"
                    groupDescription="Conselho Nacional de Comandantes-Gerais"
                />
            )
        },
        {
            id: 3,
            label: "CONCPC",
            description: "Conselho Nacional dos Chefes de Polícia Civil",
            content: (
                <GroupScheduleViewer
                    groupKey="CONCPC"
                    groupTitle="CONCPC"
                    groupDescription="Conselho Nacional dos Chefes de Polícia Civil"
                />
            )
        },
        {
            id: 4,
            label: "CONDPC",
            description: "Conselho Nacional de Dirigentes de Perícia Criminal",
            content: (
                <GroupScheduleViewer
                    groupKey="CONDPC"
                    groupTitle="CONDPC"
                    groupDescription="Conselho Nacional de Dirigentes de Perícia Criminal"
                />
            )
        },
        {
            id: 5,
            label: "LIGABOM",
            description: "Ligação dos Corpos de Bombeiros Militares do Brasil",
            content: (
                <GroupScheduleViewer
                    groupKey="LIGABOM"
                    groupTitle="LIGABOM"
                    groupDescription="Ligação dos Corpos de Bombeiros Militares do Brasil"
                />
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
