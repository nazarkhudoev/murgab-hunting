"use client";
import { useEffect, useState, type ReactNode } from "react";

// Swiper mutates its DOM during initialization. Keep the server/first client
// render identical, then enhance the crawlable, native-scrolling photo links.
export default function HydratedCarousel({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: ReactNode;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready ? children : fallback;
}
