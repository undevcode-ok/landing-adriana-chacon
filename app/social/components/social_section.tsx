import { Inter_Tight, Barlow_Condensed } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSplotch } from "@fortawesome/free-solid-svg-icons";
import { SOCIAL_DATA } from "../data/social.data";
import { SocialCard } from "./social_card";
import { YoutubeEmbed } from "./YoutubeEmbed";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
});

const HEADER_ITEMS = [
  { color: "#FFB3C1", title: "YouTube",   sub: "Tutoriales y clases en video" },
  { color: "#A8D8EA", title: "Instagram", sub: "Obras y proceso creativo" },
  { color: "#B5EAD7", title: "Pinterest", sub: "Inspiración sin límites" },
];

export function Social() {
  const { youtubeVideoId, cards } = SOCIAL_DATA;

  return (
    <section className="w-full bg-[#FDF8ED] py-8 sm:py-10 lg:py-14 xl:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-14 xl:px-14">

        {/* ── Header ── */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {HEADER_ITEMS.map((item) => (
              <div key={item.title} className="flex items-start gap-2 sm:gap-3 max-w-[140px] sm:max-w-[160px] lg:max-w-[180px]">
                <FontAwesomeIcon
                  icon={faSplotch}
                  className="w-8! h-8! sm:w-10! sm:h-10! flex-shrink-0 mt-0.5"
                  style={{ color: item.color }}
                />
                <div>
                  <p className={`${barlow.className} text-black uppercase text-lg sm:text-xl leading-none`}>
                    {item.title}
                  </p>
                  <p className={`${interTight.className} text-black/55 text-xs sm:text-sm mt-1 leading-snug`}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Layout principal ── */}
        <div>

          {/* ── MOBILE (< 640px): stack vertical ── */}
          <div className="flex sm:hidden flex-col gap-4 items-center">
            <YoutubeEmbed videoId={youtubeVideoId} />
            <div className="flex flex-col gap-3 w-full">
              {cards.map((card) => (
                <SocialCard key={card.id} card={card} />
              ))}
            </div>
          </div>

          {/* ── TABLET (640px – 1024px): video arriba centrado, cards abajo ── */}
          <div className="hidden sm:flex lg:hidden flex-col gap-5 items-center">
            <YoutubeEmbed videoId={youtubeVideoId} />
            <div className="grid grid-cols-3 gap-3 w-full">
              {cards.map((card) => (
                <SocialCard key={card.id} card={card} />
              ))}
            </div>
          </div>

          {/* ── LAPTOP 14" (1024px – 1280px) ── */}
          <div
            className="hidden lg:grid xl:hidden gap-5"
            style={{ gridTemplateColumns: "1fr 2fr", alignItems: "center" }}
          >
            <div className="flex justify-end ">
              <YoutubeEmbed videoId={youtubeVideoId} />
            </div>
            <div className="flex flex-col gap-3" style={{ height: 580 }}>
              {cards.map((card) => (
                <SocialCard key={card.id} card={card} />
              ))}
            </div>
          </div>

          {/* ── DESKTOP (1280px+) ── */}
          <div
            className="hidden xl:grid gap-6"
            style={{ gridTemplateColumns: "1fr 2fr", alignItems: "center" }}
          >
            <div className="flex justify-end xl:-ml-[120px]">
              <YoutubeEmbed videoId={youtubeVideoId} />
            </div>
            <div className="flex flex-col gap-3" style={{ height: 580 }}>
              {cards.map((card) => (
                <SocialCard key={card.id} card={card} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}