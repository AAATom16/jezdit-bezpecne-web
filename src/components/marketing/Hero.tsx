import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { APP_LINKS } from "@/lib/links";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(110,231,183,0.18),transparent_50%)]"
        aria-hidden="true"
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-pill bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-brand-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Nově v ČR
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Jezdit bezpečně{" "}
            <span className="gradient-text">se vyplatí.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-600 text-pretty">
            Aplikace měří styl tvé jízdy přímo v telefonu — bez sledování, bez
            cloudu. Za bezpečnou jízdu sbíráš slevy u partnerů a zároveň podporuješ
            charitu.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="dark" size="lg" href={APP_LINKS.ios} external>
              <Icon name="apple" size={22} /> Stáhnout pro iOS
            </Button>
            <Button variant="primary" size="lg" href={APP_LINKS.android} external>
              <Icon name="android" size={22} /> Stáhnout pro Android
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "< 3 %", l: "spotřeba baterie / hod" },
              { v: "0", l: "GPS dat opouští telefon" },
              { v: "1 %", l: "z odměn na charitu" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-bold text-brand-700">{s.v}</dt>
                <dd className="mt-1 text-sm text-slate-600">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}
