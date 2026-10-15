import { permanentRedirect } from "next/navigation";
import { routeLocale, type LocaleParams } from "@/lib/seo";
export default async function LegacyIbex({ params }: LocaleParams) {
  permanentRedirect(`/${await routeLocale(params)}/pamir-ibex-hunting`);
}
