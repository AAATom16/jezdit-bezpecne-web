import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";

export function FAQAccordion({
  items,
  title = "Časté otázky",
}: {
  items: ReadonlyArray<{ q: string; a: string }>;
  title?: string;
}) {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {items.map((it) => (
            <li key={it.q}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-slate-900 marker:hidden">
                  <span>{it.q}</span>
                  <Icon
                    name="chevron-down"
                    size={20}
                    className="text-slate-400 transition-transform duration-DEFAULT group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-slate-600 text-pretty">{it.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
