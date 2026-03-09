import { WorkshopTag as WorkshopTagType } from "../types/workshop.types";

const colorMap: Record<WorkshopTagType["color"], string> = {
  pink:    "bg-[#F9C8D4] text-[#2B1F1A]",
  mint:    "bg-[#A8E6CF] text-[#2B1F1A]",
  lilac:   "bg-[#C5B8F0] text-[#2B1F1A]",
  yellow:  "bg-[#FFE47A] text-[#2B1F1A]",
  default: "bg-[#FAF6EC] text-[#2B1F1A] border border-[#2B1F1A]/20",
};

type Props = {
  tag: WorkshopTagType;
};

export function WorkshopTag({ tag }: Props) {
  return (
    <span
      className={`
        inline-block rounded-[8px] px-2 py-[3px]
        text-[10px] font-black uppercase tracking-wide
        ${colorMap[tag.color]}
      `}
    >
      {tag.label}
    </span>
  );
}