"use client";

import { useEffect, useRef, useState } from "react";
import { Leaf, Mountain, Users, Compass } from "lucide-react";
import type { Locale } from "@/lib/navigation";
import "./ExpeditionStats.css";

const statistics = [
  {
    value: 5,
    prefix: "",
    suffix: "",
    en: "Available Species",
    ru: "Доступных видов",
    icon: Compass,
  },
  {
    value: 500,
    prefix: "+",
    suffix: "",
    en: "Conservation Initiatives",
    ru: "Природоохранных инициатив",
    icon: Leaf,
  },
  {
    value: 1,
    prefix: "+",
    suffix: "k",
    en: "Satisfied clients",
    ru: "Довольных клиентов",
    icon: Users,
  },
  {
    value: 200,
    prefix: "+",
    suffix: "km²",
    en: "Managed Land",
    ru: "Управляемых территорий",
    icon: Mountain,
  },
];

export default function ExpeditionStats({ locale }: { locale: Locale }) {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(1);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setEntered(true);
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = Math.min((now - start) / 1600, 1);
          setProgress(1 - Math.pow(1 - elapsed, 3));
          if (elapsed < 1 && !reducedMotion.matches)
            frame = requestAnimationFrame(animate);
          else setProgress(1);
        };
        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.25 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={section}
      className={`expedition-stats${entered ? " stats-entered" : ""}`}
      aria-label={
        locale === "en"
          ? "Murgab Hunting in numbers"
          : "Murgab Hunting в цифрах"
      }
    >
      <dl className="stats-grid">
        {statistics.map(({ value, prefix, suffix, en, ru, icon: Icon }) => {
          const unit = suffix === "km²" && locale === "ru" ? "км²" : suffix;
          // Count clients as people throughout the animation, then compact to 1k.
          const animatedValue =
            suffix === "k" && progress < 1
              ? Math.round(progress * 1000)
              : Math.round(progress * value);
          return (
            <div className="stats-item" key={en}>
              <Icon
                className="stats-icon"
                size={21}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <dt>{locale === "en" ? en : ru}</dt>
              <dd>
                <span className="stats-accessible">
                  {prefix}
                  {value}
                  {unit}
                </span>
                <span aria-hidden="true" className="stats-number">
                  <span className="stats-prefix">{prefix}</span>
                  {animatedValue}
                  <span
                    className={`stats-unit${suffix === "km²" ? " stats-area" : ""}`}
                  >
                    {suffix === "k" && progress < 1 ? "" : unit}
                  </span>
                </span>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}

