import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "../components/placeholder-page";

export const Route = createFileRoute("/documentacao")({
  head: () => ({ meta: [{ title: "Documentação | Nummo" }, { name: "robots", content: "noindex" }, { name: "googlebot", content: "noindex" }, { property: "og:url", content: "https://www.usenummo.com.br/documentacao" }] }),
  component: () => (
    <PlaceholderPage
      eyebrow="Documentação"
      title="Documentação Nummo"
      subtitle="Tudo o que você precisa para integrar a Nummo: referência de API, SDKs oficiais, webhooks e guias passo a passo para começar a receber pagamentos em minutos."
    />
  ),
});
