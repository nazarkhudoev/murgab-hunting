import AnimalPage from "@/components/AnimalPage/AnimalPage";
import { pageMetadata, routeLocale, type LocaleParams } from "@/lib/seo";
import "./marco-polo.css";

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await routeLocale(params), "marco-polo", "/marco-polo");
}
export default async function Page({ params }: LocaleParams) {
  return <AnimalPage animal="marco-polo" locale={await routeLocale(params)} />;
}
