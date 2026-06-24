export type PartnerCategory = "food" | "fuel" | "pharma" | "retail" | "other";

export type MerchantCard = {
  /** Czech label for the category badge, e.g. "Maloobchod". */
  categoryLabel: string;
  /** One-paragraph description shown in the header. */
  description: string;
  /** e.g. "326 prodejen v ČR" — optional. */
  storeCount?: string;
  /** Maximum discount as % of purchase. */
  maxDiscountPct: number;
  /** Points needed for 1 % discount. */
  pointsPer1Pct: number;
  /** Free-text validity, e.g. "31. 12. 2025 nebo do odvolání". */
  validity: string;
  /** e.g. "Partnerská nabídka". */
  partnerType: string;
  /** "Jak uplatnit slevu" rows. */
  redeem: { title: string; desc: string }[];
  /** "Podmínky uplatnění slevy" bullet list. */
  conditions: string[];
};

export type Partner = {
  name: string;
  slug: string;
  category: PartnerCategory;
  /** Brand accent color (hex) used for the fictional logo mark. */
  accent: string;
  /**
   * Rich merchant-card data. Populated per concrete partner deal; until then
   * only illustrative examples carry it (Pulsmarket). Partners without a `card`
   * render a "připravujeme" detail page.
   *
   * POZN.: Všechny značky níže jsou SMYŠLENÉ (testovací/demo verze webu).
   * Jakákoli podobnost s reálnými firmami je čistě náhodná.
   */
  card?: MerchantCard;
};

export const CATEGORY_LABEL: Record<PartnerCategory, string> = {
  food: "Potraviny",
  fuel: "Pohonné hmoty",
  pharma: "Lékárna",
  retail: "Maloobchod",
  other: "Ostatní",
};

export const PARTNERS: Partner[] = [
  {
    name: "Pulsmarket",
    slug: "pulsmarket",
    category: "food",
    accent: "#16a34a",
    // Smyšlená značka — ilustrativní čísla pro demo. Skutečnou nabídku
    // doplníme, jakmile bude podepsána smlouva s reálným partnerem.
    card: {
      categoryLabel: "Potraviny",
      description:
        "Pulsmarket je smyšlený řetězec prodejen s potravinami a spotřebním zbožím za férové ceny. Nabízí široký sortiment čerstvých potravin, nápojů, drogerie a produktů pro domácnost. (Demo partner pro testovací verzi.)",
      storeCount: "300+ prodejen v ČR",
      maxDiscountPct: 5,
      pointsPer1Pct: 20,
      validity: "31. 12. 2026 nebo do odvolání",
      partnerType: "Partnerská nabídka",
      redeem: [
        {
          title: "Na prodejnách Pulsmarket",
          desc: "Slevu uplatníte předložením vygenerovaného kódu při placení na pokladně. Vhodné pro nákupy na všech kamenných prodejnách Pulsmarket.",
        },
        {
          title: "Na e-shopu Pulsmarket",
          desc: "Slevu uplatníte zadáním vygenerovaného slevového kódu v košíku na e-shopu pulsmarket.cz.",
        },
      ],
      conditions: [
        "Sleva je nepřenosná a platí pouze pro držitele bodů v programu Jezdit bezpečně.",
        "Pro uplatnění slevy na prodejnách je nutné předložit vygenerovaný kód při placení.",
        "Pro uplatnění slevy na e-shopu pulsmarket.cz je nutné zadat vygenerovaný slevový kód v košíku.",
        "Pro využití slevy je nutné mít staženou zákaznickou aplikaci Pulsmarket.",
        "Sleva lze kombinovat s jinými slevovými akcemi.",
        "Sleva se nevztahuje na nákup dárkových karet a služeb.",
        "Partner si vyhrazuje právo změnit nebo ukončit nabídku kdykoliv bez předchozího upozornění.",
      ],
    },
  },
  { name: "Zelňák", slug: "zelnak", category: "food", accent: "#65a30d" },
  { name: "Družná", slug: "druzna", category: "food", accent: "#d97706" },
  { name: "Lokálka", slug: "lokalka", category: "food", accent: "#ca8a04" },
  { name: "PetrolGo", slug: "petrolgo", category: "fuel", accent: "#0284c7" },
  { name: "EnergoVlna", slug: "energovlna", category: "fuel", accent: "#4f46e5" },
  { name: "Tankuj!", slug: "tankuj", category: "fuel", accent: "#ea580c" },
  { name: "Lékovna", slug: "lekovna", category: "pharma", accent: "#e11d48" },
  { name: "Vitalka", slug: "vitalka", category: "pharma", accent: "#0891b2" },
  { name: "Zdravěnka", slug: "zdravenka", category: "pharma", accent: "#db2777" },
  { name: "Elektrio", slug: "elektrio", category: "retail", accent: "#7c3aed" },
  { name: "Hobbík", slug: "hobbik", category: "retail", accent: "#c026d3" },
];

export function partnerBySlug(slug: string): Partner | undefined {
  return PARTNERS.find((p) => p.slug === slug);
}
