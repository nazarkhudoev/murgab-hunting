import Image from "next/image";
import TabImage3 from "@/assets/images/tabs-images/Frame 1632 (2).png";

import "./Conservation.css";

export default function Conservation() {
  return (
    <div className="flex items-start justify-between gap-7 px-10 mt-5 conservation-container">
      <div>
        <Image src={TabImage3} alt="TabImage1" height={400} width={360} priority={true} />
      </div>
      <div className="w-[640px] max-w-full flex flex-col justify-start items-start gap-4 font-extralight text-white">
        <p>
          Murgab Hunting stands as the epitome of the ultimate hunting
          adventure, offering an unparalleled experience in the remote
          wilderness of Tajikistan. Founded in 1989, we specialize in sport
          hunting tourism, providing bespoke expeditionary services in the
          majestic Gornobadakhshan Autonomous Region.
        </p>
        <p className="extra__text">
          With a rich legacy spearheaded by our founder, Bekmurodi Zafar, we
          cater to the discerning hunter seeking not just a hunt, but an
          expedition—a story to be told for generations. Our core team, a cadre
          of former athletes, seasoned explorers, and professional hunters,
          ensures that your quest for the elusive Marco Polo sheep and the
          resilient mountain goats is not only successful but also sustainable
          and respectful to the natural splendor of the region.
        </p>
        <p className="extra__text">
          Murgab Hunting is not just about the pursuit of game; it’s about
          embracing the rugged beauty of the Pamirs, the thrill of the chase,
          and the preservation of hunting traditions. We invite you to join us,
          where hunting is an art and every expedition is an odyssey.
        </p>
      </div>
    </div>
  );
}
