"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const MIN_LEN = 10;

const ERRORS: Record<string, string> = {
  "token-invalid": "Odkaz pro obnovu hesla je neplatný nebo už vypršel. Požádej o nový v aplikaci.",
  upstream: "Server je dočasně nedostupný. Zkus to prosím za chvíli.",
  network: "Nepodařilo se spojit se serverem. Zkontroluj připojení a zkus to znovu.",
  "invalid-input": "Heslo musí mít alespoň 10 znaků.",
};

export function ResetPasswordForm() {
  const token = useSearchParams().get("token") ?? "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const card = "w-full max-w-md rounded-2xl bg-white p-8 shadow-soft";

  if (!token) {
    return (
      <div className={card}>
        <h1 className="text-2xl font-bold text-foreground">Neplatný odkaz</h1>
        <p className="mt-3 text-slate-600">
          Tento odkaz neobsahuje platný token. Otevři prosím odkaz přímo z e-mailu, nebo si
          v aplikaci nech poslat nový.
        </p>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className={card}>
        <h1 className="text-2xl font-bold text-foreground">Heslo změněno ✅</h1>
        <p className="mt-3 text-slate-600">
          Tvé heslo bylo úspěšně nastaveno. Přihlas se novým heslem v aplikaci.
        </p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password.length < MIN_LEN) {
      setError(ERRORS["invalid-input"]);
      return;
    }
    if (password !== confirm) {
      setError("Hesla se neshodují.");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/auth/password-reset", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, newPassword: password }),
      });
      const data: { ok?: boolean; error?: string } = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("done");
        return;
      }
      setError(ERRORS[data.error ?? ""] ?? ERRORS.upstream);
      setStatus("idle");
    } catch {
      setError(ERRORS.network);
      setStatus("idle");
    }
  }

  const input =
    "w-full rounded-xl border border-slate-300 px-4 py-3 text-foreground outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30";

  return (
    <form onSubmit={onSubmit} className={card}>
      <h1 className="text-2xl font-bold text-foreground">Nastav nové heslo</h1>
      <p className="mt-2 text-slate-600">Zvol si heslo o délce alespoň {MIN_LEN} znaků.</p>

      <label className="mt-6 block text-sm font-medium text-slate-700" htmlFor="pw">
        Nové heslo
      </label>
      <input
        id="pw"
        type="password"
        autoComplete="new-password"
        className={`${input} mt-1`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength={MIN_LEN}
        required
      />

      <label className="mt-4 block text-sm font-medium text-slate-700" htmlFor="pw2">
        Heslo znovu
      </label>
      <input
        id="pw2"
        type="password"
        autoComplete="new-password"
        className={`${input} mt-1`}
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        minLength={MIN_LEN}
        required
      />

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Ukládám…" : "Nastavit heslo"}
      </Button>
    </form>
  );
}
