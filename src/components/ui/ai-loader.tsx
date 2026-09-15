import * as React from "react";

interface LoaderProps {
  size?: number;
  text?: string;
  /** id/className repassados pra raiz - usados pelo #app-loader (fade + dismiss). */
  id?: string;
  className?: string;
}

// Loader de marca: marca da Nummo (anel azul) pulsando no centro + um arco
// girando ao redor, sobre fundo escuro com brilho azul, e o texto com as letras
// pulsando. Keyframes em styles.css. Só transform/opacity (GPU); CSP-safe.
export const Component: React.FC<LoaderProps> = ({
  size = 76,
  text = "Carregando",
  id,
  className,
}) => {
  const letters = text.split("");

  return (
    <div
      id={id}
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 overflow-hidden bg-[#060b16] ${className ?? ""}`}
    >
      {/* Brilho de marca ao fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[480px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2559d8]/20 blur-[130px]"
      />

      {/* Spinner: arco girando + marca da Nummo pulsando no centro */}
      <div className="relative grid place-items-center" style={{ width: size, height: size }}>
        <div className="loader-ring absolute inset-0 rounded-full" />
        <svg
          className="loader-pulse relative"
          width={size * 0.5}
          height={size * 0.5}
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <circle cx="20" cy="20" r="14.8" fill="none" stroke="#5b8bff" strokeWidth="8.5" />
        </svg>
      </div>

      {/* Texto com letras pulsando */}
      <div className="relative flex select-none font-sans text-sm font-medium tracking-[0.22em] text-white">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="animate-loaderLetter inline-block opacity-40"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {letter === " " ? " " : letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Component;
