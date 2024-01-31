import ArgaliBrukeyBanner from "@/components/ArgaliBrukeyBanner/ArgaliBrukeyBanner";
import Contact from "@/components/Contact/Contact";

export default function ArgaliBrukeyPage() {
  return (
    <main>
      <ArgaliBrukeyBanner />
      <section id="argali-brukey-text-wrapper" className="px-[85px] mt-10">
        <p className="text-white font-extralight">
          Discover the remarkable natural hybrid of Ovis ammon polii and Ovis
          ammon hodgsoni, a rare and majestic creature that stands out in the
          wild with its distinctive morphological features. Unlike the Marco
          Polo argali, this hybrid boasts a unique set of horns that are notably
          shorter yet possess a broader circumference at their base, adding to
          their impressive stature. <br />
          This extraordinary hybrid thrives across a vast and breathtaking
          landscape, stretching along the historic Wakhan Corridor. Their
          habitat extends through the rugged terrains of Southern Pamir in
          Tajikistan, skirting the serene northern banks of Lake Zorkul, right
          up to the edge where the country meets Afghanistan. From there, their
          range continues eastward, reaching deep into the heart of the western
          Chinese Tibetan Plateau.
          <br />
          Embodying the untamed spirit of the regions they inhabit, these
          hybrids are a testament to the rich biodiversity and the intricate
          tapestry of life that exists within these remote ecosystems. Their
          presence is a natural marvel, symbolizing the resilience and
          adaptability of wildlife in the face of ever-changing environments.
        </p>
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
