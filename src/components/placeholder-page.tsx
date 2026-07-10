import { Nav, Footer } from "../routes/index";

export function PlaceholderPage({ eyebrow, title, subtitle }: { eyebrow?: string; title?: string; subtitle?: string }) {
  if (!title) {
    return (
      <>
        <Nav solid />
        <main className="flex min-h-[70vh] items-center justify-center px-6 py-24">
          <p className="font-display text-6xl font-medium tracking-tight">pronto!</p>
        </main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Nav solid />
      <main id="conteudo" className="min-h-[70vh]">
        <section className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-14">
          <div className="relative mx-auto max-w-4xl px-6">
            <div className="lg:-ml-24 xl:-ml-40">
              {eyebrow && (
                <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#0D1B39]">/ {eyebrow}</div>
              )}
              <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                {title}
              </h1>
              {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
