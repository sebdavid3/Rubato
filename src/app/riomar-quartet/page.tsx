"use client";

import React from 'react';
import { riomarQuartet } from '../../data/agrupaciones';
import Image from 'next/image';

export default function RioMarQuartetPage() {
  const agrupacion = riomarQuartet;

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-bgDarkSection to-bgDark">
        <div className="absolute inset-0 bg-[url('/images/riomar-quartet/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
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

      {/* Historia y Concepto */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                Nuestra Historia
              </h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <div className="text-textLight font-montserrat leading-relaxed mb-6">
                {agrupacion.historia.split('. ').map((parrafo, index) => (
                  <p key={index} className="mb-4">
                    {parrafo}{index < agrupacion.historia.split('. ').length - 1 ? '.' : ''}
                  </p>
                ))}
              </div>
              {agrupacion.mision && (
                <p className="text-textLight font-montserrat leading-relaxed font-medium">
                  {agrupacion.mision}
                </p>
              )}
            </div>
            <div className="relative w-full h-96">
              <Image
                src={agrupacion.imagenGrupo}
                alt={agrupacion.nombre}
                fill
                style={{objectFit: "cover"}}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrantes */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Integrantes
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Músicos de gran trayectoria que conforman esta destacada agrupación de cámara.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agrupacion.integrantes
              .sort((a, b) => a.orden - b.orden)
              .map((integrante) => (
                <div key={integrante.id} className="bg-bgDark rounded-xl p-6 text-center shadow-lg">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={integrante.foto}
                      alt={integrante.nombre}
                      fill
                      style={{objectFit: "cover"}}
                      className="rounded-full border-4 border-accent/20"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">
                    {integrante.nombre}
                  </h3>
                  <p className="text-accent font-medium font-montserrat uppercase text-sm">
                    {integrante.instrumento}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Repertorio */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Repertorio Destacado
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Una selección de nuestro repertorio que abarca desde lo clásico hasta lo contemporáneo.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-textLight font-montserrat">
            {agrupacion.repertorio.map((obra, index) => (
              <li key={index} className="border-b border-gray-700/50 pb-3 flex flex-col">
                <span className="font-bold">{obra.categoria}</span>
                <span className="text-textSecondary">{obra.descripcion}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contacto y Contrataciones */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-4xl">
          <div className="bg-bgDarkSection rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-textLight font-cinzel uppercase mb-6">
              Contrataciones y Presentaciones
            </h2>
            <p className="text-textSecondary font-montserrat mb-8 leading-relaxed">
              Interesado en contratar al RioMar Quartet para tu evento, concierto o festival? 
              Contáctanos para conocer nuestra disponibilidad y propuesta artística.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto"
                className="inline-block bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
              >
                Contactar
              </a>
              <a 
                href="/eventos"
                className="inline-block bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat"
              >
                Ver Próximas Presentaciones
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
