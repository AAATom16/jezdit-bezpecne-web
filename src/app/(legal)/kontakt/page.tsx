import type { Metadata } from "next";
import { CONTACT_EMAIL, PARTNER_EMAIL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Spojení na tým Perqo — pro uživatele, partnery i média.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <article>
      <h1>Kontakt</h1>
      <p>
        Píšeme i odpovídáme česky. Standardně reagujeme do dvou pracovních dnů.
      </p>

      <h2>Obecné dotazy</h2>
      <p>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <h2>Pro partnery</h2>
      <p>
        <a href={`mailto:${PARTNER_EMAIL}`}>{PARTNER_EMAIL}</a>
      </p>

      <h2>Sídlo a fakturační údaje</h2>
      <p>
        Doplníme po finalizaci právní struktury společnosti.
      </p>
    </article>
  );
}
