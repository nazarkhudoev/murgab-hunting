import Blog from "@/components/Blog/Blog";
import Camps from "@/components/Camps/Camps";
import Contact from "@/components/Contact/Contact";
import { Expedition } from "@/components/Expedition/Expedition";
import Gallery from "@/components/Gallery/Gallery";
import MainBanner from "@/components/MainBanner/MainBanner";
import Slider from "@/components/Slider/Slider";
import Statistics from "@/components/Statistics/Statistics";
import Trophies from "@/components/Trophies/Trophies";
import Videos from "@/components/Videos/Videos";
import { pageMetadata, routeLocale, type LocaleParams } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await routeLocale(params), "home");
}

export default async function Home({ params }: LocaleParams) {
  const locale = await routeLocale(params);

  return (
    <main>
      <MainBanner locale={locale} />
      <Statistics locale={locale} />
      <Slider />
      <Trophies />
      <Expedition locale={locale} />
      <Camps />
      <Gallery />
      <section className="w-[1290px] max-w-full mx-auto px-5 custom__container">
        <Videos locale={locale} />
        <Blog locale={locale} />
      </section>
      <Contact locale={locale} />
      <div
        className="elfsight-app-c96adae2-50f5-4276-998e-3b21d664dbe4"
        data-elfsight-app-lazy
      ></div>
    </main>
  );
}
