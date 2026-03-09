"use client";

import { useState, useEffect } from "react";
import { Barlow_Condensed } from "next/font/google";
import { BlobBorder } from "./Blob_border";
import { CategoryPanel } from "./Categoy_panel";
import { WorkshopCarousel } from "./Workshop_carousel";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["900"] });

const BLOB_COLORS = ["#F9C8D4", "#FFE47A", "#A8E6CF", "#C5B8F0"];

function getCardsPerPage() {
  const w = window.innerWidth;
  if (w < 640)  return 1;
  if (w < 1280) return 2;
  return 3;
}

type Props = {
  backgroundImageUrl?: string;
};

export function WorkshopSection({ backgroundImageUrl }: Props) {
  // ── Mount flag: evita cualquier mismatch SSR/cliente ──
  const [mounted, setMounted] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(1); // valor neutro para SSR

  useEffect(() => {
    setCardsPerPage(getCardsPerPage());
    setMounted(true);

    const update = () => setCardsPerPage(getCardsPerPage());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="w-full bg-[#FAF6EC] py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-[28px] overflow-hidden p-[10px] sm:p-[12px]">
          <BlobBorder colors={BLOB_COLORS} />

          {/* ══════════════════════════════════════════
              MOBILE + TABLET  (< 1024px) — sin panel
          ══════════════════════════════════════════ */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#F9C8D4] lg:hidden">
            <div className="flex items-center gap-3 px-4 sm:px-5 pt-5 pb-2">
              <div
                className={`${barlow.className} uppercase leading-none text-[#2B1F1A]`}
                style={{ fontSize: "clamp(1.3rem, 4vw, 1.8rem)" }}
              >
                TALLERES &amp;&nbsp;
                <span className="text-[#4EC5A0] italic">CURSOS</span>
              </div>
            </div>
            <div className="bg-[#FAF6EC] rounded-[14px] m-3 p-4 sm:p-5 min-h-[200px]">
              {mounted && <WorkshopCarousel cardsPerPage={cardsPerPage} />}
            </div>
          </div>

          {/* ══════════════════════════════════════════
              LAPTOP 14"  (1024–1280px) — panel 220px
          ══════════════════════════════════════════ */}
          <div
            className="relative rounded-[20px] overflow-hidden bg-[#F9C8D4] hidden lg:grid xl:hidden"
            style={{ gridTemplateColumns: "220px 1fr" }}
          >
            <CategoryPanel backgroundImageUrl={backgroundImageUrl} />
            <div className="bg-[#FAF6EC] rounded-[14px] m-3 p-4 min-h-[200px]">
              {mounted && <WorkshopCarousel cardsPerPage={2} />}
            </div>
          </div>

          {/* ══════════════════════════════════════════
              LAPTOP 15.6" + DESKTOP  (1280px+) — panel 260px
          ══════════════════════════════════════════ */}
          <div
            className="relative rounded-[20px] overflow-hidden bg-[#F9C8D4] hidden xl:grid"
            style={{ gridTemplateColumns: "260px 1fr" }}
          >
            <CategoryPanel backgroundImageUrl={backgroundImageUrl} />
            <div className="bg-[#FAF6EC] rounded-[14px] m-3 p-5 min-h-[200px]">
              {mounted && <WorkshopCarousel cardsPerPage={3} />}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}