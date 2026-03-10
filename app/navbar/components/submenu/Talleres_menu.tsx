"use client";
import {
  TALLERES_BOTTOM_LINKS,
  TALLERES_CATEGORIES,
  TALLERES_HERO_TAGS,
} from "../../data/nav.data";
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

/* ── Organic blob SVG background ── */
function OrganicBg({ color = "#000" }: { color?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit] opacity-[0.18] pointer-events-none">
      <svg
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320,80 Q380,120 370,200 Q360,290 280,330 Q190,370 120,310 Q40,250 60,160 Q80,70 170,50 Q260,30 320,80Z"
          fill={color}
        />
        <circle cx="60" cy="320" r="60" fill={color} opacity="0.6" />
        <circle cx="350" cy="60" r="40" fill={color} opacity="0.4" />
        <path
          d="M30,150 Q80,100 120,160 Q160,220 100,250 Q40,280 20,220 Z"
          fill={color}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

/* ── Blob border con colores por prop ── */
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

/* ── Card 1: Hero ── */
function HeroCard() {
  return (
    <div
      className="rounded-[20px] overflow-hidden relative flex flex-col justify-center p-5 group
        min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] xl:min-h-[450px]"
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
          text-3xl sm:text-4xl lg:text-5xl`}
        >
          DESCUBRE TU
          <br />
          TALENTO
          <br />
          ARTÍSTICO
        </h2>
        <div className="flex justify-center flex-wrap gap-1 lg:gap-1.5">
          {TALLERES_HERO_TAGS.map((t) => (
            <span
              key={t}
              className={`${interTight.className} inline-block px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-full
                text-xs lg:text-sm font-bold bg-orange-200 text-black border border-white/30
                cursor-pointer hover:bg-orange-950 hover:text-white transition-all whitespace-nowrap`}
            >
              {t}
            </span>
          ))}
        </div>
        <button
          className={`${interTight.className} self-center bg-yellow-300 text-black font-extrabold rounded-full
            px-4 py-2 lg:px-5 lg:py-2.5 mt-1 lg:mt-2 text-xs lg:text-sm
            border-2 border-yellow-300 hover:bg-amber-400 hover:border-amber-400 hover:text-black
            transition-all duration-200 cursor-pointer`}
        >
          Ver el calendario
        </button>
      </div>
    </div>
  );
}

/* ── Card 2: PINTURA ── */
function PinturaCard({ onClose }: { onClose?: () => void }) {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden min-h-[320px] lg:min-h-[380px]"
      style={{ background: "#f0f0f0" }}
    >
      <BlobBorder colors={["#FFB3C1", "#A8D8EA", "#B5EAD7", "#FFDAC1"]} />
      <div className="absolute bg-[#fdcdc5] inset-[10px] rounded-[16px] flex flex-col gap-2 lg:gap-2.5 p-4 lg:p-[18px] overflow-hidden">
        <OrganicBg color="#e05070" />
        <h2
          className={`${barlow.className} text-black text-3xl lg:text-4xl relative z-10`}
        >
          TÉCNICAS DE PINTURA TRADICIONAL
        </h2>
        <div className="flex flex-wrap gap-1 lg:gap-1.5 flex-1 relative z-10 content-start">
          {TALLERES_CATEGORIES[0].tags.map((t) => (
            <span
              key={t}
              className="inline-block px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-full
              text-black text-xs lg:text-sm font-bold bg-[#f5816e]
              cursor-pointer hover:text-white hover:bg-[#620f33] transition-colors whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="relative z-10">
          <button
            onClick={() => {
              onClose?.();
              document
                .getElementById("workshop")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-black text-white font-extrabold rounded-full px-4 py-2 lg:px-5 lg:py-2.5 text-xs lg:text-sm
            hover:opacity-80 transition-opacity border-none cursor-pointer"
          >
            Ver ofertas
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Card 3: CERÁMICA ── */
function CeramicaCard({ onClose }: { onClose?: () => void }) {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden min-h-[320px] lg:min-h-[380px]"
      style={{ background: "#f0f0f0" }}
    >
      <BlobBorder colors={["#B5EAD7", "#FFDAC1", "#FFB3C1", "#A8D8EA"]} />
      <div className="absolute bg-[#d3d0f2] inset-[10px] rounded-[16px] flex flex-col gap-2 lg:gap-2.5 p-4 lg:p-[18px] overflow-hidden">
        <OrganicBg color="#7b5ea7" />
        <h2
          className={`${barlow.className} text-black text-3xl lg:text-4xl relative z-10`}
        >
          EXPLORA EL ARTE ABSTRACTO Y MODERNO
        </h2>
        <div className="flex flex-wrap gap-1 lg:gap-1.5 flex-1 relative z-10 content-start">
          {TALLERES_CATEGORIES[1].tags.map((t) => (
            <span
              key={t}
              className="inline-block px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-full
              text-black text-xs lg:text-sm font-bold bg-[#948fe0]
              cursor-pointer hover:text-white hover:bg-[#0c2246] transition-colors whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="relative z-10">
          <button
          onClick={() => {
              onClose?.();
              document
                .getElementById("workshop")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-black text-white font-extrabold rounded-full px-4 py-2 lg:px-5 lg:py-2.5 text-xs lg:text-sm
            hover:opacity-80 transition-opacity border-none cursor-pointer"
          >
            Ver ofertas
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Small Card ── */
function SmallCard({
  title, bg, tags, blobColor, tagBg, tagHoverBg, blobColors, onClose,
}: {
  title: string; bg: string; tags: string[]; blobColor: string;
  tagBg: string; tagHoverBg: string; blobColors: string[];
  onClose?: () => void;
}) {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden flex-1"
      style={{ minHeight: 160 }}
    >
      <BlobBorder colors={blobColors} />
      <div
        className="absolute inset-[8px] rounded-[16px] flex flex-col gap-2 p-3 lg:p-4 overflow-hidden"
        style={{ background: bg }}
      >
        <OrganicBg color={blobColor} />
        <h2
          className={`${barlow.className} text-black text-xl lg:text-2xl relative z-10`}
        >
          {title}
        </h2>
        <div className="flex flex-wrap gap-1 lg:gap-1.5 flex-1 relative z-10">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2 lg:px-2.5 h-6 lg:h-7 rounded-full text-[10px] lg:text-xs font-bold leading-none cursor-pointer transition-colors whitespace-nowrap"
              style={{ background: tagBg, color: "black" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = tagHoverBg;
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = tagBg;
                (e.currentTarget as HTMLElement).style.color = "black";
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <button
         onClick={() => {
              onClose?.();
              document
                .getElementById("workshop")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          className="bg-black text-white font-extrabold rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-[10px] lg:text-xs
          self-start hover:opacity-80 transition-opacity border-none cursor-pointer relative z-10 mt-1"
        >
          Ver ofertas
        </button>
      </div>
    </div>
  );
}

/* ── MAIN EXPORT ── */
export function TalleresMenu({ onClose }: { onClose?: () => void }) {
  return (
    <div className="relative">
      {/* ── MOBILE (< 768px): 1 columna ── */}
      <div className="flex flex-col gap-4 py-4 px-4 md:hidden">
        <HeroCard />
        <PinturaCard onClose={onClose} />
        <CeramicaCard onClose={onClose}/>
        <SmallCard
        onClose={onClose}
          title="TÉCNICAS AVANZADAS Y ESPECIALIZADAS"
          bg="#A8F0D0"
          blobColor="#1a7a50"
          tags={TALLERES_CATEGORIES[2].tags}
          tagBg="#9fcb9c"
          tagHoverBg="#1a7a50"
          blobColors={["#A8D8EA", "#B5EAD7", "#FFDAC1", "#FFB3C1"]}
        />
        <SmallCard
        onClose={onClose}
          title="PROYECTOS Y CURSOS DE APLICACIÓN PRÁCTICA"
          bg="#FFD6E0"
          blobColor="#c0507a"
          tags={TALLERES_CATEGORIES[3].tags}
          tagBg="#efb9cc"
          tagHoverBg="#c0507a"
          blobColors={["#FFDAC1", "#FFB3C1", "#A8D8EA", "#B5EAD7"]}
        />
        <BottomLinks links={TALLERES_BOTTOM_LINKS} onClose={onClose} />
      </div>

      {/* ── TABLET (768px - 1024px): 2 columnas ── */}
      <div
        className="hidden md:grid lg:hidden gap-4 py-4 px-6"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <HeroCard />
        <PinturaCard onClose={onClose} />
        <CeramicaCard onClose={onClose}/>
        <div className="flex flex-col gap-4">
          <SmallCard
          onClose={onClose}
            title="TÉCNICAS AVANZADAS Y ESPECIALIZADAS"
            bg="#A8F0D0"
            blobColor="#1a7a50"
            tags={TALLERES_CATEGORIES[2].tags}
            tagBg="#9fcb9c"
            tagHoverBg="#1a7a50"
            blobColors={["#A8D8EA", "#B5EAD7", "#FFDAC1", "#FFB3C1"]}
          />
          <SmallCard
          onClose={onClose}
            title="PROYECTOS Y CURSOS DE APLICACIÓN PRÁCTICA"
            bg="#FFD6E0"
            blobColor="#c0507a"
            tags={TALLERES_CATEGORIES[3].tags}
            tagBg="#efb9cc"
            tagHoverBg="#c0507a"
            blobColors={["#FFDAC1", "#FFB3C1", "#A8D8EA", "#B5EAD7"]}
          />
        </div>
        <div className="col-span-2">
          <BottomLinks links={TALLERES_BOTTOM_LINKS} onClose={onClose} />
        </div>
      </div>

      {/* ── LAPTOP + DESKTOP (1024px+): 4 columnas ── */}
      <div
        className="hidden lg:grid gap-5 py-[18px] w-full"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
      >
        <HeroCard />
        <PinturaCard onClose={onClose} />
        <CeramicaCard onClose={onClose}/>
        <div className="flex flex-col gap-3">
          <SmallCard
          onClose={onClose}
            title="TÉCNICAS AVANZADAS Y ESPECIALIZADAS"
            bg="#A8F0D0"
            blobColor="#1a7a50"
            tags={TALLERES_CATEGORIES[2].tags}
            tagBg="#9fcb9c"
            tagHoverBg="#1a7a50"
            blobColors={["#A8D8EA", "#B5EAD7", "#FFDAC1", "#FFB3C1"]}
          />
          <SmallCard
          onClose={onClose}
            title="PROYECTOS CREATIVOS Y TÉCNICAS URBANAS"
            bg="#FFD6E0"
            blobColor="#c0507a"
            tags={TALLERES_CATEGORIES[3].tags}
            tagBg="#efb9cc"
            tagHoverBg="#c0507a"
            blobColors={["#FFDAC1", "#FFB3C1", "#A8D8EA", "#B5EAD7"]}
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <BottomLinks links={TALLERES_BOTTOM_LINKS} onClose={onClose} />
      </div>
    </div>
  );
}
