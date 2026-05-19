import type { MetadataRoute } from "next";
import { STUDIO } from "./data/navigation";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${STUDIO.url}/sitemap.xml`,
    host: STUDIO.url,
  };
}
