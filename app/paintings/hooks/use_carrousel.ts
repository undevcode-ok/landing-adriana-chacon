"use client";

import { useEffect, useRef } from "react";
import { PAINTINGS, CARD_WIDTH, CARD_GAP } from "../data/paitings.data";

const SPEED = 0.5; // px por frame

export function useCarousel() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const posRef    = useRef(0);
  const rafRef    = useRef<number>(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const totalWidth = PAINTINGS.length * (CARD_WIDTH + CARD_GAP);

    const animate = () => {
      if (!pausedRef.current && trackRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= totalWidth) posRef.current = 0;
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const pause  = () => { pausedRef.current = true;  };
  const resume = () => { pausedRef.current = false; };

  return { trackRef, pause, resume };
}