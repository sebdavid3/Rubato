import React from 'react';
import { Patrocinador } from '../../data/festival';

interface SponsorBannerProps {
  titulo: string;
  patrocinadores: Patrocinador[];
  descripcion?: string;
}

const SponsorBanner: React.FC<SponsorBannerProps> = ({ titulo, patrocinadores, descripcion }) => {
  const principales = patrocinadores.filter(p => p.tipo === 'principal');
  const colaboradores = patrocinadores.filter(p => p.tipo === 'colaborador');
  const apoyo = patrocinadores.filter(p => p.tipo === 'apoyo');

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-bgDarkSection">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-3 sm:mb-4">
            {titulo}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
          {descripcion && (
            <p className="text-textSecondary text-base sm:text-lg font-montserrat max-w-3xl mx-auto leading-relaxed">
              {descripcion}
            </p>
          )}
        </div>

        {principales.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-accent font-cinzel text-center mb-6 sm:mb-8 uppercase">
              Patrocinadores Principales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center">
              {principales.map((patrocinador) => (
                <div 
                  key={patrocinador.id}
                  className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 min-h-[100px] sm:min-h-[120px]"
                >
                  {patrocinador.sitioWeb ? (
                    <a 
                      href={patrocinador.sitioWeb} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex w-full h-full items-center justify-center"
                    >
                      <img 
                        src={patrocinador.logoUrl} 
                        alt={patrocinador.nombre}
                        className="w-full h-12 sm:h-16 object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  ) : (
                    <img 
                      src={patrocinador.logoUrl} 
                      alt={patrocinador.nombre}
                      className="w-full h-12 sm:h-16 object-contain"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {colaboradores.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h3 className="text-base sm:text-lg font-bold text-accent font-cinzel text-center mb-4 sm:mb-6 uppercase">
              Colaboradores
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 items-center">
              {colaboradores.map((patrocinador) => (
                <div 
                  key={patrocinador.id}
                  className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 min-h-[80px] sm:min-h-[100px]"
                >
                  {patrocinador.sitioWeb ? (
                    <a 
                      href={patrocinador.sitioWeb} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex w-full h-full items-center justify-center"
                    >
                      <img 
                        src={patrocinador.logoUrl} 
                        alt={patrocinador.nombre}
                        className="w-full h-8 sm:h-10 md:h-12 object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  ) : (
                    <img 
                      src={patrocinador.logoUrl} 
                      alt={patrocinador.nombre}
                      className="w-full h-8 sm:h-10 md:h-12 object-contain"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {apoyo.length > 0 && (
          <div>
            <h3 className="text-base sm:text-lg font-bold text-accent font-cinzel text-center mb-4 sm:mb-6 uppercase">
              Con el Apoyo de
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 md:gap-4 items-center">
              {apoyo.map((patrocinador) => (
                <div 
                  key={patrocinador.id}
                  className="flex items-center justify-center p-2 sm:p-3 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 min-h-[60px] sm:min-h-[70px]"
                >
                  {patrocinador.sitioWeb ? (
                    <a 
                      href={patrocinador.sitioWeb} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex w-full h-full items-center justify-center"
                    >
                      <img 
                        src={patrocinador.logoUrl} 
                        alt={patrocinador.nombre}
                        className="w-full h-6 sm:h-8 object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  ) : (
                    <img 
                      src={patrocinador.logoUrl} 
                      alt={patrocinador.nombre}
                      className="w-full h-6 sm:h-8 object-contain"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SponsorBanner;
