'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  footerItems,
  getLocaleFromPathname,
  getLocalizedPath,
  type RoutePath,
} from 'lib/i18n';

export default function Footer() {
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPathname(pathname);
  const items = footerItems[locale];

  return (
    <footer className="my-10">
      <hr />
      <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {Object.entries(items).map(([path, label]) => (
            <li className="px-1" key={path}>
              <Link
                href={getLocalizedPath(locale, path as RoutePath)}
                className="hover:underline"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
