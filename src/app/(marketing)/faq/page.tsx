import type { Metadata } from "next";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Časté otázky",
  description:
    "Odpovědi na nejčastější otázky o aplikaci Jezdit bezpečně — soukromí, baterie, slevy.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return <FAQAccordion items={FAQ} title="Časté otázky" />;
}
