import { FooterData } from "../types/footer.types";

export const FOOTER_DATA: FooterData = {
  tagline: ["Taller de", "Arte", "Adriana"],
  description:
    "Un espacio cálido donde la creatividad florece. Cursos, talleres y mucho más en Temperley, Buenos Aires.",
  address: "San Patricio 50, Temperley, Buenos Aires",
  email: "hola@adrianachacon.com",
  instagram: "@adrianachacontallerdearte",
  socials: [
    {
      label: "YouTube",
      href: "https://www.youtube.com/@adrianachacontallerdearte/featured",
      bg: "#FF0000",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/adrianachacontallerdearte",
      bg: "#E1306C",
    },
    {
      label: "Pinterest",
      href: "https://ar.pinterest.com/adrianitachacon/",
      bg: "#E60023",
    },
  ],
  columns: [
    {
      title: "Talleres",
      links: [
        { label: "Pintura Tradicional", href: "#" },
        { label: "Arte Abstracto", href: "#" },
        { label: "Técnicas Avanzadas", href: "#" },
        { label: "Mix Media", href: "#" },
        { label: "Proyectos Urbanos", href: "#" },
       
      ],
    },
    {
      title: "Acerca",
      links: [
        { label: "Mis obras", href: "#" },
        { label: "Galería de alumnos", href: "#" },
        { label: "Sobre mí", href: "#" },
        { label: "Nuestra sede", href: "#" },
        { label: "Contáctame", href: "#" },
      ],
    },
  ],
  legal: [
    { label: "Política de privacidad", href: "#" },
    { label: "Términos y condiciones", href: "#" },
    { label: "Preguntas frecuentes", href: "#" },
  ],
  copyright: "© 2025 Adriana Chacón · Taller de Arte · Todos los derechos reservados",
};