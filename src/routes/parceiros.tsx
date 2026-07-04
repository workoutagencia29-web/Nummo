import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "../components/placeholder-page";

export const Route = createFileRoute("/parceiros")({
  head: () => ({ meta: [{ title: "Parceiros — Nummo" }, { name: "robots", content: "noindex" }] }),
  component: PlaceholderPage,
});
