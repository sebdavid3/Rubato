import React, { useState } from 'react';
import { ArtistaInvitado } from '../../data/festival';

interface ArtistModalProps {
  artista: ArtistaInvitado;
  isOpen: boolean;
  onClose: () => void;
}

const ArtistModal: React.FC<ArtistModalProps> = ({ artista, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-bgDarkSection rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-textLight hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative overflow-hidden h-64 md:h-80">
            <img 
              src={artista.foto} 
              alt={artista.nombre}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textLight mb-2 font-cinzel">{artista.nombre}</h2>
            {artista.instrumento && (
              <p className="text-accent font-medium mb-2 font-montserrat text-lg">{artista.instrumento}</p>
            )}
            <p className="text-textSecondary font-montserrat mb-4 text-sm">{artista.pais}</p>
            {artista.biografia && (
              <p className="text-textSecondary font-montserrat leading-relaxed">{artista.biografia}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ArtistCardProps {
  artista: ArtistaInvitado;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artista }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={artista.foto} 
            alt={artista.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 right-4 bg-accent/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-textLight font-cinzel mb-2">
            {artista.nombre}
          </h3>
          {artista.instrumento && (
            <p className="text-accent font-medium mb-2 font-montserrat text-sm">
              {artista.instrumento}
            </p>
          )}
          <p className="text-textSecondary font-montserrat text-sm mb-3">
            {artista.pais}
          </p>
          {artista.biografia && (
            <p className="text-textLight font-montserrat text-sm line-clamp-2">
              {artista.biografia}
            </p>
          )}
          <p className="text-accent text-xs font-montserrat mt-3 font-medium">Haz clic para leer más</p>
        </div>
      </div>
      
      <ArtistModal 
        artista={artista}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

interface ArtistGridProps {
  titulo: string;
  artistas: ArtistaInvitado[];
  descripcion?: string;
}

const ArtistGrid: React.FC<ArtistGridProps> = ({ titulo, artistas, descripcion }) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-8 md:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
            {titulo}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          {descripcion && (
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              {descripcion}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artistas.map((artista) => (
            <ArtistCard key={artista.id} artista={artista} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistGrid;
