import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            404
          </p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight">
            Tady to není
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Stránka, kterou hledáš, neexistuje nebo byla přesunuta.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary" href="/">
              Domů
            </Button>
            <Link
              href="/faq"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-brand-700 hover:underline"
            >
              Časté otázky →
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
