import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PartnerSignupForm } from "@/components/forms/PartnerSignupForm";

export const metadata: Metadata = {
  title: "Registrace partnera",
  description:
    "Vyplň formulář a staň se partnerem aplikace Jezdit bezpečně. 4 jednoduché kroky, schválení do 48 h.",
  alternates: { canonical: "/pro-partnery/registrace" },
  robots: { index: false, follow: true },
};

export default function PartnerSignupPage() {
  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          Pro partnery
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Registrace partnera
        </h1>
        <p className="mt-3 text-slate-600">
          Čtyři krátké kroky. Rozpracovaný formulář si v prohlížeči ukládáme,
          takže se k němu můžeš vrátit.
        </p>
        <div className="mt-10">
          <PartnerSignupForm />
        </div>
      </Container>
    </section>
  );
}
