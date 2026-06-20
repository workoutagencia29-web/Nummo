import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Cpu,
  CreditCard,
  Fingerprint,
  Link,
  Layers,
  Lock,
  Smartphone,
  TrendingUp,
  Wallet,
  Zap,
  BarChart3,
  Code2,
  ShieldCheck,
  Infinity as InfinityIcon,
  Instagram,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nummo — A subadquirente do futuro" },
      {
        name: "description",
        content:
          "Receba na hora, com taxas transparentes e infraestrutura de pagamentos pensada para escalar.",
      },
      { property: "og:title", content: "Nummo — Pagamentos sem atrito" },
      {
        property: "og:description",
        content: "Subadquirente brasileira com liquidez D+0, API moderna e segurança PCI-DSS v4.0.",
      },
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

function PrimaryButton({
  children,
  className = "",
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizeCls = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <button className={`cta-btn group font-semibold ${sizeCls} ${className}`}>
      <span className="cta-dots" aria-hidden="true" />
      <span className="cta-text">{children}</span>
      <ArrowRight className="relative z-10 size-4 shrink-0 text-white transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function GhostButton({
  children,
  className = "",
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizeCls = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] ${sizeCls} font-medium text-foreground/90 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.06] ${className}`}
    >
      {children}
    </button>
  );
}

function SectionEyebrow({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
}) {
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
      <Nav />
      <Hero />
      <LogoMarquee />
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
      <ScrollRail />
    </div>
  );
}

/* Barra de progresso vertical fixa na direita (estilo Cakto) */
const RAIL_THUMB = 80; // altura do trecho azul (px) = h-20
function ScrollRail() {
  const thumbRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    let last = -1;
    const loop = () => {
      const el = thumbRef.current;
      if (el) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        if (p !== last) {
          el.style.transform = `translateY(${p * (window.innerHeight - RAIL_THUMB)}px)`;
          last = p;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="pointer-events-none fixed right-0 top-0 z-40 hidden h-screen lg:block">
      <div className="relative h-full w-[3px] bg-white/10">
        <div
          ref={thumbRef}
          className="absolute right-0 top-0 h-20 w-[3px] rounded-full bg-neon shadow-[0_0_14px_1px_oklch(0.581_0.229_263.9_/_0.9)] will-change-transform"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-surface/45 pl-6 pr-2.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-2xl backdrop-saturate-150">
        <a href="#" className="flex items-baseline">
          <span className="font-display text-lg font-semibold tracking-tight">nummo</span>
          <span className="font-display text-lg font-semibold leading-none text-neon">.</span>
        </a>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {["Produto", "Taxas", "Para Devs", "Segurança"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
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
    <section className="relative -mt-[5rem] flex min-h-svh items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-x-0 top-0 h-[700px] radial-glow" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="mt-8 animate-float-up">
            <h1 className="text-balance text-[52px] font-medium leading-[0.95] tracking-tight md:text-[78px] lg:text-[94px]">
              Pagamentos
              <br />
              <span className="text-muted-foreground/50">na velocidade</span>
              <br />
              do{" "}
              <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text italic text-transparent">
                seu negócio.
              </span>
            </h1>

            <div className="relative my-7 h-px w-full">
              <div className="absolute left-0 top-0 h-px w-[1200px] bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
            </div>

            <div className="mt-[108px] flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg">Criar conta grátis</PrimaryButton>
              <GhostButton size="lg">Falar com o gerente</GhostButton>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function LiveTransactions() {
  const SALES = [
    { name: "PIX • João P.", value: "R$ 129,90" },
    { name: "Crédito 3x • Loja Norte", value: "R$ 540,00" },
    { name: "Débito • Mercado X", value: "R$ 89,90" },
    { name: "PIX • Ana Souza", value: "R$ 245,00" },
    { name: "Crédito 6x • TechStore", value: "R$ 398,00" },
    { name: "PIX • Carlos M.", value: "R$ 47,50" },
    { name: "Débito • Café Centro", value: "R$ 18,00" },
    { name: "Crédito • Boutique Sul", value: "R$ 689,00" },
    { name: "PIX • Maria F.", value: "R$ 320,00" },
    { name: "Boleto • Atacado BR", value: "R$ 512,00" },
  ];
  const VISIBLE = 4;
  const [items, setItems] = useState(() => SALES.slice(0, VISIBLE).map((s, i) => ({ ...s, k: i })));
  const [animKey, setAnimKey] = useState(0);
  const next = useRef(VISIBLE);
  useEffect(() => {
    let tickT: ReturnType<typeof setTimeout>;
    let trimT: ReturnType<typeof setTimeout>;
    const schedule = () => {
      const delay = 5000 + Math.random() * 5000; // 5–10s, mais natural
      tickT = setTimeout(() => {
        setItems((prev) => {
          const s = SALES[next.current % SALES.length];
          const item = { ...s, k: next.current };
          next.current += 1;
          return [item, ...prev]; // 5 itens durante a animação; a última sai por baixo
        });
        setAnimKey((k) => k + 1); // dispara a esteira (translateY suave)
        // depois da animação, remove a que saiu (já fora da área visível)
        trimT = setTimeout(() => setItems((prev) => prev.slice(0, VISIBLE)), 1300);
        schedule();
      }, delay);
    };
    schedule();
    return () => {
      clearTimeout(tickT);
      clearTimeout(trimT);
    };
  }, []);
  return (
    <div className="h-[176px] overflow-hidden">
      <div key={animKey} className="flex animate-conveyor flex-col gap-2">
        {items.map((t) => (
          <div
            key={t.k}
            className="flex items-center justify-between gap-3 rounded-md border border-white/5 bg-white/[0.02] px-3 py-2.5 text-xs"
          >
            <span className="flex min-w-0 items-center gap-2">
              <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#28C840]/15 text-[#28C840]">
                <Check className="size-2.5" />
              </span>
              <span className="truncate text-foreground/80">{t.name}</span>
            </span>
            <span className="whitespace-nowrap font-mono font-medium text-foreground">
              + {t.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-float-up [animation-delay:200ms]">
      {/* Glow halo */}
      <div className="absolute -inset-8 bg-gradient-to-br from-neon/20 via-transparent to-white/15 blur-3xl" />

      <div className="card-elevated relative noise overflow-hidden p-1">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-[#FF5F57]" />
            <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="size-2.5 rounded-full bg-[#28C840]" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            app.nummo.com / overview
          </span>
          <Cpu className="size-3.5 text-muted-foreground" />
        </div>

        <div className="space-y-5 p-6">
          {/* Big number */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Saldo disponível
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-5xl font-medium tracking-tight">R$ 248.910</span>
              <span className="font-mono text-base text-neon">,42</span>
            </div>
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-neon">
              <TrendingUp className="size-3.5" /> +18,2% vs. mês anterior
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-28 rounded-lg border border-white/5 bg-black/30 p-3">
            <div className="relative size-full">
              <svg viewBox="0 0 300 80" className="size-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.581 0.229 263.9)" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="oklch(0.581 0.229 263.9)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,56 C25,56 30,46 50,46 C70,46 80,53 100,52 C120,51 130,35 150,36 C170,37 180,43 200,40 C220,37 230,24 250,25 C270,26 285,18 300,16 L300,80 L0,80 Z"
                  fill="url(#g)"
                />
                <path
                  d="M0,56 C25,56 30,46 50,46 C70,46 80,53 100,52 C120,51 130,35 150,36 C170,37 180,43 200,40 C220,37 230,24 250,25 C270,26 285,18 300,16"
                  fill="none"
                  stroke="oklch(0.581 0.229 263.9)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              {/* bolinha no fim da linha */}
              <span
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: "100%", top: "20%" }}
              >
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-neon opacity-60" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-neon shadow-[0_0_10px_var(--neon)]" />
                </span>
              </span>
            </div>
          </div>

          {/* Live transactions */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>Transações ao vivo</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 animate-pulse-soft rounded-full bg-[#FF3B30]" /> ao vivo
              </span>
            </div>
            <LiveTransactions />
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
  const logos = [
    "VISA",
    "MASTERCARD",
    "ELO",
    "AMEX",
    "HIPERCARD",
    "PIX",
    "BOLETO",
    "APPLE PAY",
    "GOOGLE PAY",
  ];
  return (
    <section className="border-y border-white/5 bg-surface/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
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

function Bento() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Plataforma"
          title="Tudo o que sua operação precisa, em um só lugar."
          sub="Um ecossistema completo de pagamentos construído para sua empresa."
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
                  Recebimento na hora,
                  <br />
                  sem antecipação cara.
                </h3>
                <p className="mt-4 max-w-sm text-muted-foreground">
                  Liquidez D+0 nativa, sem custo extra. Seu dinheiro pinga na conta segundos depois
                  da venda.
                </p>
              </div>

              {/* Visual flow */}
              <div className="relative flex h-44 flex-col justify-center rounded-xl border border-white/5 bg-black/40 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="grid size-12 place-items-center rounded-lg bg-white/5 text-foreground">
                      <CreditCard className="size-5" />
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase text-muted-foreground">
                      Venda
                    </div>
                  </div>
                  <div className="relative mx-3 h-px flex-1 overflow-hidden bg-white/10">
                    <div className="absolute inset-0 animate-beam bg-gradient-to-r from-transparent via-neon to-transparent" />
                  </div>
                  <div className="text-center">
                    <div className="grid size-12 place-items-center rounded-lg bg-neon/15 text-neon neon-ring">
                      <Zap className="size-5" />
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase text-neon">Nummo</div>
                  </div>
                  <div className="relative mx-3 h-px flex-1 overflow-hidden bg-white/10">
                    <div className="absolute inset-0 animate-beam bg-gradient-to-r from-transparent via-neon to-transparent [animation-delay:1.2s]" />
                  </div>
                  <div className="text-center">
                    <div className="grid size-12 place-items-center rounded-lg bg-white/5 text-foreground">
                      <Wallet className="size-5" />
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase text-muted-foreground">
                      Conta
                    </div>
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
            icon={<Link />}
            title="Link de pagamento"
            text="Venda por um link, sem precisar de site."
            compact
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon,
  title,
  text,
  className = "",
  compact = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`card-elevated group relative overflow-hidden p-8 transition-colors hover:border-neon/30 ${className}`}
    >
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
    {
      name: "Apple/Google Pay",
      desc: "Checkout sem fricção em qualquer dispositivo.",
      icon: <Smartphone />,
    },
    {
      name: "Recorrência",
      desc: "Cobranças automáticas, retentativa inteligente.",
      icon: <InfinityIcon />,
    },
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
            <div key={m.name} className="bg-background p-8">
              <div className="mb-6 inline-flex size-11 items-center justify-center rounded-xl bg-neon/10 text-neon">
                <span className="[&>svg]:size-5">{m.icon}</span>
              </div>
              <h3 className="font-display text-xl font-medium tracking-tight">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rates() {
  return (
    <section id="taxas" className="relative overflow-x-clip py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.6fr_1fr]">
          {/* Cartão (novo design) */}
          <div className="flex justify-center drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] lg:justify-start">
            <img
              src="/cartao-nummo.svg"
              alt="Cartão Nummo"
              className="w-full max-w-none lg:-ml-12 lg:translate-y-8 xl:-ml-24"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 0%, #000 46%, rgba(0,0,0,0.85) 54%, rgba(0,0,0,0.58) 61%, rgba(0,0,0,0.3) 67%, rgba(0,0,0,0.1) 72%, transparent 77%)",
                maskImage:
                  "linear-gradient(to bottom, #000 0%, #000 46%, rgba(0,0,0,0.85) 54%, rgba(0,0,0,0.58) 61%, rgba(0,0,0,0.3) 67%, rgba(0,0,0,0.1) 72%, transparent 77%)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>

          {/* Texto */}
          <div className="lg:-ml-12 lg:-translate-y-12 xl:-ml-24">
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">
              / Taxas
            </div>
            <h2 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              A taxa mais{" "}
              <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text text-transparent">
                justa do mercado.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-xl text-muted-foreground">
              Receba no Pix instantaneamente, em D+0. A partir de{" "}
              <span className="font-semibold text-foreground">R$ 0,49</span> no Pix e{" "}
              <span className="font-semibold text-foreground">2,45%</span> no crédito à vista — sem
              mensalidade e sem letra miúda.
            </p>
            <p className="mt-6 text-base text-muted-foreground">
              Taxas padrões —{" "}
              <a href="#" className="font-medium text-neon transition-colors hover:text-foreground">
                fale com um gerente
              </a>{" "}
              para personalizá-las.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Crie sua conta",
      text: "100% online, sem papelada. Aprovação em até 24h úteis.",
    },
    {
      n: "02",
      title: "Integre em minutos",
      text: "Use nosso checkout pronto, link de pagamento ou API REST.",
    },
    {
      n: "03",
      title: "Comece a vender",
      text: "Aceite Pix, débito, crédito e boleto desde o primeiro dia.",
    },
    { n: "04", title: "Receba na hora", text: "Liquidez D+0 no Pix, em minutos no seu banco." },
  ];
  return (
    <section className="border-y border-white/5 bg-surface/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Como funciona"
          title={
            <>
              Transforme minutos de configuração em{" "}
              <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text text-transparent">
                anos de crescimento.
              </span>
            </>
          }
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
              API que dev{" "}
              <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text italic text-transparent">
                ama
              </span>
              .
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
                <div
                  key={f.t}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span className="text-neon [&>svg]:size-4">{f.icon}</span>
                  <span className="text-sm font-medium">{f.t}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <GhostButton>
                Ver documentação <ArrowUpRight className="size-4" />
              </GhostButton>
            </div>
          </div>

          {/* Code window */}
          <div className="card-elevated noise overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Code2 className="size-3.5" /> create-charge.ts
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neon">
                live
              </span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-muted-foreground">// 1. Cria uma cobrança Pix</span>
                {"\n"}
                <span className="text-accent-violet">const</span>{" "}
                <span className="text-foreground">charge</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-accent-violet">await</span>{" "}
                <span className="text-foreground">nummo</span>
                <span className="text-muted-foreground">.</span>
                <span className="text-neon">charges</span>
                <span className="text-muted-foreground">.</span>
                <span className="text-neon">create</span>
                <span className="text-muted-foreground">({`{`}</span>
                {"\n"}
                {"  "}
                <span className="text-foreground">amount</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-neon">15000</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-muted-foreground">// R$ 150,00</span>
                {"\n"}
                {"  "}
                <span className="text-foreground">currency</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-neon">"BRL"</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"  "}
                <span className="text-foreground">method</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-neon">"pix"</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"  "}
                <span className="text-foreground">customer</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-muted-foreground">{`{`}</span>{" "}
                <span className="text-foreground">name</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-neon">"Ana Souza"</span>{" "}
                <span className="text-muted-foreground">{`}`},</span>
                {"\n"}
                {"  "}
                <span className="text-foreground">settlement</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-neon">"instant"</span>{" "}
                <span className="text-muted-foreground">// D+0</span>
                {"\n"}
                <span className="text-muted-foreground">{`});`}</span>
                {"\n\n"}
                <span className="text-muted-foreground">
                  {"// → { id: 'ch_4nL...', status: 'paid', net: 14951 }"}
                </span>
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
    {
      icon: <ShieldCheck />,
      title: "PCI-DSS v4.0",
      text: "Certificação Level 1, o nível mais alto da indústria.",
    },
    {
      icon: <Fingerprint />,
      title: "Tokenização",
      text: "Dados sensíveis nunca trafegam pela sua aplicação.",
    },
    {
      icon: <Lock />,
      title: "3DS 2.0 nativo",
      text: "Autenticação forte sem fricção desnecessária no checkout.",
    },
  ];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-surface/30 py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Segurança"
          title="Construído como um cofre. Operado como um foguete."
        />
        <div className="grid gap-4 md:grid-cols-3">
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
      quote:
        "Migramos da concorrente e economizamos R$ 38 mil no primeiro mês só em taxas. A API é cirúrgica.",
      name: "Rafael Mendes",
      role: "CTO, Lojas Norte",
      photo: "/depoimentos/1.jpg",
    },
    {
      quote:
        "D+0 mudou o jogo do nosso fluxo de caixa. Conseguimos escalar na velocidade que sempre sonhamos.",
      name: "Bruno Carvalho",
      role: "CEO, Café Dois Mundos",
      photo: "/depoimentos/2.jpg",
    },
    {
      quote:
        "Mais do que suporte, tenho um parceiro estratégico que entende minhas necessidades e oferece o acompanhamento que preciso para operar com segurança.",
      name: "Lucas Hayashi",
      role: "Dev Lead, MercadoFit",
      photo: "/depoimentos/3.jpg",
    },
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow kicker="Quem usa" title="Sellers que não voltam atrás." />
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
                <img
                  src={q.photo}
                  alt={q.name}
                  className="size-10 shrink-0 rounded-full object-cover ring-1 ring-white/10"
                />
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
    {
      q: "Preciso ter CNPJ para abrir conta?",
      a: "Sim. A Nummo atende empresas (MEI, ME, EPP e médias/grandes). Cadastro 100% online e aprovação da conta em até 24h.",
    },
    {
      q: "Quanto custa começar?",
      a: "Na Nummo, você pode criar sua conta e começar a vender gratuitamente. Nossa plataforma oferece ferramentas para impulsionar suas vendas, sem custos, sem mensalidade, sem pegadinha. As taxas são aplicadas apenas sobre vendas aprovadas, descontadas no momento da transação. O que está esperando para vir para a Nummo?",
    },
    {
      q: "Como funciona o D+0?",
      a: "Liquidação na hora em vendas realizadas no PIX sem custo adicional. O dinheiro cai na sua conta minutos após a aprovação da venda.",
    },
    {
      q: "Quanto tempo leva para sacar?",
      a: "Os saques na Nummo são processados diariamente das 06h às 15h. Após a solicitação, o valor é creditado em sua conta em até 1 a 2 horas. Solicitações realizadas fora desse horário serão processadas no próximo período de atendimento, a partir das 06h.",
    },
    {
      q: "É seguro?",
      a: "Nós possuímos um sistema de segurança avançada para proteger cada transação. Somos certificados PCI-DSS Level 1, o mais alto padrão de segurança para dados de cartão. E também utilizamos 3DS 2.0 e uma camada antifraude com inteligência artificial, que analisa transações em tempo real para identificar comportamentos suspeitos, reduzir fraudes e evitar chargebacks.",
    },
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
          Vender nunca foi{" "}
          <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text italic text-transparent">
            tão simples.
          </span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Sem mensalidade. Sem fidelidade. Sem surpresa.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton>Criar conta grátis</PrimaryButton>
          <GhostButton>Falar com o gerente</GhostButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-surface/40 px-6 pb-10 pt-20">
      {/* Linha de destaque + glow sutil no topo */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-72 radial-glow opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          {/* Marca */}
          <div>
            <a href="#" className="inline-flex items-baseline">
              <span className="font-display text-3xl font-semibold tracking-tight">nummo</span>
              <span className="font-display text-3xl font-semibold leading-none text-neon">.</span>
            </a>
            <p className="mt-5 max-w-xs text-pretty text-base font-medium text-foreground/90">
              Pagamentos na velocidade do agora.
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              A infraestrutura de pagamentos para a nova economia brasileira.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="size-1.5 animate-pulse-soft rounded-full bg-neon" />
              Todos os sistemas operacionais
            </div>

            {/* Redes sociais */}
            <div className="mt-7 flex items-center gap-2.5">
              {[
                { icon: <Instagram />, label: "Instagram" },
                { icon: <Linkedin />, label: "LinkedIn" },
                { icon: <Twitter />, label: "X" },
                { icon: <Github />, label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground transition-colors hover:border-neon/40 hover:bg-neon-soft hover:text-neon"
                >
                  <span className="[&>svg]:size-4">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Colunas de links */}
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
                      <a
                        href="#"
                        className="text-sm text-foreground/80 transition-colors hover:text-neon"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Selos de confiança / pagamento */}
        <div className="mt-16 flex flex-col items-start gap-5 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon-soft px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neon">
            <ShieldCheck className="size-3.5" /> PCI-DSS Level 1
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {["Pix", "Visa", "Mastercard", "Elo", "Amex"].map((m) => (
              <span
                key={m}
                className="font-display text-sm font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground/80"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Nummo Pagamentos S.A. — CNPJ 00.000.000/0001-00</span>
          <span className="font-mono uppercase tracking-widest">Feito para escalar.</span>
        </div>
      </div>
    </footer>
  );
}
