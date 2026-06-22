import type { MetadataRoute } from "next";
import { STUDIO } from "./data/navigation";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = STUDIO.url;
  const now = new Date();
  // Seule la page d'accueil est indexable (les pages légales sont en noindex).
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];
}
