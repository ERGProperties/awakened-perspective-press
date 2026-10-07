import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://awakenedperspectivepress.com/sitemap.xml",
    host: "https://awakenedperspectivepress.com",
  };
}