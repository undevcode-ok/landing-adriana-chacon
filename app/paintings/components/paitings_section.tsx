"use client";

import { useState } from "react";
import { Barlow_Condensed, Inter_Tight, Pacifico } from "next/font/google";
import { Painting } from "../types/paitings.types";
import { OrganicBg } from "./Organic_bg";
import { PaintingsCarousel } from "./Paiting_carousel";
import { PaintingModal } from "./Paiting_modal";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"], // Pacifico solo tiene un peso
});

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["900"] });
const inter  = Inter_Tight({ subsets: ["latin"], weight: ["400", "600", "700"] });

export function Paintings() {
  const [selected, setSelected] = useState<Painting | null>(null);

  return (
    <section
      className="relative w-full h-full d-flex items-center overflow-hidden py-16 lg:py-20"
      style={{ background: "#e8f5ee" }}
    >
      <OrganicBg />

      {/* Título */}
      <div className="relative z-10 pt-20 text-center mb-12 px-6">
        <p
          className={`${pacifico.className} text-[#1DAB8E] font-bold tracking-wide text-4xl sm:text-7xl mb-2 italic`}
        >
          Obras de los Alumnos
        </p>
        
      </div>

      {/* Carousel */}
      <div className="relative z-10">
        <PaintingsCarousel onSelect={setSelected} />
      </div>

      {/* Modal */}
      {selected && (
        <PaintingModal painting={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}