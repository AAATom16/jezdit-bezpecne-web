import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obchodní podmínky",
  description: "Podmínky používání aplikace a webu Jezdit bezpečně.",
  alternates: { canonical: "/obchodni-podminky" },
};

export default function TosPage() {
  return (
    <article>
      <h1>Obchodní podmínky</h1>
      <p className="text-slate-500">Verze: 1.0 · Účinné od 1. 1. 2026</p>

      <h2>1. Úvodní ustanovení</h2>
      <p>
        Tyto podmínky upravují vztah mezi provozovatelem aplikace Jezdit
        bezpečně a uživatelem (řidičem) i partnerem (obchodníkem).
      </p>

      <h2>2. Pro uživatele</h2>
      <p>
        Aplikace je pro řidiče zdarma. Skóre jízdy je výsledkem našeho
        algoritmu — nejde o oficiální posouzení dle pravidel silničního provozu.
      </p>

      <h2>3. Pro partnery</h2>
      <p>
        Účtujeme 1 % z hodnoty poskytnuté slevy. Žádný setup fee, žádné
        měsíční minimum. Faktura k 5. dni následujícího měsíce, splatnost 14
        dnů.
      </p>

      <h2>4. Odpovědnost</h2>
      <p>
        Aplikace nenahrazuje pozornost řidiče. Provozovatel nenese odpovědnost
        za škody způsobené nesprávným ovládáním vozidla.
      </p>

      <h2>5. Závěrečná ustanovení</h2>
      <p>
        Tyto podmínky se řídí právem České republiky. Spory se primárně řeší
        smírnou cestou.
      </p>
    </article>
  );
}
