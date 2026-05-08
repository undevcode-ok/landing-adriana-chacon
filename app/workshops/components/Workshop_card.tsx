import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Workshop } from "../types/workshop.types";
import { WorkshopTag } from "./Workshop_tag";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { WHATSAPP_CONFIG } from "@/common/config/whatsapp.config";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["900"] });

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

type Props = {
  workshop: Workshop;
};

export function WorkshopCard({ workshop }: Props) {
  return (
    <div
      className="
      bg-white rounded-[18px] overflow-hidden
      border-2 border-[#2B1F1A]/10 flex flex-col h-full
      transition-all duration-200
      hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
    "
    >
      {/* Image */}
      <div
        className="relative overflow-hidden bg-[#E8DDD5]"
        style={{ aspectRatio: "4/5" }}
      >
        <Image
          src={workshop.imageUrl}
          alt={workshop.imageAlt}
          fill
          className="object-cover object-center scale-[1.08] transition-transform duration-500 hover:scale-[1.10]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute bottom-3 left-3 flex gap-[5px] flex-wrap">
          {workshop.tags.map((tag) => (
            <WorkshopTag key={tag.label} tag={tag} />
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-shrink-0">
        <h3
          className={`${barlow.className} text-sm sm:text-xl font-black text-[#2B1F1A] leading-snug mb-[3px] uppercase`}
        >
          {workshop.title}
        </h3>
        <p className="text-sm text-[#7A6A5A] italic mb-3 sm:mb-4">
          {workshop.subtitle}
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-[6px] mb-4">
          <span className="text-sm font-semibold text-[#5A4A3A] flex items-center gap-[5px]">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-4! h-4! text-[#F4845F]"
            />
            {workshop.location}
          </span>
          <span className="text-sm font-semibold text-[#5A4A3A] flex items-center gap-[5px]">
            <FontAwesomeIcon
              icon={faClock}
              className="w-4! h-4! text-[#4EC5A0]"
            />
            {workshop.duration}
          </span>
          {workshop.note && (
            <span className="text-sm font-semibold text-[#5A4A3A] flex items-center gap-[5px]">
              <FontAwesomeIcon
                icon={faStarHalfStroke}
                className="w-4! h-4! text-[#C5B8F0]"
              />
              {workshop.note}
            </span>
          )}
        </div>

        <div className="flex items-center justify-end">
          <a
            href={`https://wa.me/${WHATSAPP_CONFIG.whatsapp}?text=${encodeURIComponent(`Hola Adriana, quiero consultarte por ${workshop.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              bg-[#2B1F1A] text-white
              px-4 py-[8px] sm:px-5 sm:py-[10px] rounded-[30px]
              text-xs sm:text-sm font-black uppercase tracking-wide
              transition-all duration-200
              hover:bg-[#25D366] hover:text-white
            "
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-4! h-4!" />
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
}
