import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  MapPin,
  Phone,
  Mail,
  Download,
  ExternalLink,
  Clock,
  MapPinIcon,
  Calendar,
  Briefcase,
  UtensilsCrossed,
  Plane,
  AlertCircle,
  CheckCircle2,
  UserSquare2
} from "lucide-react";
import { TravelProgressBar } from "@/components/TravelProgressBar";
import { ProgramacaoWizard } from "@/components/ProgramacaoWizard";
import { PrestacaoContasUpload } from "@/components/PrestacaoContasUpload";

/**
 * Design: Institucional Elegante com Modernidade Sutil
 * Paleta: Azul Marinho (#00375e), Branco (#ffffff), Dourado (#e1ad31)
 * Tipografia: Montserrat (títulos), Open Sans (corpo)
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("consespd");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const progressSteps = [
    { id: 'checkin', label: 'Check-in', status: 'completed' as const },
    { id: 'abertura', label: 'Abertura', status: 'current' as const },
    { id: 'programacao', label: 'Programação', status: 'upcoming' as const },
    { id: 'contas', label: 'Prestação de Contas', status: 'upcoming' as const },
  ];

  return (
    <div className="min-h-screen bg-site text-foreground font-sans selection:bg-accent selection:text-primary">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 header-gradient shadow-lg">
        <div className="container py-4 flex items-center gap-8">
          {/* Logo + barra amarela */}
          <div className="flex items-center gap-3 shrink-0">
            <img src="/fnsp.png" alt="FNSP" className="h-20 w-auto object-contain" />
            <div className="w-1.5 h-10 bg-accent rounded-full" aria-hidden="true"></div>
          </div>

          {/* Desktop Nav — alinhado à esquerda */}
          <nav className="hidden md:flex gap-8" aria-label="Navegação principal">
            <a href="#programacao" className="text-white/80 hover:text-accent font-medium transition-all duration-300">Programação</a>
            <a href="#passagens" className="text-white/80 hover:text-accent font-medium transition-all duration-300">Diárias</a>
            <a href="#contas" className="text-white/80 hover:text-accent font-medium transition-all duration-300">Prestação</a>
            <a href="#roteiro" className="text-white/80 hover:text-accent font-medium transition-all duration-300">Roteiro</a>
            <a href="#regras" className="text-white/80 hover:text-accent font-medium transition-all duration-300">Regras</a>
            <a href="#contato" className="text-white/80 hover:text-accent font-medium transition-all duration-300">Contatos</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <nav id="mobile-nav" className="md:hidden border-t border-white/10 px-4 pb-4" aria-label="Navegação mobile">
            {[
              { href: "#programacao", label: "Programação" },
              { href: "#passagens", label: "Diárias" },
              { href: "#contas", label: "Prestação de Contas" },
              { href: "#roteiro", label: "Roteiro" },
              { href: "#regras", label: "Regras" },
              { href: "#contato", label: "Contatos" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-white/80 hover:text-accent font-medium border-b border-white/5 transition-all"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="pb-24">


        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          {/* Background Overlay Wrapper */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/70 z-10"></div>
            <img
              src="/expo.jpeg"
              alt="Expo São Paulo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container relative z-20">
            <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-bold rounded-full text-base tracking-widest uppercase">
                  SÃO PAULO 11 - 12 - 13 AGOSTO
                </span>
                <h1 className="text-lg sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  2º Encontro Nacional <br />
                  <span className="text-accent underline decoration-white/20 underline-offset-8">ComprasSusp 2026</span>
                </h1>
                <p className="text-base sm:text-xl text-white/80 leading-relaxed font-light">
                  A excelência na gestão de contratações e aquisições fortalecendo a segurança pública em todo o Brasil.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
                    <span className="font-semibold text-base sm:text-lg">São Paulo/SP</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild className="h-11 sm:h-14 px-6 sm:px-10 text-base sm:text-lg shadow-xl bg-accent text-primary font-bold hover:bg-accent/90 rounded-md transition-all">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Expo+São+Paulo+Rodovia+dos+Imigrantes"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver localização do Expo São Paulo no Google Maps (abre em nova janela)"
                    >
                      <MapPinIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                      Localização Expo São Paulo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            </div>
        </section>

        {/* Programação Section */}
        <section id="programacao" className="container pt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-10 bg-accent rounded-full"></div>
            <div>
              <h2 className="text-4xl font-bold text-primary">Programação</h2>
              <p className="text-primary/60 font-medium">Cronograma detalhado por grupo de trabalho</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <ProgramacaoWizard />
          </div>
        </section>

        {/* Passagens e Diárias Section */}
        <section id="passagens" className="container pt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-10 bg-accent rounded-full"></div>
            <div>
              <h2 className="text-4xl font-bold text-primary">Passagens e Diárias</h2>
              <p className="text-primary/60 font-medium">Informações essenciais para sua viagem</p>
            </div>
          </div>

          <Card className="card-premium">
            <CardContent className="p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-sm text-primary font-bold uppercase tracking-wider mb-2">Valor da Diária</p>
                  <p className="text-3xl font-bold text-primary">R$ 425,00</p>
                </div>
                <div className="p-6 bg-accent/10 rounded-xl border border-accent/20">
                  <p className="text-sm text-primary font-bold uppercase tracking-wider mb-2">Adicional Embarque</p>
                  <p className="text-3xl font-bold text-primary">R$ 95,00</p>
                  <p className="text-xs text-primary/60 mt-1">Taxa única por trecho</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </section>

        {/* Prestação de Contas Section */}
        <section id="contas" className="container pt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-10 bg-accent rounded-full"></div>
            <div>
              <h2 className="text-4xl font-bold text-primary">Prestação de Contas</h2>
              <p className="text-primary/60 font-medium">Informações obrigatórias pós-evento</p>
            </div>
          </div>

          <Card className="card-premium border-accent/30 bg-accent/20">
            <CardContent className="p-6 sm:p-12">
              <PrestacaoContasUpload />
            </CardContent>
          </Card>
        </section>

        {/* Traje Section */}
        <section id="regras" className="container pt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-10 bg-accent rounded-full"></div>
            <div>
              <h2 className="text-4xl font-bold text-primary">Traje</h2>
              <p className="text-primary/60 font-medium">Conduta de vestimenta</p>
            </div>
          </div>

          <Card className="card-premium">
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                À critério de cada instituição integrante do Sistema Único de Segurança Pública.
              </p>
            </CardContent>
          </Card>
        </section>


        {/* Roteiro Cultural Section */}
        <section id="roteiro" className="container pt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-10 bg-accent rounded-full"></div>
            <div>
              <h2 className="text-4xl font-bold text-primary">São Paulo: Guia Rápido</h2>
              <p className="text-gray-500 font-medium">Cultura e Gastronomia em São Paulo</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-premium md:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UtensilsCrossed className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-primary">Roteiro Recomendado — São Paulo</CardTitle>
                    <CardDescription>Gastronomia e pontos de destaque próximos para os participantes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Opção 1 */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl group hover:bg-white hover:shadow-md transition-all border border-gray-100">
                    <div className="w-2.5 h-2.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-bold text-primary text-base">Jardim de Napoli (Moema)</p>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1">
                        Cantina italiana tradicional, famosa pelo polpettone. Clima acolhedor, a 15-20 min da Expo.
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Jardim+de+Napoli+Moema+Sao+Paulo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent font-bold hover:underline mt-2"
                      >
                        <MapPin className="w-3.5 h-3.5" /> Ver no Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Opção 2 */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl group hover:bg-white hover:shadow-md transition-all border border-gray-100">
                    <div className="w-2.5 h-2.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-bold text-primary text-base">A Figueira Rubaiyat (Jardins)</p>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1">
                        Ícone paulistano de carnes nobres, ambiente elegante ao redor de uma figueira centenária.
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=A+Figueira+Rubaiyat+Jardins+Sao+Paulo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent font-bold hover:underline mt-2"
                      >
                        <MapPin className="w-3.5 h-3.5" /> Ver no Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Opção 3 */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl group hover:bg-white hover:shadow-md transition-all border border-gray-100">
                    <div className="w-2.5 h-2.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-bold text-primary text-base">Ristorantino (Jardins)</p>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1">
                        Italiana sofisticada em clima intimista, ideal para uma noite mais tranquila.
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Ristorantino+Jardins+Sao+Paulo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent font-bold hover:underline mt-2"
                      >
                        <MapPin className="w-3.5 h-3.5" /> Ver no Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Opção 4 */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl group hover:bg-white hover:shadow-md transition-all border border-gray-100">
                    <div className="w-2.5 h-2.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-bold text-primary text-base">Skye Bar & Restaurante (Hotel Unique)</p>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1">
                        No topo do Hotel Unique, com uma das vistas mais bonitas da cidade. Ótimo para fechar a noite.
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Skye+Bar+Hotel+Unique+Sao+Paulo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent font-bold hover:underline mt-2"
                      >
                        <MapPin className="w-3.5 h-3.5" /> Ver no Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Opção 5 */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl group hover:bg-white hover:shadow-md transition-all border border-gray-100 sm:col-span-2">
                    <div className="w-2.5 h-2.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-bold text-primary text-base">Japan House + Avenida Paulista</p>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1">
                        Passeio noturno pela Paulista, visita à Japan House e jantar na região.
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Japan+House+Avenida+Paulista+Sao+Paulo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent font-bold hover:underline mt-2"
                      >
                        <MapPin className="w-3.5 h-3.5" /> Ver no Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="container pt-24">
          <Card className="bg-primary overflow-hidden border-none shadow-2xl">
            <div>
              <div className="p-6 sm:p-12 lg:p-16 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-4xl font-bold text-white">Precisa de Suporte?</h2>
                  <p className="text-white/70 text-base sm:text-lg">
                    Estamos à disposição para ajudar com qualquer dúvida sobre o evento ou programação.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {/* Bloco 1 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-accent font-bold">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      CONVÊNIOS
                    </div>
                    <div className="space-y-4">
                      <a
                        href="https://wa.me/5541996167578"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-2 px-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg group hover:bg-[#25D366]/20 transition-all w-fit"
                        aria-label="WhatsApp: (41) 99616-7578 (abre em nova janela)"
                      >
                        <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.583h.005c6.635 0 12.03-5.394 12.033-12.031 0-3.212-1.25-6.231-3.518-8.498"></path>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#25D366] font-bold text-lg leading-tight">(41) 99616-7578</span>
                          <span className="text-white/50 text-[10px] uppercase tracking-wider font-bold">WhatsApp</span>
                        </div>
                      </a>
                      <a
                        href="https://wa.me/5561996616928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-2 px-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg group hover:bg-[#25D366]/20 transition-all w-fit"
                        aria-label="WhatsApp: (61) 99661-6928 (abre em nova janela)"
                      >
                        <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.583h.005c6.635 0 12.03-5.394 12.033-12.031 0-3.212-1.25-6.231-3.518-8.498"></path>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#25D366] font-bold text-lg leading-tight">(61) 99661-6928</span>
                          <span className="text-white/50 text-[10px] uppercase tracking-wider font-bold">WhatsApp</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Bloco 2 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-accent font-bold">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      FUNDO A FUNDO
                    </div>
                    <div className="space-y-4">
                      <a
                        href="https://wa.me/5551982943353"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-2 px-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg group hover:bg-[#25D366]/20 transition-all w-fit"
                        aria-label="WhatsApp: (51) 98294-3353 (abre em nova janela)"
                      >
                        <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.583h.005c6.635 0 12.03-5.394 12.033-12.031 0-3.212-1.25-6.231-3.518-8.498"></path>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#25D366] font-bold text-lg leading-tight">(51) 98294-3353</span>
                          <span className="text-white/50 text-[10px] uppercase tracking-wider font-bold">WhatsApp</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-accent font-bold">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      LOGÍSTICA
                    </div>
                    <div className="space-y-4">
                      <a
                        href="https://wa.me/5585987655958"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-2 px-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg group hover:bg-[#25D366]/20 transition-all w-fit"
                        aria-label="WhatsApp Logística"
                      >
                        <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.583h.005c6.635 0 12.03-5.394 12.033-12.031 0-3.212-1.25-6.231-3.518-8.498"></path>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#25D366] font-bold text-lg leading-tight">(85) 98765-5958</span>
                          <span className="text-white/50 text-[10px] uppercase tracking-wider font-bold">WhatsApp</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Bloco 4 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-accent font-bold">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      ORÇAMENTO
                    </div>
                    <div className="space-y-3">
                      {/* Telefone Fixo */}
                      <div className="flex items-center gap-3 py-2 px-4 bg-white/5 border border-white/10 rounded-lg w-fit">
                        <Phone className="w-4 h-4 text-accent" />
                        <div className="flex flex-col">
                          <span className="text-white font-bold text-lg leading-tight">(61) 2025-9296 / 3965</span>
                          <span className="text-white/50 text-[10px] uppercase tracking-wider font-bold">Telefone Fixo</span>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/5562985573787"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-2 px-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg group hover:bg-[#25D366]/20 transition-all w-fit"
                        aria-label="WhatsApp Orçamento"
                      >
                        <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.583h.005c6.635 0 12.03-5.394 12.033-12.031 0-3.212-1.25-6.231-3.518-8.498"></path>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#25D366] font-bold text-lg leading-tight">(62) 98557-3787</span>
                          <span className="text-white/50 text-[10px] uppercase tracking-wider font-bold">WhatsApp</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>


              </div>


            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                <h3 className="text-lg font-bold text-primary tracking-tight">2º Encontro Nacional ComprasSusp 2026</h3>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                A excelência na gestão de contratações e aquisições fortalecendo a segurança pública em todo o Brasil.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Organização</p>
              <p className="text-base font-semibold text-primary">SENASP - Secretaria Nacional de Segurança Pública</p>
              <p className="text-xs text-gray-500">Governo Federal do Brasil</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 font-medium">
              © 2026 Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs text-gray-500 font-medium">
              <span className="hover:text-primary cursor-default">Privacidade</span>
              <span className="hover:text-primary cursor-default">Termos de Uso</span>
              <span className="hover:text-primary cursor-default">Acessibilidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}
