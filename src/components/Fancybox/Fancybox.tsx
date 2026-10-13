"use client";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect, useRef, type ReactNode } from "react";

type Options = Parameters<typeof NativeFancybox.bind>[2];
export default function Fancybox({
  children,
  delegate = "[data-fancybox]",
  options,
}: {
  children: ReactNode;
  delegate?: string;
  options?: Options;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    NativeFancybox.bind(container, delegate, options);
    return () => {
      NativeFancybox.unbind(container);
    };
  }, [delegate, options]);
  return <div ref={containerRef}>{children}</div>;
}
