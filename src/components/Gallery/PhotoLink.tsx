import Image from "next/image";
import type { gallery } from "@/data/gallery";

export default function PhotoLink({
  image,
  alt,
}: {
  image: (typeof gallery)[number];
  alt: string;
}) {
  return (
    <a
      className="gallery_link-item"
      data-fancybox="gallery"
      href={image.fullscreen_src}
      data-category={image.trophie_status}
    >
      <Image
        src={image.src}
        alt={alt}
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className="gallery_image-item rounded-lg"
      />
    </a>
  );
}
