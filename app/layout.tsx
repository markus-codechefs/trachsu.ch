import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import AnalyticsWrapper from '../components/analytics';

const kaisei = localFont({
  src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Markus Trachsel - Softwarearchitekt & DevOps Engineer',
    template: '%s | Markus Trachsel',
  },
  description: 'Softwarearchitekt und DevOps Engineer mit über 14 Jahren Erfahrung in .NET, AWS, Azure und Prozessverbesserung.',
  keywords: [
    'softwarearchitekt',
    'DevOps engineer',
    '.NET Core',
    'AWS',
    'Azure',
    'prozessverbesserung',
    'Schweiz',
    'Bern',
    'freelance',
    'software engineering'
  ],
  authors: [{ name: 'Markus Trachsel' }],
  creator: 'Markus Trachsel',
  publisher: 'Markus Trachsel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trachsu.ch'),
  alternates: {
    canonical: '/',
    languages: {
      de: '/',
      en: '/en',
    },
  },
  openGraph: {
    title: 'Markus Trachsel - Softwarearchitekt & DevOps Engineer',
    description: 'Softwarearchitekt und DevOps Engineer mit über 14 Jahren Erfahrung in .NET, AWS, Azure und Prozessverbesserung.',
    url: 'https://trachsu.ch',
    siteName: 'Markus Trachsel',
    locale: 'de-CH',
    alternateLocale: ['en-US'],
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Markus Trachsel - Softwarearchitekt & DevOps Engineer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markus Trachsel - Softwarearchitekt & DevOps Engineer',
    description: 'Softwarearchitekt und DevOps Engineer mit über 14 Jahren Erfahrung in .NET, AWS, Azure und Prozessverbesserung.',
    creator: '@trachsel_markus',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        kaisei.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Markus Trachsel",
              "jobTitle": "Softwarearchitekt & DevOps Engineer",
              "description": "Softwarearchitekt und DevOps Engineer mit über 14 Jahren Erfahrung in .NET, AWS, Azure und Prozessverbesserung.",
              "url": "https://trachsu.ch",
              "sameAs": [
                "https://www.linkedin.com/in/markustrachsel",
                "https://github.com/markus-codechefs",
                "https://twitter.com/trachsel_markus"
              ],
              "knowsAbout": [
                ".NET Core",
                "AWS",
                "Azure",
                "DevOps",
                "Process Improvement",
                "Software Architecture",
                "React",
                "TypeScript"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bern",
                "addressCountry": "CH"
              }
            })
          }}
        />
      </head>
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
      <Sidebar />        
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">                
          {children}
          <Footer/>
          <AnalyticsWrapper />          
        </main>                
      </body>      
    </html>
  );
}
