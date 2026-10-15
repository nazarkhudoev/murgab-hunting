"use client";
import { track } from "@vercel/analytics";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsEvents() {
  const pathname = usePathname();
  useEffect(() => {
    const route = pathname.replace(/^\/(en|ru)/, "");
    if (
      [
        "/marco-polo-sheep-hunting",
        "/pamir-ibex-hunting",
        "/argali-brukey",
        "/yak",
        "/wolf",
      ].includes(route)
    )
      track("hunt_page_view", { route });
  }, [pathname]);
  useEffect(() => {
    function click(event: MouseEvent) {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a")
          : null;
      if (!target) return;
      if (target.dataset.track)
        track(target.dataset.track, {
          ...(target.dataset.species
            ? { species: target.dataset.species }
            : {}),
        });
      else if (target.getAttribute("href")?.startsWith("mailto:"))
        track("email_click");
      else if (target.getAttribute("href")?.startsWith("tel:"))
        track("phone_click");
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}
