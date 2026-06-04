import { MetadataRoute } from 'next'
import { getLocalizedPath, locales, routePaths } from 'lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trachsu.ch'
  const lastModified = new Date()
  const staticPages = locales.flatMap((locale) =>
    routePaths.map((path) => ({
      url: `${baseUrl}${getLocalizedPath(locale, path)}`,
      lastModified,
      changeFrequency: path === '/' ? 'weekly' as const : 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
    }))
  )

  return staticPages
} 