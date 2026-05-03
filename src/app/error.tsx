"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="cs">
      <body className="font-sans antialiased">
        <main className="mx-auto max-w-xl px-4 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-danger-700">
            500
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
            Něco se rozbilo
          </h1>
          <p className="mt-4 text-slate-600">
            Mrzí nás to. Zkus to prosím znovu — pokud se chyba opakuje, ozvi se nám.
          </p>
          <div className="mt-8">
            <Button variant="primary" onClick={reset}>
              Zkusit znovu
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
