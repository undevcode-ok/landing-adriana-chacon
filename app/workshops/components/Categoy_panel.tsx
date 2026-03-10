import Image from "next/image";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { Category } from "../types/workshop.types";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["700", "800"],
});

type Props = {
  activeCategory: Category;
  onSelectAll: () => void;
};

export function CategoryPanel({ activeCategory, onSelectAll }: Props) {
  const isAll = activeCategory.id === "all";

  return (
    <div className="relative overflow-hidden rounded-[18px] h-full min-h-[520px]">
      <Image
        src="/fade/artist2.png"
        alt="Persona pintando en el taller"
        fill
        className="object-cover h-full"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Título arriba */}
        <div>
          <p className="text-[10px] font-black tracking-[0.14em] uppercase text-black/70 mb-2 drop-shadow">
            Aprendé a tu ritmo
          </p>
          <h2
            className={`${barlow.className} text-[2.1rem] font-black uppercase leading-[1] tracking-tighter text-black drop-shadow-md`}
          >
            TALLERES
            <br />
            &amp; <span className="italic text-[#4EC5A0]">CURSOS</span>
          </h2>
        </div>

        {/* Botón abajo */}
        <div className="flex justify-center mb-4">
          <button
            onClick={onSelectAll}
            className={`${interTight.className} px-5 py-2.5 rounded-full text-sm font-black
              border-2 transition-all duration-200 cursor-pointer shadow-md
              ${isAll
                ? "bg-[#4EC5A0] text-white border-[#4EC5A0]"
                : "bg-white/90 text-black border-white hover:bg-amber-200 hover:border-amber-200"
              }`}
          >
            Todos los cursos
          </button>
        </div>
      </div>
    </div>
  );
}