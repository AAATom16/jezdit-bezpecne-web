import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { StepsGrid } from "@/components/marketing/StepsGrid";
import { DownloadCTA } from "@/components/marketing/DownloadCTA";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Jak to funguje",
  description:
    "Aplikace měří styl jízdy přímo v telefonu. GPS data nikdy neopustí zařízení. Spotřeba baterie pod 3 % za hodinu.",
  alternates: { canonical: "/jak-to-funguje" },
};

export default function JakToFungujePage() {
  return (
    <>
      <section className="bg-hero-radial py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Jak to funguje
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Bezpečnost změřená{" "}
            <span className="gradient-text">v telefonu, ne v cloudu</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 text-pretty">
            Postavili jsme aplikaci tak, aby tvá data zůstala u tebe. Vše, co
            potřebujeme spočítat, se stane na zařízení. Posíláme ven jen tvé
            skóre — žádnou trasu, žádnou polohu.
          </p>
        </Container>
      </section>

      <StepsGrid
        eyebrow="Tři kroky"
        title="Od stažení po slevu"
      />

      <section className="bg-slate-50 py-20">
        <Container className="grid gap-8 md:grid-cols-3">
          <Pillar
            icon="lock"
            title="Tvá GPS nikam nejde"
            body="Stopa zůstává v telefonu. Cloud vidí jen anonymizované skóre a typ jízdy. Žádný fingerprint, žádné reklamní cookies."
          />
          <Pillar
            icon="battery"
            title="Šetří baterii"
            body="Background režim spotřebuje méně než 3 % baterie za hodinu. Senzory čteme jen tehdy, když to dává smysl."
          />
          <Pillar
            icon="spark"
            title="ISA databáze"
            body="Aktuální rychlostní limity z evropské ISA databáze. Víme, kde je 50, kde 90, kde školní zóna."
          />
        </Container>
      </section>

      <DownloadCTA variant="light" qr={false} />
    </>
  );
}

function Pillar({
  icon,
  title,
  body,
}: {
  icon: "lock" | "battery" | "spark";
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-50 text-brand-700">
        <Icon name={icon} size={24} />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600 text-pretty">{body}</p>
    </div>
  );
}
