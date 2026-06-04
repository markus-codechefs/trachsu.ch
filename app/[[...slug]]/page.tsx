import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  AboutPageContent,
  DataprotectionPageContent,
  HomePageContent,
  ImpressumPageContent,
  ProjectsPageContent,
} from 'components/localized-pages';
import {
  defaultLocale,
  locales,
  routePaths,
  type Locale,
  type RoutePath,
} from 'lib/i18n';
import { getLocalizedMetadata } from 'lib/metadata';

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

type RouteResolution = {
  locale: Locale;
  path: RoutePath;
};

const pageComponents = {
  '/': HomePageContent,
  '/about': AboutPageContent,
  '/projects': ProjectsPageContent,
  '/impressum': ImpressumPageContent,
  '/dataprotection': DataprotectionPageContent,
} satisfies Record<RoutePath, React.ComponentType<{ locale: Locale }>>;

function getRouteSegments(locale: Locale, path: RoutePath) {
  const pathSegments = path === '/' ? [] : path.slice(1).split('/');

  return locale === 'en' ? ['en', ...pathSegments] : pathSegments;
}

function resolveRoute(slug: string[] = []): RouteResolution | null {
  const [firstSegment, ...restSegments] = slug;

  if (firstSegment === 'de') {
    return null;
  }

  const locale = firstSegment === 'en' ? 'en' : defaultLocale;
  const pathSegments = locale === 'en' ? restSegments : slug;
  const path = pathSegments.length === 0 ? '/' : `/${pathSegments.join('/')}`;

  if (!routePaths.includes(path as RoutePath)) {
    return null;
  }

  return {
    locale,
    path: path as RoutePath,
  };
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    routePaths.map((path) => ({
      slug: getRouteSegments(locale, path),
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = resolveRoute(slug);

  if (!route) {
    return {};
  }

  return getLocalizedMetadata(route.locale, route.path);
}

export default async function LocalizedPage({ params }: PageProps) {
  const { slug } = await params;
  const route = resolveRoute(slug);

  if (!route) {
    notFound();
  }

  const Page = pageComponents[route.path];

  return <Page locale={route.locale} />;
}
