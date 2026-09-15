import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "../components/placeholder-page";

export const Route = createFileRoute("/integracoes")({
  head: () => ({ meta: [{ title: "Integrações | Nummo" }, { name: "robots", content: "noindex" }, { name: "googlebot", content: "noindex" }, { property: "og:url", content: "https://www.usenummo.com.br/integracoes" }] }),
  component: () => (
    <PlaceholderPage
      eyebrow="Integrações"
      title="Integrações"
      subtitle="Conecte a Nummo às ferramentas que sua operação já usa: e-commerce, ERPs, plataformas de checkout, automações, trackers, entre outros. Integrações prontas e API aberta para você plugar tudo em minutos."
    />
  ),
});
