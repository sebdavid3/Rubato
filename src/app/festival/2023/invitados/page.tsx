"use client";

import React, { useState } from 'react';
import ArtistGrid from '../../../../components/festival/ArtistGrid';
import { getFestivalData } from '../../../../data/festival';
import type { ArtistaInvitado } from '../../../../data/festival';

// Modal para mostrar información del artista
const ArtistModal: React.FC<{ artista: ArtistaInvitado; isOpen: boolean; onClose: () => void }> = ({ artista, isOpen, onClose }) => {
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold font-cinzel mb-2">{artista.nombre}</h3>
              {artista.instrumento && (
                <p className="text-accent font-medium text-lg font-montserrat">{artista.instrumento}</p>
              )}
              <p className="text-white/90 font-montserrat">{artista.pais}</p>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            {artista.biografia && (
              <div>
                <h4 className="text-lg font-bold text-accent font-cinzel mb-4 uppercase">Biografía</h4>
                <p className="text-textSecondary font-montserrat leading-relaxed">{artista.biografia}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Invitados2023() {
  const { edicion, artistas, equipoDirectivo } = getFestivalData(2023);
  const [selectedArtist, setSelectedArtist] = useState<ArtistaInvitado | null>(null);

  if (!edicion) {
    return <div>Edición no encontrada</div>;
  }

  // Separar artistas por categoría
  const artistasInternacionales = artistas.filter(a => a.pais !== 'Colombia');
  const artistasNacionales = artistas.filter(a => a.pais === 'Colombia');

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Banner de archivo */}
      <div className="bg-accent/10 border-b border-accent/20 py-3">
        <div className="container mx-auto px-8 text-center">
          <p className="text-accent font-semibold font-montserrat">
            Archivo Histórico - Artistas Invitados 2023
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Artistas Invitados 2023
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            Los músicos que hicieron posible la primera edición del festival
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      {/* Artistas Internacionales */}
      <ArtistGrid
        titulo="Artistas Internacionales"
        artistas={artistasInternacionales}
        descripcion="Músicos de talla internacional que nos acompañaron desde Chile, España y Suiza."
      />

      {/* Artistas Nacionales */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Artistas Nacionales
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Talento colombiano que representó la excelencia musical nacional en nuestra primera edición.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {artistasNacionales.map((artista) => (
              <div 
                key={artista.id} 
                className="bg-bgDark rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedArtist(artista)}
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
            ))}
          </div>
        </div>
      </section>



      {/* Enlaces de navegación */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/festival/2023"
              className="bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
            >
              Volver al Festival 2023
            </a>
            <a 
              href="/festival/2023/cronograma"
              className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat"
            >
              Ver Cronograma 2023
            </a>
            <a 
              href="/festival/archivo"
              className="bg-transparent border-2 border-textSecondary text-textSecondary px-8 py-3 rounded-lg font-medium hover:bg-textSecondary hover:text-bgDark transition-colors font-montserrat"
            >
              Archivo de Ediciones
            </a>
          </div>
        </div>
      </section>

      {/* Modal del artista */}
      <ArtistModal 
        artista={selectedArtist!}
        isOpen={!!selectedArtist}
        onClose={() => setSelectedArtist(null)}
      />
    </main>
  );
}
