import ArgaliBrukeyBanner from "@/components/ArgaliBrukeyBanner/ArgaliBrukeyBanner";
import Contact from "@/components/Contact/Contact";

export default function ArgaliBrukeyPage() {
  return (
    <main id="brukey-page">
      <ArgaliBrukeyBanner />
      <section id="argali-brukey-text-wrapper" className="px-[85px] mt-10">
        <p className="text-white font-extralight">
          Discover the rare and majestic Argali Brukey, a creature that stands
          out in the wild with its distinctive morphological features. Unlike
          the more commonly known Marco Polo argali, the Argali Brukey boasts a
          unique set of horns that, while shorter, possess a broader
          circumference at their base, enhancing their impressive stature.
          <br /> <br />
          Thriving across the vast and breathtaking landscape of the historic
          Wakhan Corridor, their habitat extends through the rugged terrains of
          Southern Pamir in Tajikistan, skirting the serene northern banks of
          Lake Zorkul, and reaching up to the edge where the country meets
          Afghanistan.
          <br /> <br />
          Embodying the untamed spirit of the regions they inhabit, the Argali
          Brukey is a testament to the rich biodiversity and the intricate
          tapestry of life that exists within these remote ecosystems. Their
          presence symbolizes the resilience and adaptability of wildlife in the
          face of ever-changing environments.
        </p>
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
