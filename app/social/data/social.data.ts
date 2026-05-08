import { SocialData } from "../types/social.types";

export const SOCIAL_DATA: SocialData = {
  tagline: "Seguime en mis redes",
  youtubeVideoId: "JpoFjlEjZhM", // reemplazá con tu video ID real
  cards: [
    {
      id: "youtube",
      platform: "youtube",
      icon: "fab fa-youtube",
      label: "YouTube",
      title: "Tutoriales y clases en video",
      description: "Técnicas paso a paso, desde acuarela hasta óleo. Suscribite y no te pierdas ningún video.",
      cta: "Ir al canal",
      url: "https://www.youtube.com/@adrianachacontallerdearte/featured",
      image: "/social_paints/youtube.webp",
      color: "#FFE5E5",
      tagColor: "#FF0000",
    },
    {
      id: "instagram",
      platform: "instagram",
      icon: "fab fa-instagram",
      label: "Instagram",
      title: "Obras y proceso creativo",
      description: "El día a día del taller, obras terminadas y el proceso detrás de cada pintura. Seguime.",
      cta: "Ver perfil",
      url: "https://www.instagram.com/adrianachacontallerdearte",
      image: "/social_paints/instagram.webp",
      color: "#FFE5F5",
      tagColor: "#E1306C",
    },
    {
      id: "pinterest",
      platform: "pinterest",
      icon: "fab fa-pinterest",
      label: "Pinterest",
      title: "Inspiración sin límites",
      description: "Tableros llenos de técnicas, paletas de colores y referencias para tus propias creaciones.",
      cta: "Ver tableros",
      url: "https://ar.pinterest.com/adrianitachacon/",
      image: "/social_paints/pinterest.webp",
      color: "#FFE5EA",
      tagColor: "#E60023",
    },
  ],
};