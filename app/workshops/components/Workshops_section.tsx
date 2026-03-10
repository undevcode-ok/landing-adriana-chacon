"use client";

import { CategoryPanel } from "./Categoy_panel";
import { WorkshopCarousel } from "./Workshop_carousel";
import { useActiveCategory } from "../hooks/use_active_category";

export function WorkshopSection() {
  const { activeCategory, setActiveCategoryById } = useActiveCategory();

  return (
    <section className="w-full h-full flex justify-center items-center bg-[#FAF6EC] py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div
          className="rounded-[28px] bg-[#fdcdc5] p-4 shadow-sm min-h-[500px]"
        >
          <div className="grid grid-cols-[260px_1fr] gap-4 h-full">
            <CategoryPanel
              activeCategory={activeCategory}
              onSelectAll={() => setActiveCategoryById("all")}
            />

            <div className="bg-[#FAF6EC] rounded-[18px] p-5">
              <WorkshopCarousel
                activeCategory={activeCategory}
                setActiveCategoryById={setActiveCategoryById}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
