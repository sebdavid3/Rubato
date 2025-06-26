"use client";

import React from 'react';
import { festivalGlobal } from '../../../data/festival';

export default function MisionVisionFestival() {
  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Misión y Visión
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            Los pilares fundamentales del Festival Internacional de Música Rubato
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      {/* Sección Historia del Festival */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Nuestra Historia
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-textSecondary text-lg font-montserrat leading-relaxed mb-8">
              {festivalGlobal.historia.texto}
            </p>
            
            <div className="bg-bgDark rounded-xl p-8">
              <h3 className="text-2xl font-bold text-textLight font-cinzel mb-6 text-center">
                Nuestros Pilares Fundamentales
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {festivalGlobal.valores.map((valor, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-textLight font-cinzel">{index + 1}</span>
                    </div>
                    <h4 className="text-lg font-bold text-accent font-cinzel mb-3 uppercase">
                      {valor.titulo}
                    </h4>
                    <p className="text-textSecondary font-montserrat text-sm leading-relaxed">
                      {valor.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg font-montserrat text-textLight italic">
                "Queremos que sea un festival cercano a la gente, que sea pensado por el público y para el público: 
                que lo forme, lo entretenga y sobre todo lo haga reflexionar. Queremos un festival que sea de 
                Barranquilla y de la región, de sus músicas y tradiciones."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Misión y Visión */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Misión */}
            <div className="text-center">
              <div className="mb-8">
                <img 
                  src={festivalGlobal.mision.imagen} 
                  alt="Misión del Festival"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                Nuestra Misión
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-textSecondary text-lg font-montserrat leading-relaxed">
                {festivalGlobal.mision.texto}
              </p>
            </div>

            {/* Visión */}
            <div className="text-center">
              <div className="mb-8">
                <img 
                  src={festivalGlobal.vision.imagen} 
                  alt="Visión del Festival"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                Nuestra Visión
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-textSecondary text-lg font-montserrat leading-relaxed">
                {festivalGlobal.vision.texto}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Nuestros Valores
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Los principios que guían cada edición del Festival Internacional de Música Rubato
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-bgDark rounded-xl">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">Cercanía</h3>
              <p className="text-textSecondary font-montserrat">
                Un festival pensado por el público y para el público: que lo forme, lo entretenga y lo haga reflexionar.
              </p>
            </div>

            <div className="text-center p-6 bg-bgDark rounded-xl">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">Identidad Regional</h3>
              <p className="text-textSecondary font-montserrat">
                Un festival que sea de Barranquilla y de la región, de sus músicas y tradiciones.
              </p>
            </div>

            <div className="text-center p-6 bg-bgDark rounded-xl">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">Transformación Social</h3>
              <p className="text-textSecondary font-montserrat">
                Uso de la música como herramienta para el desarrollo de la sensibilidad y el crecimiento intelectual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Impacto */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                Nuestro Impacto
              </h2>
              <p className="text-textSecondary text-lg font-montserrat mb-6">
                A través de cada edición del festival, hemos logrado crear un espacio único 
                de encuentro musical que trasciende fronteras y géneros, conectando a artistas 
                de diferentes países y culturas.
              </p>
              <p className="text-textSecondary text-lg font-montserrat mb-8">
                Nuestro compromiso va más allá de los conciertos: ofrecemos masterclasses, 
                talleres y actividades formativas que contribuyen al desarrollo musical de 
                jóvenes talentos en Colombia y América Latina.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-bgDarkSection rounded-lg">
                  <p className="text-3xl font-bold text-accent font-cinzel">2+</p>
                  <p className="text-textSecondary font-montserrat">Ediciones</p>
                </div>
                <div className="text-center p-4 bg-bgDarkSection rounded-lg">
                  <p className="text-3xl font-bold text-accent font-cinzel">30+</p>
                  <p className="text-textSecondary font-montserrat">Artistas</p>
                </div>
                <div className="text-center p-4 bg-bgDarkSection rounded-lg">
                  <p className="text-3xl font-bold text-accent font-cinzel">500+</p>
                  <p className="text-textSecondary font-montserrat">Asistentes</p>
                </div>
                <div className="text-center p-4 bg-bgDarkSection rounded-lg">
                  <p className="text-3xl font-bold text-accent font-cinzel">8+</p>
                  <p className="text-textSecondary font-montserrat">Países</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/festival/2025"
                  className="bg-accent text-textLight px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat text-center"
                >
                  Edición Actual 2025
                </a>
                <a 
                  href="/festival/archivo"
                  className="bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat text-center"
                >
                  Ver Archivo
                </a>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/images/festival/impacto.jpg" 
                alt="Impacto del festival"
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
