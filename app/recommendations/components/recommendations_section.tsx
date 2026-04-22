"use client";

import { RECOMMENDATIONS } from "../data/recommendations.data";
import { useCarousel } from "../hooks/use_carrousel";
import { useQuoteExpand } from "../hooks/use_quote";
import { Inter_Tight, Pacifico, Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

function BlobBorder({ colors }: { colors: string[] }) {
  const [c1, c2, c3, c4] = colors;
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="0"   cy="0"   rx="28" ry="28" fill={c1} />
      <ellipse cx="100" cy="0"   rx="28" ry="28" fill={c3} />
      <ellipse cx="0"   cy="100" rx="28" ry="28" fill={c3} />
      <ellipse cx="100" cy="100" rx="28" ry="28" fill={c2} />
      <ellipse cx="25"  cy="0"   rx="22" ry="18" fill={c2} />
      <ellipse cx="50"  cy="0"   rx="22" ry="18" fill={c4} />
      <ellipse cx="75"  cy="0"   rx="22" ry="18" fill={c1} />
      <ellipse cx="25"  cy="100" rx="22" ry="18" fill={c4} />
      <ellipse cx="50"  cy="100" rx="22" ry="18" fill={c1} />
      <ellipse cx="75"  cy="100" rx="22" ry="18" fill={c3} />
      <ellipse cx="0"   cy="25"  rx="18" ry="22" fill={c4} />
      <ellipse cx="0"   cy="50"  rx="18" ry="22" fill={c2} />
      <ellipse cx="0"   cy="75"  rx="18" ry="22" fill={c1} />
      <ellipse cx="100" cy="25"  rx="18" ry="22" fill={c3} />
      <ellipse cx="100" cy="50"  rx="18" ry="22" fill={c4} />
      <ellipse cx="100" cy="75"  rx="18" ry="22" fill={c2} />
    </svg>
  );
}

function OrganicBg() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice">
      <path d="M-60,40 Q-20,10 20,60 Q60,110 40,180 Q20,250 -30,260 Q-80,270 -100,200 Q-120,130 -60,40Z" fill="#A8D8EA" opacity="0.6" />
      <path d="M-80,320 Q-30,280 10,340 Q50,400 20,460 Q-10,520 -70,510 Q-130,500 -140,430 Q-150,360 -80,320Z" fill="#B5EAD7" opacity="0.55" />
      <path d="M1340,0 Q1420,30 1450,120 Q1480,210 1430,280 Q1380,350 1310,330 Q1240,310 1220,220 Q1200,130 1260,60 Q1300,10 1340,0Z" fill="#A8D8EA" opacity="0.55" />
      <path d="M1470,340 Q1500,370 1490,430 Q1480,490 1430,510 Q1380,530 1350,480 Q1320,430 1360,390 Q1400,350 1470,340Z" fill="#B5EAD7" opacity="0.5" />
      <path d="M0,490 Q40,460 80,500 Q120,540 90,580 Q60,610 10,600 Q-40,590 -30,540 Q-20,500 0,490Z" fill="#F5E642" opacity="0.45" />
      <path d="M620,0 Q660,20 650,70 Q640,110 600,100 Q560,90 560,50 Q560,10 620,0Z" fill="#B5EAD7" opacity="0.4" />
      <path d="M1200,500 Q1240,470 1280,510 Q1310,550 1280,590 Q1250,620 1210,600 Q1170,580 1180,540 Q1185,510 1200,500Z" fill="#F5E642" opacity="0.4" />
    </svg>
  );
}

function Dots({ total, current, goTo }: { total: number; current: number; goTo: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className="border-none cursor-pointer p-0 transition-all duration-300"
          style={{
            width: i === current ? 22 : 10,
            height: 10,
            borderRadius: 999,
            background: i === current ? "#2a2a2a" : "#c8a0b4",
          }}
          aria-label={`Ir al slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative flex-shrink-0 rounded-full overflow-hidden
  w-[180px] h-[180px]
  sm:w-[150px] sm:h-[150px]
  lg:w-[200px] lg:h-[200px]
  xl:w-[220px] xl:h-[220px]"
    >
      <BlobBorder colors={["#b5ead7", "#ffdac1", "#a8d8ea", "#c9b8f0"]} />
      <div className="absolute rounded-full bg-white z-10" style={{ inset: 8 }} />
      <div className="absolute rounded-full overflow-hidden z-20" style={{ inset: 11 }}>
        <Image src={src} alt={name} fill className="object-cover" sizes="220px" quality={100} />
      </div>
    </div>
  );
}

function Quote({ quote }: { quote: string }) {
  const { expanded, toggle, needsExpand, ref } = useQuoteExpand(quote);

  return (
    <div className="text-center w-full">
      <p
        ref={ref}
        className={`${dancing.className} text-center
  text-2xl sm:text-2xl lg:text-3xl xl:text-4xl`}
        style={{
          fontWeight: 400,
          lineHeight: 1.4,
          textShadow: "0 0 1.2px #000",
          margin: "0 auto",
          ...(expanded
            ? {
                display: "block",
                overflow: "visible",
              }
            : {
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }),
        }}
      >
        «{quote}»
      </p>
      {needsExpand && (
        <button
          onClick={toggle}
          className="mt-3 text-sm font-bold underline cursor-pointer bg-transparent border-none"
          style={{ color: "#1DAB8E" }}
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}

export function Recommendations() {
  const { current, goTo } = useCarousel(RECOMMENDATIONS.length);
  const rec = RECOMMENDATIONS[current];

  return (
    <section
      className="relative w-full min-h-screen flex justify-center items-start overflow-hidden"
      style={{ background: "#FFCFE0" }}
    >
      <OrganicBg />

      <div
  className="relative z-10 mx-auto flex flex-col items-center w-full
    px-5       max-w-[420px]
    sm:px-8    sm:max-w-[600px]
    lg:px-10   lg:max-w-[760px]
    xl:px-12   xl:max-w-[880px]
    2xl:max-w-[960px]
    pt-24 pb-16 sm:pt-20 sm:pb-16"
>
        {/* Título */}
        <p
          className={`${pacifico.className} text-center italic mb-6
  text-4xl mt-17.5 sm:text-4xl lg:text-5xl xl:text-6xl lg:mt-17.5`}
          style={{ color: "#1DAB8E", letterSpacing: "0.01em", lineHeight: 1.1 }}
        >
          Transformá tu creatividad en obras únicas
        </p>

        {/* Avatar */}
        <Avatar src={rec.avatar} name={rec.name} />

        {/* Cita */}
        <div
          key={rec.id}
          className="w-full mt-6 sm:mt-8"
          style={{ animation: "recFadeIn 0.35s ease both" }}
        >
          <Quote quote={rec.quote} />
        </div>

        {/* Autor */}
        <p className={`${interTight.className} text-black/50 font-semibold tracking-wide mt-4 text-xs sm:text-sm`}>
          {rec.name}
        </p>

        {/* Dots */}
        <Dots total={RECOMMENDATIONS.length} current={current} goTo={goTo} />
      </div>

      <style>{`
        @keyframes recFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}