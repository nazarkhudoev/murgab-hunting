"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CarIcon, Mountain, Plane, Tent, Truck, X } from "lucide-react";
import Camp from "@/assets/photos/springscamp/spring-camp-05.jpg";
import type { Locale } from "@/lib/navigation";
import type { ExpeditionMapCopy } from "@/data/expedition-map";

// Artwork-space pixels, traced from the supplied PNG; these are not geographic coordinates.
const FLIGHT = "M 10 134 C 80 143 102 174 137 186 S 308 215 395 286";
const ROAD =
  "M 395 286 L 414 316 C 424 348 474 330 506 351 S 502 411 548 410 S 567 436 616 427 S 713 398 751 411 S 800 433 790 447 S 767 484 792 483 S 826 486 815 509 L 805 532 C 800 558 767 562 750 589 S 699 655 717 689 S 744 719 776 712 S 834 700 856 685 S 913 697 938 683 S 969 655 1001 658 S 1036 653 1072 644 S 1127 645 1163 640 S 1212 633 1240 639 S 1298 627 1311 599";

export default function ExpeditionMapCanvas({
  locale,
  copy,
}: {
  locale: Locale;
  copy: ExpeditionMapCopy;
}) {
  const visual = useRef<HTMLDivElement>(null);
  const flight = useRef<SVGPathElement>(null);
  const road = useRef<SVGPathElement>(null);
  const plane = useRef<SVGGElement>(null);
  const truck = useRef<SVGGElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const element = visual.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    // Measure the exact Khorog waypoint on the same curve used by the vehicle.
    const khorogPath = road.current?.cloneNode() as SVGPathElement | undefined;
    khorogPath?.setAttribute("d", ROAD.slice(0, ROAD.indexOf(" C 800")));
    const khorogProgress =
      khorogPath && road.current
        ? khorogPath.getTotalLength() / road.current.getTotalLength()
        : 1;
    const render = (progress: number) => {
      const flightProgress = Math.min(progress / 0.22, 1);
      const roadProgress = Math.max(0, Math.min((progress - 0.22) / 0.78, 1));
      element.style.setProperty("--flight-progress", String(flightProgress));
      element.style.setProperty("--road-progress", String(roadProgress));
      element.style.setProperty("--camera-scale", String(1 + progress * 0.012));
      element.dataset.dushanbeArrived = String(flightProgress >= 1);
      element.dataset.khorogArrived = String(roadProgress >= khorogProgress);
      element.dataset.campArrived = String(roadProgress >= 1);
      element.dataset.stage =
        progress < 0.22
          ? "arrival"
          : roadProgress < 0.45
            ? "road"
            : roadProgress < 0.8
              ? "pamirs"
              : "camp";
      for (const [path, icon, value] of [
        [flight.current, plane.current, flightProgress],
        [road.current, truck.current, roadProgress],
      ] as const) {
        if (!path || !icon) continue;
        const point = path.getPointAtLength(path.getTotalLength() * value);
        icon.setAttribute("transform", `translate(${point.x} ${point.y})`);
      }
    };
    const finish = () => {
      cancelAnimationFrame(frame);
      render(1);
      element.dataset.motion = "complete";
    };
    if (motion.matches || !("IntersectionObserver" in window)) {
      finish();
      return;
    }
    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer?.disconnect();
        element.dataset.motion = "playing";
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / 8500, 1);
          render(progress);
          if (progress < 1 && !motion.matches)
            frame = requestAnimationFrame(animate);
          else finish();
        };
        render(0);
        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.2 },
    );
    observer.observe(element);
    const onMotionChange = () => {
      if (motion.matches) {
        observer?.disconnect();
        finish();
      }
    };
    motion.addEventListener("change", onMotionChange);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  function openCamp() {
    dialog.current?.showModal();
    setOpen(true);
  }
  return (
    <>
      <div
        className="expedition-map-visual"
        ref={visual}
        data-stage="camp"
        data-dushanbe-arrived="true"
        data-khorog-arrived="true"
        data-camp-arrived="true"
      >
        <div className="expedition-map-stage">
          <Image
            src="/tajikistan_map.png"
            alt={copy.alt}
            width={1604}
            height={981}
            sizes="(max-width: 1200px) 95vw, 1160px"
            className="expedition-map-image"
          />
          <svg
            className="expedition-map-overlay"
            viewBox="0 0 1604 981"
            fill="none"
            aria-hidden="true"
          >
            <path d={FLIGHT} className="map-route-base map-flight-base" />
            <path d={ROAD} className="map-route-base" />
            <path
              ref={flight}
              d={FLIGHT}
              pathLength={1}
              className="map-route-active map-flight"
            />
            <path
              ref={road}
              d={ROAD}
              pathLength={1}
              className="map-route-active map-road"
            />
            <g className="map-anchor map-dushanbe">
              <circle cx="395" cy="286" r="17" />
              <circle cx="395" cy="286" r="5" />
            </g>
            <g className="map-anchor map-khorog">
              <circle cx="805" cy="532" r="14" />
              <circle cx="805" cy="532" r="4" />
            </g>
            <g
              ref={plane}
              className="map-moving-icon map-plane"
              transform="translate(395 286)"
            >
              <circle r="21" />
              <Plane x={-13} y={-13} width={26} height={26} />
            </g>
            <g
              ref={truck}
              className="map-moving-icon map-truck"
              transform="translate(1311 599)"
            >
              <circle r="22" />
              <CarIcon x={-14} y={-14} width={28} height={28} />
            </g>
            <g className="map-highway">
              <rect x="912" y="741" width="220" height="39" rx="19" />
              <text x="1022" y="766" textAnchor="middle">
                {copy.highway.toUpperCase()}
              </text>
            </g>
            {/* Labels remain separate from the supplied terrain artwork. */}
            <g
              className="map-stop-label map-arrival-label map-arrival-dushanbe"
              transform="translate(433 263)"
            >
              <rect width="205" height="69" rx="8" />
              <g>
                <text x="12" y="27">
                  {copy.dushanbe}
                </text>
                <text className="map-elevation" x="12" y="52">
                  {copy.dushanbeElevation}
                </text>
              </g>
            </g>
            <g
              className="map-stop-label map-arrival-label map-arrival-khorog"
              transform="translate(646 487)"
            >
              <rect width="145" height="69" rx="8" />
              <g>
                <text x="10" y="27">
                  {copy.khorog}
                </text>
                <text className="map-elevation" x="10" y="52">
                  {copy.khorogElevation}
                </text>
              </g>
            </g>
            <g
              className="map-stop-label map-arrival-label map-arrival-camp"
              transform="translate(1343 562)"
            >
              <rect width="255" height="73" rx="8" />
              <g>
                <text x="12" y="29">
                  {copy.camp}
                </text>
                <text className="map-elevation" x="12" y="54">
                  {copy.campElevation}
                </text>
              </g>
            </g>
          </svg>
          <button
            ref={trigger}
            className="expedition-camp-marker"
            type="button"
            aria-label={copy.openCamp}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="expedition-camp-dialog"
            onClick={openCamp}
          >
            <Tent size={25} strokeWidth={1.4} aria-hidden="true" />
          </button>
        </div>
        <span className="expedition-map-corner" aria-hidden="true">
          Murgab Hunting · The Eastern Pamirs
        </span>
      </div>
      <div className="expedition-map-footer">
        <ol className="expedition-map-stops" aria-label={copy.title}>
          {[copy.dushanbe, copy.khorog, copy.highway, copy.camp].map(
            (stop, i) => (
              <li key={stop}>
                <span aria-hidden="true">0{i + 1}</span>
                <span className="expedition-map-stop-copy">
                  {stop}
                  {i !== 2 && (
                    <small>
                      {
                        [
                          copy.dushanbeElevation,
                          copy.khorogElevation,
                          "",
                          copy.campElevation,
                        ][i]
                      }
                    </small>
                  )}
                </span>
              </li>
            ),
          )}
        </ol>
        <button
          type="button"
          className="expedition-map-discover"
          onClick={openCamp}
        >
          <Tent size={18} aria-hidden="true" />
          {copy.openCamp}
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </div>
      <p className="expedition-map-note">{copy.note}</p>
      <dialog
        ref={dialog}
        id="expedition-camp-dialog"
        className="expedition-camp-card"
        aria-labelledby="expedition-camp-title"
        aria-describedby="expedition-camp-description"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            dialog.current?.close();
        }}
      >
        <button
          type="button"
          className="expedition-camp-close"
          aria-label={copy.close}
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          <X size={20} aria-hidden="true" />
        </button>
        <div className="expedition-camp-photo">
          <Image
            src={Camp}
            alt={copy.campAlt}
            fill
            sizes="(max-width: 600px) 100vw, 390px"
          />
        </div>
        <div className="expedition-camp-copy">
          <p className="eyebrow">{copy.camp}</p>
          <h3 id="expedition-camp-title">{copy.camp}</h3>
          <p id="expedition-camp-description">{copy.campBody}</p>
          <ul>
            {copy.features.map((feature) => (
              <li key={feature}>
                <Mountain size={15} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href={`/${locale}/pamir-hunting-camp`}
            className="expedition-camp-link"
          >
            {copy.explore}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </dialog>
    </>
  );
}
