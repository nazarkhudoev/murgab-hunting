import AnimalPage from "@/components/AnimalPage/AnimalPage";
import { pageMetadata, routeLocale, type LocaleParams } from "@/lib/seo";
import "./wolf.css";

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await routeLocale(params), "wolf", "/wolf");
}
export default async function Page({ params }: LocaleParams) {
  return <AnimalPage animal="wolf" locale={await routeLocale(params)} />;
}
