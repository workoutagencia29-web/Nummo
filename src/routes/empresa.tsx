import { createFileRoute } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { PageHero, Stats, Testimonials, FinalCta, Reveal, SectionEyebrow } from "@/components/landing";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "Empresa — Zentra" },
      { name: "description", content: "Conheça a Zentra: nossa missão, time e por que estamos construindo a próxima geração de pagamentos no Brasil." },
      { property: "og:title", content: "Empresa — Zentra" },
      { property: "og:description", content: "Construindo a infraestrutura de pagamentos para a nova economia brasileira." },
    ],
  }),
  component: EmpresaPage,
});

function EmpresaPage() {
  return (
    <>
      <PageHero
        kicker="Empresa"
        title={<>Construindo o <span className="italic gradient-text">próximo capítulo</span> dos pagamentos no Brasil.</>}
        sub="Somos um time de engenheiros, designers e operadores apaixonados por dinheiro que se move na velocidade da internet."
        icon={<Globe />}
      />

      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow
            kicker="Nossa missão"
            title="Pagar e receber deveria ser tão simples quanto enviar uma mensagem."
            sub="Fundada em 2024 por veteranos de fintechs e bancos digitais, a Zentra existe para devolver o tempo, o dinheiro e o controle aos lojistas brasileiros."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { kpi: "2024", label: "Ano de fundação" },
              { kpi: "180+", label: "Pessoas no time" },
              { kpi: "São Paulo", label: "Sede" },
            ].map((b, i) => (
              <Reveal key={b.label} delay={i * 100}>
                <div className="card-elevated magnetic-card p-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neon">{b.label}</div>
                  <div className="mt-3 font-display text-4xl font-medium tracking-tight">{b.kpi}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <FinalCta />
    </>
  );
}
