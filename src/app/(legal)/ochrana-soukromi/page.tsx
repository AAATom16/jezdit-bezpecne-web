import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů",
  description:
    "Jak aplikace Perqo zpracovává osobní údaje — rozsah, účel, právní základ, doba uchování a práva subjektů údajů (GDPR).",
  alternates: { canonical: "/ochrana-soukromi" },
};

export default function PrivacyPage() {
  return (
    <article>
      <h1>Zásady ochrany osobních údajů</h1>
      <p className="text-slate-500">pro mobilní aplikaci „Perqo“ · účinné od 1. 7. 2026</p>

      <h2>1. Úvod</h2>
      <p>
        Společnost Perqo, s.r.o., IČO: 12345678, se sídlem Ulice 1234, Praha 4, Česká republika
        (dále jen „Správce“), zpracovává osobní údaje uživatelů mobilní aplikace „Perqo“ (dále jen
        „Aplikace“) v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR),
        zákonem č. 110/2019 Sb., o zpracování osobních údajů, a dalšími příslušnými právními
        předpisy.
      </p>
      <p>
        Tyto Zásady ochrany osobních údajů informují uživatele o rozsahu, účelu a způsobu
        zpracování jejich osobních údajů.
      </p>

      <h2>2. Správce osobních údajů</h2>
      <p>
        Perqo, s.r.o.
        <br />
        IČO: 12345678
        <br />
        Sídlo: Ulice 1234, Praha 4, Česká republika
        <br />
        E-mail: <a href="mailto:ahoj@jezditbezpecne.cz">ahoj@jezditbezpecne.cz</a>
      </p>

      <h2>3. Rozsah zpracovávaných osobních údajů</h2>
      <p>Správce může zpracovávat následující osobní údaje:</p>
      <h3>Identifikační údaje</h3>
      <ul>
        <li>jméno a příjmení,</li>
        <li>e-mailová adresa,</li>
        <li>telefonní číslo,</li>
        <li>identifikátor uživatelského účtu.</li>
      </ul>
      <h3>Technické údaje</h3>
      <ul>
        <li>IP adresa,</li>
        <li>identifikátor zařízení,</li>
        <li>operační systém zařízení,</li>
        <li>verze aplikace,</li>
        <li>diagnostické a provozní údaje.</li>
      </ul>
      <h3>Lokalizační údaje</h3>
      <ul>
        <li>GPS poloha zařízení během používání Aplikace,</li>
        <li>údaje o pohybu vozidla nezbytné pro vyhodnocení jízdy.</li>
      </ul>
      <h3>Údaje o jízdě</h3>
      <ul>
        <li>počet ujetých kilometrů,</li>
        <li>datum a čas jízdy,</li>
        <li>informace o dodržování rychlostních limitů,</li>
        <li>počet získaných bodů,</li>
        <li>historie bodových transakcí a čerpání odměn.</li>
      </ul>
      <h3>Komunikační údaje</h3>
      <ul>
        <li>obsah komunikace se zákaznickou podporou,</li>
        <li>záznamy o řešení reklamací a podnětů.</li>
      </ul>

      <h2>4. Účely zpracování osobních údajů</h2>
      <h3>Plnění smlouvy</h3>
      <p>Osobní údaje jsou zpracovávány za účelem:</p>
      <ul>
        <li>registrace a správy uživatelského účtu,</li>
        <li>poskytování funkcí Aplikace,</li>
        <li>vyhodnocování jízd,</li>
        <li>přidělování bodů za bezpečnou jízdu,</li>
        <li>evidence a čerpání odměn,</li>
        <li>zákaznické podpory.</li>
      </ul>
      <h3>Oprávněný zájem Správce</h3>
      <p>Osobní údaje mohou být zpracovávány za účelem:</p>
      <ul>
        <li>prevence podvodného jednání,</li>
        <li>ochrany práv Správce,</li>
        <li>zajištění bezpečnosti systému,</li>
        <li>statistického vyhodnocování programu,</li>
        <li>zlepšování služeb.</li>
      </ul>
      <h3>Plnění právních povinností</h3>
      <p>
        Správce může zpracovávat údaje za účelem splnění povinností vyplývajících z právních
        předpisů.
      </p>
      <h3>Souhlas uživatele</h3>
      <p>Na základě souhlasu mohou být údaje zpracovávány zejména pro:</p>
      <ul>
        <li>zasílání obchodních sdělení,</li>
        <li>marketingové nabídky,</li>
        <li>personalizaci obsahu,</li>
        <li>průzkumy spokojenosti.</li>
      </ul>
      <p>Souhlas lze kdykoli odvolat.</p>

      <h2>5. Právní základ zpracování</h2>
      <p>Správce zpracovává osobní údaje na základě:</p>
      <ul>
        <li>čl. 6 odst. 1 písm. b) GDPR – plnění smlouvy,</li>
        <li>čl. 6 odst. 1 písm. c) GDPR – splnění právní povinnosti,</li>
        <li>čl. 6 odst. 1 písm. f) GDPR – oprávněný zájem,</li>
        <li>čl. 6 odst. 1 písm. a) GDPR – souhlas subjektu údajů.</li>
      </ul>

      <h2>6. Lokalizační údaje a vyhodnocování rychlosti</h2>
      <p>
        Aplikace využívá lokalizační údaje a mapové podklady za účelem vyhodnocování dodržování
        rychlostních limitů a přidělování bodů za bezpečnou jízdu.
      </p>
      <p>
        GPS údaje jsou zpracovávány pouze v rozsahu nezbytném pro fungování Aplikace a vyhodnocení
        jízd.
      </p>
      <p>
        Správce může po vyhodnocení jízdy ukládat pouze agregované nebo statistické údaje potřebné
        pro vedení bodového účtu uživatele.
      </p>

      <h2>7. Rychlostní limity a mapové podklady</h2>
      <p>
        Informace o rychlostních limitech jsou získávány z mapových a navigačních podkladů třetích
        stran. Přestože Správce usiluje o jejich maximální aktuálnost a správnost, nemůže garantovat
        jejich úplnou přesnost.
      </p>
      <p>Správce neodpovídá za:</p>
      <ul>
        <li>nepřesné nebo neaktuální mapové podklady,</li>
        <li>chybně uvedené rychlostní limity,</li>
        <li>změny dopravního značení,</li>
        <li>dočasná dopravní omezení,</li>
        <li>rozdíly mezi skutečným stavem komunikace a údaji v mapových podkladech.</li>
      </ul>
      <p>Uživatel je vždy povinen řídit se aktuálním dopravním značením a právními předpisy.</p>

      <h2>8. Příjemci osobních údajů</h2>
      <p>Osobní údaje mohou být zpřístupněny:</p>
      <ul>
        <li>poskytovatelům cloudových služeb,</li>
        <li>poskytovatelům IT infrastruktury,</li>
        <li>poskytovatelům analytických nástrojů,</li>
        <li>poskytovatelům zákaznické podpory,</li>
        <li>obchodním partnerům zajišťujícím odměny v programu.</li>
      </ul>
      <p>
        Partnerům programu jsou poskytovány pouze údaje nezbytné pro realizaci konkrétní odměny nebo
        slevy. Partneři neobdrží detailní historii jízd uživatele.
      </p>

      <h2>9. Předávání údajů do třetích zemí</h2>
      <p>
        Pokud jsou využívány služby poskytovatelů se sídlem mimo Evropský hospodářský prostor,
        dochází k předávání osobních údajů pouze za podmínek stanovených GDPR, zejména na základě
        rozhodnutí o odpovídající ochraně nebo standardních smluvních doložek.
      </p>

      <h2>10. Doba uchování osobních údajů</h2>
      <p>Osobní údaje jsou uchovávány:</p>
      <ul>
        <li>po dobu existence uživatelského účtu,</li>
        <li>po dobu trvání programu,</li>
        <li>po dobu nezbytnou k ochraně právních nároků Správce,</li>
        <li>po dobu stanovenou právními předpisy.</li>
      </ul>
      <p>
        Po zrušení účtu budou údaje vymazány nebo anonymizovány, pokud právní předpis nestanoví
        jinak.
      </p>

      <h2>11. Zabezpečení osobních údajů</h2>
      <p>
        Správce přijal odpovídající technická a organizační opatření k zabezpečení osobních údajů
        proti:
      </p>
      <ul>
        <li>neoprávněnému přístupu,</li>
        <li>ztrátě,</li>
        <li>zneužití,</li>
        <li>poškození,</li>
        <li>neoprávněnému zveřejnění.</li>
      </ul>
      <p>Přístup k údajům mají pouze oprávněné osoby.</p>

      <h2>12. Práva subjektů údajů</h2>
      <p>Uživatel má právo:</p>
      <ul>
        <li>na přístup ke svým osobním údajům,</li>
        <li>na opravu nepřesných údajů,</li>
        <li>na výmaz osobních údajů,</li>
        <li>na omezení zpracování,</li>
        <li>na přenositelnost údajů,</li>
        <li>vznést námitku proti zpracování,</li>
        <li>odvolat souhlas se zpracováním,</li>
        <li>podat stížnost u dozorového úřadu.</li>
      </ul>

      <h2>13. Automatizované rozhodování</h2>
      <p>
        Při vyhodnocování jízd může docházet k automatizovanému zpracování údajů za účelem
        přidělování bodů. Toto zpracování neslouží k přijímání rozhodnutí, která by měla právní
        účinky nebo obdobně významně zasahovala do práv uživatele ve smyslu čl. 22 GDPR.
      </p>

      <h2>14. Cookies a obdobné technologie</h2>
      <p>Aplikace může využívat cookies, SDK a obdobné technologie za účelem:</p>
      <ul>
        <li>zajištění funkčnosti,</li>
        <li>analytiky,</li>
        <li>zabezpečení,</li>
        <li>personalizace obsahu,</li>
        <li>marketingu na základě souhlasu uživatele.</li>
      </ul>
      <p>
        Podrobnosti najdete v dokumentu{" "}
        <a href="/zasady-cookies">Zásady používání cookies a obdobných technologií</a>.
      </p>

      <h2>15. Kontaktní údaje</h2>
      <p>
        V případě dotazů týkajících se ochrany osobních údajů může uživatel kontaktovat Správce:
      </p>
      <p>
        Perqo, s.r.o., Ulice 1234, Praha 4, Česká republika
        <br />
        E-mail: <a href="mailto:ahoj@jezditbezpecne.cz">ahoj@jezditbezpecne.cz</a>
      </p>
      <p>Uživatel má rovněž právo obrátit se na Úřad pro ochranu osobních údajů.</p>

      <h2>16. Závěrečná ustanovení</h2>
      <p>
        Správce je oprávněn tyto Zásady ochrany osobních údajů průběžně měnit nebo doplňovat.
        Aktuální znění je vždy zveřejněno v Aplikaci a na webových stránkách Správce.
      </p>
      <p>Tyto Zásady ochrany osobních údajů nabývají účinnosti dne 1. 7. 2026.</p>
    </article>
  );
}
