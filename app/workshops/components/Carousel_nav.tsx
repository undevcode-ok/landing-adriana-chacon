import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToPage: (page: number) => void;
};

export function CarouselNav({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onGoToPage,
}: Props) {
  return (
    <div className="flex items-center justify-between mt-1">
      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoToPage(i)}
            aria-label={`Ir a página ${i + 1}`}
            className={`
              rounded-full border-none transition-all duration-200
              ${i === currentPage
                ? "w-[10px] h-[10px] bg-[#2B1F1A] scale-125"
                : "w-[9px] h-[9px] bg-[#D0C4B0] hover:bg-[#9A8A7A]"
              }
            `}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          disabled={currentPage === 0}
          aria-label="Anterior"
          className="
            w-9 h-9 rounded-full  bg-[#2B1F1A]
            text-white font-bold text-sm flex items-center justify-center
            transition-all duration-200
            hover:bg-[#5a5c1e] hover:text-white 
            disabled:opacity-30 disabled:cursor-not-allowed
          "
        >
           <FontAwesomeIcon icon={faChevronLeft} className="w-3! h-3!" />
        </button>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
          aria-label="Siguiente"
          className="
            w-9 h-9 rounded-full  bg-[#2B1F1A]
            text-white font-bold text-sm flex items-center justify-center
            transition-all duration-200
            hover:bg-[#5a5c1e] hover:text-white
            disabled:opacity-30 disabled:cursor-not-allowed
          "
        >
           <FontAwesomeIcon icon={faChevronRight} className="w-3! h-3!" />
        </button>
      </div>
    </div>
  );
}