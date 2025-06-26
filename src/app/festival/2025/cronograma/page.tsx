"use client";

import React from 'react';
import { getFestivalData } from '../../../../data/festival';

export default function Cronograma2025() {
  const { edicion } = getFestivalData(2025);

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
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Cronograma 2025
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            {edicion.nombre} - {fechasFormateadas}
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      {/* Información próximamente */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Programación en Desarrollo
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Estamos trabajando en una programación excepcional para el II Festival Internacional de Música Rubato. 
              Pronto anunciaremos el cronograma completo de conciertos, masterclasses y actividades especiales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-bgDarkSection rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">Conciertos</h3>
              <p className="text-textSecondary font-montserrat">
                Una selección de conciertos con artistas nacionales e internacionales en diferentes venues de la ciudad.
              </p>
            </div>

            <div className="bg-bgDarkSection rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">Masterclasses</h3>
              <p className="text-textSecondary font-montserrat">
                Clases magistrales con artistas invitados para estudiantes y músicos profesionales de la región.
              </p>
            </div>

            <div className="bg-bgDarkSection rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">Talleres</h3>
              <p className="text-textSecondary font-montserrat">
                Talleres especializados en música de cámara, técnica instrumental y actividades pedagógicas.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-textLight font-cinzel mb-4">
              Mantente Informado
            </h3>
            <p className="text-textSecondary font-montserrat mb-6">
              Suscríbete a nuestras actualizaciones para ser el primero en conocer la programación completa y 
              las oportunidades de participación en el festival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/festival/2025/inscripciones"
                className="bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
              >
                Inscríbete Ya
              </a>
              <a 
                href="/contacto"
                className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cronograma tentativo */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Estructura Tentativa
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Basándonos en la exitosa experiencia de 2023, esta será la estructura general del festival.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-bgDark rounded-xl p-6 flex items-center gap-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-textLight font-bold font-cinzel">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">Concierto de Apertura</h3>
                <p className="text-textSecondary font-montserrat">Evento inaugural con participación de artistas internacionales y agrupaciones locales.</p>
              </div>
            </div>

            <div className="bg-bgDark rounded-xl p-6 flex items-center gap-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-textLight font-bold font-cinzel">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">Semana de Masterclasses</h3>
                <p className="text-textSecondary font-montserrat">Actividades formativas intensivas con músicos de renombre internacional.</p>
              </div>
            </div>

            <div className="bg-bgDark rounded-xl p-6 flex items-center gap-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-textLight font-bold font-cinzel">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">Recitales de Cámara</h3>
                <p className="text-textSecondary font-montserrat">Conciertos íntimos con diferentes formaciones camerísticas.</p>
              </div>
            </div>

            <div className="bg-bgDark rounded-xl p-6 flex items-center gap-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-textLight font-bold font-cinzel">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">Concierto de Clausura</h3>
                <p className="text-textSecondary font-montserrat">Evento final que celebra los logros del festival con todos los participantes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
