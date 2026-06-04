import { ProjectsPageContent } from 'components/localized-pages';
import { getLocalizedMetadata } from 'lib/metadata';

export const metadata = getLocalizedMetadata('de', '/projects');

export default function ProjectsPage() {
  return <ProjectsPageContent locale="de" />;
}
