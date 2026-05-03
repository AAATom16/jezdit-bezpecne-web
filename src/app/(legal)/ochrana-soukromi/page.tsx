import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana soukromí",
  description:
    "Jak zacházíme s tvými daty. Privacy-first přístup: GPS data zůstávají v telefonu.",
  alternates: { canonical: "/ochrana-soukromi" },
};

export default function PrivacyPage() {
  return (
    <article>
      <h1>Ochrana soukromí</h1>
      <p className="text-slate-500">Verze: 1.0 · Účinné od 1. 1. 2026</p>

      <h2>1. Kdo jsme</h2>
      <p>
        Jezdit bezpečně provozuje fyzická / právnická osoba uvedená v sekci
        Kontakt. Sídlo a IČ doplníme do finální verze před spuštěním služby.
      </p>

      <h2>2. Jaká data zpracováváme</h2>
      <ul>
        <li>
          <strong>Senzorová data jízdy</strong> (zrychlení, brzdění, rychlost) —
          zpracování probíhá výhradně lokálně v zařízení. Surová GPS data
          neopouštějí telefon.
        </li>
        <li>
          <strong>Skóre jízdy</strong> — agregované anonymizované skóre se
          přenáší na server pro účely odměn.
        </li>
        <li>
          <strong>Účet</strong> — e-mail / telefon pro autentizaci, jméno
          (volitelné).
        </li>
      </ul>

      <h2>3. Cookies a analytika na webu</h2>
      <p>
        Web používá self-hosted PostHog pro anonymní analytiku, a to pouze po
        udělení souhlasu. Žádný Google Analytics, žádné reklamní cookies, žádný
        fingerprint.
      </p>

      <h2>4. Tvá práva (GDPR)</h2>
      <p>
        Máš právo na přístup, opravu, výmaz, omezení zpracování, přenositelnost
        a námitku. Kontaktuj nás na e-mailu uvedeném v sekci Kontakt.
      </p>

      <h2>5. Změny</h2>
      <p>
        O změnách této politiky tě budeme informovat alespoň 30 dní předem
        e-mailem nebo notifikací v aplikaci.
      </p>
    </article>
  );
}
