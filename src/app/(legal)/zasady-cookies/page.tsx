import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zásady používání cookies a obdobných technologií",
  description:
    "Jaké cookies a obdobné technologie aplikace Perqo a související web používají, jak je spravovat a odvolat souhlas.",
  alternates: { canonical: "/zasady-cookies" },
};

export default function CookiesPage() {
  return (
    <article>
      <h1>Zásady používání cookies a obdobných technologií</h1>
      <p className="text-slate-500">účinné od 1. 7. 2026 · verze 1.0.2026</p>

      <h2>1. Správce</h2>
      <p>
        Tyto Zásady upravují používání cookies a obdobných technologií v mobilní aplikaci Perqo a na
        souvisejících webových stránkách. Správcem osobních údajů je:
      </p>
      <p>
        Perqo, s.r.o.
        <br />
        IČO: 12345678
        <br />
        Sídlo: Ulice 1234, Praha 4, Česká republika
        <br />
        E-mail: <a href="mailto:ahoj@jezditbezpecne.cz">ahoj@jezditbezpecne.cz</a>
      </p>

      <h2>2. Co jsou cookies a obdobné technologie</h2>
      <p>
        Cookies jsou malé datové soubory ukládané v zařízení uživatele. V mobilní aplikaci mohou
        jejich funkci plnit také SDK nástroje, identifikátory zařízení, reklamní identifikátory,
        lokální úložiště a obdobné technologie (dále společně jen „cookies“).
      </p>

      <h2>3. Jaké cookies používáme</h2>
      <h3>Nezbytné</h3>
      <p>
        Slouží k zajištění funkčnosti aplikace, zabezpečení účtu, správě přihlášení a ukládání
        nastavení. Tyto cookies nelze deaktivovat.
      </p>
      <h3>Analytické</h3>
      <p>
        Umožňují měřit používání aplikace, vyhodnocovat její výkon a zlepšovat uživatelskou
        zkušenost.
      </p>
      <h3>Funkční</h3>
      <p>Umožňují ukládat uživatelská nastavení a preference.</p>
      <h3>Marketingové</h3>
      <p>
        Mohou být použity pro personalizaci reklamních sdělení a měření účinnosti marketingových
        kampaní.
      </p>
      <p>
        Analytické, funkční a marketingové cookies používáme pouze na základě souhlasu uživatele,
        pokud právní předpisy neumožňují jiný postup.
      </p>

      <h2>4. Lokalizační údaje</h2>
      <p>
        Aplikace Perqo může využívat údaje o poloze zařízení, pokud k tomu uživatel udělí příslušné
        oprávnění. Tyto údaje jsou využívány výhradně pro poskytování funkcí aplikace a nejsou
        používány k marketingovým účelům bez samostatného souhlasu uživatele.
      </p>

      <h2>5. Třetí strany</h2>
      <p>
        Při provozu aplikace můžeme využívat služby třetích stran, zejména poskytovatele cloudových,
        analytických, mapových, komunikačních nebo marketingových služeb. Tito poskytovatelé mohou
        používat vlastní cookies nebo obdobné technologie v souladu se svými podmínkami a právními
        předpisy.
      </p>

      <h2>6. Správa souhlasů</h2>
      <p>
        Uživatel může svůj souhlas s používáním volitelných cookies kdykoliv udělit, odmítnout nebo
        odvolat prostřednictvím nastavení aplikace nebo zařízení. Odvolání souhlasu nemá vliv na
        zákonnost zpracování provedeného před jeho odvoláním.
      </p>

      <h2>7. Doba uchování</h2>
      <p>
        Cookies a údaje získané jejich prostřednictvím uchováváme pouze po dobu nezbytnou k naplnění
        účelu, pro který byly shromážděny, nebo po dobu stanovenou právními předpisy.
      </p>

      <h2>8. Ochrana osobních údajů</h2>
      <p>
        Informace získané prostřednictvím cookies mohou představovat osobní údaje. Podrobnosti o
        jejich zpracování jsou uvedeny v dokumentu{" "}
        <a href="/ochrana-soukromi">Zásady ochrany osobních údajů</a>.
      </p>

      <h2>9. Závěrečná ustanovení</h2>
      <p>
        Společnost Perqo, s.r.o. je oprávněna tyto Zásady kdykoliv změnit. Aktuální znění je vždy
        dostupné v aplikaci Perqo a na souvisejících webových stránkách.
      </p>
      <p>Účinnost od: 1. 7. 2026 · Verze: 1.0.2026</p>
    </article>
  );
}
