import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "../components/placeholder-page";

export const Route = createFileRoute("/integracoes")({
  head: () => ({
    meta: [{ title: "Integrações — Nummo" }, { name: "robots", content: "noindex" }],
  }),
  component: PlaceholderPage,
});
