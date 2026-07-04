import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "../components/placeholder-page";

export const Route = createFileRoute("/documentacao")({
  head: () => ({ meta: [{ title: "Documentação — Nummo" }, { name: "robots", content: "noindex" }] }),
  component: PlaceholderPage,
});
