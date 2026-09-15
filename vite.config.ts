// @lovable.dev/vite-tanstack-config already includes the following, so do NOT add them manually
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
  // Split de vendors estaveis em chunks proprios: melhora o cache entre deploys
  // (React/TanStack raramente mudam) e permite parse/compile em paralelo. Nao muda
  // nada visual: apenas reparte o mesmo JS em arquivos separados.
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (!id.includes("node_modules")) return;
            if (/[\\/]node_modules[\\/](react-dom|react|scheduler)[\\/]/.test(id)) return "vendor-react";
            if (id.includes("@tanstack")) return "vendor-tanstack";
            if (id.includes("@radix-ui")) return "vendor-radix";
            if (id.includes("lucide-react")) return "vendor-lucide";
          },
        },
      },
    },
  },
  // Deploy na Vercel: fixa o preset do Nitro como "vercel" (fora do sandbox da Lovable).
  // Gera .vercel/output (Build Output API), que a Vercel detecta sozinha, resolvendo o erro
  // "No Output Directory named build".
  nitro: {
    preset: "vercel",
    // Headers de segurança compilados para dentro do .vercel/output/config.json
    // (caminho que a Vercel realmente aplica neste stack Build Output API).
    // CSP em modo enforcing (chave "Content-Security-Policy"). Para depurar novas
    // violações sem quebrar o site, troque temporariamente a chave por
    // "Content-Security-Policy-Report-Only".
    routeRules: {
      "/**": {
        headers: {
          "Content-Security-Policy":
            "default-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; frame-src 'none'; form-action 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com https://cloudflareinsights.com; worker-src 'self'; manifest-src 'self'; upgrade-insecure-requests",
          "X-Frame-Options": "DENY",
          "X-Content-Type-Options": "nosniff",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy":
            "accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), usb=(), interest-cohort=(), browsing-topics=()",
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Resource-Policy": "same-site",
          "X-XSS-Protection": "0",
          "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
        },
      },
      "/fonts/**": {
        headers: { "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800" },
      },
      // Imagens do /public (não hasheadas, URL estável). Cache curto (1h) + must-revalidate:
      // performance nas visitas repetidas, mas troca de asset aparece rápido (sem servir
      // stale por dias). Para efeito imediato após deploy, purgar o cache do Cloudflare.
      "/logos/**": {
        headers: { "Cache-Control": "public, max-age=3600, must-revalidate" },
      },
      "/depoimentos/**": {
        headers: { "Cache-Control": "public, max-age=3600, must-revalidate" },
      },
      "/*.webp": {
        headers: { "Cache-Control": "public, max-age=3600, must-revalidate" },
      },
    },
  },
});
