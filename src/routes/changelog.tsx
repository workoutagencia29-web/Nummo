import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

const TAGS: Record<string, { dot: string; bg: string }> = {
  Novo: { dot: "#2F6BFF", bg: "rgba(47,107,255,0.14)" },
  Melhoria: { dot: "#22C55E", bg: "rgba(34,197,94,0.14)" },
  "Correção": { dot: "#F59E0B", bg: "rgba(245,158,11,0.15)" },
  "Segurança": { dot: "#A78BFA", bg: "rgba(167,139,250,0.16)" },
};

const ENTRIES = [
  {
    date: "18 jun 2026",
    tag: "Novo",
    title: "Pix Automático",
    desc: "Cobranças recorrentes via Pix com débito automático autorizado pelo cliente — sem depender de cartão.",
  },
  {
    date: "10 jun 2026",
    tag: "Melhoria",
    title: "Liquidação D+0 ainda mais rápida",
    desc: "Reduzimos o tempo médio de liquidação no Pix para menos de 1 minuto após a aprovação da venda.",
  },
  {
    date: "2 jun 2026",
    tag: "Novo",
    title: "Split de pagamentos na API",
    desc: "Divida automaticamente o valor de uma transação entre múltiplos recebedores em uma única chamada.",
  },
  {
    date: "24 mai 2026",
    tag: "Segurança",
    title: "3DS 2.0 nativo no checkout",
    desc: "Autenticação forte do portador habilitada por padrão, reduzindo fraude e chargeback sem fricção.",
  },
  {
    date: "15 mai 2026",
    tag: "Correção",
    title: "Webhooks duplicados",
    desc: "Corrigido um caso raro em que webhooks de status podiam ser reenviados; idempotência reforçada.",
  },
  {
    date: "6 mai 2026",
    tag: "Melhoria",
    title: "Novo dashboard de vendas",
    desc: "Painel reformulado com filtros por método, período e conversão em tempo real.",
  },
];

function ChangelogPage() {
  return (
    <>
      <Nav solid />
      <main id="conteudo">
        {/* Head — igual ao da /status (tamanho + posição) */}
        <div className="mx-auto max-w-4xl px-6 pt-20 md:pt-28">
          <div className="lg:-ml-24 xl:-ml-40">
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">/ Changelog</div>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Novidades Nummo</h1>
            <p className="mt-3 text-muted-foreground">Acompanhe tudo o que estamos construindo, lançando e aprimorando na Nummo. Aqui você encontra novas funcionalidades, melhorias de performance, atualizações de segurança, integrações e evoluções feitas para deixar sua operação cada vez mais rápida, estável e eficiente.</p>
          </div>
        </div>

        {/* Timeline — mesma posição (X e Y) do conteúdo da /status */}
        <div className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
        <ol className="relative mt-12 border-l border-white/10 pl-6 lg:-ml-12 lg:-mr-16 lg:mt-[98px] xl:-ml-24 xl:-mr-28">
          {ENTRIES.map((e) => {
            const t = TAGS[e.tag];
            return (
              <li key={e.title} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[30px] top-1.5 size-3 rounded-full ring-4 ring-background"
                  style={{ backgroundColor: t.dot }}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <time className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{e.date}</time>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                    style={{ backgroundColor: t.bg, color: t.dot }}
                  >
                    {e.tag}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl font-medium tracking-tight">{e.title}</h3>
                <p className="mt-1.5 max-w-xl text-pretty text-sm text-muted-foreground">{e.desc}</p>
              </li>
            );
          })}
        </ol>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — Nummo" },
      { name: "description", content: "Novidades, melhorias e correções da plataforma Nummo." },
      { property: "og:title", content: "Changelog — Nummo" },
      { property: "og:description", content: "Novidades, melhorias e correções da plataforma Nummo." },
      { property: "og:url", content: "https://usenummo.com.br/changelog" },
      { name: "twitter:title", content: "Changelog — Nummo" },
      { name: "twitter:description", content: "Novidades, melhorias e correções da plataforma Nummo." },
    ],
    links: [{ rel: "canonical", href: "https://usenummo.com.br/changelog" }],
  }),
  component: ChangelogPage,
});
