"use client";
import { useState, useCallback } from "react";

const VISIBLE = 3; // cards visible at once

export function useCarousel(total: number) {
  const [index, setIndex] = useState(0);

  const maxIndex = total - VISIBLE;

  const prev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => Math.min(i + 1, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback((i: number) => {
    setIndex(Math.min(Math.max(i, 0), maxIndex));
  }, [maxIndex]);

  return { index, prev, next, goTo, maxIndex, visible: VISIBLE };
}