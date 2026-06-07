import type { MetadataRoute } from "next";
import portfolioData from "@/data/portfolio.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hokportal.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/team",
    "/contact",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate static page entries
  staticPages.forEach((page) => {
    // Arabic versions
    sitemapEntries.push({
      url: `${baseUrl}/ar${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "daily" : "weekly",
      priority: page === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar${page}`,
          en: `${baseUrl}/en${page}`,
        },
      },
    });

    // English versions
    sitemapEntries.push({
      url: `${baseUrl}/en${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "daily" : "weekly",
      priority: page === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar${page}`,
          en: `${baseUrl}/en${page}`,
        },
      },
    });
  });

  // Generate dynamic project page entries
  portfolioData.projects.forEach((project) => {
    // Arabic versions
    sitemapEntries.push({
      url: `${baseUrl}/ar/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar/portfolio/${project.slug}`,
          en: `${baseUrl}/en/portfolio/${project.slug}`,
        },
      },
    });

    // English versions
    sitemapEntries.push({
      url: `${baseUrl}/en/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar/portfolio/${project.slug}`,
          en: `${baseUrl}/en/portfolio/${project.slug}`,
        },
      },
    });
  });

  return sitemapEntries;
}
