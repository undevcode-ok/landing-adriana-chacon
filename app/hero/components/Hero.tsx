"use client";
import { useState } from "react";
import Image from "next/image";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { HERO_TABS, IMAGES_LEFT, IMAGES_RIGHT } from "../data/hero.data";
import { ScrollColumn } from "./Scroll_collumn";
import { ScrollRow } from "./Scroll_row";
import { NavItemId } from "@/app/navbar/types/nav.types";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["900"] });
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

/* ── Layout constants por breakpoint ──
   Ajustá estos valores para cada tamaño de pantalla
*/
const LAYOUT = {
  laptop: { colWidth: 300, colGap: 24, rightMargin: 32, leftPadding: 48 },  // 1024–1280px
  desktop: { colWidth: 280, colGap: 32, rightMargin: 80, leftPadding: 80 }, // 1280px+
};

function Tabs({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <div className="flex gap-4 lg:gap-6">
      {HERO_TABS.map((t, i) => (
        <button
          key={t.id}
          onClick={() => setActive(i)}
          className={`${interTight.className} px-0 pb-1 lg:text-lg sm:text-sm font-bold
            bg-transparent border-none cursor-pointer transition-colors duration-200`}
          style={{
            color: active === i ? "#fff" : "rgba(255,255,255,0.45)",
            borderBottom: "2px solid",
            borderColor: active === i ? "white" : "transparent",
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function CtaButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
    onClick={onClick}
      className={`${interTight.className} bg-[#F5E642] text-black font-extrabold rounded-full
        px-6 py-3 lg:px-8 lg:py-3.5 text-sm
        hover:bg-amber-400 transition-all duration-200 cursor-pointer`}
    >
      {label}
    </button>
  );
}

function ArrowLink({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
    onClick={onClick}
      className={`${interTight.className} mt-4 ml-2 group flex items-center gap-1.5 text-white
        font-extrabold text-sm bg-transparent border-none cursor-pointer`}
    >
      {label}
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
    </button>
  );
}

export function Hero({ onOpenMenu }: { onOpenMenu?: (id: NavItemId) => void }) {
  const [active, setActive] = useState(0);
  const tab = HERO_TABS[active];

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden transition-colors duration-700"
      style={{ background: tab.bg }}
    >
      {/* Background image — full width siempre */}
      <Image
        key={tab.id}
        src={tab.bgImage}
        alt=""
        fill
        className="object-cover opacity-15 z-0"
        priority
      />

      {/* Paint splatter shapes */}
      <svg className="absolute top-[-5%] left-[-5%] w-[35%] opacity-10 pointer-events-none z-0" viewBox="0 0 400 400">
        <path d="M320,80 Q380,120 370,200 Q360,290 280,330 Q190,370 120,310 Q40,250 60,160 Q80,70 170,50 Q260,30 320,80Z" fill="#fff" />
      </svg>
      <svg className="absolute bottom-[-5%] left-[20%] w-[25%] opacity-10 pointer-events-none z-0" viewBox="0 0 400 400">
        <path d="M200,30 Q300,0 370,80 Q420,180 350,280 Q280,360 160,340 Q60,320 30,220 Q0,120 80,60 Q140,10 200,30Z" fill="#fff" />
      </svg>

      {/* ── MOBILE (< 768px): stack vertical ── */}
      <div className="relative z-10 flex md:hidden flex-col min-h-screen pt-45 pb-10 gap-5">
  <div className="px-5 flex flex-col gap-5">
    <Tabs active={active} setActive={setActive} />
    <h1
      key={`title-sm-${active}`}
      className={`${barlow.className} text-white leading-none uppercase animate-fadeUp`}
      style={{ fontSize: "clamp(2.2rem, 9vw, 3rem)", whiteSpace: "pre-line" }}
    >
      {tab.title}
    </h1>
    <p className={`${interTight.className} text-white/85 text-sm leading-relaxed`}>
      {tab.subtitle}
    </p>
    <div className="flex flex-col gap-3 items-start">
      <CtaButton
  label={tab.btnLabel}
  onClick={() => document.getElementById(tab.btnScrollTo)?.scrollIntoView({ behavior: "smooth" })}
/>
      <ArrowLink
  label={tab.linkLabel}
  onClick={() => {
    if (tab.id === "workshops") {
      onOpenMenu?.("fiestas");
    } else {
      document.getElementById(tab.linkScrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  }}
/>
    </div>
  </div>
  <div className="mt-4 w-full">
    <ScrollRow images={[...IMAGES_LEFT, ...IMAGES_RIGHT]} />
  </div>
</div>

      {/* ── TABLET (768px – 1024px): texto arriba, columnas abajo ── */}
      <div className="relative z-10 hidden md:flex lg:hidden" style={{ height: "100vh" }}>

  {/* Columna de imágenes */}
  <div
    className="absolute z-10 w-[300px]"
    style={{ right: 80, top: 0, height: "100vh", overflow: "hidden" }}
  >
    <ScrollColumn images={IMAGES_LEFT} direction="up" />
  </div>

  {/* Texto */}
  <div
    className="flex flex-col justify-center gap-6 px-8"
    style={{ paddingTop: 80, paddingBottom: 40, paddingRight: 340, height: "100vh" }}
  >
    <Tabs active={active} setActive={setActive} />
    <h1
      key={`title-md-${active}`}
      className={`${barlow.className} text-white text-5xl leading-none uppercase animate-fadeUp`}
      style={{ whiteSpace: "pre-line" }}
    >
      {tab.title}
    </h1>
    <p className={`${interTight.className} text-white/85 text-lg leading-relaxed max-w-[380px]`}>
      {tab.subtitle}
    </p>
    <div className="flex flex-col gap-3 items-start">
      <CtaButton
  label={tab.btnLabel}
  onClick={() => document.getElementById(tab.btnScrollTo)?.scrollIntoView({ behavior: "smooth" })}
/>
      <ArrowLink
  label={tab.linkLabel}
  onClick={() => {
    if (tab.id === "workshops") {
      onOpenMenu?.("fiestas");
    } else {
      document.getElementById(tab.linkScrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  }}
/>
    </div>
  </div>
</div>

      {/* ── LAPTOP (1024px – 1280px) ── */}
      <div className="hidden lg:block xl:hidden w-full">
        <div className="relative max-w-[1680px] mx-auto min-h-screen">
          {/* Columna izquierda */}
          <div
            className="absolute top-0 bottom-0 z-10"
            style={{
              right: LAYOUT.laptop.rightMargin + LAYOUT.laptop.colWidth + LAYOUT.laptop.colGap,
              width: LAYOUT.laptop.colWidth,
            }}
          >
            <ScrollColumn images={IMAGES_LEFT} direction="up" />
          </div>
          {/* Columna derecha */}
          <div
            className="absolute top-0 bottom-0 z-10"
            style={{ right: LAYOUT.laptop.rightMargin, width: LAYOUT.laptop.colWidth }}
          >
            <ScrollColumn images={IMAGES_RIGHT} direction="down" />
          </div>
          {/* Texto */}
          <div
            className="relative z-20 flex flex-col justify-center h-screen gap-6"
            style={{
              paddingLeft: LAYOUT.laptop.leftPadding,
              paddingRight:
                LAYOUT.laptop.colWidth * 2 +
                LAYOUT.laptop.colGap +
                LAYOUT.laptop.rightMargin +
                40,
            }}
          >
            <Tabs active={active} setActive={setActive} />
            <h1
              key={`title-lg-${active}`}
              className={`${barlow.className} text-white leading-none uppercase animate-fadeUp`}
              style={{ fontSize: "clamp(2.8rem, 4vw, 4.2rem)", whiteSpace: "pre-line" }}
            >
              {tab.title}
            </h1>
            <p
              className={`${interTight.className} text-white/85 text-[15px] leading-relaxed max-w-[420px] animate-fadeUp`}
              style={{ animationDelay: "60ms" }}
            >
              {tab.subtitle}
            </p>
            <div className="flex flex-col gap-4 items-start animate-fadeUp" style={{ animationDelay: "120ms" }}>
              <CtaButton
  label={tab.btnLabel}
  onClick={() => document.getElementById(tab.btnScrollTo)?.scrollIntoView({ behavior: "smooth" })}
/>
      <ArrowLink
  label={tab.linkLabel}
  onClick={() => {
    if (tab.id === "workshops") {
      onOpenMenu?.("fiestas");
    } else {
      document.getElementById(tab.linkScrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  }}
/>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP (1280px+) ── */}
      <div className="hidden xl:block w-full">
        <div className="relative max-w-[1440px] mx-auto min-h-screen">
          {/* Columna izquierda */}
          <div
            className="absolute top-0 bottom-0 z-10"
            style={{
              right: LAYOUT.desktop.rightMargin + LAYOUT.desktop.colWidth + LAYOUT.desktop.colGap,
              width: LAYOUT.desktop.colWidth,
            }}
          >
            <ScrollColumn images={IMAGES_LEFT} direction="up" />
          </div>
          {/* Columna derecha */}
          <div
            className="absolute top-0 bottom-0 z-10"
            style={{ right: LAYOUT.desktop.rightMargin, width: LAYOUT.desktop.colWidth }}
          >
            <ScrollColumn images={IMAGES_RIGHT} direction="down" />
          </div>
          {/* Texto */}
          <div
            className="relative z-20 flex flex-col justify-center h-screen gap-7"
            style={{
              paddingLeft: LAYOUT.desktop.leftPadding,
              paddingRight:
                LAYOUT.desktop.colWidth * 2 +
                LAYOUT.desktop.colGap +
                LAYOUT.desktop.rightMargin +
                48,
            }}
          >
            <Tabs active={active} setActive={setActive} />
            <h1
              key={`title-xl-${active}`}
              className={`${barlow.className} text-white text-7xl leading-none uppercase animate-fadeUp`}
              style={{  whiteSpace: "pre-line" }}
            >
              {tab.title}
            </h1>
            <p
              className={`${interTight.className} text-white/85 text-xl leading-relaxed max-w-[480px] animate-fadeUp`}
              style={{ animationDelay: "60ms" }}
            >
              {tab.subtitle}
            </p>
            <div className="flex flex-col items-center gap-4 items-start animate-fadeUp" style={{ animationDelay: "120ms" }}>
              <CtaButton
  label={tab.btnLabel}
  onClick={() => document.getElementById(tab.btnScrollTo)?.scrollIntoView({ behavior: "smooth" })}
/>
      <ArrowLink
  label={tab.linkLabel}
  onClick={() => {
    if (tab.id === "workshops") {
      onOpenMenu?.("fiestas");
    } else {
      document.getElementById(tab.linkScrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  }}
/>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.4s ease both;
        }
      `}</style>
    </div>
  );
}