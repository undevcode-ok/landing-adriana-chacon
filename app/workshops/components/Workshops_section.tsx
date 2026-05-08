"use client";

import { CategoryPanel } from "./Categoy_panel";
import { WorkshopCarousel } from "./Workshop_carousel";
import { useActiveCategory } from "../hooks/use_active_category";

export function WorkshopSection() {
  const { activeCategory, setActiveCategoryById } = useActiveCategory();

  return (
    <section className="w-full bg-[#FAF6EC] py-8 px-4 sm:py-10 sm:px-6">
      <div className="max-w-[1400px] mx-auto lg:px-14">
        <div className="rounded-[28px] bg-[#fdcdc5] p-3 sm:p-4 shadow-sm flex flex-col">

          {/* Mobile / tablet: apilado vertical */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:hidden">
            <CategoryPanel
              activeCategory={activeCategory}
              onSelectAll={() => setActiveCategoryById("all")}
            />
            <div className="bg-[#FAF6EC] rounded-[18px] p-4 sm:p-5">
              <WorkshopCarousel
                activeCategory={activeCategory}
                setActiveCategoryById={setActiveCategoryById}
              />
            </div>
          </div>

          {/* Desktop: lado a lado */}
          <div className="hidden lg:grid grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr] gap-4 flex-1">
            <CategoryPanel
              activeCategory={activeCategory}
              onSelectAll={() => setActiveCategoryById("all")}
            />
            <div className="bg-[#FAF6EC] rounded-[18px] p-5 h-full">
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