# trachsu.ch

[![Deploy with Vercel](https://vercel.com/button)](https://api.vercel.com/v1/integrations/deploy/prj_0fVOavLOZ58INxMEnllIF475qWu2/lByRCMNj8Q)

- **Framework**: [Next.js](https://nextjs.org/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Dependency Notes

- **Next.js, React, React DOM, TypeScript, Node/React types**: Core app framework and type checking. Removing them means replacing the website framework, routing, rendering, image/font handling, API routes, sitemap metadata, and TSX components with another stack or static HTML.
- **Tailwind CSS, PostCSS, Autoprefixer, Tailwind Typography**: Styling pipeline and utility classes used throughout the pages and components. Removing them means rewriting class-based styling into CSS modules/plain CSS and deleting the PostCSS/Tailwind config; Typography can go if no prose styles are needed.
- **Vercel Analytics**: Page analytics injected from `components/analytics.tsx`. Removing it means deleting `AnalyticsWrapper` from the layout and accepting no Vercel Analytics events, or replacing it with another analytics provider.
- **Framer Motion and clsx**: Animated logo/navigation highlight and conditional class names. Removing them means replacing the animated SVG/nav indicator with CSS or static markup and using template strings/arrays for class composition.
- **NextAuth, Kysely, kysely-planetscale, PlanetScale database packages**: GitHub login and guestbook API persistence. Removing them means deleting or redesigning the guestbook/auth API routes, database access layer, OAuth environment variables, and any UI depending on signed-in guestbook actions.
- **Octokit and server-only**: Server-side GitHub star count. Removing them means calling GitHub with `fetch`, hard-coding/removing the star count, and dropping the server-only import guard.
- **Vercel Edge Config and Vercel OG**: Dynamic redirects in `next.config.js` and generated Open Graph images in `pages/api/og.tsx`. Removing them means moving redirects into static config/code and using a static image or another image-generation service.

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/markus-codechefs/trachsu.ch.git
cd trachsu.ch
pnpm install
pnpm run setup # Remove all of my personal information
pnpm dev
```

## Cloning / Forking

Please review the [license](https://github.com/markus-codechefs/trachsu.ch.git/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.) by running `pnpm run setup`.
