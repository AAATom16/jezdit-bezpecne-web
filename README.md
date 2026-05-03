# Jezdit bezpečně — web

Veřejný web pro [jezditbezpecne.cz](https://jezditbezpecne.cz) — landing pro spotřebitele a portál pro partnery.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** s brand tokens
- **React Hook Form + Zod** (partner signup)
- **Inter** přes `next/font`
- Inline SVG icon set
- Czech-first (`lang="cs"`), prepared for i18n

## Vývoj

```bash
nvm use 22
npm install
npm run dev          # http://localhost:3000
npm run build
npm start
npm run lint
```

Vyžaduje **Node 20+**.

## Struktura

```
src/
├── app/
│   ├── (marketing)/           landing, jak-to-funguje, pro-partnery,
│   │                          charita, hlasujte, blog, faq
│   ├── (legal)/               privacy, ToS, kontakt
│   ├── api/partners/signup/   partner signup proxy
│   ├── layout.tsx             root + Inter + metadata
│   ├── sitemap.ts / robots.ts / opengraph-image.tsx
│   ├── not-found.tsx / error.tsx
│   └── globals.css            CSS vars z brand tokens
├── components/
│   ├── layout/                Container, Header, Footer
│   ├── ui/                    Button, Icon
│   ├── marketing/             Hero, CountersStrip, StepsGrid,
│   │                          PartnersLogoGrid, CharitySection,
│   │                          FAQAccordion, DownloadCTA, PhoneMockup
│   └── forms/                 PartnerSignupForm (4-step)
├── content/                   nav, partners, charities, faq, counters
└── lib/                       utils, links
```

## Environment

```
NEXT_PUBLIC_SITE_URL          https://jezditbezpecne.cz
NEXT_PUBLIC_APP_IOS_URL       App Store deep link
NEXT_PUBLIC_APP_ANDROID_URL   Play Store deep link
PARTNERS_BACKEND_URL          (optional) upstream pro partner signup
```

Všechny env vars mají sensible defaults v `src/lib/links.ts`.

## Deploy (Railway)

Railway detekuje Next.js přes Nixpacks automaticky. Build = `npm run build`, start = `npm start` (server poslouchá na `$PORT`).

## TODO (post-MVP)

- Vitest + Playwright + axe-core CI
- Self-hosted PostHog + consent banner
- ARES proxy pro IČ lookup
- next-intl + sk/en překlady
- MDX blog
- Lighthouse CI v GitHub Actions
