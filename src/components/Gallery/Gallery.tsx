"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Expand } from "lucide-react";
import { useTranslation } from "react-i18next";
import { gallery } from "@/data/gallery";
import Fancybox from "../Fancybox/Fancybox";
import "./Gallery.css";

const filters = ["all", "trophies", "wild", "landscape"] as const;
type Filter = (typeof filters)[number];
// Interleave categories so the preview represents the whole expedition archive.
const categories = [
  "landscape",
  "marcopolo",
  "ibex",
  "wild",
  "ibex-marcopolo",
  "yak",
  "wolf",
];
const buckets = categories.map((category) =>
  gallery.filter((image) => image.trophie_status === category),
);
const curatedImages = Array.from(
  { length: Math.max(...buckets.map((bucket) => bucket.length)) },
  (_, index) =>
    buckets.flatMap((bucket) => (bucket[index] ? [bucket[index]] : [])),
).flat();

export default function Gallery({
  limit,
  headingLevel = 2,
}: {
  limit?: number;
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const { t, i18n } = useTranslation();
  const ru = i18n.language.startsWith("ru");
  const [filter, setFilter] = useState<Filter>("all");
  const matching = curatedImages.filter(
    (image) =>
      filter === "all" ||
      (filter === "trophies"
        ? !["wild", "landscape"].includes(image.trophie_status)
        : image.trophie_status === filter),
  );
  const images = matching.slice(0, limit);
  const lightboxOptions = useMemo(
    () => ({
      Carousel: { infinite: false },
      l10n: {
        CLOSE: ru ? "Закрыть" : "Close",
        NEXT: ru ? "Следующее фото" : "Next photo",
        PREV: ru ? "Предыдущее фото" : "Previous photo",
      },
    }),
    [ru],
  );
  return (
    <section
      id="gallerySection"
      className="expedition-gallery"
      aria-labelledby="gallery-heading"
    >
      <div id="gallerySection2">
        <div className="archive-heading">
          <div>
            <p className="archive-eyebrow">
              <Camera size={16} aria-hidden="true" />
              {ru ? "Кадры экспедиций" : "From the field"}
            </p>
            <Heading id="gallery-heading">{t("Gallery.title")}</Heading>
          </div>
          <p className="archive-intro">
            {ru
              ? "Горные пейзажи, дикая природа и охотничьи трофеи — взгляните на Памир через фотографии наших экспедиций."
              : "Mountain landscapes, wildlife and hunting trophies. Explore the Pamirs through photographs from our expeditions."}
          </p>
        </div>
        <div className="archive-controls">
          <div
            className="archive-filters"
            role="group"
            aria-label={ru ? "Категории фотографий" : "Photo categories"}
          >
            {filters.map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                aria-controls="archive-grid"
                onClick={() => setFilter(value)}
              >
                {t(`Gallery.${value}`)}
              </button>
            ))}
          </div>
          <p
            className="archive-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {ru
              ? `Показано ${images.length} из ${matching.length}`
              : `${images.length} of ${matching.length} photos`}
          </p>
        </div>
        <Fancybox options={lightboxOptions}>
          <div className="archive-grid" id="archive-grid">
            {images.map((photo, index) => {
              const caption = t(`Gallery.categories.${photo.trophie_status}`, {
                defaultValue: photo.alt,
              });
              return (
                <a
                  key={photo.id}
                  className="archive-tile"
                  href={photo.fullscreen_src}
                  data-fancybox="expedition-gallery"
                  data-category={photo.trophie_status}
                  data-caption={caption}
                  aria-label={`${ru ? "Открыть фото" : "Open photo"}: ${caption} (${index + 1})`}
                >
                  <Image
                    src={photo.src}
                    alt={caption}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 700px) 100vw, (max-width: 1000px) 90vw, 800px"
                        : "(max-width: 700px) 100vw, (max-width: 1000px) 45vw, 400px"
                    }
                  />
                  <span className="archive-shade" aria-hidden="true" />
                  <span className="archive-caption">
                    <span>{caption}</span>
                    <span className="archive-expand">
                      <Expand size={17} aria-hidden="true" />
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </Fancybox>
        <div className="archive-bottom">
          <p>
            {ru
              ? "Нажмите на фотографию, чтобы рассмотреть её. В просмотре используйте стрелки; Escape закрывает окно."
              : "Select a photo to explore. Use arrow keys in the viewer; Escape closes it."}
          </p>
          {limit !== undefined && (
            <Link href={`/${ru ? "ru" : "en"}/gallery`}>
              {ru ? "Полная галерея экспедиций" : "Explore the full gallery"}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
