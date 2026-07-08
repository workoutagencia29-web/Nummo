import { createFileRoute } from "@tanstack/react-router";
import { Eye, Zap, ShieldCheck, Users } from "lucide-react";
import { Nav, Footer, PrimaryButton, GhostButton, WHATSAPP_URL } from "./index";

const STORY = [
  "Quando Pedro tinha 13 anos e Heitor 14, os dois entraram no universo do marketing digital. O que começou como curiosidade rapidamente virou trabalho. Ainda durante a escola, passaram a testar campanhas, vender produtos, estruturar operações e aprender, na prática, o que realmente faz um negócio crescer na internet.",
  "Ao longo dos anos, atuaram em diferentes frentes do marketing digital e construíram juntos operações que ultrapassaram oito dígitos em faturamento. Essa trajetória trouxe resultados, mas também revelou uma dificuldade constante: a infraestrutura de pagamentos no Brasil muitas vezes não acompanha a velocidade de quem vende.",
  "Baixas taxas de aprovação, regras pouco transparentes, liquidações demoradas e plataformas difíceis de operar eram problemas recorrentes. Para quem vive o dia a dia de aquisição, conversão, margem e fluxo de caixa, pagamentos não podem ser apenas uma etapa operacional. Eles precisam ser uma vantagem competitiva.",
  "A ideia da Nummo surgiu em um brainstorm que começou às 15h e atravessou a madrugada até as 4h da manhã. Foram horas discutindo caminhos, avaliando oportunidades e explorando centenas de possíveis projetos.",
];

const STORY_CONT = [
  "Naquele momento, a ideia fez sentido porque resolvia uma dor que os dois conheciam de perto. Não era apenas uma oportunidade de mercado. Era a chance de construir a infraestrutura que gostariam de ter encontrado quando começaram a vender online.",
];

const STORY_BORN = "Foi assim que nasceu a Nummo.";

const STORY_END = [
  "Criada por quem viveu a pressão de escalar campanhas, proteger margem, acompanhar caixa e não poder perder vendas por falhas de tecnologia, a Nummo foi construída para simplificar a operação financeira de empresas que querem crescer.",
  "Conectamos Pix, cartões e boleto em uma estrutura única, com tecnologia pensada para performance, operação e escala. Mais do que processar pagamentos, ajudamos negócios a transformar uma etapa crítica da jornada de compra em uma experiência mais fluida, confiável e eficiente.",
  "A Nummo existe para que empresas brasileiras possam focar no que realmente importa: vender mais, operar melhor e crescer com consistência.",
];

const STORY_KICKER = "Porque pagamentos não deveriam limitar negócios. Deveriam impulsioná-los.";

const VALUES = [
  { icon: <Eye />, title: "Transparência radical", desc: "Taxas claras, sem letra miúda e sem surpresa. Você sempre sabe exatamente quanto paga." },
  { icon: <Zap />, title: "Velocidade obsessiva", desc: "Liquidez D+0 e uma stack construída para processar na velocidade do seu negócio." },
  { icon: <ShieldCheck />, title: "Segurança inegociável", desc: "PCI-DSS Level 1, 3DS 2.0 e antifraude com IA protegendo cada transação." },
  { icon: <Users />, title: "Parceria de verdade", desc: "Mais que um gateway: um time que entende seu negócio e cresce junto com você." },
];

function SobrePage() {
  return (
    <>
      <Nav solid />
      <main id="conteudo">
        {/* Missão & história */}
        <section className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-14">
          <div className="relative mx-auto max-w-4xl px-6">
            <div className="lg:-ml-24 xl:-ml-40">
              <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">/ Sobre</div>
              <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                Construindo a infraestrutura de pagamentos da{" "}
                <span className="text-[#0D1B39]">nova economia.</span>
              </h1>
              <p className="mt-3 text-muted-foreground">
                A Nummo nasceu da união entre uma amizade de longa data, experiência real de mercado e uma ambição clara: tornar pagamentos mais simples, previsíveis e eficientes para empresas brasileiras.
              </p>
            </div>
            <div className="mt-14 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground lg:-ml-12 lg:-mr-16 xl:-ml-24 xl:-mr-28">
              <p>
                <strong className="font-medium text-foreground">Pedro R.</strong> e <strong className="font-medium text-foreground">Heitor P.</strong> se conhecem desde a infância. Aos 9 e 10 anos, construíram uma amizade comum a qualquer criança: bicicleta, skate, futebol, videogame e muitas horas dividindo ideias. Com o tempo, essa amizade se transformou em parceria.
              </p>
              {STORY.map((p, i) => (
                <p key={i}>
                  {p}
                </p>
              ))}

              <p className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Em meio à conversa, uma expressão surgiu:{" "}
                <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text text-transparent">
                  hub de pagamentos.
                </span>
              </p>

              {STORY_CONT.map((p, i) => (
                <p key={`c${i}`}>{p}</p>
              ))}

              <p className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {STORY_BORN}
              </p>

              {STORY_END.map((p, i) => (
                <p key={`e${i}`}>{p}</p>
              ))}

              <p className="border-l-2 border-neon pl-5 font-display text-xl font-medium tracking-tight text-foreground md:text-2xl">
                {STORY_KICKER}
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="pt-10 pb-24 md:pt-12 md:pb-32">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-balance font-display text-3xl font-medium tracking-tight md:text-4xl">
              No que a gente acredita.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="card-elevated p-6"
                  style={{ background: "#0D1B39", boxShadow: "0 16px 32px -18px rgba(9,16,32,0.5)" }}
                >
                  <div
                    className="mb-4 inline-flex size-11 items-center justify-center rounded-xl text-[#F6F9FC]"
                    style={{ background: "#0D1B39", boxShadow: "inset 2px 2px 4px #080f22, inset -2px -2px 4px #12264a" }}
                  >
                    <span className="[&>svg]:size-5">{v.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium tracking-tight">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Vamos crescer juntos.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">Crie sua conta em minutos ou fale com um especialista.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton size="lg">Criar conta grátis</PrimaryButton>
              <GhostButton size="lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">Falar com especialista</GhostButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Nummo" },
      { name: "description", content: "A Nummo é a infraestrutura de pagamentos da nova economia brasileira: Pix, cartões e boleto com liquidez D+0, taxas justas e API moderna." },
      { property: "og:title", content: "Sobre — Nummo" },
      { property: "og:description", content: "A Nummo é a infraestrutura de pagamentos da nova economia brasileira: Pix, cartões e boleto com liquidez D+0, taxas justas e API moderna." },
      { property: "og:url", content: "https://usenummo.com.br/sobre" },
      { name: "twitter:title", content: "Sobre — Nummo" },
      { name: "twitter:description", content: "A Nummo é a infraestrutura de pagamentos da nova economia brasileira: Pix, cartões e boleto com liquidez D+0, taxas justas e API moderna." },
    ],
    links: [{ rel: "canonical", href: "https://usenummo.com.br/sobre" }],
  }),
  component: SobrePage,
});
