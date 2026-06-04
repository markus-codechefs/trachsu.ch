import { AboutPageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('de', '/about');

export default function AboutPage() {
  return <AboutPageContent locale="de" />;
}
