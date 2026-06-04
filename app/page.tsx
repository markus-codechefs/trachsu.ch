import { HomePageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('de', '/');

export default function HomePage() {
  return <HomePageContent locale="de" />;
}
