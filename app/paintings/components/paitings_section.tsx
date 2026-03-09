"use client";

import Image from "next/image";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { PAINTINGS_ROWS } from "../data/paitings.data";
import { useCarousel } from "../hooks/use_carrousel";
import type { PaintingCard, PaintingsRow } from "../types/paitings.types";

/* ─── Fonts ─────────────────────────────────────────────────── */
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-barlow",
});
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-inter",
});

/* ─── BlobBorder ─────────────────────────────────────────────
   Ellipses densas en los 4 bordes sin dejar espacios blancos.
   Usamos viewBox 200×100 para más puntos en el eje X.
──────────────────────────────────────────────────────────── */
function BlobBorder({ colors }: { colors: string[] }) {
  const [c1, c2, c3, c4] = colors;
  const palette = [c1, c2, c3, c4];

  /* Puntos en X (top/bottom) cada ~18 unidades */
  const xs = [0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 200];
  /* Puntos en Y (left/right) cada ~14 unidades */
  const ys = [0, 14, 28, 42, 56, 70, 84, 100];

  return (
    <svg
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top edge */}
      {xs.map((cx, i) => (
        <ellipse key={`t${i}`} cx={cx} cy={0} rx={14} ry={13} fill={palette[i % 4]} />
      ))}
      {/* Bottom edge */}
      {xs.map((cx, i) => (
        <ellipse key={`b${i}`} cx={cx} cy={100} rx={14} ry={13} fill={palette[(i + 2) % 4]} />
      ))}
      {/* Left edge */}
      {ys.map((cy, i) => (
        <ellipse key={`l${i}`} cx={0} cy={cy} rx={13} ry={10} fill={palette[(i + 1) % 4]} />
      ))}
      {/* Right edge */}
      {ys.map((cy, i) => (
        <ellipse key={`r${i}`} cx={200} cy={cy} rx={13} ry={10} fill={palette[(i + 3) % 4]} />
      ))}
    </svg>
  );
}

/* ─── Chip icons ─────────────────────────────────────────────── */
function ChipIcon({ type }: { type: PaintingCard["chips"][0]["icon"] }) {
  const cls = "flex-shrink-0";
  switch (type) {
    case "calendar":
      return (
        <svg className={cls} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8"  y1="2" x2="8"  y2="6" />
          <line x1="3"  y1="10" x2="21" y2="10" />
        </svg>
      );
    case "user":
      return (
        <svg className={cls} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "pin":
      return (
        <svg className={cls} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 21s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 7.2C20 16.5 12 21 12 21z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cls} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "frame":
      return (
        <svg className={cls} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <line x1="7" y1="8"  x2="17" y2="8" />
          <line x1="7" y1="12" x2="17" y2="12" />
        </svg>
      );
    case "check":
      return (
        <svg className={cls} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "x":
      return (
        <svg className={cls} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6"  x2="6"  y2="18" />
          <line x1="6"  y1="6"  x2="18" y2="18" />
        </svg>
      );
  }
}

/* ─── Arrow buttons ──────────────────────────────────────────── */
function ArrowBtn({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Anterior" : "Siguiente"}
      className={[
        "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200",
        disabled
          ? "bg-black/14 cursor-default"
          : "bg-[#1a1a1a] hover:bg-[#5a5c1e] cursor-pointer",
      ].join(" ")}
    >
      {dir === "prev" ? (
        <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none"
          stroke={disabled ? "#1a1a1a" : "#fff"}
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none"
          stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  );
}

/* ─── PaintingCardItem ───────────────────────────────────────── */
function PaintingCardItem({ card }: { card: PaintingCard }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image area with BlobBorder */}
      <div className="relative w-full aspect-[4/3.2] flex-shrink-0 bg-[#e8e0d4]">
        <BlobBorder colors={card.blobColors} />

        {/* Inset image */}
        <div className="absolute inset-[9px] rounded-[11px] overflow-hidden z-10">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 360px"
          />
        </div>

        {/* Date badge */}
        <div className="absolute top-3 left-3 z-20 bg-white rounded-[10px] px-[10px] py-[6px]
          shadow-md leading-snug">
          <p className="text-[0.72rem] font-extrabold text-[#1a1a1a]">{card.date}</p>
          <p className="text-[0.67rem] font-bold text-[#1a1a1a]">{card.time}</p>
        </div>

        {/* Tag pills */}
        <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-[5px]">
          {card.tags.map((tag) => (
            <span
              key={tag.label}
              className="text-[0.61rem] font-extrabold px-[10px] py-[4px] rounded-full"
              style={{
                background: tag.color,
                color: tag.textColor ?? "#fff",
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[9px] px-[14px] pt-[14px] pb-[16px] flex-1">
        <div>
          <h3 className="font-extrabold text-[1rem] text-[#1a1a1a] leading-snug">
            {card.title}
          </h3>
          <p className="text-[0.72rem] text-black/50 mt-[3px]">{card.subtitle}</p>
        </div>

        <div className="h-px bg-[#f0ece4]" />

        {/* Chips */}
        <div className="flex flex-wrap gap-[6px]">
          {card.chips.slice(0, 3).map((chip) => (
            <span
              key={chip.label}
              className="flex items-center gap-[5px] text-[0.68rem] font-semibold
                bg-[#f4f0e8] px-[10px] py-[4px] rounded-full whitespace-nowrap"
              style={{ color: chip.accent ?? "#3a3a3a" }}
            >
              <ChipIcon type={chip.icon} />
              {chip.label}
            </span>
          ))}
        </div>
        {card.chips[3] && (
          <div className="flex gap-[6px]">
            <span
              className="flex items-center gap-[5px] text-[0.68rem] font-semibold
                bg-[#f4f0e8] px-[10px] py-[4px] rounded-full whitespace-nowrap"
              style={{ color: card.chips[3].accent ?? "#3a3a3a" }}
            >
              <ChipIcon type={card.chips[3].icon} />
              {card.chips[3].label}
            </span>
          </div>
        )}

        {/* Price */}
        <div className="mt-auto text-right pt-1">
          <span
            className="font-black text-[1.2rem] leading-none"
            style={{
              fontFamily: "var(--font-barlow)",
              color: card.price === "Vendida" ? "#e05555" : "#1a1a1a",
            }}
          >
            {card.price}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ─── PaintingsRowSection ────────────────────────────────────
   NUEVO LAYOUT (imagen 2):
   ┌─────────────────────────────────────────────────────────┐
   │  BlobBorder (outer)                                     │
   │  ┌───────────────────────────────────────────────────┐  │
   │  │  [BIG TITLE]   [SECTION TITLE]          [CTA btn] │  │
   │  │                                                   │  │
   │  │  [ card ]      [ card ]      [ card ]            │  │
   │  │                                                   │  │
   │  │  ● ● ● ● ●                         [ ← ] [ → ]  │  │
   │  └───────────────────────────────────────────────────┘  │
   └─────────────────────────────────────────────────────────┘
──────────────────────────────────────────────────────────── */
function PaintingsRowSection({ row }: { row: PaintingsRow }) {
  const { index, prev, next, goTo, maxIndex } = useCarousel(row.cards.length);
  const visible = row.cards.slice(index, index + 3);

  return (
    <div className="relative rounded-3xl overflow-hidden">
      <BlobBorder colors={row.blobColors} />

      {/* Inner card */}
      <div
        className="relative z-10 m-4 rounded-[20px] px-7 pt-7 pb-6 md:px-8 md:pt-8"
        style={{ background: row.bgColor }}
      >
        {/* ── Top bar: big title + section title + CTA ── */}
        <div className="flex items-center gap-4 mb-6">
          {/* Big title */}
          <h2
            className="font-black uppercase leading-none tracking-tight flex-shrink-0"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
              color: row.bigTitleColor ?? "#1a1a1a",
            }}
          >
            {row.bigTitle}
          </h2>

          {/* Section title — grows to fill space */}
          <h3
            className="font-black uppercase tracking-wide text-[#1a1a1a] flex-1"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            }}
          >
            {row.sectionTitle}
          </h3>

          {/* CTA */}
          <a
            href={row.ctaHref}
            className="flex-shrink-0 bg-[#1a1a1a] text-white text-[0.82rem] font-bold
              px-5 py-[10px] rounded-full transition-colors duration-200 hover:bg-[#5a5c1e]"
          >
            {row.ctaLabel}
          </a>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-3 gap-[14px]">
          {visible.map((card) => (
            <PaintingCardItem key={card.id} card={card} />
          ))}
        </div>

        {/* ── Bottom bar: dots + arrows ── */}
        <div className="flex items-center justify-between mt-5">
          {/* Dots */}
          <div className="flex gap-[7px] items-center">
            {row.cards.map((_, i) => {
              const isActive = i === index;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ir a la tarjeta ${i + 1}`}
                  className="h-[9px] rounded-full border-none cursor-pointer
                    transition-all duration-300"
                  style={{
                    width: isActive ? "20px" : "9px",
                    background: isActive ? "#1a1a1a" : "rgba(0,0,0,0.22)",
                  }}
                />
              );
            })}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <ArrowBtn dir="prev" disabled={index === 0}        onClick={prev} />
            <ArrowBtn dir="next" disabled={index === maxIndex} onClick={next} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────── */
export function Paintings() {
  return (
    <section
      className={`${barlow.variable} ${inter.variable} w-full py-12 md:py-16 lg:py-20`}
      style={{ background: "#FDF8ED" }}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10"
        style={{ maxWidth: "1400px" }}
      >
        {PAINTINGS_ROWS.map((row) => (
          <PaintingsRowSection key={row.id} row={row} />
        ))}
      </div>
    </section>
  );
}