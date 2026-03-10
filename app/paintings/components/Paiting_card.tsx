import Image from "next/image";
import { Inter_Tight } from "next/font/google";
import { Painting } from "../types/paitings.types";
import { CARD_WIDTH, CARD_HEIGHT } from "../data/paitings.data";

const inter = Inter_Tight({ subsets: ["latin"], weight: ["400", "600", "700"] });

interface Props {
  painting: Painting;
  onClick:  () => void;
}

export function PaintingCard({ painting, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group
        transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
    >
      <Image
        src={painting.src}
        alt={painting.author}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="220px"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
        <p className={`${inter.className} text-white text-sm font-bold opacity-0 group-hover:opacity-100
          transition-opacity duration-300 translate-y-2 group-hover:translate-y-0`}>
          {painting.author}
        </p>
      </div>
    </div>
  );
}