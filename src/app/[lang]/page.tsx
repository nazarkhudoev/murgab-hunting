import Contact from "@/components/Contact/Contact";
import Slider from "@/components/Slider/Slider";
import { Expedition } from "@/components/Expedition/Expedition";
import MainBanner from "@/components/MainBanner/MainBanner";
import Statistics from "@/components/Statistics/Statistics";
import Trophies from "@/components/Trophies/Trophies";
import Camps from "@/components/Camps/Camps";

export default function Home() {
  return (
    <main>
      <MainBanner />
      <Statistics />
      <Slider />
      <Trophies />
      <Expedition />
      <Camps />
      {/* <div
        className="elfsight-app-565e7f16-ffc5-4652-96e8-b36af930a2b9"
        data-elfsight-app-lazy
      ></div>

      <div
        className="elfsight-app-a8064645-06c0-45af-8b23-3514694ae97e"
        data-elfsight-app-lazy
      ></div>

      <div
        className="elfsight-app-c96adae2-50f5-4276-998e-3b21d664dbe4"
        data-elfsight-app-lazy
      ></div>

      <div
        className="elfsight-app-63fbac68-6b51-4102-ad1d-e2c4562b500f"
        data-elfsight-app-lazy
      ></div> */}
      {/* <Demo /> */}
      <Contact />
    </main>
  );
}
