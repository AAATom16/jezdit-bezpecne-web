import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PARTNERS } from "@/content/partners";

export function PartnersLogoGrid({ voteCTA = true }: { voteCTA?: boolean }) {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Naši partneři
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Slevy tam, kde nakupuješ každý den
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PARTNERS.map((p) => (
            <li
              key={p.name}
              className="grid h-20 place-items-center rounded-lg border border-slate-200 bg-white px-4 text-center text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft"
            >
              {p.name}
            </li>
          ))}
        </ul>

        {voteCTA && (
          <p className="mt-10 text-center text-slate-600">
            Chybí ti tu obchod, kam chodíš nejvíc?{" "}
            <Link
              href="/hlasujte"
              className="font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Dej hlas svému favoritovi →
            </Link>
          </p>
        )}
      </Container>
    </section>
  );
}
