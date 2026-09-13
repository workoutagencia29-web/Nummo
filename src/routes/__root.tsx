import {
  Outlet, Link, createRootRoute, useRouter, useRouterState, HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ConsentAnalytics } from "../components/consent-analytics";
import { Component as AppLoader } from "../components/ui/ai-loader";

import appCss from "../styles.css?url";

// JSON-LD site-wide: identidade de marca legível por máquina (Organization + WebSite).
const ORG_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.usenummo.com.br/#organization",
      name: "Nummo",
      legalName: "Nummo",
      url: "https://www.usenummo.com.br/",
      logo: { "@type": "ImageObject", url: "https://www.usenummo.com.br/favicon.png", width: 512, height: 512 },
      image: "https://www.usenummo.com.br/og-image.png",
      description:
        "Infraestrutura de pagamentos para a nova economia brasileira: Pix, cartão e boleto em uma só API, com liquidez D+0, taxas transparentes e ferramentas de conversão.",
      slogan: "A infraestrutura de pagamentos para a nova economia brasileira.",
      areaServed: { "@type": "Country", name: "Brasil" },
      knowsAbout: [
        "Gateway de pagamento",
        "Pix",
        "Checkout online",
        "Cobrança recorrente",
        "Split de pagamentos",
        "Antifraude",
        "API de pagamentos",
      ],
      sameAs: ["https://www.instagram.com/use.nummo"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://www.usenummo.com.br/email",
        availableLanguage: ["Portuguese"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.usenummo.com.br/#website",
      name: "Nummo",
      url: "https://www.usenummo.com.br/",
      publisher: { "@id": "https://www.usenummo.com.br/#organization" },
      inLanguage: "pt-BR",
    },
    {
      "@type": "Service",
      "@id": "https://www.usenummo.com.br/#service",
      name: "Gateway de pagamentos Nummo",
      serviceType: "Gateway de pagamentos online",
      provider: { "@id": "https://www.usenummo.com.br/#organization" },
      areaServed: { "@type": "Country", name: "Brasil" },
      description:
        "Aceite Pix, cartão, boleto, Apple Pay e Google Pay com liquidação D+0, checkout otimizado e ferramentas de conversão (link de pagamento, recorrência, order bump, upsell e recuperação de carrinho com IA).",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Meios de pagamento e ferramentas",
        itemListElement: [
          "Pix",
          "Cartão de crédito",
          "Boleto",
          "Apple Pay",
          "Google Pay",
          "Link de pagamento",
          "Cobrança recorrente",
          "Checkout Builder",
          "Upsell",
          "Order Bump",
          "Recuperação de carrinho com IA",
        ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
      },
    },
  ],
});


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">A página que você procura não existe.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Algo deu errado</h1>
        <p className="mt-2 text-sm text-muted-foreground">Tente novamente em instantes.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Tentar de novo
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-foreground">
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nummo — Infraestrutura financeira para o seu negócio" },
      { name: "description", content: "Nummo: liquidez D+0, taxas transparentes e infraestrutura de pagamentos para escalar." },
      { name: "keywords", content: "gateway de pagamento, gateway de pagamentos, Pix, checkout, cobrança recorrente, link de pagamento, boleto, cartão de crédito, Apple Pay, Google Pay, split de pagamento, marketplace, recuperação de carrinho, antifraude, API de pagamentos, liquidez D+0, infoprodutos, e-commerce, Nummo" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "author", content: "Nummo" },
      { property: "og:title", content: "Nummo — Infraestrutura financeira para o seu negócio" },
      { property: "og:description", content: "Nummo: liquidez D+0, taxas transparentes e infraestrutura de pagamentos para escalar." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nummo — Infraestrutura financeira para o seu negócio" },
      { name: "twitter:description", content: "Nummo: liquidez D+0, taxas transparentes e infraestrutura de pagamentos para escalar." },
      { property: "og:image", content: "https://www.usenummo.com.br/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Nummo — Pagamentos na velocidade do seu negócio." },
      { name: "twitter:image", content: "https://www.usenummo.com.br/og-image.png" },
      { name: "twitter:image:alt", content: "Nummo — Pagamentos na velocidade do seu negócio." },
      { property: "og:site_name", content: "Nummo" },
      { name: "theme-color", content: "#060a0e" },
    ],
    links: [
      { rel: "preload", as: "font", type: "font/woff2", href: "/fonts/inter-700.woff2", crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: "/fonts/inter-400.woff2", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        {/* Sem JS: neutraliza o opacity:0 das seções reveladas por scroll,
            garantindo que o conteúdo apareça (crawlers e usuários sem JS). */}
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: ".reveal,.reveal-child{opacity:1!important;transform:none!important}" }} />
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Só no desktop (ponteiro fino). No touch, o scroll nativo já cobre — e o
    // Lenis (~8KB) é importado sob demanda aqui, ficando fora do bundle mobile.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | undefined;
    let cancelled = false;
    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.2, smoothWheel: true });
      lenis = instance;
      (window as unknown as { __lenis?: unknown }).__lenis = instance;
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      lenis?.destroy();
      (window as unknown as { __lenis?: unknown }).__lenis = undefined;
    };
  }, []);
  // Ao trocar de rota, volta pro topo (Lenis controla o scroll, então o
  // scrollRestoration nativo não zera sozinho).
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, o?: { immediate?: boolean }) => void } }).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  // Preloader: aparece no 1º paint (SSR) e some assim que a página está REALMENTE
  // pronta — hidratada (este efeito já rodou), fontes carregadas (document.fonts.ready,
  // evita o "swap" da Inter aparecer depois) e um frame pintado. Em vez de timer fixo:
  // some cedo em conexões rápidas, espera só o necessário nas lentas.
  // MIN evita um flash/piscada; MAX é o teto de segurança; a rede 100% CSS (2.2s no
  // styles.css) ainda cobre o caso de a hidratação falhar.
  const [loaderHide, setLoaderHide] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);
  useEffect(() => {
    const MIN_VISIBLE = 300; // ms mínimos na tela (evita piscar em loads instantâneos)
    const MAX_VISIBLE = 1000; // ms máximos (não fica refém de fonte/rede lenta)
    const FADE = 600; // casa com a transição de opacidade do #app-loader (0.6s)
    const start = performance.now();
    let hideT = 0, goneT = 0, capT = 0, done = false;
    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, MIN_VISIBLE - (performance.now() - start));
      hideT = window.setTimeout(() => {
        setLoaderHide(true);
        goneT = window.setTimeout(() => setLoaderGone(true), FADE);
      }, wait);
    };
    // Pronto = fontes carregadas + 2 rAFs (garante um frame pintado com a fonte certa).
    const whenPainted = () =>
      requestAnimationFrame(() => requestAnimationFrame(finish));
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    if (fonts?.ready) fonts.ready.then(whenPainted, whenPainted);
    else whenPainted();
    capT = window.setTimeout(finish, MAX_VISIBLE); // teto de segurança
    return () => {
      clearTimeout(hideT);
      clearTimeout(goneT);
      clearTimeout(capT);
    };
  }, []);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ORG_JSONLD }} />
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Outlet />
      </div>
      {!loaderGone && (
        <AppLoader id="app-loader" className={loaderHide ? "app-loader-hidden" : ""} text="Carregando" />
      )}
      <ConsentAnalytics />
    </>
  );
}
