import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, CheckCircle2, User, Users, Coffee, Info, MapPin } from 'lucide-react';

export function ScheduleOrcamento() {
    const [isOpenDay4, setIsOpenDay4] = useState(false);
    const [isOpenDay5, setIsOpenDay5] = useState(false);
    const [isOpenDay6, setIsOpenDay6] = useState(false);

    return (
        <div className="w-full space-y-4 font-sans text-gray-800 pb-8">

            {/* ================= CARD DIA 04 ================= */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-slate-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <h2 className="text-sm font-semibold text-slate-700">04 de março</h2>
                </div>

                <div className="px-6 py-5">
                    <div
                        className="flex justify-between items-center cursor-pointer group"
                        onClick={() => setIsOpenDay4(!isOpenDay4)}
                    >
                        <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            Visitas Técnicas e Reunião Institucional
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="hidden md:inline">08h00 – 18h30 | INC / iLab-Seg</span>
                            {isOpenDay4 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                    </div>
                    <p className="md:hidden text-xs text-gray-500 mt-1">08h00 – 18h30 | INC / iLab-Seg</p>

                    {isOpenDay4 && (
                        <div className="mt-5 pt-6 border-t border-gray-100 relative">
                            <div className="absolute left-2.5 md:left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div>

                            <div className="relative pl-8 md:pl-10 space-y-8 pb-4">
                                {/* Translado / INC */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-1">
                                        <span className="text-sm font-bold text-blue-600 md:w-28 shrink-0">08h00 - 12h00</span>
                                        <h4 className="text-base font-bold text-gray-900">Visita ao Instituto Nacional de Criminalística - INC</h4>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex items-start gap-2 md:ml-32">
                                        <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            <span className="font-bold text-blue-700">Translado:</span> Saída às 08h da Sede do Ministério da Justiça e Segurança Pública.
                                        </p>
                                    </div>
                                </div>

                                {/* iLab-Seg */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-1">
                                        <span className="text-sm font-bold text-gray-700 md:w-28 shrink-0">14h00 - 17h00</span>
                                        <h4 className="text-base font-bold text-gray-900">Visita ao iLab-Seg</h4>
                                    </div>
                                </div>

                                {/* Reunião Dra. Camila */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-1">
                                        <span className="text-sm font-bold text-blue-600 md:w-28 shrink-0">17h30 - 18h30</span>
                                        <h4 className="text-base font-bold text-gray-900">Reunião Dra. Camila Pintarelli - Palco 01</h4>
                                    </div>
                                    <div className="text-sm text-gray-600 md:ml-32">
                                        <p>Painel 13 - Tema: 25 anos do FNSP, Segurança e Investimento.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ================= CARD DIA 05 ================= */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-slate-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <h2 className="text-sm font-semibold text-slate-700">05 de março</h2>
                </div>

                <div className="px-6 py-5">
                    <div
                        className="flex justify-between items-center cursor-pointer group"
                        onClick={() => setIsOpenDay5(!isOpenDay5)}
                    >
                        <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            Participação no ILAB e Oficinas Temáticas
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="hidden md:inline">09h00 – 17h00 | ILAB</span>
                            {isOpenDay5 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                    </div>
                    <p className="md:hidden text-xs text-gray-500 mt-1">09h00 – 17h00 | ILAB</p>

                    {isOpenDay5 && (
                        <div className="mt-5 pt-6 border-t border-gray-100 relative">
                            <div className="absolute left-2.5 md:left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div>

                            <div className="relative pl-8 md:pl-10 space-y-8 pb-4">
                                {/* Agenda Geral */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-1">
                                        <span className="text-sm font-bold text-gray-700 md:w-28 shrink-0">09h00 - 17h00</span>
                                        <h4 className="text-base font-bold text-gray-900">Participação no ILAB e Oficinas Temáticas</h4>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-2 md:ml-32">
                                        <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                        <p className="text-xs text-blue-800 leading-relaxed">
                                            Agenda a organizar, de acordo com a data de chegada, a quantidade de pontos focais e a disponibilidade de lugares nas salas.
                                        </p>
                                    </div>
                                </div>

                                {/* Mesa Redonda APCF */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-1">
                                        <span className="text-sm font-bold text-blue-600 md:w-28 shrink-0">17h30</span>
                                        <h4 className="text-base font-bold text-gray-900">Mesa Redonda - Sede da APCF</h4>
                                    </div>
                                    <div className="text-sm text-gray-600 md:ml-32 space-y-2">
                                        <p className="font-medium text-gray-800">Protagonismo do ComprasSusp na Modernização da PCI</p>
                                        <a
                                            href="https://www.google.com/maps/search/St.+de+Habita%C3%A7%C3%B5es+Individuais+Sul+QI+9+Conjunto+11+Casa+20+-+Lago+Sul,+Bras%C3%ADlia+-+DF,+71625-110"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-bold text-xs"
                                        >
                                            <MapPin className="w-3.5 h-3.5" />
                                            Ver no Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ================= CARD DIA 06 ================= */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-slate-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <h2 className="text-sm font-semibold text-slate-700">06 de março</h2>
                </div>

                <div className="px-6 py-5">
                    <div
                        className="flex justify-between items-center cursor-pointer group"
                        onClick={() => setIsOpenDay6(!isOpenDay6)}
                    >
                        <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            Reunião das Câmaras Técnicas de Orçamento
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="hidden md:inline">08h30 – 12h30 | Salão modular, MJSP</span>
                            {isOpenDay6 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                    </div>
                    <p className="md:hidden text-xs text-gray-500 mt-1">08h30 – 12h30 | Salão modular, MJSP</p>

                    {/* Timeline Expandida */}
                    {isOpenDay6 && (
                        <div className="mt-5 pt-6 border-t border-gray-100 relative">
                            <div className="absolute left-2.5 md:left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div>

                            <div className="relative pl-8 md:pl-10 space-y-8 pb-4">

                                {/* 08:30 */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline">
                                        <span className="text-sm font-bold text-blue-600 md:w-28 shrink-0">08h30 - 08h40</span>
                                        <h4 className="text-base font-bold text-gray-900">Abertura</h4>
                                    </div>
                                </div>

                                {/* 08:40 */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-1">
                                        <span className="text-sm font-bold text-gray-700 md:w-28 shrink-0">08h40 - 09h30</span>
                                        <h4 className="text-base font-bold text-gray-900">Captação e Execução de emendas parlamentares e cases de sucesso da SESP Paraná</h4>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-gray-500 md:ml-32">
                                        <User className="w-4 h-4" />
                                        <span>Major João Claudio Schena</span>
                                    </div>
                                </div>

                                {/* 09:30 */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-1">
                                        <span className="text-sm font-bold text-gray-700 md:w-28 shrink-0">09h30 - 10h20</span>
                                        <h4 className="text-base font-bold text-gray-900">Captação de recursos do FUNAD e apresentação de projetos financiados</h4>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-gray-500 md:ml-32">
                                        <Users className="w-4 h-4" />
                                        <span>João Ambrósio e Nathália</span>
                                    </div>
                                </div>

                                {/* Intervalo */}
                                <div className="relative">
                                    <div className="absolute -left-8 md:-left-9 top-0 bg-white p-1">
                                        <Coffee className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex flex-col md:flex-row md:gap-4 md:items-center">
                                        <span className="text-sm font-bold text-gray-500 md:w-28 shrink-0">10h20 - 10h35</span>
                                        <h4 className="text-sm font-bold text-gray-700">Intervalo</h4>
                                    </div>
                                </div>

                                {/* 10:35 */}
                                <div className="relative">
                                    <div className="absolute -left-7 md:-left-8 top-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-1">
                                        <span className="text-sm font-bold text-gray-700 md:w-28 shrink-0">10h35 - 11h25</span>
                                        <h4 className="text-base font-bold text-gray-900 leading-snug">
                                            Captação e Execução de Emendas Parlamentares em outras pastas pelo Corpo de Bombeiros Militar de Minas Gerais e cases de sucesso
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-gray-500 md:ml-32 mt-1">
                                        <User className="w-4 h-4" />
                                        <span>Tenente-Coronel Douglas</span>
                                    </div>
                                </div>

                                {/* 11:25 (Encerramento) */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0.5 bg-white p-0.5">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div className="flex flex-col md:flex-row md:gap-4 md:items-baseline mb-1">
                                        <span className="text-sm font-bold text-emerald-600 md:w-28 shrink-0">11h25 - 12h25</span>
                                        <h4 className="text-base font-bold text-gray-900 leading-snug">
                                            Apresentação e Execução de projetos no Fundo de Defesa dos Direitos Difusos - FDD
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-gray-500 md:ml-32 mt-1">
                                        <User className="w-4 h-4" />
                                        <span>PRF Alisson</span>
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
