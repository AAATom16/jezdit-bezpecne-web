export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jezditbezpecne.cz";

export const SITE_NAME = "Jezdit bezpečně se vyplatí";

export const APP_LINKS = {
  ios: process.env.NEXT_PUBLIC_APP_IOS_URL ?? "https://apps.apple.com/cz/app/jezdit-bezpecne/id000000000",
  android:
    process.env.NEXT_PUBLIC_APP_ANDROID_URL ??
    "https://play.google.com/store/apps/details?id=cz.jezditbezpecne",
};

export const CONTACT_EMAIL = "ahoj@jezditbezpecne.cz";
export const PARTNER_EMAIL = "partneri@jezditbezpecne.cz";
