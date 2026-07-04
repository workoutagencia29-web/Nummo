import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, FileCheck, Lock, Scale } from "lucide-react";
import { Nav, Footer } from "./index";

const BADGES = ["PCI-DSS Level 1", "3DS 2.0", "LGPD", "Auditoria externa"];

const TOPICS = [
  {
    icon: <ShieldCheck />,
    title: "Certificações & segurança",
    desc: "Mantemos os mais altos padrões da indústria: certificação PCI-DSS Level 1, autenticação 3DS 2.0, tokenização e criptografia ponta a ponta, além de uma camada antifraude com IA que analisa cada transação em tempo real.",
  },
  {
    icon: <FileCheck />,
    title: "Auditoria & transparência",
    desc: "Nossos processos e controles passam por auditorias e verificações independentes que comprovam, na prática, a segurança, a integridade e a conformidade de toda a operação da Nummo — sem depender da nossa palavra.",
  },
  {
    icon: <Lock />,
    title: "LGPD & proteção de dados",
    desc: "Tratamos dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD). Você pode exercer seus direitos de titular (acesso, correção e exclusão) a qualquer momento, com um Encarregado (DPO) responsável.",
  },
  {
    icon: <Scale />,
    title: "AML/KYC & canal de denúncia",
    desc: "Adotamos políticas rígidas de Prevenção à Lavagem de Dinheiro (PLD/AML) e Conheça Seu Cliente (KYC), com monitoramento contínuo e verificação de identidade. Suspeitas podem ser reportadas com sigilo.",
  },
];

function CompliancePage() {
  return (
    <>
      <Nav />
      <main id="conteudo">
        {/* Head — mesmo modelo/posição/tamanho das outras páginas */}
        <div className="mx-auto max-w-4xl px-6 pt-20 md:pt-28">
          <div className="lg:-ml-24 xl:-ml-40">
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">/ Compliance</div>
            <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Confiança que se{" "}
              <span className="bg-gradient-to-r from-[#84A9FF] via-[#2F6BFF] to-[#1B3FC4] bg-clip-text text-transparent">comprova.</span>
            </h1>
            <p className="mt-3 text-muted-foreground">
              Segurança, regulação e proteção de dados no centro de tudo o que a Nummo faz. Conheça os nossos compromissos de conformidade e as práticas que mantêm a sua operação protegida.
            </p>
          </div>
        </div>

        {/* Conteúdo — mesma posição/eixo das outras páginas */}
        <div className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
          <div className="mt-14 lg:-ml-12 lg:-mr-16 lg:mt-[98px] xl:-ml-24 xl:-mr-28">
            <div className="flex flex-wrap gap-2.5">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-neon/25 bg-neon-soft px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neon"
                >
                  <ShieldCheck className="size-3.5" /> {b}
                </span>
              ))}
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {TOPICS.map((t) => (
                <div key={t.title} className="card-elevated p-6">
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-neon/10 text-neon">
                    <span className="[&>svg]:size-5">{t.icon}</span>
                  </div>
                  <h2 className="font-display text-xl font-medium tracking-tight">{t.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance — Nummo" },
      { name: "description", content: "Compliance da Nummo: certificações de segurança (PCI-DSS), proteção de dados (LGPD) e prevenção à lavagem de dinheiro (AML/KYC)." },
      { property: "og:title", content: "Compliance — Nummo" },
      { property: "og:description", content: "Compliance da Nummo: certificações de segurança (PCI-DSS), proteção de dados (LGPD) e prevenção à lavagem de dinheiro (AML/KYC)." },
      { property: "og:url", content: "https://usenummo.com.br/compliance" },
      { name: "twitter:title", content: "Compliance — Nummo" },
      { name: "twitter:description", content: "Compliance da Nummo: certificações de segurança (PCI-DSS), proteção de dados (LGPD) e prevenção à lavagem de dinheiro (AML/KYC)." },
    ],
    links: [{ rel: "canonical", href: "https://usenummo.com.br/compliance" }],
  }),
  component: CompliancePage,
});
