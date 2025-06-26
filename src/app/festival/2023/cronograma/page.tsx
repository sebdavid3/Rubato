"use client";

import React from 'react';
import { getFestivalData } from '../../../../data/festival';

interface EventoCronogramaProps {
  fecha: string;
  lugar: string;
  agrupacion: string;
  programa: string;
  categoria: string;
}

const EventoCronograma: React.FC<EventoCronogramaProps> = ({ 
  fecha, lugar, agrupacion, programa, categoria 
}) => {
  const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  const getIconoCategoria = (categoria: string) => {
    switch(categoria) {
      case 'concierto':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-bgDarkSection rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
          {getIconoCategoria(categoria)}
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="text-xl font-bold text-textLight font-cinzel capitalize">
              {fechaFormateada}
            </h3>
            <span className="text-accent font-medium text-sm uppercase font-montserrat">
              {categoria}
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-textSecondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-montserrat">{lugar}</span>
            </div>
            
            <div className="flex items-center gap-2 text-textSecondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-montserrat font-medium">{agrupacion}</span>
            </div>
            
            <p className="text-textLight font-montserrat font-medium">
              {programa}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Cronograma2023() {
  const { edicion, cronograma } = getFestivalData(2023);

  if (!edicion) {
    return <div>Edición no encontrada</div>;
  }

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Banner de archivo */}
      <div className="bg-accent/10 border-b border-accent/20 py-3">
        <div className="container mx-auto px-8 text-center">
          <p className="text-accent font-semibold font-montserrat">
            📁 Archivo Histórico - Cronograma 2023
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Cronograma 2023
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            {edicion.nombre} - Programación Completa
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      {/* Cronograma */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Programación del Festival
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Una semana completa de música que marcó el inicio del Festival Internacional de Música Rubato.
            </p>
          </div>

          <div className="grid gap-6">
            {cronograma.map((evento, index) => (
              <EventoCronograma
                key={index}
                fecha={evento.fecha}
                lugar={evento.lugar}
                agrupacion={evento.agrupacion}
                programa={evento.programa}
                categoria={evento.categoria}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                Actividades Complementarias
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-textSecondary font-montserrat">
                    <strong className="text-textLight">Actividades pedagógicas</strong> con estudiantes de la Fundación Rubato
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-textSecondary font-montserrat">
                    <strong className="text-textLight">Actividades pedagógicas</strong> con grupos de cámara regionales
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-textSecondary font-montserrat">
                    <strong className="text-textLight">Conciertos en conjunto</strong> con agrupaciones invitadas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-textSecondary font-montserrat">
                    <strong className="text-textLight">Conciertos</strong> de las agrupaciones invitadas
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/festival/2023/cronograma-actividades.jpg" 
                alt="Actividades del festival 2023"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/festival/2023"
                className="bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
              >
                Volver al Festival 2023
              </a>
              <a 
                href="/festival/2023/invitados"
                className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat"
              >
                Ver Artistas Invitados
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
