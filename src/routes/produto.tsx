import { createFileRoute } from "@tanstack/react-router";
import { Wallet } from "lucide-react";
import { PageHero, Bento, PaymentMethods, HowItWorks, FinalCta } from "@/components/landing";

export const Route = createFileRoute("/produto")({
  head: () => ({
    meta: [
      { title: "Produto — Zentra" },
      { name: "description", content: "Conheça a plataforma Zentra: maquininha, checkout online, link de pagamento e API." },
      { property: "og:title", content: "Produto — Zentra" },
      { property: "og:description", content: "Tudo o que sua operação de pagamentos precisa, em um só lugar." },
    ],
  }),
  component: ProdutoPage,
});

function ProdutoPage() {
  return (
    <>
      <PageHero
        kicker="Produto"
        title={<>Uma plataforma. <span className="italic gradient-text">Mil formas</span> de receber.</>}
        sub="Maquininha física, checkout online, link de pagamento, recorrência e API. Tudo conectado num dashboard único, em tempo real."
        icon={<Wallet />}
      />
      <Bento />
      <PaymentMethods />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
