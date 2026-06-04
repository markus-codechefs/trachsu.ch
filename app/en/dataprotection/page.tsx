import { DataprotectionPageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('en', '/dataprotection');

export default function EnglishDataprotectionPage() {
  return <DataprotectionPageContent locale="en" />;
}
