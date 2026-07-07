// Cards 3D empilhados — adaptado do elemento do v0.
// Renderizado de forma estática (sem framer-motion, que não dispara no
// nosso setup TanStack Start). O visual 3D é feito só com CSS/transform.

const CARDS = [
  { tag: "Novo", title: "Recebimento aprovado", time: "Agora", depth: 0 },
  { tag: "Rápido", title: "Liquidez D+0 no Pix", time: "há 2 min", depth: 1 },
  { tag: "Seguro", title: "Transação protegida", time: "hoje", depth: 2 },
];

const cfg = {
  xOffset: -40,
  yOffset: -30,
  depthStep: 100,
  baseRotateZ: -4,
  scaleStep: 0.04,
  blurStep: 2.5,
  opacityStep: 0.24,
};

export function StackedCards3D() {
  return (
    <div className="flex w-full items-center justify-center [perspective:1000px]">
      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(8deg) rotateY(18deg)",
        }}
      >
        {/* palco */}
        <div className="relative h-[300px] w-[300px] sm:w-[360px]">
          {CARDS.slice()
            .reverse()
            .map((c) => {
              const d = c.depth;
              const transform = `translate(-50%, -50%) translate3d(${d * cfg.xOffset}px, ${d * cfg.yOffset}px, ${d * -cfg.depthStep}px) rotateZ(${cfg.baseRotateZ}deg) scale(${1 - d * cfg.scaleStep})`;
              const isTop = d === 0;
              return (
                <div
                  key={c.tag}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform,
                    filter: `blur(${d * cfg.blurStep}px)`,
                    opacity: 1 - d * cfg.opacityStep,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className="w-[340px] rounded-[18px] border p-[22px] sm:w-[380px]"
                    style={{
                      color: "rgba(246,249,252,0.92)",
                      background: "rgba(13,20,40,0.82)",
                      borderColor: "rgba(255,255,255,0.10)",
                      boxShadow: "0 24px 60px rgba(6,10,14,0.45)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="grid size-[26px] place-items-center rounded-full text-[14px]"
                        style={{
                          background: isTop ? "#2F6BFF" : "rgba(255,255,255,0.12)",
                        }}
                      >
                        ✦
                      </div>
                      <div
                        className="text-[22px] font-semibold"
                        style={{ color: isTop ? "#84A9FF" : "rgba(246,249,252,0.45)" }}
                      >
                        {c.tag}
                      </div>
                    </div>

                    <div className="mt-4 text-[26px] font-semibold leading-[1.15]">
                      {c.title}
                    </div>

                    <div className="mt-3 text-[15px]" style={{ color: "rgba(246,249,252,0.45)" }}>
                      {c.time}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
