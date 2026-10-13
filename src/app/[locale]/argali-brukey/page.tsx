import AnimalPage from "@/components/AnimalPage/AnimalPage";
import { pageMetadata, routeLocale, type LocaleParams } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(
    await routeLocale(params),
    "argali-brukey",
    "/argali-brukey",
  );
}
export default async function Page({ params }: LocaleParams) {
  return (
    <AnimalPage animal="argali-brukey" locale={await routeLocale(params)} />
  );
}
