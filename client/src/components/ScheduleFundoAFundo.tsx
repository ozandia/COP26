import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export function ScheduleFundoAFundo() {
    // Estados para controlar o abre/fecha de cada dia (iniciam fechados)
    const [isOpenDay4, setIsOpenDay4] = useState(false);
    const [isOpenDay5, setIsOpenDay5] = useState(false);
    const [isOpenDay6, setIsOpenDay6] = useState(false);

    return (
        <div className="w-full space-y-4 font-sans text-gray-800 pb-8">

            {/* ================= CARD DIA 04 ================= */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Cabeçalho Padronizado */}
                <div className="bg-slate-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <h2 className="text-sm font-semibold text-slate-700">04 de março</h2>
                </div>

                {/* Linha Resumo (Clicável) */}
                <div className="px-6 py-5">
                    <div
                        className="flex justify-between items-center cursor-pointer group"
                        onClick={() => setIsOpenDay4(!isOpenDay4)}
                    >
                        <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            Reunião da Rede Interfederativa
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="hidden md:inline">14h – 18h30 | Sala 4, no ILAB</span>
                            {isOpenDay4 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                    </div>
                    {/* Fallback para mobile (mostra embaixo se a tela for pequena) */}
                    <p className="md:hidden text-xs text-gray-500 mt-1">14h – 17h30 | Sala 4, no ILAB</p>

                    {/* Timeline Expandida */}
                    {isOpenDay4 && (
                        <div className="mt-5 pt-6 border-t border-gray-100 relative">
                            <div className="absolute left-2.5 md:left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div>

                            <div className="relative pl-8 md:pl-10 space-y-8 pb-2">
                                {/* Item Único */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-2">
                                        <span className="text-sm font-bold text-blue-600 md:w-28 shrink-0">14h00 – 17h30</span>
                                        <h4 className="text-base font-bold text-gray-900">Reunião da Rede Interfederativa da Transferência Fundo a Fundo</h4>
                                    </div>
                                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 md:ml-32">
                                        <li>Execução dos recursos do FNSP</li>
                                        <li>Compartilhamento de boas práticas entre Entes Federados</li>
                                        <li>Pactuação 2026</li>
                                    </ul>
                                </div>
                                 {/* Item 2 */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-2">
                                        <span className="text-sm font-bold text-emerald-600 md:w-28 shrink-0">17h30 – 18h30</span>
                                        <h4 className="text-base font-bold text-gray-900">Reunião Dra. Camila Pintarelli - Palco 01</h4>
                                    </div>
                                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 md:ml-32">
                                        <li>Painel 13 - Tema: 25 anos do FNSP, Segurança e Investimento.</li>
                                    </ul>
                                </div>
                            </div>
                                   
                        </div>
                    )}
                </div>
            </div>

            {/* ================= CARD DIA 05 ================= */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Cabeçalho Padronizado */}
                <div className="bg-slate-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <h2 className="text-sm font-semibold text-slate-700">05 de março</h2>
                </div>

                {/* Linha Resumo (Clicável) */}
                <div className="px-6 py-5">
                    <div
                        className="flex justify-between items-center cursor-pointer group"
                        onClick={() => setIsOpenDay5(!isOpenDay5)}
                    >
                        <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            Oficina Técnica Gestão Segura
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="hidden md:inline">09h00 – 17h30 | Salas Modulares, no MJSP</span>
                            {isOpenDay5 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                    </div>
                    <p className="md:hidden text-xs text-gray-500 mt-1">09h00 – 17h30 | Salas Modulares, no MJSP</p>

                    {/* Timeline Expandida */}
                    {isOpenDay5 && (
                        <div className="mt-5 pt-6 border-t border-gray-100 relative">
                            <div className="absolute left-2.5 md:left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div>

                            <div className="relative pl-8 md:pl-10 space-y-8 pb-2">
                                {/* Item 1 */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-2">
                                        <span className="text-sm font-bold text-blue-600 md:w-28 shrink-0">09h00 – 12h00</span>
                                        <h4 className="text-base font-bold text-gray-900">Oficina Técnica – Gestão Segura (Manhã)</h4>
                                    </div>
                                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 md:ml-32">
                                        <li>Apresentação do Módulo do Plano de Aplicação no Sistema Gestão Segura</li>
                                        <li>Fluxos operacionais e funcionalidades</li>
                                        <li>Demonstração prática orientada</li>
                                    </ul>
                                </div>

                                {/* Item 2 */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-2">
                                        <span className="text-sm font-bold text-gray-700 md:w-28 shrink-0">14h00 – 17h30</span>
                                        <h4 className="text-base font-bold text-gray-900">Oficina Técnica – Gestão Segura (Tarde)</h4>
                                    </div>
                                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 md:ml-32">
                                        <li>Apresentação do Módulo do Relatório de Gestão (análise financeira) no Sistema Gestão Segura</li>
                                        <li>Demonstração prática orientada</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ================= CARD DIA 06 ================= */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Cabeçalho Padronizado */}
                <div className="bg-slate-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <h2 className="text-sm font-semibold text-slate-700">06 de março</h2>
                </div>

                {/* Linha Resumo (Clicável) */}
                <div className="px-6 py-5">
                    <div
                        className="flex justify-between items-center cursor-pointer group"
                        onClick={() => setIsOpenDay6(!isOpenDay6)}
                    >
                        <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            Lançamento dos Módulos do Plano de Aplicação e Gestão
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="hidden md:inline">09h00 – 11h30 | Auditório, no ILAB</span>
                            {isOpenDay6 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                    </div>
                    <p className="md:hidden text-xs text-gray-500 mt-1">09h00 – 11h30 | Auditório, no ILAB</p>

                    {/* Timeline Expandida */}
                    {isOpenDay6 && (
                        <div className="mt-5 pt-6 border-t border-gray-100 relative">
                            <div className="absolute left-2.5 md:left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div>

                            <div className="relative pl-8 md:pl-10 space-y-8 pb-2">
                                {/* Item 1 */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-2">
                                        <span className="text-sm font-bold text-blue-600 md:w-28 shrink-0">09h00 – 10h00</span>
                                        <h4 className="text-base font-bold text-gray-900">Cerimônia de Lançamento dos Módulos de Gestão</h4>
                                    </div>
                                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 md:ml-32">
                                        <li>Apresentação dos novos módulos do sistema</li>
                                        <li>Demonstração das funcionalidades estratégicas</li>
                                    </ul>
                                </div>

                                {/* Item 2 */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0.5 bg-white p-0.5">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-2">
                                        <span className="text-sm font-bold text-emerald-600 md:w-28 shrink-0">10h30 – 11h30</span>
                                        <h4 className="text-base font-bold text-gray-900">Ferramenta Transferegov</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
