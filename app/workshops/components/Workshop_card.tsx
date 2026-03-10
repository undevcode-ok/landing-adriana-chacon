import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faStarHalfStroke, faAlarmClock } from "@fortawesome/free-solid-svg-icons";
import { Workshop } from "../types/workshop.types";
import { WorkshopTag } from "./Workshop_tag";
import { Inter_Tight, Barlow_Condensed } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
});

type Props = {
  workshop: Workshop;
};

export function WorkshopCard({ workshop }: Props) {
  const formattedPrice = workshop.price.toLocaleString("es-AR");

  return (
    <div className="
      bg-white rounded-[18px] overflow-hidden
      border-2 border-[#2B1F1A]/10 flex flex-col
      transition-all duration-200
      hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
      cursor-pointer
    ">
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden bg-[#E8DDD5] flex-shrink-0">
        <Image
          src={workshop.imageUrl}
          alt={workshop.imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Date chip */}
        <div className="
          absolute top-3 left-3
          bg-white rounded-[10px] shadow-sm
          px-[10px] py-[6px] text-center
          text-sm font-black text-[#2B1F1A] leading-snug
        ">
           {workshop.date}
          <br />
          {workshop.time}
        </div>

        {/* Tags */}
        <div className="absolute  bottom-3 left-3 flex gap-[5px] flex-wrap">
          {workshop.tags.map((tag) => (
            <WorkshopTag key={tag.label} tag={tag} />
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className={`${barlow.className} text-xl font-black text-[#2B1F1A] leading-snug mb-[3px]`}>
          {workshop.title}
        </h3>
        <p className="text-base text-[#7A6A5A] italic mb-4">
          {workshop.subtitle}
        </p>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-x-4 gap-y-[6px] mb-5">
          <span className="text-base font-semibold text-[#5A4A3A] flex items-center gap-[5px]">
            <FontAwesomeIcon icon={faLocationDot} className="w-3! h-3! text-[#F4845F]" />
            {workshop.location}
          </span>
          <span className="text-base font-semibold text-[#5A4A3A] flex items-center gap-[5px]">
            <FontAwesomeIcon icon={faClock} className="w-3! h-3! text-[#4EC5A0]" />
            {workshop.duration}
          </span>
          {workshop.note && (
            <span className="text-base font-semibold text-[#5A4A3A] flex items-center gap-[5px]">
              <FontAwesomeIcon icon={faStarHalfStroke} className="w-3! h-3! text-[#C5B8F0]" />
              {workshop.note}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-base font-semibold text-[#9A8A7A]">desde </span>
            <span className="text-xl font-black text-[#2B1F1A] leading-none">
              {workshop.currency}{formattedPrice}
            </span>
          </div>

          <button className="
            bg-amber-200 text-black
            px-5 py-[10px] rounded-[30px]
            text-lg font-black uppercase tracking-wide
            transition-all duration-200
            hover:bg-amber-400 
          ">
            {workshop.soldOut ? "Sin cupos" : "Inscribite"}
          </button>
        </div>
      </div>
    </div>
  );
}