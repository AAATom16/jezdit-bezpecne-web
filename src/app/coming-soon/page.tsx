import type { Metadata } from "next";
import { CONTACT_EMAIL, PROGRAM_TAGLINE, SITE_NAME } from "@/lib/links";

// Temporary "coming soon" landing shown when COMING_SOON=1 (see middleware.ts).
// The full marketing site stays in the codebase untouched — flip the env var
// back to 0 to restore it. Do not index this placeholder.
export const metadata: Metadata = {
  title: `${SITE_NAME} — připravujeme`,
  description: "Brzy spustíme. Připravujeme pro vás Perqo.",
  robots: { index: false, follow: false },
  alternates: { canonical: undefined },
};

export default function ComingSoonPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(120%_120%_at_50%_-10%,#0B1D3A_0%,#06122A_55%,#040E20_100%)] px-6 py-16 text-white">
      <div className="w-full max-w-xl text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/perqo-logo.png"
          alt={SITE_NAME}
          className="mx-auto h-12 w-auto"
        />

        <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-200">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
          </span>
          Připravujeme
        </p>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Brzy spustíme
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300 text-pretty">
          {PROGRAM_TAGLINE}. Web finalizujeme — vrátíme se s plnou verzí
          už brzy.
        </p>

        <div className="mt-10 flex flex-col items-center gap-2 text-sm text-slate-400">
          <span>Máte dotaz nebo zájem o partnerství?</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-brand-300 underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <p className="mt-12 text-xs text-slate-500">
          © {SITE_NAME}
        </p>
      </div>
    </main>
  );
}
