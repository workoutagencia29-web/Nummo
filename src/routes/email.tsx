import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

function EmailPage() {
  return (
    <>
      <Nav />
      <main id="conteudo">
        {/* Head — mesmo modelo/posição/tamanho das outras páginas */}
        <div className="mx-auto max-w-4xl px-6 pt-20 md:pt-28">
          <div className="lg:-ml-24 xl:-ml-40">
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">
              / E-mail
            </div>
            <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Suporte por e-mail
            </h1>
            <p className="mt-3 text-muted-foreground">
              Precisa de ajuda? Nosso time de suporte está pronto para resolver suas dúvidas sobre
              conta, pagamentos, integrações e qualquer outra coisa — com agilidade e atenção de
              verdade.
            </p>
          </div>
        </div>

        {/* Corpo — mesma posição, formato e formatação das outras páginas */}
        <div className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
          <div className="mt-14 text-pretty text-lg leading-relaxed text-muted-foreground lg:-ml-12 lg:-mr-16 lg:mt-[98px] xl:-ml-24 xl:-mr-28 [&>*:first-child]:mt-0">
            <p className="text-xl text-foreground/90">
              Ficou com alguma dúvida ou precisa de ajuda? É só mandar um e-mail — nosso time de
              suporte lê tudo e responde rápido.
            </p>

            <div className="mt-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Escreva para
              </div>
              <a
                href="mailto:suporte@usenummo.com.br"
                className="mt-1.5 inline-block font-display text-2xl font-medium tracking-tight text-neon transition-opacity hover:opacity-80 md:text-3xl"
              >
                suporte@usenummo.com.br
              </a>
            </div>

            <p className="mt-12">
              <strong className="font-medium text-foreground">Tempo de resposta:</strong>{" "}
              respondemos em até 24 horas úteis. Casos urgentes envolvendo pagamentos têm
              prioridade.
            </p>
            <p className="mt-5">
              <strong className="font-medium text-foreground">Pra agilizar,</strong> inclua no
              e-mail: o CNPJ da sua conta, o e-mail cadastrado e uma breve descrição do que está
              acontecendo (prints ajudam muito).
            </p>
            <p className="mt-5">
              <strong className="font-medium text-foreground">Atendimento:</strong> segunda a sexta,
              das 9h às 18h (horário de Brasília).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/email")({
  head: () => ({
    meta: [
      { title: "Suporte — Nummo" },
      {
        name: "description",
        content:
          "Suporte da Nummo: tire suas dúvidas sobre conta, pagamentos, integrações e mais. Nosso time está pronto para ajudar.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Suporte — Nummo" },
      {
        property: "og:description",
        content:
          "Suporte da Nummo: tire suas dúvidas sobre conta, pagamentos, integrações e mais. Nosso time está pronto para ajudar.",
      },
      { property: "og:url", content: "https://usenummo.com.br/email" },
    ],
  }),
  component: EmailPage,
});
