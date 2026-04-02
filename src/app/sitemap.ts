import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { suburbs } from "@/content/suburbs";

export default function sitemap(): MetadataRoute.Sitemap {
  const suburbPages: MetadataRoute.Sitemap = suburbs.map((suburb) => ({
    url: `${siteUrl}/${suburb.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...suburbPages,
  ];
}
