import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Přeskočit na obsah
      </a>
      <Header />
      <main
        id="main"
        className="prose prose-slate mx-auto max-w-3xl px-4 py-16 prose-headings:font-bold prose-h1:text-4xl prose-a:text-brand-700"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
