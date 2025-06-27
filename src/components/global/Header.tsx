'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SubMenu {
  texto: string;
  url: string;
}

interface NavLink {
  texto: string;
  url?: string;
  subMenu?: SubMenu[];
}

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [subMenuAbierto, setSubMenuAbierto] = useState<string | null>(null);
  const [subMenuMovilAbierto, setSubMenuMovilAbierto] = useState<string | null>(null);

  const handleMobileMenuToggle = () => {
    setMenuAbierto(!menuAbierto);
    setSubMenuAbierto(null);
    setSubMenuMovilAbierto(null);
  };

  const handleMouseEnter = (texto: string) => {
    setSubMenuAbierto(texto);
  };

  const handleMouseLeave = () => {
    setSubMenuAbierto(null);
  };

  const toggleSubMenuMovil = (texto: string) => {
    setSubMenuMovilAbierto(subMenuMovilAbierto === texto ? null : texto);
  };

  return (
    <header className="sticky top-0 z-50 bg-bgDark border-b border-bgDarkSection">
      {/* INICIO DEL BLOQUE A REEMPLAZAR */}
      {/* 
        CAMBIO PRINCIPAL: Usamos `justify-between` para separar los dos grupos principales:
        1. El contenido de la izquierda (logo + nav de escritorio).
        2. El botón de menú móvil (que se alinea a la derecha).
      */}
      <div className="flex items-center px-4 sm:px-6 lg:px-8 py-4 lg:py-6 h-16 lg:h-20 header-container">
        
        {/* NUEVO CONTENEDOR: Agrupa el logo y la navegación de escritorio para que siempre permanezcan juntos a la izquierda. */}
        <div className="flex items-center gap-4 lg:gap-6 xl:gap-8">
          {/* Logo y nombre - Sin cambios, ahora dentro del nuevo contenedor */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-textLight flex-shrink-0 hover:opacity-80 transition-opacity group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bgDark rounded-md header-logo-link"
            aria-label="Ir al inicio - Fundación Rubato"
          >
            <Image
              src="/images/galeria/fundacion-caracola.png"
              alt="Logo Fundación Caracola"
              width={40}
              height={40}
              className="object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="text-textLight font-bold leading-tight tracking-[-0.015em] font-cinzel uppercase">
              <span className="sm:hidden header-logo-text">Fundación Rubato</span>
              <span className="hidden sm:inline text-lg xl:text-xl">Fundación Rubato</span>
            </div>
          </Link>
          
          {/* Navegación desktop - Sin cambios, ahora dentro del nuevo contenedor */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-4">
              {navLinks.map((link, index) => (
                link.subMenu ? (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(link.texto)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      href={link.url || '#'}
                      className="text-textLight text-sm xl:text-base font-medium leading-normal hover:text-accent transition-colors font-montserrat py-2 px-1 text-center whitespace-nowrap"
                    >
                      {link.texto}
                    </Link>
                    {subMenuAbierto === link.texto && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-bgDark border border-bgDarkSection rounded-lg shadow-xl z-50 min-w-48 py-2">
                        {link.subMenu.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.url || '#'}
                            className="block px-4 py-3 text-textLight hover:text-accent hover:bg-bgDarkSection text-sm font-montserrat transition-colors"
                          >
                            {subLink.texto}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    key={index}
                    className="text-textLight text-sm xl:text-base font-medium leading-normal hover:text-accent transition-colors font-montserrat py-2 px-2 text-center whitespace-nowrap"
                    href={link.url || '#'}
                  >
                    {link.texto}
                  </Link>
                )
              ))}
              
              <Link 
                href="/apoyanos"
                className="bg-accent text-textLight px-5 xl:px-6 py-2.5 ml-4 xl:ml-6 rounded-lg font-medium text-sm xl:text-base hover:bg-primary transition-colors font-montserrat whitespace-nowrap shadow-md hover:shadow-lg"
              >
                Apóyanos
              </Link>
            </nav>
        </div>
          
        {/* Botón menú móvil - Solo visible en móvil, posicionado a la derecha con margin-left auto */}
        <button
          className="lg:hidden text-textLight rounded-md hover:bg-bgDarkSection transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bgDark active:bg-accent active:scale-95 header-menu-button flex items-center justify-center ml-auto"
          onClick={handleMobileMenuToggle}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* FIN DEL BLOQUE A REEMPLAZAR */}
      
      {/* Menú móvil mejorado con scroll y submenús desplegables - PANTALLA COMPLETA */}
      {menuAbierto && (
        <div className="lg:hidden bg-bgDark border-t border-bgDarkSection h-screen overflow-y-auto">
          <nav className="px-4 py-6 space-y-4 min-h-full">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.subMenu ? (
                  <div>
                    {/* Enlace principal con flecha desplegable */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.url || '#'}
                        className="block text-textLight hover:text-accent text-base font-medium py-2 transition-colors font-montserrat flex-1"
                        onClick={() => setMenuAbierto(false)}
                      >
                        {link.texto}
                      </Link>
                      <button
                        onClick={() => toggleSubMenuMovil(link.texto)}
                        className="text-textLight hover:text-accent p-2 transition-colors"
                        aria-label={`${subMenuMovilAbierto === link.texto ? 'Cerrar' : 'Abrir'} submenú de ${link.texto}`}
                      >
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${subMenuMovilAbierto === link.texto ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {/* Submenú desplegable */}
                    {subMenuMovilAbierto === link.texto && (
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-accent/30 pl-4">
                        {link.subMenu.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.url || '#'}
                            className="block text-textLight/80 hover:text-accent text-sm py-1 transition-colors font-montserrat"
                            onClick={() => setMenuAbierto(false)}
                          >
                            {subLink.texto}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.url || '#'}
                    className="block text-textLight hover:text-accent text-base font-medium py-2 transition-colors font-montserrat"
                    onClick={() => setMenuAbierto(false)}
                  >
                    {link.texto}
                  </Link>
                )}
              </div>
            ))}
            
            <Link 
              href="/apoyanos"
              className="block bg-accent text-textLight px-6 py-3 rounded-lg font-medium text-base hover:bg-primary transition-colors font-montserrat text-center mt-6"
              onClick={() => setMenuAbierto(false)}
            >
              Apóyanos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;