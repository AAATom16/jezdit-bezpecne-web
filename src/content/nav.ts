export const MAIN_NAV = [
  { href: "/jak-to-funguje", label: "Jak to funguje" },
  { href: "/pro-partnery", label: "Pro partnery" },
  { href: "/charita", label: "Charita" },
  { href: "/hlasujte", label: "Hlasujte" },
  { href: "/blog", label: "Blog" },
] as const;

export const FOOTER_NAV = {
  produkt: [
    { href: "/jak-to-funguje", label: "Jak to funguje" },
    { href: "/o-nas", label: "O nás" },
    { href: "/charita", label: "Charita" },
    { href: "/hlasujte", label: "Hlasujte o partnerech" },
    { href: "/faq", label: "Časté otázky" },
  ],
  partneri: [
    { href: "/pro-partnery", label: "Pro partnery" },
    { href: "/pro-partnery/registrace", label: "Registrace partnera" },
  ],
  pravni: [
    { href: "/ochrana-soukromi", label: "Ochrana soukromí" },
    { href: "/zasady-cookies", label: "Zásady cookies" },
    { href: "/obchodni-podminky", label: "Obchodní podmínky" },
    { href: "/kontakt", label: "Kontakt" },
  ],
} as const;
