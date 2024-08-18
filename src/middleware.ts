import {i18nRouter} from 'next-i18n-router';
import  i18nConfig  from '@/i18nConfig';
import { NextRequest } from 'next/server.js';




export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig)
}


export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)']
  // Matcher ignoring `/_next/` and `/api/`
  // matcher: ['/', '/(en|ru)/:path*']
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logo.png|sitemap.xml|sitemap-0.xml|robots.txt).*)"],
  // matcher: ['/', '/(en|ru|tj)/:path*']
};


