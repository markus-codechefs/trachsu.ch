import { AboutPageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('en', '/about');

export default function EnglishAboutPage() {
  return <AboutPageContent locale="en" />;
}
