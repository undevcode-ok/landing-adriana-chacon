"use client";
import { useState, useRef, useEffect } from "react";

export function useQuoteExpand(quote: string) {
  const [expanded, setExpanded] = useState(false);
  const [needsExpand, setNeedsExpand] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setExpanded(false);
    setNeedsExpand(false);

    const raf = requestAnimationFrame(() => {
      if (ref.current) {
        setNeedsExpand(ref.current.scrollHeight > ref.current.clientHeight + 2);
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [quote]);

  const toggle = () => setExpanded((prev) => !prev);

  return { expanded, toggle, needsExpand, ref };
}