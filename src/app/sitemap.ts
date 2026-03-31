import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // TODO: Add suburb/neighborhood landing pages here as they're built
    // e.g. { url: `${siteUrl}/the-woodlands`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
