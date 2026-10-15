# SEO and experience implementation

## Repository audit

Next.js 15.5.27 App Router, React 18, TypeScript, Tailwind plus component CSS. `[locale]` generates English and Russian static pages; middleware uses next-i18n-router and content uses i18next. Existing routes: home, about-us, marco-polo, ibex, argali-brukey, yak, wolf. Native sitemap/robots and server metadata already exist. Vercel Analytics is installed in the locale layout. Docker builds with Node 22; no persistent application database or first-party form endpoint exists.

Contact submission is owned by Elfsight; email/phone links survive a widget outage. Galleries use Swiper/Fancybox; other sections use react-slick with infinite clones. Homepage embeds long company, camp, expedition and gallery sections plus external video/blog widgets. Hero uses a CSS background rather than responsive optimized imagery. Some camp images say Picture 1. Language switching is select-only. Statistics have no dated source, old animal copy contains a current-year quota and legal assertions, and conservation copy makes unsupported impact/funding claims. Metadata descriptions are repetitive. There is no JSON-LD, visible breadcrumb, first-party blog architecture or useful custom 404.

## Implementation checklist

- Preserve assets, styles, i18next, Vercel and Docker compatibility, gallery controls and Elfsight submission.
- Add canonical bilingual hunt and planning routes; permanently redirect old equivalents.
- Centralize content and contact facts, record unresolved facts separately, omit unsupported claims.
- Improve homepage hierarchy and internal links; server-render static sections.
- Add metadata/social cards, sitemap alternates, breadcrumbs and accurate JSON-LD.
- Eliminate looping semantic clones, add crawlable locale links, responsive images and accessible interactions.
- Build blog templates with a reviewed content publication gate; no fabricated articles.
- Track only non-personal inquiry actions; preserve widget backend and do not report fictitious form success.
- Verify production HTML, routes, redirects, both languages, navigation and mobile layouts.

## Content provenance

Company founding year 1989, founders' names, team names/roles, contact links, Hot Springs Camp name, camp photography and assistance service names are present in existing source/localizations. Their presence is repository evidence, not independent certification. Legal outcome guarantees, population/quota statistics, client totals and conservation impact totals are deliberately not carried into the revised public content. Production hostname remains www.murgabhunting.com to preserve existing deployment assumptions.
