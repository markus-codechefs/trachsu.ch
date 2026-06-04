import type { Metadata } from 'next';
import { content } from './content';
import { getLocalizedPath, type Locale, type RoutePath } from './i18n';

const pageTitles: Record<Locale, Record<RoutePath, string>> = {
  de: {
    '/': content.de.metadata.title,
    '/about': content.de.about.title,
    '/projects': content.de.projects.title,
    '/impressum': content.de.impressum.title,
    '/dataprotection': content.de.dataprotection.title,
  },
  en: {
    '/': content.en.metadata.title,
    '/about': content.en.about.title,
    '/projects': content.en.projects.title,
    '/impressum': content.en.impressum.title,
    '/dataprotection': content.en.dataprotection.title,
  },
};

export function getLocalizedMetadata(locale: Locale, path: RoutePath): Metadata {
  return {
    title: pageTitles[locale][path],
    description: content[locale].metadata.description,
    alternates: {
      canonical: getLocalizedPath(locale, path),
      languages: {
        de: getLocalizedPath('de', path),
        en: getLocalizedPath('en', path),
      },
    },
  };
}
