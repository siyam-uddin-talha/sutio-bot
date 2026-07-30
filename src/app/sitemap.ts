import { MetadataRoute } from "next";
import { SEO_PAGES } from "@/lib/seo-pages";
import { SITE, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  for (const slug of Object.keys(SEO_PAGES)) {
    routes.push({
      url: absoluteUrl(`/${slug}`),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  return routes;
}
