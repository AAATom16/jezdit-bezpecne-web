export type Charity = {
  name: string;
  description: string;
  total: number;
  color: "brand" | "charity" | "info" | "warn";
  url: string;
};

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
    name: "Konto BARIÉRY",
    description: "Pomáháme lidem se zdravotním postižením vrátit se za volant.",
    total: 84000,
    color: "charity",
    url: "https://www.kontobariery.cz",
  },
  {
    name: "Linka bezpečí",
    description: "Pomoc dětem a rodinám v krizi, 24/7 telefonická linka zdarma.",
    total: 52000,
    color: "info",
    url: "https://www.linkabezpeci.cz",
  },
  {
    name: "Pomocné tlapky",
    description: "Výcvik asistenčních psů pro lidi s postižením.",
    total: 24000,
    color: "warn",
    url: "https://www.pomocnetlapky.cz",
  },
];
