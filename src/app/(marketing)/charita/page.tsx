import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CharitySection } from "@/components/marketing/CharitySection";
import { DownloadCTA } from "@/components/marketing/DownloadCTA";
import { CHARITIES } from "@/content/charities";
import { formatCzk } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Charita",
  description:
    "Část odměn z bezpečné jízdy putuje na charitu. Podívej se, kterým organizacím pomáháme a kolik už společně vybralo.",
  alternates: { canonical: "/charita" },
};

export default function CharitaPage() {
  const total = CHARITIES.reduce((s, c) => s + c.total, 0);
  return (
    <>
      <section className="bg-hero-radial py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Charita
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Bezpečná jízda{" "}
            <span className="gradient-text">a smysluplná pomoc</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 text-pretty">
            U každé odměny v aplikaci máš možnost část poslat na charitu.
            Společně už jsme vybrali{" "}
            <strong className="text-brand-700">{formatCzk(total)}</strong>.
          </p>
        </Container>
      </section>
      <CharitySection />
      <DownloadCTA variant="dark" qr={false} />
    </>
  );
}
