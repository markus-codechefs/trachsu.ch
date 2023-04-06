import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from '@next/font/local';
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
    default: 'Markus Trachsel',
    template: '%s | Markus Trachsel',
  },
  description: 'Developer, cook, and foodie.',
  openGraph: {
    title: 'Markus Trachsel',
    description: 'Developer, cook, and foodie.',
    url: 'https://trachsu.ch',
    siteName: 'Markus Trachsel',   
    locale: 'en-US',
    type: 'website',
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
    title: 'Markus Trachsel',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        kaisei.variable
      )}
    >
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
