"use client";
import Image from "next/image";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { BottomLinks } from "./Links_bottom";
import { SEDES_BOTTOM_LINKS } from "../../data/nav.data";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
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
      <ellipse cx="0"   cy="0"   rx="22" ry="22" fill={c1} fillOpacity="0.7" />
      <ellipse cx="50"  cy="0"   rx="28" ry="16" fill={c2} fillOpacity="0.7" />
      <ellipse cx="100" cy="0"   rx="22" ry="22" fill={c3} fillOpacity="0.7" />
      <ellipse cx="0"   cy="35"  rx="16" ry="20" fill={c2} fillOpacity="0.7" />
      <ellipse cx="0"   cy="65"  rx="16" ry="20" fill={c4} fillOpacity="0.7" />
      <ellipse cx="100" cy="35"  rx="16" ry="20" fill={c4} fillOpacity="0.7" />
      <ellipse cx="100" cy="65"  rx="16" ry="20" fill={c1} fillOpacity="0.7" />
      <ellipse cx="0"   cy="100" rx="22" ry="22" fill={c3} fillOpacity="0.7" />
      <ellipse cx="50"  cy="100" rx="28" ry="16" fill={c4} fillOpacity="0.7" />
      <ellipse cx="100" cy="100" rx="22" ry="22" fill={c2} fillOpacity="0.7" />
    </svg>
  );
}

interface SedeCardProps {
  name: string;
  address: string;
  bgImage: string;
  blobColors: string[];
  mapsUrl: string;
}

function SedeCard({ name, address, bgImage, blobColors, mapsUrl }: SedeCardProps) {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] group"
      style={{ background: "#f0f0f0" }}
    >
      {/* Blob border — debajo de la imagen */}
      <BlobBorder colors={blobColors} />

      {/* Imagen encima del blob con zoom en hover */}
      <div className="absolute inset-[10px] rounded-[18px] overflow-hidden">
        <Image
          src={bgImage}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, 50vw"
        />

        {/* Sombra arriba y abajo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0px, rgba(0,0,0,0) 80px, rgba(0,0,0,0) calc(100% - 80px), rgba(0,0,0,0.7) 100%)",
          }}
        />
        {/* Sombra izquierda y derecha */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7) 0px, rgba(0,0,0,0) 80px, rgba(0,0,0,0) calc(100% - 80px), rgba(0,0,0,0.7) 100%)",
          }}
        />
      </div>

      {/* Contenido encima de todo */}
      <div className="absolute inset-[10px] flex flex-col justify-between p-5">
        {/* Nombre arriba a la izquierda */}
        <h3
          className={`${barlow.className} text-white uppercase leading-none text-3xl lg:text-4xl`}
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)", whiteSpace: "pre-line" }}
        >
          {name}
        </h3>

        {/* Dirección + botón abajo a la derecha */}
        <div className="flex flex-col gap-3 items-end text-right">
  <div className="bg-[#F5E642] hover:bg-amber-400  rounded-xl px-3 py-2">
    <p className={`${interTight.className} text-black text-sm font-semibold leading-snug`}>
      📍 {address}
    </p>
  </div>
  <a
    href={mapsUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`${interTight.className} bg-[#F5E642] text-black font-extrabold
      text-xs px-4 py-2 rounded-full hover:bg-amber-400 transition-colors duration-200`}
  >
    Cómo llegar →
  </a>
</div>
      </div>
    </div>
  );
}

const SEDES = [
  {
    name: "El Taller\nde Adriana\nChacón",
    address: "San Patricio 50, Temperley, Provincia de Buenos Aires",
    bgImage: "/locations/taller.webp",
    blobColors: ["#FFB3C1", "#A8D8EA", "#B5EAD7", "#FFDAC1"],
    mapsUrl: "https://www.google.com/maps/place/El+Taller+De+Adriana+Chac%C3%B3n/@-34.7520172,-58.3696269,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32d4a0dea6a71:0x60416eaccfa73378!8m2!3d-34.7520216!4d-58.367052!16s%2Fg%2F1tpbd4sb?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "El Taller\nde Adriana\nChacón",
    address: "San Patricio 50, Temperley, Provincia de Buenos Aires",
    bgImage: "/locations/taller.webp",
    blobColors: ["#B5EAD7", "#FFDAC1", "#FFB3C1", "#A8D8EA"],
    mapsUrl: "https://www.google.com/maps/place/El+Taller+De+Adriana+Chac%C3%B3n/@-34.7520172,-58.3696269,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32d4a0dea6a71:0x60416eaccfa73378!8m2!3d-34.7520216!4d-58.367052!16s%2Fg%2F1tpbd4sb?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D",
  },
];

export function MegaSedes({ onClose }: { onClose?: () => void }) {
  return (
    <div>
      {/* ── MOBILE (< 640px): stack vertical ── */}
      <div className="flex sm:hidden flex-col gap-3 p-4">
        {SEDES.map((sede, i) => (
          <SedeCard key={i} {...sede} />
        ))}
      </div>

      {/* ── TABLET (640px – 1024px): stack vertical ── */}
      <div className="hidden sm:flex lg:hidden flex-col gap-3 p-4">
        {SEDES.map((sede, i) => (
          <SedeCard key={i} {...sede} />
        ))}
      </div>

      {/* ── LAPTOP / DESKTOP (1024px+): side by side ── */}
      <div
        className="hidden lg:grid gap-3 p-5"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {SEDES.map((sede, i) => (
          <SedeCard key={i} {...sede} />
        ))}
      </div>

      <BottomLinks links={SEDES_BOTTOM_LINKS} onClose={onClose} />
    </div>
  );
}