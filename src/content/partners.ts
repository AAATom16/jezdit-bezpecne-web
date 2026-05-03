export type Partner = {
  name: string;
  category: "food" | "fuel" | "pharma" | "retail" | "other";
};

export const PARTNERS: Partner[] = [
  { name: "Albert", category: "food" },
  { name: "Billa", category: "food" },
  { name: "Tesco", category: "food" },
  { name: "Lidl", category: "food" },
  { name: "MOL", category: "fuel" },
  { name: "Shell", category: "fuel" },
  { name: "OMV", category: "fuel" },
  { name: "Benzina", category: "fuel" },
  { name: "Dr. Max", category: "pharma" },
  { name: "BENU", category: "pharma" },
  { name: "Pilulka", category: "pharma" },
  { name: "Alza", category: "retail" },
];
