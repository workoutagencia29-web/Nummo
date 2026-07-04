import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-9 font-display text-xl font-medium tracking-tight text-foreground">
      {children}
    </h3>
  );
}
function P({ children, lead }: { children: React.ReactNode; lead?: boolean }) {
  return <p className={"mt-5" + (lead ? " text-xl text-foreground/90" : "")}>{children}</p>;
}
function Bul({ children }: { children: React.ReactNode }) {
  return <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-neon/70">{children}</ul>;
}
function Li({ children }: { children: React.ReactNode }) {
  return <li className="pl-1">{children}</li>;
}
function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-foreground">{children}</strong>;
}

function PrivacidadePage() {
  return (
    <>
      <Nav />
      <main id="conteudo">
        {/* Head — mesmo modelo/posição/tamanho das outras páginas */}
        <div className="mx-auto max-w-4xl px-6 pt-20 md:pt-28">
          <div className="lg:-ml-24 xl:-ml-40">
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">
              / Privacidade
            </div>
            <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Privacidade
            </h1>
            <p className="mt-3 text-muted-foreground">
              Sua privacidade é prioridade. Saiba como a Nummo coleta, utiliza, armazena e protege
              os seus dados pessoais, e quais são os seus direitos — sempre com clareza e sem letra
              miúda.
            </p>
          </div>
        </div>

        {/* Corpo — mesma posição, formato e formatação do texto da /sobre */}
        <div className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
          <div className="mt-14 text-pretty text-lg leading-relaxed text-muted-foreground lg:-ml-12 lg:-mr-16 lg:mt-[98px] xl:-ml-24 xl:-mr-28 [&>*:first-child]:mt-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Versão 1.0 — Atualizada em 21 de junho de 2026
            </p>

            <P lead>
              A Nummo respeita a privacidade e a proteção dos dados pessoais de todas as pessoas que
              acessam sua Plataforma, utilizam seus produtos ou se relacionam com seus serviços.
            </P>
            <P>
              Esta Política de Privacidade explica como a Nummo coleta, utiliza, armazena,
              compartilha, protege e elimina Dados Pessoais, em conformidade com a legislação
              aplicável.
            </P>
            <P>
              A Nummo é uma marca operada por <B>HEITOR ROCHA PAGANOTTO LTDA. – ME</B>, inscrita no
              CNPJ sob o nº <B>63.320.977/0001-06</B>, com sede na Rua Pais Leme, nº 215, Conjunto
              1713, Pinheiros, São Paulo/SP, CEP 05424-150.
            </P>
            <P>
              Esta Política deve ser lida em conjunto aos demais documentos disponibilizados pela
              Nummo.
            </P>

            <H2>1. A quem esta Política se aplica</H2>
            <P>Esta Política se aplica aos Dados Pessoais tratados pela Nummo em relação a:</P>
            <Bul>
              <Li>visitantes do site institucional e demais páginas da Nummo;</Li>
              <Li>sellers, lojistas, empresas clientes e seus representantes;</Li>
              <Li>
                sócios, administradores, responsáveis legais e usuários autorizados de contas
                empresariais;
              </Li>
              <Li>
                compradores finais que realizem ou tentem realizar transações por meio de checkouts,
                links de pagamento, marketplaces ou soluções integradas à Nummo;
              </Li>
              <Li>afiliados, parceiros comerciais, fornecedores e prestadores de serviços;</Li>
              <Li>
                colaboradores, candidatos a vagas e pessoas que se relacionem profissionalmente com
                a Nummo;
              </Li>
              <Li>
                pessoas que entrem em contato com a Nummo por e-mail, WhatsApp, formulários, redes
                sociais ou demais canais oficiais.
              </Li>
            </Bul>
            <P>
              A Nummo disponibiliza infraestrutura tecnológica para intermediação de pagamentos e
              integração com parceiros financeiros, adquirentes, subadquirentes, instituições de
              pagamento, bancos e outros fornecedores necessários à operação.
            </P>

            <H2>2. Definições importantes</H2>
            <P>Para facilitar a leitura desta Política:</P>
            <P>
              <B>Dados Pessoais:</B> informações relacionadas a uma pessoa natural identificada ou
              identificável, como nome, CPF, telefone, endereço, e-mail ou endereço IP.
            </P>
            <P>
              <B>Titular:</B> pessoa física a quem os Dados Pessoais se referem.
            </P>
            <P>
              <B>Tratamento:</B> qualquer operação realizada com Dados Pessoais, incluindo coleta,
              uso, armazenamento, análise, compartilhamento, eliminação, alteração ou proteção.
            </P>
            <P>
              <B>Controlador:</B> pessoa ou empresa responsável pelas decisões referentes ao
              tratamento de Dados Pessoais.
            </P>
            <P>
              <B>Operador:</B> pessoa ou empresa que realiza o tratamento de Dados Pessoais em nome
              de um Controlador.
            </P>
            <P>
              <B>Seller ou Lojista:</B> empresa ou pessoa jurídica que utiliza a Nummo para
              disponibilizar meios de pagamento aos seus compradores.
            </P>
            <P>
              <B>Comprador:</B> pessoa que realiza ou tenta realizar uma compra por meio de
              checkout, link de pagamento, marketplace ou outra solução integrada à Nummo.
            </P>
            <P>
              <B>Parceiros de Pagamento:</B> instituições financeiras, bancos, adquirentes,
              subadquirentes, instituições de pagamento, processadores e demais empresas envolvidas
              na viabilização da operação financeira.
            </P>

            <H2>3. Dados Pessoais que a Nummo coleta</H2>
            <P>
              A Nummo trata apenas os Dados Pessoais necessários para a prestação dos serviços,
              proteção da Plataforma, prevenção a fraudes, cumprimento de obrigações legais e
              melhoria da experiência dos usuários.
            </P>

            <H3>3.1. Dados de sellers, representantes legais e usuários de conta</H3>
            <P>
              Durante o cadastro, a validação de identidade, o uso da Plataforma ou a solicitação de
              serviços, a Nummo poderá coletar:
            </P>
            <Bul>
              <Li>nome completo;</Li>
              <Li>e-mail;</Li>
              <Li>CPF;</Li>
              <Li>CNPJ;</Li>
              <Li>data de nascimento;</Li>
              <Li>telefone;</Li>
              <Li>endereço completo;</Li>
              <Li>razão social;</Li>
              <Li>natureza do negócio;</Li>
              <Li>dados bancários e dados necessários para recebimento ou saque;</Li>
              <Li>documentos de identificação, incluindo RG frente e verso;</Li>
              <Li>selfie de verificação segurando o documento de identificação;</Li>
              <Li>
                informações de redes sociais, incluindo Instagram, quando necessárias para análise
                cadastral, segurança, prevenção a fraudes ou avaliação de risco;
              </Li>
              <Li>informações sobre produtos, serviços, vendas, operação e atividade econômica;</Li>
              <Li>
                dados de login, registros de acesso, configurações de conta e histórico de
                utilização da Plataforma;
              </Li>
              <Li>
                chaves de API, integrações, configurações de checkout, links de pagamento,
                transações, saques, chargebacks e solicitações de suporte.
              </Li>
            </Bul>
            <P>
              A Nummo poderá analisar documentos e selfies de forma manual, diretamente ou por meio
              de parceiros de KYC e validação de identidade.
            </P>
            <P>
              As senhas são protegidas por mecanismos criptográficos e não são armazenadas em
              formato legível. A Nummo poderá exigir senhas com, no mínimo, uma letra maiúscula, uma
              letra minúscula, um número e um caractere especial.
            </P>

            <H3>3.2. Dados de compradores finais</H3>
            <P>
              Quando um comprador realiza ou tenta realizar uma transação por meio de soluções
              integradas à Nummo, poderemos tratar dados como:
            </P>
            <Bul>
              <Li>nome;</Li>
              <Li>e-mail;</Li>
              <Li>telefone;</Li>
              <Li>CPF, quando necessário;</Li>
              <Li>endereço;</Li>
              <Li>produto ou serviço adquirido;</Li>
              <Li>valor da compra;</Li>
              <Li>data, horário e status da transação;</Li>
              <Li>forma de pagamento utilizada;</Li>
              <Li>identificadores de transação;</Li>
              <Li>
                informações relacionadas a reembolso, contestação, chargeback, falha de pagamento ou
                suspeita de fraude;
              </Li>
              <Li>dados técnicos e registros de acesso relacionados à operação.</Li>
            </Bul>
            <P>
              A Nummo utiliza tokenização nas operações que envolvem cartões e não armazena o número
              completo do cartão nem o código de segurança CVV em seus sistemas.
            </P>

            <H3>3.3. Dados coletados automaticamente</H3>
            <P>
              Ao acessar o site, dashboard, API, checkout ou qualquer ambiente digital da Nummo,
              poderão ser coletados automaticamente:
            </P>
            <Bul>
              <Li>endereço IP;</Li>
              <Li>data e horário de acesso;</Li>
              <Li>navegador, sistema operacional, idioma e tipo de dispositivo;</Li>
              <Li>identificadores de sessão;</Li>
              <Li>páginas acessadas e interações realizadas;</Li>
              <Li>eventos técnicos, registros de segurança e logs;</Li>
              <Li>parâmetros de origem de campanhas;</Li>
              <Li>cookies, pixels, trackers e tecnologias semelhantes;</Li>
              <Li>
                informações relacionadas à estabilidade, desempenho, erros e segurança da
                Plataforma.
              </Li>
            </Bul>

            <H3>3.4. Dados obtidos de terceiros</H3>
            <P>
              A Nummo poderá receber Dados Pessoais de terceiros quando isso for necessário para a
              prestação dos serviços, prevenção a fraudes, validação cadastral, análise de risco ou
              cumprimento de obrigações legais.
            </P>
            <P>
              Esses terceiros podem incluir parceiros de pagamento, bancos, provedores de KYC,
              ferramentas de antifraude, fornecedores de nuvem, analytics, CRM, atendimento,
              marketing, bases públicas, fontes legítimas de consulta e autoridades competentes.
            </P>

            <H2>4. Como a Nummo utiliza os Dados Pessoais</H2>
            <P>A Nummo poderá utilizar Dados Pessoais para:</P>

            <H3>4.1. Prestação e operação dos serviços</H3>
            <Bul>
              <Li>criar, autenticar, administrar e manter contas;</Li>
              <Li>
                disponibilizar dashboard, API, checkout, checkout builder, links de pagamento, Pix,
                boleto, cartões, split, saldo, saque, chargeback, marketplace e demais
                funcionalidades;
              </Li>
              <Li>viabilizar a intermediação tecnológica de pagamentos;</Li>
              <Li>integrar a Plataforma a parceiros financeiros e operacionais;</Li>
              <Li>disponibilizar suporte e atendimento;</Li>
              <Li>enviar comunicações transacionais, operacionais e de segurança;</Li>
              <Li>
                realizar conciliação, gestão de saldo, saques, chargebacks e demais rotinas
                operacionais;
              </Li>
              <Li>
                emitir documentos fiscais da Nummo e viabilizar recursos relacionados à emissão
                fiscal de sellers, quando aplicável.
              </Li>
            </Bul>

            <H3>4.2. Segurança, prevenção a fraudes e análise de risco</H3>
            <Bul>
              <Li>validar cadastros, documentos e informações fornecidas;</Li>
              <Li>realizar procedimentos de KYC;</Li>
              <Li>
                prevenir fraudes, golpes, lavagem de dinheiro, financiamento ao terrorismo e demais
                atividades ilícitas;
              </Li>
              <Li>identificar comportamentos suspeitos;</Li>
              <Li>
                proteger compradores, sellers, parceiros, colaboradores e a própria Plataforma;
              </Li>
              <Li>
                analisar riscos relacionados a contas, pagamentos, saques, chargebacks e transações;
              </Li>
              <Li>
                investigar violações aos Termos de Uso, à legislação ou às políticas internas;
              </Li>
              <Li>cumprir determinações de autoridades competentes.</Li>
            </Bul>

            <H3>4.3. Comunicação, marketing e melhoria de produtos</H3>
            <P>A Nummo poderá utilizar Dados Pessoais para:</P>
            <Bul>
              <Li>
                enviar e-mails, mensagens por WhatsApp, SMS, notificações e comunicações sobre
                produtos, atualizações, conteúdos, eventos e oportunidades;
              </Li>
              <Li>realizar campanhas de marketing, remarketing e mensuração de conversões;</Li>
              <Li>utilizar trackers de dados e campanhas de marketing;</Li>
              <Li>criar públicos personalizados em plataformas de mídia, quando permitido;</Li>
              <Li>
                analisar métricas, uso da Plataforma, origem de tráfego e desempenho de campanhas;
              </Li>
              <Li>
                desenvolver, testar, melhorar e otimizar produtos, funcionalidades, processos e
                serviços.
              </Li>
            </Bul>
            <P>
              O titular poderá cancelar comunicações promocionais pelos mecanismos disponibilizados
              nas próprias mensagens ou pelos canais oficiais da Nummo.
            </P>
            <P>
              Comunicações operacionais, de segurança, pagamentos, suporte, alterações contratuais e
              obrigações legais poderão continuar sendo enviadas quando necessárias.
            </P>

            <H3>4.4. Cumprimento de obrigações legais e defesa de direitos</H3>
            <P>
              A Nummo poderá tratar Dados Pessoais para cumprir obrigações legais, regulatórias,
              fiscais e contratuais; exercer ou defender direitos em processos; atender autoridades
              competentes; preservar evidências; realizar auditorias; prevenir ilícitos e proteger
              interesses legítimos da Nummo, de seus usuários, parceiros e terceiros.
            </P>

            <H2>5. Bases legais para o tratamento</H2>
            <P>
              A Nummo realiza o tratamento de Dados Pessoais com base nas hipóteses legais
              aplicáveis, que podem incluir:
            </P>
            <Bul>
              <Li>
                execução de contrato ou de procedimentos preliminares relacionados ao contrato;
              </Li>
              <Li>cumprimento de obrigação legal ou regulatória;</Li>
              <Li>
                exercício regular de direitos em processo judicial, administrativo ou arbitral;
              </Li>
              <Li>
                legítimo interesse da Nummo ou de terceiros, respeitados os direitos e liberdades
                dos titulares;
              </Li>
              <Li>prevenção à fraude e segurança do titular;</Li>
              <Li>consentimento, quando necessário;</Li>
              <Li>demais hipóteses previstas pela legislação aplicável.</Li>
            </Bul>
            <P>
              A recusa em fornecer determinados Dados Pessoais poderá impedir ou limitar o acesso a
              funcionalidades que dependam desses dados.
            </P>

            <H2>6. Papel da Nummo, dos sellers e dos parceiros</H2>
            <P>
              A Nummo poderá atuar como Controladora quando decidir de forma independente como
              utilizar Dados Pessoais para finalidades próprias, como cadastro, KYC, segurança,
              prevenção a fraudes, análise de risco, gestão de saldo, saque, chargeback,
              monitoramento operacional e cumprimento de obrigações legais.
            </P>
            <P>
              Em situações específicas, a Nummo poderá atuar como Operadora, tratando dados em nome
              do seller para viabilizar recursos como checkout, confirmação de pagamento, integração
              tecnológica e comunicação operacional.
            </P>
            <P>
              O seller é responsável pelo produto ou serviço que vende, pela oferta comercial,
              publicidade, entrega, suporte ao comprador, política de reembolso comercial,
              legalidade do produto ou serviço e veracidade das informações apresentadas.
            </P>
            <P>
              O seller que recebe Dados Pessoais de compradores por meio da Nummo deverá tratá-los
              em conformidade com a legislação aplicável e utilizá-los apenas para fins relacionados
              à venda, entrega, suporte, prevenção a fraude e cumprimento de obrigações legais.
            </P>
            <P>
              A Nummo não garante produtos, serviços, ofertas ou entregas realizadas por sellers.
              Caso existam indícios de fraude, golpe, atividade ilícita, risco operacional, violação
              contratual ou descumprimento legal, a Nummo poderá tratar os Dados Pessoais
              necessários para investigar o caso, proteger usuários, limitar funcionalidades,
              bloquear operações, reter valores quando permitido pelos contratos e pela legislação,
              suspender ou encerrar contas e colaborar com autoridades competentes.
            </P>

            <H2>7. Compartilhamento de Dados Pessoais</H2>
            <P>
              A Nummo poderá compartilhar Dados Pessoais somente quando necessário para as
              finalidades descritas nesta Política.
            </P>
            <P>Os dados poderão ser compartilhados com:</P>
            <Bul>
              <Li>parceiros financeiros e de pagamento;</Li>
              <Li>
                bancos, adquirentes, subadquirentes, instituições de pagamento, processadores,
                emissores, bandeiras e provedores de Pix, boleto, saque ou chargeback;
              </Li>
              <Li>
                provedores de infraestrutura, computação em nuvem, hospedagem, banco de dados,
                backup, segurança, autenticação, e-mail, CRM, analytics, atendimento e mensageria;
              </Li>
              <Li>
                parceiros de KYC, validação de identidade, antifraude, análise de risco e
                monitoramento transacional;
              </Li>
              <Li>
                prestadores de serviços contábeis, fiscais, jurídicos, auditoria, cobrança,
                compliance e emissão de notas fiscais;
              </Li>
              <Li>
                plataformas de marketing, comunicação, redes sociais, trackers e ferramentas de
                mensuração;
              </Li>
              <Li>
                autoridades públicas, órgãos reguladores, Poder Judiciário, autoridades policiais e
                demais entidades competentes;
              </Li>
              <Li>
                investidores, compradores, sucessores ou participantes de operações societárias,
                como fusão, aquisição, reorganização ou venda de ativos.
              </Li>
            </Bul>
            <P>
              Para viabilizar a venda, entrega e suporte, os sellers poderão visualizar dados de
              compradores estritamente necessários, incluindo:
            </P>
            <Bul>
              <Li>nome;</Li>
              <Li>e-mail;</Li>
              <Li>telefone;</Li>
              <Li>CPF parcial;</Li>
              <Li>endereço;</Li>
              <Li>produto comprado;</Li>
              <Li>valor;</Li>
              <Li>status do pagamento.</Li>
            </Bul>
            <P>A Nummo não comercializa Dados Pessoais como produto.</P>

            <H2>8. Cookies, pixels e trackers</H2>
            <P>
              A Nummo utiliza cookies, pixels, SDKs, trackers e tecnologias semelhantes para manter
              o funcionamento da Plataforma, proteger usuários, compreender o uso dos ambientes
              digitais, medir campanhas, prevenir fraudes e melhorar a experiência.
            </P>
            <P>Essas tecnologias podem ser utilizadas para:</P>
            <Bul>
              <Li>autenticação e segurança;</Li>
              <Li>manutenção de sessão;</Li>
              <Li>preferências e configurações;</Li>
              <Li>analytics e desempenho;</Li>
              <Li>atribuição de campanhas;</Li>
              <Li>remarketing;</Li>
              <Li>publicidade;</Li>
              <Li>prevenção a fraudes;</Li>
              <Li>identificação de origem de acessos e conversões.</Li>
            </Bul>
            <P>
              Cookies estritamente necessários podem ser utilizados para o funcionamento da
              Plataforma. Cookies não essenciais poderão ser utilizados conforme as preferências do
              titular e os mecanismos de consentimento disponibilizados no site.
            </P>
            <P>
              A desativação de cookies essenciais poderá afetar o funcionamento de partes do site,
              checkout, dashboard ou demais serviços.
            </P>

            <H2>9. Transferências internacionais de dados</H2>
            <P>
              A Nummo poderá armazenar, processar ou compartilhar Dados Pessoais com fornecedores e
              parceiros localizados fora do Brasil, especialmente em serviços de nuvem, tecnologia,
              segurança, CRM, analytics, comunicação e infraestrutura.
            </P>

            <H2>10. Retenção e eliminação de dados</H2>
            <P>A Nummo manterá Dados Pessoais pelo período necessário para:</P>
            <Bul>
              <Li>prestar os serviços;</Li>
              <Li>manter o histórico operacional e financeiro;</Li>
              <Li>cumprir obrigações fiscais, legais e regulatórias;</Li>
              <Li>prevenir fraudes, lavagem de dinheiro e atividades ilícitas;</Li>
              <Li>resolver disputas;</Li>
              <Li>exercer ou defender direitos;</Li>
              <Li>realizar auditorias;</Li>
              <Li>preservar evidências;</Li>
              <Li>proteger a Plataforma, usuários, parceiros e terceiros.</Li>
            </Bul>
            <P>
              Quando os Dados Pessoais deixarem de ser necessários, poderão ser eliminados,
              anonimizados ou bloqueados, observados os prazos de retenção obrigatórios e as
              hipóteses legais que autorizem sua conservação.
            </P>
            <P>
              A exclusão de uma conta não implica eliminação imediata de todos os dados,
              especialmente quando sua manutenção for necessária por obrigação legal, prevenção a
              fraude, proteção da Plataforma ou defesa de direitos.
            </P>

            <H2>11. Segurança da informação</H2>
            <P>
              A Nummo adota medidas técnicas, administrativas e organizacionais razoáveis para
              proteger os Dados Pessoais contra acessos não autorizados, perda, alteração,
              destruição, divulgação indevida ou qualquer forma de tratamento irregular.
            </P>
            <P>
              Essas medidas podem incluir mecanismos de criptografia, tokenização, controle de
              acesso, credenciais individuais, registros de atividade, limitação de permissões,
              monitoramento de eventos de segurança, validação de operações sensíveis, backups,
              gestão de fornecedores, proteção de APIs, análise antifraude e processos de resposta a
              incidentes.
            </P>
            <P>
              Nenhum ambiente digital é totalmente livre de riscos. Por isso, os usuários também
              devem proteger suas credenciais, não compartilhar senhas, manter seus canais de
              contato atualizados e comunicar imediatamente qualquer suspeita de acesso indevido,
              fraude ou comprometimento de conta.
            </P>

            <H2>12. Decisões automatizadas e revisão humana</H2>
            <P>
              A Nummo poderá utilizar regras automatizadas, ferramentas de segurança, indicadores
              transacionais, modelos de risco, mecanismos antifraude e outras soluções tecnológicas
              para apoiar decisões relacionadas a:
            </P>
            <Bul>
              <Li>bloqueio ou limitação de conta;</Li>
              <Li>análise ou retenção de saque;</Li>
              <Li>recusa de pagamento;</Li>
              <Li>análise de risco;</Li>
              <Li>score antifraude;</Li>
              <Li>prevenção de fraudes;</Li>
              <Li>proteção da Plataforma e de seus usuários.</Li>
            </Bul>
            <P>
              Quando uma decisão relevante for tomada exclusivamente com base em tratamento
              automatizado e afetar os interesses do titular, ele poderá solicitar revisão pelos
              canais oficiais da Nummo.
            </P>
            <P>
              A Nummo poderá fornecer informações sobre os critérios e procedimentos utilizados,
              observados os limites relacionados à proteção de segredos comercial e industrial,
              segurança da Plataforma, prevenção a fraudes e direitos de terceiros.
            </P>
            <P>
              A solicitação de revisão não garante alteração da decisão, pois cada caso será
              analisado conforme os dados disponíveis, obrigações legais, contratos aplicáveis e
              riscos envolvidos.
            </P>

            <H2>13. Direitos dos titulares</H2>
            <P>Nos termos da legislação aplicável, o titular poderá solicitar:</P>
            <Bul>
              <Li>confirmação da existência de tratamento;</Li>
              <Li>acesso aos Dados Pessoais;</Li>
              <Li>correção de dados incompletos, inexatos ou desatualizados;</Li>
              <Li>
                anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados
                em desconformidade com a legislação;
              </Li>
              <Li>portabilidade dos dados, quando aplicável;</Li>
              <Li>informações sobre compartilhamento de dados;</Li>
              <Li>informações sobre a possibilidade de não fornecer consentimento;</Li>
              <Li>revogação de consentimento, quando aplicável;</Li>
              <Li>oposição a tratamentos realizados em desconformidade com a legislação;</Li>
              <Li>revisão de decisões automatizadas;</Li>
              <Li>
                eliminação de dados tratados com consentimento, respeitadas as hipóteses legais de
                retenção;
              </Li>
              <Li>
                reclamação perante a Autoridade Nacional de Proteção de Dados e órgãos de defesa do
                consumidor.
              </Li>
            </Bul>
            <P>
              A Nummo poderá solicitar informações adicionais para confirmar a identidade do
              solicitante e proteger os dados contra acessos indevidos.
            </P>
            <P>
              A confirmação simplificada da existência de tratamento e o acesso simplificado poderão
              ser fornecidos imediatamente quando possível. Solicitações que demandem declaração
              completa serão atendidas no prazo legal aplicável.
            </P>

            <H2>14. Menores de 18 anos</H2>
            <P>
              A Nummo é destinada exclusivamente a pessoas maiores de 18 anos com empresas com CNPJ
              ativo.
            </P>
            <P>
              É proibido criar conta, utilizar os serviços, atuar como seller, receber pagamentos,
              solicitar saque ou realizar operações na Plataforma sendo menor de 18 anos.
            </P>
            <P>
              Caso a Nummo identifique tratamento indevido de Dados Pessoais de menores de idade,
              poderá restringir ou encerrar a conta, interromper o tratamento e adotar as medidas
              necessárias conforme a legislação aplicável.
            </P>

            <H2>15. Incidentes de segurança</H2>
            <P>
              Em caso de incidente de segurança envolvendo Dados Pessoais, a Nummo adotará medidas
              razoáveis para investigar, conter, corrigir e reduzir os impactos do evento.
            </P>
            <P>
              Quando o incidente puder acarretar risco ou dano relevante aos titulares, a Nummo
              realizará as comunicações e providências exigidas pela legislação aplicável, inclusive
              perante autoridades competentes e titulares potencialmente afetados, quando
              necessário.
            </P>

            <H2>16. Atualizações desta Política</H2>
            <P>
              A Nummo poderá atualizar esta Política de Privacidade para refletir alterações em seus
              produtos, práticas operacionais, tecnologias, requisitos legais ou medidas de
              segurança.
            </P>
            <P>
              Quando houver mudanças relevantes, a Nummo poderá comunicar os usuários por meio do
              site, dashboard, e-mail, notificações ou outros canais oficiais.
            </P>
            <P>
              A versão mais atual desta Política estará disponível em{" "}
              <a
                href="https://www.usenummo.com.br"
                className="text-neon underline-offset-2 hover:underline"
              >
                www.usenummo.com.br
              </a>
              .
            </P>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Privacidade — Nummo" },
      {
        name: "description",
        content:
          "Política de Privacidade da Nummo: como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a LGPD.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Privacidade — Nummo" },
      {
        property: "og:description",
        content:
          "Política de Privacidade da Nummo: como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a LGPD.",
      },
      { property: "og:url", content: "https://usenummo.com.br/privacidade" },
    ],
  }),
  component: PrivacidadePage,
});
