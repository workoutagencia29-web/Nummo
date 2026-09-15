import { CreditCard, Barcode, Link2, Repeat, Blocks, TrendingUp, PlusCircle, Sparkles, type LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Seção "Venda onde e como quiser": grade BENTO assimétrica.
   Card grande de destaque (Checkout Builder, com mini-preview), card de IA
   em evidência, tile com os meios de pagamento e tiles menores das demais
   ferramentas. Cards brancos com borda fina + elevação; hover levanta +
   brilho de marca. Sem imagens externas - marcas em SVG inline (CSP-safe). */
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
  { name: "Pix", icon: <PixMark className="size-[18px] text-[#00A3A3]" /> },
  { name: "Cartão", icon: <CreditCard className="size-[18px] text-[#0D1B39]" /> },
  { name: "Boleto", icon: <Barcode className="size-[18px] text-[#0D1B39]" /> },
  { name: "Apple Pay", icon: <AppleMark className="size-[18px] text-[#0D1B39]" /> },
  { name: "Google Pay", icon: <GoogleG className="size-[18px]" /> },
];

/* Tile de ícone com gradiente da marca (ícone branco). */
function IconTile({ icon: Icon, className = "size-11" }: { icon: LucideIcon; className?: string }) {
  return (
    <div className={`inline-flex ${className} items-center justify-center rounded-xl bg-gradient-to-br from-[#2559d8] to-[#5b8bff] text-white shadow-[0_8px_18px_-6px_rgba(37,89,216,0.5)] transition-transform duration-300 group-hover:scale-105`}>
      <Icon className="size-5" />
    </div>
  );
}

/* Card pequeno (1×1) da grade bento. */
function ToolTile({ icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#0D1B39]/[0.07] bg-white p-5 shadow-[0_1px_3px_rgba(13,27,57,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2559d8]/25 hover:shadow-[0_18px_40px_-18px_rgba(37,89,216,0.3)]">
      <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-[#2559d8] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-[0.08]" />
      <div className="relative">
        <IconTile icon={icon} className="size-10" />
        <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-[#0D1B39]">{title}</h3>
        <p className="mt-1 text-[13px] leading-relaxed text-[#0D1B39]/60">{desc}</p>
      </div>
    </div>
  );
}

export function PaymentsBento() {
  return (
    <div className="grid grid-cols-1 gap-4 md:auto-rows-[170px] md:grid-cols-3">
      {/* Destaque: Checkout Builder (2×2) com mini-preview */}
      <div className="group relative overflow-hidden rounded-2xl border border-[#0D1B39]/[0.07] bg-white p-6 shadow-[0_1px_3px_rgba(13,27,57,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2559d8]/20 hover:shadow-[0_24px_50px_-20px_rgba(37,89,216,0.3)] md:col-span-2 md:row-span-2">
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#2559d8] opacity-[0.05] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.1]" />
        <div className="relative flex h-full flex-col gap-6 md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col">
            <IconTile icon={Blocks} className="size-12" />
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-[#0D1B39]">Checkout Builder</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#0D1B39]/60">
              Crie o checkout do seu jeito, sem código. Arraste, solte, publique.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Sem código", "Templates prontos", "Domínio próprio"].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[#0D1B39]/10 bg-[#F6F9FC] px-2.5 py-1 text-[11px] font-medium text-[#0D1B39]/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          {/* Mini-preview de um checkout (decorativo) */}
          <div
            aria-hidden
            className="hidden w-48 shrink-0 self-end overflow-hidden rounded-t-2xl border border-[#0D1B39]/10 bg-white shadow-[0_-10px_30px_-14px_rgba(13,27,57,0.15)] md:block"
          >
            {/* topo do checkout */}
            <div className="flex items-center justify-between border-b border-[#0D1B39]/[0.06] bg-[#F6F9FC] px-3.5 py-2.5">
              <span className="text-[11px] font-semibold text-[#0D1B39]">Checkout</span>
              <span className="flex items-center gap-1 text-[9px] font-medium text-[#00A3A3]">
                <span className="size-1.5 rounded-full bg-[#00A3A3]" />
                Seguro
              </span>
            </div>
            <div className="p-3.5">
              {/* seletor de método */}
              <div className="flex gap-1.5">
                <span className="rounded-md bg-[#2559d8] px-2 py-1 text-[9px] font-semibold text-white">Pix</span>
                <span className="rounded-md border border-[#0D1B39]/10 px-2 py-1 text-[9px] font-medium text-[#0D1B39]/45">Cartão</span>
              </div>
              {/* campos */}
              <div className="mt-3 space-y-2">
                <div className="rounded-md border border-[#0D1B39]/10 px-2 py-1.5">
                  <div className="h-1.5 w-12 rounded-full bg-[#0D1B39]/15" />
                </div>
                <div className="rounded-md border border-[#0D1B39]/10 px-2 py-1.5">
                  <div className="h-1.5 w-20 rounded-full bg-[#0D1B39]/15" />
                </div>
              </div>
              {/* total */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] text-[#0D1B39]/50">Total</span>
                <span className="text-[12px] font-bold text-[#0D1B39]">R$ 197,00</span>
              </div>
              {/* botão */}
              <div className="mt-2.5 rounded-lg bg-gradient-to-r from-[#2559d8] to-[#5b8bff] py-2 text-center text-[10px] font-semibold text-white shadow-[0_6px_14px_-5px_rgba(37,89,216,0.6)]">
                Pagar agora
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link de pagamento */}
      <ToolTile icon={Link2} title="Link de pagamento" desc="Cobre por um link, sem precisar de site." />

      {/* Recorrência */}
      <ToolTile icon={Repeat} title="Recorrência" desc="Assinaturas e cobranças automáticas." />

      {/* Recuperação de carrinho (IA) - 2 colunas, mesmo estilo das outras */}
      <div className="group relative overflow-hidden rounded-2xl border border-[#0D1B39]/[0.07] bg-white p-5 shadow-[0_1px_3px_rgba(13,27,57,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2559d8]/25 hover:shadow-[0_18px_40px_-18px_rgba(37,89,216,0.3)] md:col-span-2">
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-[#2559d8] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-[0.08]" />
        <div className="relative">
          <IconTile icon={Sparkles} />
          <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-[#0D1B39]">Recuperação de carrinho</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#0D1B39]/60">A IA traz de volta as vendas abandonadas automaticamente.</p>
        </div>
      </div>

      {/* Upsell */}
      <ToolTile icon={TrendingUp} title="Upsell" desc="Aumente o ticket no pós-compra." />

      {/* Meios de pagamento - 2 colunas, chips dentro */}
      <div className="flex flex-col justify-center rounded-2xl border border-[#0D1B39]/[0.07] bg-white p-6 shadow-[0_1px_3px_rgba(13,27,57,0.05)] max-sm:p-5 md:col-span-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0D1B39]/45">Meios de pagamento</p>
        <p className="mt-1.5 text-sm text-[#0D1B39]/55">Do Pix ao Apple Pay, num só checkout.</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {METHODS.map((m) => (
            <span
              key={m.name}
              className="inline-flex items-center gap-2 rounded-full border border-[#0D1B39]/[0.08] bg-white px-4 py-2.5 shadow-[0_1px_2px_rgba(13,27,57,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2559d8]/30 hover:shadow-[0_8px_18px_-8px_rgba(37,89,216,0.3)]"
            >
              <span className="flex items-center">{m.icon}</span>
              <span className="text-[13px] font-medium text-[#0D1B39]">{m.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Order Bump */}
      <ToolTile icon={PlusCircle} title="Order Bump" desc="Ofertas extras na hora do pagamento." />
    </div>
  );
}

export default PaymentsBento;
