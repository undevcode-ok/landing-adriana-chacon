"use client";

import { WORKSHOPS } from "../data/workshop.data";
import { BlobBorder } from "./Blob_border";
import { CategoryPanel } from "./Categoy_panel";


const BLOB_COLORS = ["#F9C8D4", "#FFE47A", "#A8E6CF", "#C5B8F0"];

type Props = {
  backgroundImageUrl?: string;
};

export function WorkshopSection({ backgroundImageUrl }: Props) {
  return (
    <section className="w-full bg-[#FAF6EC] py-12 px-6">
      <div className="max-w-[1440px] mx-auto">

        <div className="relative rounded-[28px] overflow-hidden p-[12px]">
          <BlobBorder colors={BLOB_COLORS} />

          <div className="relative rounded-[20px] overflow-hidden bg-[#F9C8D4]">
            <div className="grid grid-cols-[260px_1fr]">

              {/* LEFT: image with fade */}
              <CategoryPanel backgroundImageUrl={backgroundImageUrl} />

              {/* RIGHT: cream carousel */}
              <div className="bg-[#FAF6EC] rounded-[14px] m-3 p-5">
                {/*aqui va workshop carousel */}
                
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}