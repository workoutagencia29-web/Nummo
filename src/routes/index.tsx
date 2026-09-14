import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import {
  ArrowRight, Check, ChevronDown, CreditCard,
  Link, Layers, Barcode, Copy, ExternalLink, Search,
  Instagram, Youtube, Linkedin, Menu, X,
  AlertTriangle, ShieldCheck, Users,
  Lock, KeyRound, Activity,
} from "lucide-react";
import { SiCurl, SiNodedotjs, SiPython, SiPhp, SiRuby, SiGo, SiOpenjdk, SiDotnet, SiCplusplus, SiRust } from "react-icons/si";
import { useState, useEffect, useRef, Fragment, Children, isValidElement, cloneElement } from "react";
import { TestimonialsColumn } from "../components/ui/testimonials-columns-1";
import { FaqCategorized } from "../components/ui/faq-4";
import { Header } from "../components/ui/header-3";
import { PaymentsBento } from "../components/ui/payments-bento";
import Velaris from "../components/ui/velaris";

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

// Página de documentação da API (ajuste para a URL real quando existir).
export const NUMMO_DOCS_URL = "https://docs.usenummo.com.br";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nummo | A infraestrutura de pagamentos para a nova economia brasileira." },
      { name: "description", content: "Receba na hora, com taxas transparentes e infraestrutura de pagamentos pensada para escalar." },
      { property: "og:title", content: "Nummo | A infraestrutura de pagamentos para a nova economia brasileira." },
      { property: "og:description", content: "Infraestrutura financeira brasileira: liquidez D+0, API moderna e segurança PCI-DSS." },
      { property: "og:url", content: "https://www.usenummo.com.br/" },
      { name: "twitter:title", content: "Nummo | A infraestrutura de pagamentos para a nova economia brasileira." },
      { name: "twitter:description", content: "Infraestrutura financeira brasileira: liquidez D+0, API moderna e segurança PCI-DSS." },
    ],
    links: [{ rel: "canonical", href: "https://www.usenummo.com.br/" }],
  }),
  component: Landing,
});

/* ------------------------------------------------------------------ */
/* Reusable atoms                                                      */
/* ------------------------------------------------------------------ */

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

function SectionEyebrow({ kicker, title, sub, titleClassName = "", center = false }: { kicker?: string; title: React.ReactNode; sub?: string; titleClassName?: string; center?: boolean }) {
  return (
    <div className={`mb-16 ${center ? "mx-auto max-w-[1220px] text-center" : "max-w-3xl"}`}>
      {kicker && (
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0D1B39]">
          / {kicker}
        </div>
      )}
      <h2 className={`text-balance text-4xl font-extrabold leading-[1.05] tracking-tight max-sm:text-[27px] md:text-[56px] ${titleClassName}`}>
        {title}
      </h2>
      {sub && <p className={`mt-6 max-w-xl text-pretty text-lg text-[#0D1B39] max-sm:text-[13px] ${center ? "mx-auto" : ""}`}>{sub}</p>}
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

// Orquestra o fluxo de suporte em loop: ao entrar na viewport, roda a cascata
// (card1 sobe → barra1 enche → card2 sobe → barra2 enche → card3 sobe),
// espera 2s, todos descem suave, espera 2s e reinicia — infinitamente.
function FlowLoop({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(el.querySelectorAll<HTMLElement>(".card-lift"));
    const bars = Array.from(el.querySelectorAll<HTMLElement>(".conn-fill"));
    const loaders = Array.from(el.querySelectorAll<HTMLElement>(".conn-loader"));

    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res) => { timers.push(window.setTimeout(res, ms)); });

    async function cycle() {
      // reset: barras vazias sem transição (evita "retração" visível)
      bars.forEach((b) => { b.classList.add("reset"); b.classList.remove("half", "full", "empty"); });
      void el!.offsetHeight; // reflow
      bars.forEach((b) => b.classList.remove("reset"));
      cards.forEach((c) => c.classList.remove("up"));
      loaders.forEach((l) => l.classList.remove("show"));

      await wait(1000); if (cancelled) return; // 1s antes do 1º card
      cards[0].classList.add("up");
      await wait(850); if (cancelled) return;  // sobe card 1

      for (let i = 0; i < bars.length; i++) {
        bars[i].classList.add("half");
        await wait(600); if (cancelled) return;   // enche até o meio
        loaders[i].classList.add("show");
        await wait(1500); if (cancelled) return;  // loader ~1,5s
        loaders[i].classList.remove("show");
        bars[i].classList.add("full");
        await wait(600); if (cancelled) return;   // completa
        cards[i + 1].classList.add("up");
        await wait(850); if (cancelled) return;   // sobe o próximo card
      }

      await wait(1000); if (cancelled) return;   // 1s com tudo em cima
      cards.forEach((c) => c.classList.remove("up")); // todos descem (suave)
      bars.forEach((b) => b.classList.add("empty"));  // barras somem junto
      await wait(850); if (cancelled) return;    // desce
      await wait(1000);                          // 1s parado antes de reiniciar
    }

    let started = false;
    const start = async () => {
      if (started) return;
      started = true;
      while (!cancelled) await cycle();
    };
    const io = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { io.disconnect(); void start(); } },
      { threshold: 0.5 },
    );
    io.observe(el);

    return () => { cancelled = true; io.disconnect(); timers.forEach((t) => clearTimeout(t)); };
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Entrada deslizando da borda direita até a posição final (usado no mockup dos Métodos).
function SlideInRight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { el.classList.add("in"); io.disconnect(); }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`slide-in-right ${className}`}>{children}</div>;
}

// Stagger: cada filho vira .reveal-child e recebe .in em sequência ao entrar na viewport.
function Stagger({ children, className = "", step = 90 }: { children: React.ReactNode; className?: string; step?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timers: ReturnType<typeof window.setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          Array.from(el.children).forEach((k, i) => {
            timers.push(window.setTimeout(() => k.classList.add("in"), i * step));
          });
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
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
      <Nav dark />
      <main id="conteudo">
        <Hero />
        <Reveal><PaymentMethods /></Reveal>
        <Reveal><Rates /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Reveal><Bento /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><FinalCta /></Reveal>
      </main>
      <Footer />
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
  { l: "Produtos", h: "plataforma", off: 70 },
  { l: "Taxas", h: "taxas", off: -176 },
  { l: "Integrações", h: "integracoes", off: -136 },
  { l: "Ajuda", h: "faq", off: -40 },
];

// Navbar do site — agora renderiza o novo Header (shadcn navigation-menu).
// Mantém o nome/So export `Nav` e o prop opcional `solid` (ignorado) para que
// todas as páginas que importam `Nav` continuem funcionando sem alteração.
export function Nav({ dark = false }: { solid?: boolean; dark?: boolean } = {}) {
  return <Header dark={dark} />;
}

// Fumacinha da xícara: SVG com turbulência (wisps que sobem e dissipam),
// ancorada por JS na borda da xícara respeitando o object-contain da imagem.
function CoffeeSteam({ imgRef, sectionRef }: { imgRef: React.RefObject<HTMLImageElement | null>; sectionRef: React.RefObject<HTMLElement | null> }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const CUP_FX = 0.686; // centro da borda da xícara (fração da imagem 1366x768)
    const CUP_FY = 0.318; // topo da borda
    const place = () => {
      const img = imgRef.current, sec = sectionRef.current, el = ref.current;
      if (!img || !sec || !el) return;
      if (!window.matchMedia("(min-width: 1024px)").matches) { el.style.opacity = "0"; return; }
      const box = img.getBoundingClientRect();
      const secRect = sec.getBoundingClientRect();
      const natW = img.naturalWidth || 1366, natH = img.naturalHeight || 768;
      const scale = Math.min(box.width / natW, box.height / natH); // object-contain
      const cW = natW * scale, cH = natH * scale;
      const offX = box.width - cW;        // object-right
      const offY = (box.height - cH) / 2; // vertical center
      const cupX = box.left + offX + CUP_FX * cW;
      const cupY = box.top + offY + CUP_FY * cH;
      el.style.left = `${cupX - secRect.left}px`;
      el.style.top = `${cupY - secRect.top}px`;
      el.style.setProperty("--cs-scale", String(Math.max(0.65, Math.min(1.35, (cW / natW) * 1.2))));
      el.style.opacity = "1";
    };
    place();
    const onR = () => place();
    window.addEventListener("resize", onR, { passive: true });
    const img = imgRef.current;
    if (img && !img.complete) img.addEventListener("load", place, { once: true });
    return () => { window.removeEventListener("resize", onR); };
  }, [imgRef, sectionRef]);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute z-[5] hidden lg:block"
      style={{ opacity: 0, transform: "translate(-50%,-100%) scale(var(--cs-scale,1))", transformOrigin: "50% 100%" }}
    >
      <svg width="96" height="168" viewBox="0 0 96 168" fill="none" style={{ overflow: "visible" }}>
        <defs>
          <filter id="cs-turb" x="-80%" y="-80%" width="260%" height="260%">
            <feTurbulence type="fractalNoise" baseFrequency="0.021 0.045" numOctaves="2" seed="7" result="n">
              <animate attributeName="baseFrequency" dur="13s" values="0.021 0.045;0.03 0.062;0.021 0.045" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="cs-blur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.6" />
          </filter>
        </defs>
        <g filter="url(#cs-turb)">
          <g filter="url(#cs-blur)" fill="#ffffff">
            <ellipse className="cs-wisp cs-w1" cx="48" cy="132" rx="9" ry="27" />
            <ellipse className="cs-wisp cs-w2" cx="48" cy="132" rx="8" ry="24" />
            <ellipse className="cs-wisp cs-w3" cx="48" cy="132" rx="7" ry="22" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Estampa o ícone da Nummo (anel) na face frontal da caneca, ancorado por JS
// respeitando o object-contain da imagem (mesma matemática do CoffeeSteam).
// Perspectiva (rotateY) transforma o círculo em elipse = superfície do cilindro;
// mix-blend-mode multiply deixa as ranhuras/sombra da cerâmica atravessarem o
// logo, dando o efeito de estampado. Só desktop (imagem só aparece no lg+).
function MugLogo({ imgRef, sectionRef }: { imgRef: React.RefObject<HTMLImageElement | null>; sectionRef: React.RefObject<HTMLElement | null> }) {
  const ref = useRef<HTMLDivElement>(null);
  // ——— ajuste fino ———
  const MUG_FX = 0.672;  // centro horizontal do logo (fração da imagem 1366x768)
  const MUG_FY = 0.349;  // centro vertical (na barriga da caneca, abaixo da borda)
  const SIZE = 0.024;    // diâmetro do logo como fração da largura da imagem
  const ROT_Y = -26;     // curvatura do cilindro: quanto o logo "vira" na superfície
  const PERSP = 130;     // px de perspectiva — MENOR = bordas recuam mais (mais cilíndrico)
  const ROT_Z = -4;      // leve inclinação p/ acompanhar a caneca
  const OPACITY = 0.7;
  useEffect(() => {
    if (typeof window === "undefined") return;
    const place = () => {
      const img = imgRef.current, sec = sectionRef.current, el = ref.current;
      if (!img || !sec || !el) return;
      if (!window.matchMedia("(min-width: 1024px)").matches) { el.style.opacity = "0"; return; }
      const box = img.getBoundingClientRect();
      const secRect = sec.getBoundingClientRect();
      const natW = img.naturalWidth || 1366, natH = img.naturalHeight || 768;
      const scale = Math.min(box.width / natW, box.height / natH); // object-contain
      const cW = natW * scale, cH = natH * scale;
      const offX = box.width - cW;        // object-right
      const offY = (box.height - cH) / 2; // vertical center
      const x = box.left + offX + MUG_FX * cW;
      const y = box.top + offY + MUG_FY * cH;
      el.style.left = `${x - secRect.left}px`;
      el.style.top = `${y - secRect.top}px`;
      el.style.width = `${SIZE * cW}px`;
      el.style.height = `${SIZE * cW}px`;
      el.style.opacity = "1";
    };
    place();
    const onR = () => place();
    window.addEventListener("resize", onR, { passive: true });
    const img = imgRef.current;
    if (img && !img.complete) img.addEventListener("load", place, { once: true });
    return () => { window.removeEventListener("resize", onR); };
  }, [imgRef, sectionRef]);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute z-[6] hidden lg:block"
      style={{
        opacity: 0,
        transform: `translate(-50%,-50%) perspective(${PERSP}px) rotateY(${ROT_Y}deg) rotate(${ROT_Z}deg)`,
        transformOrigin: "50% 50%",
        mixBlendMode: "multiply",
      }}
    >
      <svg viewBox="0 0 1080 1080" width="100%" height="100%" style={{ display: "block", opacity: OPACITY, filter: "blur(0.4px)" }}>
        <circle cx="540" cy="540" r="360" fill="none" stroke="#2F6BFF" strokeWidth="170" />
      </svg>
    </div>
  );
}

// Anéis pontilhados concêntricos girando lentamente (dashes "viajam" ao redor).
// Só transform: rotate() → compositado na GPU, sem repaint, sem brigar com o scroll.
function HeroOrbits() {
  const rings = [
    { size: 620, opacity: 0.16, duration: "90s", reverse: false },
    { size: 920, opacity: 0.11, duration: "150s", reverse: true },
    { size: 1240, opacity: 0.07, duration: "210s", reverse: false },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2">
      {rings.map((r) => (
        <div
          key={r.size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: r.size, height: r.size }}
        >
          <div
            className="animate-hero-orbit size-full rounded-full border border-dashed border-[#F6F9FC]"
            style={{
              opacity: r.opacity,
              animationDuration: r.duration,
              animationDirection: r.reverse ? "reverse" : "normal",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="grad-night relative -mt-[73px] flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-32 text-[#F6F9FC] max-sm:pb-24 max-sm:pt-28 md:min-h-[calc(100svh+150px)]">
      <HeroOrbits />
      {/* brilho azul suave atrás do título */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[520px] w-[760px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F6BFF]/12 blur-[130px]" />
      {/* Brilho azul na altura da DOBRA (só desktop): recria o "degrade" do grad-night
          na parte visível ao entrar, já que a base da seção agora fica mais abaixo. */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[100svh] z-0 hidden h-[440px] w-[1100px] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#3b7fe6]/40 blur-[100px] md:block" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* selo com brilho girando ao redor */}
        <div className="animate-hero-in [animation-delay:120ms]">
          <span className="relative inline-flex overflow-hidden rounded-full p-[3px]">
            <span
              aria-hidden
              className="animate-hero-spark absolute inset-[-60%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#5b8bff_360deg)]"
            />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-[#0a1322] px-3 py-1 text-sm shadow-sm">
              <span className="rounded-full bg-gradient-to-r from-[#2559d8] to-[#5b8bff] px-2 py-[1px] text-[10px] font-semibold uppercase tracking-wide text-white">
                Novo
              </span>
              <span className="text-[#F6F9FC]/75 max-sm:text-[13px]">Pix, cartão e boleto em uma só API</span>
            </span>
          </span>
        </div>

        <h1 className="animate-hero-in mt-7 text-balance text-[40px] font-bold leading-[1.02] tracking-tight text-[#F6F9FC] [animation-delay:240ms] max-sm:text-[34px] md:text-[64px] lg:text-[72px]">
          Seja o protagonista,
          <br />
          <span className="text-[#5b8bff]">vem pra Nummo!</span>
        </h1>

        <p className="animate-hero-in mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#F6F9FC]/70 [animation-delay:420ms] max-sm:text-[15px] lg:text-lg">
          Receba na hora, com taxas transparentes e uma infraestrutura de pagamentos pensada para escalar.
        </p>

        <div className="animate-hero-in mt-8 flex flex-col items-center gap-3 [animation-delay:600ms] max-sm:w-full sm:flex-row sm:justify-center">
          <PrimaryButton
            size="lg"
            href="https://app.usenummo.com.br/dashboard/register"
            className="h-[56px] w-[240px] justify-center !bg-[#2559d8] hover:!bg-[#1f4fc4] max-sm:w-full"
          >
            Criar Conta
          </PrimaryButton>
          <a
            href="https://wa.me/5511912002801?text=Olá!%20Fiquei%20interessado(a)%20em%20criar%20uma%20conta%20na%20Nummo%20e%20gostaria%20de%20ajuda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[56px] w-[240px] items-center justify-center gap-2 rounded-full border border-[#F6F9FC]/25 bg-[#F6F9FC]/[0.06] px-8 text-base font-medium text-[#F6F9FC] backdrop-blur transition-colors hover:border-[#F6F9FC]/40 hover:bg-[#F6F9FC]/[0.12] max-sm:w-full"
          >
            Falar com Especialista
          </a>
        </div>
      </div>

      {/* Onda branca com seta para baixo — indicador de "role para baixo" que faz a
          transição do hero escuro para a próxima seção (clara). */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px z-20 hidden justify-center md:flex">
        <button
          type="button"
          aria-label="Rolar para a próxima seção"
          onClick={(e) =>
            e.currentTarget
              .closest("section")
              ?.nextElementSibling?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="group pointer-events-auto relative block w-[300px] max-w-[82vw]"
        >
          <svg viewBox="0 0 300 64" className="block h-[64px] w-full" aria-hidden>
            <path d="M0,64 C90,64 96,14 150,14 C204,14 210,64 300,64 Z" fill="#F6F9FC" />
          </svg>
          <span className="pointer-events-none absolute inset-x-0 top-[26px] flex justify-center">
            <ChevronDown
              className="animate-chev-bounce size-6 text-[#0D1B39] transition-colors group-hover:text-[#2559d8]"
              strokeWidth={2.5}
            />
          </span>
        </button>
      </div>
    </section>
  );
}

const SCORE_METRICS = [
  { label: "Clareza", value: 100 },
  { label: "Confiança", value: 100 },
  { label: "Urgência", value: 80 },
  { label: "Fricção", value: 100 },
  { label: "Mobile", value: 100 },
  { label: "Preparo", value: 0 },
];

// Painel "Conversion Score" do Checkout Builder — anel de progresso + selo + barras.
function ConversionScore() {
  const score = 91;
  const radius = 42;
  const circ = 2 * Math.PI * radius;
  const dash = (circ * score) / 100;
  const [filled, setFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) { setFilled(true); return; }
    const io = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setFilled(true); io.disconnect(); } },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="rounded-xl border border-white/10 p-4">
      <div className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F6F9FC]/50">
        Conversion Score
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="relative size-28 shrink-0">
          <svg viewBox="0 0 100 100" className="size-full -rotate-90">
            <circle cx="50" cy="50" r={radius} fill="none" stroke="#F6F9FC" strokeOpacity="0.1" strokeWidth="9" />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#2F6BFF"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={filled ? circ - dash : circ}
              style={{ transition: "stroke-dashoffset 2.1s cubic-bezier(0.16, 1, 0.3, 1)" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold leading-none text-[#F6F9FC]">{score}</span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-wide text-[#F6F9FC]/50">de 100</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="flex size-11 items-center justify-center rounded-lg bg-[#2F6BFF] text-lg font-bold text-white">A</span>
          <span className="text-sm font-bold text-[#2F6BFF]">Excelente</span>
        </div>
      </div>
      <div className="mt-5 space-y-2.5">
        {SCORE_METRICS.map((m, i) => (
          <div key={m.label}>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#F6F9FC]/70">{m.label}</span>
              <span className="text-xs font-bold text-[#F6F9FC]">{m.value}</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#2F6BFF]"
                style={{ width: filled ? `${m.value}%` : "0%", transition: `width 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + i * 0.08}s` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Documentação da API do gateway (padrão dos gateways: navegação de endpoints
// à esquerda, prosa + exemplos de request/response por linguagem à direita).
type ApiParam = { name: string; type: string; required: boolean; desc: string };
type LangKey = "curl" | "node" | "python" | "php" | "ruby" | "go" | "java" | "csharp" | "cpp" | "rust";
type ApiEndpoint = {
  id: string;
  group: string;
  nav: string;
  method: "GET" | "POST" | "DELETE";
  path: string;
  title: string;
  desc: string;
  params: ApiParam[];
  request: Record<LangKey, string>;
  response: string;
};

const API_ENDPOINTS: ApiEndpoint[] = [
  {
    id: "auth",
    group: "Introdução",
    nav: "Autenticação",
    method: "GET",
    path: "/v1/balance",
    title: "Autenticação",
    desc: "Toda requisição usa sua chave secreta no header Authorization, sempre via HTTPS. Nunca exponha a chave no front-end.",
    params: [],
    request: {
      curl: `curl https://api.usenummo.com.br/v1/balance \\
  -H "Authorization: Bearer sk_live_..."`,
      node: `import { Nummo } from "nummo";

const nummo = new Nummo("sk_live_...");
const balance = await nummo.balance.retrieve();`,
      python: `import nummo
nummo.api_key = "sk_live_..."

balance = nummo.Balance.retrieve()`,
      php: `$nummo = new Nummo("sk_live_...");
$balance = $nummo->balance->retrieve();`,
      ruby: `Nummo.api_key = "sk_live_..."
balance = Nummo::Balance.retrieve`,
      go: `client := nummo.New("sk_live_...")
balance, _ := client.Balance.Retrieve(context.Background())`,
      java: `Nummo nummo = new Nummo("sk_live_...");
Balance balance = nummo.balance().retrieve();`,
      csharp: `var nummo = new NummoClient("sk_live_...");
var balance = await nummo.Balance.RetrieveAsync();`,
      cpp: `nummo::Client client("sk_live_...");
auto balance = client.balance().retrieve();`,
      rust: `let nummo = Nummo::new("sk_live_...");
let balance = nummo.balance().retrieve().await?;`,
    },
    response: `{
  "available": 1500000,
  "pending": 230000,
  "currency": "BRL"
}`,
  },
  {
    id: "create-charge",
    group: "Cobranças",
    nav: "Criar cobrança",
    method: "POST",
    path: "/v1/charges",
    title: "Criar cobrança",
    desc: "Cria uma cobrança via Pix, cartão de crédito ou boleto. Os valores são sempre em centavos (R$ 197,00 = 19700).",
    params: [
      { name: "amount", type: "integer", required: true, desc: "Valor da cobrança, em centavos." },
      { name: "payment_method", type: "string", required: true, desc: "pix, credit_card ou boleto." },
      { name: "customer", type: "object", required: true, desc: "Dados do cliente (nome, e-mail, documento)." },
      { name: "description", type: "string", required: false, desc: "Descrição exibida na fatura." },
    ],
    request: {
      curl: `curl https://api.usenummo.com.br/v1/charges \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 19700,
    "payment_method": "pix",
    "customer": { "email": "cliente@email.com" }
  }'`,
      node: `const charge = await nummo.charges.create({
  amount: 19700,
  payment_method: "pix",
  customer: { email: "cliente@email.com" },
});`,
      python: `charge = nummo.Charge.create(
    amount=19700,
    payment_method="pix",
    customer={"email": "cliente@email.com"},
)`,
      php: `$charge = $nummo->charges->create([
    "amount" => 19700,
    "payment_method" => "pix",
    "customer" => ["email" => "cliente@email.com"],
]);`,
      ruby: `charge = Nummo::Charge.create(
  amount: 19700,
  payment_method: "pix",
  customer: { email: "cliente@email.com" }
)`,
      go: `charge, _ := client.Charges.Create(ctx, &nummo.ChargeParams{
    Amount:        19700,
    PaymentMethod: "pix",
    Customer:      &nummo.Customer{Email: "cliente@email.com"},
})`,
      java: `Charge charge = nummo.charges().create(
    ChargeParams.builder()
        .amount(19700)
        .paymentMethod("pix")
        .customer(Customer.of("cliente@email.com"))
        .build());`,
      csharp: `var charge = await nummo.Charges.CreateAsync(new ChargeParams {
    Amount = 19700,
    PaymentMethod = "pix",
    Customer = new Customer { Email = "cliente@email.com" },
});`,
      cpp: `auto charge = client.charges().create({
    {"amount", 19700},
    {"payment_method", "pix"},
    {"customer", {{"email", "cliente@email.com"}}},
});`,
      rust: `let charge = nummo.charges().create(ChargeParams {
    amount: 19700,
    payment_method: "pix".into(),
    customer: Customer { email: "cliente@email.com".into() },
    ..Default::default()
}).await?;`,
    },
    response: `{
  "id": "chg_3a9f2c",
  "status": "pending",
  "amount": 19700,
  "payment_method": "pix",
  "pix": {
    "qr_code": "00020126...5204",
    "expires_at": "2026-09-13T18:30:00Z"
  }
}`,
  },
  {
    id: "get-charge",
    group: "Cobranças",
    nav: "Consultar cobrança",
    method: "GET",
    path: "/v1/charges/{id}",
    title: "Consultar cobrança",
    desc: "Recupera os detalhes e o status atual de uma cobrança pelo seu id.",
    params: [
      { name: "id", type: "string", required: true, desc: "Id da cobrança (informado na URL)." },
    ],
    request: {
      curl: `curl https://api.usenummo.com.br/v1/charges/chg_3a9f2c \\
  -H "Authorization: Bearer sk_live_..."`,
      node: `const charge = await nummo.charges.retrieve("chg_3a9f2c");`,
      python: `charge = nummo.Charge.retrieve("chg_3a9f2c")`,
      php: `$charge = $nummo->charges->retrieve("chg_3a9f2c");`,
      ruby: `charge = Nummo::Charge.retrieve("chg_3a9f2c")`,
      go: `charge, _ := client.Charges.Retrieve(ctx, "chg_3a9f2c")`,
      java: `Charge charge = nummo.charges().retrieve("chg_3a9f2c");`,
      csharp: `var charge = await nummo.Charges.RetrieveAsync("chg_3a9f2c");`,
      cpp: `auto charge = client.charges().retrieve("chg_3a9f2c");`,
      rust: `let charge = nummo.charges().retrieve("chg_3a9f2c").await?;`,
    },
    response: `{
  "id": "chg_3a9f2c",
  "status": "paid",
  "amount": 19700,
  "paid_at": "2026-09-13T18:12:04Z"
}`,
  },
  {
    id: "refund",
    group: "Cobranças",
    nav: "Reembolsar",
    method: "POST",
    path: "/v1/charges/{id}/refunds",
    title: "Reembolsar cobrança",
    desc: "Reembolsa total ou parcialmente uma cobrança paga. Omita amount para o reembolso total.",
    params: [
      { name: "amount", type: "integer", required: false, desc: "Valor a reembolsar, em centavos. Se omitido, reembolsa tudo." },
    ],
    request: {
      curl: `curl https://api.usenummo.com.br/v1/charges/chg_3a9f2c/refunds \\
  -H "Authorization: Bearer sk_live_..." \\
  -d '{ "amount": 19700 }'`,
      node: `const refund = await nummo.charges.refund("chg_3a9f2c", {
  amount: 19700,
});`,
      python: `refund = nummo.Charge.refund("chg_3a9f2c", amount=19700)`,
      php: `$refund = $nummo->charges->refund("chg_3a9f2c", [
    "amount" => 19700,
]);`,
      ruby: `refund = Nummo::Charge.refund("chg_3a9f2c", amount: 19700)`,
      go: `refund, _ := client.Charges.Refund(ctx, "chg_3a9f2c", &nummo.RefundParams{
    Amount: 19700,
})`,
      java: `Refund refund = nummo.charges().refund(
    "chg_3a9f2c",
    RefundParams.builder().amount(19700).build());`,
      csharp: `var refund = await nummo.Charges.RefundAsync("chg_3a9f2c", new RefundParams {
    Amount = 19700,
});`,
      cpp: `auto refund = client.charges().refund("chg_3a9f2c", {
    {"amount", 19700},
});`,
      rust: `let refund = nummo.charges().refund("chg_3a9f2c", RefundParams {
    amount: Some(19700),
}).await?;`,
    },
    response: `{
  "id": "ref_7b1e0a",
  "charge_id": "chg_3a9f2c",
  "status": "refunded",
  "amount": 19700
}`,
  },
  {
    id: "events",
    group: "Webhooks",
    nav: "Eventos",
    method: "GET",
    path: "/v1/events",
    title: "Eventos & webhooks",
    desc: "A Nummo envia um evento para a sua URL a cada mudança de status (charge.paid, charge.refunded…). Valide a assinatura no header Nummo-Signature. Você também pode listar os eventos por aqui.",
    params: [
      { name: "type", type: "string", required: false, desc: "Filtra por tipo de evento, ex.: charge.paid." },
    ],
    request: {
      curl: `curl https://api.usenummo.com.br/v1/events?type=charge.paid \\
  -H "Authorization: Bearer sk_live_..."`,
      node: `const events = await nummo.events.list({
  type: "charge.paid",
});`,
      python: `events = nummo.Event.list(type="charge.paid")`,
      php: `$events = $nummo->events->list([
    "type" => "charge.paid",
]);`,
      ruby: `events = Nummo::Event.list(type: "charge.paid")`,
      go: `events, _ := client.Events.List(ctx, &nummo.EventParams{
    Type: "charge.paid",
})`,
      java: `EventList events = nummo.events().list(
    EventParams.builder().type("charge.paid").build());`,
      csharp: `var events = await nummo.Events.ListAsync(new EventParams {
    Type = "charge.paid",
});`,
      cpp: `auto events = client.events().list({
    {"type", "charge.paid"},
});`,
      rust: `let events = nummo.events().list(EventParams {
    r#type: "charge.paid".into(),
}).await?;`,
    },
    response: `{
  "object": "list",
  "data": [
    {
      "id": "evt_5c8d1f",
      "type": "charge.paid",
      "created_at": "2026-09-13T18:12:05Z",
      "data": { "id": "chg_3a9f2c", "status": "paid" }
    }
  ]
}`,
  },
];

// Realce de sintaxe simples para os exemplos de JSON da documentação.
// Entrada 100% estática (definida acima), então o HTML gerado é seguro.
function highlightJson(code: string): string {
  const esc = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc.replace(
    /("(?:\\.|[^"\\])*")(\s*:)?|\b(\d+)\b|\b(true|false|null)\b/g,
    (m, str, colon, num, kw) => {
      if (str !== undefined) {
        return colon
          ? `<span style="color:#7cc5ff">${str}</span>${colon}`
          : `<span style="color:#9be08f">${str}</span>`;
      }
      if (num !== undefined) return `<span style="color:#e0b978">${num}</span>`;
      if (kw !== undefined) return `<span style="color:#e0b978">${kw}</span>`;
      return m;
    },
  );
}

// Bloco de código: números de linha, realce de sintaxe e botão de copiar.
function CodeBlock({ label, code, status }: { label: string; code: string; status?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try {
      navigator.clipboard?.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard indisponível */
    }
  };
  const lines = code.split("\n");
  return (
    <div className="overflow-hidden rounded-xl bg-[#060b16] ring-1 ring-inset ring-white/[0.06]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-wide text-[#F6F9FC]/40">{label}</span>
        <div className="ml-auto flex items-center gap-3">
          {status ? (
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#F6F9FC]/40">
              <span className="size-1.5 rounded-full bg-[#28c840]" />
              {status}
            </span>
          ) : null}
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1 text-[11px] text-[#F6F9FC]/45 transition-colors hover:text-[#F6F9FC]/85"
          >
            {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto px-4 py-4">
        <div className="min-w-max font-mono text-[12px] leading-relaxed md:text-[13px]">
          {lines.map((ln, i) => (
            <div key={i} className="flex">
              <span className="w-8 shrink-0 select-none pr-3 text-right text-[#F6F9FC]/25">{i + 1}</span>
              <code
                className="whitespace-pre text-[#F6F9FC]/85"
                dangerouslySetInnerHTML={{ __html: highlightJson(ln) || "&nbsp;" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Seção de documentação da API do gateway: "app" de docs com navegação de
// endpoints à esquerda; à direita, descrição + parâmetros e os exemplos de
// request/response por linguagem. CTA para a página completa da documentação.
function ApiDocs() {
  const [active, setActive] = useState(0);
  const [lang, setLang] = useState<LangKey>("curl");
  const ep = API_ENDPOINTS[active];
  const groups = Array.from(new Set(API_ENDPOINTS.map((e) => e.group)));
  const langs: {
    key: LangKey;
    label: string;
    Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
  }[] = [
    { key: "curl", label: "cURL", Icon: SiCurl, color: "#F6F9FC" },
    { key: "node", label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
    { key: "python", label: "Python", Icon: SiPython, color: "#4B8BBE" },
    { key: "php", label: "PHP", Icon: SiPhp, color: "#8892BF" },
    { key: "ruby", label: "Ruby", Icon: SiRuby, color: "#CC342D" },
    { key: "go", label: "Go", Icon: SiGo, color: "#00ADD8" },
    { key: "java", label: "Java", Icon: SiOpenjdk, color: "#E76F00" },
    { key: "csharp", label: "C#", Icon: SiDotnet, color: "#8A6BE2" },
    { key: "cpp", label: "C++", Icon: SiCplusplus, color: "#659AD2" },
    { key: "rust", label: "Rust", Icon: SiRust, color: "#DEA584" },
  ];
  const methodColor = (m: string) =>
    m === "GET" ? "#28c840" : m === "DELETE" ? "#ff5f57" : "#7cc5ff";

  return (
    <div>
      {/* Cabeçalho da seção */}
      <div className="mb-8 text-center">
        <span className="inline-block rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#7cc5ff]">
          Para desenvolvedores
        </span>
        <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#F6F9FC] md:text-4xl">
          Uma API feita para escalar
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-[#F6F9FC]/60 max-sm:text-sm">
          Preview da API da Nummo: REST, JSON e webhooks — com exemplos prontos em cURL, Node.js e Python.
        </p>
      </div>

      {/* "App" de documentação */}
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0C1730] shadow-[18px_26px_50px_-12px_rgba(0,0,0,0.6)]">
        {/* Chrome (barra estilo navegador) */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#0a1424] px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 hidden items-center gap-2 rounded-md bg-white/[0.04] px-3 py-1 font-mono text-xs text-[#F6F9FC]/45 sm:flex">
            <Lock className="size-3" />
            docs.usenummo.com.br
          </div>
          <span className="ml-auto rounded-md bg-[#2F6BFF]/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#7cc5ff]">
            API v1
          </span>
        </div>

        {/* Corpo: navegação + conteúdo */}
        <div className="grid lg:grid-cols-[240px_1fr]">
          {/* Navegação de endpoints */}
          <aside className="min-w-0 border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
            {/* Busca (visual) */}
            <div className="mb-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-[#F6F9FC]/35">
              <Search className="size-3.5" />
              Buscar na documentação
            </div>
            {groups.map((g) => (
              <div key={g} className="mb-5 last:mb-0">
                <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-[#F6F9FC]/40">
                  {g}
                </div>
                <div className="flex flex-col gap-0.5">
                  {API_ENDPOINTS.map((e, i) =>
                    e.group === g ? (
                      <button
                        key={e.id}
                        type="button"
                        onClick={() => setActive(i)}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                          active === i
                            ? "bg-[#2F6BFF]/12 font-medium text-[#F6F9FC]"
                            : "text-[#F6F9FC]/55 hover:bg-white/[0.03] hover:text-[#F6F9FC]/85"
                        }`}
                      >
                        <span
                          className="grid h-4 w-9 shrink-0 place-items-center rounded font-mono text-[9px] font-bold"
                          style={{ color: methodColor(e.method), background: methodColor(e.method) + "22" }}
                        >
                          {e.method}
                        </span>
                        {e.nav}
                      </button>
                    ) : null,
                  )}
                </div>
              </div>
            ))}
          </aside>

          {/* Conteúdo do endpoint — remonta a cada troca (fade suave via .tour-in) */}
          <div key={active} className="tour-in min-w-0">
            {/* Exemplos de código */}
            <div className="bg-[#091020] p-4 md:p-6">
              {/* Tabs de linguagem (com ícones) — grade alinhada: 5 por linha */}
              <div className="mb-4 grid grid-cols-3 gap-1.5 sm:grid-cols-5">
                {langs.map((l) => {
                  const on = lang === l.key;
                  return (
                    <button
                      key={l.key}
                      type="button"
                      onClick={() => setLang(l.key)}
                      className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
                        on
                          ? "bg-[#2F6BFF] text-white"
                          : "bg-white/[0.04] text-[#F6F9FC]/55 hover:text-[#F6F9FC]/85"
                      }`}
                    >
                      <l.Icon className="size-3.5 shrink-0" style={{ color: on ? "#ffffff" : l.color }} />
                      {l.label}
                    </button>
                  );
                })}
              </div>

              <CodeBlock label="Requisição" code={ep.request[lang]} />
              <div className="mt-4">
                <CodeBlock label="Resposta" code={ep.response} status="200 OK" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA — página completa da documentação */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <a
          href={NUMMO_DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-[#2F6BFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(47,107,255,0.6)] transition hover:bg-[#2559d8]"
        >
          Acessar documentação da API
          <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <span className="text-xs text-[#F6F9FC]/40">Referência completa, SDKs e ambiente de testes.</span>
      </div>

      <style>{`@keyframes tourIn{from{opacity:0}to{opacity:1}}.tour-in{animation:tourIn .5s cubic-bezier(0.4,0,0.2,1)}`}</style>
    </div>
  );
}

function Bento() {
  return (
    <section id="plataforma" className="grad-night-dev pb-24 pt-20 max-sm:pt-14">
      <div className="mx-auto max-w-7xl px-6">
        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:-translate-y-[40px]" step={200}>
          {/* Checkout Builder com IA + Área de membros + Marketplace —
              TEMPORARIAMENTE OCULTOS a pedido (serão reutilizados depois).
              Para reativar: trocar `false` por `true` no wrapper abaixo. */}
          {false && (<>
          {/* Big card */}
          <div
            className="noise relative -mt-[30px] overflow-hidden rounded-[28px] p-6 pt-[54px] text-[#F6F9FC] md:col-span-6 md:justify-self-start md:p-8 md:pt-[62px] lg:max-w-[840px]"
            style={{ background: "#0C1730", boxShadow: "0 22px 44px -22px rgba(9,16,32,0.55)" }}
          >
            <div className="absolute left-6 top-6 flex gap-2 md:left-8">
              <span className="size-3 rounded-full bg-[#FF5F57]" />
              <span className="size-3 rounded-full bg-[#FEBD2E]" />
              <span className="size-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <h3 className="font-display text-3xl font-medium tracking-tight">
                  Checkout Builder com IA
                </h3>
                <p className="mt-4 text-[#F6F9FC]/75">
                  A IA da Nummo analisa seu checkout, dá uma nota e mostra o que trava suas vendas, sugerindo melhorias em cada etapa.
                </p>

                <div className="mt-5 grid translate-y-[7px] gap-2.5 lg:grid-cols-2">
                  {/* Score de conversão (IA) */}
                  <ConversionScore />
                  {/* Recomendações da IA */}
                  <div className="flex h-full flex-col gap-3">
                    {[
                      { title: "Pixel de rastreamento ativo", pts: 6, desc: "Cadastre um pixel (Meta/GTM) ativo na aba Pixel de Conversão.", tab: "Pixel de Conversão" },
                      { title: "Suporte (SAC) visível", pts: 3, desc: "Preencha e-mail e WhatsApp do SAC em Informações Gerais.", tab: "Informações Gerais" },
                      { title: "Página de vendas informada", pts: 2, desc: "Informe a URL da página de vendas em Informações Gerais.", tab: "Informações Gerais" },
                      { title: "Depoimentos de clientes", pts: 4, desc: "Adicione provas sociais na aba Componentes do checkout.", tab: "Componentes" },
                    ].map((r) => (
                      <div key={r.title} className="flex flex-1 flex-col justify-center rounded-lg border border-white/10 p-2.5">
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle className="size-3 shrink-0 text-[#2F6BFF]" />
                          <span className="text-[11px] font-semibold text-[#F6F9FC]">{r.title}</span>
                          <span className="text-[9px] text-[#F6F9FC]/70">+{r.pts}pts</span>
                        </div>
                        <p className="mt-1 text-[10px] leading-snug text-[#F6F9FC]/55">{r.desc}</p>
                        <div className="mt-2 inline-flex self-start rounded-md border border-[#2F6BFF]/30 bg-[#2F6BFF]/12 px-2 py-0.5 text-[9px] font-semibold text-[#2F6BFF]">
                          Configure na aba "{r.tab}"
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BentoCard
            className="md:col-span-2"
            icon={<Users />}
            title="Área de membros"
            text="Hospede seu curso e entregue o conteúdo."
          />
          <BentoCard
            className="md:col-span-2"
            icon={<Layers />}
            title="Marketplace"
            text="Cadastre vários vendedores e a Nummo cuida do resto: split e repasse automático, KYC de cada seller e saldo com saque próprio. Tudo em uma só estrutura."
          />
          </>)}

          {/* Foto do notebook (metodos-dashboard-2.png) + degradê radial.
              TEMPORARIAMENTE OCULTA a pedido (será reutilizada depois).
              Para reativar: trocar `false` por `true` abaixo. O PNG segue em /public. */}
          {false && (
          <div
            className="relative flex min-h-[438px] items-start justify-center md:col-span-2"
          >
            <img
              src="/metodos-dashboard-2.png"
              alt="Dashboard da Nummo no notebook"
              width={2160}
              height={2160}
              loading="lazy"
              decoding="async"
              className="w-full select-none object-contain"
              draggable={false}
              style={{
                WebkitMaskImage: "radial-gradient(125% 100% at 50% 0%, #000 72%, rgba(0,0,0,0.3) 89%, transparent 100%)",
                maskImage: "radial-gradient(125% 100% at 50% 0%, #000 72%, rgba(0,0,0,0.3) 89%, transparent 100%)",
              }}
            />
          </div>
          )}
        </Stagger>

        {/* Documentação da API do gateway */}
        <ApiDocs />
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
      className={`relative min-h-[438px] overflow-hidden rounded-[28px] p-8 text-[#F6F9FC] ${className}`}
      style={{ background: "#0C1730", boxShadow: "0 16px 32px -18px rgba(9,16,32,0.5)" }}
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
    </div>
  );
}

function PaymentMethods() {
  return (
    <section className="py-32 max-sm:pt-6 max-sm:pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          titleClassName="max-sm:!text-[27px]"
          title={<span className="text-[#0D1B39]">Venda onde e <span className="text-[#0D1B39]">como quiser</span></span>}
          sub="Aceite os principais meios de pagamento e use as ferramentas que aumentam a sua conversão."
        />
        <PaymentsBento />
      </div>
    </section>
  );
}

// Notificações de venda no estilo iOS 17/18 (banner translúcido, ícone squircle
// do app, título em negrito + horário à direita, corpo abaixo). Componente
// autocontido: preenche a coluna esquerda da seção Taxas sem tocar em mais nada.
// Arranjo em cascata "embaralhada": cada card recebe um deslocamento horizontal
// (off), rotação (rot), escala, opacidade e blur próprios — os do fundo ficam
// menores/translúcidos/desfocados (profundidade), com um card central em foco.
// Posicionamento absoluto num container de altura fixa (< coluna do texto),
// então NÃO altera o fluxo nem a altura da página.
function SaleNotifications() {
  // Todos os cards têm a MESMA largura e altura (tamanho de um banner do iPhone).
  // A variação fica só na posição (top/off), rotação e profundidade (opacidade/blur).
  const CARD_W = 340;
  const CARD_H = 76;
  const items = [
    { time: "agora", value: "R$ 149,90", detail: "Pix", top: 4, off: 36, rot: -3, op: 0.8, blur: 1.2, z: 10 },
    { time: "1 min", value: "R$ 1.290,00", detail: "Cartão · 3x", top: 82, off: -28, rot: 2.5, op: 0.96, blur: 0, z: 30 },
    { time: "2 min", value: "R$ 89,90", detail: "Pix", top: 164, off: 52, rot: -1.5, op: 1, blur: 0, z: 40 },
    { time: "4 min", value: "R$ 4.500,00", detail: "Cartão", top: 250, off: -12, rot: 3, op: 0.93, blur: 0, z: 20 },
    { time: "6 min", value: "R$ 320,00", detail: "Boleto", top: 332, off: 42, rot: -2.5, op: 0.72, blur: 1.7, z: 5 },
  ];
  // Ordem de aparição (índices dos cards): topo → base → 2ª de baixo → 2ª de cima → meio.
  const ORDER = [0, 4, 3, 1, 2];
  const STEP = 0.3; // s entre cada notificação

  const ref = useRef<HTMLDivElement>(null);
  // "armed" esconde os cards antes de entrarem em cena (setado no cliente, com a
  // seção ainda fora da viewport → sem flash); "play" dispara a animação escalonada.
  // Sem JS ou com reduced-motion os cards ficam visíveis e estáticos (fallback).
  const [armed, setArmed] = useState(false);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setPlay(true); io.disconnect(); } },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex justify-center max-sm:order-last sm:hidden lg:flex">
      <div data-nl-anchor="notif" className="relative h-[416px] w-full max-w-[440px] max-sm:h-[280px] max-sm:origin-top max-sm:scale-[0.68]">
        {items.map((n, i) => {
          const step = ORDER.indexOf(i);
          // Card interno: só ele anima (opacidade + subida). A opacidade final de
          // profundidade fica no wrapper, então a animação 0→1 não a sobrescreve.
          const cardStyle: React.CSSProperties = { width: CARD_W, height: CARD_H };
          if (play) cardStyle.animation = `notifIn 0.72s cubic-bezier(0.22,1,0.36,1) ${step * STEP}s both, notifFloat ${4 + i * 0.55}s ease-in-out ${step * STEP + 0.72}s infinite`;
          else if (armed) cardStyle.opacity = 0;
          return (
            <div
              key={i}
              className="notif-card absolute left-1/2 top-0"
              style={{
                top: n.top,
                zIndex: n.z,
                opacity: n.op,
                filter: n.blur ? `blur(${n.blur}px)` : undefined,
                transform: `translateX(calc(-50% + ${n.off}px)) rotate(${n.rot}deg)`,
              }}
            >
              <div
                className="flex items-center gap-3 rounded-[22px] border border-white/70 bg-white/75 px-4 shadow-[0_20px_48px_-14px_rgba(13,27,57,0.32)] backdrop-blur-xl"
                style={cardStyle}
              >
                {/* Ícone do app (squircle azul + anel branco, coerente com o favicon) */}
                <div className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[12px] bg-gradient-to-br from-[#2F6BFF] to-[#1E4FD6] shadow-[0_4px_10px_rgba(47,107,255,0.45)]">
                  <svg width="21" height="21" viewBox="0 0 40 40" aria-hidden="true">
                    <circle cx="20" cy="20" r="12.5" fill="none" stroke="#fff" strokeWidth="7" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[15px] font-semibold tracking-[-0.01em] text-[#0D1B39]">Venda aprovada</span>
                    <span className="shrink-0 text-[12px] font-medium text-[#0D1B39]/40">{n.time}</span>
                  </div>
                  <p className="mt-0.5 text-[14px] leading-snug text-[#0D1B39]/65">
                    <span className="font-semibold text-[#0D1B39]/85">{n.value}</span> recebidos · {n.detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Keyframe escopado (não mexe no styles.css global) */}
      <style>{`@keyframes notifIn { from { opacity: 0; transform: translateY(16px) scale(0.96); } to { opacity: 1; transform: none; } } @keyframes notifFloat { 0%, 100% { translate: 0 0; } 50% { translate: 0 -6px; } }`}</style>
    </div>
  );
}

function Rates() {
  return (
    <section id="taxas" className="relative overflow-hidden bg-[#03060c] pb-[118px] pt-[98px] text-[#F6F9FC] max-sm:pb-14 max-sm:pt-16">
      <Velaris className="absolute inset-0" height="100%" speed={2.2} />

      {/* Animação das laterais: orbes de luz + partículas flutuando (atrás do conteúdo) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden sm:block">
        {/* esquerda */}
        <div className="taxa-orb-1 absolute left-[-60px] top-[16%] size-56 rounded-full bg-[#3b8bff]/25 blur-[75px]" />
        <div className="taxa-orb-2 absolute left-[3%] top-[52%] size-40 rounded-full bg-[#5b8bff]/20 blur-[60px]" />
        <div className="taxa-orb-3 absolute bottom-[6%] left-[-30px] size-44 rounded-full bg-[#2559d8]/25 blur-[65px]" />
        {/* direita */}
        <div className="taxa-orb-2 absolute right-[-60px] top-[10%] size-52 rounded-full bg-[#3b8bff]/22 blur-[75px]" />
        <div className="taxa-orb-3 absolute right-[2%] top-[46%] size-36 rounded-full bg-[#5b8bff]/22 blur-[55px]" />
        <div className="taxa-orb-1 absolute bottom-[8%] right-[-40px] size-48 rounded-full bg-[#2559d8]/22 blur-[65px]" />
        {/* partículas */}
        <div className="taxa-tw absolute left-[8%] top-[28%] size-1.5 rounded-full bg-white/80" style={{ animationDelay: "0s" }} />
        <div className="taxa-tw absolute left-[14%] top-[68%] size-1 rounded-full bg-[#8fb6ff]" style={{ animationDelay: "1.2s" }} />
        <div className="taxa-tw absolute right-[10%] top-[24%] size-1.5 rounded-full bg-white/80" style={{ animationDelay: "0.6s" }} />
        <div className="taxa-tw absolute right-[7%] top-[60%] size-1 rounded-full bg-[#8fb6ff]" style={{ animationDelay: "2s" }} />
        <div className="taxa-tw absolute bottom-[18%] right-[16%] size-1.5 rounded-full bg-white/70" style={{ animationDelay: "1.6s" }} />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 max-sm:gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Notificações de venda no estilo iOS (ocultas no tablet) */}
        <SaleNotifications />

        {/* Texto */}
        <div>
          <h2 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-[#F6F9FC] max-sm:text-[27px] md:text-5xl">
            Seu negócio não precisa caber em uma taxa padrão
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#F6F9FC]/85 max-sm:text-sm">
            Temos <span className="font-semibold text-[#5b8bff]">uma vasta seleção</span> de planos definidos conforme o perfil de atuação da sua empresa. E, conforme seu negócio evolui, cresce em volume ou muda de estrutura, suas condições podem ser revisadas para acompanhar essa nova fase.
          </p>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#F6F9FC]/70 max-sm:text-[13px]">
            Comece com o plano ideal hoje e{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-[#5b8bff] underline-offset-2 transition-colors hover:text-white hover:underline">negocie condições ainda melhores</a>{" "}
            quando sua operação pedir.
          </p>
        </div>
      </div>
    </section>
  );
}

type Integration = { alt: string; src?: string; node?: React.ReactNode; tone: "color" | "mono" | "node"; wide?: boolean };

// Chip redondo branco com a logo da integração dentro (estilo do IntegrationHero).
function IntegrationChip({ l }: { l: Integration }) {
  return (
    <div className="group/chip mx-3.5 flex size-[92px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_10px_28px_-12px_rgba(13,27,57,0.28)] ring-1 ring-[#0D1B39]/[0.05] transition-transform duration-300 hover:-translate-y-1 max-sm:mx-2.5 max-sm:size-[72px]">
      {l.tone === "node" ? (
        // TikTok: inline em navy via currentColor.
        <span role="img" aria-label={l.alt} className="text-[#0D1B39] [&>svg]:size-11 max-sm:[&>svg]:size-9">
          {l.node}
        </span>
      ) : l.tone === "mono" ? (
        // UTMify (wordmark) pintado em navy #0D1B39 via CSS mask.
        <span
          role="img"
          aria-label={l.alt}
          className="block h-11 w-14 max-sm:h-9 max-sm:w-11"
          style={{
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
        // Coloridos intactos — reconhecibilidade de marca.
        <img
          src={l.src}
          alt={l.alt}
          className={`object-contain ${l.wide ? "max-h-9 max-w-16" : "max-h-12 max-w-14"} max-sm:max-h-10 max-sm:max-w-12`}
          draggable={false}
          loading="lazy"
        />
      )}
    </div>
  );
}

function HowItWorks() {
  const integrations: Integration[] = [
    { src: "/logos/meta.svg", alt: "Meta Ads", tone: "color" },
    { src: "/logos/google-ads.svg", alt: "Google Ads", tone: "color" },
    { src: "/logos/tiktok.svg", alt: "TikTok Ads", tone: "color" },
    { src: "/logos/kwai.webp", alt: "Kwai Ads", tone: "color" },
    { src: "/logos/utmify.svg", alt: "UTMify", tone: "color" },
    { src: "/logos/notazz.webp", alt: "Notazz", tone: "color" },
    { src: "/logos/astron.webp", alt: "Astron", tone: "color" },
    { src: "/logos/gmail.svg", alt: "Gmail", tone: "color" },
    { src: "/logos/sms.webp", alt: "SMS", tone: "color", wide: true },
  ];
  // Fileira de baixo rotacionada: evita o efeito "espelho" com a de cima.
  const bottomRow = [...integrations.slice(3), ...integrations.slice(0, 3)];

  const fade =
    "linear-gradient(to right, transparent 0, black 96px, black calc(100% - 96px), transparent 100%)";
  return (
    <section id="integracoes" className="py-28 max-sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow
          center
          title={<span className="text-[#0D1B39]">Tudo o que sua operação precisa, conectado <br className="max-sm:hidden" /><span className="text-[#0D1B39]">em um só lugar</span></span>}
          sub="Conecte anúncios, trackers e emissão de notas, área de membros, à Nummo e centralize sua operação em um só fluxo."
        />
        <div className="-mt-8 flex justify-center">
          <PrimaryButton
            size="lg"
            href="https://app.usenummo.com.br/dashboard/register"
            className="!bg-[#2559d8] hover:!bg-[#1f4fc4]"
          >
            Criar conta grátis
          </PrimaryButton>
        </div>

        {/* Esteira: duas fileiras em sentidos opostos (→ em cima, ← embaixo), com
            fade nas bordas. Roda sempre, sem pausar no hover. Tudo com transform (marquee) → sem jank. */}
        <div
          className="relative mt-16 overflow-hidden max-sm:mt-12"
          style={{ maskImage: fade, WebkitMaskImage: fade }}
        >
          <div className="flex w-max animate-marquee-right py-2">
            {/* 4x: cada "metade" (2x) é mais larga que a tela → loop sem vão branco. */}
            {[...integrations, ...integrations, ...integrations, ...integrations].map((l, i) => (
              <IntegrationChip key={i} l={l} />
            ))}
          </div>
          <div className="mt-4 flex w-max animate-marquee py-2">
            {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map((l, i) => (
              <IntegrationChip key={i} l={l} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Faixa azul — Diferenciais (comparativo Outras soluções x Nummo)     */
/* ------------------------------------------------------------------ */

const DIFF_NEG = [
  "Taxas abusivas",
  "Dinheiro bloqueado",
  "Taxa de aprovação baixa",
  "Ferramenta enxuta",
  "Sistema ultrapassado",
  "Suporte lento",
];

const DIFF_POS = [
  "As melhores taxas do mercado",
  "Liquidação D+0",
  "Alta taxa de aprovação no checkout",
  "Ferramenta super intuitiva com IA",
  "Manual completo de funcionalidades e integrações",
  "Suporte humanizado 24/7",
];

function DiffCard({ title, sub, items, positive = false, logo = false }: { title?: string; sub: string; items: string[]; positive?: boolean; logo?: boolean }) {
  return (
    <div className="rounded-[28px] bg-[#0C1730] p-8 md:p-10">
      <div className="text-center">
        <div className="flex h-8 items-center justify-center">
          {logo ? (
            <img src="/logo-nummo.svg" alt="Nummo" width={130} height={22} className="h-5 w-auto" />
          ) : (
            <h3 className="font-display text-2xl font-bold uppercase leading-none tracking-tight text-[#F6F9FC]">{title}</h3>
          )}
        </div>
        <p className="mx-auto mt-3 whitespace-nowrap text-sm text-[#F6F9FC]/60 max-sm:whitespace-normal">{sub}</p>
      </div>
      <div className="my-8 h-px bg-white/10" />
      <ul className="space-y-5">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-3">
            {positive ? (
              <Check className="mt-0.5 size-5 shrink-0 text-[#2F6BFF]" strokeWidth={3} />
            ) : (
              <X className="mt-0.5 size-5 shrink-0 text-destructive" strokeWidth={3} />
            )}
            <span className={`text-[15px] leading-snug ${positive ? "text-[#F6F9FC]" : "text-[#F6F9FC]/80"}`}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Differentials() {
  return (
    <section id="para-devs" className="px-6 pb-[162px] pt-28 max-sm:pb-[130px] max-sm:pt-20">
      <div id="seguranca" className="mx-auto max-w-6xl">
        <h2 className="mx-auto mb-16 max-w-3xl -translate-y-[20px] text-center font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-[#F6F9FC] max-sm:mb-10 max-sm:text-[27px] md:max-w-none md:whitespace-nowrap md:text-[46px]">
          Um ecossistema pensado para seu negócio
        </h2>
        <div className="grid translate-y-[10px] items-stretch gap-6 md:grid-cols-2">
          <DiffCard
            title="Outras soluções"
            sub="Soluções incompletas e tradicionais do mercado"
            items={DIFF_NEG}
          />
          <DiffCard
            logo
            positive
            sub="A solução completa para escalar o seu negócio"
            items={DIFF_POS}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Faixa azul — Aprovação de pagamentos                                */
/* ------------------------------------------------------------------ */

const APPROVAL_STEPS = [
  { n: "01", label: "Gabriel (CLIENTE)", meta: "dados do pagamento" },
  { n: "02", label: "Tentativa de pagamento", meta: "autenticação" },
  { n: "03", label: "Análise da transação", meta: "análise de risco" },
  { n: "04", label: "Banco emissor", meta: "limite disponível · decisão do emissor" },
  { n: "05", label: "Pagamento aprovado", meta: "confirmado em segundos", done: true },
];

// Bloco 1 — o fluxo de uma transação até a aprovação. É o principal elemento visual.
// Os detalhes (dados, limite, risco, autenticação, decisão) entram como legendas
// discretas presas a cada nó, não como cards soltos.
function ApprovalFlow() {
  return (
    <section id="para-devs" className="px-6 pb-24 pt-24 max-sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-24 max-w-3xl text-center max-sm:mb-14 md:max-w-none">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#F6F9FC] max-sm:text-[27px] md:text-[56px]">
            Uma venda só existe quando o<br className="max-sm:hidden" /> pagamento é aprovado.
          </h2>
        </div>

        {/* Fluxo horizontal (desktop) — conectores reutilizam a barra .conn-fill (mesma animação do site) */}
        <div className="mx-auto hidden max-w-6xl items-start justify-center md:flex">
          {APPROVAL_STEPS.map((s, i) => (
            <Fragment key={s.n}>
              <div className="flex w-[172px] shrink-0 flex-col items-center text-center">
                <div className={`flex min-h-[78px] w-full flex-col items-center justify-center gap-1.5 rounded-[15px] px-4 py-3 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.55)] ${s.done ? "bg-white ring-2 ring-[#2F6BFF]/35" : "bg-[#eef4ff]"}`}>
                  {s.done ? (
                    <span className="flex size-6 items-center justify-center rounded-full bg-[#2F6BFF]">
                      <Check className="size-3.5 text-white" strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="font-sans text-[11px] font-bold tracking-wider text-[#2F6BFF]">{s.n}</span>
                  )}
                  <span className="text-[13px] font-bold leading-tight text-[#0D1B39]">{s.label}</span>
                </div>
                <span className="mt-3 max-w-[160px] text-[11px] leading-snug text-[#F6F9FC]/55">{s.meta}</span>
              </div>
              {i < APPROVAL_STEPS.length - 1 && (
                <div className="relative mx-2 mt-[38px] h-[3px] flex-1 rounded-full bg-white/12">
                  <span
                    className="conn-fill absolute inset-0 origin-left rounded-full bg-[#2F6BFF]"
                    style={{ animationDelay: `${i * 0.24}s` }}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Fluxo vertical (mobile) */}
        <div className="mx-auto flex max-w-[320px] flex-col items-stretch md:hidden">
          {APPROVAL_STEPS.map((s, i) => (
            <Fragment key={s.n}>
              <div className={`rounded-2xl px-4 py-3 text-center shadow-[0_16px_36px_-20px_rgba(0,0,0,0.55)] ${s.done ? "bg-white ring-2 ring-[#2F6BFF]/35" : "bg-[#eef4ff]"}`}>
                <div className="flex items-center justify-center gap-2">
                  {s.done ? (
                    <span className="flex size-5 items-center justify-center rounded-full bg-[#2F6BFF]">
                      <Check className="size-3 text-white" strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="font-sans text-[11px] font-bold text-[#2F6BFF]">{s.n}</span>
                  )}
                  <span className="text-[14px] font-bold text-[#0D1B39]">{s.label}</span>
                </div>
                <div className="mt-0.5 text-[11px] text-[#0D1B39]/55">{s.meta}</div>
              </div>
              {i < APPROVAL_STEPS.length - 1 && (
                <span className="mx-auto my-2 h-6 w-[3px] rounded-full bg-gradient-to-b from-[#2F6BFF] to-[#84A9FF]" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

const APPROVAL_TECH = [
  { icon: <ShieldCheck />, title: "Antifraude", text: "Análise de risco durante as transações." },
  { icon: <Lock />, title: "3DS 2.0", text: "Autenticação adicional quando necessária." },
  { icon: <KeyRound />, title: "Tokenização", text: "Proteção dos dados sensíveis do pagamento." },
  { icon: <Activity />, title: "Monitoramento", text: "Visibilidade sobre aprovações e recusas." },
];

// Chip de ícone reaproveita a receita neumórfica dos cards navy (BentoCard).
function TechItem({ icon, title, text, align = "left" }: { icon: React.ReactNode; title: string; text: string; align?: "left" | "right" }) {
  return (
    <div className={`flex items-start gap-4 ${align === "right" ? "flex-row-reverse text-right" : "text-left"}`}>
      <span
        className="flex size-11 shrink-0 items-center justify-center rounded-xl text-[#F6F9FC] [&>svg]:size-5"
        style={{ background: "#0D1B39", boxShadow: "inset 2px 2px 4px #080f22, inset -2px -2px 4px #12264a" }}
      >
        {icon}
      </span>
      <div>
        <h3 className="font-display text-lg font-semibold tracking-tight text-[#F6F9FC]">{title}</h3>
        <p className="mt-1 text-sm text-[#F6F9FC]/65">{text}</p>
      </div>
    </div>
  );
}

function ApprovalHub() {
  return (
    <div className="flex size-[132px] flex-col items-center justify-center gap-2 rounded-3xl bg-[#eef4ff] px-4 text-center shadow-[0_22px_50px_-20px_rgba(0,0,0,0.6)] max-sm:size-[120px]">
      <img src="/logo-nummo-dark.svg" alt="Nummo" width={110} height={18} className="h-[18px] w-auto" />
      <span className="text-[11px] font-semibold leading-tight text-[#0D1B39]/65">infraestrutura<br />de pagamentos</span>
    </div>
  );
}

// Bloco 2 — os 4 recursos ligados a um hub central (não uma grade de 4 cards).
function ApprovalTech() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto mb-16 max-w-3xl text-balance text-center font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#F6F9FC] max-sm:mb-10 max-sm:text-[27px] md:text-[56px]">
          Tecnologia trabalhando por trás de cada tentativa.
        </h2>

        {/* Hub central + 4 elementos conectados (desktop) */}
        <div className="relative mx-auto hidden max-w-4xl md:block">
          <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden>
            <path
              d="M50,50 L30,27 M50,50 L70,27 M50,50 L30,73 M50,50 L70,73"
              stroke="#2F6BFF"
              strokeOpacity={0.5}
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="0.1 11"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-x-10">
            <div className="flex flex-col gap-16">
              <TechItem {...APPROVAL_TECH[0]} align="right" />
              <TechItem {...APPROVAL_TECH[2]} align="right" />
            </div>
            <ApprovalHub />
            <div className="flex flex-col gap-16">
              <TechItem {...APPROVAL_TECH[1]} align="left" />
              <TechItem {...APPROVAL_TECH[3]} align="left" />
            </div>
          </div>
        </div>

        {/* Empilhado (mobile) */}
        <div className="flex flex-col items-center gap-10 md:hidden">
          <ApprovalHub />
          <div className="w-full max-w-sm space-y-7">
            {APPROVAL_TECH.map((t) => (
              <TechItem key={t.title} icon={t.icon} title={t.title} text={t.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const APPROVAL_STATS = [
  { value: "10.000", label: "Tentativas", accent: false },
  { value: "9.240", label: "Aprovadas", accent: false },
  { value: "92,4%", label: "Taxa de aprovação", accent: true },
];

// Bloco 3 — performance (números ilustrativos) + fechamento + CTA.
function ApprovalStats() {
  return (
    <section id="seguranca" className="px-6 pb-40 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-4xl items-center justify-center gap-4 max-sm:flex-col max-sm:gap-0">
          {APPROVAL_STATS.map((st, i) => (
            <Fragment key={st.label}>
              <div className="text-center max-sm:py-3">
                <div className={`font-display text-5xl font-extrabold leading-none tracking-tight md:text-6xl ${st.accent ? "text-[#6E9BFF]" : "text-[#F6F9FC]"}`}>
                  {st.value}
                </div>
                <div className="mt-2 text-sm text-[#F6F9FC]/60">{st.label}</div>
              </div>
              {i < APPROVAL_STATS.length - 1 && (
                <>
                  <div className="relative mx-2 mt-[-18px] hidden h-[3px] w-24 shrink-0 rounded-full bg-white/12 sm:block">
                    <span className="conn-fill absolute inset-0 origin-left rounded-full bg-[#2F6BFF]" style={{ animationDelay: `${i * 0.3}s` }} />
                  </div>
                  <span className="my-1 h-6 w-[3px] rounded-full bg-gradient-to-b from-[#2F6BFF] to-[#84A9FF] sm:hidden" />
                </>
              )}
            </Fragment>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-[#F6F9FC]/45">Exemplo meramente ilustrativo.</p>

        {/* Fechamento + CTA */}
        <div className="mx-auto mt-24 max-w-3xl text-center max-sm:mt-16">
          <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#F6F9FC] max-sm:text-[27px] md:text-[56px]">
            Mais vendas começam com pagamentos aprovados.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-[#F6F9FC]/70 max-sm:text-[13px]">
            A Nummo conecta tecnologia, segurança e dados para construir uma infraestrutura preparada para cada tentativa de pagamento.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryButton
              size="lg"
              href="https://app.usenummo.com.br/dashboard/register"
              className="!bg-[#2559d8] shadow-[0_14px_34px_-10px_rgba(47,107,255,0.8)] hover:!bg-[#1f4fc4]"
            >
              Começar com a Nummo
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { text: "Trocamos de gateway e a taxa de aprovação do checkout subiu logo na primeira semana. Com o Pix caindo na hora e o D+0, nosso fluxo de caixa deixou de ser um problema.", image: "/depoimentos/p1.jpg", name: "Rafael Almeida", role: "CEO · E-commerce" },
  { text: "Recebo pelo Pix na hora e reinvisto em tráfego no mesmo dia. O D+0 mudou completamente a velocidade com que a gente escala as campanhas.", image: "/depoimentos/p2.jpg", name: "Juliana Costa", role: "Head de Growth" },
  { text: "A conciliação ficou simples e o antifraude derrubou nossos chargebacks. Hoje fecho o financeiro em minutos, não em dias.", image: "/depoimentos/p3.jpg", name: "Marcos Oliveira", role: "Diretor Financeiro" },
  { text: "O split automático com meus coprodutores e afiliados acabou com as planilhas e os repasses manuais. Economizo horas toda semana.", image: "/depoimentos/p4.jpg", name: "Camila Ferreira", role: "Fundadora · Cursos" },
  { text: "A API é limpa e bem documentada. Integramos o checkout em dois dias e os webhooks são confiáveis. Nunca perdemos um evento de pagamento.", image: "/depoimentos/p5.jpg", name: "Bruno Carvalho", role: "CTO · SaaS" },
  { text: "O checkout transparente aumentou nossa conversão de forma perceptível. Menos abandono no carrinho e mais venda aprovada.", image: "/depoimentos/p6.jpg", name: "Patrícia Souza", role: "Gerente de E-commerce" },
  { text: "Pix, cartão e boleto numa API só, com liquidação rápida. Conseguimos lançar novos meios de pagamento sem virar noite de dev.", image: "/depoimentos/p7.jpg", name: "Thiago Mendes", role: "Head de Produto" },
  { text: "Gerencio o pagamento de dezenas de clientes num painel só. O saque cai rápido e o suporte responde de verdade quando a gente precisa.", image: "/depoimentos/p8.jpg", name: "Fernanda Lima", role: "CEO · Tráfego pago" },
  { text: "Hospedo o curso na área de membros e recebo pelo mesmo ecossistema. Ter venda, entrega e afiliados integrados simplificou minha operação inteira.", image: "/depoimentos/p9.jpg", name: "Lucas Ribeiro", role: "Gestor de produtos" },
];

const firstColumn = TESTIMONIALS.slice(0, 3);
const secondColumn = TESTIMONIALS.slice(3, 6);
const thirdColumn = TESTIMONIALS.slice(6, 9);

function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-24 -translate-y-[30px] text-center font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0D1B39] max-sm:text-[27px] md:text-[56px]">
          Clientes que não voltam atrás
        </h2>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} className="md:-translate-x-[33px]" duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block translate-x-[33px]" duration={17} />
        </div>
      </div>
    </section>
  );
}

const FAQ_CATEGORIES = [
  {
    name: "Conta e pagamentos",
    faqs: [
      { question: "Preciso ter CNPJ para abrir conta?", answer: "Sim. A Nummo atende empresas (MEI, ME, EPP e médias/grandes). Cadastro 100% online e aprovação da conta normalmente em até 24h, sujeita à análise cadastral e de segurança (KYC)." },
      { question: "Quanto custa começar?", answer: "Criar conta é gratuito, sem mensalidade e sem fidelidade. As taxas incidem apenas sobre vendas aprovadas e são descontadas automaticamente no momento da transação." },
      { question: "Quais meios de pagamento a Nummo aceita?", answer: "A Nummo aceita Pix (com recebimento na hora), cartão de crédito das principais bandeiras (Visa, Mastercard, Elo e Amex) e boleto com emissão automática — tudo em uma única integração." },
      { question: "Quando recebo o dinheiro das minhas vendas?", answer: "A Nummo trabalha com liquidação D+0: as vendas no Pix caem na hora e você recebe no mesmo dia, o que acelera o seu fluxo de caixa para reinvestir mais rápido." },
      { question: "Quanto tempo leva para sacar?", answer: "Os saques na Nummo são processados diariamente das 06h às 15h. Após a solicitação, o valor é creditado em sua conta em até 1 a 2 horas. Solicitações realizadas fora desse horário serão processadas no próximo período de atendimento, a partir das 06h." },
    ],
  },
  {
    name: "Produtos e vendas",
    faqs: [
      { question: "O que é o Checkout Builder?", answer: "É o construtor de checkout da Nummo. Você monta o seu checkout e a IA analisa cada etapa, dá uma nota e mostra exatamente o que está travando as suas vendas, sugerindo melhorias ponto a ponto." },
      { question: "Como funciona a área de membros da Nummo?", answer: "Hospede seu curso gratuitamente na área de membros da Nummo. O armazenamento e a exibição dos seus vídeos também estão inclusos, sem nenhum custo adicional." },
      { question: "Como funciona o programa de afiliados da Nummo?", answer: "Na Nummo, você pode divulgar seu produto no marketplace para atrair novos afiliados ou convidar parceiros diretamente por meio de um link personalizado." },
      { question: "É possível adicionar coprodutores aos meus produtos?", answer: "Sim. Você pode incluir quantos coprodutores precisar e configurar a divisão das comissões diretamente pela plataforma da Nummo." },
      { question: "Posso cadastrar vários vendedores no marketplace?", answer: "Sim. Você cadastra vários vendedores e a Nummo cuida do resto: split e repasse automático, KYC de cada seller e saldo com saque próprio — tudo em uma só estrutura." },
    ],
  },
  {
    name: "Segurança e tecnologia",
    faqs: [
      { question: "Como a Nummo protege os meus pagamentos?", answer: "A Nummo segue o padrão PCI-DSS e conta com antifraude, que analisa o risco durante as transações, além de autenticação 3DS 2.0 quando necessária — ajudando a reduzir chargebacks." },
      { question: "A Nummo tem API e webhooks para integração?", answer: "Sim. A API da Nummo é moderna e bem documentada, com webhooks confiáveis para você integrar o checkout e acompanhar cada evento de pagamento em tempo real." },
      { question: "A Nummo tem boa taxa de aprovação?", answer: "Sim. A Nummo é focada em alta taxa de aprovação no checkout, combinando um checkout transparente com antifraude para aprovar mais vendas legítimas e reduzir recusas indevidas." },
    ],
  },
];

// JSON-LD FAQPage — habilita rich results na busca (conteúdo já existe no acordeão).
const FAQ_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((c) => c.faqs).map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

function Faq() {
  return (
    // Bloco escuro — quebra o ritmo claro da página. O fundo (gradiente azul → preto,
    // luz nascendo da base) e os tokens de cor da seção vêm da classe global `.faq`
    // (styles.css), aplicada aqui no container inteiro — nunca nos cards.
    <div id="faq" className="faq grad-night-faq scroll-mt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSONLD }} />
      <FaqCategorized
        title="Perguntas frequentes"
        description="Tire suas dúvidas sobre conta, pagamentos e produtos."
        categories={FAQ_CATEGORIES}
        className="relative z-10"
      />
    </div>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:-translate-y-[45px]">
        <h2 className="text-balance font-display text-5xl font-extrabold leading-[1.02] tracking-tight max-sm:text-[44px] md:text-7xl">
          <span className="text-[#0D1B39]">Vender nunca foi tão simples</span>
        </h2>

        <p className="mt-6 text-lg text-[#0D1B39] max-sm:text-[13px]">
          Sem mensalidade. Sem fidelidade. Sem surpresa.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 max-sm:flex-nowrap max-sm:gap-2">
          <PrimaryButton
            href="https://app.usenummo.com.br/dashboard/register"
            className="w-[230px] !bg-[#2559d8] hover:!bg-[#1f4fc4] max-sm:w-auto max-sm:flex-1 max-sm:px-2 max-sm:text-[13px]"
          >
            Criar Conta
          </PrimaryButton>

          <GhostButton
            href="https://wa.me/5511912002801?text=Olá!%20Fiquei%20interessado(a)%20em%20criar%20uma%20conta%20na%20Nummo%20e%20gostaria%20de%20ajuda."
            target="_blank"
            rel="noopener noreferrer"
            className="w-[230px] whitespace-nowrap !border-transparent !bg-[#F6F9FC] !text-[#0D1B39] backdrop-blur-none !shadow-[6px_6px_14px_#d3dbea,-6px_-6px_14px_#ffffff] hover:!bg-[#F6F9FC] max-sm:w-auto max-sm:flex-1 max-sm:px-2 max-sm:text-[13px]"
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
  // Redes sociais — Instagram é link; os demais ainda não têm canal,
  // então ficam como botões visuais SEM função (não são <a>).
  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/use.nummo" },
    { icon: <TikTok />, label: "TikTok" },
    { icon: <Youtube size={20} />, label: "YouTube" },
    { icon: <Linkedin size={20} />, label: "LinkedIn" },
  ];

  return (
    <footer className="grad-night-lg h-fit w-full text-[#F6F9FC]/70">
      <div className="relative z-40 mx-auto max-w-7xl p-8 sm:p-14">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.5fr_3fr] lg:gap-16">
          {/* Marca */}
          <div className="flex flex-col space-y-5">
            <RouterLink to="/" className="inline-flex items-center" aria-label="Nummo — início">
              <img src="/logo-nummo.svg" alt="Nummo" width={145} height={24} className="h-[24px] w-auto" />
            </RouterLink>
            <p className="max-w-xs text-sm leading-relaxed text-[#F6F9FC]/55">
              A infraestrutura de pagamentos para a nova economia brasileira.
            </p>
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
                <h4 className="mb-4 text-[10px] font-medium uppercase tracking-widest text-[#F6F9FC]/55">
                  {col.t}
                </h4>
                <ul className="space-y-1">
                  {col.l.map((i) => {
                    const to = FOOTER_ROUTES[i];
                    const ext = FOOTER_LINKS[i];
                    const cls = "inline-block py-2.5 text-sm text-[#F6F9FC]/70 transition-colors hover:text-[#3ca2fa]";
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
                          <span className="inline-block py-2.5 text-sm text-[#F6F9FC]/70">
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

        <hr className="my-8 border-t border-white/10" />

        {/* Barra inferior: redes sociais + copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <div className="flex items-center gap-5 text-[#F6F9FC]/60">
            {socialLinks.map((s) =>
              s.href ? (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors hover:text-[#3ca2fa] [&>svg]:size-5"
                >
                  {s.icon}
                </a>
              ) : (
                <span
                  key={s.label}
                  role="img"
                  aria-label={`${s.label} (em breve)`}
                  title="Em breve"
                  className="cursor-default text-[#F6F9FC]/40 [&>svg]:size-5"
                >
                  {s.icon}
                </span>
              ),
            )}
          </div>
          <p className="text-center text-[#F6F9FC]/50 md:text-right">
            © 2026 Nummo Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
