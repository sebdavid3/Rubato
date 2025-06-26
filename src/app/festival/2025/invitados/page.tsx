"use client";

import React from 'react';
import ArtistGrid from '../../../../components/festival/ArtistGrid';
import { getFestivalData } from '../../../../data/festival';

export default function Invitados2025() {
  const { edicion, artistas } = getFestivalData(2025);

  if (!edicion) {
    return <div>Edición no encontrada</div>;
  }

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Header de la página */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-textLight font-cinzel uppercase mb-4">
            Artistas Invitados 2025
          </h1>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg md:text-xl font-montserrat max-w-3xl mx-auto">
            Conoce a los destacados músicos que nos acompañarán en la segunda edición 
            del Festival Internacional de Música Rubato.
          </p>
        </div>
      </section>

      {/* Navegación de regreso */}
      <section className="py-8 bg-bgDark border-b border-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <a 
            href="/festival/2025"
            className="inline-flex items-center gap-2 text-textSecondary hover:text-accent transition-colors font-montserrat"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Festival 2025
          </a>
        </div>
      </section>

      {/* Grid de artistas */}
      <div className="py-16 md:py-20">
        <ArtistGrid
          titulo="Nuestros Invitados"
          artistas={artistas}
          descripcion="Músicos de reconocida trayectoria internacional que compartirán su talento y conocimiento en masterclasses, conciertos y talleres especiales."
        />
      </div>
    </main>
  );
}
