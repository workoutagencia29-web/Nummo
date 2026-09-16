import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Banner } from "./ui/banner";
import { Button } from "./ui/button";

// Code-split: os libs de analytics só entram no bundle (e na rede) após o "Aceitar".
const Analytics = lazy(() => import("@vercel/analytics/react").then((m) => ({ default: m.Analytics })));
const SpeedInsights = lazy(() => import("@vercel/speed-insights/react").then((m) => ({ default: m.SpeedInsights })));

const KEY = "nummo-cookie-consent";

/**
 * Gate de consentimento (LGPD). Cookies/analytics não essenciais só carregam
 * após o "Aceitar" - antes disso, nenhum tracker sobe. O banner torna verdadeira
 * a Política de Cookies (que promete um banner de consentimento no site).
 */
export function ConsentAnalytics() {
  const [choice, setChoice] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let v: string | null = null;
    try {
      v = localStorage.getItem(KEY);
    } catch {
      /* localStorage indisponível - trata como sem escolha */
    }
    setChoice(v === "granted" ? "granted" : v === "denied" ? "denied" : null);
    setReady(true);
  }, []);

  const decide = (v: "granted" | "denied") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* noop */
    }
    setChoice(v);
  };

  // SSR e 1º render do cliente não conhecem o localStorage: renderiza nada
  // até montar (evita mismatch de hidratação e flash do banner).
  if (!ready) return null;

  return (
    <>
      {choice === "granted" && (
        <Suspense fallback={null}>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      )}

      {choice === null && (
        <Banner
          rounded="default"
          role="dialog"
          aria-label="Consentimento de cookies"
          className="fixed bottom-4 left-1/2 z-[9998] w-[calc(100%-1.5rem)] max-w-2xl -translate-x-1/2 shadow-xl shadow-black/10"
        >
          <div className="w-full">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <p className="text-sm leading-relaxed text-foreground/80">
                Usamos cookies essenciais e, com o seu consentimento, cookies de análise para melhorar o site. Veja a{" "}
                <Link to="/cookies" className="font-medium text-primary underline underline-offset-2">
                  Política de Cookies
                </Link>
                .
              </p>
              <div className="flex shrink-0 gap-2 max-md:flex-wrap">
                <Button size="sm" onClick={() => decide("granted")}>
                  Aceitar
                </Button>
                <Button variant="outline" size="sm" onClick={() => decide("denied")}>
                  Recusar
                </Button>
              </div>
            </div>
          </div>
        </Banner>
      )}
    </>
  );
}
