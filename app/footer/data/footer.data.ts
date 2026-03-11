import { FooterData } from "../types/footer.types";

export const FOOTER_DATA: FooterData = {
  tagline: ["Taller de", "Arte", "Adriana", "Chacón"],
  description:
    "Un espacio cálido donde la creatividad florece. Cursos, talleres y mucho más en Temperley, Buenos Aires.",
  address: "San Patricio 50, Temperley, Buenos Aires",
  email: "hola@adrianachacon.com",
  instagram: "@adrianachacontallerdearte",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/adrianachacontallerdearte",
      bg: "#1877F2",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/adrianachacontallerdearte",
      bg: "#E1306C",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@adrianachacontallerdearte",
      bg: "#FF0000",
    },
    {
      label: "Pinterest",
      href: "https://ar.pinterest.com/adrianitachacon/",
      bg: "#E60023",
    },
    {
      label: "LinkedIn",
      href: "https://ar.linkedin.com/in/adriana-gladys-chacon-201b6b117",
      bg: "#0A66C2",
    },
    {
      label: "X",
      href: "https://x.com/adriana__chacon",
      bg: "#000000",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@adrianachacontaller",
      bg: "#010101",
    },
    {
      label: "Tumblr",
      href: "https://www.tumblr.com/adrianachacontallerdearte",
      bg: "#35465C",
    },
  ],
  columns: [
    {
      title: "Explorá",
      links: [
        { label: "Redes Sociales",          href: "#social" },
        { label: "Talleres y Cursos",        href: "#workshop" },
        { label: "Comentarios de alumnos",   href: "#rocommendations" },
        { label: "Pinturas de alumnos",      href: "#gallery" },
      ],
    },
    {
      title: "Acerca",
      links: [
        { label: "Sobre mí",       href: "nav:fiestas" },
        { label: "Nuestra sede",    href: "nav:sedes" },
        
      ],
    },
  ],
  legal: [
    { label: "Política de privacidad", href: "#" },
    { label: "Términos y condiciones", href: "#" },
    { label: "Preguntas frecuentes",   href: "#" },
  ],
  copyright: "© 2026 Adriana Chacón · Taller de Arte · Todos los derechos reservados",
};

