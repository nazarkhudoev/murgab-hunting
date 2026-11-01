"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CarIcon,
  Mountain,
  Plane,
  Tent,
  Truck,
  X,
} from "lucide-react";
import Camp from "@/assets/photos/springscamp/spring-camp-05.jpg";
import type { Locale } from "@/lib/navigation";
import type { ExpeditionMapCopy } from "@/data/expedition-map";

// Artwork-space pixels, traced from the supplied PNG; these are not geographic coordinates.
const FLIGHT = "M 10 255 C 140 262 241 335 320 434";
const ROAD_TO_KHOROG =
  "M 320 434 C 342 443 367 443 377 460 C 386 479 420 477 435 490 C 453 507 421 526 433 541 C 443 555 482 553 514 564 C 541 572 540 590 557 600 C 581 616 618 604 649 589 C 676 580 698 580 702 558 C 704 538 718 530 749 530 C 791 528 840 535 865 548 C 888 560 889 579 866 594 C 846 607 822 615 825 631 C 829 651 878 687 911 701 C 899 712 876 708 858 723 L 833 725";
const ROAD_AFTER_KHOROG =
  " C 837 740 810 759 799 780 C 781 806 800 821 827 827 C 864 838 919 814 952 799 C 981 783 1002 773 1036 768 C 1082 761 1134 770 1171 765 C 1209 763 1233 740 1254 720 C 1263 710 1268 702 1271 695";
const ROAD = ROAD_TO_KHOROG + ROAD_AFTER_KHOROG;
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
  const [selected, setSelected] = useState<
    "camp" | "dushanbe" | "khorog" | "ram"
  >("camp");
  const location =
    selected === "dushanbe"
      ? {
          title: copy.dushanbe,
          body: copy.dushanbeBody,
          image: "/dushanbe.png",
          elevation: copy.dushanbeElevation,
        }
      : selected === "khorog"
        ? {
            title: copy.khorog,
            body: copy.khorogBody,
            image: "/khorog.png",
            elevation: copy.khorogElevation,
          }
        : selected === "ram"
          ? {
              title: copy.wildlifeTitle,
              body: copy.wildlifeBody,
              image: "/ram.png",
              elevation: null,
            }
          : null;

  useEffect(() => {
    const element = visual.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    // Measure the exact Khorog waypoint on the same curve used by the vehicle.
    const khorogPath = road.current?.cloneNode() as SVGPathElement | undefined;
    khorogPath?.setAttribute("d", ROAD_TO_KHOROG);
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
    setSelected("camp");
    dialog.current?.showModal();
    setOpen(true);
  }
  function openLocation(place: "dushanbe" | "khorog" | "ram") {
    setSelected(place);
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
              <circle cx="320" cy="434" r="17" />
              <circle cx="320" cy="434" r="5" />
            </g>
            <g className="map-anchor map-khorog">
              <circle cx="833" cy="725" r="14" />
              <circle cx="833" cy="725" r="4" />
            </g>
            <g
              ref={plane}
              className="map-moving-icon map-plane"
              transform="translate(320 434)"
            >
              <circle r="21" />
              <Plane x={-13} y={-13} width={26} height={26} />
            </g>
            <g
              ref={truck}
              className="map-moving-icon map-truck"
              transform="translate(1271 695)"
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
              transform="translate(350 355)"
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
              transform="translate(651 681)"
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
              transform="translate(1301 623)"
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
          {(["dushanbe", "khorog", "ram"] as const).map((place) => (
            <button
              key={place}
              type="button"
              className={`expedition-map-object expedition-map-object-${place}`}
              aria-label={
                place === "ram" ? copy.exploreHunts : `Discover ${copy[place]}`
              }
              aria-haspopup="dialog"
              aria-controls="expedition-camp-dialog"
              aria-expanded={open && selected === place}
              onClick={() => openLocation(place)}
            >
              <Image
                src={`/${place}.png`}
                alt=""
                fill
                sizes="(max-width: 600px) 50px, 150px"
              />
            </button>
          ))}
          <button
            ref={trigger}
            className="expedition-camp-marker"
            type="button"
            aria-label={copy.openCamp}
            aria-haspopup="dialog"
            aria-expanded={open && selected === "camp"}
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
          aria-label={location ? copy.closeLocation : copy.close}
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          <X size={20} aria-hidden="true" />
        </button>
        <div
          className={`expedition-camp-photo${location ? " expedition-location-photo" : ""}`}
        >
          <Image
            src={location ? location.image : Camp}
            alt={location ? location.title : copy.campAlt}
            fill
            sizes="(max-width: 600px) 100vw, 390px"
          />
        </div>
        <div className="expedition-camp-copy">
          <p className="eyebrow">{location ? copy.journeyDetail : copy.camp}</p>
          <h3 id="expedition-camp-title">
            {location ? location.title : copy.camp}
          </h3>
          <p id="expedition-camp-description">
            {location ? location.body : copy.campBody}
          </p>
          {location?.elevation && (
            <p className="expedition-location-elevation">
              {location.elevation}
            </p>
          )}
          {!location && (
            <ul>
              {copy.features.map((feature) => (
                <li key={feature}>
                  <Mountain size={15} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {(!location || selected === "ram") && (
            <Link
              href={`/${locale}/${selected === "ram" ? "hunting-packages" : "pamir-hunting-camp"}`}
              className="expedition-camp-link"
            >
              {selected === "ram" ? copy.exploreHunts : copy.explore}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          )}
        </div>
      </dialog>
    </>
  );
}
