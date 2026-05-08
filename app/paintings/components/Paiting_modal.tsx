"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { Painting } from "../types/paitings.types";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["900"] });
const inter = Inter_Tight({ subsets: ["latin"], weight: ["400", "600", "700"] });

interface Props {
  painting: Painting;
  onClose: () => void;
}

export function PaintingModal({ painting, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white
            flex items-center justify-center shadow-lg hover:bg-gray-100
            transition-colors cursor-pointer border-none"
        >
          <X size={18} color="#1a1a1a" />
        </button>

        {/* Imagen con overlay */}
        <div
          className="relative rounded-[20px] overflow-hidden shadow-2xl"
          style={{ width: "min(420px, 85vw)" }}
        >
          <Image
            src={painting.src}
            alt={painting.author}
            width={420}
            height={560}
            className="object-contain w-full h-auto"
            style={{ maxHeight: "75vh", display: "block" }}
          />

          {/* Overlay degradado */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
  background: "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)",
  padding: "60px 20px 22px",
}}
          >
            <p
              className={`${barlow.className} text-white uppercase leading-none
  text-2xl sm:text-3xl lg:text-3xl xl:text-4xl`}
              style={{letterSpacing: "0.02em" }}
            >
              {painting.course}
            </p>
            <p
              className={`${inter.className} text-white/80 font-semibold
  text-xs sm:text-sm lg:text-sm xl:text-base`}
              style={{
                marginTop: "7px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ width: 24, height: 2, background: "#F5E642", display: "inline-block", flexShrink: 0 }} />
              {painting.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}