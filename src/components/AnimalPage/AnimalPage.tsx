import initTranslations from "@/i18n";
import type { AnimalSlug, Locale } from "@/lib/navigation";
import AnimalGallery from "../AnimalGallery/AnimalGallery";
import ArgaliBrukeyBanner from "../ArgaliBrukeyBanner/ArgaliBrukeyBanner";
import Contact from "../Contact/Contact";
import IbexBanner from "../IbexBanner/IbexBanner";
import MarcoPoloBanner from "../MarcoPoloBanner/MarcoPoloBanner";
import Trophies from "../Trophies/Trophies";
import WolfBanner from "../WolfBanner/WolfBanner";
import YakBanner from "../YakBanner/YakBanner";

const banners = {
  "marco-polo": MarcoPoloBanner,
  ibex: IbexBanner,
  "argali-brukey": ArgaliBrukeyBanner,
  yak: YakBanner,
  wolf: WolfBanner,
};
const pageIds = {
  "marco-polo": "marco-polo-page",
  ibex: "ibex-page",
  "argali-brukey": "brukey-page",
  yak: "yak-page",
  wolf: "wolf-page",
};
const textIds = {
  "marco-polo": "marcopolo-text-wrapper",
  ibex: "ibex-text-wrapper",
  "argali-brukey": "argali-brukey-text-wrapper",
  yak: "yak-text-wrapper",
  wolf: "wolf-text-wrapper",
};

export default async function AnimalPage({
  animal,
  locale,
}: {
  animal: AnimalSlug;
  locale: Locale;
}) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });
  const Banner = banners[animal];
  const paragraphs = t(`Animals.${animal}.paragraphs`, {
    returnObjects: true,
  }) as string[];
  return (
    <main id={pageIds[animal]}>
      <Banner locale={locale} />
      <section
        id={textIds[animal]}
        className="w-[1200px] max-w-full mx-auto mt-10 px-5"
      >
        <div className="text-white font-extralight relative z-[99] text-justify">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
        <AnimalGallery animal={animal} />
        <Trophies animal={animal} />
      </section>
      <Contact locale={locale} />
    </main>
  );
}
