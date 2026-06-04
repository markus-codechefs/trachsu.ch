import { HomePageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('en', '/');

export default function EnglishHomePage() {
  return <HomePageContent locale="en" />;
}
