import { Container } from "@/components/layout/Container";
import { CHARITIES, type Charity } from "@/content/charities";
import { formatCzk } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const COLOR_MAP: Record<Charity["color"], string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand-200",
  charity: "bg-charity-100 text-charity-700 ring-pink-200",
  info: "bg-info-100 text-info-700 ring-blue-200",
  warn: "bg-warn-100 text-warn-700 ring-amber-200",
};

export function CharitySection() {
  const total = CHARITIES.reduce((s, c) => s + c.total, 0);
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-xl bg-brand-gradient p-8 text-white shadow-lift sm:p-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
                Smysluplná jízda
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Ušetříš a ještě pomůžeš
              </h2>
              <p className="mt-3 max-w-xl opacity-95">
                Část z každé odměny můžeš věnovat charitě. Společně už máme:
              </p>
            </div>
            <div className="text-3xl font-extrabold sm:text-5xl">
              {formatCzk(total)}
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CHARITIES.map((c) => (
            <li
              key={c.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-[transform,box-shadow] duration-DEFAULT ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-soft"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-lg ring-1 ${COLOR_MAP[c.color]}`}
              >
                <Icon name="heart" size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{c.description}</p>
              <p className="mt-4 text-sm">
                <span className="text-slate-500">Vybráno: </span>
                <span className="font-semibold text-brand-700">
                  {formatCzk(c.total)}
                </span>
              </p>
              <a
                className="mt-3 text-sm font-semibold text-brand-700 hover:underline"
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Více o organizaci →
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
