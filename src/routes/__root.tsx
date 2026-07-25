import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, useRouterState, HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { ConsentAnalytics } from "../components/consent-analytics";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

// JSON-LD site-wide: identidade de marca legível por máquina (Organization + WebSite).
const ORG_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Nummo",
      url: "https://usenummo.com.br/",
      logo: "https://usenummo.com.br/favicon.png",
      sameAs: ["https://www.instagram.com/use.nummo"],
    },
    {
      "@type": "WebSite",
      name: "Nummo",
      url: "https://usenummo.com.br/",
      inLanguage: "pt-BR",
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
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nummo — Infraestrutura financeira para o seu negócio" },
      { name: "description", content: "Nummo: liquidez D+0, taxas transparentes e infraestrutura de pagamentos para escalar." },
      { property: "og:title", content: "Nummo — Infraestrutura financeira para o seu negócio" },
      { property: "og:description", content: "Nummo: liquidez D+0, taxas transparentes e infraestrutura de pagamentos para escalar." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nummo — Infraestrutura financeira para o seu negócio" },
      { name: "twitter:description", content: "Nummo: liquidez D+0, taxas transparentes e infraestrutura de pagamentos para escalar." },
      { property: "og:image", content: "https://usenummo.com.br/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Nummo — Pagamentos na velocidade do seu negócio." },
      { name: "twitter:image", content: "https://usenummo.com.br/og-image.png" },
      { name: "twitter:image:alt", content: "Nummo — Pagamentos na velocidade do seu negócio." },
      { property: "og:site_name", content: "Nummo" },
      { name: "theme-color", content: "#060a0e" },
    ],
    links: [
      { rel: "preload", as: "image", href: "/hero-bg.webp", type: "image/webp", fetchPriority: "high" },
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
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Só no desktop (ponteiro fino). No touch, o scroll nativo + o fallback
    // scrollIntoView das âncoras já cobrem — evita 1 rAF eterno no mobile.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    let id = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, []);
  // Ao trocar de rota, volta pro topo (Lenis controla o scroll, então o
  // scrollRestoration nativo não zera sozinho).
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  // Preloader: aparece no 1º paint (SSR) e some com fade após a hidratação.
  const [loaderHide, setLoaderHide] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setLoaderHide(true), 650);
    const t2 = setTimeout(() => setLoaderGone(true), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ORG_JSONLD }} />
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Outlet />
      </div>
      {!loaderGone && (
        <div id="app-loader" className={loaderHide ? "app-loader-hidden" : ""} aria-hidden="true">
          <div className="app-loader-bg">
            <span className="app-loader-glow app-loader-glow-1" />
            <span className="app-loader-glow app-loader-glow-2" />
            <span className="app-loader-glow app-loader-glow-3" />
            <span className="app-loader-grid" />
          </div>
          <div className="app-loader-content">
            <img src="/logo-nummo.svg" alt="" width={230} height={38} className="app-loader-logo" />
            <span className="app-loader-spinner" />
          </div>
        </div>
      )}
      <ConsentAnalytics />
    </QueryClientProvider>
  );
}
