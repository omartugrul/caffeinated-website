import type { MetadataRoute } from "next";

const siteUrl = "https://caffeinated.com"; // TODO: Replace with actual domain once purchased

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design-system"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
