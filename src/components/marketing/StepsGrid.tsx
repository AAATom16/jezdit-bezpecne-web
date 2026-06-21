import { Container } from "@/components/layout/Container";
import { STEPS } from "@/content/how-it-works";

export function StepsGrid({
  eyebrow = "Jak to funguje",
  title = "Tři kroky k bezpečnější jízdě",
  steps = STEPS,
}: {
  eyebrow?: string;
  title?: string;
  steps?: ReadonlyArray<{ num: number; title: string; body: string }>;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.num}
              className="group relative rounded-xl border border-slate-200 bg-white p-7 shadow-soft transition-[transform,box-shadow,border-color] duration-DEFAULT ease-out motion-reduce:transition-none hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-gradient text-lg font-bold text-white">
                {s.num}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
