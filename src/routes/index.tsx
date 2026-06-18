import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Cpu, CreditCard,
  Fingerprint, Globe, Layers, Lock, Smartphone, Sparkles, TrendingUp,
  Wallet, Zap, BarChart3, Code2, ShieldCheck, Infinity as InfinityIcon,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zentra — A subadquirente do futuro" },
      { name: "description", content: "Receba na hora, com taxas transparentes e infraestrutura de pagamentos pensada para escalar." },
      { property: "og:title", content: "Zentra — Pagamentos sem atrito" },
      { property: "og:description", content: "Subadquirente brasileira com liquidez D+0, API moderna e segurança PCI-DSS v4.0." },
    ],
  }),
  component: Landing,
});

/* ------------------------------------------------------------------ */
/* Reusable atoms                                                      */
/* ------------------------------------------------------------------ */

function NeonChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon-soft px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-neon">
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-neon opacity-70" />
        <span className="relative inline-flex size-1.5 rounded-full bg-neon" />
      </span>
      {children}
    </span>
  );
}

function PrimaryButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-neon px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.92_0.21_130_/_0.45)] active:scale-[0.98] ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5" />
      <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 opacity-0 transition-opacity group-hover:opacity-100 group-hover:animate-beam" />
    </button>
  );
}

function GhostButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-foreground/90 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.06] ${className}`}
    >
      {children}
    </button>
  );
}

function SectionEyebrow({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-16 max-w-3xl">
      <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-neon">
        / {kicker}
      </div>
      <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function Landing() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <TopBanner />
      <Nav />
      <Hero />
      <LogoMarquee />
      <Stats />
      <Bento />
      <PaymentMethods />
      <Rates />
      <HowItWorks />
      <DevSection />
      <Security />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function TopBanner() {
  return (
    <div className="border-b border-white/5 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-xs">
        <Sparkles className="size-3.5 text-neon" />
        <span className="text-muted-foreground">
          Novo: <span className="text-foreground">recebimento na hora</span> liberado para todos os planos.
        </span>
        <a href="#" className="inline-flex items-center gap-1 font-medium text-neon hover:underline">
          Saiba mais <ArrowUpRight className="size-3" />
        </a>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative grid size-8 place-items-center rounded-lg bg-neon text-primary-foreground">
            <span className="font-display text-base font-bold">Z</span>
            <span className="absolute -bottom-1 -right-1 size-2 rounded-full bg-accent-violet ring-2 ring-background" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">Zentra</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Produto", "Taxas", "Para Devs", "Segurança", "Empresa"].map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:block">
            Entrar
          </a>
          <button className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.02]">
            Criar conta
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-x-0 top-0 h-[700px] radial-glow" />
      <div className="absolute left-1/2 top-[420px] h-px w-[1200px] -translate-x-1/2 bg-gradient-to-r from-transparent via-neon/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="animate-float-up">
            <NeonChip>Disponível no Brasil inteiro</NeonChip>
            <h1 className="mt-8 text-balance text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-[88px]">
              O fluxo de caixa
              <br />
              <span className="text-muted-foreground/50">na velocidade</span>
              <br />
              do <span className="italic text-neon">agora.</span>
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
              A Zentra é a subadquirente para quem não pode esperar. Receba suas vendas
              em <span className="font-mono text-foreground">D+0</span>, integre em minutos
              e escale com a infraestrutura mais moderna do mercado.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton>Criar conta grátis</PrimaryButton>
              <GhostButton>Falar com vendas</GhostButton>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              {["Sem mensalidade", "Sem taxa de adesão", "Aprovação em 24h", "PCI-DSS v4.0"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-neon" /> {t}
                </span>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-float-up [animation-delay:200ms]">
      {/* Glow halo */}
      <div className="absolute -inset-8 bg-gradient-to-br from-neon/20 via-transparent to-accent-violet/20 blur-3xl" />

      <div className="card-elevated relative noise overflow-hidden p-1">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            app.zentra.com / overview
          </span>
          <Cpu className="size-3.5 text-muted-foreground" />
        </div>

        <div className="space-y-5 p-6">
          {/* Big number */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Saldo disponível
            </div>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="font-display text-5xl font-medium tracking-tight">R$ 248.910</span>
              <span className="font-mono text-sm text-neon">,42</span>
            </div>
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-neon">
              <TrendingUp className="size-3.5" /> +18,2% vs. mês anterior
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-28 rounded-lg border border-white/5 bg-black/30 p-3">
            <svg viewBox="0 0 300 80" className="size-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.92 0.21 130)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="oklch(0.92 0.21 130)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 L30,55 L60,58 L90,40 L120,45 L150,30 L180,35 L210,22 L240,28 L270,15 L300,20 L300,80 L0,80 Z"
                fill="url(#g)"
              />
              <path
                d="M0,60 L30,55 L60,58 L90,40 L120,45 L150,30 L180,35 L210,22 L240,28 L270,15 L300,20"
                fill="none"
                stroke="oklch(0.92 0.21 130)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Live transactions */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>Transações ao vivo</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 animate-pulse-soft rounded-full bg-neon" /> ao vivo
              </span>
            </div>
            {[
              { name: "PIX • Cliente #4821", value: "+ R$ 1.290,00", status: "aprovado" },
              { name: "Crédito 3x • Mercado X", value: "+ R$ 540,00", status: "aprovado" },
              { name: "Débito • Loja Centro", value: "+ R$ 89,90", status: "aprovado" },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 text-xs"
              >
                <span className="text-foreground/80">{t.name}</span>
                <span className="font-mono font-medium text-neon">{t.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-6 -left-6 card-elevated noise hidden p-4 sm:block">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full bg-neon/15 text-neon">
            <Zap className="size-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Liquidez
            </div>
            <div className="font-display text-xl font-semibold">D+0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoMarquee() {
  const logos = ["VISA", "MASTERCARD", "ELO", "AMEX", "HIPERCARD", "DINERS", "PIX", "BOLETO", "APPLE PAY", "GOOGLE PAY"];
  return (
    <section className="border-y border-white/5 bg-surface/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Aceitamos todas as bandeiras e métodos do mercado
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-muted-foreground/60"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { kpi: "R$ 12,4B+", label: "TPV processado em 2025" },
    { kpi: "200K+", label: "Lojistas ativos" },
    { kpi: "99,99%", label: "Uptime da API" },
    { kpi: "0,7s", label: "Tempo médio de aprovação" },
  ];
  return (
    <section className="border-b border-white/5">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-12 md:px-10 md:py-16">
            <div className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              {s.kpi}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Bento() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Plataforma"
          title="Tudo o que sua operação precisa, em um só lugar."
          sub="Um ecossistema completo de pagamentos construído para os próximos 10 anos do varejo brasileiro."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          {/* Big card */}
          <div className="card-elevated noise relative col-span-1 row-span-2 overflow-hidden p-8 md:col-span-3">
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <div className="mb-5 inline-flex size-10 items-center justify-center rounded-lg bg-neon/15 text-neon">
                  <Wallet className="size-5" />
                </div>
                <h3 className="font-display text-3xl font-medium tracking-tight">
                  Recebimento na hora,<br />sem antecipação cara.
                </h3>
                <p className="mt-4 max-w-sm text-muted-foreground">
                  Liquidez D+0 nativa, sem custo extra. Seu dinheiro pinga na conta segundos depois da venda — Pix, débito ou crédito.
                </p>
              </div>

              {/* Visual flow */}
              <div className="relative h-44 rounded-xl border border-white/5 bg-black/40 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="grid size-12 place-items-center rounded-lg bg-white/5 text-foreground">
                      <CreditCard className="size-5" />
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase text-muted-foreground">Venda</div>
                  </div>
                  <div className="relative mx-3 h-px flex-1 bg-white/10">
                    <div className="absolute inset-0 animate-beam bg-gradient-to-r from-transparent via-neon to-transparent" />
                  </div>
                  <div className="text-center">
                    <div className="grid size-12 place-items-center rounded-lg bg-neon/15 text-neon neon-ring">
                      <Zap className="size-5" />
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase text-neon">Zentra</div>
                  </div>
                  <div className="relative mx-3 h-px flex-1 bg-white/10">
                    <div className="absolute inset-0 animate-beam bg-gradient-to-r from-transparent via-neon to-transparent [animation-delay:1.2s]" />
                  </div>
                  <div className="text-center">
                    <div className="grid size-12 place-items-center rounded-lg bg-white/5 text-foreground">
                      <Wallet className="size-5" />
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase text-muted-foreground">Conta</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 font-mono text-xs text-neon">
                  <span className="size-1.5 animate-pulse-soft rounded-full bg-neon" />
                  liquidação em ~700ms
                </div>
              </div>
            </div>
          </div>

          {/* Top right cards */}
          <BentoCard
            className="md:col-span-3"
            icon={<ShieldCheck />}
            title="Antifraude com IA proprietária"
            text="Modelo treinado em bilhões de transações. Reduz chargeback em até 73% sem fricção no checkout."
          />

          {/* Bottom right two */}
          <BentoCard
            className="md:col-span-2"
            icon={<Layers />}
            title="Split de pagamentos"
            text="Distribua valores entre múltiplos recebedores em uma única transação."
          />
          <BentoCard
            className="md:col-span-1"
            icon={<Globe />}
            title="Multimoeda"
            text="Receba de fora em BRL automaticamente."
            compact
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon, title, text, className = "", compact = false,
}: {
  icon: React.ReactNode; title: string; text: string; className?: string; compact?: boolean;
}) {
  return (
    <div className={`card-elevated group relative overflow-hidden p-8 transition-colors hover:border-neon/30 ${className}`}>
      <div className="mb-5 inline-flex size-10 items-center justify-center rounded-lg bg-white/5 text-foreground transition-colors group-hover:bg-neon/15 group-hover:text-neon">
        <span className="[&>svg]:size-5">{icon}</span>
      </div>
      <h3 className={`font-display ${compact ? "text-lg" : "text-2xl"} font-medium tracking-tight`}>
        {title}
      </h3>
      <p className="mt-3 max-w-sm text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function PaymentMethods() {
  const methods = [
    { name: "Pix", desc: "Aprovação instantânea, taxa fixa de R$ 0,49.", icon: <Zap /> },
    { name: "Crédito", desc: "Visa, Master, Elo, Amex, Hiper, Diners.", icon: <CreditCard /> },
    { name: "Débito", desc: "Aprovação online com taxas reduzidas.", icon: <CreditCard /> },
    { name: "Boleto", desc: "Emissão e conciliação automática.", icon: <Wallet /> },
    { name: "Apple/Google Pay", desc: "Checkout sem fricção em qualquer dispositivo.", icon: <Smartphone /> },
    { name: "Recorrência", desc: "Cobranças automáticas, retentativa inteligente.", icon: <InfinityIcon /> },
  ];
  return (
    <section className="border-t border-white/5 bg-surface/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Métodos"
          title="Venda onde e como quiser."
          sub="Suporte completo aos meios de pagamento que o brasileiro usa de verdade."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-3">
          {methods.map((m) => (
            <div
              key={m.name}
              className="group relative bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="mb-6 inline-flex size-11 items-center justify-center rounded-xl bg-neon/10 text-neon">
                <span className="[&>svg]:size-5">{m.icon}</span>
              </div>
              <h3 className="font-display text-xl font-medium tracking-tight">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              <ArrowUpRight className="absolute right-6 top-6 size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rates() {
  const rows = [
    { label: "Pix", zentra: "R$ 0,49", market: "0,99%", recv: "Instantâneo" },
    { label: "Débito", zentra: "0,89%", market: "1,99%", recv: "Na hora" },
    { label: "Crédito à vista", zentra: "2,45%", market: "4,49%", recv: "D+0" },
    { label: "Crédito 6x", zentra: "5,80%", market: "9,90%", recv: "D+0" },
    { label: "Crédito 12x", zentra: "9,80%", market: "14,20%", recv: "D+0" },
  ];
  return (
    <section id="taxas" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Taxas"
          title="Transparência radical."
          sub="Sem letra miúda. Sem taxa de adesão. Sem mensalidade. Você só paga quando vende."
        />
        <div className="card-elevated overflow-hidden p-0">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 border-b border-white/5 bg-black/30 px-8 py-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Modalidade</span>
            <span>Zentra</span>
            <span>Mercado (média)</span>
            <span>Recebimento</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center gap-4 px-8 py-6 transition-colors hover:bg-white/[0.02] ${
                i !== rows.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <span className="font-medium">{r.label}</span>
              <span className="font-mono text-lg font-semibold text-neon">{r.zentra}</span>
              <span className="font-mono text-muted-foreground line-through decoration-white/20">{r.market}</span>
              <span className="text-sm text-muted-foreground">{r.recv}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          * Taxas para faturamento acima de R$ 50 mil/mês. Negociáveis para alto volume.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Crie sua conta", text: "100% online, sem papelada. Aprovação em até 24h úteis." },
    { n: "02", title: "Integre em minutos", text: "Use nosso checkout pronto, link de pagamento ou API REST." },
    { n: "03", title: "Comece a vender", text: "Aceite Pix, débito, crédito e boleto desde o primeiro dia." },
    { n: "04", title: "Receba na hora", text: "Liquidez D+0 nativa, direto na sua conta digital Zentra." },
  ];
  return (
    <section className="border-y border-white/5 bg-surface/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Como funciona"
          title="Do cadastro à primeira venda em um café."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="card-elevated p-6">
              <div className="font-mono text-xs text-neon">{s.n}</div>
              <div className="mt-8 h-px w-12 bg-neon" />
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <NeonChip>Para desenvolvedores</NeonChip>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              API que dev <span className="italic text-neon">ama</span>.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg text-muted-foreground">
              REST, webhooks idempotentes, SDKs oficiais em Node, Python, PHP, Go e Ruby.
              Documentação interativa, sandbox ilimitado e suporte técnico que entende código.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              {[
                { icon: <Code2 />, t: "SDKs oficiais" },
                { icon: <BarChart3 />, t: "Webhooks 99.99%" },
                { icon: <Lock />, t: "OAuth 2.0 + chaves" },
                { icon: <Cpu />, t: "Sandbox ilimitado" },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3">
                  <span className="text-neon [&>svg]:size-4">{f.icon}</span>
                  <span className="text-sm font-medium">{f.t}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <GhostButton>Ver documentação <ArrowUpRight className="size-4" /></GhostButton>
            </div>
          </div>

          {/* Code window */}
          <div className="card-elevated noise overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Code2 className="size-3.5" /> create-charge.ts
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neon">live</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
<code><span className="text-muted-foreground">// 1. Cria uma cobrança Pix</span>{"\n"}
<span className="text-accent-violet">const</span> <span className="text-foreground">charge</span> <span className="text-muted-foreground">=</span> <span className="text-accent-violet">await</span> <span className="text-foreground">zentra</span><span className="text-muted-foreground">.</span><span className="text-neon">charges</span><span className="text-muted-foreground">.</span><span className="text-neon">create</span><span className="text-muted-foreground">({`{`}</span>{"\n"}
{"  "}<span className="text-foreground">amount</span><span className="text-muted-foreground">:</span> <span className="text-neon">15000</span><span className="text-muted-foreground">,</span> <span className="text-muted-foreground">// R$ 150,00</span>{"\n"}
{"  "}<span className="text-foreground">currency</span><span className="text-muted-foreground">:</span> <span className="text-neon">"BRL"</span><span className="text-muted-foreground">,</span>{"\n"}
{"  "}<span className="text-foreground">method</span><span className="text-muted-foreground">:</span> <span className="text-neon">"pix"</span><span className="text-muted-foreground">,</span>{"\n"}
{"  "}<span className="text-foreground">customer</span><span className="text-muted-foreground">:</span> <span className="text-muted-foreground">{`{`}</span> <span className="text-foreground">name</span><span className="text-muted-foreground">:</span> <span className="text-neon">"Ana Souza"</span> <span className="text-muted-foreground">{`}`},</span>{"\n"}
{"  "}<span className="text-foreground">settlement</span><span className="text-muted-foreground">:</span> <span className="text-neon">"instant"</span> <span className="text-muted-foreground">// D+0</span>{"\n"}
<span className="text-muted-foreground">{`});`}</span>{"\n\n"}
<span className="text-muted-foreground">{"// → { id: 'ch_4nL...', status: 'paid', net: 14951 }"}</span>
</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  const items = [
    { icon: <ShieldCheck />, title: "PCI-DSS v4.0", text: "Certificação Level 1, o nível mais alto da indústria." },
    { icon: <Fingerprint />, title: "Tokenização", text: "Dados sensíveis nunca trafegam pela sua aplicação." },
    { icon: <Lock />, title: "3DS 2.0 nativo", text: "Autenticação forte sem fricção desnecessária no checkout." },
    { icon: <Cpu />, title: "Banco Central", text: "Instituição de Pagamento regulada e supervisionada." },
  ];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-surface/30 py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Segurança"
          title="Construído como um cofre. Operado como um foguete."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="card-elevated p-6">
              <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-neon/10 text-neon">
                <span className="[&>svg]:size-5">{i.icon}</span>
              </div>
              <h3 className="font-display text-lg font-medium tracking-tight">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      quote: "Migramos da concorrente e economizamos R$ 38 mil no primeiro mês só em taxas. A API é cirúrgica.",
      name: "Rafael Mendes", role: "CTO, Lojas Norte", initials: "RM",
    },
    {
      quote: "D+0 mudou o jogo do nosso fluxo de caixa. Conseguimos abrir 3 lojas novas em 6 meses.",
      name: "Carolina Prado", role: "CEO, Café Dois Mundos", initials: "CP",
    },
    {
      quote: "Suporte técnico que entende o que estou falando. Implementamos checkout em uma tarde.",
      name: "Lucas Hayashi", role: "Dev Lead, MercadoFit", initials: "LH",
    },
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Quem usa"
          title="Lojistas que não voltam atrás."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {t.map((q) => (
            <figure key={q.name} className="card-elevated flex flex-col p-8">
              <svg className="mb-6 size-7 text-neon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <blockquote className="flex-1 text-pretty text-base leading-relaxed text-foreground/90">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-6">
                <div className="grid size-10 place-items-center rounded-full bg-neon/15 font-mono text-xs font-semibold text-neon">
                  {q.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    { q: "Preciso ter CNPJ para abrir conta?", a: "Sim. A Zentra atende empresas (MEI, ME, EPP e médias/grandes). Cadastro 100% online em até 24h." },
    { q: "Quanto custa começar?", a: "Zero. Não cobramos taxa de adesão, mensalidade nem aluguel de maquininha. Você só paga taxa por transação." },
    { q: "Como funciona o D+0?", a: "Liquidação na hora em todas as modalidades sem custo adicional. O dinheiro cai na sua conta Zentra segundos após a aprovação." },
    { q: "Posso integrar com meu sistema atual?", a: "Sim. Temos API REST, webhooks e SDKs oficiais. Também integramos nativamente com Shopify, WooCommerce, VTEX e Tray." },
    { q: "É seguro?", a: "Somos certificados PCI-DSS Level 1, regulados pelo Banco Central como Instituição de Pagamento, e usamos 3DS 2.0 + antifraude com IA." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-white/5 bg-surface/30 py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionEyebrow kicker="FAQ" title="Perguntas frequentes." />
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="card-elevated overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium">{it.q}</span>
                <ChevronDown
                  className={`size-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="border-t border-white/5 px-6 py-5 text-sm text-muted-foreground">
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-1/2 h-[500px] -translate-y-1/2 radial-glow" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <NeonChip>Comece em 3 minutos</NeonChip>
        <h2 className="mt-8 text-balance font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
          Pronto para receber<br />no tempo do <span className="italic text-neon">agora?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Sem mensalidade. Sem fidelidade. Sem surpresa.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton>Criar conta grátis</PrimaryButton>
          <GhostButton>Agendar demonstração</GhostButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/40 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <div className="grid size-8 place-items-center rounded-lg bg-neon text-primary-foreground">
                <span className="font-display text-base font-bold">Z</span>
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">Zentra</span>
            </a>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              A infraestrutura de pagamentos para a nova economia brasileira.
              Registrada no Banco Central como Instituição de Pagamento.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="size-1.5 animate-pulse-soft rounded-full bg-neon" />
              Todos os sistemas operacionais
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { t: "Produto", l: ["Maquininha", "Link de pagamento", "Checkout online", "API"] },
              { t: "Empresa", l: ["Sobre", "Carreiras", "Imprensa", "Contato"] },
              { t: "Recursos", l: ["Documentação", "Status", "Changelog", "Blog"] },
              { t: "Legal", l: ["Privacidade", "Termos", "Cookies", "Compliance"] },
            ].map((col) => (
              <div key={col.t}>
                <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {col.t}
                </div>
                <ul className="space-y-2.5">
                  {col.l.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-neon">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Zentra Pagamentos S.A. — CNPJ 00.000.000/0001-00</span>
          <span className="font-mono uppercase tracking-widest">Feito para escalar.</span>
        </div>
      </div>
    </footer>
  );
}
