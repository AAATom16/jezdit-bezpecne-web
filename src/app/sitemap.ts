import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/links";

const ROUTES = [
  "",
  "/jak-to-funguje",
  "/pro-partnery",
  "/pro-partnery/registrace",
  "/charita",
  "/hlasujte",
  "/blog",
  "/faq",
  "/ochrana-soukromi",
  "/obchodni-podminky",
  "/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
