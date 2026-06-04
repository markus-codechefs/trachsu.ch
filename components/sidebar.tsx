'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  getBasePath,
  getLocaleFromPathname,
  getLocalizedPath,
  locales,
  navigationItems,
  type RoutePath,
} from 'lib/i18n';

function Logo() {
  return (
    <Link aria-label="Markus Trachsel" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="35"
        height="37"
        viewBox="0 0 324 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
         <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M100 7H180L140 120L100 7Z"
          stroke="currentColor"
          strokeWidth={15}
          fill="currentColor"
        />
         <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M246 324V0"
          stroke="currentColor"
          strokeWidth={78}
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPathname(pathname);
  const basePath = getBasePath(pathname);
  const navItems = navigationItems[locale];
  const activeNavItem = navItems[basePath as keyof typeof navItems];

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <nav
          className="flex overflow-hidden flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {activeNavItem ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <div className="hidden md:block">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test2"
                    initial={{ opacity: 0, y: activeNavItem.y }}
                    animate={{
                      opacity: 1,
                      y: activeNavItem.y,
                      width: activeNavItem.w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                {/* Mobile version, hidden on desktop, animates x axis */}
                <div className="block md:hidden">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test"
                    initial={{ opacity: 0, x: activeNavItem.x }}
                    animate={{
                      opacity: 1,
                      x: activeNavItem.x,
                      width: activeNavItem.w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === basePath;

              return (
                <Link
                  key={path}
                  href={getLocalizedPath(locale, path as RoutePath)}
                  className={clsx(
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]',
                    {
                      'text-neutral-500': !isActive,
                      'font-bold': isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="flex gap-2 px-4 md:px-0 mt-4 text-xs font-sans uppercase">
          {locales.map((item) => (
            <Link
              key={item}
              href={getLocalizedPath(item, basePath)}
              hrefLang={item}
              aria-current={item === locale ? 'true' : undefined}
              className={clsx(
                'rounded-md border px-2 py-1 transition-colors',
                item === locale
                  ? 'border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900'
                  : 'border-neutral-200 text-neutral-500 hover:text-neutral-800 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
              )}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
