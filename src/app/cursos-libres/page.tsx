"use client";

import React, { useState } from "react";

export default function CursosLibres() {
  // Instrumentos disponibles organizados por categorías
  const instrumentos = [
    // Cuerdas
    "Violín", "Viola", "Cello", "Contrabajo", "Guitarra", "Bajo eléctrico",
    // Teclado
    "Piano", "Acordeón",
    // Vientos
    "Saxofón", "Clarinete", "Flauta traversa", "Trompeta", "Trombón", "Tuba",
    // Percusión y Vocal
    "Percusión", "Canto"
  ];

  // Paquetes de cursos
  const paquetes = [
    {
      id: 1,
      titulo: "Paquete 1",
      descripcion: [
        "1 hora a la semana de instrumento principal",
        "1 hora de lenguaje musical opcional"
      ],
      precios: [
        { concepto: "Solo instrumento", valor: "$250.000 pesos por mes" },
        { concepto: "Lenguaje musical", valor: "$50.000 pesos por mes" }
      ]
    },
    {
      id: 2,
      titulo: "Paquete 2",
      descripcion: [
        "2 horas a la semana de instrumento principal",
        "1 hora de lenguaje musical opcional"
      ],
      precios: [
        { concepto: "Solo instrumento", valor: "$400.000 pesos por mes" },
        { concepto: "Lenguaje musical", valor: "$50.000 pesos por mes" }
      ]
    }
  ];

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Cursos Libres
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            Explora tu pasión por la música de manera flexible y personalizada
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-6xl">
        
        {/* Descripción introductoria */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Nuestra Propuesta
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Nuestros Cursos Libres ofrecen una oportunidad única para explorar tu pasión por la música de manera flexible y personalizada
            </p>
          </div>
        </section>

        {/* Lista de Instrumentos */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Instrumentos Disponibles
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {instrumentos.map((instrumento, index) => (
                <div 
                  key={index}
                  className="bg-bgDark rounded-lg p-4 text-center border border-primary/20"
                >
                  <span className="text-textLight font-montserrat font-medium">
                    {instrumento}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contenido del Curso */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Contenido
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-xl font-bold text-textLight font-cinzel uppercase mb-3">
                  Instrumento Principal
                </h3>
                <p className="text-textSecondary font-montserrat">
                  Clases personalizadas en el instrumento de tu elección
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-xl font-bold text-textLight font-cinzel uppercase mb-3">
                  Lenguaje Musical
                </h3>
                <p className="text-textSecondary font-montserrat">
                  Opcional - Teoría musical y solfeo
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8 p-6 bg-bgDark rounded-lg border border-primary/20">
              <p className="text-textLight font-montserrat font-medium">
                Las clases se pueden realizar de forma <span className="text-accent font-bold">presencial</span> o <span className="text-accent font-bold">virtual</span> dependiendo la disponibilidad del estudiante.
              </p>
            </div>
          </div>
        </section>

        {/* Paquetes de Precios */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Paquetes
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {paquetes.map((paquete) => (
              <div key={paquete.id} className="bg-bgDarkSection rounded-xl p-8 shadow-lg border border-primary/20 hover:border-accent transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-textLight font-cinzel uppercase mb-4">
                    {paquete.titulo}
                  </h3>
                  <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
                </div>
                
                {/* Descripción del paquete */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-textLight font-montserrat mb-3">
                    Incluye:
                  </h4>
                  <ul className="space-y-2">
                    {paquete.descripcion.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-textSecondary font-montserrat">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Precios */}
                <div className="border-t border-primary/20 pt-6">
                  <h4 className="text-lg font-bold text-textLight font-montserrat mb-4">
                    Valores:
                  </h4>
                  <div className="space-y-3">
                    {paquete.precios.map((precio, index) => (
                      <div key={index} className="flex justify-between items-center bg-bgDark rounded-lg p-3">
                        <span className="text-textSecondary font-montserrat">
                          {precio.concepto}:
                        </span>
                        <span className="text-accent font-bold font-montserrat">
                          {precio.valor}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Información de Pago */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Información de Pago
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Datos Bancarios */}
              <div className="bg-bgDark rounded-lg p-6 border border-accent/30">
                <h4 className="text-xl font-bold text-textLight font-montserrat mb-4 text-center">
                  Transferencia Bancaria
                </h4>
                <div className="space-y-3 text-textLight font-montserrat">
                  <div className="flex justify-between">
                    <span className="font-medium">No. de Cuenta:</span>
                    <span className="text-accent">442-000033-40</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tipo de cuenta:</span>
                    <span className="text-accent">Ahorros</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Banco:</span>
                    <span className="text-accent">Bancolombia</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Nombre:</span>
                    <span className="text-accent">Fundación Rubato</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">NIT:</span>
                    <span className="text-accent">901559056</span>
                  </div>
                </div>
              </div>
              
              {/* Mercado Pago */}
              <div className="bg-bgDark rounded-lg p-6 border border-accent/30">
                <h4 className="text-xl font-bold text-textLight font-montserrat mb-4 text-center">
                  Pago Online
                </h4>
                <div className="text-center">
                  <p className="text-textLight font-montserrat mb-6">
                    También puedes realizar tu pago a través de Mercado Pago
                  </p>
                  <a
                    href="https://link.mercadopago.com.co/fundacionrubato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent text-textLight font-bold py-3 px-6 rounded-lg hover:bg-primary transition-colors font-montserrat"
                  >
                    Pagar con Mercado Pago
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="text-center bg-bgDarkSection rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-textLight font-cinzel uppercase mb-4">
            ¡Comienza tu Aventura Musical!
          </h3>
          <p className="text-lg text-textLight font-montserrat mb-8 max-w-2xl mx-auto">
            No importa tu edad o nivel de experiencia, tenemos el curso perfecto para ti. 
            Flexibilidad, calidad y pasión por la música en cada clase.
          </p>
          <p className="text-accent font-montserrat mb-8 font-medium">
            Recuerda adjuntar el comprobante de pago al formulario de inscripción
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8oGy50B5NWYESwN8xqncDNH_3tB_0WFeFHNnkrKqGGfmBMw/viewform" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-textLight font-bold py-4 px-8 rounded-lg hover:bg-primary transition-colors font-montserrat text-lg"
            >
              Formulario de Inscripción
            </a>
            <a 
              href="/contacto" 
              className="bg-transparent border-2 border-accent text-accent font-bold py-4 px-8 rounded-lg hover:bg-accent hover:text-textLight transition-colors font-montserrat text-lg"
            >
              Más Información
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
