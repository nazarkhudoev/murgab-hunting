import Contact from "@/components/Contact/Contact";
import Slider from "@/components/Slider/Slider";
import { Expedition } from "@/components/Expedition/Expedition";
import MainBanner from "@/components/MainBanner/MainBanner";
import Statistics from "@/components/Statistics/Statistics";
import Trophies from "@/components/Trophies/Trophies";
import Camps from "@/components/Camps/Camps";
import Blog from "@/components/Blog/Blog";
import Videos from "@/components/Videos/Videos";
import Gallery from "@/components/Gallery/Gallery";

export default function Home() {
  return (
    <main>
      <MainBanner />
      <Statistics />
      <Slider />
      <Trophies />
      <Expedition />
      <Camps />
      <Gallery />
      {/* <section className="w-[1290px] max-w-full mx-auto px-5">
        <Videos />
        <Blog />
      </section> */}
      <Contact />
    </main>
  );
}
