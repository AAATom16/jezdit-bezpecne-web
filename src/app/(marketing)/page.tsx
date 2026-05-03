import { Hero } from "@/components/marketing/Hero";
import { CountersStrip } from "@/components/marketing/CountersStrip";
import { StepsGrid } from "@/components/marketing/StepsGrid";
import { PartnersLogoGrid } from "@/components/marketing/PartnersLogoGrid";
import { CharitySection } from "@/components/marketing/CharitySection";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { DownloadCTA } from "@/components/marketing/DownloadCTA";
import { FAQ } from "@/content/faq";
import { SITE_NAME, SITE_URL } from "@/lib/links";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "cs-CZ",
    },
    {
      "@type": "MobileApplication",
      name: SITE_NAME,
      operatingSystem: "iOS, Android",
      applicationCategory: "LifestyleApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CZK" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <CountersStrip />
      <StepsGrid />
      <PartnersLogoGrid />
      <CharitySection />
      <FAQAccordion items={FAQ} />
      <DownloadCTA variant="dark" qr />
    </>
  );
}
