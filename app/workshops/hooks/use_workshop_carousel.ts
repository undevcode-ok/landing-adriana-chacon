"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Workshop } from "../types/workshop.types";

const CARDS_PER_PAGE = 3;
const AUTO_DELAY_MS  = 6500; // increased from 4000 — feels more comfortable

type UseWorkshopCarouselReturn = {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
  goNext: () => void;
  goPrev: () => void;
  pauseAuto: () => void;
  resumeAuto: () => void;
};

export function useWorkshopCarousel(workshops: Workshop[]): UseWorkshopCarouselReturn {
  const totalPages = Math.ceil(workshops.length / CARDS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);

  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(((page % totalPages) + totalPages) % totalPages);
    },
    [totalPages]
  );

  const goNext = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
  const goPrev = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage]);

  const scheduleNext = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!pausedRef.current) {
      timerRef.current = setTimeout(() => {
        setCurrentPage((p) => ((p + 1) % totalPages));
      }, AUTO_DELAY_MS);
    }
  }, [totalPages]);

  useEffect(() => {
    scheduleNext();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [currentPage, scheduleNext]);

  const pauseAuto = useCallback(() => {
    pausedRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const resumeAuto = useCallback(() => {
    pausedRef.current = false;
    scheduleNext();
  }, [scheduleNext]);

  return { currentPage, totalPages, goToPage, goNext, goPrev, pauseAuto, resumeAuto };
}

export { CARDS_PER_PAGE };