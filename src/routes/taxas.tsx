import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { PageHero, Rates, Stats, Faq, FinalCta } from "@/components/landing";

export const Route = createFileRoute("/taxas")({
  head: () => ({
    meta: [
      { title: "Taxas — Zentra" },
      { name: "description", content: "Taxas transparentes para Pix, débito, crédito à vista e parcelado. Sem mensalidade nem taxa de adesão." },
      { property: "og:title", content: "Taxas — Zentra" },
      { property: "og:description", content: "Compare nossas taxas com o mercado. Sem letra miúda." },
    ],
  }),
  component: TaxasPage,
});

function TaxasPage() {
  return (
    <>
      <PageHero
        kicker="Taxas"
        title={<>O preço justo. <span className="italic gradient-text">Sem asteriscos.</span></>}
        sub="Sem mensalidade, sem fidelidade, sem taxa de adesão. Você só paga quando vende, e ainda recebe na hora."
        icon={<TrendingUp />}
      />
      <Rates />
      <Stats />
      <Faq />
      <FinalCta />
    </>
  );
}
