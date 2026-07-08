import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

const GREEN = "#22C55E";
const AMBER = "#F59E0B";

const SERVICES = [
  { name: "API", uptime: "99.98%" },
  { name: "Checkout & Link de pagamento", uptime: "99.97%" },
  { name: "Pix", uptime: "99.99%" },
  { name: "Cartões (crédito/débito)", uptime: "99.96%" },
  { name: "Boleto", uptime: "99.98%" },
  { name: "Dashboard", uptime: "99.99%" },
  { name: "Saques", uptime: "99.97%" },
];

const INCIDENTS = [
  {
    date: "12 jun 2026",
    title: "Latência elevada na API de cobranças",
    status: "Resolvido",
    desc: "Aumento de latência em parte das requisições por ~14 min. Identificado e mitigado; nenhuma transação foi perdida.",
  },
  {
    date: "28 mai 2026",
    title: "Instabilidade intermitente no Checkout",
    status: "Resolvido",
    desc: "Erro intermitente no carregamento do checkout por ~8 min, causado por um deploy revertido em seguida.",
  },
];

// Determinístico (sem Math.random) p/ não quebrar a hidratação SSR.
// Cada serviço tem ~1 dia "degradado" nos últimos 90 dias.
function dayStatus(serviceIdx: number, dayIdx: number) {
  return (dayIdx * 13 + serviceIdx * 29) % 97 === 0 ? "degraded" : "up";
}

function UptimeBars({ idx }: { idx: number }) {
  return (
    <div className="flex h-9 items-stretch gap-px">
      {Array.from({ length: 90 }, (_, d) => {
        const up = dayStatus(idx, d) === "up";
        return (
          <div
            key={d}
            className="min-w-0 flex-1 rounded-[1px]"
            title={up ? "Operacional" : "Degradado"}
            style={{ backgroundColor: up ? GREEN : AMBER, opacity: up ? 0.8 : 1 }}
          />
        );
      })}
    </div>
  );
}

function StatusPage() {
  return (
    <>
      <Nav solid />
      <main id="conteudo" className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="lg:-ml-24 xl:-ml-40">
          <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">/ Status</div>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Status do sistema</h1>
          <p className="mt-3 text-muted-foreground">Acompanhe, em tempo real, a disponibilidade e o desempenho de todos os serviços da Nummo — API, Checkout, Links de Pagamento, PIX, cartões, boleto, dashboard e saques. Transparência total para você operar com segurança e previsibilidade.</p>
        </div>

        <div className="mt-14 lg:mt-[98px] lg:-ml-12 lg:-mr-16 xl:-ml-24 xl:-mr-28">
        {/* Banner geral */}
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[#22C55E]/25 bg-[#22C55E]/10 px-5 py-4">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#22C55E] opacity-70" />
            <span className="relative inline-flex size-2.5 rounded-full bg-[#22C55E]" />
          </span>
          <span className="font-medium">Todos os sistemas operacionais</span>
          <span className="ml-auto font-mono text-xs text-muted-foreground">Atualizado agora</span>
        </div>

        {/* Serviços */}
        <h2 className="mb-4 mt-14 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Serviços</h2>
        <div className="space-y-3">
          {SERVICES.map((s, i) => (
            <div key={s.name} className="card-elevated p-5" style={{ background: "#0D1B39" }}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="size-2 rounded-full" style={{ backgroundColor: GREEN }} />
                  <span className="font-medium">{s.name}</span>
                </div>
                <span className="text-sm font-medium" style={{ color: GREEN }}>Operacional</span>
              </div>
              <div className="mt-4">
                <UptimeBars idx={i} />
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>90 dias atrás</span>
                <span className="text-foreground/70">{s.uptime} uptime</span>
                <span>hoje</span>
              </div>
            </div>
          ))}
        </div>

        {/* Incidentes */}
        <h2 className="mb-4 mt-14 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Incidentes recentes</h2>
        <div className="space-y-3">
          {INCIDENTS.map((it) => (
            <div key={it.title} className="card-elevated p-5" style={{ background: "#0D1B39" }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-medium">{it.title}</span>
                <span className="rounded-full px-2.5 py-1 text-[11px] font-medium" style={{ backgroundColor: "rgba(34,197,94,0.15)", color: GREEN }}>
                  {it.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{it.date}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">Nenhum incidente ativo no momento.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Status — Nummo" },
      { name: "description", content: "Status em tempo real dos serviços da Nummo — API, Pix, cartões, boleto, dashboard e saques." },
      { property: "og:title", content: "Status — Nummo" },
      { property: "og:description", content: "Status em tempo real dos serviços da Nummo — API, Pix, cartões, boleto, dashboard e saques." },
      { property: "og:url", content: "https://usenummo.com.br/status" },
      { name: "twitter:title", content: "Status — Nummo" },
      { name: "twitter:description", content: "Status em tempo real dos serviços da Nummo — API, Pix, cartões, boleto, dashboard e saques." },
    ],
    links: [{ rel: "canonical", href: "https://usenummo.com.br/status" }],
  }),
  component: StatusPage,
});
