import { HeroTab } from "../types/hero.types";

export const HERO_TABS: HeroTab[] = [
  {
    id: "workshops",
    label: "Sobre mi",
    bg: "#6B1A38",
    bgImage: "https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?w=1400&q=80",
    title: "Mi Pasión\npor\nla  Pintura.",
    subtitle:
      "Con años de experiencia, exploro paisajes, retratos y pintura de caballete\ncon un estilo propio que refleja mi técnica y dedicación.\nMis obras han sido publicadas en revistas como Ediciones Bienvenidas.",
    btnLabel: "Ver mi taller online",
    linkLabel: "saber más",
    btnScrollTo: "social",      // ← Ver mis obras → social
    linkScrollTo: "fiestas",
  },
  {
    id: "parties",
    label: "Taller Creativo",
    bg: "#0d3d35",
    bgImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1400&q=80",
    title: "Donde Nace\nla\nCreatividad.",
    subtitle:
      "En Mi Taller, cada alumno desarrolla su creatividad en un espacio cálido y guiado.\nCada obra es única y refleja su esfuerzo y talento.\nAprenden técnica y disfrutan creando en comunidad.",
    btnLabel: "Descubrí los cursos",
    linkLabel: "Inspirarme",
    btnScrollTo: "workshop",    // ← Ver trabajos → talleres
    linkScrollTo: "gallery",
  },
];

export const IMAGES_LEFT: string[] = [
  "/hero_paints/Africana.webp",
  "/hero_paints/Delicada_Esencia.webp",
  "/hero_paints/Frutera_De_Cristal.webp",
  "/hero_paints/Caballito_Blanco.webp",
  "/hero_paints/Callecita_De_Málaga.webp",
  "/hero_paints/Flores_Blancas.webp",
];

export const IMAGES_RIGHT: string[] = [
  "/hero_paints/Mi_Chica_Triste.webp",
  "/hero_paints/Taller_De_Arte.webp",
  "/hero_paints/El_Sombrero_Rojo.webp",
  "/hero_paints/Pies_Danzantes.webp",
  "/hero_paints/Atardecer_En_El_Campo.webp",
  "/hero_paints/Cataratas.webp",
];

export const BLOB_SETS: string[][] = [
  ["#FFB3C1", "#A8D8EA", "#B5EAD7", "#FFDAC1"],
  ["#B5EAD7", "#FFDAC1", "#FFB3C1", "#A8D8EA"],
  ["#A8D8EA", "#B5EAD7", "#FFDAC1", "#FFB3C1"],
  ["#FFDAC1", "#FFB3C1", "#A8D8EA", "#B5EAD7"],
  ["#FFB3C1", "#B5EAD7", "#A8D8EA", "#FFDAC1"],
  ["#A8D8EA", "#FFDAC1", "#FFB3C1", "#B5EAD7"],
];

export const CARD_GAP = 16;

/* ── Dimensiones de cards por breakpoint ── */
export const CARD_SIZES = {
  mobile:  { width: 140, height: 190 },  // < 768px  — usado en ScrollRow
  tablet:  { width: 160, height: 240 },  // 768–1024px — card más chica que el contenedor
  laptop:  { width: 200, height: 300 },  // 1024–1280px
  desktop: { width: 260, height: 380 },  // 1280px+
};

// Aliases para compatibilidad con PhotoCard y ScrollColumn existentes
// Por defecto usan desktop — cada breakpoint los sobreescribe vía props
export const CARD_WIDTH  = CARD_SIZES.desktop.width;
export const CARD_HEIGHT = CARD_SIZES.desktop.height;


