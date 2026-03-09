import Image from "next/image";
import { Workshop } from "../types/workshop.types";
import { WorkshopTag } from "./Workshop_tag";

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
      {/* Image — taller, like PIE Studio */}
      <div className="relative h-[260px] overflow-hidden bg-[#E8DDD5] flex-shrink-0">
        <Image
          src={workshop.imageUrl}
          alt={workshop.imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Date chip — top left, white box */}
        <div className="
          absolute top-3 left-3
          bg-white rounded-[10px] shadow-sm
          px-[10px] py-[6px] text-center
          text-[12px] font-black text-[#2B1F1A] leading-snug
        ">
          {workshop.date}
          <br />
          {workshop.time}
        </div>

        {/* Tags — bottom left over image */}
        <div className="absolute bottom-3 left-3 flex gap-[5px] flex-wrap">
          {workshop.tags.map((tag) => (
            <WorkshopTag key={tag.label} tag={tag} />
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[17px] font-black text-[#2B1F1A] leading-snug mb-[3px]">
          {workshop.title}
        </h3>
        <p className="text-[13px] text-[#7A6A5A] italic mb-4">
          {workshop.subtitle}
        </p>

        {/* Meta — inline chips like PIE Studio */}
        <div className="flex flex-wrap gap-x-4 gap-y-[6px] mb-5">
          <span className="text-[12px] font-semibold text-[#5A4A3A] flex items-center gap-[5px]">
            📍 {workshop.location}
          </span>
          <span className="text-[12px] font-semibold text-[#5A4A3A] flex items-center gap-[5px]">
            ⏱ {workshop.duration}
          </span>
          {workshop.note && (
            <span className="text-[12px] font-semibold text-[#5A4A3A] flex items-center gap-[5px]">
              ✨ {workshop.note}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold text-[#9A8A7A]">desde </span>
            <span className="text-[20px] font-black text-[#2B1F1A] leading-none">
              {workshop.currency}{formattedPrice}
            </span>
          </div>

          <button className="
            bg-[#2B1F1A] text-white
            px-5 py-[10px] rounded-[30px]
            text-[12px] font-black uppercase tracking-wide
            transition-all duration-200
            hover:bg-[#4EC5A0] hover:text-[#2B1F1A]
          ">
            {workshop.soldOut ? "Sin cupos" : "Inscribite"}
          </button>
        </div>
      </div>
    </div>
  );
}