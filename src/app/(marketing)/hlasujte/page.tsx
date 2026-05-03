import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { APP_LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Hlasujte o partnerech",
  description:
    "Kde chceš slevy? Navrhni nám obchod, který by ti dával smysl, a hlasuj o jeho zařazení.",
  alternates: { canonical: "/hlasujte" },
};

const PROPOSALS = [
  { name: "Rohlík.cz", votes: 412, category: "Potraviny" },
  { name: "Globus", votes: 287, category: "Potraviny" },
  { name: "Datart", votes: 154, category: "Elektronika" },
  { name: "Hornbach", votes: 138, category: "Hobby" },
  { name: "Kaufland", votes: 121, category: "Potraviny" },
];

export default function HlasujtePage() {
  return (
    <>
      <section className="bg-hero-radial py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Hlasujte
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Kde chceš slevy?
          </h1>
          <p className="mt-5 text-lg text-slate-600 text-pretty">
            Pomoz nám rozhodnout, který obchod má přijít jako další. Navrhni
            svého favorita nebo dej hlas existujícím návrhům.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {PROPOSALS.map((p) => (
              <li
                key={p.name}
                className="flex items-center gap-4 p-5"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-700 font-bold">
                  {p.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900">{p.name}</p>
                  <p className="text-sm text-slate-500">{p.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-brand-700">{p.votes}</p>
                  <p className="text-xs text-slate-500">hlasů</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-6 text-center">
            <Icon name="phone" size={24} className="mx-auto text-brand-700" />
            <p className="mt-3 font-semibold text-slate-900">
              Hlasování probíhá v aplikaci
            </p>
            <p className="mt-1 text-sm text-slate-700">
              Stáhni si aplikaci a hlasuj jedním klepnutím — nebo navrhni vlastní obchod.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button variant="dark" href={APP_LINKS.ios} external>
                <Icon name="apple" size={18} /> iOS
              </Button>
              <Button variant="primary" href={APP_LINKS.android} external>
                <Icon name="android" size={18} /> Android
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
