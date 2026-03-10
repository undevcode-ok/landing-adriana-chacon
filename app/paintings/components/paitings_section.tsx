"use client";

import { useState } from "react";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { Painting } from "../types/paitings.types";
import { OrganicBg } from "./Organic_bg";
import { PaintingsCarousel } from "./Paiting_carousel";
import { PaintingModal } from "./Paiting_modal";

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
          className={`${inter.className} text-[#1DAB8E] font-bold tracking-wide text-sm mb-2 italic`}
        >
          Creaciones de nuestros alumnos
        </p>
        <h2
          className={`${barlow.className} text-[#1a1a1a] uppercase leading-none`}
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
        >
          El arte que nace
          <br />
          <span style={{ color: "#1DAB8E" }}>en el taller</span>
        </h2>
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