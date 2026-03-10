import { NavItem, MegaCategoryCard, BottomLink } from "../types/nav.types";

export const NAV_ITEMS: NavItem[] = [
  {
    id: "talleres",
    lines: ["Talleres", "& Cursos"],
    iconName: "Hand",
    iconColor: "#1DAB8E",
  },
  {
    id: "cafes",
    lines: ["Arte &", "Pinturas"],
    iconName: "Coffee",
    iconColor: "#1DAB8E",
  },
  {
    id: "fiestas",
    lines: ["Acerca", "de mi"],
    iconName: "Sparkles",
    iconColor: "#1DAB8E",
  },
  {
    id: "sedes",
    lines: ["Nuestra", "sede"],
    iconName: "MapPin",
    iconColor: "#1DAB8E",
  },
  /*{
    id: "membresias",
    lines: ["Precios", ""],
    iconName: "Crown",
    iconColor: "#D4820A",
  },*/
];

/* ── TALLERES ── */
export const TALLERES_CATEGORIES: MegaCategoryCard[] = [
  {
    title: "Técnicas de Pintura Tradicional",
    bg: "#9fcb9c",
    tags: [
      "Tecnicatura country",
      "Tecnicatura en pinceladas",
      "Tecnicatura en acuarelas",
      "Hiperrealismo en Color",
    ],
  },
  {
    title: "Explora el Arte Abstracto y Moderno",
    bg: "#C4B5F4",
    tags: [
      "Tecnicatura en Pintura Abstracta",
      "Hiperrealismo en Monocromo",
      "Mix Media",
    ],
  },
  {
    title: "Técnicas Avanzadas y Especializadas",
    bg: "#daf4d8",
    tags: [
      "Tecnicatura textil",
      "Hiperrealismo en Color",
    ],
  },
  {
    title: "Proyectos y Cursos de Aplicación Práctica",
    bg: "#FFD6E0",
    tags: [
      "Cursos de graffiti",
      "Boceto urbano",
    ],
  },
];

export const TALLERES_BOTTOM_LINKS: BottomLink[] = [
  { label: "Explora tus posibilidades creativas", sub: "Descubre todos los talleres y técnicas disponibles",  href: "#workshop" },
  { label: "Consulta nuestro calendario", sub: "Todos los talleres y cursos en un solo lugar", href: "#workshop" },
];

export const TALLERES_HERO_TAGS = [
  "Dibujo y pintura",
  "Pintura Decorativa",
  "Mix Media",
  "Tecnicatura en Paisajismo",
  "Tecnicatura en Pintura Abstracta",
];

/* ── CAFÉS ── */
export const CAFES_LOCATIONS: MegaCategoryCard[] = [
  {
    title: "CAFÉ CREATIVO\nBUENOS AIRES",
    bg: "#A8F0D0",
    tags: [
      "Pintura cerámica",
      "Comida & bebidas",
      "Fiestas pequeñas",
      "Eventos comunitarios BA",
      "Reservar mesa",
    ],
  },
  {
    title: "ESTUDIO CERÁMICA\nCÓRDOBA",
    bg: "#FFD6E0",
    tags: ["Pintura cerámica", "Fiestas pequeñas", "Reservar mesa"],
  },
];

export const CAFES_BOTTOM_LINKS: BottomLink[] = [
  { label: "Mis obras", sub: "Descubrí mis creaciones y técnicas", href: "#gallery" },
  { label: "Galería de alumnos", sub: "Explorá la creatividad de mis estudiantes", href: "#gallery" },
];

/* ── FIESTAS ── */
export const FIESTAS_CATEGORIES: MegaCategoryCard[] = [
  { title: "TEAM BUILDING", bg: "#FFB8C6", tags: [] },
  { title: "FIESTA DE COLOREAR", bg: "#C4B5F4", tags: [] },
  { title: "FIESTA INFANTIL", bg: "#A8F0D0", tags: [] },
  { title: "EVENTOS VIRTUALES", bg: "#A8F0D0", tags: [] },
  { title: "ACTION PAINTING", bg: "#FFB8A0", tags: [] },
  { title: "DESPEDIDA DE SOLTERA", bg: "#FFD6E0", tags: [] },
];

export const FIESTAS_BOTTOM_LINKS: BottomLink[] = [
  { label: "Síguenos en redes", sub: "Descubrí nuestras novedades y creaciones", href: "#social" },
  { label: "Contáctame", sub: "Estamos para responder tus dudas", href: "#contact" },
];

/* ── SEDES ── */
export const SEDES_LOCATIONS = [
  {
    title: "PIE BUENOS AIRES",
    tags: [
      "Café Creativo BA",
      "Estudio de Pintura BA",
      "Estudio de Cerámica BA",
      "Estudio Infantil BA",
    ],
    btn: "Explorar PIE Buenos Aires",
    bg: "linear-gradient(160deg,#2a2a2a,#3a3030)",
  },
  {
    title: "PIE CÓRDOBA",
    tags: [
      "Estudio Cerámica Córdoba",
      "Estudio Pintura Córdoba",
      "Estudio Cerámica Córdoba",
    ],
    btn: "Explorar PIE Córdoba",
    bg: "linear-gradient(160deg,#1a2a40,#2a1a3a)",
  },
];

export const SEDES_BOTTOM_LINKS: BottomLink[] = [
  { label: "Nuestra sede", sub: "Visitanos en San Patricio, Temperley", href: "https://www.google.com/maps/place/El+Taller+De+Adriana+Chac%C3%B3n/@-34.7520172,-58.3696269,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32d4a0dea6a71:0x60416eaccfa73378!8m2!3d-34.7520216!4d-58.367052!16s%2Fg%2F1tpbd4sb?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D" },
  { label: "Horarios y visitas", sub: "Conocé los días y horarios de los talleres", href: "#workshop" },
];

/* ── MEMBRESÍAS ── */
export const MEMBRESIAS_CARDS = [
  { title: "VOUCHERS", bg: "#B5EFC8", emoji: "🎁", btn: "Comprar vouchers" },
  {
    title: "MEMBRESÍAS",
    bg: "#C4D4F0",
    emoji: "💳",
    btn: "Descubrir membresías",
  },
  {
    title: "CAJAS DE REGALO",
    bg: "#FFD6E0",
    emoji: "🎨",
    btn: "Comprar caja de regalo",
  },
];

export const MEMBRESIAS_BOTTOM_LINKS: BottomLink[] = [
  { label: "Recargar crédito", sub: "Cargá crédito a tu tarjeta de membresía" },
  { label: "Consultar saldo", sub: "¿Cuánto crédito te queda?" },
];

export const STUDENTS_PAINTS = [
  "/students_paints/María_Del_Rosario.webp",
  "/students_paints/Ayeza.webp",
  "/students_paints/Agostina.webp",
  "/students_paints/Carmen.webp",
  "/students_paints/Edith.webp",
  "/students_paints/Celeste.webp",
  "/students_paints/Fabiana.webp",
  "/students_paints/Cecilia_K.webp",
];
