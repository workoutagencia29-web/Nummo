import * as React from "react";

interface LoaderProps {
  size?: number;
  text?: string;
  /** id/className repassados pra raiz — usados pelo #app-loader (fade + dismiss). */
  id?: string;
  className?: string;
}

// Loader de marca: anel giratório com brilho azul + letras pulsando.
// styled-jsx do original foi removido (não suportado neste projeto) — os keyframes
// (loaderCircle / loaderLetter) vivem em styles.css. Só transform/opacity nas letras.
export const Component: React.FC<LoaderProps> = ({
  size = 180,
  text = "Carregando",
  id,
  className,
}) => {
  const letters = text.split("");

  return (
    <div
      id={id}
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a3379] via-[#0f172a] to-black ${className ?? ""}`}
    >
      <div
        className="relative flex select-none items-center justify-center font-sans"
        style={{ width: size, height: size }}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            className="animate-loaderLetter inline-block text-white opacity-40"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}

        <div className="animate-loaderCircle absolute inset-0 rounded-full" />
      </div>
    </div>
  );
};

export default Component;
