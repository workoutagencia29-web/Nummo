import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageHero, Security, Faq, FinalCta } from "@/components/landing";

export const Route = createFileRoute("/seguranca")({
  head: () => ({
    meta: [
      { title: "Segurança — Zentra" },
      { name: "description", content: "PCI-DSS Level 1, tokenização, 3DS 2.0, antifraude com IA e regulação do Banco Central." },
      { property: "og:title", content: "Segurança — Zentra" },
      { property: "og:description", content: "Construído como um cofre. Operado como um foguete." },
    ],
  }),
  component: SegurancaPage,
});

function SegurancaPage() {
  return (
    <>
      <PageHero
        kicker="Segurança"
        title={<>Seu dinheiro <span className="italic gradient-text">blindado</span>, do checkout à conta.</>}
        sub="Certificação PCI-DSS Level 1, criptografia de ponta a ponta, antifraude proprietário com IA e supervisão direta do Banco Central."
        icon={<ShieldCheck />}
      />
      <Security />
      <Faq />
      <FinalCta />
    </>
  );
}
