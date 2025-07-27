"use client";

import React from 'react';
import Link from 'next/link';
import { orquestaCamara } from '../../data/agrupaciones';

export default function OrquestaCamaraPage() {
  const agrupacion = orquestaCamara;

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-bgDarkSection to-bgDark">
        <div className="absolute inset-0 bg-[url('/images/orquesta-camara/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-8 md:px-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-textLight font-cinzel uppercase mb-6">
            {agrupacion.nombre}
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-textSecondary font-montserrat max-w-4xl mx-auto leading-relaxed">
            {agrupacion.descripcion}
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                Acerca de la Orquesta
              </h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              
              <h3 className="text-xl font-bold text-textLight font-cinzel uppercase mb-4">
                Misión
              </h3>
              <p className="text-textLight font-montserrat leading-relaxed mb-8">
                {agrupacion.mision}
              </p>
              
              <h3 className="text-xl font-bold text-textLight font-cinzel uppercase mb-4">
                Visión
              </h3>
              <p className="text-textLight font-montserrat leading-relaxed mb-8">
                Trabajando con excelencia buscamos ser de las mejores orquestas de cámara de Latinoamérica y tener reconocimiento mundial representando la ciudad de Barranquilla.
              </p>
              
              <div className="text-textLight font-montserrat leading-relaxed">
                {agrupacion.historia.split('. ').map((parrafo, index) => (
                  <p key={index} className="mb-4">
                    {parrafo}{index < agrupacion.historia.split('. ').length - 1 ? '.' : ''}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={agrupacion.imagenGrupo} 
                alt={agrupacion.nombre}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrantes - Imagen grupal */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Integrantes
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto mb-12">
              Músicos profesionales unidos por la pasión de difundir la música clásica y latinoamericana.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-bgDark rounded-xl p-8 md:p-12 shadow-lg">
              <img 
                src="/images/orquesta-camara/integrantes-completo.jpg"
                alt="Integrantes de la Orquesta de Cámara de Barranquilla"
                className="w-full rounded-xl mb-8 shadow-lg"
              />
              <p className="text-textSecondary font-montserrat text-center leading-relaxed">
                La Orquesta de Cámara de Barranquilla está conformada por talentosos músicos del Caribe colombiano 
                que trabajan juntos para llevar la música clásica y contemporánea a todos los públicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Galería
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Momentos destacados de nuestras presentaciones y ensayos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/images/orquesta-camara/galeria/concierto-1.jpg",
              "/images/orquesta-camara/galeria/ensayo-1.jpg",
              "/images/orquesta-camara/galeria/concierto-2.jpg",
              "/images/orquesta-camara/galeria/masterclass.jpg",
              "/images/orquesta-camara/galeria/temporada-navidad.jpg",
              "/images/orquesta-camara/galeria/colaboracion.jpg"
            ].map((imagen, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img 
                  src={imagen} 
                  alt={`Galería ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos de YouTube */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Videos Destacados
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Disfruta de algunas de nuestras mejores interpretaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bgDark rounded-xl p-6 shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Concierto de Temporada 2023"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">
                Concierto de Temporada 2023
              </h3>
              <p className="text-textSecondary font-montserrat">
                Presentación de obras clásicas y contemporáneas en nuestra temporada anual.
              </p>
            </div>

            <div className="bg-bgDark rounded-xl p-6 shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Concierto de Navidad 2022"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">
                Concierto de Navidad 2022
              </h3>
              <p className="text-textSecondary font-montserrat">
                Tradicional concierto navideño con repertorio festivo y obras populares.
              </p>
            </div>

            <div className="bg-bgDark rounded-xl p-6 shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Obras Latinoamericanas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">
                Obras Latinoamericanas
              </h3>
              <p className="text-textSecondary font-montserrat">
                Interpretación de compositores latinoamericanos y del Caribe colombiano.
              </p>
            </div>

            <div className="bg-bgDark rounded-xl p-6 shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Ensayo General"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">
                Ensayo General
              </h3>
              <p className="text-textSecondary font-montserrat">
                Detrás de escenas: proceso de ensayo y preparación de conciertos.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.youtube.com/@OrquestaCamaraBarranquilla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
            >
              Ver Más Videos
            </a>
          </div>
        </div>
      </section>

      {/* Contacto y Presentaciones */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-4xl">
          <div className="bg-bgDarkSection rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-textLight font-cinzel uppercase mb-6">
              Únete a Nuestra Orquesta
            </h2>
            <p className="text-textSecondary font-montserrat mb-8 leading-relaxed">
              ¿Eres músico y te interesa formar parte de la Orquesta de Cámara de Barranquilla? 
              Contáctanos para conocer más sobre audiciones y oportunidades de participación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto"
                className="inline-block bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
              >
                Contactar
              </a>
              <Link 
                href="/eventos"
                className="inline-block bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat"
              >
                Ver Próximas Presentaciones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}