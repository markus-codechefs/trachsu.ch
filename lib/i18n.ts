export const defaultLocale = 'de';

export const locales = ['de', 'en'] as const;

export type Locale = (typeof locales)[number];

export type RoutePath =
  | '/'
  | '/about'
  | '/projects'
  | '/impressum'
  | '/dataprotection';

export const routePaths: RoutePath[] = [
  '/',
  '/about',
  '/projects',
  '/impressum',
  '/dataprotection',
];

export const navigationItems: Record<
  Locale,
  Record<
    Extract<RoutePath, '/' | '/about' | '/projects'>,
    { name: string; x: number; y: number; w: string }
  >
> = {
  de: {
    '/': {
      name: 'Start',
      x: 0,
      y: 0,
      w: '64px',
    },
    '/about': {
      name: 'Über mich',
      x: 64,
      y: 35,
      w: '102px',
    },
    '/projects': {
      name: 'Projekte',
      x: 166,
      y: 69,
      w: '90px',
    },
  },
  en: {
    '/': {
      name: 'home',
      x: 0,
      y: 0,
      w: '64px',
    },
    '/about': {
      name: 'about',
      x: 64,
      y: 35,
      w: '65px',
    },
    '/projects': {
      name: 'projects',
      x: 127,
      y: 69,
      w: '82px',
    },
  },
};

export const footerItems: Record<
  Locale,
  Record<Extract<RoutePath, '/impressum' | '/dataprotection'>, string>
> = {
  de: {
    '/impressum': 'Impressum',
    '/dataprotection': 'Datenschutz',
  },
  en: {
    '/impressum': 'Imprint',
    '/dataprotection': 'Data protection',
  },
};

const enPathPattern = /^\/en(?=\/|$)/;

export function getLocaleFromPathname(pathname: string): Locale {
  return enPathPattern.test(pathname) ? 'en' : defaultLocale;
}

export function getBasePath(pathname: string): RoutePath {
  const basePath = pathname.replace(enPathPattern, '') || '/';

  return routePaths.includes(basePath as RoutePath) ? (basePath as RoutePath) : '/';
}

export function getLocalizedPath(locale: Locale, path: RoutePath) {
  const localizedPath = path === '/' ? '' : path;

  return locale === 'en' ? `/en${localizedPath}` : path;
}
