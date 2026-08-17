import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import {
  ArrowRight, Check, ChevronDown, CreditCard,
  Link, Layers, Barcode, DollarSign,
  Instagram, Youtube, Linkedin, Menu, X,
  AlertTriangle, ShieldCheck, Users,
  Lock, KeyRound, Activity,
} from "lucide-react";
import { useState, useEffect, useRef, Fragment, Children, isValidElement, cloneElement } from "react";
import { TestimonialsColumn } from "../components/ui/testimonials-columns-1";

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
      { title: "Nummo | A infraestrutura de pagamentos para a nova economia brasileira." },
      { name: "description", content: "Receba na hora, com taxas transparentes e infraestrutura de pagamentos pensada para escalar." },
      { property: "og:title", content: "Nummo | A infraestrutura de pagamentos para a nova economia brasileira." },
      { property: "og:description", content: "Infraestrutura financeira brasileira: liquidez D+0, API moderna e segurança PCI-DSS." },
      { property: "og:url", content: "https://usenummo.com.br/" },
      { name: "twitter:title", content: "Nummo | A infraestrutura de pagamentos para a nova economia brasileira." },
      { name: "twitter:description", content: "Infraestrutura financeira brasileira: liquidez D+0, API moderna e segurança PCI-DSS." },
    ],
    links: [{ rel: "canonical", href: "https://usenummo.com.br/" }],
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
      <Nav />
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
      <ScrollDrawLine />
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

export function Nav({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);

  // Fade in/out suave do menu mobile: mantém o menu montado durante o fade-out.
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuShown, setMenuShown] = useState(false);
  useEffect(() => {
    if (open) {
      setMenuMounted(true);
      // 2x rAF garante que o estado opacity-0 pinte antes de transicionar p/ opacity-100.
      let raf2 = 0;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setMenuShown(true));
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    }
    setMenuShown(false);
    const t = setTimeout(() => setMenuMounted(false), 520);
    return () => clearTimeout(t);
  }, [open]);

  // Header fixo (liquid glass): sobre o Hero escuro fica transparente + branco;
  // ao rolar para o conteúdo claro vira vidro fosco (backdrop-blur) + texto escuro.
  // `solid` (outras páginas) mantém o estilo branco sobre a barra navy.
  // `scrolled` aqui = "a pílula está sobre uma seção de fundo CLARO" (modo claro:
  // vidro fosco + texto escuro). Sobre seções escuras (Hero e a faixa navy dos
  // Produtos) fica false → modo escuro (vidro clear + texto branco).
  const [scrolled, setScrolled] = useState(true);
  useEffect(() => {
    if (solid) return;
    const NAV_Y = 50; // ponto vertical ~centro da pílula
    let ticking = false;
    const update = () => {
      const darkEls = [document.getElementById("plataforma")];
      const overDark = darkEls.some((el) => {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= NAV_Y && r.bottom >= NAV_Y;
      });
      setScrolled(!overDark);
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [solid]);
  const overlay = solid || !scrolled;

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
      <header className={`${solid ? "absolute bg-[#0D1B39]" : "fixed px-4 pt-4 sm:pt-5"} inset-x-0 top-0 z-50`}>
      <div className={solid ? "" : "mx-auto max-w-7xl"}>
      {/* Pílula flutuante (liquid glass) na home; barra navy cheia nas páginas solid. */}
      <div
        className={`relative transition-[background-color,box-shadow] duration-300 ${
          solid
            ? ""
            : `rounded-full backdrop-blur-2xl backdrop-saturate-[1.8] ${
                scrolled
                  ? "bg-white/40 shadow-[0_16px_44px_-16px_rgba(13,27,57,0.3)]"
                  : "bg-white/45 shadow-[0_12px_36px_-14px_rgba(13,27,57,0.28)] sm:bg-white/10 sm:shadow-[0_14px_40px_-10px_rgba(0,0,0,0.5)]"
              }`
        }`}
      >
      <div className={`relative flex items-center ${solid ? "h-20 px-6 lg:px-8" : "h-16 px-5 lg:px-6"}`}>
        <a href="/" onClick={scrollTop} className="flex shrink-0 translate-x-[2px] items-center" aria-label="Nummo — início">
          <img
            src={overlay ? "/logo-nummo.svg" : "/logo-nummo-dark.svg"}
            alt="Nummo"
            width={145}
            height={24}
            className={`h-5 w-auto select-none md:h-6 ${!solid ? "max-sm:hidden" : ""}`}
            draggable={false}
          />
          {!solid && (
            <img
              src="/logo-nummo-dark.svg"
              alt="Nummo"
              width={145}
              height={24}
              className="hidden h-5 w-auto select-none max-sm:block md:h-6"
              draggable={false}
            />
          )}
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

        <div className="ml-auto hidden shrink-0 translate-x-[8px] items-center gap-3 lg:flex">
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
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#2559d8] px-5 text-[15px] font-semibold text-white transition hover:bg-[#0052CC]"
          >
            Criar Conta
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`relative z-20 ml-auto rounded-md p-2.5 lg:hidden ${overlay ? "text-white" : "text-foreground"} ${!solid ? "max-sm:!text-foreground" : ""}`}
          aria-label={menuMounted ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {menuMounted ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      </div>

      {menuMounted && (
        <div
          id="mobile-nav"
          className={`mt-2 overflow-hidden rounded-3xl border border-[#0D1B39]/[0.06] bg-white/90 shadow-[0_16px_42px_-16px_rgba(13,27,57,0.3)] backdrop-blur-xl transition-opacity duration-300 ease-in-out lg:hidden ${menuShown ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <div className="flex flex-col gap-1 p-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.l}
                href={item.h ? `/#${item.h}` : "#"}
                onClick={(e) => {
                  navScroll(e, item.h, item.off);
                  setOpen(false);
                }}
                className="rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.l}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href="https://app.usenummo.com.br/dashboard/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-[#0D1B39]/15 py-2.5 text-center text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Entrar
              </a>
              <a
                href="https://app.usenummo.com.br/dashboard/register"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-[#2559d8] py-2.5 text-center text-sm font-semibold text-white"
              >
                Criar Conta
              </a>
            </div>
          </div>
        </div>
      )}
      </div>
      </header>
    </>
  );
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

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  return (
    <section ref={sectionRef} className="relative flex min-h-svh items-end overflow-hidden bg-[#F6F9FC] text-[#0D1B39] max-sm:items-center lg:items-center">
      {/* Foto e overlays escuros removidos — Hero usa o branco da Nummo (#F6F9FC) com texto escuro. */}
      {/* TESTE: imagem de fundo do Hero (desktop) */}
      <img
        ref={imgRef}
        src="/hero-graphic.png"
        alt=""
        aria-hidden
        className="absolute right-[2%] top-[56%] hidden h-[90%] w-[82%] -translate-y-1/2 object-contain object-right lg:block"
      />
      <CoffeeSteam imgRef={imgRef} sectionRef={sectionRef} />
      <MugLogo imgRef={imgRef} sectionRef={sectionRef} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 max-sm:-translate-y-8 max-sm:pb-0 lg:py-10">
        <div className="lg:mt-8">
          {/* Wrapper anima o fade+subida sem mexer nos transforms do título (desktop intacto).
              -translate-y sobe título e subtítulo sem tocar no layout (os botões ficam no lugar);
              usa a prop `translate`, que compõe com o `transform` da animação em vez de sobrescrevê-lo. */}
          <div className="animate-hero-in -translate-y-[52px] max-sm:-translate-y-[54px] [animation-delay:120ms]">
            <h1 className="text-left text-[32px] font-bold leading-[1.03] tracking-[-0.01em] text-[#0D1B39] max-sm:text-center max-[360px]:text-[28px] lg:whitespace-nowrap md:text-[42px] lg:text-left lg:text-[50px] xl:text-[54px]">
              <span className="inline-block text-[44px] font-bold leading-[0.98] max-sm:-translate-y-[8px] max-sm:text-[34px] max-sm:leading-[0.92] md:text-[60px] lg:-translate-y-2 lg:text-[68px] xl:text-[74px]">
                Seja o protagonista
              </span>
              <br />
              {/* inline-block é pré-requisito do translate: transform não se aplica a inline puro.
                  Sobe só a 2ª linha p/ colar na 1ª, sem mexer na altura do h1. */}
              <span className="inline-block -translate-y-1.5 font-bold text-[44px] max-sm:text-[34px] md:text-[60px] lg:text-[68px] xl:text-[74px]">vem pra Nummo!</span>
            </h1>
          </div>

          {/* Subtítulo — só no mobile/tablet */}
          <p className="animate-hero-in -translate-y-4 mt-5 max-w-md text-left text-[15px] leading-relaxed text-[#0D1B39]/70 max-sm:mx-auto max-sm:-translate-y-[18px] max-sm:text-center max-sm:text-[13px] [animation-delay:440ms] lg:max-w-lg lg:text-left lg:text-lg">
            Receba na hora, com taxas transparentes e uma infraestrutura de pagamentos pensada para escalar.
          </p>

          {/* Botões — só no mobile/tablet; no desktop o hero segue sem botões */}
          <div className="animate-hero-in mt-8 flex translate-y-[96px] flex-col items-start gap-3 max-sm:w-full max-sm:translate-y-[210px] max-sm:flex-row max-sm:items-stretch max-sm:gap-2 [animation-delay:760ms] lg:mt-10 lg:flex-row lg:items-center lg:justify-start">
            <PrimaryButton
              size="lg"
              href="https://app.usenummo.com.br/dashboard/register"
              className="h-[56px] w-[240px] justify-center !bg-[#2559d8] hover:!bg-[#1f4fc4] max-sm:w-auto max-sm:flex-1 max-sm:min-w-0 max-sm:!px-3 max-sm:!text-sm"
            >
              Criar Conta
            </PrimaryButton>
            <a
              href="https://wa.me/5511912002801?text=Olá!%20Fiquei%20interessado(a)%20em%20criar%20uma%20conta%20na%20Nummo%20e%20gostaria%20de%20ajuda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[56px] w-[240px] items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium text-[#0D1B39] shadow-[0_10px_30px_-8px_rgba(13,27,57,0.18)] transition hover:shadow-[0_14px_36px_-8px_rgba(13,27,57,0.26)] max-sm:w-auto max-sm:flex-1 max-sm:min-w-0 max-sm:whitespace-nowrap max-sm:px-2 max-sm:text-[13px]"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
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

// Tópicos da vitrine de produtos (tour em vídeo). videoId = ID do YouTube
// (enviar depois); enquanto null, mostra placeholder "Vídeo em breve".
const TOUR_ITEMS = [
  {
    key: "members",
    label: "Nummo Members",
    title: "Nummo Members",
    desc: "Hospede seu curso e entregue o conteúdo aos seus alunos direto pela Nummo, com área de membros, hospedagem e player de vídeo inclusos, sem custo adicional.",
    price: "R$ 0,00 / mês",
    videoId: null as string | null,
  },
  {
    key: "checkout",
    label: "Nummo Studio",
    title: "Nummo Studio com IA",
    desc: "Monte seu checkout e deixe a IA da Nummo analisar cada etapa, dar uma nota e mostrar exatamente o que está travando suas vendas.",
    price: "R$ 0,00 / mês",
    videoId: null as string | null,
  },
  {
    key: "marketplace",
    label: "Nummo Market",
    title: "Nummo Market",
    desc: "Cadastre vários vendedores e a Nummo cuida do resto: split e repasse automático, KYC de cada seller e saldo com saque próprio. Tudo em uma só estrutura.",
    price: "R$ 0,00 / mês",
    videoId: null as string | null,
  },
  {
    key: "subcontas",
    label: "Nummo Units",
    title: "Nummo Units",
    desc: "Organize sua operação em sub-contas independentes, cada uma com seu saldo, acessos e relatórios, tudo sob a mesma estrutura Nummo.",
    price: "R$ 0,00 / mês",
    videoId: null as string | null,
  },
];

// Vitrine de produtos no formato "tutorial": lista de tópicos à esquerda,
// card com vídeo/descrição/preço à direita. Clicar no tópico troca o card.
function ProductTours() {
  const [active, setActive] = useState(0);
  const item = TOUR_ITEMS[active];
  // Indicador azul deslizante: um único retângulo posicionado por JS sobre o
  // tópico ativo, com transição suave (padrão do site). Isolado ao ProductTours.
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const firstRun = useRef(true);
  useEffect(() => {
    const place = () => {
      const btn = btnRefs.current[active];
      const ind = indicatorRef.current;
      if (!btn || !ind) return;
      if (firstRun.current) ind.style.transition = "none"; // sem animar no 1º posicionamento
      ind.style.transform = `translateY(${btn.offsetTop}px)`;
      ind.style.height = `${btn.offsetHeight}px`;
      ind.style.width = `${btn.offsetWidth}px`;
      if (firstRun.current) {
        void ind.offsetWidth; // reflow p/ aplicar a posição sem transição
        ind.style.transition =
          "transform 1s cubic-bezier(0.4,0,0.2,1), height 1s cubic-bezier(0.4,0,0.2,1), width 1s cubic-bezier(0.4,0,0.2,1)";
        firstRun.current = false;
      }
    };
    place();
    window.addEventListener("resize", place, { passive: true });
    return () => window.removeEventListener("resize", place);
  }, [active]);
  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      {/* Coluna esquerda — tópicos clicáveis */}
      <div className="relative flex translate-y-[2px] flex-col gap-1.5">
        {/* Retângulo azul deslizante (posicionado/animado via JS) */}
        <div
          ref={indicatorRef}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 rounded-xl bg-[#2F6BFF]/12"
          style={{ height: 0, width: 0, transform: "translateY(0)" }}
        />
        {TOUR_ITEMS.map((t, i) => (
          <button
            key={t.key}
            ref={(el) => { btnRefs.current[i] = el; }}
            type="button"
            onClick={() => setActive(i)}
            className={`relative z-10 mr-[30px] rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
              i === active ? "text-[#F6F9FC]" : "text-[#F6F9FC]/55 hover:text-[#F6F9FC]/85"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Coluna direita — card do produto */}
      <div className="rounded-[24px] bg-[#0C1730] p-5 shadow-[18px_26px_50px_-12px_rgba(0,0,0,0.6)] md:p-6">
        {/* key={active} remonta o conteúdo a cada troca → replay do fade suave */}
        <div key={active} className="tour-in">
        <div className="flex items-start justify-between gap-4">
          <h3 className="translate-y-[5px] font-display text-2xl font-semibold tracking-tight text-[#F6F9FC] md:text-3xl">{item.title}</h3>
          {/* Botão "Usar Nummo" — removido a pedido. Reativar: trocar `false` por `true`. */}
          {false && (
          <a
            href="https://app.usenummo.com.br/dashboard/register"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[#2559d8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1f4fc4]"
          >
            Usar Nummo
          </a>
          )}
        </div>

        {/* Área do vídeo — embed do YouTube quando houver videoId; senão, placeholder */}
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-[#091020]">
          {item.videoId ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${item.videoId}`}
              title={item.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-[#F6F9FC]/40">
              <span className="grid size-16 place-items-center rounded-full bg-white/5 ring-1 ring-inset ring-white/10">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              </span>
              <span className="text-sm font-medium">Vídeo em breve</span>
            </div>
          )}
        </div>

        {/* Descrição */}
        <p className="mt-[35px] text-pretty text-sm leading-relaxed text-[#F6F9FC]/70 md:text-base">{item.desc}</p>

        {/* Preço */}
        <div className="mt-[30px] flex items-center gap-3">
          <span
            className="inline-flex size-11 items-center justify-center rounded-xl text-[#F6F9FC] [&>svg]:size-5"
            style={{
              background: "#0C1730",
              boxShadow: "inset 2px 2px 4px #070d1c, inset -2px -2px 4px #111f3d",
            }}
          >
            <DollarSign />
          </span>
          <span className="translate-x-[5px] text-lg font-medium text-[#F6F9FC]">{item.price}</span>
        </div>
        </div>
        <style>{`@keyframes tourIn{from{opacity:0}to{opacity:1}}.tour-in{animation:tourIn 1s cubic-bezier(0.4,0,0.2,1)}`}</style>
      </div>
    </div>
  );
}

function Bento() {
  return (
    <section id="plataforma" className="relative bg-[#0D1B39] pb-[118px] pt-[138px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-[104px] text-center max-sm:mb-[8px] max-sm:-translate-y-[30px] lg:-translate-y-[38px]">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#F6F9FC] max-sm:text-[27px] md:text-[56px]">
            <span className="lg:whitespace-nowrap">Produtos que simplificam <br className="hidden max-sm:inline" />sua operação hoje<span className="hidden max-sm:inline"> e</span></span>
            <br className="max-sm:hidden" />
            <br className="hidden max-sm:inline" />
            <span className="max-sm:hidden">e </span>escalam amanhã
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-[#F6F9FC]/70 max-sm:text-[13px] lg:-translate-y-[10px]">Um ecossistema construído e pensado para <br className="hidden max-sm:inline" />sua empresa.</p>
        </div>

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

        {/* Vitrine de produtos em vídeo (tour) */}
        <ProductTours />
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
  const methods = [
    { name: "Pix", desc: "Aprovação instantânea.", icon: <Pix /> },
    { name: "Cartões", desc: "Visa, Mastercard, Elo, Amex.", icon: <CreditCard /> },
    { name: "Boleto", desc: "Emissão automática.", icon: <Barcode /> },
    { name: "Link de Pagamento", desc: "Venda por link, sem ter um site.", icon: <Link /> },
  ];
  return (
    <section className="py-32 max-sm:pt-6 max-sm:pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:-translate-y-[50px]">
        <SectionEyebrow
          titleClassName="max-sm:!text-[27px]"
          title={<span className="text-[#0D1B39]">Venda onde e <span className="text-[#0D1B39]">como quiser</span></span>}
          sub="Aqui você tem acesso aos meios de pagamentos que o brasileiro usa de verdade."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          {/* 4 cards à esquerda */}
          <div className="grid grid-cols-2 gap-4 max-sm:gap-3">
            {methods.map((m) => (
              <div
                key={m.name}
                className="nm-press-light h-full rounded-[28px] p-6 max-sm:rounded-[22px] max-sm:p-4"
                style={{ background: "#F6F9FC" }}
              >
                <div
                  className="inline-flex size-11 items-center justify-center rounded-xl text-[#0D1B39] max-sm:size-9 max-sm:rounded-lg"
                  style={{
                    background: "#F6F9FC",
                    boxShadow: "inset 3px 3px 6px #d3dbea, inset -3px -3px 6px #ffffff",
                  }}
                >
                  <span className="[&>svg]:size-5 max-sm:[&>svg]:size-4">{m.icon}</span>
                </div>
                <div className="mt-8 h-px w-12 max-sm:mt-4 max-sm:w-10" style={{ background: "#0D1B39" }} />
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-[#0D1B39] max-sm:mt-3 max-sm:text-[17px]">{m.name}</h3>
                <p className="mt-2 text-sm text-[#0D1B39]/70 max-sm:mt-1.5 max-sm:text-[10px]">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Foto à direita (porquinho) — no lugar onde ficava o mockup do notebook. */}
          <div className="flex items-center justify-center lg:justify-end">
            <SlideInRight className="w-full max-w-md lg:max-w-lg">
            <div className="relative w-full max-sm:-translate-y-8 max-sm:scale-90 lg:-translate-y-[54px] lg:scale-110">
              {/* wrapper que move/escala porquinho + sombra juntos */}
              <div className="relative w-full translate-y-[37px] scale-[1.07]">
                {/* Sombra de contato realista sob o porquinho:
                    camada 1 = halo largo e suave (oclusão ambiente);
                    camada 2 = núcleo mais escuro logo sob as patas (contato). */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-[76%] h-[16%] w-[88%] -translate-x-1/2 rounded-[50%]"
                  style={{ background: "radial-gradient(50% 50% at 50% 45%, rgba(13,27,57,0.18), rgba(13,27,57,0.06) 55%, transparent 78%)", filter: "blur(11px)" }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-[80%] h-[9%] w-[62%] -translate-x-1/2 rounded-[50%]"
                  style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(13,27,57,0.42), rgba(13,27,57,0.16) 50%, transparent 74%)", filter: "blur(5px)" }}
                />
                <img
                  data-nl-anchor="pig"
                  src="/porquinho.png"
                  alt="Cofrinho com óculos de sol"
                  width={1080}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  className="relative w-full select-none object-contain"
                  draggable={false}
                />
                {/* Escurece suavemente a base/patas do porquinho (que estavam claras demais),
                    mascarado pela silhueta do PNG e em multiply, para casar com a sombra do chão. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    WebkitMaskImage: "url(/porquinho.png)",
                    maskImage: "url(/porquinho.png)",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    background: "linear-gradient(to top, rgba(23,34,66,0.42) 0%, rgba(23,34,66,0.26) 11%, rgba(23,34,66,0.1) 21%, transparent 31%)",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
            </SlideInRight>
          </div>
        </div>
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
    <div ref={ref} className="flex justify-center max-sm:order-last max-sm:-translate-x-[10px] sm:hidden lg:flex lg:-translate-x-[160px] lg:-translate-y-6 lg:justify-center">
      <div data-nl-anchor="notif" className="relative h-[416px] w-full max-w-[440px] max-sm:h-[366px] max-sm:origin-top max-sm:scale-[0.68]">
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
              className="absolute left-1/2 top-0"
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

// Linha que se "desenha" com o scroll ligando o porquinho às notificações de
// venda. Overlay FIXO (pointer-events none) que redesenha o caminho a cada
// frame em coordenadas de viewport; o traço fica amarrado ao progresso do
// scroll via stroke-dashoffset — some ao subir, completa ao descer, com um
// leve lerp p/ ficar sedoso. Só desktop (lg+), pois no mobile as notificações
// ficam ocultas. Totalmente isolado: não altera layout, fluxo nem altura.
function ScrollDrawLine() {
  const pathRef = useRef<SVGPathElement>(null);
  const arrowRef = useRef<SVGPathElement>(null);

  // ——— parâmetros de ajuste fino (fáceis de calibrar no olho) ———
  const PIG_FX = 0.483, PIG_FY = 0.828;   // saída: base/meio do porquinho (abaixo da sombra)
  const NOTIF_FX = 0.511, NOTIF_FY = 0.0; // chegada: descendo na esquerda do card de cima
  const TRIM_START = 6;                   // px cortados da ponta do PORQUINHO (sem deslocar)
  const TRIM_END = 15;                    // px cortados da ponta das NOTIFICAÇÕES (sem deslocar)
  // Caminho em ONDA (2 Béziers). Frações do vetor início→fim: x cresce p/ a
  // esquerda, y p/ baixo. 1ª curva = tombo reto + 1ª barriga; junção suave no
  // meio (crista); 2ª curva (S, tangente refletida) = mergulho abaixo dos cards
  // e gancho de subida — igual ao desenho da foto.
  const A1X = 0.0,  A1Y = 0.40;           // saída do porquinho: tombo quase reto
  const A2X = 0.15, A2Y = 0.50;           // sobe pro patamar alto
  const MX  = 0.47, MY  = 0.50;           // meio: PATAMAR ALTO, junção nivelada (sem subida)
  const B2X = 1.0,  B2Y = 0.46;           // desce direto p/ o card, sem cristinha antes de cair, ponta ~vertical
  const START_VH = 0.9, END_VH = 0.15;    // só começa a desenhar com o porquinho já em cena
  const BOOST_DRAW = 0.22;                // fração da linha desenhada no arranque acelerado
  const BOOST_SCROLL = 0.08;              // ...consumindo só essa fração do scroll (arranque rápido)
  const LERP = 0.14;                      // suavidade do traço (0..1)

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const path = pathRef.current;
    const arrow = arrowRef.current;
    const pig = document.querySelector('[data-nl-anchor="pig"]') as HTMLElement | null;
    const notif = document.querySelector('[data-nl-anchor="notif"]') as HTMLElement | null;
    if (!path || !arrow || !pig || !notif) return;

    let raf = 0;
    let running = false;
    let shown = 0; // progresso exibido (lerpado)

    const frame = () => {
      if (!running) return;
      const vh = window.innerHeight;
      const a = pig.getBoundingClientRect();
      const b = notif.getBoundingClientRect();
      const sx = a.left + a.width * PIG_FX;
      const sy = a.top + a.height * PIG_FY;
      const ex = b.left + b.width * NOTIF_FX;
      const ey = b.top + b.height * NOTIF_FY;
      const dx = ex - sx, dy = ey - sy;
      const fx = (f: number) => (sx + dx * f).toFixed(1);
      const fy = (f: number) => (sy + dy * f).toFixed(1);
      const d =
        `M ${sx.toFixed(1)} ${sy.toFixed(1)} ` +
        `C ${fx(A1X)} ${fy(A1Y)}, ${fx(A2X)} ${fy(A2Y)}, ${fx(MX)} ${fy(MY)} ` +
        `S ${fx(B2X)} ${fy(B2Y)}, ${ex.toFixed(1)} ${ey.toFixed(1)}`;
      path.setAttribute("d", d);
      const len = path.getTotalLength();

      const midY = (sy + ey) / 2;
      const startAt = vh * START_VH, endAt = vh * END_VH;
      let s = (startAt - midY) / (startAt - endAt); // progresso de scroll (linear)
      s = s < 0 ? 0 : s > 1 ? 1 : s;
      // Arranque acelerado: desenha BOOST_DRAW da linha nos primeiros BOOST_SCROLL
      // do scroll (rápido); depois segue em velocidade normal (linear) até o fim.
      const p = s < BOOST_SCROLL
        ? (s / BOOST_SCROLL) * BOOST_DRAW
        : BOOST_DRAW + ((s - BOOST_SCROLL) / (1 - BOOST_SCROLL)) * (1 - BOOST_DRAW);
      shown += (p - shown) * LERP;
      if (Math.abs(p - shown) < 0.0005) shown = p;

      // Corta um pedacinho das DUAS pontas (porquinho e notificações) sem mexer
      // no traçado: o traço visível vai de TRIM_START até len-TRIM_END, e ainda
      // "desenha" do porquinho → notificações conforme o scroll.
      const trackMax = Math.max(0, len - TRIM_START - TRIM_END);
      const drawn = Math.min(trackMax, len * shown - TRIM_START);
      if (drawn <= 0) {
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
        arrow.style.opacity = "0";
      } else {
        path.style.strokeDasharray = `${drawn} ${len}`;
        path.style.strokeDashoffset = `${-TRIM_START}`;
        // Seta na PONTA desenhada (lado das notificações): segue o traço no
        // scroll e gira p/ a tangente da linha (no fim, aponta pra baixo).
        const tipLen = TRIM_START + drawn;
        const tip = path.getPointAtLength(tipLen);
        const back = path.getPointAtLength(Math.max(0, tipLen - 6));
        const ang = (Math.atan2(tip.y - back.y, tip.x - back.x) * 180) / Math.PI;
        arrow.setAttribute("transform", `translate(${tip.x.toFixed(1)} ${tip.y.toFixed(1)}) rotate(${ang.toFixed(1)})`);
        arrow.style.opacity = "1";
      }

      raf = requestAnimationFrame(frame);
    };
    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(frame); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };

    // Só roda o loop quando a região está por perto (economiza bateria).
    const io = new IntersectionObserver(
      (e) => { if (e[0].isIntersecting) start(); else stop(); },
      { rootMargin: "700px 0px 700px 0px" },
    );
    io.observe(notif);
    return () => { io.disconnect(); stop(); };
  }, []);

  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden h-full w-full lg:block"
      width="100%"
      height="100%"
      fill="none"
    >
      <path
        ref={pathRef}
        stroke="#0D1B39"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
      {/* Seta minimalista na ponta (posicionada/rotacionada via JS a cada frame) */}
      <path
        ref={arrowRef}
        d="M -8 -5.5 L 0 0 L -8 5.5"
        stroke="#0D1B39"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0 }}
      />
    </svg>
  );
}

function Rates() {
  return (
    <section id="taxas" className="relative overflow-x-clip pb-[118px] pt-[98px] max-sm:pb-10 max-sm:pt-[2px]">
      <div className="mx-auto max-w-7xl px-6 lg:-translate-y-[28px]">
        <div className="grid grid-cols-1 items-center gap-14 max-sm:gap-[83px] lg:grid-cols-[1.6fr_1fr]">
          {/* Coluna antes ocupada pelo cartão: notificações de venda no estilo iOS.
              Ocultas no mobile (a coluna já ficava vazia lá) p/ não alterar o layout. */}
          <SaleNotifications />

          {/* Texto */}
          <div className="lg:-ml-24 lg:-translate-x-[8px] lg:-translate-y-12 xl:-ml-[170px]">
            <div className="invisible mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#0D1B39]" aria-hidden="true">/ Taxas</div>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0D1B39] max-sm:text-[27px] md:text-[56px] lg:whitespace-nowrap">
              Seu negócio não precisa <br className="hidden lg:inline" />caber em uma <br className="hidden lg:inline" />taxa padrão
            </h2>
            <p className="mt-6 text-pretty text-xl text-[#0D1B39] max-sm:text-[13px]">
              Temos <span className="font-semibold text-[#2F6BFF]">uma vasta seleção</span> de planos definidos conforme o perfil de atuação da sua empresa.
              E, conforme seu negócio evolui, cresce em volume ou muda de estrutura,
              suas condições podem ser revisadas para acompanhar essa nova fase.
            </p>
            <p className="mt-6 text-pretty text-base text-[#0D1B39] max-sm:text-[11px]">
              Comece com o plano ideal hoje e{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-[#2F6BFF] underline-offset-2 transition-colors hover:text-foreground hover:underline">negocie condições ainda melhores</a>{" "}
              quando sua operação pedir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type Integration = { alt: string; src?: string; node?: React.ReactNode; tone: "color" | "mono" | "node"; wide?: boolean };

// Neumorfismo modo claro — família dos cards de Métodos, com mais profundidade/contraste
// (sombra escura mais funda #c7d1e4) + filete de luz no topo p/ definir a borda.
const TILE_RAISED = "14px 14px 30px #c7d1e4, -12px -12px 26px #ffffff, inset 0 1px 0 #ffffff";
const SOCKET_INSET = "inset 5px 5px 10px #c7d1e4, inset -4px -4px 9px #ffffff";

// TILE elevado claro — receita dos cards de Métodos, escalada (10/10/20)
function IntegrationTile({ l }: { l: Integration }) {
  return (
    <div
      className="group/tile mr-6 flex h-[152px] w-[176px] shrink-0 flex-col items-center justify-center gap-3 rounded-[28px] p-3.5 max-sm:mr-3 max-sm:h-[104px] max-sm:w-[120px] max-sm:gap-1.5 max-sm:rounded-[18px] max-sm:p-2.5 sm:h-[168px] sm:w-[200px]"
    >
      {/* SOQUETE afundado — o "encaixe" onde cada integração pluga (rounded-xl = ícone dos Métodos).
          Quadrado e justo na logo: sem sobra horizontal, o card é que dá o respiro em volta. */}
      <div
        className="pointer-events-auto flex h-[86px] w-[86px] items-center justify-center rounded-xl max-sm:h-[58px] max-sm:w-[58px] max-sm:rounded-lg sm:h-[96px] sm:w-[96px]"
      >
        {l.tone === "node" ? (
          // TikTok: <TikTok/> inline em NAVY via currentColor (nunca branco — branco some no claro).
          <span
            role="img"
            aria-label={l.alt}
            className="text-[#0D1B39] opacity-90 transition-opacity duration-300 group-hover/tile:opacity-100 [&>svg]:h-[58px] [&>svg]:w-[58px] max-sm:[&>svg]:h-[39px] max-sm:[&>svg]:w-[39px]"
          >
            {l.node}
          </span>
        ) : l.tone === "mono" ? (
          // UTMify (wordmark branco) pintado em navy exato #0D1B39 via CSS mask (mesma cor do TikTok).
          <span
            role="img"
            aria-label={l.alt}
            className="block h-[52px] w-[63px] opacity-90 transition-opacity duration-300 group-hover/tile:opacity-100 max-sm:h-[35px] max-sm:w-[43px]"
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
          // Coloridos intactos — reconhecibilidade de marca > monocromia.
          <img
            src={l.src}
            alt={l.alt}
            className={`w-auto object-contain opacity-90 transition-opacity duration-300 group-hover/tile:opacity-100 ${l.wide ? "max-h-[58px] max-w-[108px] max-sm:max-h-[39px] max-sm:max-w-[74px]" : "max-h-[58px] max-w-[70px] max-sm:max-h-[39px] max-sm:max-w-[48px]"}`}
            draggable={false}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

function HowItWorks() {
  const integrations: Integration[] = [
    { src: "/logos/meta.webp", alt: "Meta Ads", tone: "color" },
    { src: "/logos/google-ads.webp", alt: "Google Ads", tone: "color" },
    { node: <TikTok />, alt: "TikTok Ads", tone: "node" },
    { src: "/logos/kwai.webp", alt: "Kwai Ads", tone: "color" },
    { src: "/logos/utmify.png", alt: "UTMify", tone: "mono" },
    { src: "/logos/notazz.webp", alt: "Notazz", tone: "color" },
    { src: "/logos/astron.webp", alt: "Astron", tone: "color" },
    { src: "/logos/gmail.svg", alt: "Gmail", tone: "color" },
    { src: "/logos/sms.png", alt: "SMS", tone: "color", wide: true },
  ];
  // Fileira de baixo rotacionada: evita o efeito "espelho" com a de cima.
  const bottomRow = [...integrations.slice(3), ...integrations.slice(0, 3)];

  return (
    <section id="integracoes" className="pb-[17px] pt-32 max-sm:pt-[2px] max-sm:pb-[85px]">
      <div className="mx-auto max-w-7xl px-6 lg:-translate-y-[38px]">
        <div className="lg:-translate-y-[82px]">
          <SectionEyebrow
            center
            title={<span className="text-[#0D1B39]">Tudo o que sua operação precisa, conectado <br /><span className="text-[#0D1B39]">em um só lugar</span></span>}
            sub="Conecte anúncios, trackers e emissão de notas, área de membros, à Nummo e centralize sua operação em um só fluxo."
          />
        </div>

        {/* Esteira de encaixe: duas fileiras encostadas em sentidos opostos (→ em cima, ← embaixo),
            lendo como uma correia contínua. overflow-hidden + máscara horizontal; o padding externo
            das fileiras existe p/ não cortar a sombra "raised" no topo e na base. */}
        <div
          className="group pointer-events-none relative -mt-[136px] translate-y-9 overflow-hidden max-sm:-mt-[101px] max-sm:translate-y-[61px]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee-right pb-3 pt-10 group-hover:[animation-play-state:paused]">
            {[...integrations, ...integrations].map((l, i) => (
              <IntegrationTile key={i} l={l} />
            ))}
          </div>
          <div className="flex w-max animate-marquee -mt-[32px] pb-10 pt-3 max-sm:-mt-[18px] group-hover:[animation-play-state:paused]">
            {[...bottomRow, ...bottomRow].map((l, i) => (
              <IntegrationTile key={i} l={l} />
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
          <TestimonialsColumn testimonials={firstColumn} className="-translate-x-[33px]" duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block translate-x-[33px]" duration={17} />
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  { q: "Preciso ter CNPJ para abrir conta?", a: "Sim. A Nummo atende empresas (MEI, ME, EPP e médias/grandes). Cadastro 100% online e aprovação da conta normalmente em até 24h, sujeita à análise cadastral e de segurança (KYC)." },
  { q: "Quanto custa começar?", a: "Criar conta é gratuito, sem mensalidade e sem fidelidade. As taxas incidem apenas sobre vendas aprovadas e são descontadas automaticamente no momento da transação." },
  { q: "Como funciona a área de membros da Nummo?", a: "Hospede seu curso gratuitamente na área de membros da Nummo. O armazenamento e a exibição dos seus vídeos também estão inclusos, sem nenhum custo adicional." },
  { q: "Como funciona o programa de afiliados da Nummo?", a: "Na Nummo, você pode divulgar seu produto no marketplace para atrair novos afiliados ou convidar parceiros diretamente por meio de um link personalizado." },
  { q: "É possível adicionar coprodutores aos meus produtos?", a: "Sim. Você pode incluir quantos coprodutores precisar e configurar a divisão das comissões diretamente pela plataforma da Nummo." },
  { q: "Quanto tempo leva para sacar?", a: "Os saques na Nummo são processados diariamente das 06h às 15h. Após a solicitação, o valor é creditado em sua conta em até 1 a 2 horas. Solicitações realizadas fora desse horário serão processadas no próximo período de atendimento, a partir das 06h." },
];

// JSON-LD FAQPage — habilita rich results na busca (conteúdo já existe no acordeão).
const FAQ_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

function Faq() {
  const items = FAQ_ITEMS;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="pb-32 pt-[83px] max-sm:pt-[44px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSONLD }} />
      <div className="mx-auto max-w-[1000px] px-6">
        <h2 className="mb-16 text-center font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0D1B39] max-sm:text-[27px] md:text-[56px]">
          Perguntas frequentes
        </h2>
        <Stagger className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="card-elevated overflow-hidden" style={{ background: "#FFFFFF", color: "#0D1B39", borderColor: "rgba(13, 27, 57, 0.04)", boxShadow: "0 2px 10px rgba(13, 27, 57, 0.05)", "--foreground": "#0D1B39", "--muted-foreground": "#59617A", "--neon": "#2F6BFF" } as React.CSSProperties}>
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
  return (
    <footer className="relative bg-background text-[#F6F9FC]">
      {/* Retângulo pleno: navy da marca ocupando toda a largura, sem recuo nem cantos arredondados. */}
      <div className="relative overflow-hidden bg-[#0D1B39] px-6 pb-10 pt-16 sm:px-10">
        {/* Glow sutil no topo */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 radial-glow opacity-50" />

        <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          {/* Marca */}
          <div className="max-sm:flex max-sm:items-center max-sm:gap-4 max-sm:-translate-y-[16px]">
            <RouterLink to="/" className="inline-flex items-center max-sm:shrink-0" aria-label="Nummo — início">
              <img src="/logo-nummo.svg" alt="Nummo" width={145} height={24} className="h-[24px] w-auto" />
            </RouterLink>
            <p className="mt-5 max-w-xs text-sm text-[#F6F9FC]/55 max-sm:hidden">
              A infraestrutura de pagamentos para a nova economia brasileira.
            </p>
            {/* Redes sociais — Instagram é link; os demais ainda não têm canal,
                então ficam como botões visuais SEM função (não são <a>). */}
            <div className="mt-7 flex items-center gap-2.5 max-sm:mt-0 max-sm:ml-auto max-sm:-translate-x-[6px] max-sm:gap-2">
              {[
                { icon: <Instagram />, label: "Instagram", href: "https://www.instagram.com/use.nummo" },
                { icon: <TikTok />, label: "TikTok" },
                { icon: <Youtube />, label: "YouTube" },
                { icon: <Linkedin />, label: "LinkedIn" },
              ].map((s) => {
                const base =
                  "grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.03] text-[#F6F9FC]/60 max-sm:size-8";
                return s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`${base} transition-colors hover:border-[#2F6BFF]/50 hover:bg-[#2F6BFF]/15 hover:text-[#2F6BFF]`}
                  >
                    <span className="[&>svg]:size-4 max-sm:[&>svg]:size-3">{s.icon}</span>
                  </a>
                ) : (
                  <span
                    key={s.label}
                    role="img"
                    aria-label={`${s.label} (em breve)`}
                    title="Em breve"
                    className={`${base} cursor-default`}
                  >
                    <span className="[&>svg]:size-4 max-sm:[&>svg]:size-3">{s.icon}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Colunas de links */}
          <div className="grid grid-cols-2 gap-8 max-sm:text-center sm:grid-cols-4 xl:translate-x-[83px]">
            {[
              { t: "Produtos", l: ["Checkout Builder", "Marketplace", "Co-Produção", "Rec. de Vendas"] },
              { t: "Empresa", l: ["Sobre", "Parceiros", "E-mail", "WhatsApp"] },
              { t: "Recursos", l: ["Documentação", "Status", "Changelog", "Integrações"] },
              { t: "Legal", l: ["Privacidade", "Termos", "Cookies", "Compliance"] },
            ].map((col) => (
              <div key={col.t}>
                <div className="mb-4 text-[10px] font-medium uppercase tracking-widest text-[#F6F9FC]/55">
                  {col.t}
                </div>
                <ul className="space-y-1">
                  {col.l.map((i) => {
                    const to = FOOTER_ROUTES[i];
                    const ext = FOOTER_LINKS[i];
                    const cls = "inline-block py-2.5 text-sm text-[#F6F9FC]/70 transition-colors hover:text-[#2F6BFF] max-sm:text-[13px]";
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
                          <span className="inline-block py-2.5 text-sm text-[#F6F9FC]/70 max-sm:text-[13px]">
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
        <div className="mt-16 flex flex-col items-start gap-5 pt-8 max-sm:flex-col-reverse max-sm:items-center sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-[#F6F9FC]/50 max-sm:text-center">© 2026 Nummo — Todos os direitos reservados.</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 max-sm:-translate-y-[10px] max-sm:justify-center lg:-translate-x-[16px]">
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
                className="font-display text-sm font-semibold tracking-tight text-[#F6F9FC]/55 transition-colors hover:text-[#F6F9FC]/90"
              >
                {m.name}
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
