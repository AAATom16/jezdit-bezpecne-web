import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Proč jsme vytvořili program Jezdit bezpečně se vyplatí a aplikaci Perqo — bezpečnější silnice, odměny pro řidiče a podpora charity.",
  alternates: { canonical: "/o-nas" },
};

// Draft copy — owner to finalize ("naplním sekci o nás"). Structure is ready;
// the text below is a working draft, not final.
export default function AboutPage() {
  return (
    <article>
      <h1>O nás</h1>

      <p>
        Věříme, že bezpečná jízda se má vyplatit — řidičům, jejich okolí i celé společnosti. Proto
        jsme vytvořili program <strong>„Jezdit bezpečně se vyplatí“</strong> a aplikaci{" "}
        <strong>Perqo</strong>, která mění dodržování rychlosti na konkrétní odměny.
      </p>

      <h2>Co děláme</h2>
      <p>
        Aplikace měří, zda při jízdě dodržujete rychlostní limity, a za bezpečně ujeté kilometry vám
        připisuje body. Ty pak proměníte za slevy u našich partnerů — a část odměny můžete věnovat na
        charitu. Žádné sankce, žádné pokuty — jen pozitivní motivace.
      </p>

      <h2>Naše principy</h2>
      <ul>
        <li>
          <strong>Soukromí na prvním místě.</strong> Surová GPS data nikdy zbytečně neopouštějí váš
          telefon. Na server posíláme jen souhrny potřebné pro body a odměny.
        </li>
        <li>
          <strong>Férový model.</strong> Pro řidiče zdarma. Partnerům účtujeme jen malé procento z
          poskytnuté slevy — transparentně.
        </li>
        <li>
          <strong>Bez trestů.</strong> Překročení rychlosti znamená jen nepřičtení bodů, nikdy
          penalizaci.
        </li>
        <li>
          <strong>Dopad.</strong> Bezpečnější silnice a podpora prověřených charitativních
          organizací.
        </li>
      </ul>

      <h2>Kontakt</h2>
      <p>
        Ozvěte se nám na <a href="mailto:ahoj@jezditbezpecne.cz">ahoj@jezditbezpecne.cz</a> nebo přes
        stránku <a href="/kontakt">Kontakt</a>.
      </p>

      <p className="text-slate-500">
        Tato stránka je rozpracovaná — finální text doplní provozovatel.
      </p>
    </article>
  );
}
