"use client";

import React from 'react';
import { getEdicionesArchivo, FestivalEdicion } from '../../../data/festival';

interface EdicionCardProps {
  edicion: FestivalEdicion;
}

const EdicionCard: React.FC<EdicionCardProps> = ({ edicion }) => {
  const fechasFormateadas = edicion.fechaInicio && edicion.fechaFin 
    ? `${new Date(edicion.fechaInicio).toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'long' 
      })} - ${new Date(edicion.fechaFin).toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      })}`
    : `Año ${edicion.ano}`;

  return (
    <article className="bg-bgDarkSection rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={`/images/festival/${edicion.ano}/hero-bg.jpg`}
          alt={`Festival ${edicion.ano}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-accent text-textLight px-3 py-1 rounded-full text-sm font-bold font-montserrat">
          {edicion.ano}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-montserrat mb-1">{fechasFormateadas}</p>
          <h3 className="text-xl font-bold font-cinzel">{edicion.nombre}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-textSecondary font-montserrat mb-6 line-clamp-3">
          {edicion.descripcion}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-textSecondary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-montserrat">{edicion.ubicacion}</span>
          </div>
          
          <a 
            href={`/festival/${edicion.ano}`}
            className="bg-accent text-textLight px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary transition-colors font-montserrat"
          >
            Ver Edición
          </a>
        </div>
      </div>
    </article>
  );
};

export default function ArchivoFestival() {
  const edicionesPasadas = getEdicionesArchivo();

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Archivo del Festival
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            Revive las ediciones pasadas del Festival Internacional de Música Rubato
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Ediciones Pasadas
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Explora la historia de nuestro festival y revive los momentos más memorables 
              de cada edición pasada.
            </p>
          </div>

          {edicionesPasadas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {edicionesPasadas.map((edicion: FestivalEdicion) => (
                <EdicionCard key={edicion.ano} edicion={edicion} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-bgDarkSection rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-textSecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">
                Archivo en Construcción
              </h3>
              <p className="text-textSecondary font-montserrat">
                Estamos preparando el archivo histórico de nuestras ediciones pasadas.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Sección de información adicional */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                Historia del Festival
              </h2>
              <p className="text-textSecondary text-lg font-montserrat mb-6">
                El Festival Internacional de Música Rubato nació con el objetivo de crear un espacio 
                de encuentro musical entre artistas nacionales e internacionales, promoviendo la 
                excelencia artística y la formación musical.
              </p>
              <p className="text-textSecondary text-lg font-montserrat mb-8">
                Cada edición ha sido única, presentando una cuidadosa selección de artistas, 
                repertorios y actividades formativas que han enriquecido la escena musical de 
                la región Caribe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/festival/mision-vision"
                  className="bg-accent text-textLight px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat text-center"
                >
                  Misión y Visión
                </a>
                <a 
                  href="/festival/2025"
                  className="bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat text-center"
                >
                  Edición Actual 2025
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/festival/historia-collage.jpg" 
                alt="Momentos históricos del festival"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
