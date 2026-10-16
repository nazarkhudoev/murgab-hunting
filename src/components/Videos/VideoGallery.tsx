"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import type { Locale } from "@/lib/navigation";
import type { YouTubeVideo } from "@/types/youtube";

export default function VideoGallery({
  videos,
  locale,
}: {
  videos: YouTubeVideo[];
  locale: Locale;
}) {
  const [active, setActive] = useState<YouTubeVideo | null>(null);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement | null>(null);
  const en = locale === "en";
  useEffect(() => {
    if (!active || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [active]);
  return (
    <>
      <div className="youtube-video-grid">
        {videos.map((video) => (
          <article className="youtube-video-card" key={video.id}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${en ? "Play" : "Смотреть"}: ${video.title}`}
              onClick={(event) => {
                event.preventDefault();
                trigger.current = event.currentTarget;
                setActive(video);
              }}
            >
              <div className="youtube-thumbnail">
                {!failedImages.includes(video.id) && (
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 380px"
                    onError={() =>
                      setFailedImages((current) => [...current, video.id])
                    }
                  />
                )}
                <span className="youtube-thumbnail-shade" aria-hidden="true" />
                <span className="youtube-play" aria-hidden="true">
                  <Play size={24} fill="currentColor" strokeWidth={1.4} />
                </span>
              </div>
              <h3>{video.title}</h3>
            </a>
          </article>
        ))}
      </div>
      {active && (
        <dialog
          ref={dialog}
          className="youtube-modal"
          aria-labelledby="youtube-modal-title"
          onCancel={(event) => {
            event.preventDefault();
            setActive(null);
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="youtube-modal-panel">
            <div className="youtube-modal-heading">
              <h3 id="youtube-modal-title">{active.title}</h3>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label={en ? "Close video" : "Закрыть видео"}
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>
            <div className="youtube-player">
              <iframe
                key={active.id}
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
                title={active.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
