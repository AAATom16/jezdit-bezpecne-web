export type Charity = {
  name: string;
  description: string;
  total: number;
  color: "brand" | "charity" | "info" | "warn";
  url: string;
};

// Smyšlené organizace (testovací verze webu) — jakákoli podobnost s reálnými
// neziskovkami je čistě náhodná. Částky jsou ilustrativní.
export const CHARITIES: Charity[] = [
  {
    name: "Bezpečně na silnicích",
    description:
      "Prevence dopravních nehod, kampaně pro mladé řidiče, podpora obětí.",
    total: 120000,
    color: "brand",
    url: "https://example.org/bezpecne",
  },
  {
    name: "Bez Bariér",
    description: "Pomáháme lidem se zdravotním postižením vrátit se za volant.",
    total: 84000,
    color: "charity",
    url: "https://example.org/bez-barier",
  },
  {
    name: "Linka naděje",
    description: "Pomoc dětem a rodinám v krizi, 24/7 telefonická linka zdarma.",
    total: 52000,
    color: "info",
    url: "https://example.org/linka-nadeje",
  },
  {
    name: "Tlapky pomoci",
    description: "Výcvik asistenčních psů pro lidi s postižením.",
    total: 24000,
    color: "warn",
    url: "https://example.org/tlapky-pomoci",
  },
];
