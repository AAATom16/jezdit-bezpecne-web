"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { z } from "zod";

const STEPS = [
  { id: 1, label: "O firmě" },
  { id: 2, label: "Kontakt" },
  { id: 3, label: "Nabídka" },
  { id: 4, label: "Souhrn" },
];

const StepCompany = z.object({
  ic: z.string().regex(/^\d{8}$/, "IČ musí mít 8 číslic"),
  name: z.string().min(2, "Vyplň název firmy"),
  legalForm: z.enum(["s.r.o.", "a.s.", "OSVČ", "jiné"]),
  address: z.string().min(5, "Vyplň adresu"),
});
const StepContact = z.object({
  firstName: z.string().min(2, "Vyplň jméno"),
  lastName: z.string().min(2, "Vyplň příjmení"),
  email: z.string().email("Neplatný e-mail"),
  phone: z.string().regex(/^\+?[\d\s]{9,}$/, "Neplatný telefon"),
});
const StepOffer = z.object({
  category: z.enum(["food", "fuel", "pharma", "retail", "other"]),
  proposedDiscountPct: z.coerce.number().min(1, "Min 1 %").max(20, "Max 20 %"),
  minPurchase: z.coerce.number().min(0),
});
const StepConsent = z.object({
  gdprAccepted: z.literal(true, {
    errorMap: () => ({ message: "Potřebujeme tvůj souhlas se zpracováním údajů" }),
  }),
  tosAccepted: z.literal(true, {
    errorMap: () => ({ message: "Potřebujeme souhlas s podmínkami" }),
  }),
});

type FormState = {
  step1: Partial<z.infer<typeof StepCompany>>;
  step2: Partial<z.infer<typeof StepContact>>;
  step3: Partial<z.infer<typeof StepOffer>>;
  step4: { gdprAccepted?: boolean; tosAccepted?: boolean };
};

const STORAGE_KEY = "partner-signup-draft";
const STORAGE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

const EMPTY: FormState = {
  step1: { legalForm: "s.r.o." },
  step2: {},
  step3: { category: "food", proposedDiscountPct: 5, minPurchase: 0 },
  step4: {},
};

export function PartnerSignupForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed?.savedAt && Date.now() - parsed.savedAt < STORAGE_TTL_MS) {
        setData({ ...EMPTY, ...parsed.data });
        setStep(parsed.step ?? 1);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (done) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ data, step, savedAt: Date.now() })
      );
    } catch {
      // ignore
    }
  }, [data, step, done]);

  function validateStep(): boolean {
    setErrors({});
    let res:
      | z.SafeParseReturnType<unknown, unknown>
      | null = null;
    if (step === 1) res = StepCompany.safeParse(data.step1);
    if (step === 2) res = StepContact.safeParse(data.step2);
    if (step === 3) res = StepOffer.safeParse(data.step3);
    if (step === 4) res = StepConsent.safeParse(data.step4);
    if (!res) return true;
    if (!res.success) {
      const map: Record<string, string> = {};
      res.error.issues.forEach((i) => {
        const k = String(i.path[0] ?? "");
        if (k && !map[k]) map[k] = i.message;
      });
      setErrors(map);
      return false;
    }
    return true;
  }

  function next() {
    if (!validateStep()) return;
    setStep((s) => Math.min(4, s + 1));
  }
  function back() {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  }

  async function submit() {
    if (!validateStep()) return;
    setSubmitting(true);
    try {
      await fetch("/api/partners/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
      });
      localStorage.removeItem(STORAGE_KEY);
      setDone(true);
    } catch {
      setErrors({ form: "Něco se pokazilo, zkus to prosím znovu." });
    } finally {
      setSubmitting(false);
    }
  }

  if (done) return <ThankYou />;

  return (
    <div>
      <Stepper current={step} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step < 4) next();
          else submit();
        }}
        className="mt-10 rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
        noValidate
      >
        {step === 1 && (
          <fieldset className="space-y-5">
            <legend className="text-xl font-semibold">O firmě</legend>
            <Field
              label="IČ"
              error={errors.ic}
              input={
                <input
                  inputMode="numeric"
                  maxLength={8}
                  className={inputCls(!!errors.ic)}
                  value={data.step1.ic ?? ""}
                  onChange={(e) =>
                    setData((d) => ({ ...d, step1: { ...d.step1, ic: e.target.value.replace(/\D/g, "") } }))
                  }
                  aria-invalid={!!errors.ic}
                  aria-describedby={errors.ic ? "err-ic" : undefined}
                />
              }
            />
            <Field
              label="Název firmy"
              error={errors.name}
              input={
                <input
                  className={inputCls(!!errors.name)}
                  value={data.step1.name ?? ""}
                  onChange={(e) =>
                    setData((d) => ({ ...d, step1: { ...d.step1, name: e.target.value } }))
                  }
                  aria-invalid={!!errors.name}
                />
              }
            />
            <Field
              label="Právní forma"
              error={errors.legalForm}
              input={
                <select
                  className={inputCls(!!errors.legalForm)}
                  value={data.step1.legalForm ?? "s.r.o."}
                  onChange={(e) =>
                    setData((d) => ({
                      ...d,
                      step1: { ...d.step1, legalForm: e.target.value as never },
                    }))
                  }
                >
                  <option>s.r.o.</option>
                  <option>a.s.</option>
                  <option>OSVČ</option>
                  <option>jiné</option>
                </select>
              }
            />
            <Field
              label="Adresa sídla"
              error={errors.address}
              input={
                <input
                  className={inputCls(!!errors.address)}
                  value={data.step1.address ?? ""}
                  onChange={(e) =>
                    setData((d) => ({ ...d, step1: { ...d.step1, address: e.target.value } }))
                  }
                />
              }
            />
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="space-y-5">
            <legend className="text-xl font-semibold">Kontaktní osoba</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Jméno"
                error={errors.firstName}
                input={
                  <input
                    className={inputCls(!!errors.firstName)}
                    value={data.step2.firstName ?? ""}
                    onChange={(e) =>
                      setData((d) => ({ ...d, step2: { ...d.step2, firstName: e.target.value } }))
                    }
                  />
                }
              />
              <Field
                label="Příjmení"
                error={errors.lastName}
                input={
                  <input
                    className={inputCls(!!errors.lastName)}
                    value={data.step2.lastName ?? ""}
                    onChange={(e) =>
                      setData((d) => ({ ...d, step2: { ...d.step2, lastName: e.target.value } }))
                    }
                  />
                }
              />
            </div>
            <Field
              label="E-mail"
              error={errors.email}
              input={
                <input
                  type="email"
                  className={inputCls(!!errors.email)}
                  value={data.step2.email ?? ""}
                  onChange={(e) =>
                    setData((d) => ({ ...d, step2: { ...d.step2, email: e.target.value } }))
                  }
                />
              }
            />
            <Field
              label="Telefon"
              error={errors.phone}
              input={
                <input
                  type="tel"
                  className={inputCls(!!errors.phone)}
                  value={data.step2.phone ?? ""}
                  onChange={(e) =>
                    setData((d) => ({ ...d, step2: { ...d.step2, phone: e.target.value } }))
                  }
                />
              }
            />
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="space-y-5">
            <legend className="text-xl font-semibold">Tvá nabídka</legend>
            <Field
              label="Kategorie"
              error={errors.category}
              input={
                <select
                  className={inputCls(!!errors.category)}
                  value={data.step3.category ?? "food"}
                  onChange={(e) =>
                    setData((d) => ({
                      ...d,
                      step3: { ...d.step3, category: e.target.value as never },
                    }))
                  }
                >
                  <option value="food">Potraviny</option>
                  <option value="fuel">Pohonné hmoty</option>
                  <option value="pharma">Lékárna</option>
                  <option value="retail">Retail / móda</option>
                  <option value="other">Jiné</option>
                </select>
              }
            />
            <Field
              label="Navržená sleva (%)"
              error={errors.proposedDiscountPct}
              input={
                <input
                  type="number"
                  min={1}
                  max={20}
                  className={inputCls(!!errors.proposedDiscountPct)}
                  value={data.step3.proposedDiscountPct ?? 5}
                  onChange={(e) =>
                    setData((d) => ({
                      ...d,
                      step3: { ...d.step3, proposedDiscountPct: Number(e.target.value) },
                    }))
                  }
                />
              }
            />
            <Field
              label="Min. nákup (Kč, 0 = bez limitu)"
              error={errors.minPurchase}
              input={
                <input
                  type="number"
                  min={0}
                  className={inputCls(!!errors.minPurchase)}
                  value={data.step3.minPurchase ?? 0}
                  onChange={(e) =>
                    setData((d) => ({
                      ...d,
                      step3: { ...d.step3, minPurchase: Number(e.target.value) },
                    }))
                  }
                />
              }
            />
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className="space-y-5">
            <legend className="text-xl font-semibold">Souhrn a souhlasy</legend>
            <Summary data={data} />
            <Checkbox
              checked={!!data.step4.gdprAccepted}
              error={errors.gdprAccepted}
              onChange={(v) =>
                setData((d) => ({ ...d, step4: { ...d.step4, gdprAccepted: v } }))
              }
              label="Souhlasím se zpracováním osobních údajů dle GDPR."
            />
            <Checkbox
              checked={!!data.step4.tosAccepted}
              error={errors.tosAccepted}
              onChange={(v) =>
                setData((d) => ({ ...d, step4: { ...d.step4, tosAccepted: v } }))
              }
              label="Souhlasím s obchodními podmínkami."
            />
            {errors.form && (
              <p role="alert" className="text-sm text-danger-700">
                {errors.form}
              </p>
            )}
          </fieldset>
        )}

        <div className="mt-8 flex justify-between gap-3">
          {step > 1 ? (
            <Button type="button" variant="ghost" onClick={back}>
              ← Zpět
            </Button>
          ) : (
            <span />
          )}
          {step < 4 ? (
            <Button type="submit" variant="primary">
              Pokračovat <Icon name="arrow-right" size={18} />
            </Button>
          ) : (
            <Button type="submit" variant="primary" disabled={submitting}>
              {submitting ? "Odesílám…" : "Odeslat registraci"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function Stepper({ current }: { current: number }) {
  return (
    <ol className="flex items-center gap-2" aria-label="Postup registrace">
      {STEPS.map((s, i) => {
        const active = current === s.id;
        const done = current > s.id;
        return (
          <li key={s.id} className="flex flex-1 items-center gap-2">
            <span
              aria-current={active ? "step" : undefined}
              className={cn(
                "grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold ring-2 transition-colors",
                done && "bg-brand-600 text-white ring-brand-600",
                active && "bg-white text-brand-700 ring-brand-500",
                !active && !done && "bg-slate-100 text-slate-500 ring-slate-200"
              )}
            >
              {done ? <Icon name="check" size={16} /> : s.id}
            </span>
            <span
              className={cn(
                "text-sm font-medium",
                active ? "text-slate-900" : "text-slate-500"
              )}
            >
              {s.label}
            </span>
            {i < STEPS.length - 1 && (
              <span className="hidden h-px flex-1 bg-slate-200 sm:block" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-800">
        {label}
      </span>
      {input}
      {error && (
        <p id={`err-${label}`} role="alert" className="mt-1.5 text-sm text-danger-700">
          {error}
        </p>
      )}
    </label>
  );
}

function inputCls(invalid: boolean) {
  return cn(
    "w-full rounded-md border px-3.5 py-2.5 text-base text-slate-900 placeholder:text-slate-400 transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500",
    invalid ? "border-danger-500 bg-danger-100/30" : "border-slate-300 bg-white"
  );
}

function Checkbox({
  checked,
  onChange,
  label,
  error,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  error?: string;
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-5 w-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
        />
        <span className="text-sm text-slate-700">{label}</span>
      </label>
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-danger-700">
          {error}
        </p>
      )}
    </div>
  );
}

function Summary({ data }: { data: FormState }) {
  const rows: Array<[string, string | number | undefined]> = [
    ["IČ", data.step1.ic],
    ["Název", data.step1.name],
    ["Právní forma", data.step1.legalForm],
    ["Adresa", data.step1.address],
    ["Kontakt", `${data.step2.firstName ?? ""} ${data.step2.lastName ?? ""}`.trim()],
    ["E-mail", data.step2.email],
    ["Telefon", data.step2.phone],
    ["Kategorie", data.step3.category],
    ["Sleva", data.step3.proposedDiscountPct ? `${data.step3.proposedDiscountPct} %` : undefined],
    ["Min. nákup", data.step3.minPurchase != null ? `${data.step3.minPurchase} Kč` : undefined],
  ];
  return (
    <dl className="grid grid-cols-1 gap-2 rounded-md bg-slate-50 p-4 text-sm sm:grid-cols-2">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt className="text-slate-500">{k}</dt>
          <dd className="font-medium text-slate-900">{v || "—"}</dd>
        </div>
      ))}
    </dl>
  );
}

function ThankYou() {
  return (
    <div className="rounded-xl border border-brand-200 bg-brand-50 p-10 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white">
        <Icon name="check" size={28} />
      </div>
      <h2 className="mt-5 text-2xl font-bold">Děkujeme!</h2>
      <p className="mt-3 text-slate-700 max-w-md mx-auto">
        Registraci jsme přijali. Zkontroluj si e-mail — do 48 hodin tě budeme
        kontaktovat ohledně schválení.
      </p>
    </div>
  );
}
