import { permanentRedirect } from "next/navigation";
import { routeLocale, type LocaleParams } from "@/lib/seo";
export default async function LegacyAbout({ params }: LocaleParams) {
  permanentRedirect(`/${await routeLocale(params)}/about`);
}
