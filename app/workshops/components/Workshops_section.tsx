"use client";

import { useMemo } from "react";
import { WORKSHOPS } from "../data/workshop.data";
import { useActiveCategory } from "../hooks/use_active_category";
import { BlobBorder } from "./Blob_border";
import { CategoryPanel } from "./Categoy_panel";
import { WorkshopCarousel } from "./Workshop_carousel";

const BLOB_COLORS = ["#F9C8D4", "#FFE47A", "#A8E6CF", "#C5B8F0"];

type Props = {
  /** Optional custom background image for the left panel */
  backgroundImageUrl?: string;
};

export function WorkshopSection({ backgroundImageUrl }: Props) {
  const { activeCategory, setActiveCategoryById } = useActiveCategory();

  const workshopsToShow = useMemo(() => {
    if (activeCategory.id === "all") return WORKSHOPS;
    const filtered = WORKSHOPS.filter((w) => w.categoryId === activeCategory.id);
    return filtered.length > 0 ? filtered : WORKSHOPS;
  }, [activeCategory.id]);

  return (
    <section className="w-full bg-[#FAF6EC] py-12 px-6">
      <div className="max-w-[1440px] mx-auto">

        {/* BlobBorder outer shell */}
        <div className="relative rounded-[28px] overflow-hidden p-[12px]">
          <BlobBorder colors={BLOB_COLORS} />

          {/* Inner layout */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#F9C8D4]">
            <div className="grid grid-cols-[260px_1fr]">

              {/* LEFT: image + dark overlay + pills */}
              <CategoryPanel
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategoryById}
                backgroundImageUrl={backgroundImageUrl}
              />

              {/* RIGHT: cream carousel */}
              <div className="bg-[#FAF6EC] rounded-[14px] m-3 p-5">
                <WorkshopCarousel workshops={workshopsToShow} />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}