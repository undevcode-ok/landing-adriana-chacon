import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
});

type Props = {
  /** Background image URL — defaults to person painting */
  backgroundImageUrl?: string;
};

export function CategoryPanel({ backgroundImageUrl }: Props) {
  return (
    <div className="relative overflow-hidden rounded-[18px] h-full min-h-[520px]">
      {/* Background image — person painting */}
      <Image
        src={"/fade/artist2.png"}
        alt="Persona pintando en el taller"
        fill
        className="object-cover h-full 
    "
      />

      {/* Top fade — blends into the panel background */}

      {/* Content on top */}
      <div className="absolute inset-0 flex flex-col justify-start p-6">
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
    </div>
  );
}
