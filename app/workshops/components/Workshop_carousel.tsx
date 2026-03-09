"use client";

import { useRef } from "react";
import { Workshop } from "../types/workshop.types";
import { useWorkshopCarousel, CARDS_PER_PAGE } from "../hooks/use_workshop_carousel";
import { WorkshopCard } from "./Workshop_card";
import { CarouselNav } from "./Carousel_nav";

type Props = {
  workshops: Workshop[];
};

export function WorkshopCarousel({ workshops }: Props) {
  const { currentPage, totalPages, goToPage, goNext, goPrev, pauseAuto, resumeAuto } =
    useWorkshopCarousel(workshops);

  const trackRef = useRef<HTMLDivElement>(null);

  // Each "page" shifts by (100 / totalPages * currentPage) % of the total track width
  // Track width = totalPages * 100% of viewport, so offset = currentPage * (100 / totalPages)%
  const translateX = currentPage * (100 / totalPages);

  return (
    <div className="flex flex-col gap-4 h-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[13px] font-black uppercase tracking-tight text-[#2B1F1A]">
          📅 PRÓXIMOS TALLERES &amp; EVENTOS
        </h3>
        <a
          href="#"
          className="
            bg-[#2B1F1A] text-[#FAF6EC]
            px-4 py-2 rounded-[30px]
            text-[11px] font-black uppercase tracking-wide
            transition-all duration-200
            hover:bg-[#4EC5A0] hover:text-[#2B1F1A]
          "
        >
          VER EL CALENDARIO
        </a>
      </div>

      {/* Slide viewport */}
      <div
        className="overflow-hidden flex-1"
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
      >
        {/*
          Track holds ALL cards in a single row.
          Width = totalPages * 100% so each page fills the viewport exactly.
          We translate by (currentPage / totalPages * 100)% of the track width.
        */}
        <div
          ref={trackRef}
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${translateX}%)`,
          }}
        >
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="px-[6px]"
              style={{ width: `${100 / (totalPages * CARDS_PER_PAGE) * 100}%` }}
            >
              <WorkshopCard workshop={workshop} />
            </div>
          ))}
        </div>
      </div>

      {/* Nav — dots + arrows */}
      <CarouselNav
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={goPrev}
        onNext={goNext}
        onGoToPage={goToPage}
      />

    </div>
  );
}