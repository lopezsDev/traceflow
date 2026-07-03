import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://traceflow.consulting"
  const locales = ["es", "en"]

  const sitemapEntries = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/${locale}#solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}#process`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/${locale}#why-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ])

  // Include base redirect path
  sitemapEntries.unshift({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1.0,
  })

  return sitemapEntries
}
