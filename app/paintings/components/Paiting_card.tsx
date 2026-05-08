import Image from "next/image";
import { Inter_Tight, Barlow_Condensed } from "next/font/google";
import { Painting } from "../types/paitings.types";

const inter = Inter_Tight({ subsets: ["latin"], weight: ["400", "600", "700"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["900"] });

interface Props {
  painting: Painting;
  onClick: () => void;
}

function BlobBorder({ colors }: { colors: string[] }) {
  const [c1, c2, c3, c4] = colors;
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="0"   cy="0"   rx="22" ry="22" fill={c1}/>
      <ellipse cx="50"  cy="0"   rx="28" ry="16" fill={c2}/>
      <ellipse cx="100" cy="0"   rx="22" ry="22" fill={c3}/>
      <ellipse cx="0"   cy="35"  rx="16" ry="20" fill={c2}/>
      <ellipse cx="0"   cy="65"  rx="16" ry="20" fill={c4}/>
      <ellipse cx="100" cy="35"  rx="16" ry="20" fill={c4}/>
      <ellipse cx="100" cy="65"  rx="16" ry="20" fill={c1}/>
      <ellipse cx="0"   cy="100" rx="22" ry="22" fill={c3}/>
      <ellipse cx="50"  cy="100" rx="28" ry="16" fill={c4}/>
      <ellipse cx="100" cy="100" rx="22" ry="22" fill={c2}/>
    </svg>
  );
}

export function PaintingCard({ painting, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="
        relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group
        transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl
        w-[160px] h-[220px]
        sm:w-[300px] sm:h-[400px]
      "
    >
      <BlobBorder colors={["#FFB3C1", "#A8D8EA", "#B5EAD7", "#FFDAC1"]} />
      <div className="absolute inset-[6px] sm:inset-[8px] rounded-xl overflow-hidden">
        <Image
          src={painting.src}
          alt={painting.author}
          fill
          className="object-cover scale-[1.04] transition-transform duration-500 group-hover:scale-[1.08]"
          sizes="(max-width: 640px) 160px, 300px"
        />

        {/* Overlay degradado */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%)" }}
        >
          <p
            className={`${barlow.className} text-white uppercase leading-none mb-1
              text-base sm:text-xl`}
          >
            {painting.course}
          </p>
          <p
            className={`${inter.className} text-white/75 font-semibold
              text-xs sm:text-sm`}
          >
            {painting.author}
          </p>
        </div>
      </div>
    </div>
  );
}