import AnimalPage from "@/components/AnimalPage/AnimalPage";
import { pageMetadata, routeLocale, type LocaleParams } from "@/lib/seo";
import "./yak.css";

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await routeLocale(params), "yak", "/yak");
}
export default async function Page({ params }: LocaleParams) {
  return <AnimalPage animal="yak" locale={await routeLocale(params)} />;
}
