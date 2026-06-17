"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ERRORS: Record<string, string> = {
  "token-invalid": "Ověřovací odkaz je neplatný nebo už vypršel. Nech si v aplikaci poslat nový.",
  upstream: "Server je dočasně nedostupný. Zkus to prosím za chvíli.",
  network: "Nepodařilo se spojit se serverem. Zkontroluj připojení a zkus to znovu.",
  "invalid-input": "Odkaz neobsahuje platný token.",
};

export function VerifyEmail() {
  const token = useSearchParams().get("token") ?? "";
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");
  const [error, setError] = useState<string | null>(null);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return; // StrictMode double-invoke guard
    ran.current = true;

    if (token.length < 10) {
      setError(ERRORS["invalid-input"]);
      setStatus("error");
      return;
    }
    (async () => {
      try {
        const res = await fetch("/api/auth/verify-email", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data: { ok?: boolean; error?: string } = await res.json().catch(() => ({}));
        if (res.ok && data.ok) {
          setStatus("done");
          return;
        }
        setError(ERRORS[data.error ?? ""] ?? ERRORS.upstream);
        setStatus("error");
      } catch {
        setError(ERRORS.network);
        setStatus("error");
      }
    })();
  }, [token]);

  const card = "w-full max-w-md rounded-2xl bg-white p-8 shadow-soft text-center";

  if (status === "loading") {
    return (
      <div className={card}>
        <h1 className="text-2xl font-bold text-foreground">Ověřuji e-mail…</h1>
        <p className="mt-3 text-slate-600">Okamžik prosím.</p>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className={card}>
        <h1 className="text-2xl font-bold text-foreground">E-mail ověřen ✅</h1>
        <p className="mt-3 text-slate-600">
          Hotovo! Vrať se do aplikace — účet je ověřený a můžeš se přihlásit.
        </p>
      </div>
    );
  }

  return (
    <div className={card}>
      <h1 className="text-2xl font-bold text-foreground">Ověření se nezdařilo</h1>
      <p className="mt-3 text-slate-600">{error}</p>
    </div>
  );
}
