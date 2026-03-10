"use client";
import Image from "next/image";
import { FIESTAS_BOTTOM_LINKS } from "../../data/nav.data";
import { BottomLinks } from "./Links_bottom";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
});

function BlobBorder({ colors }: { colors: string[] }) {
  const [c1, c2, c3, c4] = colors;
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="0" cy="0" rx="22" ry="22" fill={c1} />
      <ellipse cx="50" cy="0" rx="28" ry="16" fill={c2} />
      <ellipse cx="100" cy="0" rx="22" ry="22" fill={c3} />
      <ellipse cx="0" cy="35" rx="16" ry="20" fill={c2} />
      <ellipse cx="0" cy="65" rx="16" ry="20" fill={c4} />
      <ellipse cx="100" cy="35" rx="16" ry="20" fill={c4} />
      <ellipse cx="100" cy="65" rx="16" ry="20" fill={c1} />
      <ellipse cx="0" cy="100" rx="22" ry="22" fill={c3} />
      <ellipse cx="50" cy="100" rx="28" ry="16" fill={c4} />
      <ellipse cx="100" cy="100" rx="22" ry="22" fill={c2} />
    </svg>
  );
}

/* ── Foto de la artista ── */
function PhotoCard() {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden min-h-[300px] sm:min-h-[340px] lg:min-h-[420px]"
      style={{ background: "#f0f0f0" }}
    >
      <BlobBorder colors={["#FFB3C1", "#A8D8EA", "#B5EAD7", "#FFDAC1"]} />
      <div className="absolute inset-[10px] rounded-[16px] overflow-hidden">
        <Image
          src="/profile/profile.webp"
          alt="Adriana Chacón"
          fill
          className="object-cover scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
        />
      </div>
    </div>
  );
}

/* ── Bio de la artista ── */
function BioCard() {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden min-h-[300px] sm:min-h-[340px] lg:min-h-[420px]"
      style={{ background: "#f0f0f0" }}
    >
      <BlobBorder colors={["#B5EAD7", "#FFDAC1", "#FFB3C1", "#A8D8EA"]} />
      <div className="absolute inset-[10px] rounded-[16px] bg-[#d3f0e8] flex flex-col justify-between p-5 lg:p-7 overflow-hidden gap-4">
        {/* Nombre */}
        <div>
          <h2
            className={`${barlow.className} text-[#1a3a2a] uppercase leading-none text-3xl lg:text-5xl`}
          >
            Adriana
            <br />
            Chacón
          </h2>
          <p
            className={`${interTight.className} text-[#2a6a4a] font-semibold text-sm mt-1`}
          >
            Artista Plástica · Docente
          </p>
        </div>

        {/* Bio */}
        <p
          className={`${interTight.className} text-[#1a3a2a] text-sm lg:text-base leading-relaxed`}
        >
          Nací en Avellaneda, en una hermosa familia. A los 4 años, mi papá puso
          por primera vez un lápiz en mis manos y comenzó a enseñarme los
          primeros trazos de algo que nunca me iba a abandonar... la pasión por
          el dibujo y la pintura.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["Pintura", "Música", "Literatura", "Cine", "Familia"].map((tag) => (
            <span
              key={tag}
              className={`${interTight.className} text-xs font-bold px-3 py-1 rounded-full bg-[#a8d8c0] text-[#1a3a2a] hover:text-white hover:bg-[#0a3737]`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Frase */}
        <p
          className={`${interTight.className} text-[#1a3a2a]/70 text-xs lg:text-sm italic leading-relaxed border-l-2 border-[#2a6a4a] pl-3`}
        >
          "Artista plástica. Amante del arte en todas sus expresiones. Amiga de
          mis amigos. Abuela de tres bellezas. Buena gente!"
        </p>
      </div>
    </div>
  );
}

export function MegaFiestas({ onClose }: { onClose?: () => void }) {
  return (
    <div>
      {/* ── MOBILE (< 640px): foto arriba, bio abajo ── */}
      <div className="flex sm:hidden flex-col gap-3 p-4">
        <PhotoCard />
        <BioCard />
      </div>

      {/* ── TABLET (640px – 1024px): foto | bio lado a lado ── */}
      <div className="hidden sm:flex lg:hidden flex-col gap-3 p-4">
        <PhotoCard />
        <BioCard />
      </div>

      {/* ── LAPTOP / DESKTOP (1024px+): foto angosta | bio ancha ── */}
      <div
        className="hidden lg:grid gap-3 p-5"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        <PhotoCard />
        <BioCard />
      </div>

      <BottomLinks links={FIESTAS_BOTTOM_LINKS} onClose={onClose} />
    </div>
  );
}
