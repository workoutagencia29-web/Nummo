import { createFileRoute } from "@tanstack/react-router";
import {
  Hero, LogoMarquee, Stats, Bento, Testimonials, FinalCta,
} from "@/components/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zentra — A subadquirente do futuro" },
      { name: "description", content: "Receba na hora, com taxas transparentes e infraestrutura de pagamentos pensada para escalar." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Stats />
      <Bento />
      <Testimonials />
      <FinalCta />
    </>
  );
}
