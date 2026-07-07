import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Cpu, CreditCard,
  Fingerprint, Link, Layers, Lock, Smartphone, TrendingUp,
  Wallet, Zap, BarChart3, Code2, ShieldCheck, Infinity as InfinityIcon,
  Instagram, Linkedin, Youtube, Menu, X, Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef, Children, isValidElement, cloneElement } from "react";

function TikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function Pix() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.283 18.36a3.505 3.505 0 0 0 2.493-1.032l3.6-3.6a.684.684 0 0 1 .946 0l3.613 3.613a3.504 3.504 0 0 0 2.493 1.032h.71l-4.56 4.56a3.647 3.647 0 0 1-5.156 0L4.85 18.36ZM18.428 5.627a3.505 3.505 0 0 0-2.493 1.032l-3.613 3.614a.67.67 0 0 1-.946 0l-3.6-3.6A3.505 3.505 0 0 0 5.283 5.64h-.434l4.573-4.572a3.646 3.646 0 0 1 5.156 0l4.559 4.559ZM1.068 9.422 3.79 6.699h1.492a2.483 2.483 0 0 1 1.744.722l3.6 3.6a1.73 1.73 0 0 0 2.443 0l3.614-3.613a2.482 2.482 0 0 1 1.744-.723h1.767l2.737 2.737a3.646 3.646 0 0 1 0 5.156l-2.736 2.736h-1.768a2.482 2.482 0 0 1-1.744-.722l-3.613-3.613a1.77 1.77 0 0 0-2.444 0l-3.6 3.6a2.483 2.483 0 0 1-1.744.722H3.791l-2.723-2.723a3.646 3.646 0 0 1 0-5.156" />
    </svg>
  );
}

export const WHATSAPP_URL = "https://api.whatsapp.com/message/ZOX6JAZW427OB1?autoload=1&app_absent=0";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nummo — O hub de pagamentos do futuro" },
      { name: "description", content: "Receba na hora, com taxas transparentes e infraestrutura de pagamentos pensada para escalar." },
      { property: "og:title", content: "Nummo — Pagamentos sem atrito" },
      { property: "og:description", content: "Hub de pagamentos brasileiro com liquidez D+0, API moderna e segurança PCI-DSS v4.0." },
      { property: "og:url", content: "https://usenummo.com.br/" },
      { name: "twitter:title", content: "Nummo — Pagamentos sem atrito" },
      { name: "twitter:description", content: "Hub de pagamentos brasileiro com liquidez D+0, API moderna e segurança PCI-DSS v4.0." },
    ],
    links: [{ rel: "canonical", href: "https://usenummo.com.br/" }],
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

export function PrimaryButton({
  children,
  className = "",
  size = "md",
  href,
  target,
  rel,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const sizeCls = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";

  const cls = `cta-btn group font-semibold ${sizeCls} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        <span className="cta-dots" aria-hidden="true" />
        <span className="cta-text">{children}</span>
        <ArrowRight className="relative z-10 size-4 shrink-0 text-white transition-transform group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      <span className="cta-dots" aria-hidden="true" />
      <span className="cta-text">{children}</span>
      <ArrowRight className="relative z-10 size-4 shrink-0 text-white transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

export function GhostButton({ children, className = "", size = "md", href, target, rel }: { children: React.ReactNode; className?: string; size?: "md" | "lg"; href?: string; target?: string; rel?: string }) {
  const sizeCls = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] ${sizeCls} font-medium text-foreground/90 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.06] ${className}`;
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls}>
      {children}
    </button>
  );
}

function SectionEyebrow({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
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

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal" style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

function Stagger({ children, className = "", step = 240 }: { children: React.ReactNode; className?: string; step?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];
    if (typeof IntersectionObserver === "undefined") {
      kids.forEach((k) => k.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          kids.forEach((k, i) => {
            k.style.transitionDelay = `${i * step}ms`;
            k.classList.add("in");
          });
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -35% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [step]);
  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child as React.ReactElement<{ className?: string }>, {
              className: `${(child.props as { className?: string }).className ?? ""} reveal-child`,
            })
          : child,
      )}
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-neon focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground">
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Reveal><LogoMarquee /></Reveal>
        <Reveal><Bento /></Reveal>
        <Reveal><PaymentMethods /></Reveal>
        <Reveal><Rates /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Reveal><DevSection /></Reveal>
        <Reveal><Security /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><FinalCta /></Reveal>
      </main>
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

function navScroll(e: React.MouseEvent<HTMLAnchorElement>, hash: string, off = -90) {
  if (!hash) return;
  const el = document.getElementById(hash);
  if (!el) return; // não está na home: deixa o href "/#hash" navegar pra home
  e.preventDefault();
  const lenis = (window as unknown as {
    __lenis?: { scrollTo: (t: Element | string, o?: { offset?: number }) => void };
  }).__lenis;
  if (lenis) lenis.scrollTo(el, { offset: off });
  else el.scrollIntoView({ behavior: "smooth" });
}

const NAV_ITEMS = [
  { l: "Produto", h: "plataforma", off: -50 },
  { l: "Taxas", h: "taxas", off: -140 },
  { l: "Para Devs", h: "para-devs", off: -90 },
  { l: "FAQ", h: "faq", off: -90 },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="relative mx-auto max-w-6xl">
        <div className="relative flex h-16 items-center justify-between gap-3 rounded-full border border-white/10 bg-surface/45 pl-6 pr-2.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-2xl backdrop-saturate-150">
          <RouterLink to="/" className="flex items-center" aria-label="Nummo — início">
            <img src="/logo-nummo.svg" alt="Nummo" width={145} height={24} className="h-6 w-auto" />
          </RouterLink>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.l}
                href={item.h ? `/#${item.h}` : "#"}
                onClick={(e) => navScroll(e, item.h, item.off)}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1.5">
            <button type="button"  onClick={() => window.location.href = "https://app.usenummo.com.br/dashboard/login"} className="hidden px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block">
              Entrar
            </button>
            <button type="button" className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.02]" onClick={() => window.location.href = "https://app.usenummo.com.br/dashboard/register"}>
              Criar conta
            </button>
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full text-foreground transition-colors hover:bg-white/5 lg:hidden"
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-nav" className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-surface/80 p-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-2xl lg:hidden">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.l}
                  href={item.h ? `/#${item.h}` : "#"}
                  onClick={(e) => {
                    navScroll(e, item.h, item.off);
                    setOpen(false);
                  }}
                  className="rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.l}
                </a>
              ))}
            </nav>
            <div className="mt-1 border-t border-white/10 p-2">
              <button type="button" className="block w-full rounded-2xl px-4 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                Entrar
              </button>
            </div>
          </div>
        )}
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
          <div className="mt-16 animate-float-up lg:mt-8">
            <h1 className="text-balance text-[52px] font-medium leading-[0.95] tracking-tight max-[360px]:text-[42px] md:text-[78px] lg:text-[94px]">
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
              <PrimaryButton
                size="lg"
                href="https://app.usenummo.com.br/dashboard/register"
              >
                Criar Conta
              </PrimaryButton>

              <GhostButton
                size="lg"
                href="https://wa.me/5511912002801?text=Olá!%20Fiquei%20interessado(a)%20em%20criar%20uma%20conta%20na%20Nummo%20e%20gostaria%20de%20ajuda."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com o gerente
              </GhostButton>
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
            <span className="whitespace-nowrap font-mono font-medium text-foreground">+ {t.value}</span>
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
  const logos = ["VISA", "MASTERCARD", "ELO", "AMEX", "HIPERCARD", "PIX", "BOLETO", "APPLE PAY", "GOOGLE PAY"];
  return (
    <section className="py-10">
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
    <section id="plataforma" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Plataforma"
          title="Tudo o que sua operação precisa, em um só lugar."
          sub="Um ecossistema completo de pagamentos construído para sua empresa."
        />

        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2" step={200}>
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
                  Liquidez D+0, sem custo extra. Seu dinheiro pinga na conta segundos depois da venda.
                </p>
              </div>

              {/* Visual flow */}
              <div className="relative flex h-44 flex-col justify-center rounded-xl border border-white/5 bg-black/40 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="grid size-12 place-items-center rounded-lg bg-white/5 text-foreground">
                      <CreditCard className="size-5" />
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase text-muted-foreground">Venda</div>
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
            wide
            icon={<Sparkles />}
            title="Checkout Builder com IA"
            text="A IA nativa da Nummo analisa seu checkout e atribui uma nota com base em comportamento de compra, conversão e padrões de alta performance. Ela identifica pontos que podem estar travando suas vendas. Depois, sugere melhorias estratégicas e ajustes cirúrgicos em cada etapa."
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
        </Stagger>
      </div>
    </section>
  );
}

function BentoCard({
  icon, title, text, className = "", compact = false, wide = false,
}: {
  icon: React.ReactNode; title: string; text: string; className?: string; compact?: boolean; wide?: boolean;
}) {
  return (
    <div className={`card-elevated group relative overflow-hidden p-8 transition-colors hover:border-neon/30 ${className}`}>
      <div className="mb-5 inline-flex size-10 items-center justify-center rounded-lg bg-white/5 text-foreground transition-colors group-hover:bg-neon/15 group-hover:text-neon">
        <span className="[&>svg]:size-5">{icon}</span>
      </div>
      <h3 className={`font-display ${compact ? "text-lg" : "text-2xl"} font-medium tracking-tight`}>
        {title}
      </h3>
      <p className={`mt-3 ${wide ? "" : "max-w-sm"} text-sm text-muted-foreground`}>{text}</p>
    </div>
  );
}

function PaymentMethods() {
  const methods = [
    { name: "Pix", desc: "Aprovação instantânea.", icon: <Pix /> },
    { name: "Crédito", desc: "Visa, Master, Elo, Amex, Hiper.", icon: <CreditCard /> },
    { name: "Débito", desc: "Aprovação online com taxas reduzidas.", icon: <CreditCard /> },
    { name: "Boleto", desc: "Emissão e conciliação automática.", icon: <Wallet /> },
    { name: "Apple/Google Pay", desc: "Checkout sem fricção em qualquer dispositivo.", icon: <Smartphone /> },
    { name: "Assinaturas", desc: "Cobranças automáticas, retentativa inteligente.", icon: <InfinityIcon /> },
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Métodos"
          title="Venda onde e como quiser."
          sub="Suporte completo aos meios de pagamento que o brasileiro usa de verdade."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {methods.map((m) => (
            <div key={m.name} className="card-elevated p-6">
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-neon/10 text-neon">
                <span className="[&>svg]:size-5">{m.icon}</span>
              </div>
              <div className="mt-6 h-px w-12 bg-neon" />
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{m.name}</h3>
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
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.6fr_1fr]">
          {/* Cartão (novo design) */}
          <div className="flex justify-center drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] lg:justify-start">
            <img
              src="/cartao-nummo.webp"
              alt="Cartão Nummo"
              width={1400}
              height={781}
              loading="lazy"
              decoding="async"
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
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">/ Taxas</div>
            <h2 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Seu negócio não precisa caber em uma{" "}
              <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text text-transparent">
                taxa padrão.
              </span>
            </h2>
            <p className="mt-6 text-pretty text-xl text-muted-foreground">
              Temos <span className="font-semibold text-foreground">5 planos</span> de taxas definidos conforme o perfil da sua operação.
              E, conforme seu negócio evolui, cresce em volume ou muda de estrutura,
              suas condições podem ser revisadas para acompanhar essa <span className="font-semibold text-foreground">nova fase</span>.
            </p>
            <p className="mt-6 text-pretty text-base text-muted-foreground">
              Comece com o plano ideal hoje — e{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-neon transition-colors hover:text-foreground">negocie condições ainda melhores</a>{" "}
              quando sua operação pedir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Crie sua conta", text: "100% online, sem papelada. Aprovação em até 24h." },
    { n: "02", title: "Integre em minutos", text: "Use nosso checkout pronto, link de pagamento ou API REST." },
    { n: "03", title: "Comece a vender", text: "Aceite Pix, débito, crédito e boleto desde o primeiro dia." },
    { n: "04", title: "Receba na hora", text: "Liquidez D+0 no Pix, em minutos no seu banco." },
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Integrações"
          title={
            <>
              Tudo o que sua operação precisa,{" "}
              <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text text-transparent">
                conectado em um só lugar.
              </span>
            </>
          }
        />
        <Stagger className="grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="card-elevated p-6">
              <div className="font-mono text-xs text-neon">{s.n}</div>
              <div className="mt-8 h-px w-12 bg-neon" />
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const CODE_CLS: Record<string, string> = {
  c: "text-muted-foreground",
  v: "text-accent-violet",
  f: "text-foreground",
  n: "text-neon",
};
const CODE_TOKENS: [string, string][] = [
  ["// 1. Cria uma cobrança Pix", "c"], ["\n", "c"],
  ["const", "v"], [" ", "f"], ["charge", "f"], [" ", "f"], ["=", "c"], [" ", "f"], ["await", "v"], [" ", "f"], ["nummo", "f"], [".", "c"], ["charges", "n"], [".", "c"], ["create", "n"], ["({", "c"], ["\n", "c"],
  ["  ", "f"], ["amount", "f"], [":", "c"], [" ", "f"], ["15000", "n"], [",", "c"], [" ", "f"], ["// R$ 150,00", "c"], ["\n", "c"],
  ["  ", "f"], ["currency", "f"], [":", "c"], [" ", "f"], ['"BRL"', "n"], [",", "c"], ["\n", "c"],
  ["  ", "f"], ["method", "f"], [":", "c"], [" ", "f"], ['"pix"', "n"], [",", "c"], ["\n", "c"],
  ["  ", "f"], ["customer", "f"], [":", "c"], [" ", "f"], ["{", "c"], [" ", "f"], ["name", "f"], [":", "c"], [" ", "f"], ['"Ana Souza"', "n"], [" ", "f"], ["},", "c"], ["\n", "c"],
  ["  ", "f"], ["settlement", "f"], [":", "c"], [" ", "f"], ['"instant"', "n"], [" ", "f"], ["// D+0", "c"], ["\n", "c"],
  ["});", "c"], ["\n\n", "c"],
  ["// → { id: 'ch_4nL...', status: 'paid', net: 14951 }", "c"],
];

function CodeTyping() {
  const ref = useRef<HTMLElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const total = CODE_TOKENS.reduce((s, t) => s + t[0].length, 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || count >= total) return;
    let acc = 0;
    let ch = "";
    for (const [text] of CODE_TOKENS) {
      if (count < acc + text.length) {
        ch = text[count - acc];
        break;
      }
      acc += text.length;
    }
    let delay = 16 + Math.random() * 38; // ritmo humano
    if (ch === "\n") delay = 150 + Math.random() * 140; // pausa em quebra de linha
    else if (ch === " ") delay = 26 + Math.random() * 34;
    const id = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(id);
  }, [started, count, total]);

  const done = count >= total;
  let idx = 0;
  return (
    <code ref={ref}>
      {CODE_TOKENS.map(([text, cls], i) => {
        const start = idx;
        idx += text.length;
        const rev = Math.max(0, Math.min(text.length, count - start));
        const hasCaret = started && !done && count >= start && count < start + text.length;
        return (
          <span key={i} className={CODE_CLS[cls]}>
            {text.slice(0, rev)}
            {hasCaret && <span className="code-caret" aria-hidden="true" />}
            <span style={{ opacity: 0 }}>{text.slice(rev)}</span>
          </span>
        );
      })}
      {done && <span className="code-caret" aria-hidden="true" />}
    </code>
  );
}

function DevSection() {
  return (
    <section id="para-devs" className="overflow-x-clip py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <NeonChip>Para desenvolvedores</NeonChip>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              API que dev <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text italic text-transparent">ama</span>.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg text-muted-foreground">
              REST, webhooks idempotentes, SDKs oficiais em Node, Python, PHP, Go e Ruby.
              Documentação interativa e suporte técnico que entende código.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              {[
                { icon: <Code2 />, t: "SDKs oficiais" },
                { icon: <BarChart3 />, t: "Webhooks 99.97%" },
                { icon: <Lock />, t: "OAuth 2.0 + chaves" },
                { icon: <Cpu />, t: "API" },
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
          <div className="relative min-w-0">
            {/* Glow azul + branco (igual ao hero), respirando */}
            <div className="pointer-events-none absolute -inset-8 animate-glow-breathe bg-gradient-to-br from-neon/20 via-transparent to-white/15 blur-3xl" />
            <div className="card-elevated noise relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <Code2 className="size-3.5" /> create-charge.ts
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neon">live</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
                <CodeTyping />
              </pre>
            </div>
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
  ];
  return (
    <section className="relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Segurança"
          title="Construído como um cofre. Operado como um foguete."
        />
        <Stagger className="grid gap-4 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="card-elevated p-6">
              <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-neon/10 text-neon">
                <span className="[&>svg]:size-5">{i.icon}</span>
              </div>
              <h3 className="font-display text-lg font-medium tracking-tight">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      quote: "Migramos da concorrente e economizamos R$ 38 mil no primeiro mês só em taxas. A API é cirúrgica.",
      name: "Rafael Mendes", role: "CTO, Lojas Norte", photo: "/depoimentos/1.jpg",
    },
    {
      quote: "D+0 mudou o jogo do nosso fluxo de caixa. Conseguimos escalar na velocidade que sempre sonhamos.",
      name: "Bruno Carvalho", role: "CEO, Café Dois Mundos", photo: "/depoimentos/2.jpg",
    },
    {
      quote: "Mais do que suporte, tenho um parceiro estratégico que entende minhas necessidades e oferece o acompanhamento que preciso para operar com segurança.",
      name: "Lucas Hayashi", role: "Dev Lead, MercadoFit", photo: "/depoimentos/3.jpg",
    },
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Quem usa"
          title="Sellers que não voltam atrás."
        />
        <Stagger className="grid gap-4 md:grid-cols-3">
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
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="size-10 shrink-0 rounded-full object-cover ring-1 ring-white/10"
                />
                <div>
                  <div className="text-sm font-medium">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    { q: "Preciso ter CNPJ para abrir conta?", a: "Sim. A Nummo atende empresas (MEI, ME, EPP e médias/grandes). Cadastro 100% online e aprovação da conta em até 24h." },
    { q: "Quanto custa começar?", a: "Na Nummo, você pode criar sua conta e começar a vender gratuitamente. Nossa plataforma oferece ferramentas para impulsionar suas vendas, sem custos, sem mensalidade, sem pegadinha. As taxas são aplicadas apenas sobre vendas aprovadas, descontadas no momento da transação. O que está esperando para vir para a Nummo?" },
    { q: "Como funciona o D+0?", a: "Liquidação na hora em vendas realizadas no PIX sem custo adicional. O dinheiro cai na sua conta minutos após a aprovação da venda." },
    { q: "Quanto tempo leva para sacar?", a: "Os saques na Nummo são processados diariamente das 06h às 15h. Após a solicitação, o valor é creditado em sua conta em até 1 a 2 horas. Solicitações realizadas fora desse horário serão processadas no próximo período de atendimento, a partir das 06h." },
    { q: "É seguro?", a: "Nós possuímos um sistema de segurança avançada para proteger cada transação. Sua operação conta com segurança PCI-DSS Level 1 e 3DS 2.0 — o mais alto padrão de segurança para dados de cartão — além de uma camada antifraude com inteligência artificial, que analisa transações em tempo real para identificar comportamentos suspeitos, reduzir fraudes e evitar chargebacks." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionEyebrow kicker="FAQ" title="Perguntas frequentes." />
        <Stagger className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="card-elevated overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                id={`faq-btn-${i}`}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium">{it.q}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`size-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="border-t border-white/5 px-6 py-5 text-sm text-muted-foreground"
                >
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-1/2 h-[500px] -translate-y-1/2 radial-glow" />

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
          <PrimaryButton
            href="https://app.usenummo.com.br/dashboard/register"
          >
            Criar Conta
          </PrimaryButton>

          <GhostButton
            href="https://wa.me/5511912002801?text=Olá!%20Fiquei%20interessado(a)%20em%20criar%20uma%20conta%20na%20Nummo%20e%20gostaria%20de%20ajuda."
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com o gerente
          </GhostButton>
        </div>
      </div>
    </section>
  );
}
const FOOTER_ROUTES: Record<string, string> = {
  "Sobre": "/sobre",
  "Parceiros": "/parceiros",
  "Documentação": "/documentacao",
  "Status": "/status",
  "Changelog": "/changelog",
  "Integrações": "/integracoes",
  "Privacidade": "/privacidade",
  "Termos": "/termos",
  "Cookies": "/cookies",
  "Compliance": "/compliance",
  "E-mail": "/email",
};

const FOOTER_LINKS: Record<string, string> = {
  "WhatsApp": WHATSAPP_URL,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-20">
      {/* Linha de destaque + glow sutil no topo */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-72 radial-glow opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          {/* Marca */}
          <div>
            <RouterLink to="/" className="inline-flex items-center" aria-label="Nummo — início">
              <img src="/logo-nummo.svg" alt="Nummo" width={169} height={28} className="h-7 w-auto" />
            </RouterLink>
            <p className="mt-5 max-w-xs text-pretty text-base font-medium text-foreground/90">
              Pagamentos na velocidade do seu negócio.
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              A infraestrutura de pagamentos para a nova economia brasileira.
            </p>
            {/* Redes sociais */}
            <div className="mt-7 flex items-center gap-2.5">
              {[
                { icon: <Instagram />, label: "Instagram", href: "https://www.instagram.com/use.nummo" },
                { icon: <Linkedin />, label: "LinkedIn", href: "#" },
                { icon: <TikTok />, label: "TikTok", href: "#" },
                { icon: <Youtube />, label: "YouTube", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
              { t: "Produto", l: ["Pix", "Cartões", "Boleto", "API"] },
              { t: "Empresa", l: ["Sobre", "Parceiros", "E-mail", "WhatsApp"] },
              { t: "Recursos", l: ["Documentação", "Status", "Changelog", "Integrações"] },
              { t: "Legal", l: ["Privacidade", "Termos", "Cookies", "Compliance"] },
            ].map((col) => (
              <div key={col.t}>
                <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {col.t}
                </div>
                <ul className="space-y-2.5">
                  {col.l.map((i) => {
                    const to = FOOTER_ROUTES[i];
                    const ext = FOOTER_LINKS[i];
                    const cls = "text-sm text-foreground/80 transition-colors hover:text-neon";
                    return (
                      <li key={i}>
                        {to ? (
                          <RouterLink to={to} className={cls}>
                            {i}
                          </RouterLink>
                        ) : ext ? (
                          <a
                            href={ext}
                            target={ext.startsWith("http") ? "_blank" : undefined}
                            rel={ext.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={cls}
                          >
                            {i}
                          </a>
                        ) : (
                          <span className="text-sm text-foreground/80">
                            {i}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Selos de confiança / pagamento */}
        <div className="mt-16 flex flex-col items-start gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-muted-foreground">© 2026 Nummo — CNPJ 63.320.977/0001-06</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              { name: "Pix", href: "https://www.bcb.gov.br/estabilidadefinanceira/pix" },
              { name: "Visa", href: "https://www.visa.com.br" },
              { name: "Mastercard", href: "https://www.mastercard.com/br/pt.html" },
              { name: "Elo", href: "https://www.elo.com.br" },
              { name: "Amex", href: "https://www.americanexpress.com" },
            ].map((m) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground/80"
              >
                {m.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
