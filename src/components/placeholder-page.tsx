import { Nav, Footer } from "../routes/index";

export function PlaceholderPage() {
  return (
    <>
      <Nav />
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-24">
        <p className="font-display text-6xl font-medium tracking-tight">pronto!</p>
      </main>
      <Footer />
    </>
  );
}
