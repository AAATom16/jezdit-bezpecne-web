import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { StepsGrid } from "@/components/marketing/StepsGrid";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";

export const metadata: Metadata = {
  title: "Pro partnery",
  description:
    "Zákazník, který se vrací. Pro 1 % z poskytnuté slevy. Žádné fixní fee, žádný setup. Připoj se k síti partnerských značek.",
  alternates: { canonical: "/pro-partnery" },
};

const PARTNER_STEPS = [
  { num: 1, title: "Registrace", body: "Vyplň formulář — IČ, kontakt, navrženou slevu. Schválíme do 48 hodin." },
  { num: 2, title: "Integrace", body: "Buď přes promo kód, nebo POS API. Pomůžeme s nastavením, nemusíš programovat." },
  { num: 3, title: "Uplatnění", body: "Zákazník dostane slevu, my si vezmeme 1 % z její hodnoty. Měsíční fakturace." },
  { num: 4, title: "Reporty", body: "V partnerském dashboardu vidíš návštěvnost, redempci a ROI v reálném čase." },
];

const PARTNER_FAQ = [
  { q: "Jaké jsou poplatky?", a: "1 % z hodnoty poskytnuté slevy. Žádný setup fee, žádné měsíční minimum, žádný závazek." },
  { q: "Jak rychle jsem online?", a: "Schválení do 48 h. Promo kód nasadíš týž den. POS integrace běžně 2–3 týdny." },
  { q: "Co když nepřijde žádný zákazník?", a: "Neplatíš nic. Účtujeme jen z reálně uplatněných slev." },
  { q: "Jak vypadá fakturace?", a: "Měsíční vyúčtování + faktura k 5. dni následujícího měsíce. Splatnost 14 dní." },
];

const KPIS = [
  { title: "Zviditelnění", body: "Tvá značka v aplikaci, kterou používají bezpeční řidiči s vyšší kupní silou.", icon: "store" as const },
  { title: "Návštěvnost", body: "Měřené pre-visit eventy: kdo si slevu uložil, kdo navštívil, kdo uplatnil.", icon: "spark" as const },
  { title: "Charity halo", body: "Sdílíš s námi misi: bezpečnost a podpora neziskovek. Brand benefit zdarma.", icon: "heart" as const },
  { title: "Dashboard", body: "Reporty redempce, demografie zákazníků, A/B test slev.", icon: "wallet" as const },
];

export default function ProPartneryPage() {
  return (
    <>
      <section className="bg-hero-radial py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Pro partnery
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Zákazník, který se vrací.{" "}
            <span className="gradient-text">Za 1 % z poskytnuté slevy.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 text-pretty">
            Žádný setup fee, žádné měsíční minimum. Platíš jen tehdy, když ti
            přivedeme zákazníka, který slevu skutečně uplatní.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" href="/pro-partnery/registrace">
              Zaregistrovat partnera <Icon name="arrow-right" size={18} />
            </Button>
            <Button variant="outline" size="lg" href="#kpi">
              Co dostaneš
            </Button>
          </div>
        </Container>
      </section>

      <StepsGrid eyebrow="Jak to funguje" title="4 kroky k první uplatněné slevě" steps={PARTNER_STEPS} />

      <section id="kpi" className="bg-slate-50 py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Co dostaneš
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Hodnota, ne závazek
            </h2>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {KPIS.map((k) => (
              <li
                key={k.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name={k.icon} size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{k.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{k.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container className="rounded-xl border border-brand-200 bg-brand-50 p-8 sm:p-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Pricing transparentně</h2>
              <p className="mt-3 max-w-xl text-slate-700">
                1 % z hodnoty poskytnuté slevy. Žádné fixní fee, žádný setup, žádné
                měsíční minimum. Žádné drobné písmo.
              </p>
            </div>
            <Button variant="primary" size="lg" href="/pro-partnery/registrace">
              Začít registraci
            </Button>
          </div>
        </Container>
      </section>

      <FAQAccordion items={PARTNER_FAQ} title="Časté otázky partnerů" />
    </>
  );
}
