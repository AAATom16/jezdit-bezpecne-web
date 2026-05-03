export const FAQ = [
  {
    q: "Jak aplikace pozná, že jezdím bezpečně?",
    a: "Telefon na pozadí měří akceleraci, brzdění, průjezd zatáčkou a zda dodržujete rychlostní limity podle ISA databáze. Vše se počítá lokálně — surová GPS data nikdy neopouštějí váš telefon.",
  },
  {
    q: "Co s mou baterií?",
    a: "Aplikace je optimalizovaná pro nízkou spotřebu. Při běžné jízdě spotřebuje méně než 3 % baterie za hodinu. Žádný permanentní GPS tracking, žádné cloudové uploady na pozadí.",
  },
  {
    q: "Jaké slevy mohu získat?",
    a: "U běžných partnerů 3–10 % na nákupy (potraviny, PHM, lékárna). Konkrétní výše záleží na vašem skóre a aktuální nabídce partnera. Část odměny můžete převést na charitu.",
  },
  {
    q: "Stojí aplikace něco?",
    a: "Pro řidiče zcela zdarma. Partnerům účtujeme 1 % z hodnoty poskytnuté slevy — žádné fixní poplatky, žádný setup fee.",
  },
] as const;
