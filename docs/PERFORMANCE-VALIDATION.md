# Local mobile performance validation

Measured 14 October 2026 with Lighthouse 13.5.0 against the final production Next.js build on localhost using Playwright Chromium. Simulated mobile defaults; external Elfsight requests blocked. These are synthetic first-party measurements, not production Core Web Vitals or a guarantee.

| Page | Performance | Accessibility | SEO | LCP | CLS |
|---|---:|---:|---:|---|---|
| Homepage | 92 | 100 | 100 | 2.7 s | 0 |
| Marco Polo | 95 | 100 | 100 | 2.4 s | 0 |
| Pamir ibex | 94 | 100 | 100 | 2.8 s | 0 |
| Contact | 98 | 100 | 100 | 2.3 s | 0 |

The audit identified gallery-filter contrast, corrected before this final run. Hero uses responsive next/image with priority. Below-fold photos are lazy loaded with reserved dimensions. Home gallery previews nine images per category, linking to the full archive. Static text, profiles and hunt cards are server components; semantic looping clones are removed. Native server-rendered gallery links are enhanced after hydration; lightbox, keyboard/arrow navigation and camp tabs remain available. Real Elfsight submissions, analytics delivery and third-party loading need production verification.
