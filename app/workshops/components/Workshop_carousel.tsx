"use client";

import { Inter_Tight } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { WORKSHOPS } from "../data/workshop.data";
import { CATEGORIES } from "../data/categories.data";
import { useWorkshopCarousel, CARDS_PER_PAGE } from "../hooks/use_workshop_carousel";
import { useActiveCategory } from "../hooks/use_active_category";
import { WorkshopCard } from "./Workshop_card";
import { CarouselNav } from "./Carousel_nav";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export function WorkshopCarousel() {
  const { activeCategory, setActiveCategoryById } = useActiveCategory();

  const filtered =
    activeCategory.id === "all"
      ? WORKSHOPS
      : WORKSHOPS.filter((w) => w.categoryId === activeCategory.id);

  const { currentPage, totalPages, goToPage, goNext, goPrev, pauseAuto, resumeAuto } =
    useWorkshopCarousel(filtered);

  // ── FIX: reset to page 0 whenever the category changes ──
  const prevCatRef = useRef(activeCategory.id);
  useEffect(() => {
    if (prevCatRef.current !== activeCategory.id) {
      prevCatRef.current = activeCategory.id;
      goToPage(0);
    }
  }, [activeCategory.id, goToPage]);

  const start   = currentPage * CARDS_PER_PAGE;
  const visible = filtered.slice(start, start + CARDS_PER_PAGE);

  // ── Smooth transition state ──
  const [displayedCards, setDisplayedCards] = useState(visible);
  const [phase, setPhase]                   = useState<"idle" | "exit" | "enter">("idle");
  const [slideDir, setSlideDir]             = useState<"left" | "right">("left");
  const prevPageRef                         = useRef(currentPage);
  const prevCatAnimRef                      = useRef(activeCategory.id);

  useEffect(() => {
    const catChanged = prevCatAnimRef.current !== activeCategory.id;
    prevCatAnimRef.current = activeCategory.id;

    if (catChanged) {
      // instant swap on category change — no animation needed
      setDisplayedCards(visible);
      setPhase("enter");
      const t = setTimeout(() => setPhase("idle"), 300);
      return () => clearTimeout(t);
    }

    const dir = currentPage >= prevPageRef.current ? "left" : "right";
    prevPageRef.current = currentPage;
    setSlideDir(dir);

    // Phase 1 — exit
    setPhase("exit");
    const t1 = setTimeout(() => {
      // Phase 2 — swap cards + enter
      setDisplayedCards(visible);
      setPhase("enter");
    }, 180);
    const t2 = setTimeout(() => setPhase("idle"), 180 + 300);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, activeCategory.id]);

  return (
    <>
      <style>{`
        .ws-exit-left   { animation: wsExitLeft   0.18s ease forwards; }
        .ws-exit-right  { animation: wsExitRight  0.18s ease forwards; }
        .ws-enter-left  { animation: wsEnterLeft  0.28s cubic-bezier(0.25,0.46,0.45,0.94) both; }
        .ws-enter-right { animation: wsEnterRight 0.28s cubic-bezier(0.25,0.46,0.45,0.94) both; }

        @keyframes wsExitLeft   { to { opacity:0; transform:translateX(-20px); } }
        @keyframes wsExitRight  { to { opacity:0; transform:translateX(20px);  } }
        @keyframes wsEnterLeft  { from { opacity:0; transform:translateX(20px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes wsEnterRight { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
      `}</style>

      <div
        className={`${interTight.className} flex flex-col gap-4 h-full`}
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
      >
        {/* ── Category pills ── */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryById(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border-none cursor-pointer
                transition-all duration-200 ${
                  activeCategory.id === cat.id
                    ? "bg-[#2B1F1A] text-white shadow-sm"
                    : "bg-[#E8DDD5] text-[#2B1F1A] hover:bg-[#D0C4B0]"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Cards grid ── */}
        {displayedCards.length > 0 ? (
          <div
            className={`grid grid-cols-3 gap-4 flex-1 ${
              phase === "exit"
                ? slideDir === "left" ? "ws-exit-left" : "ws-exit-right"
                : phase === "enter"
                ? slideDir === "left" ? "ws-enter-left" : "ws-enter-right"
                : ""
            }`}
          >
            {displayedCards.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
            {Array.from({ length: CARDS_PER_PAGE - displayedCards.length }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#9A8A7A] text-sm font-semibold">
              No hay talleres en esta categoría por el momento.
            </p>
          </div>
        )}

        {/* ── Dots + Arrows ── */}
        {totalPages > 1 && (
          <CarouselNav
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={goPrev}
            onNext={goNext}
            onGoToPage={goToPage}
          />
        )}
      </div>
    </>
  );
}