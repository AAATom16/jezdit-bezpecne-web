import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/marketing/BrandMark";
import {
  CATEGORY_LABEL,
  PARTNERS,
  partnerBySlug,
  type MerchantCard,
  type Partner,
} from "@/content/partners";

export function generateStaticParams() {
  return PARTNERS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = partnerBySlug(params.slug);
  if (!p) return { title: "Partner" };
  return {
    title: `${p.name} — sleva za bezpečnou jízdu`,
    description: p.card?.description?.slice(0, 155) ??
      `Uplatni body z aplikace Perqo u partnera ${p.name}.`,
    alternates: { canonical: `/partner/${p.slug}` },
  };
}

export default function PartnerPage({ params }: { params: { slug: string } }) {
  const partner = partnerBySlug(params.slug);
  if (!partner) notFound();

  return (
    <div className="bg-slate-50 py-10 sm:py-14">
      <Container className="max-w-4xl">
        <Link
          href="/#partneri"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-700"
        >
          <Chevron /> Zpět na partnery
        </Link>

        {partner.card ? (
          <FullCard partner={partner} card={partner.card} />
        ) : (
          <ComingSoon partner={partner} />
        )}
      </Container>
    </div>
  );
}

function FullCard({ partner, card }: { partner: Partner; card: MerchantCard }) {
  return (
    <>
      {/* Header */}
      <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <div className="flex items-center gap-4">
              <BrandMark
                name={partner.name}
                category={partner.category}
                accent={partner.accent}
                size={64}
                className="shrink-0"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{partner.name}</h1>
                <span className="mt-1 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {card.categoryLabel}
                </span>
              </div>
            </div>
            <p className="mt-4 text-slate-600">{card.description}</p>
            {card.storeCount && (
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <StoreIcon /> {card.storeCount}
              </p>
            )}
          </div>
          <div
            className="hidden h-44 rounded-xl bg-gradient-to-br from-brand-100 to-slate-200 md:block"
            aria-hidden
          />
        </div>
      </section>

      {/* Stat tiles */}
      <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Maximální sleva" value={`${card.maxDiscountPct} %`} sub="z hodnoty nákupu" />
        <Stat label="1 % slevy za" value={`${card.pointsPer1Pct} bodů`} sub="z nasbíraných bodů" />
        <Stat label="Platnost slevy" value={card.validity} small />
        <Stat label="Typ partnera" value={card.partnerType} small />
      </section>

      {/* How to redeem */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <h2 className="text-xl font-bold">Jak uplatnit slevu</h2>
        <div className="mt-4 divide-y divide-slate-100">
          {card.redeem.map((r) => (
            <div key={r.title} className="flex items-start gap-4 py-4">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                <CheckIcon />
              </span>
              <div>
                <p className="font-semibold">{r.title}</p>
                <p className="mt-1 text-sm text-slate-600">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conditions */}
      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <h2 className="text-xl font-bold">Podmínky uplatnění slevy</h2>
        <ul className="mt-4 space-y-3">
          {card.conditions.map((c) => (
            <li key={c} className="flex items-start gap-3 text-sm text-slate-600">
              <span className="mt-0.5 text-brand-600">
                <CheckIcon />
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-5 flex flex-col items-start gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-lg font-bold">Nemáte dost bodů?</p>
          <p className="mt-1 text-sm text-slate-600">
            Získejte body za bezpečnou jízdu a využijte slevy u partnerů.
          </p>
        </div>
        <Button href="/jak-to-funguje" variant="primary" size="lg">
          Jak získat body
        </Button>
      </section>
    </>
  );
}

function ComingSoon({ partner }: { partner: Partner }) {
  return (
    <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
      <div className="flex items-center gap-4">
        <BrandMark
          name={partner.name}
          category={partner.category}
          accent={partner.accent}
          size={64}
          className="shrink-0"
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{partner.name}</h1>
          <span className="mt-1 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {CATEGORY_LABEL[partner.category]}
          </span>
        </div>
      </div>
      <p className="mt-5 text-slate-600">
        Konkrétní podmínky slevy pro tohoto partnera připravujeme. Jakmile bude nabídka aktivní,
        najdete ji tady i přímo v aplikaci.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/#partneri" variant="outline" size="md">
          Zpět na partnery
        </Button>
        <Button href="/hlasujte" variant="primary" size="md">
          Hlasovat o partnerech
        </Button>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
  small,
}: {
  label: string;
  value: string;
  sub?: string;
  small?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-1 font-bold text-slate-900 ${small ? "text-base" : "text-2xl"}`}>{value}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden>
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M3 9l1-5h16l1 5M4 9v10h16V9M4 9h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
