import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { getEdicionActual } from "../data/festival";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Fundación Rubato | Inicio",
  description: "Fundación dedicada a la formación musical integral, promoción de eventos culturales y desarrollo de jóvenes talentos en Colombia.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/galeria/logo_morado.png", sizes: "32x32", type: "image/png" },
      { url: "/images/galeria/logo_morado.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/galeria/logo_morado.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Obtener la edición actual del festival dinámicamente
  const edicionActual = getEdicionActual();
  const anoActual = edicionActual?.ano || 2025;

  // Ejemplo de estructura de navegación y datos de contacto
  const navLinks = [
    { texto: "Inicio", url: "/" },
    {
      texto: "Programas",
      subMenu: [
        { texto: "Conservatorio", url: "/conservatorio" },
        { texto: "Cursos Libres", url: "/cursos-libres" },
      ],
    },
    {
      texto: "Agrupaciones",
      subMenu: [
        { texto: "Filarmónica Juvenil", url: "/filarmonica-juvenil" },
        { texto: "RioMar Quartet", url: "/riomar-quartet" },
        { texto: "Orquesta de Cámara", url: "/orquesta-camara" },
      ],
    },
    {
      texto: "Festival Internacional de Música",
      subMenu: [
        { texto: "Festival 2025", url: `/festival/${anoActual}` },
        { texto: "Inscripciones", url: `/festival/${anoActual}/inscripciones` },
        { texto: "Cronograma", url: `/festival/${anoActual}/cronograma` },
        { texto: "Misión y Visión", url: "/festival/mision-vision" },
        { texto: "Archivo de Ediciones", url: "/festival/archivo" },
      ],
    },
    { texto: "Eventos", url: "/eventos" },
    { texto: "Acerca de Nosotros", url: "/acerca-nosotros/mision-vision" },
    { texto: "Contáctanos", url: "/contacto" },
  ];

  const infoContacto = {
    direccion: "Cl. 61 #37-44, Barranquilla, Atlántico",
    email: "info@fundacionrubato.org",
    telefonos: ["+57 123 456 7890"],
  };
  const socialLinks = [
    { nombre: "Facebook", url: "https://facebook.com/fundacionrubato" },
    { nombre: "Instagram", url: "https://instagram.com/fundacionrubato" },
    { nombre: "YouTube", url: "https://youtube.com/fundacionrubato" },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const quickLinks = [
    { texto: "Inicio", url: "/" },
    { texto: "Misión", url: "/acerca-nosotros" },
    { texto: "Eventos", url: "/eventos" },
    { texto: "Haz Parte", url: "/apoyanos" },
    { texto: "Conservatorio", url: "/conservatorio" },
    { texto: "Cursos Libres", url: "/cursos-libres" },
    { texto: "Contacto", url: "/contacto" },
  ];

  return (
    <html lang="es">
      <body className={`${cinzel.variable} ${montserrat.variable} antialiased bg-bgDark text-textLight font-serif`}>
        <div className="relative flex size-full min-h-screen flex-col">
          <div className="layout-container flex h-full grow flex-col">
            <Header navLinks={navLinks} />
            {children}
            <Footer infoContacto={infoContacto} socialLinks={socialLinks} />
          </div>
        </div>
      </body>
    </html>
  );
}
