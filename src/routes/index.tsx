import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Cpu, CreditCard,
  Link, Layers, Lock, TrendingUp,
  Wallet, Zap, BarChart3, Code2,
  Instagram, Linkedin, Youtube, Menu, X, Sparkles,
  AlertTriangle, Globe, Image, List, ShieldCheck, Star, Type, Users, Video,
} from "lucide-react";
import { useState, useEffect, useRef, Children, isValidElement, cloneElement } from "react";
import { TiltCard } from "../components/tilt-card";

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

export const WHATSAPP_URL = "https://wa.me/5511912002801";

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

  const cls = `group inline-flex items-center justify-center gap-2 rounded-full bg-[#0D1B39] font-semibold text-[#F6F9FC] transition-colors hover:bg-[#16264d] ${sizeCls} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        <span>{children}</span>
        <ArrowRight className="size-4 shrink-0 text-[#F6F9FC] transition-transform group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      <span>{children}</span>
      <ArrowRight className="size-4 shrink-0 text-[#F6F9FC] transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

export function GhostButton({ children, className = "", size = "md", href, target, rel }: { children: React.ReactNode; className?: string; size?: "md" | "lg"; href?: string; target?: string; rel?: string }) {
  const sizeCls = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] ${sizeCls} font-medium text-foreground/90 backdrop-blur transition-colors hover:border-foreground/20 hover:bg-foreground/[0.06] ${className}`;
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

function SectionEyebrow({ kicker, title, sub }: { kicker?: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-16 max-w-3xl">
      {kicker && (
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0D1B39]">
          / {kicker}
        </div>
      )}
      <h2 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-6 max-w-xl text-pretty text-lg text-[#0D1B39]">{sub}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

// Reveal ao rolar: aplica .in ao entrar na viewport (CSS + gate de prefers-reduced-motion já prontos em styles.css).
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
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

// Stagger: cada filho vira .reveal-child e recebe .in em sequência ao entrar na viewport.
function Stagger({ children, className = "", step = 90 }: { children: React.ReactNode; className?: string; step?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          Array.from(el.children).forEach((k, i) => {
            window.setTimeout(() => k.classList.add("in"), i * step);
          });
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [step]);
  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child as React.ReactElement<{ className?: string }>, {
              className: `${(child.props as { className?: string }).className ?? ""} reveal-child`.trim(),
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
        <Reveal><Bento /></Reveal>
        <Reveal><PaymentMethods /></Reveal>
        <Reveal><Rates /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <div className="band-blue bg-[#0D1B39]">
          <Reveal><DevSection /></Reveal>
          <Security />
        </div>
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
      <div className="relative h-full w-[3px] bg-foreground/10">
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
  { l: "Produtos", h: "plataforma", off: 0 },
  { l: "Taxas", h: "taxas", off: -140 },
  { l: "Desenvolvedores", h: "para-devs", off: 0 },
  { l: "FAQ", h: "faq", off: -90 },
];

export function Nav({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);

  // Navbar no TOPO da página (position: absolute) — fica sobre o Hero escuro
  // e sai da tela ao rolar (não acompanha o scroll). Só aparece sobre o Hero,
  // então usamos sempre o estilo overlay (transparente + branco).
  const overlay = true;

  const scrollTop = (e: React.MouseEvent) => {
    // Fora da home: deixa o link "/" navegar normalmente pra página inicial.
    if (window.location.pathname !== "/") return;
    e.preventDefault();
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {solid && <ScrollRail />}
      <header className={`absolute inset-x-0 top-0 z-50 ${solid ? "bg-[#0D1B39]" : ""}`}>
      <div className="relative flex h-20 items-center px-6 lg:px-8">
        <a href="/" onClick={scrollTop} className="flex shrink-0 items-center" aria-label="Nummo — início">
          <img
            src={overlay ? "/logo-nummo.svg" : "/logo-nummo-dark.svg"}
            alt="Nummo"
            width={145}
            height={24}
            className="h-6 w-auto select-none md:h-7"
            draggable={false}
          />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.l}
              href={item.h ? `/#${item.h}` : "#"}
              onClick={(e) => navScroll(e, item.h, item.off)}
              className={`whitespace-nowrap text-[15px] font-medium tracking-wide transition-colors ${
                overlay ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.l}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href="https://app.usenummo.com.br/dashboard/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-10 items-center justify-center rounded-full px-5 text-[15px] font-semibold transition ${
              overlay
                ? "border border-white/25 bg-white/10 text-white backdrop-blur-[1.5px] hover:bg-white/15"
                : "border border-border bg-[#F6F9FC] text-foreground hover:bg-muted"
            }`}
          >
            Entrar
          </a>
          <a
            href="https://app.usenummo.com.br/dashboard/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#2F6BFF] px-5 text-[15px] font-semibold text-white transition hover:bg-[#0052CC]"
          >
            Criar Conta
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`ml-auto rounded-md p-2 lg:hidden ${overlay ? "text-white" : "text-foreground"}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-[#F6F9FC] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.l}
                href={item.h ? `/#${item.h}` : "#"}
                onClick={(e) => {
                  navScroll(e, item.h, item.off);
                  setOpen(false);
                }}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.l}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href="https://app.usenummo.com.br/dashboard/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-border bg-[#F6F9FC] py-2.5 text-center text-sm font-semibold text-foreground"
              >
                Entrar
              </a>
              <a
                href="https://app.usenummo.com.br/dashboard/register"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-[#2F6BFF] py-2.5 text-center text-sm font-semibold text-white"
              >
                Criar Conta
              </a>
            </div>
          </div>
        </div>
      )}
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden text-white lg:items-center">
      {/* Fundo cinematográfico (copiado do nummo-premium-flow) */}
      <div className="absolute inset-0">
        {/* Fundo desktop */}
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="absolute inset-0 hidden h-full w-full scale-105 object-cover object-center lg:block"
        />
        {/* Fundo mobile/tablet — enquadrado na executiva (corta o teto escuro, estilo Stark) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-no-repeat lg:hidden"
          style={{ backgroundImage: "url(/hero-bg.jpg)", backgroundSize: "auto 168%", backgroundPosition: "50% 75%" }}
        />
        {/* Overlay desktop (original) */}
        <div className="absolute inset-0 hidden bg-gradient-to-b from-[#050B1E]/70 via-[#050B1E]/35 to-[#050B1E]/95 lg:block" />
        {/* Overlay mobile — rosto visível em cima, escuro embaixo p/ o texto (estilo Stark/Revolut) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1E] via-[#050B1E]/40 to-[#050B1E]/5 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1E]/50 via-transparent to-transparent lg:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,11,30,0.45)_78%)]" />
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050B1E]/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:py-10">
        <div className="lg:mt-8">
          {/* Wrapper anima o fade+subida sem mexer nos transforms do título (desktop intacto) */}
          <div className="animate-hero-in [animation-delay:120ms]">
            <h1 className="text-left text-[32px] font-bold leading-[1.03] tracking-[-0.01em] text-[#F6F9FC] max-[360px]:text-[28px] md:whitespace-nowrap md:text-[42px] lg:-translate-y-[180px] lg:text-center lg:text-[52px] xl:text-[58px]">
              <span className="inline-block text-[40px] leading-[0.98] max-[360px]:text-[34px] md:text-[55px] lg:-translate-y-2 lg:text-[67px] xl:text-[75px]">
                Infraestrutura financeira
              </span>
              <br />
              <span className="font-medium">para empresas que <span className="bg-gradient-to-r from-[#F6F9FC] to-[#2F6BFF] bg-clip-text text-transparent">não querem limites.</span></span>
            </h1>
          </div>

          {/* Subtítulo — só no mobile/tablet */}
          <p className="animate-hero-in mt-5 max-w-md text-left text-[15px] leading-relaxed text-white/75 [animation-delay:440ms] lg:hidden">
            Receba na hora, com taxas transparentes e uma infraestrutura de pagamentos pensada para escalar.
          </p>

          {/* Botões — só no mobile/tablet; no desktop o hero segue sem botões */}
          <div className="animate-hero-in mt-8 flex flex-col items-start gap-3 [animation-delay:760ms] lg:hidden">
            <PrimaryButton
              size="lg"
              href="https://app.usenummo.com.br/dashboard/register"
              className="min-w-[220px] justify-center !bg-[#2F6BFF] shadow-[0_14px_34px_-10px_rgba(47,107,255,0.8)] hover:!bg-[#2559d8]"
            >
              Criar Conta
            </PrimaryButton>
            <a
              href="https://wa.me/5511912002801?text=Olá!%20Fiquei%20interessado(a)%20em%20criar%20uma%20conta%20na%20Nummo%20e%20gostaria%20de%20ajuda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.08] px-8 py-4 text-base font-medium text-white backdrop-blur-[2px] transition hover:bg-white/[0.14]"
            >
              Falar com Especialista
            </a>
          </div>
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
            className="flex items-center justify-between gap-3 rounded-md border border-foreground/5 bg-foreground/[0.02] px-3 py-2.5 text-xs"
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
        <div className="flex items-center justify-between border-b border-foreground/5 px-5 py-3">
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
          <div className="relative h-28 rounded-lg border border-foreground/5 bg-black/30 p-3">
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
          kicker="Produtos"
          title={<span className="text-[#0D1B39]">Produtos que simplificam sua operação hoje e escalam amanhã.</span>}
          sub="Um ecossistema construído e pensado para sua empresa."
        />

        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2" step={200}>
          {/* Big card */}
          <div
            className="noise relative col-span-1 row-span-2 overflow-hidden rounded-[28px] p-8 text-[#F6F9FC] md:col-span-3"
            style={{ background: "#0D1B39", boxShadow: "0 22px 44px -22px rgba(9,16,32,0.55)" }}
          >
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <div
                  className="mb-5 inline-flex size-10 items-center justify-center rounded-xl text-[#F6F9FC]"
                  style={{ background: "#0D1B39", boxShadow: "inset 2px 2px 4px #080f22, inset -2px -2px 4px #12264a" }}
                >
                  <Sparkles className="size-5" />
                </div>
                <h3 className="font-display text-3xl font-medium tracking-tight">
                  Checkout Builder com IA
                </h3>
                <p className="mt-4 text-[#F6F9FC]/75">
                  A IA da Nummo analisa seu checkout, dá uma nota e mostra o que trava suas vendas, sugerindo melhorias em cada etapa.
                </p>

                <div className="mt-5 grid translate-y-[7px] gap-2.5 lg:grid-cols-2">
                  {/* Recomendações da IA */}
                  <div className="space-y-2">
                    {[
                      { title: "Pixel de rastreamento ativo", pts: 6, desc: "Cadastre um pixel (Meta/GTM) ativo na aba Pixel de Conversão.", tab: "Pixel de Conversão" },
                      { title: "Suporte (SAC) visível", pts: 3, desc: "Preencha e-mail e WhatsApp do SAC em Informações Gerais.", tab: "Informações Gerais" },
                      { title: "Página de vendas informada", pts: 2, desc: "Informe a URL da página de vendas em Informações Gerais.", tab: "Informações Gerais" },
                    ].map((r) => (
                      <div key={r.title} className="rounded-lg border border-white/10 p-2.5">
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle className="size-3 shrink-0 text-[#2F6BFF]" />
                          <span className="text-[11px] font-semibold text-[#F6F9FC]">{r.title}</span>
                          <span className="text-[9px] text-[#F6F9FC]/40">+{r.pts}pts</span>
                        </div>
                        <p className="mt-1 text-[10px] leading-snug text-[#F6F9FC]/55">{r.desc}</p>
                        <div className="mt-2 inline-flex rounded-md border border-[#2F6BFF]/30 bg-[#2F6BFF]/12 px-2 py-0.5 text-[9px] font-semibold text-[#6E9BFF]">
                          Configure na aba "{r.tab}"
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Grade de componentes */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: <Type />, label: "Texto" },
                      { icon: <Image />, label: "Imagem" },
                      { icon: <Check />, label: "Vantagens" },
                      { icon: <ShieldCheck />, label: "Selo" },
                      { icon: <Layers />, label: "Header" },
                      { icon: <List />, label: "Lista" },
                      { icon: <Zap />, label: "Cronômetro" },
                      { icon: <Star />, label: "Depoimento" },
                      { icon: <Video />, label: "Vídeo" },
                      { icon: <Users />, label: "Facebook" },
                      { icon: <Globe />, label: "Mapa" },
                      { icon: <Zap />, label: "Botão" },
                    ].map((c) => (
                      <div key={c.label} className="flex flex-col items-center justify-center gap-1 rounded-lg border border-white/10 py-2.5">
                        <span className="text-[#F6F9FC]/70 [&>svg]:size-4">{c.icon}</span>
                        <span className="text-[9px] text-[#F6F9FC]/70">{c.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top right cards */}
          <BentoCard
            className="md:col-span-3"
            wide
            icon={<Sparkles />}
            title="Recuperação de vendas"
            text="A IA da Nummo recupera sozinha o que você perderia: cartões recusados são reprocessados com retry inteligente, e checkouts abandonados, Pix e boletos não pagos voltam com mensagens automáticas. Tudo em segundo plano, virando faturamento recuperado."
          />

          {/* Bottom right two */}
          <BentoCard
            className="md:col-span-2"
            icon={<Layers />}
            title="Marketplace"
            text="Cadastre vários vendedores e a Nummo cuida do resto: split e repasse automático, KYC de cada seller e saldo com saque próprio. Tudo em uma só estrutura."
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
    <div
      className={`relative overflow-hidden rounded-[28px] p-8 text-[#F6F9FC] ${className}`}
      style={{ background: "#0D1B39", boxShadow: "0 16px 32px -18px rgba(9,16,32,0.5)" }}
    >
      <div
        className="mb-5 inline-flex size-10 items-center justify-center rounded-xl text-[#F6F9FC]"
        style={{ background: "#0D1B39", boxShadow: "inset 2px 2px 4px #080f22, inset -2px -2px 4px #12264a" }}
      >
        <span className="[&>svg]:size-5">{icon}</span>
      </div>
      <h3 className={`font-display ${compact ? "text-lg" : "text-2xl"} font-medium tracking-tight`}>
        {title}
      </h3>
      <p className={`mt-3 ${wide ? "" : "max-w-sm"} text-sm text-[#F6F9FC]/75`}>{text}</p>
    </div>
  );
}

function PaymentMethods() {
  const methods = [
    { name: "Pix", desc: "Aprovação instantânea.", icon: <Pix /> },
    { name: "Cartões", desc: "Visa, Mastercard, Elo, Amex.", icon: <CreditCard /> },
    { name: "Boleto", desc: "Emissão automática.", icon: <Wallet /> },
    { name: "API Pix", desc: "Cobranças Pix direto pela sua API.", icon: <Code2 /> },
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          kicker="Métodos"
          title={<span className="text-[#0D1B39]">Venda onde e <span className="bg-gradient-to-r from-[#0D1B39] to-[#2F6BFF] bg-clip-text text-transparent">como quiser.</span></span>}
          sub="Na Nummo você tem acesso aos meios de pagamentos que o brasileiro usa de verdade."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          {/* 4 cards à esquerda */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {methods.map((m) => (
              <div
                key={m.name}
                className="h-full rounded-[28px] p-6"
                style={{
                  background: "#F6F9FC",
                  boxShadow: "14px 14px 28px #d3dbea, -14px -14px 28px #ffffff",
                }}
              >
                <div
                  className="inline-flex size-11 items-center justify-center rounded-xl text-[#0D1B39]"
                  style={{
                    background: "#F6F9FC",
                    boxShadow: "inset 3px 3px 6px #d3dbea, inset -3px -3px 6px #ffffff",
                  }}
                >
                  <span className="[&>svg]:size-5">{m.icon}</span>
                </div>
                <div className="mt-8 h-px w-12" style={{ background: "#0D1B39" }} />
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-[#0D1B39]">{m.name}</h3>
                <p className="mt-2 text-sm text-[#0D1B39]/70">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* mockup do dashboard à direita */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* sombra/glow de fundo pra dar profundidade (igual ao Hero) */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-y-10 scale-90 rounded-[2.5rem] bg-[#060A0E]/55 blur-[70px]"
              />
              <img
                src="/metodos-dashboard.png"
                alt="Dashboard da Nummo — saldo disponível e vendas ao vivo"
                width={1080}
                height={1080}
                className="relative w-full select-none object-contain drop-shadow-[0_24px_40px_rgba(6,10,14,0.4)]"
                draggable={false}
              />
            </div>
          </div>
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
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#0D1B39]">/ Taxas</div>
            <h2 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0D1B39] md:text-6xl">
              Seu negócio não precisa caber em uma taxa padrão.
            </h2>
            <p className="mt-6 text-pretty text-xl text-[#0D1B39]">
              Temos <span className="font-semibold text-foreground">5 planos</span> de taxas definidos conforme o perfil da sua operação.
              E, conforme seu negócio evolui, cresce em volume ou muda de estrutura,
              suas condições podem ser revisadas para acompanhar essa <span className="font-semibold text-foreground">nova fase</span>.
            </p>
            <p className="mt-6 text-pretty text-base text-[#0D1B39]">
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
  const integrations: { alt: string; src?: string; node?: React.ReactNode; tone: "color" | "mono" | "node" }[] = [
    { src: "/logos/meta.png", alt: "Meta Ads", tone: "color" },
    { src: "/logos/google-ads.webp", alt: "Google Ads", tone: "color" },
    { node: <TikTok />, alt: "TikTok Ads", tone: "node" },
    { src: "/logos/kwai.png", alt: "Kwai Ads", tone: "color" },
    { src: "/logos/utmify.png", alt: "UTMify", tone: "mono" },
    { src: "/logos/notazz.png", alt: "Notazz", tone: "color" },
    { src: "/logos/astron.png", alt: "Astron", tone: "color" },
  ];

  // Neumorfismo modo claro — família dos cards de Métodos, com mais profundidade/contraste
  // (sombra escura mais funda #c7d1e4) + filete de luz no topo p/ definir a borda.
  const tileRaised = "14px 14px 30px #c7d1e4, -12px -12px 26px #ffffff, inset 0 1px 0 #ffffff";
  const socketInset = "inset 5px 5px 10px #c7d1e4, inset -4px -4px 9px #ffffff";

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="-translate-y-[82px]">
          <SectionEyebrow
            kicker="Integrações"
            title={<span className="text-[#0D1B39]">Tudo o que sua operação precisa, conectado <span className="bg-gradient-to-r from-[#0D1B39] to-[#2F6BFF] bg-clip-text text-transparent">em um só lugar.</span></span>}
            sub="Conecte anúncios, trackers e emissão de notas à Nummo e centralize sua operação em um só fluxo."
          />
        </div>

        {/* Trilho de encaixe: soquetes neumórficos claros deslizando sob a luz fixa (topo-esquerda).
            overflow-hidden + máscara horizontal; a fileira leva py-12 p/ não cortar a sombra "raised". */}
        <div
          className="group relative -mt-4 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee-right py-12 group-hover:[animation-play-state:paused]">
            {[...integrations, ...integrations].map((l, i) => (
              // TILE elevado claro — receita dos cards de Métodos, escalada (10/10/20)
              <div
                key={i}
                className="group/tile mr-6 flex h-[152px] w-[176px] shrink-0 flex-col items-center justify-center gap-3 rounded-[28px] p-3.5 sm:h-[168px] sm:w-[200px]"
                style={{ background: "#F6F9FC", boxShadow: tileRaised }}
              >
                {/* SOQUETE afundado — o "encaixe" onde cada integração pluga (rounded-xl = ícone dos Métodos) */}
                <div
                  className="flex h-[74px] w-full items-center justify-center rounded-xl px-5 sm:h-[86px]"
                  style={{ background: "#F6F9FC", boxShadow: socketInset }}
                >
                  {l.tone === "node" ? (
                    // TikTok: <TikTok/> inline em NAVY via currentColor (nunca branco — branco some no claro).
                    <span
                      role="img"
                      aria-label={l.alt}
                      className="text-[#0D1B39] opacity-90 transition-opacity duration-300 group-hover/tile:opacity-100 [&>svg]:h-11 [&>svg]:w-11"
                    >
                      {l.node}
                    </span>
                  ) : l.tone === "mono" ? (
                    // UTMify (wordmark branco) pintado em navy exato #0D1B39 via CSS mask (mesma cor do TikTok).
                    <span
                      role="img"
                      aria-label={l.alt}
                      className="block opacity-90 transition-opacity duration-300 group-hover/tile:opacity-100"
                      style={{
                        height: "40px",
                        width: "128px",
                        background: "#0D1B39",
                        WebkitMaskImage: `url(${l.src})`,
                        maskImage: `url(${l.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                      }}
                    />
                  ) : (
                    // Coloridos intactos — reconhecibilidade de marca > monocromia.
                    <img
                      src={l.src}
                      alt={l.alt}
                      className="max-h-11 w-auto max-w-[128px] object-contain opacity-90 transition-opacity duration-300 group-hover/tile:opacity-100"
                      draggable={false}
                      loading="lazy"
                    />
                  )}
                </div>
                <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#0D1B39]/55">
                  {l.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
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
        <div className="grid translate-y-[30px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              API que dev <span className="text-[#F6F9FC]">ama</span>.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg text-muted-foreground">
              REST, webhooks idempotentes, SDKs oficiais em Node, Python, PHP, Go e Ruby.
              Documentação interativa e suporte técnico que entende código.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
              {[
                { icon: <Code2 />, t: "SDKs oficiais" },
                { icon: <BarChart3 />, t: "Webhooks 99.97%" },
                { icon: <Lock />, t: "OAuth 2.0 + chaves" },
                { icon: <Cpu />, t: "API" },
              ].map((f) => (
                <div
                  key={f.t}
                  className="flex items-center gap-3 rounded-2xl px-5 py-4"
                  style={{ background: "#0D1B39", boxShadow: "6px 6px 14px #080f22, -6px -6px 14px #12264a" }}
                >
                  <span className="text-neon [&>svg]:size-4">{f.icon}</span>
                  <span className="text-sm font-medium">{f.t}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <GhostButton href="/documentacao" className="!border-[#2F6BFF] !bg-[#2F6BFF] !text-[#F6F9FC] hover:!border-[#2559d8] hover:!bg-[#2559d8]">Ver documentação <ArrowUpRight className="size-4" /></GhostButton>
            </div>
          </div>

          {/* Code window */}
          <div className="relative min-w-0">
            <div className="card-elevated code-window noise relative overflow-hidden" style={{ background: "#0D1B39", border: "none", boxShadow: "8px 8px 20px #080f22, -8px -8px 20px #12264a" }}>
              <div className="flex items-center justify-between border-b border-foreground/5 px-5 py-3">
                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5" aria-hidden>
                    <span className="size-3 rounded-full bg-[#ff5f57]" />
                    <span className="size-3 rounded-full bg-[#febc2e]" />
                    <span className="size-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="flex items-center gap-2"><Code2 className="size-3.5" /> create-charge.ts</span>
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
  const pairs = [
    {
      num: "01",
      card: "PCI-DSS v4.0",
      title: "Segurança e conformidade",
      text: "Proteção de dados sensíveis com o padrão global de segurança dos pagamentos. Mais conformidade, controle e confiança para toda a operação.",
      cardLeft: true,
    },
    {
      num: "02",
      card: "Tokenização",
      upper: true,
      title: "Dados protegidos em cada etapa",
      text: "Os dados do cartão viram tokens, reduzindo sua exposição durante cada transação. Mais proteção para o seller e menos risco operacional.",
      cardLeft: false,
    },
    {
      num: "03",
      card: "3DS 2.0 nativo",
      upper: true,
      title: "Autenticação inteligente",
      text: "Autenticação extra integrada ao checkout para validar pagamentos com inteligência. Reduza fraudes sem criar fricção e perder conversão.",
      cardLeft: true,
    },
  ];

  return (
    <section id="seguranca" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-32">
          {pairs.map((p) => {
            return (
              <div key={p.num} className="grid items-center gap-6 lg:grid-cols-2">
                {/* Card — DOM sempre antes do texto (mobile agrupa card+texto);
                    no desktop alterna o lado via order */}
                <div
                  className={`relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl p-6 md:p-8 ${p.cardLeft ? "" : "lg:order-2"}`}
                  style={{ background: "#0D1B39", boxShadow: "8px 8px 20px #080f22, -8px -8px 20px #12264a" }}
                >
                  <span
                    style={{ WebkitTextStroke: "0.03em #2F6BFF", paintOrder: "stroke fill" }}
                    className={`relative text-center font-display text-5xl font-bold leading-[0.9] tracking-tight text-[#2F6BFF] sm:text-6xl md:text-7xl ${p.upper ? "uppercase" : ""}`}
                  >
                    {p.card}
                  </span>
                </div>

                <div className={`flex flex-col justify-center py-2 ${p.cardLeft ? "lg:pl-6" : "lg:order-1"}`}>
                  <div className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-neon">
                    {p.num}
                  </div>
                  <h3 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-[64px]">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      quote: "Migramos da concorrente e economizamos R$ 38 mil no primeiro mês só em taxas. A API é cirúrgica.",
      name: "Rafael Mendes", role: "Chief Technology Officer", photo: "/depoimentos/1.jpg",
    },
    {
      quote: "D+0 mudou o jogo do nosso fluxo de caixa. Conseguimos escalar na velocidade que sempre sonhamos.",
      name: "Bruno Carvalho", role: "Chief Executive Officer", photo: "/depoimentos/2.jpg",
    },
    {
      quote: "Mais do que suporte, tenho um parceiro estratégico que entende minhas necessidades e oferece o acompanhamento que preciso para operar com segurança.",
      name: "Lucas Hayashi", role: "Dev Lead", photo: "/depoimentos/3.jpg",
    },
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0D1B39] md:text-6xl">
          Clientes que não voltam atrás
        </h2>
        <Stagger className="grid translate-y-5 gap-4 md:grid-cols-3">
          {t.map((q) => (
            <figure key={q.name} className="card-elevated flex flex-col p-8" style={{ background: "#0D1B39", boxShadow: "0 22px 44px -22px rgba(9,16,32,0.55)" }}>
              <svg className="mb-6 size-7 text-[#2F6BFF]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <blockquote className="flex-1 text-pretty text-base leading-relaxed text-foreground/90">
                "{q.quote}"
              </blockquote>
              <figcaption
                className="mt-6 flex items-center gap-3 rounded-2xl p-4"
                style={{ background: "#0D1B39", boxShadow: "inset 5px 5px 10px #060b18, inset -5px -5px 10px #142a50" }}
              >
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
        <h2 className="mb-16 text-center font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0D1B39] md:text-6xl">
          Perguntas frequentes
        </h2>
        <Stagger className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="card-elevated overflow-hidden" style={{ background: "#0D1B39" }}>
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
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-foreground/5 px-6 py-5 text-sm text-muted-foreground">
                    {it.a}
                  </div>
                </div>
              </div>
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
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-balance font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
          <span className="text-[#0D1B39]">Vender nunca foi tão simples.</span>
        </h2>

        <p className="mt-6 text-lg text-[#0D1B39]">
          Sem mensalidade. Sem fidelidade. Sem surpresa.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton
            href="https://app.usenummo.com.br/dashboard/register"
            className="w-[230px]"
          >
            Criar Conta
          </PrimaryButton>

          <GhostButton
            href="https://wa.me/5511912002801?text=Olá!%20Fiquei%20interessado(a)%20em%20criar%20uma%20conta%20na%20Nummo%20e%20gostaria%20de%20ajuda."
            target="_blank"
            rel="noopener noreferrer"
            className="w-[230px] whitespace-nowrap !border-[#2F6BFF] !bg-[#2F6BFF] !text-[#F6F9FC] hover:!border-[#2559d8] hover:!bg-[#2559d8]"
          >
            Falar com especialista
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
    <footer className="relative overflow-hidden bg-[#0D1B39] px-6 pb-10 pt-20 text-[#F6F9FC]">
      {/* Glow sutil no topo */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-72 radial-glow opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          {/* Marca */}
          <div>
            <RouterLink to="/" className="inline-flex items-center" aria-label="Nummo — início">
              <img src="/logo-nummo.svg" alt="Nummo" width={145} height={24} className="h-[24px] w-auto" />
            </RouterLink>
            <p className="mt-5 max-w-xs text-sm text-[#F6F9FC]/55">
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
                  className="grid size-9 place-items-center rounded-full border border-white/12 bg-white/[0.03] text-[#F6F9FC]/60 transition-colors hover:border-[#2F6BFF]/50 hover:bg-[#2F6BFF]/15 hover:text-[#2F6BFF]"
                >
                  <span className="[&>svg]:size-4">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Colunas de links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { t: "Produtos", l: ["Checkout Builder", "Marketplace", "Co-Produção", "Rec. de Vendas"] },
              { t: "Empresa", l: ["Sobre", "Parceiros", "E-mail", "WhatsApp"] },
              { t: "Recursos", l: ["Documentação", "Status", "Changelog", "Integrações"] },
              { t: "Legal", l: ["Privacidade", "Termos", "Cookies", "Compliance"] },
            ].map((col) => (
              <div key={col.t}>
                <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#F6F9FC]/45">
                  {col.t}
                </div>
                <ul className="space-y-1">
                  {col.l.map((i) => {
                    const to = FOOTER_ROUTES[i];
                    const ext = FOOTER_LINKS[i];
                    const cls = "inline-block py-1.5 text-sm text-[#F6F9FC]/70 transition-colors hover:text-[#2F6BFF]";
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
                          <span className="inline-block py-1.5 text-sm text-[#F6F9FC]/70">
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
          <span className="text-xs text-[#F6F9FC]/50">© 2026 Nummo — Todos os direitos reservados.</span>
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
                className="font-display text-sm font-semibold tracking-tight text-[#F6F9FC]/40 transition-colors hover:text-[#F6F9FC]/80"
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
