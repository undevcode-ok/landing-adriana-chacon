import Image from "next/image";
import { CATEGORIES } from "../data/categories.data";
import { Category } from "../types/workshop.types";

const pillColorMap: Record<string, string> = {
  coral:   "bg-[#F4845F]/90 border-[#F4845F] text-white",
  mint:    "bg-[#4EC5A0]/90 border-[#4EC5A0] text-white",
  lilac:   "bg-[#C5B8F0]/90 border-[#C5B8F0] text-[#2B1F1A]",
  default: "bg-white/20 border-white/40 text-white backdrop-blur-sm",
};

type Props = {
  activeCategory: Category;
  onSelectCategory: (id: string) => void;
  /** Background image URL — defaults to Unsplash painting photo */
  backgroundImageUrl?: string;
};

export function CategoryPanel({
  activeCategory,
  onSelectCategory,
  backgroundImageUrl,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-[18px] h-full min-h-[520px]">

      {/* Background image */}
      <Image
        src={backgroundImageUrl ?? "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=85"}
        alt="Taller de pintura"
        fill
        className="object-cover object-center"
        sizes="260px"
      />

      {/* Dark gradient overlay — heavier at bottom for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Content on top */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">

        {/* Top: eyebrow + title */}
        <div>
          <p className="text-[10px] font-black tracking-[0.14em] uppercase text-white/60 mb-2">
            Aprendé a tu ritmo
          </p>
          <h2 className="text-[2.1rem] font-black uppercase leading-[1] tracking-tighter text-white drop-shadow-md">
            TALLERES<br />&amp; <span className="italic text-[#4EC5A0]">CURSOS</span>
          </h2>
        </div>

        {/* Bottom: pills stacked vertically */}
        <div className="flex flex-col gap-[7px]">
          {CATEGORIES.map((cat) => {
            const colorKey = cat.color ?? "default";
            const isActive = cat.id === activeCategory.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`
                  w-full text-left border-[1.5px] rounded-[30px]
                  px-4 py-[8px] text-[11px] font-bold
                  transition-all duration-200 cursor-pointer
                  ${isActive
                    ? "bg-[#FFE47A] !border-[#2B1F1A] !text-[#2B1F1A] shadow-[2px_2px_0_rgba(0,0,0,0.3)]"
                    : pillColorMap[colorKey]
                  }
                `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}