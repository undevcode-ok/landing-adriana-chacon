"use client";

import { Painting } from "../types/paitings.types";
import { PAINTINGS, CARD_GAP } from "../data/paitings.data";
import { PaintingCard } from "./Paiting_card";
import { useCarousel } from "../hooks/use_carrousel";

interface Props {
  onSelect: (p: Painting) => void;
}

export function PaintingsCarousel({ onSelect }: Props) {
  const { trackRef, pause, resume } = useCarousel();
  const doubled = [...PAINTINGS, ...PAINTINGS];

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ gap: CARD_GAP, width: "max-content" }}
      >
        {doubled.map((p, i) => (
          <PaintingCard key={i} painting={p} onClick={() => onSelect(p)} />
        ))}
      </div>
    </div>
  );
}