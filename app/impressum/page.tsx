import { ImpressumPageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('de', '/impressum');

export default function ImpressumPage() {
  return <ImpressumPageContent locale="de" />;
}
