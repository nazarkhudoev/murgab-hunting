# Murgab Hunting

Bilingual English/Russian marketing site for Murgab Hunting, built with Next.js App Router, React, TypeScript, Tailwind CSS, i18next, Swiper and React Slick.

## Local development

Use Node.js 22.13 or newer and npm. Install the exact dependency tree with `npm ci`, then run `npm run dev`. Open http://localhost:3000/en or http://localhost:3000/ru.

```sh
npm ci
npm run dev
```

## Project structure

- `src/app/[locale]`: localized routes and page metadata.
- `src/components/AnimalPage`: shared server-rendered animal-page template.
- `src/components/AnimalGallery`: interactive animal gallery.
- `src/lib/navigation.ts`: supported locales, animal IDs and shared navigation.
- `src/locales/en/common.json` and `src/locales/ru/common.json`: translated UI, page descriptions and animal content. Add matching keys to both files.
- `src/data`: typed trophy, team and gallery records. Trophy IDs are stable route slugs; display names can change without affecting filtering.
- `src/app/sitemap.ts` and `src/app/robots.ts`: native SEO routes.
- `src/assets/fonts`: locally hosted Roboto and its OFL license; builds do not fetch Google Fonts.
- `tests/site.spec.ts`: browser checks for both languages, route rendering, navigation, booking fallback and metadata.

Static page content renders on the server. Client components handle language selection, navigation, galleries and carousels. The translation provider is initialized once for each locale and remounted when the locale changes.

## Booking and external widgets

Elfsight provides booking, blog, video and social widgets. Its platform script is loaded once in the root layout after hydration. Widget IDs live in the corresponding components. Manage forms, delivery addresses and content in the Elfsight account.

The booking section always displays direct email and telephone links, including when the widget service is unavailable. Browser tests deliberately block the widget loader and do not submit real inquiries.

Instagram and YouTube use the known account URLs. Placeholder Facebook and Telegram links have been removed; add them only when real account URLs are available.

## Canonical domain

The default canonical origin is `https://www.murgabhunting.com`. To use a different deployment origin, set `NEXT_PUBLIC_SITE_URL` before building, for example in `.env.local`:

```dotenv
NEXT_PUBLIC_SITE_URL=https://www.murgabhunting.com
```

The same origin drives canonical links, language alternates, sitemap and robots.txt. Configure the hosting platform to redirect the other domain variant to the canonical origin. Set `NEXT_PUBLIC_SITE_URL` in the deployment environment and rebuild when changing domains.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

`npm run check` runs all four project checks in sequence. Type checking first generates Next.js route types. Browser tests start the production build on port 3100; run the build first. Tests expect the default canonical origin. CI runs the same checks on Node.js 22 and installs Chromium automatically.

For a production dependency security check, run `npm audit --omit=dev`. A PostCSS override keeps Next.js and the build tools on the same patched PostCSS 8 version. Development-only glob/parser dependencies may still have advisories: check `npm audit` when updating Tailwind and ESLint, and avoid forcing major upgrades without validating their APIs and generated styles.

## Production

```sh
npm ci
npm run build
npm run start
```

Deploy on a Node-capable platform with Node.js 22.13 or newer. The build generates localized pages, sitemap.xml and robots.txt. Preview both languages and verify the Elfsight form's delivery configuration before exposing a deployment to visitors.
# SEO and content maintenance

The bilingual route catalogue and reviewed business copy live in `src/data/site-content.ts`. New public pages use the existing i18next layout and server-rendered content templates. Legacy `/marco-polo`, `/ibex` and `/about-us` URLs redirect permanently to the descriptive equivalents in both languages. The sitemap contains canonical pages only.

See `docs/SEO-IMPLEMENTATION.md` for the audit and `docs/OWNER-CONTENT-REVIEW.md` for the single owner-review checklist. Unconfirmed seasons, prices, altitudes, legal requirements, facilities and impact figures are omitted from public copy.

Add bilingual blog records in `src/data/blog.ts`; only records marked published and ownerReviewed, with a real author, publication date and sections, are routed and included in the sitemap. Article metadata, breadcrumbs and BlogPosting JSON-LD are generated from these records. Do not mark placeholder content published.

The Elfsight inquiry widget remains the submission backend. The separate email-draft form validates inputs and opens a mail application; it does not send email or claim submission success. No new server endpoint stores inquiry data. Confirm widget validation, spam prevention and delivery in its dashboard.

Vercel custom events track route/locale/species and contact-link actions without form field values. Analytics URLs have query strings and fragments removed before sending. Verify actual event delivery and privacy requirements in production. The canonical hostname remains `www.murgabhunting.com`; configure HTTPS and apex-to-www redirects in Vercel or your reverse proxy and set NEXT_PUBLIC_SITE_URL before building.
