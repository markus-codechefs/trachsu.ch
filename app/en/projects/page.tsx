import { ProjectsPageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('en', '/projects');

export default function EnglishProjectsPage() {
  return <ProjectsPageContent locale="en" />;
}
