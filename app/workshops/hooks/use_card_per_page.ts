"use client";
import { useState, useEffect } from "react";

export function useCardsPerPage() {
  const [cards, setCards] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setCards(3); // xl+
      else if (window.innerWidth >= 1024) setCards(2); // lg
      else if (window.innerWidth >= 640) setCards(2);  // sm/tablet
      else setCards(1); // mobile
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cards;
}