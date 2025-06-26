"use client";

import React, { useState, useEffect } from "react";

interface NavLink {
  texto: string;
  url?: string;
  subMenu?: NavLink[];
}

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [subMenuAbierto, setSubMenuAbierto] = useState<string | null>(null);
  const [mobileSubMenuAbierto, setMobileSubMenuAbierto] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [currentPath, setCurrentPath] = useState("");

  // Detectar la ruta actual para el comportamiento dinámico del logo
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Cerrar menú móvil al cambiar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuAbierto(false);
        setMobileSubMenuAbierto(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuAbierto]);

  const handleMouseEnter = (texto: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setSubMenuAbierto(texto);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setSubMenuAbierto(null);
    }, 150); // 150ms delay antes de cerrar
    setTimeoutId(id);
  };

  const handleMobileMenuToggle = () => {
    setMenuAbierto(!menuAbierto);
    setMobileSubMenuAbierto(null);
  };

  const handleMobileSubMenuToggle = (texto: string) => {
    setMobileSubMenuAbierto(mobileSubMenuAbierto === texto ? null : texto);
  };

  // Limpiar timeout al desmontar el componente
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <header className="sticky top-0 z-50 bg-bgDark border-b border-bgDarkSection">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 h-16 header-container">
        {/* Logo y nombre - Todo clickeable para ir al home */}
        <a 
          href="/" 
          className="flex items-center gap-2 sm:gap-4 text-textLight min-w-0 flex-shrink-0 hover:opacity-80 transition-opacity group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bgDark rounded-md header-logo-link"
          aria-label="Ir al inicio - Fundación Rubato"
        >
          <img
            src="/images/galeria/fundacion-caracola.png"
            alt="Logo Fundación Caracola"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
          />
          <div className="text-textLight font-bold leading-tight tracking-[-0.015em] font-cinzel uppercase min-w-0">
            {/* Versión móvil: texto optimizado para pantallas pequeñas */}
            <span className="sm:hidden header-logo-text">Fundación Rubato</span>
            {/* Versión desktop */}
            <span className="hidden sm:inline text-lg">Fundación Rubato</span>
          </div>
        </a>
        
        {/* Navegación desktop */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, index) => (
            link.subMenu ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.texto)}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href={link.url || (link.subMenu && link.subMenu[0]?.url)}
                  className="text-textLight text-sm xl:text-base font-medium leading-normal hover:text-accent transition-colors font-montserrat py-2"
                >
                  {link.texto}
                </a>
                {subMenuAbierto === link.texto && (
                  <div className="absolute top-full left-0 mt-1 bg-bgDark border border-bgDarkSection rounded-lg shadow-xl z-50 min-w-48 py-2">
                    {link.subMenu.map((subLink, subIndex) => (
                      <a
                        key={subIndex}
                        href={subLink.url}
                        className="block px-4 py-3 text-textLight hover:text-accent hover:bg-bgDarkSection text-sm font-montserrat transition-colors"
                      >
                        {subLink.texto}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a 
                key={index}
                className="text-textLight text-sm xl:text-base font-medium leading-normal hover:text-accent transition-colors font-montserrat py-2" 
                href={link.url}
              >
                {link.texto}
              </a>
            )
          ))}
          
          {/* Botón Apóyanos desktop */}
          <a 
            href="/apoyanos"
            className="bg-accent text-textLight px-4 py-2 rounded-lg font-medium text-sm xl:text-base hover:bg-primary transition-colors font-montserrat whitespace-nowrap"
          >
            Apóyanos
          </a>
        </nav>
        
        {/* Botón menú móvil */}
        <button
          className="lg:hidden text-textLight rounded-md hover:bg-bgDarkSection transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bgDark active:bg-accent active:scale-95 header-menu-button flex items-center justify-center"
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
      
      {/* Menú móvil mejorado */}
      {menuAbierto && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
            onClick={() => setMenuAbierto(false)}
            aria-hidden="true"
          />
          
          {/* Panel del menú */}
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-bgDark lg:hidden z-50 overflow-y-auto">
            <nav className="px-4 py-6" role="navigation" aria-label="Menú principal móvil">
              {navLinks.map((link, index) => (
                <div key={index} className="border-b border-bgDarkSection last:border-b-0">
                  {link.subMenu ? (
                    <div>
                      {/* Enlace principal para elementos con submenú */}
                      {link.url && (
                        <a
                          href={link.url}
                          className="flex items-center px-4 py-4 text-textLight hover:bg-bgDarkSection font-montserrat text-base font-medium transition-colors rounded-lg min-h-[48px] active:bg-accent touch-manipulation border-l-4 border-accent"
                          onClick={() => setMenuAbierto(false)}
                          role="menuitem"
                        >
                          <svg 
                            className="w-5 h-5 mr-3 text-accent" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-4 4" />
                          </svg>
                          {link.texto}
                        </a>
                      )}
                      
                      {/* Botón para desplegar submenú */}
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-textLight hover:bg-bgDarkSection font-montserrat text-left transition-colors rounded-lg min-h-[44px] active:bg-accent touch-manipulation"
                        onClick={() => handleMobileSubMenuToggle(link.texto)}
                        aria-expanded={mobileSubMenuAbierto === link.texto}
                        aria-controls={`submenu-${index}`}
                      >
                        <span className="text-base font-medium">
                          {link.texto}
                        </span>
                        <svg 
                          className={`w-5 h-5 transform transition-transform ${mobileSubMenuAbierto === link.texto ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {mobileSubMenuAbierto === link.texto && (
                        <div 
                          className="bg-bgDarkSection rounded-lg mt-2 overflow-hidden"
                          id={`submenu-${index}`}
                          role="menu"
                          aria-label={`Submenú de ${link.texto}`}
                        >
                          {link.subMenu.map((subLink, subIndex) => (
                            <a
                              key={subIndex}
                              href={subLink.url}
                              className="flex items-center px-6 py-3 text-textLight hover:text-accent hover:bg-bgDark font-montserrat transition-colors text-sm min-h-[44px] active:bg-accent touch-manipulation"
                              onClick={() => setMenuAbierto(false)}
                              role="menuitem"
                            >
                              {subLink.texto}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={link.url}
                      className="flex items-center px-4 py-4 text-textLight hover:bg-bgDarkSection font-montserrat text-base font-medium transition-colors rounded-lg min-h-[48px] active:bg-accent touch-manipulation"
                      onClick={() => setMenuAbierto(false)}
                      role="menuitem"
                    >
                      {link.texto}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Botón Apóyanos para móvil */}
              <div className="mt-6 px-4">
                <a 
                  href="/apoyanos"
                  className="flex items-center justify-center text-center bg-accent text-textLight px-6 py-4 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat text-base min-h-[48px] active:bg-primary active:scale-95 touch-manipulation"
                  onClick={() => setMenuAbierto(false)}
                >
                  Apóyanos
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
