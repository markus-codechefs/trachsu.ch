import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import me from '../app/profile.jpg';
import type { Locale } from './i18n';

type Service = {
  title: string;
  items: string[];
};

type Project = {
  title: string;
  text: string;
  tags: string[];
};

type DataProtectionSection = {
  title: string;
  paragraphs: string[];
};

type SiteContent = {
  metadata: {
    title: string;
    description: string;
  };
  home: {
    intro: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    servicesTitle: string;
    services: Service[];
    links: {
      linkedin: string;
      email: string;
      github: string;
      twitter: string;
    };
    bio: string;
    meat: string;
  };
  about: {
    title: string;
    greeting: string;
    paragraphs: string[];
    skillsTitle: string;
    skills: string[];
    personalTitle: string;
    personal: string;
    sideHustleTitle: string;
    dryAgingTitle: string;
    dryAging: string;
    saucesTitle: string;
    sauces: string[];
    linksTitle: string;
  };
  projects: {
    title: string;
    items: Project[];
  };
  impressum: {
    title: string;
    creditsTitle: string;
    representative: string;
    credits: string;
  };
  dataprotection: {
    title: string;
    intro: string[];
    sections: DataProtectionSection[];
  };
};

type LocaleContent = Omit<SiteContent, 'about'> & {
  about: Omit<SiteContent['about'], 'skills'>;
};

export const profile = {
  name: 'Markus Trachsel',
  avatar: me,
  email: 'markus@codechefs.ch',
  linkedin: 'https://www.linkedin.com/in/markustrachsel',
  github: 'https://github.com/markus-codechefs',
  twitter: 'https://twitter.com/trachsel_markus',
  instagram: 'https://www.instagram.com/trachselfood',
};

const skills = [
  '.NET Core',
  'React',
  'Angular',
  'MS-SQL',
  'C#',
  'Open AI',
  'AWS',
  'AZURE',
  'API Development',
  'Architecture',
  'Kanban',
  'DevOps',
  'Rabbit-MQ',
  'Elastic Stack',
  'Octopus Deploy',
  'Kubernetes',
  'Rancher 2',
  'Datadog',
  'Swagger',
  'Next.js',
];

function withSharedContent(localeContent: LocaleContent): SiteContent {
  return {
    ...localeContent,
    about: {
      ...localeContent.about,
      skills,
    },
  };
}

function readLocaleContent(locale: Locale): LocaleContent {
  const filePath = join(process.cwd(), 'content', `${locale}.json`);
  const fileContent = readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');

  return JSON.parse(fileContent) as LocaleContent;
}

export const content = {
  de: withSharedContent(readLocaleContent('de')),
  en: withSharedContent(readLocaleContent('en')),
} satisfies Record<Locale, SiteContent>;
