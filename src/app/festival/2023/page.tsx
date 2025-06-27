"use client";

import React, { useState } from 'react';
import HeroFestival from '../../../components/festival/HeroFestival';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ArtistGrid from '../../../components/festival/ArtistGrid';
import SponsorBanner from '../../../components/festival/SponsorBanner';
import { getFestivalData } from '../../../data/festival';
import type { ArtistaInvitado } from '../../../data/festival';

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

export default function Festival2023() {
  const { edicion, artistas, patrocinadores, lideres } = getFestivalData(2023);
  const [selectedArtist, setSelectedArtist] = useState<ArtistaInvitado | null>(null);

  if (!edicion) {
    return <div>Edición no encontrada</div>;
  }

  const fechasFormateadas = edicion.fechaInicio && edicion.fechaFin 
    ? `${new Date(edicion.fechaInicio).toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'long' 
      })} - ${new Date(edicion.fechaFin).toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      })}`
    : undefined;

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Banner de archivo */}
      <div className="bg-accent/10 border-b border-accent/20 py-3">
        <div className="container mx-auto px-8 text-center">
          <p className="text-accent font-semibold font-montserrat">
            Archivo Histórico
          </p>
        </div>
      </div>

      <HeroFestival
        tituloEdicion="Festival Rubato 2023"
        subtituloEdicion={edicion.nombre}
        descripcion={edicion.descripcion}
        fechas={fechasFormateadas}
        ubicacion={edicion.ubicacion}
        imagenFondo="/images/festival/2023/hero-bg.jpg"
      />

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Artistas que Participaron
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Revive los momentos especiales con los músicos internacionales que nos acompañaron en esta memorable edición.
            </p>
          </div>
        </div>
        
        {/* Carrusel de artistas que ocupa todo el ancho */}
        <div className="relative w-full">
          {/* Botones de navegación */}
          <button 
            onClick={() => {
              const container = document.getElementById('artistas-scroll');
              container?.scrollBy({ left: -320, behavior: 'smooth' });
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-bgDarkSection/80 backdrop-blur-sm hover:bg-accent/80 text-textLight rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-accent/20"
            aria-label="Artistas anteriores"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => {
              const container = document.getElementById('artistas-scroll');
              container?.scrollBy({ left: 320, behavior: 'smooth' });
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-bgDarkSection/80 backdrop-blur-sm hover:bg-accent/80 text-textLight rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-accent/20"
            aria-label="Siguientes artistas"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Gradientes laterales para indicar scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bgDark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bgDark to-transparent z-10 pointer-events-none"></div>

          {/* Container de scroll */}
          <div 
            id="artistas-scroll"
            className="overflow-x-auto scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 px-8" style={{ width: 'max-content' }}>
              {artistas.map((artista) => (
                <div 
                  key={artista.id} 
                  className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 w-80 flex-shrink-0 cursor-pointer"
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
        </div>

        <div className="container mx-auto px-8 md:px-16 max-w-7xl">
          <div className="text-center mt-12">
            <a 
              href="/festival/2023/invitados"
              className="inline-block bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
            >
              Ver Todos los Invitados
            </a>
          </div>
        </div>
      </section>

      {/* Galería de Momentos */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Momentos Memorables
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Una mirada a los momentos más destacados del V Festival Internacional de Música Rubato.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/festival/2023/momento-1.jpg" 
                alt="Concierto de apertura"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold font-cinzel">Concierto de Apertura</h3>
                <p className="text-sm font-montserrat">Con Alexis Cárdenas</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/festival/2023/momento-2.jpg" 
                alt="Masterclass de piano"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold font-cinzel">Masterclass de Piano</h3>
                <p className="text-sm font-montserrat">Clara Cernat</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/festival/2023/momento-3.jpg" 
                alt="Concierto de clausura"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold font-cinzel">Concierto de Clausura</h3>
                <p className="text-sm font-montserrat">Orquesta Filarmónica Juvenil</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/festival/2023/momento-4.jpg" 
                alt="Taller de cuerdas"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold font-cinzel">Taller de Cuerdas</h3>
                <p className="text-sm font-montserrat">Cuarteto Rubato</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/festival/2023/momento-5.jpg" 
                alt="Concierto coral"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold font-cinzel">Concierto Coral</h3>
                <p className="text-sm font-montserrat">Coral Rubato</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/festival/2023/momento-6.jpg" 
                alt="Recital de cámara"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold font-cinzel">Recital de Cámara</h3>
                <p className="text-sm font-montserrat">Camerata Rubato</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/festival/2023/cronograma"
              className="inline-block bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat mr-4"
            >
              Ver Cronograma 2023
            </a>
            <a 
              href="/festival/2023/invitados"
              className="inline-block bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat"
            >
              Ver Todos los Invitados
            </a>
          </div>
        </div>
      </section>

      {/* Líderes y Equipo de Trabajo 2023 */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          {/* Sección de Líderes */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Líderes del Festival 2023
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          </div>

          {/* Presidente y Director Artístico en la misma fila */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {lideres?.filter(lider => lider.categoria === 'presidente' || lider.categoria === 'director').map((lider) => (
              <div key={lider.id} className="bg-bgDark rounded-xl p-8 text-center shadow-lg">
                <img 
                  src={lider.foto} 
                  alt={lider.nombre}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-accent/20"
                />
                <h4 className="text-xl font-bold text-textLight font-cinzel mb-2">
                  {lider.nombre}
                </h4>
                <p className="text-accent font-medium font-montserrat mb-4 uppercase text-sm">
                  {lider.cargo}
                </p>
                <p className="text-textSecondary font-montserrat text-sm leading-relaxed">
                  {lider.biografia}
                </p>
              </div>
            ))}
          </div>

          {/* Equipo de Trabajo */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-accent font-cinzel uppercase mb-2">
                Equipo de Trabajo
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lideres?.filter(lider => lider.categoria === 'equipo').map((lider) => (
                <div key={lider.id} className="bg-bgDark rounded-xl p-6 text-center">
                  <img 
                    src={lider.foto} 
                    alt={lider.nombre}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg font-bold text-textLight font-cinzel mb-2">
                    {lider.nombre}
                  </h4>
                  <p className="text-accent font-medium font-montserrat mb-3 text-sm">
                    {lider.cargo}
                  </p>
                  <p className="text-textSecondary font-montserrat text-xs">
                    {lider.biografia}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SponsorBanner
        titulo="Agradecimientos Especiales"
        patrocinadores={patrocinadores}
        descripcion="Instituciones que hicieron posible el éxito del V Festival Internacional de Música Rubato en 2023."
      />

      {/* Modal del artista */}
      <ArtistModal 
        artista={selectedArtist!}
        isOpen={!!selectedArtist}
        onClose={() => setSelectedArtist(null)}
      />
    </main>
  );
}
