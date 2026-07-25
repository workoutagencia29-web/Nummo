// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Deploy na Vercel: fixa o preset do Nitro como "vercel" (fora do sandbox da Lovable).
  // Gera .vercel/output (Build Output API), que a Vercel detecta sozinha — resolve o erro
  // "No Output Directory named build".
  nitro: {
    preset: "vercel",
    // Headers de segurança compilados para dentro do .vercel/output/config.json
    // (caminho que a Vercel realmente aplica neste stack Build Output API).
    // CSP começa em Report-Only (monitora sem bloquear) — flip para enforcing
    // após confirmar zero violações no site em produção.
    routeRules: {
      "/**": {
        headers: {
          "Content-Security-Policy-Report-Only":
            "default-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; frame-src 'none'; form-action 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com; worker-src 'self'; manifest-src 'self'; upgrade-insecure-requests",
          "X-Frame-Options": "DENY",
          "X-Content-Type-Options": "nosniff",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy":
            "accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), usb=(), interest-cohort=(), browsing-topics=()",
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Resource-Policy": "same-site",
          "X-XSS-Protection": "0",
        },
      },
      "/fonts/**": {
        headers: { "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800" },
      },
    },
  },
});
