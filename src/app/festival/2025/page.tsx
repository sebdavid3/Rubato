"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroFestival from '../../../components/festival/HeroFestival';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ArtistGrid from '../../../components/festival/ArtistGrid';
import SponsorBanner from '../../../components/festival/SponsorBanner';
import { useFestivalArtists, useSponsors } from '../../../hooks/useCMS';
import { adaptCMSSponsorToPatrocinador } from '../../../lib/adapters';

export default function Festival2025() {
  const { data: artistas, loading: loadingArtistas } = useFestivalArtists(2025);
  const { data: patrocinadores, loading: loadingPatrocinadores } = useSponsors(2025);

  // Datos de la edición (por ahora mantenemos estático hasta migrar completamente)
  const edicion = {
    ano: 2025,
    nombre: "II Festival Internacional de Música Rubato",
    esActiva: true,
    estado: 'actual' as const,
    fechaInicio: "2025-11-15",
    fechaFin: "2025-11-22",
    descripcion: "Una semana de música excepcional con artistas internacionales y nacionales, masterclasses, y conciertos únicos que continúa la tradición de excelencia musical iniciada en 2023.",
    ubicacion: "Barranquilla, Colombia"
  };

  if (loadingArtistas || loadingPatrocinadores) {
    return (
      <main className="bg-bgDark min-h-screen flex items-center justify-center">
        <div className="text-textLight text-xl">Cargando...</div>
      </main>
    );
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
      <HeroFestival
        tituloEdicion="Festival Rubato 2025"
        subtituloEdicion={edicion.nombre}
        descripcion={edicion.descripcion}
        fechas={fechasFormateadas}
        ubicacion={edicion.ubicacion}
        imagenFondo="/images/festival/2025/hero-bg.jpg"
      />

      {/* Navegación de Festival */}
      <section className="py-8 sm:py-12 bg-bgDarkSection border-b border-bgDark">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-textLight font-cinzel uppercase mb-3 sm:mb-4">
              Explora el Festival
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Link 
              href="/festival/mision-vision" 
              className="bg-bgDark rounded-lg p-4 sm:p-6 text-center hover:bg-accent transition-colors group min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center touch-manipulation active:scale-95"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent group-hover:bg-bgDark rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-textLight font-montserrat group-hover:text-bgDark transition-colores text-center leading-tight">
                Misión y Visión
              </h3>
            </Link>

            <Link 
              href="/festival/2025/invitados" 
              className="bg-bgDark rounded-lg p-4 sm:p-6 text-center hover:bg-accent transition-colores group min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center touch-manipulation active:scale-95"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent group-hover:bg-bgDark rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colores">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-textLight font-montserrat group-hover:text-bgDark transition-colores text-center leading-tight">
                Artistas Invitados
              </h3>
            </Link>

            <Link 
              href="/festival/2025/cronograma" 
              className="bg-bgDark rounded-lg p-4 sm:p-6 text-center hover:bg-accent transition-colores group min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center touch-manipulation active:scale-95"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent group-hover:bg-bgDark rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colores">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-textLight font-montserrat group-hover:text-bgDark transition-colores text-center leading-tight">
                Cronograma
              </h3>
            </Link>

            <Link 
              href="/festival/2025/inscripciones" 
              className="bg-bgDark rounded-lg p-4 sm:p-6 text-center hover:bg-accent transition-colores group min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center touch-manipulation active:scale-95"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent group-hover:bg-bgDark rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colores">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-textLight font-montserrat group-hover:text-bgDark transition-colores text-center leading-tight">
                Inscripciones
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-8 sm:h-12 md:h-16 lg:h-24"></div>

      {/* Sección de Artistas Invitados */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-3 sm:mb-4">
              Artistas Invitados 2025
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-textSecondary text-base sm:text-lg font-montserrat max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Músicos de talla internacional que nos acompañarán en esta edición especial del festival.
            </p>
          </div>

          {/* Preview de Artistas - mostramos solo los primeros 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {artistas && artistas.slice(0, 3).map((artista) => (
              <div key={artista.id} className="bg-bgDarkSection rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-bgDark hover:border-accent/30">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={artista.profileImage.url}
                    alt={artista.profileImage.alt || artista.name}
                    fill
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-textLight font-bold text-base sm:text-lg font-cinzel mb-1">
                      {artista.name}
                    </h3>
                    <p className="text-accent font-montserrat text-xs sm:text-sm">
                      {artista.instrument} • {artista.country}
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-textSecondary font-montserrat text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {artista.bio ? artista.bio.substring(0, 150) + "..." : "Reconocido artista internacional que nos acompañará en esta edición del festival."}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/festival/2025/invitados"
              className="inline-flex items-center gap-2 bg-accent text-textLight px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colores font-montserrat text-sm sm:text-base active:scale-95 touch-manipulation"
            >
              Ver Todos los Artistas Invitados
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-3 sm:mb-4">
              Cronograma de Eventos
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-textSecondary text-base sm:text-lg font-montserrat max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Una semana completa de conciertos, masterclasses y eventos especiales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-textLight font-cinzel mb-3 sm:mb-4">
                Programación Detallada
              </h3>
              <p className="text-textSecondary font-montserrat mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                El festival incluirá conciertos diarios, masterclasses con artistas invitados, 
                talleres de música de cámara y eventos especiales para toda la familia.
              </p>
              <Link 
                href="/festival/2025/cronograma"
                className="inline-block bg-accent text-textLight px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colores font-montserrat text-sm sm:text-base active:scale-95 touch-manipulation"
              >
                Ver Cronograma Completo
              </Link>
            </div>
            <div className="relative order-1 lg:order-2 h-64">
              <Image 
                src="/images/festival/2025/cronograma-preview.jpg" 
                alt="Vista previa del cronograma"
                fill
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-3 sm:mb-4">
              Inscripciones Abiertas
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-textSecondary text-base sm:text-lg font-montserrat max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              ¡No te pierdas esta oportunidad única! Las inscripciones para masterclasses y talleres ya están disponibles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-bgDarkSection rounded-xl p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-textLight font-cinzel mb-3 sm:mb-4">Masterclasses</h3>
              <p className="text-textSecondary font-montserrat mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Clases magistrales con artistas internacionales para estudiantes avanzados.
              </p>
              <Link href="/festival/2025/inscripciones" className="text-accent font-bold hover:underline font-montserrat text-sm sm:text-base">
                Inscríbete aquí
              </Link>
            </div>

            <div className="bg-bgDarkSection rounded-xl p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-textLight font-cinzel mb-3 sm:mb-4">Talleres</h3>
              <p className="text-textSecondary font-montserrat mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Talleres grupales de música de cámara y técnica instrumental.
              </p>
              <Link href="/festival/2025/inscripciones" className="text-accent font-bold hover:underline font-montserrat text-sm sm:text-base">
                Más información
              </Link>
            </div>

            <div className="bg-bgDarkSection rounded-xl p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9.464 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728M12 12v.01" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-textLight font-cinzel mb-3 sm:mb-4">Conciertos</h3>
              <p className="text-textSecondary font-montserrat mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Acceso a todos los conciertos del festival durante la semana.
              </p>
              <p className="text-accent font-bold text-xl sm:text-2xl font-montserrat">Entrada Libre</p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link 
              href="/festival/2025/inscripciones"
              className="inline-block bg-accent text-textLight px-8 sm:px-10 py-4 rounded-lg font-bold hover:bg-primary transition-colores font-montserrat text-base sm:text-lg active:scale-95 touch-manipulation"
            >
              Inscríbete Ahora en el Festival
            </Link>
          </div>
        </div>
      </section>

      {patrocinadores && patrocinadores.length > 0 && (
        <SponsorBanner 
          patrocinadores={patrocinadores.map(adaptCMSSponsorToPatrocinador)} 
          titulo="Patrocinadores del Festival"
        />
      )}
    </main>
  );
}
