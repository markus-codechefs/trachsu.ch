import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowIcon,
  GitHubIcon,
  InstaIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from 'components/icons';
import ProjectCard from 'components/project';
import { content, profile } from 'lib/content';
import type { Locale } from 'lib/i18n';

const chipClassName =
  'text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 my-2 mx-2 bg-neutral-200 text-neutral-800 dark:text-black-200 rounded-full';

const paragraphClassName = 'my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200';

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="flex items-center gap-2 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}

function LinkCard({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
    >
      <div className="flex items-center">
        {icon}
        <div className="ml-3">{label}</div>
      </div>
      <ArrowIcon />
    </a>
  );
}

export function HomePageContent({ locale }: { locale: Locale }) {
  const t = content[locale].home;

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{profile.name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {t.intro}
      </p>

      <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h2 className="font-bold text-xl font-serif mb-3">{t.ctaTitle}</h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">{t.ctaText}</p>
        <Link
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          {t.ctaButton}
          <MailIcon />
        </Link>
      </div>

      <h2 className="font-bold text-3xl font-serif my-5">{t.servicesTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {t.services.map((service) => (
          <div
            className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg"
            key={service.title}
          >
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
              {service.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={profile.name}
          className="rounded-full grayscale"
          src={profile.avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <SocialLink href={profile.linkedin} label={t.links.linkedin} icon={<LinkedinIcon />} />
          <SocialLink href={`mailto:${profile.email}`} label={t.links.email} icon={<MailIcon />} />
          <SocialLink href={profile.github} label={t.links.github} icon={<GitHubIcon />} />
          <SocialLink href={profile.twitter} label={t.links.twitter} icon={<TwitterIcon />} />
        </div>
      </div>

      <p className={paragraphClassName}>{t.bio}</p>
      <p className={paragraphClassName}>{t.meat}</p>
    </section>
  );
}

export function AboutPageContent({ locale }: { locale: Locale }) {
  const t = content[locale].about;

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{t.title}</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">{t.greeting}</p>
      {t.paragraphs.map((paragraph) => (
        <p className="my-5 text-neutral-800 dark:text-neutral-200" key={paragraph}>
          {paragraph}
        </p>
      ))}

      <h2 className="font-bold my-5 text-2xl font-serif">{t.skillsTitle}</h2>
      {t.skills.map((skill) => (
        <div className={chipClassName} key={skill}>
          <p>{skill}</p>
        </div>
      ))}

      <h2 className="font-bold my-5 text-2xl font-serif">{t.personalTitle}</h2>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">{t.personal}</p>

      <h2 className="font-bold my-5 text-2xl font-serif">{t.sideHustleTitle}</h2>
      <h3 className="font-bold my-5 font-serif">{t.dryAgingTitle}</h3>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">{t.dryAging}</p>

      <h3 className="font-bold my-5 font-serif">{t.saucesTitle}</h3>
      {t.sauces.map((paragraph) => (
        <p className="my-5 text-neutral-800 dark:text-neutral-200" key={paragraph}>
          {paragraph}
        </p>
      ))}

      <h2 className="font-bold text-2xl font-serif my-5">{t.linksTitle}</h2>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <LinkCard href={`mailto:${profile.email}`} label="E-Mail" icon={<MailIcon />} />
        <LinkCard href={profile.linkedin} label="Linkedin" icon={<LinkedinIcon />} />
        <LinkCard href={profile.github} label="Github" icon={<GitHubIcon />} />
        <LinkCard href={profile.instagram} label="Instagram" icon={<InstaIcon />} />
        <LinkCard href={profile.twitter} label="X" icon={<TwitterIcon />} />
      </div>
    </section>
  );
}

export function ProjectsPageContent({ locale }: { locale: Locale }) {
  const t = content[locale].projects;

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">{t.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {t.items.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            text={project.text}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}

export function ImpressumPageContent({ locale }: { locale: Locale }) {
  const t = content[locale].impressum;

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{t.title}</h1>
      <div className={paragraphClassName}>
        <p>
          <b>E-Mail:</b> {profile.email}
        </p>
        <p>
          <b>Website:</b> trachsu.ch
        </p>
        <p>
          <b>{t.representative}: </b>
          {profile.name}
        </p>
      </div>
      <h2 className="font-bold text-3xl font-serif">{t.creditsTitle}</h2>
      <p className={paragraphClassName}>{t.credits}</p>
    </section>
  );
}

export function DataprotectionPageContent({ locale }: { locale: Locale }) {
  const t = content[locale].dataprotection;

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{t.title}</h1>
      {t.intro.map((paragraph) => (
        <p className={paragraphClassName} key={paragraph}>
          {paragraph}
        </p>
      ))}

      {t.sections.map((section) => (
        <section key={section.title}>
          <h2 className="font-bold text-2xl font-serif">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p className={paragraphClassName} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </section>
  );
}
