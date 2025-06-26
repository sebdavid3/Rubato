import React from 'react';

interface HeroFestivalProps {
  tituloEdicion: string;
  subtituloEdicion: string;
  descripcion?: string;
  logoFestival?: string;
  imagenFondo?: string;
  fechas?: string;
  ubicacion?: string;
}

const HeroFestival: React.FC<HeroFestivalProps> = ({
  tituloEdicion,
  subtituloEdicion,
  descripcion,
  logoFestival,
  imagenFondo,
  fechas,
  ubicacion
}) => {
  return (
    <section 
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent"
      style={imagenFondo ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imagenFondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        {logoFestival && (
          <img 
            src={logoFestival} 
            alt="Logo Festival" 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 mx-auto mb-4 sm:mb-6 object-contain"
          />
        )}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-cinzel uppercase mb-3 sm:mb-4 leading-tight">
          {tituloEdicion}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-cinzel uppercase mb-4 sm:mb-6 text-accent leading-tight">
          {subtituloEdicion}
        </h2>
        {descripcion && (
          <p className="text-base sm:text-lg md:text-xl font-montserrat max-w-3xl mx-auto mb-4 sm:mb-6 font-medium leading-relaxed">
            {descripcion}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 text-sm sm:text-base md:text-lg font-montserrat">
          {fechas && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-center sm:text-left">{fechas}</span>
            </div>
          )}
          {ubicacion && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-center sm:text-left">{ubicacion}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroFestival;
