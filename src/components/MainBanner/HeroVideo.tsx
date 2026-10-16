"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import type { Locale } from "@/lib/navigation";

export default function HeroVideo({
  poster,
  locale,
}: {
  poster: string;
  locale: Locale;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const update = () =>
      setEnabled(!preference.matches && !connection?.saveData);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  if (!enabled) return null;
  const en = locale === "en";
  return (
    <>
      <video
        ref={video}
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setEnabled(false)}
      >
        <source src="/hero/herovideo.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className="hero-video-control"
        aria-label={
          playing
            ? en
              ? "Pause background video"
              : "Приостановить фоновое видео"
            : en
              ? "Play background video"
              : "Воспроизвести фоновое видео"
        }
        onClick={() => {
          const element = video.current;
          if (!element) return;
          if (element.paused)
            void element.play().catch(() => setPlaying(false));
          else element.pause();
        }}
      >
        {playing ? (
          <Pause size={15} aria-hidden="true" />
        ) : (
          <Play size={15} aria-hidden="true" />
        )}
        <span>
          {playing
            ? en
              ? "Pause video"
              : "Пауза"
            : en
              ? "Play video"
              : "Воспроизвести"}
        </span>
      </button>
    </>
  );
}
