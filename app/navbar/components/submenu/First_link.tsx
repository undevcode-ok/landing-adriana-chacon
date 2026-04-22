"use client";
import { useMemo } from "react";
import Image from "next/image";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { CAFES_BOTTOM_LINKS, STUDENTS_PAINTS } from "../../data/nav.data";
import { BottomLinks } from "./Links_bottom";

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

function pickRandom(arr: string[], n: number): string[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

const BLOB_COLORS_1 = ["#FFB3C1", "#A8D8EA", "#B5EAD7", "#FFDAC1"];
const BLOB_COLORS_2 = ["#B5EAD7", "#FFDAC1", "#FFB3C1", "#A8D8EA"];

/* ── Hero card reutilizable ── */
function HeroCard({ onClose }: { onClose?: () => void }) {
  return (
    <div
      className="rounded-[20px] overflow-hidden relative flex flex-col justify-center p-5 group
        min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[380px] xl:min-h-[420px]"
      style={{ background: "linear-gradient(160deg,#1a0a2e,#2a1a1a)" }}
    >
      <div
        className="absolute inset-0 rounded-[20px] transition-opacity duration-300 group-hover:opacity-40"
        style={{
          background:
            "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80') center/cover",
        }}
      />
      <div
        className="absolute inset-0 rounded-[20px]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.40) 50%, rgba(0,0,0,.15) 100%)",
        }}
      />
      <div className="text-center relative z-10 flex flex-col gap-2 lg:gap-3">
        <h2
          className={`${barlow.className} text-white leading-none tracking-wide font-bold uppercase
            text-2xl sm:text-3xl lg:text-4xl xl:text-5xl`}
        >
          Arte que inspira
          <br />
          creaciones que se comparten.
        </h2>
        <button
        onClick={() => {
              onClose?.();
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          className={`${interTight.className} self-center bg-yellow-300 text-black font-extrabold rounded-full
            px-4 py-2 lg:px-5 lg:py-2.5 mt-1 lg:mt-2 text-xs lg:text-sm
            border-2 border-yellow-300 hover:bg-amber-400 hover:border-amber-400
            transition-all duration-200 cursor-pointer`}
        >
          Ver mas...
        </button>
      </div>
    </div>
  );
}

/* ── Paint card reutilizable ── */
function PaintCard({ src, blobColors }: { src: string; blobColors: string[] }) {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[380px]"
      style={{ background: "#f0f0f0" }}
    >
      <BlobBorder colors={blobColors} />
      <div className="absolute inset-[10px] rounded-[16px] overflow-hidden">
        <Image
          src={src}
          alt="Obra de alumno"
          fill
          className="object-cover scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
        />
      </div>
    </div>
  );
}

export function MegaCafes({ onClose }: { onClose?: () => void }) {
  const [img1, img2] = useMemo(() => pickRandom(STUDENTS_PAINTS, 2), []);

  return (
    <div>
      {/* ── MOBILE (< 640px): stack vertical ── */}
      <div className="flex sm:hidden flex-col gap-3 p-4">
        <HeroCard onClose={onClose} />
        <div className="grid grid-cols-2 gap-3">
          <PaintCard src={img1} blobColors={BLOB_COLORS_1} />
          <PaintCard src={img2} blobColors={BLOB_COLORS_2} />
        </div>
      </div>

      {/* ── TABLET (640px – 1024px): hero arriba, 2 cards abajo ── */}
      <div
        className="hidden sm:grid lg:hidden gap-3 p-4"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Hero ocupa las 2 columnas */}
        <div className="col-span-2">
          <HeroCard onClose={onClose} />
        </div>
        <PaintCard src={img1} blobColors={BLOB_COLORS_1} />
        <PaintCard src={img2} blobColors={BLOB_COLORS_2} />
      </div>

      {/* ── LAPTOP / DESKTOP (1024px+): 2fr 1fr 1fr en una fila ── */}
      <div
        className="hidden lg:grid gap-3 p-5"
        style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
      >
        <HeroCard onClose={onClose} />
        <PaintCard src={img1} blobColors={BLOB_COLORS_1} />
        <PaintCard src={img2} blobColors={BLOB_COLORS_2} />
      </div>

      {/*<BottomLinks links={CAFES_BOTTOM_LINKS} onClose={onClose} />*/}
    </div>
  );
}
