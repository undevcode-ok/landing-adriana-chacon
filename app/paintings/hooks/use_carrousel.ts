"use client";

import { useEffect, useRef, useState } from "react";
import { PAINTINGS, CARD_WIDTH, CARD_GAP } from "../data/paitings.data";

const MOBILE_CARD_WIDTH = 160; // mismo que Hero ScrollRow en mobile
const SPEED = 0.5; // px por frame

export function useCarousel() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const posRef    = useRef(0);
  const rafRef    = useRef<number>(0);
  const pausedRef = useRef(false);

  // Detecta si estamos en mobile (< 640px) para usar el ancho correcto
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth < 640 ? MOBILE_CARD_WIDTH : CARD_WIDTH;
      setCardWidth(w);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const totalWidth = PAINTINGS.length * (cardWidth + CARD_GAP);

    // Resetea la posición al cambiar el tamaño para evitar saltos
    posRef.current = 0;

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
  }, [cardWidth]);

  const pause  = () => { pausedRef.current = true;  };
  const resume = () => { pausedRef.current = false; };

  return { trackRef, pause, resume };
}