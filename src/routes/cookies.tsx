import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

function CookiesPage() {
  return (
    <>
      <Nav solid />
      <main id="conteudo">
        {/* Head — mesmo modelo/posição/tamanho das outras páginas */}
        <div className="mx-auto max-w-4xl px-6 pt-20 md:pt-28">
          <div className="lg:-ml-24 xl:-ml-40">
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">/ Cookies</div>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Cookies do site da Nummo</h1>
            <p className="mt-3 text-muted-foreground">
              Entenda quais cookies a Nummo utiliza, para que servem e como você pode aceitar, recusar ou gerenciar cada um deles a qualquer momento — com total controle e transparência.
            </p>
          </div>
        </div>

        {/* Corpo — mesma posição, formato e formatação da /email */}
        <div className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
          <div className="mt-14 text-pretty text-lg leading-relaxed text-muted-foreground lg:-ml-12 lg:-mr-16 lg:mt-[98px] xl:-ml-24 xl:-mr-28 [&>*:first-child]:mt-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Última atualização: 21 de junho de 2026</p>

            <p className="mt-6 text-xl text-foreground/90">
              A Nummo utiliza cookies, pixels, trackers e tecnologias semelhantes para garantir o funcionamento do site, melhorar sua experiência, entender como os visitantes utilizam nossos ambientes digitais e medir campanhas de marketing.
            </p>
            <p className="mt-5">
              Cookies são pequenos arquivos armazenados no seu navegador ou dispositivo quando você acessa nosso site.
            </p>

            <h2 className="mt-14 font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">Quais cookies utilizamos</h2>

            <p className="mt-6 font-medium text-foreground">Cookies necessários</p>
            <p className="mt-1.5">
              Essenciais para o funcionamento do site, segurança, carregamento de páginas, preferências básicas e prevenção a fraudes. Esses cookies não podem ser desativados sem comprometer certas funcionalidades.
            </p>

            <p className="mt-6 font-medium text-foreground">Cookies de desempenho e analytics</p>
            <p className="mt-1.5">
              Nos ajudam a entender como o site é utilizado, identificar páginas mais acessadas, medir desempenho e corrigir eventuais falhas.
            </p>

            <p className="mt-6 font-medium text-foreground">Cookies de marketing e campanhas</p>
            <p className="mt-1.5">
              Podem ser utilizados para mensurar campanhas, identificar a origem de acessos, criar públicos de remarketing e apresentar comunicações mais relevantes em plataformas de mídia.
            </p>

            <h2 className="mt-14 font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">Como gerenciar cookies</h2>

            <p className="mt-6">
              Você poderá aceitar, recusar ou configurar cookies não essenciais por meio do banner de cookies disponibilizado no site.
            </p>
            <p className="mt-5">
              Também é possível gerenciar cookies diretamente nas configurações do seu navegador. A desativação de cookies necessários pode afetar o funcionamento de algumas áreas do site e da Plataforma.
            </p>
            <p className="mt-5">
              Para saber mais sobre como a Nummo trata Dados Pessoais, consulte nossa{" "}
              <Link to="/privacidade" className="text-neon underline-offset-2 hover:underline">Política de Privacidade</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies — Nummo" },
      { name: "description", content: "Política de Cookies da Nummo: quais cookies usamos (necessários, analytics e marketing) e como você pode gerenciá-los." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Cookies — Nummo" },
      { property: "og:description", content: "Política de Cookies da Nummo: quais cookies usamos (necessários, analytics e marketing) e como você pode gerenciá-los." },
      { property: "og:url", content: "https://usenummo.com.br/cookies" },
    ],
  }),
  component: CookiesPage,
});
