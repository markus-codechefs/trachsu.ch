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

export const content = {
  de: {
    metadata: {
      title: 'Markus Trachsel - Softwarearchitekt & DevOps Engineer',
      description:
        'Softwarearchitekt und DevOps Engineer mit über 14 Jahren Erfahrung in .NET, AWS, Azure und Prozessverbesserung.',
    },
    home: {
      intro:
        'Als Full-Stack Engineer unterstütze ich agile Softwareteams mit DevOps-Prinzipien, kleinen Änderungen und häufigen Deployments. Menschen stehen für mich vor Technologie.',
      ctaTitle: 'Bereit, Ihre Softwareauslieferung zu verbessern?',
      ctaText:
        'Lassen Sie uns besprechen, wie ich Ihre DevOps-Prozesse optimieren, die Deployment-Frequenz erhöhen oder Ihre nächste Cloud-Lösung gestalten kann.',
      ctaButton: 'Kontakt aufnehmen',
      servicesTitle: 'Leistungen',
      services: [
        {
          title: 'DevOps & Prozessverbesserung',
          items: [
            'CI/CD-Pipelines optimieren',
            'Deployment-Frequenz erhöhen',
            'DORA-Metriken einführen',
            'Teamproduktivität verbessern',
          ],
        },
        {
          title: 'Softwareentwicklung',
          items: [
            '.NET-Core-Anwendungen entwickeln',
            'React- & TypeScript-Frontends',
            'APIs entwickeln und integrieren',
            'Cloud-native Architektur',
          ],
        },
        {
          title: 'Cloud-Architektur',
          items: [
            'AWS- & Azure-Expertise',
            'Multi-Cloud-Strategien',
            'Serverless-Architektur',
            'Infrastructure as Code',
          ],
        },
        {
          title: 'Beratung & Strategie',
          items: [
            'Technische Architektur prüfen',
            'Technologie-Stacks bewerten',
            'Teamstrukturen optimieren',
            'Digitale Transformation begleiten',
          ],
        },
      ],
      links: {
        linkedin: 'Kontakt über LinkedIn',
        email: 'Kontakt aufnehmen',
        github: 'GitHub ansehen',
        twitter: 'Auf X folgen',
      },
      bio:
        'Neben der Arbeit verbringe ich Zeit mit meiner Familie, spiele gerne Basketball und lebe meine kulinarische Kreativität in der Küche aus.',
      meat:
        'Für gutes Essen braucht es hochwertige Zutaten. Deshalb habe ich angefangen, Rindfleisch selbst zu Hause trocken zu reifen. Mehr dazu steht auf der Über-mich-Seite.',
    },
    about: {
      title: 'Über mich',
      greeting: 'Hallo, ich bin Markus Trachsel. Schön, Sie kennenzulernen!',
      paragraphs: [
        'Als Softwarearchitekt und Full-Stack Engineer brenne ich dafür, agile Softwareteams mit DevOps-Prinzipien, kleinen Änderungspaketen und häufigen Deployments in Produktion zu stärken. Mein Ansatz stellt Menschen vor Technologie und anerkennt die wichtige Rolle, die Software bei der Unterstützung und Verbesserung von Organisationszielen spielt.',
        'Meine Expertise umfasst Prozessautomatisierung, Integration und Pipelines. So helfe ich Kunden, Produktivität und Effizienz mit passender Technologie zu steigern.',
      ],
      skillsTitle: 'Skills / Technologien',
      skills,
      personalTitle: 'Persönliches',
      personal:
        'Neben meiner Arbeit habe ich verschiedene Interessen und Hobbys. Ich spiele gerne Basketball, verbringe viel Zeit mit meiner Familie und koche mit Leidenschaft. Hochwertiges Essen ist für mich ein kreatives Feld, in dem ich gern mit neuen Rezepten und Zutaten experimentiere.',
      sideHustleTitle: 'Nebenprojekt',
      dryAgingTitle: 'Dry Aging Meat',
      dryAging:
        'Ich reife Schweizer Rindfleisch und Schweinerücken mit den Produkten von dry-ager.com sechs bis acht Wochen trocken. So entstehen hochwertige, saftige Steaks, über die man bei jedem Networking-Event noch lange spricht.',
      saucesTitle: 'Saucen',
      sauces: [
        'Aus Knochen und Abschnitten des Dry Agings kochen ein Kollege und ich eine intensive Jus (Glace de viande): im Grunde ein stark reduzierter Fond ohne Fett.',
        'Ich bin ausserdem Mitgründer von Berns selbsternannter BBQ-Sauce "Bär-BQ". 2019 war sie sehr gefragt. Wir verkauften sie in einigen Metzgereien in Bern und in unserem eigenen Online-Shop www.bärfoods.ch, der inzwischen eingestellt ist.',
      ],
      linksTitle: 'Links',
    },
    projects: {
      title: 'Projekte',
      items: [
        {
          title: 'CRM Dynamics 365 Customizer / Azure Software Engineer bei BKW',
          text:
            'Mein erster Freelancer-Vertrag. Ich arbeite mit einem Engineering-Team daran, die Verkaufs- und Supportprozesse von BKW über die CRM-Dynamics-365-Plattform zu unterstützen.',
          tags: ['Microsoft Dynamics 365', 'Azure Cloud', 'C#', '.NET Core', '.NET Framework'],
        },
        {
          title: 'trachsu.ch',
          text:
            'Meine Landingpage, die mir viel Gelegenheit gab, tiefer in React, Next.js und Vercel einzutauchen.',
          tags: ['react', 'next.js', 'type script', 'vercel'],
        },
        {
          title: 'Simpline Workflow System',
          text:
            'Ich entwickelte ein Webportal mit .NET Core, Orchard.net CMS, Bootstrap und MS-SQL. Es wurde auf Azure gehostet und mit Azure DevOps ausgeliefert.',
          tags: ['C#', '.NET Core', 'Bootstrap', 'ms-sql'],
        },
        {
          title: 'Deployment-Frequenz bei immoscout24 erhöht',
          text:
            'Mit DORA-Metriken und modernen Praktiken wie CI/CD steigerten wir die Deployment-Frequenz in Produktion von 4-mal pro Monat auf 200!',
          tags: ['Github', 'octopus deploy', 'bamboo', 'process'],
        },
        {
          title: 'Automatisierte Personal-Debtcheck-API von Intrum Justitia AG für Meisterwerk GmbH',
          text:
            'Analyse, Design, Implementierung und Test der API sowie Integration und Automatisierung des Bestellprozesses beim Kunden.',
          tags: ['Shopify API', 'C#', '.NET Core', 'Rest API'],
        },
        {
          title: 'Cloud-Projekt bei Post IT',
          text:
            'Analyse, Design, Implementierung und Test von App Service, Logic App, Functions und Lambdas. Ziel war der Vergleich von AWS- und Azure-Services für ein Workflow-System.',
          tags: ['C#', '.NET Core', 'Rest API', 'Angular', 'AWS', 'Azure Cloud'],
        },
      ],
    },
    impressum: {
      title: 'Impressum',
      creditsTitle: 'Credits',
      representative: 'Vertretungsberechtigte Person',
      credits:
        'Vielen Dank an Lee Robinson (leerob) für dieses grossartige Template!',
    },
    dataprotection: {
      title: 'Datenschutzerklärung',
      intro: [
        'Vielen Dank für Ihren Besuch auf trachsu.ch und Ihr Interesse an unserem Angebot.',
        'Der Schutz Ihrer Personendaten ist uns wichtig. Diese Datenschutzerklärung informiert darüber, welche Personendaten beim Besuch der Website bearbeitet werden. Unsere Datenschutzpraxis richtet sich nach dem Schweizer Datenschutzgesetz (DSG).',
      ],
      sections: [
        {
          title: 'Inhaber',
          paragraphs: [
            'Verantwortlich im Sinne von Art. 5 lit. j DSG ist Code Chefs GmbH, Sportweg 5, 3097 Liebefeld, Schweiz.',
          ],
        },
        {
          title: 'Bereitstellung der Website und Logfiles',
          paragraphs: [
            'Bei jedem Zugriff auf unsere Website werden automatisch technische Daten des verwendeten Geräts erfasst, etwa Browsertyp, Betriebssystem, Hostname, IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Inhalte, Referrer, Erfolgsstatus und übertragene Datenmenge.',
            'Diese Daten werden in Logfiles gespeichert und nicht mit Personendaten bestimmter Nutzer zusammengeführt. Die temporäre Speicherung ist erforderlich, um die Website auszuliefern, Missbrauch zu bekämpfen, Störungen zu beheben und unsere IT-Systeme zu schützen.',
            'Die technischen Daten werden gelöscht, sobald sie für die Kompatibilität und Sicherheit der Website nicht mehr erforderlich sind, spätestens jedoch nach drei Monaten.',
          ],
        },
        {
          title: 'Weitergabe an Dritte',
          paragraphs: [
            'Personendaten werden nach den Grundsätzen der Rechtmässigkeit und Treu und Glauben bearbeitet. Eine Weitergabe erfolgt nur, soweit dies für unsere Angebote notwendig ist oder gesetzliche Vorschriften, Gerichtsentscheide oder behördliche Anordnungen dies verlangen.',
          ],
        },
        {
          title: 'Externe Webdienste',
          paragraphs: [
            'Auf unserer Website können externe Webdienste eingebunden sein. Beim Aufruf der Website können diese Anbieter Informationen über Ihren Besuch erhalten. Sie können dies durch Browser-Einstellungen oder Plug-ins einschränken; dabei können Funktionen der Website beeinträchtigt werden.',
            'Wir nutzen Inhalte von Legally ok GmbH, Schochenmühlestrasse 6, 6340 Baar, Schweiz. Die Bearbeitung erfolgt in der Schweiz. Weitere Informationen finden Sie unter https://www.legally-ok.com/datenschutz/.',
          ],
        },
        {
          title: 'Datensicherheit und Kommunikation per E-Mail',
          paragraphs: [
            'Ihre Personendaten werden durch technische und organisatorische Massnahmen geschützt. Bei unverschlüsselter Kommunikation per E-Mail können wir die vollständige Datensicherheit auf dem Übertragungsweg nicht garantieren.',
          ],
        },
        {
          title: 'Speicherdauer und Rechte betroffener Personen',
          paragraphs: [
            'Wir speichern Personendaten nur so lange, wie dies für die Zwecke der Bearbeitung erforderlich ist, ein überwiegendes berechtigtes Interesse besteht oder gesetzliche Pflichten dies verlangen.',
            'Sie können Auskunft, Berichtigung, Löschung, Einschränkung und Datenherausgabe verlangen, soweit die gesetzlichen Voraussetzungen erfüllt sind. Sie können erteilte Einwilligungen jederzeit widerrufen.',
            'Zur Ausübung Ihrer Rechte kontaktieren Sie Code Chefs GmbH, Sportweg 5, 3097 Liebefeld, Schweiz, E-Mail: markus@codechefs.ch.',
          ],
        },
        {
          title: 'Meldungen an den EDÖB und Beschwerdemöglichkeit',
          paragraphs: [
            'Betroffene Personen können sich bei hinreichenden Anzeichen für eine Verletzung von Datenschutzvorschriften an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden.',
          ],
        },
      ],
    },
  },
  en: {
    metadata: {
      title: 'Markus Trachsel - Software Architect & DevOps Engineer',
      description:
        'Software architect and DevOps engineer with 14+ years of experience in .NET, AWS, Azure, and process improvement.',
    },
    home: {
      intro:
        'As a full-stack engineer, I bring a passion for empowering agile software teams through DevOps principles, small batch sizes, and frequent deployments. I prioritize people over technology.',
      ctaTitle: 'Ready to improve your software delivery?',
      ctaText:
        'Let’s discuss how I can help optimize your DevOps processes, improve deployment frequency, or architect your next cloud solution.',
      ctaButton: 'Get in Touch',
      servicesTitle: 'Services',
      services: [
        {
          title: 'DevOps & Process Improvement',
          items: [
            'CI/CD pipeline optimization',
            'Deployment frequency improvement',
            'DORA metrics implementation',
            'Team productivity enhancement',
          ],
        },
        {
          title: 'Software Development',
          items: [
            '.NET Core application development',
            'React & TypeScript frontend',
            'API development & integration',
            'Cloud-native architecture',
          ],
        },
        {
          title: 'Cloud Architecture',
          items: [
            'AWS & Azure expertise',
            'Multi-cloud strategies',
            'Serverless architecture',
            'Infrastructure as Code',
          ],
        },
        {
          title: 'Consulting & Strategy',
          items: [
            'Technical architecture review',
            'Technology stack assessment',
            'Team structure optimization',
            'Digital transformation guidance',
          ],
        },
      ],
      links: {
        linkedin: 'contact me on linkedin',
        email: 'contact me',
        github: 'view my github',
        twitter: 'follow me on X',
      },
      bio:
        'Beyond work, I spend time with my family, enjoy playing basketball and love exploring my culinary creativity in the kitchen.',
      meat:
        'For great food you need high quality ingredients. Thus, I started dry aging my own beef at home. See more about this on the about page.',
    },
    about: {
      title: 'About Me',
      greeting: "Hi I'm Markus Trachsel nice to meet you!",
      paragraphs: [
        'As a software architect and full-stack engineer, I bring a passion for empowering agile software teams through DevOps principles, small change sizes, and frequent deployments to production. My approach prioritizes people over technology, recognizing the vital role software plays in supporting and improving organizational goals.',
        'My expertise extends to process automation, integration and pipelines, which allows me to help clients optimize their productivity and efficiency through the use of appropriate technology.',
      ],
      skillsTitle: 'Skills / Technologies',
      skills,
      personalTitle: 'Personal',
      personal:
        'In addition to my work, I have a variety of interests and hobbies that keep me busy. One of my favorite pastimes is playing basketball. I also enjoy spending quality time with my family, making memories and sharing experiences together. Another way I like to spend my free time is by exploring my culinary creativity in the kitchen.',
      sideHustleTitle: 'Side Hustle',
      dryAgingTitle: 'Dry Aging Meat',
      dryAging:
        'I dry age swiss beef and pork backs for 8 and 6 weeks respectively with the awesome products of dry-ager.com. This creates high quality, juicy steaks that make any networking event the talk of the town for weeks to come.',
      saucesTitle: 'Sauces',
      sauces: [
        'From the bones and leftovers of the dry aging, my colleague and I make amazing jus (glace de viande). Basically an absurdly reduced stock without the fat.',
        'I’m also the co-creator of Bern’s self proclaimed BBQ sauce "Bär-BQ". This was all the rage back in 2019. We sold it in a few butcher shops in Bern and our personal online store - www.bärfoods.ch. (now decommissioned)',
      ],
      linksTitle: 'Links',
    },
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'CRM Dynamics 365 Customizer / Azure Software Engineer at BKW',
          text:
            "My first Freelancer Contract. I'm working with a team of engineers to support the sales and support needs of BKW via their CRM Dynamics 365 Platform.",
          tags: ['Microsoft Dynamics 365', 'Azure Cloud', 'C#', '.NET Core', '.NET Framework'],
        },
        {
          title: 'trachsu.ch',
          text:
            'My landing page, which gave me ample opportunity to dive into the world of react, nextjs and vercel.',
          tags: ['react', 'next.js', 'type script', 'vercel'],
        },
        {
          title: 'Simpline Workflow System',
          text:
            'I created a web portal using .NET Core, Orchard.net CMS, Bootstrap, and MS-SQL. It was hosted on Azure and deployed with Azure DevOps.',
          tags: ['C#', '.NET Core', 'Bootstrap', 'ms-sql'],
        },
        {
          title: 'Increased deployment frequency at immoscout24',
          text:
            'Applying the DORA metrics and modern practices like CI/CD we increased the deployment frequency to production from 4 times per month to 200!',
          tags: ['Github', 'octopus deploy', 'bamboo', 'process'],
        },
        {
          title: 'Automated Personal Debtcheck API from Intrum Justitia AG for Meisterwerk GmbH',
          text:
            'Analysis, design, implementation and testing of the API. Integration and automation of the ordering process at the customer.',
          tags: ['Shopify API', 'C#', '.NET Core', 'Rest API'],
        },
        {
          title: 'Cloud Project at Post IT',
          text:
            'Analysis, design, implementation and testing of an App Service, Logic App, Functions and Lambdas. Purpose of the project was to compare services on AWS and Azure creating a Workflow System.',
          tags: ['C#', '.NET Core', 'Rest API', 'Angular', 'AWS', 'Azure Cloud'],
        },
      ],
    },
    impressum: {
      title: 'Imprint',
      creditsTitle: 'Credits',
      representative: 'Authorized representative',
      credits:
        'Many thanks to Lee Robinson (leerob) for this awesome template!',
    },
    dataprotection: {
      title: 'Privacy Policy',
      intro: [
        'Thank you for visiting our website trachsu.ch and for your interest in our company.',
        'The protection of your personal data is important to us. This privacy policy informs you about the processing of personal data that we collect when you visit the site. Our data protection practice follows the Swiss Federal Data Protection Act (FADP).',
      ],
      sections: [
        {
          title: 'Owner',
          paragraphs: [
            'The data controller within the meaning of Art. 5 let. j FADP is Code Chefs GmbH, Sportweg 5, 3097 Liebefeld, Switzerland.',
          ],
        },
        {
          title: 'Provision of the website and creation of log files',
          paragraphs: [
            'Each time our website is accessed, our system automatically collects technical data from the device used to access it, such as browser type, operating system, host name, IP address, date and time of access, requested content, referrer, success status, and amount of data transmitted.',
            'This data is stored in log files and is not stored together with personal data of a specific user. Temporary storage is required to deliver the website, combat abuse, resolve malfunctions, and protect our IT systems.',
            'The technical data is deleted as soon as it is no longer required to ensure compatibility and security of the website, but no later than three months after access.',
          ],
        },
        {
          title: 'Disclosure of information to third parties',
          paragraphs: [
            'Personal data is processed in accordance with the principle of legality and the principle of good faith. Information is only disclosed where necessary for our services or where required by legal regulations, court decisions, or official orders.',
          ],
        },
        {
          title: 'Integration of external web services',
          paragraphs: [
            'External web services may be integrated on our website. By calling up our website, these providers may receive information about your visit. You can restrict this through browser settings or plug-ins; this may limit website functionality.',
            'We use content from Legally ok GmbH, Schochenmühlestrasse 6, 6340 Baar, Switzerland. Processing is carried out in Switzerland. Further information is available at https://www.legally-ok.com/datenschutz/.',
          ],
        },
        {
          title: 'Data security and communication by e-mail',
          paragraphs: [
            'Your personal data is protected by technical and organizational measures. In the case of unencrypted communication by e-mail, we cannot guarantee complete data security on the transmission path.',
          ],
        },
        {
          title: 'Duration of data storage and rights of the data subject',
          paragraphs: [
            'We store personal data only to the extent and for as long as necessary to fulfil the purposes for which the personal data was collected, where we have a legitimate overriding interest, or where we are legally obliged to do so.',
            'You may request information, correction, deletion, restriction, and data portability where the legal requirements are met. You may revoke consent at any time.',
            'To exercise your rights, contact Code Chefs GmbH, Sportweg 5, 3097 Liebefeld, Switzerland, e-mail: markus@codechefs.ch.',
          ],
        },
        {
          title: 'Notifications to the FDPIC and possibility to file a complaint',
          paragraphs: [
            'Data subjects may contact the Federal Data Protection and Information Commissioner (FDPIC) if there are sufficient indications that a data processing operation could violate data protection regulations.',
          ],
        },
      ],
    },
  },
} satisfies Record<Locale, SiteContent>;
