import React, { useState } from "react";
import { Clock, MapPin, Coffee, Sparkles, Building, CalendarDays, ChevronRight } from "lucide-react";

interface SubItem {
  time: string;
  title: string;
  speaker?: string;
}

interface ScheduleItem {
  time: string;
  title: string;
  room?: string;
  description?: string;
  isBreak?: boolean;
  isHighlight?: boolean;
  subItems?: SubItem[];
}

interface DaySchedule {
  dateLabel: string;
  dayNumber: string;
  morning: ScheduleItem[];
  afternoon: ScheduleItem[];
}

interface GroupScheduleViewerProps {
  groupKey: "CONSESP" | "CNCG" | "CNPC" | "CONDPCI" | "LIGABOM";
  groupTitle: string;
  groupDescription: string;
}

export function GroupScheduleViewer({ groupKey, groupTitle, groupDescription }: GroupScheduleViewerProps) {
  const [selectedDay, setSelectedDay] = useState<"11" | "12" | "13">("11");

  const fnspSubItems: SubItem[] = [
    {
      time: "14:30h às 15:15h (45 min)",
      title: "Fundo Nacional de Segurança Pública",
      speaker: "Dra. Camila Pintarelli",
    },
    {
      time: "15:15h às 16:00h (45 min)",
      title: "DEBATE: Captação e Execução de Recursos",
      speaker: "Cel. Washington (Captação e execução no âmbito do Corpo de Bombeiros em Goiás) & TC. Bruno Arins (Captação de recursos na PMMG)",
    },
    {
      time: "16:00h às 16:50h (50 min)",
      title: "Recuperação e Gestão de Ativos",
      speaker: "Dr. Laurence Tanikawa e Dr. Ricardo Gurgel",
    },
    {
      time: "16:50h às 17:20h (30 min)",
      title: "Centro de Integridade, Compliance e Accountability na Segurança Pública",
      speaker: "USP",
    },
  ];

  const fnspAfternoonItem: ScheduleItem[] = [
    {
      time: "14:30h às 17:30h",
      title: "PAINEL FNSP",
      room: "Plenária",
      isHighlight: true,
      subItems: fnspSubItems,
    },
  ];

  const schedules: Record<string, Record<"11" | "12" | "13", DaySchedule>> = {
    CONSESP: {
      "11": {
        dateLabel: "Terça-feira",
        dayNumber: "11/AGO",
        morning: [],
        afternoon: [
          {
            time: "13h às 14:30h",
            title: "ABERTURA DO COP 2026",
            room: "Plenária",
            isHighlight: true,
          },
          {
            time: "14:45h às 16:15h",
            title: "CONSESP",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 01",
            isHighlight: true,
          },
          {
            time: "16:15h às 16:30h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "16:30h às 18h",
            title: "CONSESP",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 01",
            isHighlight: true,
          },
        ],
      },
      "12": {
        dateLabel: "Quarta-feira",
        dayNumber: "12/AGO",
        morning: [
          {
            time: "10h às 12h",
            title: "Oficina Prática de Análise e Geoprocessamento",
            room: "Feira",
            isHighlight: true,
          },
        ],
        afternoon: fnspAfternoonItem,
      },
      "13": {
        dateLabel: "Quinta-feira",
        dayNumber: "13/AGO",
        morning: [
          {
            time: "9h às 10:30h",
            title: "CONSESP",
            description: "Reunião de Planejamento - Ciclo 2027",
            room: "Sala 04",
            isHighlight: true,
          },
          {
            time: "10:30h às 10:45h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "10:45h às 12:15h",
            title: "CONSESP",
            description: "Reunião de Planejamento - Ciclo 2027",
            room: "Sala 04",
            isHighlight: true,
          },
        ],
        afternoon: [
          {
            time: "14h às 18h",
            title: "Prospecção de Tecnologia",
            room: "Feira",
            isHighlight: true,
          },
        ],
      },
    },

    CNCG: {
      "11": {
        dateLabel: "Terça-feira",
        dayNumber: "11/AGO",
        morning: [],
        afternoon: [
          {
            time: "13h às 14:30h",
            title: "ABERTURA DO COP 2026",
            room: "Plenária",
            isHighlight: true,
          },
          {
            time: "14:45h às 16:15h",
            title: "CNCG",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 02",
            isHighlight: true,
          },
          {
            time: "16:15h às 16:30h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "16:30h às 18h",
            title: "CNCG",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 02",
            isHighlight: true,
          },
        ],
      },
      "12": {
        dateLabel: "Quarta-feira",
        dayNumber: "12/AGO",
        morning: [
          {
            time: "10h às 12h",
            title: "Oficina Prática de Equipamentos não letais",
            isHighlight: true,
          },
        ],
        afternoon: fnspAfternoonItem,
      },
      "13": {
        dateLabel: "Quinta-feira",
        dayNumber: "13/AGO",
        morning: [
          {
            time: "9h às 10:30h",
            title: "CNCG",
            description: "Reunião de Planejamento - Ciclo 2027",
            room: "Sala 02",
            isHighlight: true,
          },
          {
            time: "10:30h às 10:45h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "10:45h às 12:15h",
            title: "CNCG",
            description: "Reunião de Planejamento - Ciclo 2027",
            room: "Sala 02",
            isHighlight: true,
          },
        ],
        afternoon: [
          {
            time: "14h às 18h",
            title: "Prospecção de Tecnologia",
            room: "Feira",
            isHighlight: true,
          },
        ],
      },
    },

    CNPC: {
      "11": {
        dateLabel: "Terça-feira",
        dayNumber: "11/AGO",
        morning: [
          {
            time: "9h às 10:30h",
            title: "CNPC",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 04",
            isHighlight: true,
          },
          {
            time: "10:30h às 10:45h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "10:45h às 12:15h",
            title: "CNPC",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 04",
            isHighlight: true,
          },
        ],
        afternoon: [
          {
            time: "13h às 14:30h",
            title: "ABERTURA DO COP 2026",
            room: "Plenária",
            isHighlight: true,
          },
        ],
      },
      "12": {
        dateLabel: "Quarta-feira",
        dayNumber: "12/AGO",
        morning: [
          {
            time: "9h às 10:30h",
            title: "CNPC",
            description: "Reunião de Planejamento - Ciclo 2027",
            room: "Sala 04",
            isHighlight: true,
          },
          {
            time: "10:30h às 10:45h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "10:45h às 12:15h",
            title: "CNPC",
            description: "Reunião de Planejamento - Ciclo 2027",
            room: "Sala 04",
            isHighlight: true,
          },
        ],
        afternoon: fnspAfternoonItem,
      },
      "13": {
        dateLabel: "Quinta-feira",
        dayNumber: "13/AGO",
        morning: [
          {
            time: "9h às 12h",
            title: "Prospecção de Tecnologia",
            room: "Feira",
            isHighlight: true,
          },
        ],
        afternoon: [
          {
            time: "14h às 18h",
            title: "Prospecção de Tecnologia",
            room: "Feira",
            isHighlight: true,
          },
        ],
      },
    },

    CONDPCI: {
      "11": {
        dateLabel: "Terça-feira",
        dayNumber: "11/AGO",
        morning: [],
        afternoon: [
          {
            time: "13h às 14:30h",
            title: "ABERTURA DO COP 2026",
            room: "Plenária",
            isHighlight: true,
          },
          {
            time: "14:45h às 16:15h",
            title: "CONDPCI",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 04",
            isHighlight: true,
          },
          {
            time: "16:15h às 16:30h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "16:30h às 18h",
            title: "CONDPCI",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 04",
            isHighlight: true,
          },
          {
            time: "18h às 19h",
            title: "Apresentação do projeto SINAPSE",
            description: "Dir. do INC PCF Palhares",
            room: "Sala 04",
            isHighlight: true,
          },
        ],
      },
      "12": {
        dateLabel: "Quarta-feira",
        dayNumber: "12/AGO",
        morning: [
          {
            time: "10h às 12h",
            title: "Visitação no Instituto de Criminalística de SP",
            isHighlight: true,
          },
        ],
        afternoon: fnspAfternoonItem,
      },
      "13": {
        dateLabel: "Quinta-feira",
        dayNumber: "13/AGO",
        morning: [
          {
            time: "9h às 12h",
            title: "Prospecção de Tecnologia",
            room: "Feira",
            isHighlight: true,
          },
        ],
        afternoon: [
          {
            time: "14h às 15:30h",
            title: "CONDPCI",
            description: "Reunião de Planejamento - Ciclo 2027",
            room: "Sala 01",
            isHighlight: true,
          },
          {
            time: "15:30h às 15:45h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "15:45h às 18h",
            title: "CONDPCI",
            description: "Reunião de Planejamento - Ciclo 2027",
            room: "Sala 01",
            isHighlight: true,
          },
        ],
      },
    },

    LIGABOM: {
      "11": {
        dateLabel: "Terça-feira",
        dayNumber: "11/AGO",
        morning: [],
        afternoon: [
          {
            time: "13h às 14:30h",
            title: "ABERTURA DO COP 2026",
            room: "Plenária",
            isHighlight: true,
          },
          {
            time: "14:45h às 16:15h",
            title: "LIGABOM",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 03",
            isHighlight: true,
          },
          {
            time: "16:15h às 16:30h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "16:30h às 18h",
            title: "LIGABOM",
            description: "Prospecção de tecnologia e conhecimento de inovações no âmbito do Susp",
            room: "Sala 03",
            isHighlight: true,
          },
        ],
      },
      "12": {
        dateLabel: "Quarta-feira",
        dayNumber: "12/AGO",
        morning: [],
        afternoon: fnspAfternoonItem,
      },
      "13": {
        dateLabel: "Quinta-feira",
        dayNumber: "13/AGO",
        morning: [
          {
            time: "9h às 10:30h",
            title: "LIGABOM",
            room: "Sala 03",
          },
          {
            time: "10:30h às 10:45h",
            title: "INTERVALO",
            isBreak: true,
          },
          {
            time: "10:45h às 12:15h",
            title: "LIGABOM",
            room: "Sala 03",
          },
        ],
        afternoon: [],
      },
    },
  };

  const currentSchedule = schedules[groupKey]?.[selectedDay];

  const renderItem = (item: ScheduleItem, idx: number) => {
    // Se o item tiver sub-itens (como o PAINEL FNSP)
    if (item.subItems && item.subItems.length > 0) {
      return (
        <div
          key={idx}
          className="p-5 sm:p-6 bg-gradient-to-br from-blue-50/90 via-slate-50 to-amber-50/40 rounded-2xl border border-blue-200 shadow-md space-y-4"
        >
          {/* Cabeçalho do Card Principal */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-200/60 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-primary font-black shrink-0">
                <Building className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium">Painel Integrado de Temas</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold">
              {item.room && (
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 shadow-sm flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  {item.room}
                </span>
              )}
              <span className="px-3 py-1 bg-primary text-white rounded-lg shadow-sm">
                {item.time}
              </span>
            </div>
          </div>

          {/* Lista Estruturada dos 4 Temas Internos */}
          <div className="grid gap-2.5 pt-1">
            {item.subItems.map((sub, sIdx) => (
              <div
                key={sIdx}
                className="p-3.5 bg-white/90 rounded-xl border border-slate-200/80 shadow-xs hover:border-accent/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-start gap-2.5">
                  <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 text-sm block">{sub.title}</span>
                    {sub.speaker && (
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">{sub.speaker}</p>
                    )}
                  </div>
                </div>

                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-bold text-xs rounded-md shrink-0 self-start sm:self-center">
                  {sub.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Card Padrão para os outros eventos
    return (
      <div
        key={idx}
        className={`p-4 rounded-xl border transition-all ${
          item.isBreak
            ? "bg-amber-50/60 border-amber-200 text-amber-900"
            : item.isHighlight
            ? "bg-blue-50/80 border-blue-200 shadow-sm"
            : "bg-slate-50/60 border-slate-200"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-start sm:items-center gap-3">
            {item.isBreak ? (
              <Coffee className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
            ) : (
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
            )}
            <div>
              <span className="font-bold text-slate-900 text-base">{item.title}</span>
              {item.description && (
                <p className="text-xs text-slate-600 font-medium mt-0.5">{item.description}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-xs font-semibold">
            {item.room && (
              <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-700 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {item.room}
              </span>
            )}
            <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-md font-bold">
              {item.time}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho Limpo — Apenas Seleção de Dias do Evento */}
      <div className="bg-gradient-to-r from-primary to-slate-900 p-4 rounded-2xl shadow-md border border-primary/20 flex items-center justify-center">
        <div className="flex items-center gap-3 bg-white/10 p-2 rounded-xl border border-white/10">
          {(["11", "12", "13"] as const).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-lg font-extrabold text-sm transition-all flex items-center gap-2 ${
                selectedDay === day
                  ? "bg-accent text-primary shadow-lg scale-105"
                  : "text-white/80 hover:bg-white/15"
              }`}
            >
              <CalendarDays className="w-4 h-4" />
              {day}/AGO
            </button>
          ))}
        </div>
      </div>

      {/* Exibição do Dia Selecionado */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-bold text-slate-800">
              {currentSchedule?.dayNumber} — {currentSchedule?.dateLabel}
            </h3>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
            Expo São Paulo
          </span>
        </div>

        {/* Seção Manhã */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> MANHÃ
          </h4>

          {currentSchedule?.morning && currentSchedule.morning.length > 0 ? (
            <div className="space-y-3">
              {currentSchedule.morning.map(renderItem)}
            </div>
          ) : (
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-400 italic">
              Sem sessões específicas agendadas para o período da manhã.
            </div>
          )}
        </div>

        {/* Seção Tarde */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span> TARDE
          </h4>

          {currentSchedule?.afternoon && currentSchedule.afternoon.length > 0 ? (
            <div className="space-y-3">
              {currentSchedule.afternoon.map(renderItem)}
            </div>
          ) : (
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-400 italic">
              Sem sessões específicas agendadas para o período da tarde.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
