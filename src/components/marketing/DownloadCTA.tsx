import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { AppQr } from "@/components/marketing/AppQr";
import { APP_LINKS } from "@/lib/links";

export function DownloadCTA({
  variant = "dark",
  qr = true,
}: {
  variant?: "dark" | "light";
  qr?: boolean;
}) {
  const dark = variant === "dark";
  return (
    <section
      className={
        dark
          ? "bg-slate-900 text-white"
          : "bg-brand-50 text-slate-900 border-y border-brand-100"
      }
    >
      <Container className="grid gap-10 py-16 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stáhni si appku a začni{" "}
            <span className="gradient-text">vydělávat na bezpečnosti</span>
          </h2>
          <p className={`mt-4 max-w-xl ${dark ? "text-slate-300" : "text-slate-600"}`}>
            Zdarma, bez reklam, bez sledování. Funguje v Česku a brzy i na Slovensku.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              variant={dark ? "secondary" : "dark"}
              size="lg"
              href={APP_LINKS.ios}
              external
            >
              <Icon name="apple" size={22} /> App Store
            </Button>
            <Button variant="primary" size="lg" href={APP_LINKS.android} external>
              <Icon name="android" size={22} /> Google Play
            </Button>
          </div>
        </div>

        {qr && (
          <div className="flex items-center justify-center md:justify-end">
            <div
              className={`rounded-xl p-4 ${dark ? "bg-white" : "bg-white shadow-soft"}`}
            >
              <AppQr className="h-32 w-32" />
              <p className="mt-2 text-center text-xs font-medium text-slate-700">
                Naskenuj a stáhni
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
