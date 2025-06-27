import React, { useState } from 'react';
import { ArtistaInvitado } from '../../data/festival';
import Image from 'next/image';

interface ArtistModalProps {
  artista: ArtistaInvitado;
  isOpen: boolean;
  onClose: () => void;
}

const ArtistModal: React.FC<ArtistModalProps> = ({ artista, isOpen, onClose }) => {
  const [imgSrc, setImgSrc] = useState(artista.foto);

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
            <Image
              src={imgSrc}
              alt={artista.nombre}
              fill
              style={{objectFit: "cover"}}
              onError={() => setImgSrc('/images/placeholder.png')}
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

interface ArtistGridProps {
  titulo: string;
  artistas: ArtistaInvitado[];
  descripcion?: string;
}

const ArtistGrid: React.FC<ArtistGridProps> = ({ titulo, artistas, descripcion }) => {
  const [selectedArtist, setSelectedArtist] = useState<ArtistaInvitado | null>(null);

  const handleOpenModal = (artista: ArtistaInvitado) => {
    setSelectedArtist(artista);
  };

  const handleCloseModal = () => {
    setSelectedArtist(null);
  };

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
            <ArtistCard key={artista.id} artista={artista} onClick={() => handleOpenModal(artista)} />
          ))}
        </div>
      </div>
      {selectedArtist && (
        <ArtistModal
          artista={selectedArtist}
          isOpen={!!selectedArtist}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

interface ArtistCardProps {
  artista: ArtistaInvitado;
  onClick: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artista, onClick }) => {
  const [imgSrc, setImgSrc] = useState(artista.foto);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <div className="relative w-full h-64 md:h-80">
        <Image
          src={imgSrc}
          alt={artista.nombre}
          fill
          style={{objectFit: "cover"}}
          className="transition-opacity duration-300 group-hover:opacity-80"
          onError={() => setImgSrc('/images/placeholder.png')}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="relative p-4">
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
  );
};

export default ArtistGrid;
