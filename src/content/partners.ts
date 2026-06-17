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
  /**
   * Rich merchant-card data. Populated per concrete partner deal; until then
   * only illustrative examples carry it (Lidl). Partners without a `card`
   * render a "připravujeme" detail page.
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
    name: "Lidl",
    slug: "lidl",
    category: "food",
    // Illustrative numbers (client sample, 13. 6. 2026) — replaced with the
    // real deal once the partner contract is signed.
    card: {
      categoryLabel: "Maloobchod",
      description:
        "Lidl je mezinárodní řetězec prodejen s potravinami a spotřebním zbožím za férové ceny a v té nejlepší kvalitě. Nabízí široký sortiment čerstvých potravin, nápojů, drogerie a produktů pro domácnost.",
      storeCount: "326 prodejen v ČR",
      maxDiscountPct: 5,
      pointsPer1Pct: 20,
      validity: "31. 12. 2025 nebo do odvolání",
      partnerType: "Partnerská nabídka",
      redeem: [
        {
          title: "Na prodejnách Lidl",
          desc: "Slevu uplatníte předložením vygenerovaného kódu při placení na pokladně. Vhodné pro nákupy na všech kamenných prodejnách Lidl.",
        },
        {
          title: "Na e-shopu Lidl",
          desc: "Slevu uplatníte zadáním vygenerovaného slevového kódu v košíku na e-shopu lidl.cz.",
        },
      ],
      conditions: [
        "Sleva je nepřenosná a platí pouze pro držitele bodů v programu Jezdit bezpečně.",
        "Pro uplatnění slevy na prodejnách je nutné předložit vygenerovaný kód při placení.",
        "Pro uplatnění slevy na e-shopu lidl.cz je nutné zadat vygenerovaný slevový kód v košíku.",
        "Pro využití slevy je nutné mít staženou zákaznickou aplikaci Lidl.",
        "Sleva lze kombinovat s jinými slevovými akcemi.",
        "Sleva se nevztahuje na nákup dárkových karet a služeb.",
        "Partner si vyhrazuje právo změnit nebo ukončit nabídku kdykoliv bez předchozího upozornění.",
      ],
    },
  },
  { name: "Albert", slug: "albert", category: "food" },
  { name: "Billa", slug: "billa", category: "food" },
  { name: "Tesco", slug: "tesco", category: "food" },
  { name: "MOL", slug: "mol", category: "fuel" },
  { name: "Shell", slug: "shell", category: "fuel" },
  { name: "OMV", slug: "omv", category: "fuel" },
  { name: "Benzina", slug: "benzina", category: "fuel" },
  { name: "Dr. Max", slug: "dr-max", category: "pharma" },
  { name: "BENU", slug: "benu", category: "pharma" },
  { name: "Pilulka", slug: "pilulka", category: "pharma" },
  { name: "Alza", slug: "alza", category: "retail" },
];

export function partnerBySlug(slug: string): Partner | undefined {
  return PARTNERS.find((p) => p.slug === slug);
}
