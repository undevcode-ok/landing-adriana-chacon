"use client";
import { useState } from "react";

interface YoutubeEmbedProps {
  videoId: string;
  thumbnail?: string;
}

export function YoutubeEmbed({ videoId, thumbnail }: YoutubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    /* ── Carcasa del celular ── */
    <div
      className="relative mx-auto flex-shrink-0"
     style={{ width: 310, height: 580  }}
    >
      {/* Sombra exterior */}
      <div
        className="absolute inset-0 rounded-[44px]"
        style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.28), 0 8px 24px rgba(0,0,0,0.18)" }}
      />

      {/* Cuerpo del teléfono */}
      <div
        className="absolute inset-0 rounded-[44px]"
        style={{ background: "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 60%, #111 100%)" }}
      />

      {/* Borde metálico */}
      <div
        className="absolute inset-0 rounded-[44px]"
        style={{ border: "2px solid rgba(255,255,255,0.12)" }}
      />

      {/* Botón lateral derecho */}
      <div
        className="absolute rounded-full"
        style={{ right: -3, top: 140, width: 4, height: 60, background: "#333" }}
      />

      {/* Botones laterales izquierdo */}
      <div
        className="absolute rounded-full"
        style={{ left: -3, top: 120, width: 4, height: 36, background: "#333" }}
      />
      <div
        className="absolute rounded-full"
        style={{ left: -3, top: 166, width: 4, height: 56, background: "#333" }}
      />
      <div
        className="absolute rounded-full"
        style={{ left: -3, top: 232, width: 4, height: 56, background: "#333" }}
      />

      {/* Pantalla */}
      <div
        className="absolute overflow-hidden"
        style={{
          inset: 10,
          borderRadius: 36,
          background: "#000",
        }}
      >
        {/* Dynamic island */}
        <div
          className="absolute z-20 left-1/2 -translate-x-1/2"
          style={{
            top: 12,
            width: 50,
            height: 26,
            borderRadius: 20,
            background: "#000",
            boxShadow: "0 0 0 2px #1a1a1a",
          }}
        />

        {/* Video / Thumbnail */}
        <div className="absolute inset-0">
          {!playing ? (
            <>
              <img
                src={thumbnail ?? `https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80`}
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Info overlay arriba */}
              

              {/* Botón play */}
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full flex items-center justify-center z-10 cursor-pointer border-none bg-transparent"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                  style={{ background: "#F5E642" }}
                >
                  <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Info overlay abajo */}
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-none"
            />
          )}
        </div>
      </div>

      {/* Reflejo en pantalla */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 10,
          borderRadius: 36,
          background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
          zIndex: 30,
        }}
      />
    </div>
  );
}