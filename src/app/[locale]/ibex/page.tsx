import AnimalPage from "@/components/AnimalPage/AnimalPage";
import { pageMetadata, routeLocale, type LocaleParams } from "@/lib/seo";
import "./ibex.css";

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await routeLocale(params), "ibex", "/ibex");
}
export default async function Page({ params }: LocaleParams) {
  return <AnimalPage animal="ibex" locale={await routeLocale(params)} />;
}
