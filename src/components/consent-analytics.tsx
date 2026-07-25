import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

// Code-split: os libs de analytics só entram no bundle (e na rede) após o "Aceitar".
const Analytics = lazy(() => import("@vercel/analytics/react").then((m) => ({ default: m.Analytics })));
const SpeedInsights = lazy(() => import("@vercel/speed-insights/react").then((m) => ({ default: m.SpeedInsights })));

const KEY = "nummo-cookie-consent";

/**
 * Gate de consentimento (LGPD). Cookies/analytics não essenciais só carregam
 * após o "Aceitar" — antes disso, nenhum tracker sobe. O banner torna verdadeira
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
      /* localStorage indisponível — trata como sem escolha */
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
        <div
          role="dialog"
          aria-label="Consentimento de cookies"
          className="fixed inset-x-3 bottom-3 z-[9998] mx-auto max-w-md rounded-2xl p-5 sm:inset-x-auto sm:bottom-6 sm:left-6"
          style={{ background: "#0D1B39", boxShadow: "10px 10px 30px rgba(5,11,30,0.55), -8px -8px 24px #14284d" }}
        >
          <p className="text-sm leading-relaxed text-[#F6F9FC]/80">
            Usamos cookies essenciais e, com o seu consentimento, cookies de análise para melhorar o site. Veja a{" "}
            <Link to="/cookies" className="font-medium text-[#6E9BFF] underline-offset-2 hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-2.5">
            <button
              type="button"
              onClick={() => decide("granted")}
              className="flex-1 rounded-full bg-[#2559d8] py-2.5 text-sm font-semibold text-white transition hover:bg-[#1f4fc4]"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              className="flex-1 rounded-full border border-white/20 bg-white/5 py-2.5 text-sm font-medium text-[#F6F9FC] transition hover:bg-white/10"
            >
              Recusar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
