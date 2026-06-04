import { DataprotectionPageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('de', '/dataprotection');

export default function DataprotectionPage() {
  return <DataprotectionPageContent locale="de" />;
}
