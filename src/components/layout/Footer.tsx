import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "@/components/ui/Icon";
import { FOOTER_NAV } from "@/content/nav";
import { CONTACT_EMAIL } from "@/lib/links";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-gradient text-white">
              <Icon name="shield" size={20} />
            </span>
            Jezdit bezpečně
          </Link>
          <p className="mt-3 text-sm text-slate-600 max-w-xs">
            Aplikace, která mění bezpečnou jízdu na slevy. A část odměn jde na charitu.
          </p>
        </div>

        <FooterCol title="Produkt" items={FOOTER_NAV.produkt} />
        <FooterCol title="Pro partnery" items={FOOTER_NAV.partneri} />
        <FooterCol title="Právní" items={FOOTER_NAV.pravni} />
      </Container>

      <Container className="border-t border-slate-200 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-slate-600">
        <p>© {year} Jezdit bezpečně. Vyrobeno v Česku.</p>
        <p>
          <a className="hover:text-brand-700" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="text-slate-700 hover:text-brand-700 transition-colors"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
