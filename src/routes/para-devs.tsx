import { createFileRoute } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { PageHero, DevSection, HowItWorks, FinalCta } from "@/components/landing";

export const Route = createFileRoute("/para-devs")({
  head: () => ({
    meta: [
      { title: "Para Devs — Zentra" },
      { name: "description", content: "API REST, webhooks idempotentes, SDKs oficiais e documentação interativa. Construído por quem programa, para quem programa." },
      { property: "og:title", content: "Para Devs — Zentra" },
      { property: "og:description", content: "A infraestrutura de pagamentos mais querida pelos desenvolvedores brasileiros." },
    ],
  }),
  component: DevsPage,
});

function DevsPage() {
  return (
    <>
      <PageHero
        kicker="Para Devs"
        title={<>Infraestrutura de pagamentos que <span className="italic gradient-text">respeita</span> seu tempo.</>}
        sub="REST. Webhooks idempotentes. SDKs oficiais em 5 linguagens. Sandbox ilimitado e documentação que você lê com prazer."
        icon={<Code2 />}
      />
      <DevSection />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
