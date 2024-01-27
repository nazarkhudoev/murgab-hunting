import AboutBanner from "@/components/AboutBanner/AboutBanner";
import AboutConservation from "@/components/AboutConservation/AboutConservation";
import AboutHistory from "@/components/AboutHistory/AboutHistory";
import Contact from "@/components/Contact/Contact";
import Founders from "@/components/Founders/Founders";
import Team from "@/components/Team/Team";

export default function AboutPage() {
  return (
    <main>
      <AboutBanner />
      <AboutHistory />
      <Founders />
      <div className="w-[1200px] max-w-full mx-auto mb-[150px] mt-[200px]">
        <h3 className="text-center text-white font-semibold text-2xl uppercase mb-[80px] tracking-[1.5px]">
          TEAM
        </h3>
        <Team />
      </div>
      <AboutConservation />
      <Contact />
    </main>
  );
}
