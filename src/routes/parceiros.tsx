import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "../components/placeholder-page";

export const Route = createFileRoute("/parceiros")({
  head: () => ({ meta: [{ title: "Parceiros — Nummo" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <PlaceholderPage
      eyebrow="Parceiros"
      title="Parceiros"
      subtitle="Cresça junto com a Nummo. Seja parceiro para indicar clientes, integrar sua solução ou oferecer pagamentos aos seus usuários — com comissões, suporte dedicado e uma estrutura pensada para escalar com você."
    />
  ),
});
