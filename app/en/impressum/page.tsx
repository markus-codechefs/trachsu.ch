import { ImpressumPageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('en', '/impressum');

export default function EnglishImpressumPage() {
  return <ImpressumPageContent locale="en" />;
}
