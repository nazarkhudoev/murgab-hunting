import { permanentRedirect } from "next/navigation";
import { routeLocale, type LocaleParams } from "@/lib/seo";
export default async function LegacyMarcoPolo({ params }: LocaleParams) {
  permanentRedirect(`/${await routeLocale(params)}/marco-polo-sheep-hunting`);
}
