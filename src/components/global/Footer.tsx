import React from "react";

interface FooterProps {
  infoContacto: { direccion: string; email: string; telefonos: string[] };
  socialLinks: Array<{ nombre: string; url: string }>;
}

const enlacesRapidos = [
  { nombre: "Inicio", url: "/" },
  { nombre: "Acerca de Nosotros", url: "/acerca-nosotros/mision-vision" },
  { nombre: "Eventos", url: "/eventos" },
  { nombre: "Festival", url: "/festival/2025" },
  { nombre: "Contáctanos", url: "/contacto" },
];

const programas = [
  { nombre: "Conservatorio", url: "/conservatorio" },
  { nombre: "Filarmónica Juvenil", url: "/filarmonica-juvenil" },
  { nombre: "Cursos Libres", url: "/cursos-libres" },
];

const Footer: React.FC<FooterProps> = ({ infoContacto, socialLinks }) => (
  <footer className="bg-bgDark text-textLight py-8 lg:py-12 mt-12 border-t border-bgDarkSection">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid principal del footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        
        {/* Sección de contacto */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg mb-3 text-accent font-cinzel">Contacto</h4>
          <div className="space-y-2">
            <p className="font-montserrat text-sm text-textSecondary">{infoContacto.direccion}</p>
            <p className="font-montserrat text-sm text-textSecondary">{infoContacto.email}</p>
            <p className="font-montserrat text-sm text-textSecondary">
              {infoContacto.telefonos.join(" • ")}
            </p>
          </div>
          
          {/* Redes sociales */}
          <div className="pt-4">
            <h5 className="font-medium text-textLight mb-3 font-cinzel">Síguenos</h5>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors font-montserrat text-sm"
                  aria-label={`Síguenos en ${link.nombre}`}
                >
                  {link.nombre}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg mb-3 text-accent font-cinzel">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            {enlacesRapidos.map((enlace, idx) => (
              <li key={idx}>
                <a 
                  href={enlace.url} 
                  className="hover:text-primary transition-colors font-montserrat text-sm text-textSecondary"
                >
                  {enlace.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programas */}
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <h4 className="font-bold text-lg mb-3 text-accent font-cinzel">Nuestros Programas</h4>
          <ul className="space-y-2">
            {programas.map((prog, idx) => (
              <li key={idx}>
                <a 
                  href={prog.url} 
                  className="hover:text-primary transition-colors font-montserrat text-sm text-textSecondary"
                >
                  {prog.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-bgDarkSection mt-8 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center sm:text-left text-xs text-textSecondary font-montserrat">
            © {new Date().getFullYear()} Fundación Rubato. Todos los derechos reservados.
          </div>
          
          {/* Logo pequeño */}
          <div className="flex items-center gap-2">
            <img
              src="/images/galeria/fundacion-caracola.png"
              alt="Logo Fundación Caracola"
              className="w-6 h-6 object-contain opacity-70"
            />
            <span className="text-xs text-textSecondary font-cinzel">Fundación Rubato</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
