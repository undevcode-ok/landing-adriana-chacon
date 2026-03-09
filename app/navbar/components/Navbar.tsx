"use client";
import { useState, useRef, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { Inter_Tight } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCrown,
  faBuildingColumns,
  faChalkboardUser,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faCircleQuestion, faImage } from "@fortawesome/free-regular-svg-icons";
import { NavItemId } from "../types/nav.types";
import { NAV_ITEMS } from "../data/nav.data";
import { TalleresMenu } from "./submenu/Talleres_menu";
import { MegaCafes } from "./submenu/First_link";
import { MegaFiestas } from "./submenu/Second_link";
import { MegaSedes } from "./submenu/Four_link";
import { MegaMembresias } from "./submenu/Thirth_link";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ICON_MAP = {
  Hand:     faChalkboardUser,
  Coffee:   faPaintBrush,
  Sparkles: faImage,
  MapPin:   faLocationDot,
  Crown:    faCrown,
};

const MEGA_MAP: Record<NavItemId, React.ReactNode> = {
  talleres:   <TalleresMenu />,
  cafes:      <MegaCafes />,
  fiestas:    <MegaFiestas />,
  sedes:      <MegaSedes />,
  membresias: <MegaMembresias />,
};

interface NavbarProps {
  openMenu: NavItemId | null;
  toggleMenu: (id: NavItemId) => void;
  closeMenu: () => void;
}

export function Navbar({ openMenu, toggleMenu, closeMenu }: NavbarProps) {
  const [activeAction, setActiveAction] = useState<"calendar" | "faq" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<NavItemId | null>(null);
  const [navHeight, setNavHeight] = useState("84px");

  const headerRef = useRef<HTMLElement>(null);

  // Mide la altura real del header en cada resize y cuando cambia el mega menu
  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        setNavHeight(`${headerRef.current.offsetHeight}px`);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [openMenu]);

  const handleAction = (action: "calendar" | "faq") => {
    setActiveAction((prev) => (prev === action ? null : action));
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    setMobileExpanded(null);
  };

  const hasOpenState = openMenu || mobileOpen;

  return (
    <>
      <style>{`
        .bar {
          display: block;
          width: 22px;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: transform 0.35s cubic-bezier(.77,0,.18,1),
                      opacity 0.2s ease,
                      width 0.35s cubic-bezier(.77,0,.18,1);
          transform-origin: center;
        }
        .menu-open .bar-top { transform: translateY(8px) rotate(45deg); }
        .menu-open .bar-mid { opacity: 0; width: 0; }
        .menu-open .bar-bot { transform: translateY(-8px) rotate(-45deg); }
      `}</style>

      {/* Overlay desktop */}
      {openMenu && (
        <div className="fixed inset-0 z-40 hidden lg:block" onClick={closeMenu} />
      )}

      {/* Header — medido con ref */}
      <header
        ref={headerRef}
        className={`${interTight.className} fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}
        style={{ background: hasOpenState ? "#FDF8ED" : "transparent" }}
      >
        {/* ── FILA PRINCIPAL ── */}
        <div className="relative flex items-center justify-between px-4 sm:px-8 lg:px-14 py-10 max-w-[1400px] mx-auto w-full">

          {/* Logo */}
          <div
            className="-translate-x-1  lg:-translate-x-4  flex-shrink-0 w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] lg:w-[88px] lg:h-[88px] bg-[#F5E642] rounded-2xl flex flex-col items-center justify-center cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.25)] transform -rotate-12 hover:-rotate-16"
            style={{ fontFamily: "'Lilita One', cursive" }}
          >
            <span className="text-xl sm:text-2xl lg:text-3xl text-black leading-none tracking-tighter">
              Logo
            </span>
          </div>

          {/* Pills — solo en lg+ */}
          <nav className="absolute left-1/2 -translate-x-1/2 bg-white text-black rounded-full px-2 py-1.5 lg:px-3 lg:py-2 gap-1 shadow-[0_2px_20px_rgba(0,0,0,0.12)] hidden lg:flex">
            {NAV_ITEMS.map((item) => {
              const icon = ICON_MAP[item.iconName as keyof typeof ICON_MAP];
              const isOpen = openMenu === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => toggleMenu(item.id)}
                  className={`flex items-center gap-2 px-3 xl:px-3.5 py-2 rounded-full border-none transition-colors duration-150 cursor-pointer
                    ${isOpen ? "bg-orange-100" : "bg-transparent hover:bg-orange-100"}`}
                >
                  <FontAwesomeIcon
                    icon={icon}
                    style={{ color: item.iconColor, width: 28, height: 28, flexShrink: 0 }}
                  />
                  <span className={`text-[12px] xl:text-[13px] leading-tight text-left whitespace-nowrap
                    ${isOpen ? "font-extrabold" : "font-semibold"}`}>
                    {item.lines[0]}
                    <br />
                    {item.lines[1]}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* ── DERECHA ── */}
          <div className="flex items-center gap-2 text-black">

            {/* Calendario y FAQ — siempre visibles */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleAction("calendar")}
                className={`group rounded-full flex items-center gap-0 px-3 py-2.5 border-none cursor-pointer transition-all duration-200 shadow-sm overflow-hidden
                  ${activeAction === "calendar" ? "bg-orange-100 hover:bg-orange-100" : "bg-white hover:bg-gray-100"}`}
              >
                <FontAwesomeIcon icon={faCalendar} className="flex-shrink-0 w-6! h-6!" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] group-hover:ml-2 transition-all duration-200 text-sm font-semibold whitespace-nowrap">
                  Calendario
                </span>
              </button>

              {/*<button
                onClick={() => handleAction("faq")}
                className={`group rounded-full flex items-center gap-0 px-3 py-2.5 border-none cursor-pointer transition-all duration-200 shadow-sm overflow-hidden
                  ${activeAction === "faq" ? "bg-orange-100 hover:bg-orange-100" : "bg-white hover:bg-gray-100"}`}
              >
                <FontAwesomeIcon icon={faCircleQuestion} className="flex-shrink-0 w-6! h-6!" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] group-hover:ml-2 transition-all duration-200 text-sm font-semibold whitespace-nowrap">
                  FAQ
                </span>
              </button>*/}
            </div>

            {/* Botón Menú con animación hamburger → X */}
            <button
              onClick={toggleMobile}
              className={`lg:hidden bg-white rounded-full flex items-center gap-2.5 px-4 py-2.5 border-none cursor-pointer hover:bg-gray-100 transition-colors shadow-sm ${mobileOpen ? "menu-open" : ""}`}
            >
              <div className="flex flex-col gap-[6px] w-[22px]">
                <span className="bar bar-top" />
                <span className="bar bar-mid" />
                <span className="bar bar-bot" />
              </div>
              <span className="text-sm font-semibold">Menú</span>
            </button>

          </div>
        </div>

        {/* ── MEGA MENU DESKTOP (lg+) ── */}
        {openMenu && (
          <div
            className="hidden lg:block w-full  animate-in slide-in-from-top-2 duration-200"
            style={{ background: "#FDF8ED" }}
          >
            <div className="relative">
              <button
                onClick={closeMenu}
                className="absolute top-3 right-5 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity z-10"
              >
                <X size={14} />
              </button>
              <div className="max-w-[1400px] mx-auto px-14">
                {MEGA_MAP[openMenu]}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── MENÚ MOBILE FULLSCREEN — empieza donde termina el header ── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 z-40 overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          style={{ background: "#FDF8ED", top: navHeight }}
        >
          {/* Contenido centrado */}
          <div className="flex flex-col items-center w-full px-6 py-4">
            <div className="w-full max-w-[400px]">

              {/* Título */}
              <p className="text-center text-sm font-semibold text-black/50 tracking-wide mb-6">
                Menú
              </p>

              {/* Separador superior */}
              <div className="border-t border-black/15" />

              {/* Ítems */}
              {NAV_ITEMS.map((item) => {
                const icon = ICON_MAP[item.iconName as keyof typeof ICON_MAP];
                const isExpanded = mobileExpanded === item.id;

                return (
                  <div key={item.id}>
                    <button
                      onClick={() =>
                        setMobileExpanded((prev) =>
                          prev === item.id ? null : item.id
                        )
                      }
                      className="w-full flex items-center justify-between gap-4 py-5 border-none bg-transparent cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <FontAwesomeIcon
                          icon={icon}
                          style={{ color: item.iconColor, width: 26, height: 26, flexShrink: 0 }}
                        />
                        <span className={`text-[17px] text-black leading-tight text-left
                          ${isExpanded ? "font-extrabold" : "font-bold"}`}>
                          {item.lines[0]} {item.lines[1]}
                        </span>
                      </div>

                      {/* Flecha circular — rota 90° cuando está expandido */}
                      <div className={`flex-shrink-0 w-9 h-9 rounded-full bg-black flex items-center justify-center transition-transform duration-300
                        ${isExpanded ? "rotate-90" : "group-hover:translate-x-1"}`}>
                        <ArrowRight size={16} color="white" />
                      </div>
                    </button>

                    {/* Submenú expandido */}
                    {isExpanded && (
                      <div className="pb-4 animate-in slide-in-from-top-1 duration-150">
                        {MEGA_MAP[item.id]}
                      </div>
                    )}

                    {/* Separador */}
                    <div className="border-t border-black/15" />
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      )}
    </>
  );
}