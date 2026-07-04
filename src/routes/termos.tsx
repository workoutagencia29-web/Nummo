import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-9 font-display text-xl font-medium tracking-tight text-foreground">{children}</h3>;
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

function TermosPage() {
  return (
    <>
      <Nav />
      <main id="conteudo">
        {/* Head — mesmo modelo/posição/tamanho das outras páginas */}
        <div className="mx-auto max-w-4xl px-6 pt-20 md:pt-28">
          <div className="lg:-ml-24 xl:-ml-40">
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-neon">/ Termos</div>
            <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">Termos e Condições da Nummo</h1>
            <p className="mt-3 text-muted-foreground">
              As regras que regem o uso da plataforma, dos produtos e dos serviços da Nummo. Leia com atenção para entender seus direitos e responsabilidades ao usar a Nummo.
            </p>
          </div>
        </div>

        {/* Corpo — mesma posição, formato e formatação da /privacidade e /cookies */}
        <div className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
          <div className="mt-14 text-pretty text-lg leading-relaxed text-muted-foreground lg:-ml-12 lg:-mr-16 lg:mt-[98px] xl:-ml-24 xl:-mr-28 [&>*:first-child]:mt-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Versão 1.0 — Atualizada em 21 de junho de 2026</p>

            <P lead>Estes Termos regulam o acesso e o uso da Plataforma Nummo por Sellers, usuários autorizados, compradores finais, marketplaces, parceiros e demais pessoas que utilizem seus recursos.</P>
            <P>A Nummo é uma marca operada por <B>HEITOR ROCHA PAGANOTTO LTDA. – ME</B>, inscrita no CNPJ sob o nº <B>63.320.977/0001-06</B>, com sede na Rua Pais Leme, nº 215, Conjunto 1713, Pinheiros, São Paulo/SP, CEP 05424-150.</P>
            <P>Ao criar uma conta, utilizar a Plataforma, integrar a API, gerar um checkout, criar link de pagamento, realizar uma transação, solicitar um saque ou aceitar estes Termos por meio eletrônico, o usuário declara que leu, compreendeu e concordou com as regras abaixo.</P>

            <H2>1. Definições</H2>
            <P>Para estes Termos:</P>
            <P><B>Nummo:</B> marca operada por HEITOR ROCHA PAGANOTTO LTDA. – ME e responsável pela Plataforma.</P>
            <P><B>Plataforma:</B> conjunto de ambientes, dashboards, APIs, checkouts, links de pagamento, integrações, recursos tecnológicos e demais funcionalidades disponibilizadas pela Nummo.</P>
            <P><B>Seller ou Lojista:</B> pessoa jurídica com CNPJ ativo que utiliza a Plataforma para disponibilizar meios de pagamento aos seus compradores.</P>
            <P><B>Comprador:</B> pessoa física ou jurídica que realiza ou tenta realizar uma compra por meio de checkout, link de pagamento, marketplace ou outro recurso integrado à Nummo.</P>
            <P><B>Parceiros de Pagamento:</B> instituições financeiras, bancos, adquirentes, subadquirentes, instituições de pagamento, processadores, bandeiras, emissores e demais terceiros envolvidos na autorização, processamento, liquidação ou movimentação de uma transação.</P>
            <P><B>Transação:</B> pagamento, tentativa de pagamento, cobrança recorrente, estorno, chargeback, saque, split, liquidação ou qualquer operação registrada na Plataforma.</P>
            <P><B>Saldo Disponível:</B> valor indicado no dashboard como potencialmente disponível para saque, sujeito a análise, liquidação, estornos, chargebacks, taxas, retenções, regras dos Parceiros de Pagamento e obrigações legais.</P>
            <P><B>Chargeback:</B> contestação de uma compra realizada pelo portador do cartão perante o banco emissor, bandeira ou instituição responsável pelo meio de pagamento.</P>

            <H2>2. Objeto e natureza dos serviços</H2>
            <P>A Nummo disponibiliza infraestrutura tecnológica para intermediação de pagamentos e integração de Sellers com Parceiros de Pagamento.</P>
            <P>A Plataforma poderá oferecer, conforme disponibilidade e aprovação aplicável, recursos como API, checkout, checkout builder, link de pagamento, Pix, boleto, cartões de crédito e débito, split de pagamentos, marketplace, saldo, saque, recorrência, chargeback, antifraude e funcionalidades relacionadas.</P>
            <P>A Nummo não atua como banco, adquirente, subadquirente ou instituição de pagamento, salvo quando essa condição for expressamente indicada em documento específico e aplicável.</P>
            <P>A Nummo não vende produtos ou serviços em nome dos Sellers, não participa da relação comercial entre Seller e Comprador e não garante a entrega, qualidade, legalidade, adequação, disponibilidade, suporte, publicidade ou resultado de produtos e serviços oferecidos pelos Sellers.</P>

            <H2>3. Elegibilidade, cadastro e KYC</H2>
            <P>Para utilizar a Plataforma como Seller, é necessário:</P>
            <Bul>
              <Li>possuir 18 anos ou mais;</Li>
              <Li>possuir CNPJ ativo e regular;</Li>
              <Li>ter poderes legais para representar a empresa cadastrada;</Li>
              <Li>fornecer informações verdadeiras, completas, atualizadas e verificáveis;</Li>
              <Li>aceitar estes Termos, a Política de Privacidade e demais documentos aplicáveis;</Li>
              <Li>concluir os procedimentos de cadastro, validação e KYC exigidos pela Nummo ou por seus Parceiros de Pagamento.</Li>
            </Bul>
            <P>A Nummo poderá solicitar, a qualquer momento, documentos, comprovantes, informações societárias, dados bancários, documentos de identidade, selfie de verificação, informações sobre a atividade empresarial, origem de recursos, produtos comercializados, comprovação de entrega ou demais elementos necessários para análise cadastral, prevenção a fraudes, segurança, gestão de risco e cumprimento de obrigações legais ou contratuais.</P>
            <P>A Nummo poderá recusar, limitar, suspender ou encerrar cadastros que apresentem dados inconsistentes, documentos inválidos, atividade incompatível com estes Termos, risco operacional, indícios de fraude ou descumprimento de exigências de Parceiros de Pagamento.</P>
            <P>O Seller é integralmente responsável pelas informações fornecidas, pelos atos praticados por seus representantes, colaboradores, usuários autorizados e terceiros que utilizem suas credenciais.</P>

            <H2>4. Conta, acessos e credenciais</H2>
            <P>A conta da Nummo é vinculada ao Seller cadastrado e não poderá ser cedida, transferida, vendida, emprestada ou compartilhada com terceiros sem autorização expressa da Nummo.</P>
            <P>A Nummo poderá disponibilizar acessos adicionais, perfis e níveis de permissão conforme as funcionalidades disponíveis na Plataforma.</P>
            <P>O Seller deverá manter sob sigilo suas senhas, chaves de API, tokens, credenciais, códigos de autenticação, links administrativos e demais elementos de acesso. Toda operação realizada com credenciais vinculadas à conta do Seller será presumida como autorizada por ele, salvo prova de comprometimento devidamente comunicada à Nummo de forma imediata.</P>
            <P>A Nummo poderá revogar, redefinir, limitar ou suspender credenciais sempre que identificar vazamento, uso indevido, risco de segurança, tentativa de fraude, acesso não autorizado ou descumprimento destes Termos.</P>

            <H2>5. Operação de pagamentos, saldo, liquidação e saque</H2>
            <P>A Nummo opera inicialmente apenas em reais brasileiros e no território brasileiro. Cartões aceitos deverão ser emitidos no Brasil, salvo se a Nummo comunicar formalmente a ampliação de sua operação internacional.</P>
            <P>Os valores recebidos em transações são processados, liquidados e mantidos sob custódia operacional dos Parceiros de Pagamento até seu repasse ou saque, conforme as regras aplicáveis a cada meio de pagamento.</P>
            <P>O dashboard da Nummo exibe informações operacionais e financeiras relacionadas às transações, mas não constitui conta bancária, conta de pagamento, depósito, investimento, empréstimo ou garantia de disponibilidade imediata de valores.</P>

            <H3>5.1. Prazos de liquidação</H3>
            <P>O Pix poderá ser disponibilizado em D+0, observado o horário da operação, a disponibilidade do sistema, a análise de risco, os procedimentos de segurança e as regras dos Parceiros de Pagamento.</P>
            <P>Os prazos de liquidação para cartões, boletos, recorrências, estornos, chargebacks e demais meios de pagamento serão informados no dashboard, tabela comercial, proposta aplicável ou comunicação operacional da Nummo.</P>
            <P>A Nummo poderá ajustar prazos de liquidação quando exigido por Parceiros de Pagamento, bandeiras, bancos, obrigações legais, análise de risco, chargebacks, indisponibilidades, auditorias, suspeitas de fraude ou necessidade de proteção da Plataforma.</P>

            <H3>5.2. Saques</H3>
            <P>O valor mínimo para solicitação de saque é de R$ 200,00.</P>
            <P>Solicitações de saque realizadas entre 6h e 15h, em dias úteis, poderão ser processadas no mesmo dia, desde que atendidos os critérios de disponibilidade, segurança, análise de risco e liquidação aplicáveis.</P>
            <P>Solicitações enviadas após as 15h poderão ser processadas no próximo dia útil.</P>
            <P>A efetiva disponibilidade dos valores na conta bancária do Seller dependerá dos procedimentos e prazos dos Parceiros de Pagamento e da instituição financeira destinatária.</P>
            <P>A Nummo poderá impor limites temporários, solicitar documentação adicional, bloquear alterações de dados bancários, reter valores ou suspender saques quando houver risco, inconsistência, chargeback, suspeita de fraude, exigência legal, determinação de Parceiro de Pagamento ou necessidade de análise operacional.</P>
            <P>Os saques deverão ser direcionados exclusivamente para conta bancária de titularidade do Seller ou de conta autorizada após validação pela Nummo.</P>

            <H2>6. Tarifas, cobranças e condições comerciais</H2>
            <P>As tarifas aplicáveis aos serviços da Nummo poderão ser disponibilizadas na landing page, no dashboard, em proposta comercial, contrato específico ou condição personalizada negociada com o Seller.</P>
            <P>A tarifa de processamento poderá ser descontada automaticamente no momento da aprovação da Transação.</P>
            <P>A tarifa de saque poderá ser cobrada no momento em que o Seller solicitar o saque.</P>
            <P>A incidência, forma de cálculo, eventual devolução de tarifa em caso de estorno, cobrança por chargeback, custos operacionais, tributos, tarifas de parceiros e demais condições econômicas serão aquelas previstas na tabela comercial, dashboard, proposta ou contrato aplicável.</P>
            <P>A Nummo poderá alterar tarifas, prazos ou condições comerciais mediante aviso prévio razoável por dashboard, e-mail ou canal oficial.</P>
            <P>Alterações decorrentes de regras de Parceiros de Pagamento, bandeiras, bancos, tributos, obrigações legais, custos regulatórios, segurança, fraude ou risco poderão ser aplicadas de forma imediata, com comunicação posterior quando necessário.</P>
            <P>Condições personalizadas negociadas por escrito entre a Nummo e o Seller prevalecerão sobre as condições gerais, exclusivamente no que forem incompatíveis.</P>

            <H2>7. Responsabilidades do Seller</H2>
            <P>O Seller é exclusivamente responsável por:</P>
            <Bul>
              <Li>seus produtos, serviços, conteúdos, ofertas, preços, publicidade e condições comerciais;</Li>
              <Li>a qualidade, legalidade, disponibilidade, entrega e execução do que vende;</Li>
              <Li>suporte, atendimento, cancelamento comercial, reembolso e relacionamento com Compradores;</Li>
              <Li>emissão de nota fiscal relativa aos produtos ou serviços vendidos aos Compradores;</Li>
              <Li>manutenção de informações claras, verdadeiras e atualizadas em seus checkouts, links, páginas de venda e canais de atendimento;</Li>
              <Li>obtenção de autorizações, licenças, registros e permissões necessários à sua atividade;</Li>
              <Li>cumprimento da legislação aplicável, incluindo normas consumeristas, fiscais, civis, comerciais e de proteção de dados;</Li>
              <Li>prevenção de práticas enganosas, abusivas, fraudulentas ou ilícitas;</Li>
              <Li>manutenção de evidências de venda, entrega, prestação de serviço, aceite, comunicação e reembolso;</Li>
              <Li>todos os atos praticados por seus sócios, administradores, funcionários, desenvolvedores, afiliados, sub-sellers e demais pessoas sob sua responsabilidade.</Li>
            </Bul>
            <P>A Nummo emitirá documento fiscal apenas em relação às tarifas e aos serviços próprios cobrados do Seller, quando aplicável.</P>

            <H2>8. Checkout, Compradores e cobranças recorrentes</H2>
            <P>O Comprador deverá visualizar, no checkout ou ambiente comercial aplicável, as informações relacionadas ao Seller, à compra, ao valor, à forma de pagamento e às condições apresentadas pelo próprio Seller.</P>
            <P>A identificação exibida no checkout, comprovante, extrato ou fatura poderá conter o nome do Seller, da Nummo, de Parceiros de Pagamento ou uma combinação desses elementos, conforme a estrutura operacional aplicável.</P>
            <P>Qualquer dúvida, reclamação, cancelamento comercial, solicitação de entrega, devolução, suporte sobre produto ou serviço deverá ser direcionada prioritariamente ao Seller responsável pela oferta.</P>
            <P>A Nummo poderá prestar suporte relacionado à tecnologia de pagamento, status de transação, segurança, suspeita de fraude ou funcionalidades sob seu controle, sem assumir a responsabilidade comercial do Seller.</P>

            <H3>8.1. Cobranças recorrentes e assinaturas</H3>
            <P>O Seller que utilizar recursos de recorrência ou assinatura deverá:</P>
            <Bul>
              <Li>obter autorização válida, livre, informada e verificável do Comprador;</Li>
              <Li>informar com clareza preço, frequência, período de cobrança, renovação, condições de cancelamento e canal de suporte;</Li>
              <Li>disponibilizar meio razoável para cancelamento de futuras cobranças;</Li>
              <Li>manter evidências da autorização do Comprador pelo período necessário à defesa de direitos e prevenção a chargebacks;</Li>
              <Li>cumprir regras de Parceiros de Pagamento, bandeiras, legislação aplicável e direitos do consumidor.</Li>
            </Bul>
            <P>O cancelamento de uma recorrência impedirá cobranças futuras, mas não gera automaticamente estorno de valores já processados, salvo quando exigido por lei, decisão do Seller, regra de Parceiro de Pagamento ou política comercial aplicável.</P>

            <H2>9. Estornos, reembolsos, chargebacks e contestações</H2>
            <P>O estorno ou reembolso comercial é de responsabilidade do Seller e deverá observar as funcionalidades disponíveis na Plataforma, o meio de pagamento utilizado, as regras dos Parceiros de Pagamento e a legislação aplicável.</P>
            <P>A Nummo poderá disponibilizar mecanismos para solicitação de estorno total ou parcial, mas não garante que todos os meios de pagamento, valores, transações ou situações serão elegíveis para estorno automático.</P>
            <P>O Chargeback é processo iniciado pelo Comprador perante banco emissor, bandeira, adquirente ou outro participante do arranjo de pagamento. A decisão sobre aceitar, negar, reverter ou manter um Chargeback pertence às instituições e regras aplicáveis ao meio de pagamento, não à Nummo.</P>
            <P>Quando houver Chargeback, contestação, reversão, multa, tarifa ou débito relacionado a uma Transação, o Seller será responsável pelos respectivos valores, custos, encargos e documentos necessários, observada a legislação aplicável.</P>
            <P>O Seller deverá enviar, em até 2 dias úteis contados da solicitação da Nummo, ou em prazo inferior exigido por Parceiro de Pagamento, os documentos e evidências necessários para análise da contestação, incluindo, quando aplicável, nota fiscal, comprovante de entrega, rastreio, contrato, comprovante de aceite, comunicação com o Comprador e descrição da transação.</P>
            <P>A ausência de resposta, o envio incompleto ou a entrega fora do prazo poderá impedir a contestação ou resultar na aceitação do Chargeback.</P>
            <P>A Nummo poderá debitar valores de Saldo Disponível, reter valores, compensar recebíveis futuros, solicitar regularização de saldo negativo ou adotar medidas de cobrança em relação a Chargebacks, estornos, tarifas, multas, débitos e custos atribuíveis ao Seller.</P>

            <H2>10. Marketplace, split e sub-sellers</H2>
            <P>Quando o Seller operar como marketplace, plataforma ou intermediário de múltiplos vendedores, será integralmente responsável por seus sub-sellers, incluindo:</P>
            <Bul>
              <Li>onboarding e validação de seus usuários;</Li>
              <Li>legalidade dos produtos e serviços ofertados;</Li>
              <Li>atendimento, entrega, reembolso e suporte;</Li>
              <Li>divisão e distribuição de valores;</Li>
              <Li>dados enviados à Nummo;</Li>
              <Li>prevenção a fraudes e atividades proibidas;</Li>
              <Li>cumprimento de obrigações fiscais, legais e contratuais.</Li>
            </Bul>
            <P>A Nummo poderá exigir KYC, documentos, dados bancários, informações comerciais, aprovação individual e análise de risco de cada sub-seller antes de permitir pagamentos, split, saque, repasses ou acesso a determinadas funcionalidades.</P>
            <P>A Nummo poderá limitar, bloquear ou suspender a operação de qualquer marketplace, sub-seller ou divisão de valores quando identificar risco, inconsistência, fraude, descumprimento destes Termos, determinação de Parceiro de Pagamento ou obrigação legal.</P>

            <H2>11. Atividades proibidas e restritas</H2>
            <P>A Plataforma não poderá ser utilizada, direta ou indiretamente, para atividade ilegal, fraudulenta, enganosa, abusiva, lesiva a terceiros ou incompatível com regras de Parceiros de Pagamento.</P>
            <P>Sem prejuízo de outras hipóteses, é proibida a utilização da Nummo para:</P>
            <Bul>
              <Li>rifas, sorteios, loterias, promoções irregulares ou atividades equiparadas;</Li>
              <Li>apostas esportivas, iGaming, cassinos, jogos de azar ou atividades semelhantes;</Li>
              <Li>criptoativos, compra, venda, intermediação, investimento, custódia ou serviços relacionados;</Li>
              <Li>conteúdo adulto, pornografia, serviços sexuais ou materiais destinados à gratificação sexual;</Li>
              <Li>armas, munições, itens de defesa, explosivos, produtos perigosos ou acessórios relacionados;</Li>
              <Li>cigarros, tabaco, vapes, produtos com nicotina ou similares;</Li>
              <Li>medicamentos, fármacos, produtos controlados ou venda irregular de itens de saúde;</Li>
              <Li>doações, vaquinhas, campanhas de arrecadação ou captação coletiva;</Li>
              <Li>serviços financeiros de terceiros, investimentos, empréstimos, crédito, câmbio, cobrança, remessas, transferência de recursos ou atividade similar;</Li>
              <Li>pirataria, falsificação, violação de propriedade intelectual, documentos falsos ou fraude documental;</Li>
              <Li>lavagem de dinheiro, financiamento ao terrorismo, ocultação de recursos ou qualquer atividade ilícita;</Li>
              <Li>produtos ou serviços cuja venda, divulgação ou distribuição viole a legislação aplicável;</Li>
              <Li>qualquer atividade rejeitada, restrita ou vedada por Parceiros de Pagamento, bandeiras, bancos, autoridades ou pela análise de risco da Nummo.</Li>
            </Bul>
            <P>A Nummo poderá aceitar, sujeita a cadastro, KYC, análise de risco e aprovação operacional, atividades relacionadas a infoprodutos, cursos, mentorias, suplementos, cosméticos, dropshipping, marketplaces, turismo, reservas, assinaturas, produtos digitais e prestação de serviços.</P>
            <P>A oferta de produtos físicos dependerá de disponibilização específica da funcionalidade e aprovação da Nummo.</P>
            <P>A lista acima é exemplificativa e poderá ser atualizada pela Nummo a qualquer momento para refletir mudanças legais, regulatórias, contratuais ou operacionais.</P>

            <H2>12. API, integrações e desenvolvedores</H2>
            <P>A Nummo poderá disponibilizar APIs, webhooks, documentação, chaves de produção e integrações para permitir que o Seller conecte sua operação à Plataforma.</P>
            <P>O Seller é responsável por:</P>
            <Bul>
              <Li>integrar a API conforme a documentação vigente;</Li>
              <Li>manter suas chaves, tokens, segredos e credenciais em ambiente seguro;</Li>
              <Li>não expor ou compartilhar credenciais com pessoas não autorizadas;</Li>
              <Li>validar assinaturas, origem e integridade de webhooks;</Li>
              <Li>implementar controles de segurança, monitoramento e tratamento adequado de erros;</Li>
              <Li>garantir que seus sistemas, sites e aplicações não realizem operações fraudulentas, abusivas ou incompatíveis com estes Termos;</Li>
              <Li>responder por toda atividade iniciada com suas chaves ou credenciais.</Li>
            </Bul>
            <P>A Nummo não disponibiliza ambiente sandbox neste momento, podendo disponibilizá-lo futuramente conforme sua estratégia operacional.</P>
            <P>A Nummo poderá modificar, limitar, depreciar, suspender ou revogar APIs, endpoints, webhooks, chaves e integrações por razões de segurança, manutenção, evolução tecnológica, risco, abuso, descumprimento destes Termos, exigência de Parceiros de Pagamento ou obrigação legal.</P>
            <P>A Nummo não garante disponibilidade ininterrupta da API, do dashboard, dos checkouts, dos meios de pagamento ou de serviços dependentes de terceiros. Manutenções, atualizações, falhas de conectividade, indisponibilidades de Parceiros de Pagamento, interrupções de segurança ou eventos fora do controle direto da Nummo poderão afetar a operação.</P>
            <P>Informações sobre disponibilidade e incidentes operacionais poderão ser divulgadas na <Link to="/status" className="text-neon underline-offset-2 hover:underline">página de status</Link> da Nummo.</P>

            <H2>13. Tratamento de Dados Pessoais — DPA Simplificado</H2>
            <P>Esta seção integra estes Termos e funciona como acordo simplificado de tratamento de dados entre a Nummo e o Seller sempre que a Nummo tratar Dados Pessoais em nome do Seller.</P>
            <P>O Seller atua como Controlador dos Dados Pessoais de Compradores que tratar para fins comerciais próprios, incluindo venda, entrega, suporte, relacionamento, publicidade, emissão de nota fiscal e cumprimento de suas obrigações legais.</P>
            <P>A Nummo poderá atuar como Operadora quando tratar Dados Pessoais em nome do Seller para viabilizar checkout, confirmação de pagamento, integração tecnológica, comunicação operacional e funcionalidades contratadas.</P>
            <P>A Nummo atuará como Controladora independente em relação aos tratamentos necessários para cadastro, KYC, segurança, prevenção a fraudes, análise de risco, gestão de chargebacks, saldo, saque, obrigações legais, defesa de direitos, auditoria, integridade da Plataforma e cumprimento de exigências de Parceiros de Pagamento.</P>
            <P>O Seller declara e garante que:</P>
            <Bul>
              <Li>possui base legal adequada para coletar, usar, compartilhar e tratar os Dados Pessoais enviados à Nummo;</Li>
              <Li>fornece aos Compradores informações claras sobre o tratamento de seus dados;</Li>
              <Li>utiliza Dados Pessoais apenas para finalidades legítimas e compatíveis com a relação comercial;</Li>
              <Li>não compartilha dados excessivos, ilícitos ou desnecessários;</Li>
              <Li>responderá por solicitações relacionadas a seus produtos, serviços, publicidade, entrega e relacionamento comercial com Compradores;</Li>
              <Li>manterá medidas de segurança compatíveis com os riscos de sua atividade.</Li>
            </Bul>
            <P>A Nummo poderá utilizar provedores, suboperadores e Parceiros de Pagamento para execução dos serviços, incluindo provedores de nuvem, KYC, antifraude, analytics, CRM, mensageria, suporte, emissão fiscal, segurança e infraestrutura, observadas as finalidades legítimas e a Política de Privacidade.</P>
            <P>A Nummo adotará medidas razoáveis de segurança para proteger os Dados Pessoais tratados em sua Plataforma e poderá cooperar com o Seller em solicitações de titulares, incidentes e auditorias, dentro dos limites técnicos, legais, contratuais e operacionais aplicáveis.</P>
            <P>A Nummo poderá reter Dados Pessoais após o término da relação contratual quando necessário para cumprir obrigações legais, regulatórias, fiscais, de segurança, prevenção a fraudes, defesa de direitos ou exigências de Parceiros de Pagamento.</P>
            <P>O tratamento de Dados Pessoais pela Nummo também observará sua <Link to="/privacidade" className="text-neon underline-offset-2 hover:underline">Política de Privacidade</Link>.</P>

            <H2>14. Suspensão, bloqueio, retenção e encerramento</H2>
            <P>A Nummo poderá, a qualquer momento, limitar funcionalidades, bloquear transações, reter valores, suspender acessos, revogar chaves de API, solicitar documentos, interromper saques ou encerrar contas quando identificar:</P>
            <Bul>
              <Li>fraude, golpe, atividade ilícita ou suspeita de crime;</Li>
              <Li>descumprimento destes Termos;</Li>
              <Li>dados falsos, incompletos ou inconsistentes;</Li>
              <Li>ausência de documentos solicitados;</Li>
              <Li>chargebacks, estornos, reclamações ou índices de risco incompatíveis;</Li>
              <Li>atividade proibida ou incompatível com regras de Parceiros de Pagamento;</Li>
              <Li>determinação de autoridade competente;</Li>
              <Li>necessidade de prevenção a perdas, fraude, dano reputacional ou risco operacional;</Li>
              <Li>descumprimento de obrigações financeiras pelo Seller;</Li>
              <Li>risco à segurança da Plataforma, de Compradores, Sellers, Parceiros ou terceiros.</Li>
            </Bul>
            <P>Quando possível, a Nummo comunicará o Seller sobre a medida adotada. A comunicação prévia poderá não ocorrer quando isso puder comprometer investigações, aumentar risco de fraude, violar obrigação legal ou prejudicar medidas de segurança.</P>
            <P>O Seller poderá solicitar o encerramento de sua conta a qualquer momento, desde que não existam saldo negativo, chargebacks abertos, disputas, obrigações pendentes, documentos em análise, retenções justificadas ou exigências legais de manutenção da conta.</P>
            <P>O encerramento da conta não elimina obrigações anteriores, responsabilidades por Transações já realizadas, Chargebacks, débitos, impostos, reembolsos, obrigações legais ou direitos de cobrança da Nummo.</P>

            <H2>15. Propriedade intelectual</H2>
            <P>A Plataforma, marca Nummo, logotipos, códigos, APIs, documentação, interfaces, layouts, materiais, conteúdos, metodologias e demais ativos da Nummo são protegidos por normas de propriedade intelectual.</P>
            <P>A Nummo concede ao Seller licença limitada, não exclusiva, revogável, intransferível e não sublicenciável para utilizar a Plataforma exclusivamente durante a vigência destes Termos e para fins legítimos relacionados à sua operação.</P>
            <P>O Seller não poderá copiar, modificar, vender, distribuir, alugar, sublicenciar, realizar engenharia reversa, explorar comercialmente ou tentar extrair códigos, lógicas, estruturas, dados ou funcionalidades da Plataforma sem autorização expressa da Nummo.</P>
            <P>O Seller permanecerá titular de seus conteúdos, marcas, produtos e materiais próprios, concedendo à Nummo autorização limitada para utilizá-los quando necessário à prestação dos serviços, execução de transações, operação de checkouts e cumprimento destes Termos.</P>

            <H2>16. Limitação de responsabilidade e indenização</H2>
            <P>A Nummo não garante aprovação, disponibilidade ininterrupta, liquidação, processamento, autorização, reversão, prazo ou resultado de Transações que dependam exclusivamente de Parceiros de Pagamento, adquirentes, subadquirentes, instituições financeiras, bandeiras, bancos, sistemas de Pix, redes de cartão, emissores, provedores de boleto ou demais terceiros.</P>
            <P>Falhas, recusas, atrasos, indisponibilidades, bloqueios, reversões, alterações de regras ou decisões exclusivamente atribuíveis a terceiros serão tratadas conforme regras operacionais, contratos e procedimentos desses terceiros, sem prejuízo das obrigações da Nummo em relação aos serviços que estejam sob seu controle direto.</P>
            <P>Na máxima extensão permitida pela legislação aplicável, a Nummo não será responsável por danos indiretos, lucros cessantes, perda de oportunidade, perda de receita, perda de dados, danos reputacionais, danos consequenciais ou prejuízos decorrentes de atos de terceiros, falhas de internet, indisponibilidades externas, decisões de Parceiros de Pagamento, uso inadequado da Plataforma, credenciais comprometidas por culpa do Seller ou relação comercial entre Seller e Comprador.</P>
            <P>Sem prejuízo de responsabilidades que não possam ser legalmente excluídas ou limitadas, a responsabilidade total da Nummo perante o Seller por danos diretamente causados e comprovados, relacionados aos serviços sob controle direto da Nummo, ficará limitada ao total de tarifas efetivamente pagas pelo Seller à Nummo nos 12 meses anteriores ao evento que originar a reclamação.</P>
            <P>O Seller deverá indenizar, defender e manter a Nummo, seus administradores, colaboradores, parceiros e representantes indenes de prejuízos, reclamações, multas, processos, chargebacks, custos, honorários, danos e despesas decorrentes de:</P>
            <Bul>
              <Li>produtos ou serviços vendidos pelo Seller;</Li>
              <Li>não entrega, entrega inadequada, publicidade enganosa ou descumprimento de oferta;</Li>
              <Li>atividade proibida, ilegal ou não autorizada;</Li>
              <Li>violação de direitos de terceiros;</Li>
              <Li>dados falsos ou documentação irregular;</Li>
              <Li>fraude praticada pelo Seller, seus usuários, sub-sellers, colaboradores ou representantes;</Li>
              <Li>descumprimento de obrigações fiscais, consumeristas, contratuais ou de proteção de dados;</Li>
              <Li>uso indevido da Plataforma, API, checkouts, credenciais ou recursos da Nummo.</Li>
            </Bul>
            <P>Nada nestes Termos exclui ou limita direitos que não possam ser afastados pela legislação aplicável, especialmente os direitos assegurados a Compradores consumidores.</P>

            <H2>17. Alterações, comunicações, lei aplicável e foro</H2>
            <P>A Nummo poderá atualizar estes Termos para refletir mudanças em seus serviços, regras operacionais, medidas de segurança, exigências legais, condições de Parceiros de Pagamento ou evolução tecnológica.</P>
            <P>Alterações materiais serão comunicadas com antecedência razoável por dashboard, e-mail ou canais oficiais. Alterações necessárias por segurança, prevenção a fraudes, obrigação legal, exigência regulatória ou determinação de Parceiros de Pagamento poderão ser aplicadas imediatamente.</P>
            <P>A continuidade de uso da Plataforma após a entrada em vigor de uma atualização representará a aceitação da nova versão dos Termos.</P>
            <P>As comunicações da Nummo poderão ocorrer pelo dashboard, e-mail cadastrado, notificações, WhatsApp ou demais canais oficiais divulgados na Plataforma. O Seller é responsável por manter seus dados de contato atualizados.</P>
            <P>A <Link to="/privacidade" className="text-neon underline-offset-2 hover:underline">Política de Privacidade</Link> e a <Link to="/cookies" className="text-neon underline-offset-2 hover:underline">Política de Cookies</Link> da Nummo integram estes Termos no que forem aplicáveis.</P>
            <P>Estes Termos serão regidos pelas leis da República Federativa do Brasil.</P>
            <P>Fica eleito o foro da Comarca de São Paulo/SP para solucionar controvérsias relacionadas a estes Termos, com ressalva dos casos em que a legislação aplicável assegurar foro diverso ao Comprador consumidor.</P>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos — Nummo" },
      { name: "description", content: "Termos e Condições da Nummo: regras de uso da plataforma, dos produtos e dos serviços, pagamentos, saques, chargebacks e responsabilidades." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Termos — Nummo" },
      { property: "og:description", content: "Termos e Condições da Nummo: regras de uso da plataforma, dos produtos e dos serviços, pagamentos, saques, chargebacks e responsabilidades." },
      { property: "og:url", content: "https://usenummo.com.br/termos" },
    ],
  }),
  component: TermosPage,
});
