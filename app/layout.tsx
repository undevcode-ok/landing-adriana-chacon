import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Academia de Arte Adriana Chacón",
  description: "Taller de arte de Adriana Chacón es un espacio dedicado a la enseñanza y promoción del arte. Ofrecemos clases de dibujo, pintura, escultura y otras disciplinas artísticas para todas las edades y niveles de experiencia. Nuestro objetivo es fomentar la creatividad y el desarrollo artístico de nuestros estudiantes en un ambiente acogedor y estimulante.",
  icons: {
    icon: "/logo/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
