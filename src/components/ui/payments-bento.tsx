import { CreditCard, Barcode, Link2, Repeat, Blocks, TrendingUp, PlusCircle, Sparkles, type LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Seção "Venda onde e como quiser": faixa com os meios de pagamento
   aceitos + grid de ferramentas. Estilo neomórfico claro (igual ao resto
   do site). Sem imagens externas — marcas em SVG inline (seguro no CSP).   */
/* ------------------------------------------------------------------ */

function PixMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M5.283 18.36a3.505 3.505 0 0 0 2.493-1.032l3.6-3.6a.684.684 0 0 1 .946 0l3.613 3.613a3.504 3.504 0 0 0 2.493 1.032h.71l-4.56 4.56a3.647 3.647 0 0 1-5.156 0L4.85 18.36ZM18.428 5.627a3.505 3.505 0 0 0-2.493 1.032l-3.613 3.614a.67.67 0 0 1-.946 0l-3.6-3.6A3.505 3.505 0 0 0 5.283 5.64h-.434l4.573-4.572a3.646 3.646 0 0 1 5.156 0l4.559 4.559ZM1.068 9.422 3.79 6.699h1.492a2.483 2.483 0 0 1 1.744.722l3.6 3.6a1.73 1.73 0 0 0 2.443 0l3.614-3.613a2.482 2.482 0 0 1 1.744-.723h1.767l2.737 2.737a3.646 3.646 0 0 1 0 5.156l-2.736 2.736h-1.768a2.482 2.482 0 0 1-1.744-.722l-3.613-3.613a1.77 1.77 0 0 0-2.444 0l-3.6 3.6a2.483 2.483 0 0 1-1.744.722H3.791l-2.723-2.723a3.646 3.646 0 0 1 0-5.156" />
    </svg>
  );
}

function AppleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.543 12.9c-.023-2.37 1.936-3.507 2.025-3.562-1.104-1.615-2.82-1.836-3.43-1.861-1.458-.148-2.847.86-3.587.86-.74 0-1.883-.838-3.096-.815-1.593.023-3.06.927-3.879 2.355-1.653 2.868-.423 7.11 1.187 9.436.787 1.14 1.725 2.418 2.955 2.373 1.185-.047 1.633-.767 3.065-.767 1.432 0 1.835.767 3.09.744 1.276-.023 2.083-1.161 2.863-2.303.902-1.322 1.273-2.601 1.295-2.667-.028-.013-2.487-.955-2.51-3.786M15.28 5.9c.654-.793 1.095-1.895.975-2.995-.942.038-2.083.627-2.759 1.42-.606.703-1.137 1.826-.994 2.905 1.05.081 2.123-.534 2.778-1.33" />
    </svg>
  );
}

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#4285F4" d="M23.52 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.86 11.86 0 0 0 0 12c0 1.94.46 3.77 1.29 5.38l3.98-3.09z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

const METHODS: { name: string; icon: React.ReactNode }[] = [
  { name: "Pix", icon: <PixMark className="size-5 text-[#00A3A3]" /> },
  { name: "Cartão", icon: <CreditCard className="size-5 text-[#0D1B39]" /> },
  { name: "Boleto", icon: <Barcode className="size-5 text-[#0D1B39]" /> },
  { name: "Apple Pay", icon: <AppleMark className="size-5 text-[#0D1B39]" /> },
  { name: "Google Pay", icon: <GoogleG className="size-5" /> },
];

type Feature = { icon: LucideIcon; title: string; desc: string; tag?: string };

const FEATURES: Feature[] = [
  { icon: Link2, title: "Link de pagamento", desc: "Cobre por um link, sem precisar de site." },
  { icon: Repeat, title: "Recorrência", desc: "Assinaturas e cobranças automáticas todo mês." },
  { icon: Blocks, title: "Checkout Builder", desc: "Monte seu checkout do seu jeito, sem código." },
  { icon: TrendingUp, title: "Upsell", desc: "Ofereça mais no pós-compra e aumente o ticket." },
  { icon: PlusCircle, title: "Order Bump", desc: "Ofertas extras na hora do pagamento." },
  { icon: Sparkles, title: "Recuperação de carrinho", desc: "A IA traz de volta as vendas abandonadas.", tag: "IA" },
];

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0D1B39]/45">{children}</p>
  );
}

export function PaymentsBento() {
  return (
    <div>
      {/* Meios de pagamento */}
      <GroupLabel>Meios de pagamento</GroupLabel>
      <div className="flex flex-wrap gap-3">
        {METHODS.map((m) => (
          <div
            key={m.name}
            className="inline-flex items-center gap-2.5 rounded-full bg-[#F6F9FC] px-5 py-3 max-sm:px-4 max-sm:py-2.5"
            style={{ boxShadow: "7px 7px 16px #d3dbea, -7px -7px 16px #ffffff" }}
          >
            <span className="flex items-center [&>svg]:size-5 max-sm:[&>svg]:size-[18px]">{m.icon}</span>
            <span className="text-sm font-medium text-[#0D1B39] max-sm:text-[13px]">{m.name}</span>
          </div>
        ))}
      </div>

      {/* Ferramentas */}
      <div className="mt-14 max-sm:mt-10">
        <GroupLabel>Ferramentas pra vender mais</GroupLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="nm-press-light group relative rounded-[24px] bg-[#F6F9FC] p-7 max-sm:rounded-[20px] max-sm:p-5"
            >
              {f.tag && (
                <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-[#2559d8] to-[#5b8bff] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {f.tag}
                </span>
              )}
              <div
                className="inline-flex size-12 items-center justify-center rounded-xl text-[#2559d8] max-sm:size-10"
                style={{ boxShadow: "inset 3px 3px 6px #d3dbea, inset -3px -3px 6px #ffffff" }}
              >
                <f.icon className="size-5 max-sm:size-[18px]" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-[#0D1B39] max-sm:mt-4 max-sm:text-base">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#0D1B39]/60 max-sm:text-[13px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentsBento;
