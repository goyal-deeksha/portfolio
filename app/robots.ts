// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-portfolio-domain.com"; // Replace with your live domain

  return [
    {
      userAgent: "*",
      allow: "/",
    },
  ] as unknown as MetadataRoute.Sitemap;
}
