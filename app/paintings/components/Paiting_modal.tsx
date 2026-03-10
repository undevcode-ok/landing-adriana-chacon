"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Inter_Tight } from "next/font/google";
import { Painting } from "../types/paitings.types";

const inter = Inter_Tight({ subsets: ["latin"], weight: ["400", "600", "700"] });

interface Props {
  painting: Painting;
  onClose:  () => void;
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
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center gap-4 px-4"
        style={{ maxWidth: "90vw", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-3 right-1 lg:-right-4 lg:-top-4 z-10 w-10 h-10 rounded-full bg-white
            flex items-center justify-center shadow-lg hover:bg-gray-100
            transition-colors cursor-pointer border-none"
        >
          <X size={18} color="#1a1a1a" />
        </button>

        {/* Imagen */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{ maxWidth: "80vw", maxHeight: "78vh", width: "600px" }}
        >
          <Image
            src={painting.src}
            alt={painting.author}
            width={600}
            height={700}
            className="object-contain w-full h-full"
            style={{ maxHeight: "75vh" }}
          />
        </div>

        {/* Autor */}
        <p className={`${inter.className} text-white text-sm font-semibold tracking-wide`}>
          Obra de <span className="font-bold">{painting.author}</span>
        </p>
      </div>
    </div>
  );
}