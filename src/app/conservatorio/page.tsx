"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Conservatorio() {
  const [expandedEnfasis, setExpandedEnfasis] = useState<number | null>(null);

  // Instrumentos organizados por categorías mejoradas
  const instrumentosCuerdaFrotada = ["Violín", "Viola", "Violonchelo", "Contrabajo"];
  const instrumentosCuerdaPulsada = ["Guitarra", "Bajo eléctrico"];
  const instrumentosTeclado = ["Piano", "Acordeón"];
  const instrumentosVientosMetales = ["Trompeta", "Trombón", "Tuba", "Corno Francés"];
  const instrumentosVientosMadera = ["Flauta traversa", "Clarinete", "Saxofón", "Oboe", "Fagot"];
  const instrumentosPercusion = ["Batería", "Timbal"];
  const instrumentosVocales = ["Canto"];

  const enfasis = [
    {
      titulo: "Composición",
      descripcion: "Desarrolla habilidades para crear obras musicales originales, explorando diferentes estilos y géneros. Los estudiantes aprenden técnicas de escritura musical, armonía avanzada y orquestación."
    },
    {
      titulo: "Producción",
      descripcion: "Formación integral en producción musical moderna, incluyendo grabación, mezcla, masterización y uso de tecnología musical avanzada en estudios profesionales."
    },
    {
      titulo: "Dirección de Orquesta",
      descripcion: "Preparación completa para dirigir ensambles musicales, desarrollando técnica gestual, interpretación musical y liderazgo artístico con orquestas y conjuntos diversos."
    },
    {
      titulo: "Pedagogía",
      descripcion: "Metodologías innovadoras para la enseñanza musical, abarcando diferentes edades y niveles. Incluye psicología del aprendizaje musical y diseño curricular."
    },
    {
      titulo: "Composición Comercial",
      descripcion: "Especialización en música para medios audiovisuales, publicidad, videojuegos y producciones comerciales, combinando creatividad artística con demandas del mercado."
    },
    {
      titulo: "Música de Cámara",
      descripcion: "Perfeccionamiento en la interpretación de música de cámara, desarrollando habilidades de escucha, comunicación musical y trabajo colaborativo en pequeños ensambles."
    }
  ];

  const toggleEnfasis = (index: number) => {
    setExpandedEnfasis(expandedEnfasis === index ? null : index);
  };

  const modulos = [
    {
      titulo: "Mis Primeras Notas",
      edades: "4 a 6 años",
      imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      contenido: [
        {
          categoria: "Parámetros musicales",
          items: ["Intensidad", "Duración", "Altura", "Timbre"]
        },
        {
          categoria: "Áreas del desarrollo",
          items: ["Cognitiva", "Motora", "Socioemocional", "Lenguaje"]
        }
      ]
    },
    {
      titulo: "Módulo 1",
      duracion: "4 semestres",
      subtitulo: "Iniciación Infantil, pre Juvenil y Juvenil",
      imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      contenido: [
        {
          categoria: "Asignaturas",
          items: [
            "Creando Música",
            "Lenguaje y Apreciación musical",
            "Coro",
            "Instrumento",
            "Orquesta semillero"
          ]
        }
      ]
    },
    {
      titulo: "Módulo 2",
      duracion: "4 semestres",
      imagen: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop",
      contenido: [
        {
          categoria: "Asignaturas",
          items: [
            "Solfeo y Entrenamiento auditivo",
            "Instrumento principal",
            "Instrumento complementario",
            "Composición",
            "Armonía",
            "Tecnología musical (software de notación musical)",
            "Historia de la música",
            "Ensambles (música de cámara, coro)"
          ]
        }
      ]
    },
    {
      titulo: "Módulo 3",
      duracion: "4 semestres",
      imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      contenido: [
        {
          categoria: "Asignaturas",
          items: [
            "Solfeo",
            "Entrenamiento auditivo",
            "Coro",
            "Instrumento",
            "Composición clásica",
            "Composición comercial",
            "Producción musical (técnicas de grabación)",
            "Pedagogía musical – Filosofía y Métodos",
            "Historia de la música",
            "Música de Cámara",
            "Dirección de orquesta",
            "Orquesta"
          ]
        }
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
            Conservatorio Rubato
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            Formación musical de alta calidad para niños, niñas, jóvenes y adultos que desean ser parte del mundo de la música
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-6xl">
        
        {/* Descripción general */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Acerca del Programa
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-textLight font-montserrat leading-relaxed mb-8">
                El conservatorio ofrece una diversa variedad de materias en su contenido programático para asegurar una formación íntegra para todos los estudiantes en su proceso musical.
              </p>
              
              <div className="bg-bgDark rounded-lg p-8 border border-bgDarkSection">
                <h3 className="text-xl font-bold text-accent font-cinzel mb-6 uppercase">
                  Información del Segundo Semestre 2025
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-textLight font-montserrat">
                  <div className="space-y-3">
                    <p><strong className="text-accent">Inscripciones:</strong> 12 de mayo al 17 de julio de 2025</p>
                    <p><strong className="text-accent">Fecha de inducción:</strong> 2 de agosto de 2025</p>
                  </div>
                  <div className="space-y-3">
                    <p><strong className="text-accent">Inicio de clases:</strong> 9 de agosto de 2025</p>
                    <p><strong className="text-accent">Finalización:</strong> 29 de noviembre de 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instrumentos por Categorías */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Instrumentos por Categorías
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Cuerdas Frotadas */}
            <div className="bg-bgDarkSection rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-accent font-cinzel mb-4 text-center uppercase">
                Cuerdas Frotadas
              </h3>
              <div className="space-y-3">
                {instrumentosCuerdaFrotada.map((instrumento: string, index: number) => (
                  <div key={index} className="bg-bgDark rounded-lg p-3 text-center">
                    <span className="text-textLight font-montserrat text-sm">{instrumento}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Cuerdas Pulsadas */}
            <div className="bg-bgDarkSection rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-accent font-cinzel mb-4 text-center uppercase">
                Cuerdas Pulsadas
              </h3>
              <div className="space-y-3">
                {instrumentosCuerdaPulsada.map((instrumento: string, index: number) => (
                  <div key={index} className="bg-bgDark rounded-lg p-3 text-center">
                    <span className="text-textLight font-montserrat text-sm">{instrumento}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Teclados */}
            <div className="bg-bgDarkSection rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-accent font-cinzel mb-4 text-center uppercase">
                Teclados
              </h3>
              <div className="space-y-3">
                {instrumentosTeclado.map((instrumento: string, index: number) => (
                  <div key={index} className="bg-bgDark rounded-lg p-3 text-center">
                    <span className="text-textLight font-montserrat text-sm">{instrumento}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vientos Metales */}
            <div className="bg-bgDarkSection rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-accent font-cinzel mb-4 text-center uppercase">
                Vientos Metales
              </h3>
              <div className="space-y-3">
                {instrumentosVientosMetales.map((instrumento: string, index: number) => (
                  <div key={index} className="bg-bgDark rounded-lg p-3 text-center">
                    <span className="text-textLight font-montserrat text-sm">{instrumento}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vientos Madera */}
            <div className="bg-bgDarkSection rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-accent font-cinzel mb-4 text-center uppercase">
                Vientos Madera
              </h3>
              <div className="space-y-3">
                {instrumentosVientosMadera.map((instrumento: string, index: number) => (
                  <div key={index} className="bg-bgDark rounded-lg p-3 text-center">
                    <span className="text-textLight font-montserrat text-sm">{instrumento}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Percusión */}
            <div className="bg-bgDarkSection rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-accent font-cinzel mb-4 text-center uppercase">
                Percusión
              </h3>
              <div className="space-y-3">
                {instrumentosPercusion.map((instrumento: string, index: number) => (
                  <div key={index} className="bg-bgDark rounded-lg p-3 text-center">
                    <span className="text-textLight font-montserrat text-sm">{instrumento}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vocal */}
            <div className="bg-bgDarkSection rounded-xl shadow-lg p-6 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-accent font-cinzel mb-4 text-center uppercase">
                Vocal
              </h3>
              <div className="space-y-3">
                {instrumentosVocales.map((instrumento: string, index: number) => (
                  <div key={index} className="bg-bgDark rounded-lg p-3 text-center">
                    <span className="text-textLight font-montserrat text-sm">{instrumento}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Énfasis */}
          <div className="bg-bgDarkSection rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-accent font-cinzel mb-6 text-center uppercase">
              Énfasis y Especialidades
            </h3>
            <div className="space-y-4">
              {enfasis.map((item, index: number) => (
                <div key={index} className="bg-bgDark rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleEnfasis(index)}
                    className="w-full p-4 text-left hover:bg-bgDarkSection transition-colors flex justify-between items-center"
                  >
                    <span className="text-textLight font-montserrat font-semibold">{item.titulo}</span>
                    <span className="text-accent text-xl font-bold">
                      {expandedEnfasis === index ? '−' : '+'}
                    </span>
                  </button>
                  {expandedEnfasis === index && (
                    <div className="px-4 pb-4 border-t border-bgDarkSection">
                      <p className="text-textSecondary font-montserrat text-sm leading-relaxed mt-3">
                        {item.descripcion}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contenido Programático */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Contenido Programático
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-8">
            {modulos.map((modulo, index) => (
              <div key={index} className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <Image 
                      src={modulo.imagen} 
                      alt={modulo.titulo}
                      className="w-full h-64 lg:h-full object-cover"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-textLight font-cinzel mb-2">
                        {modulo.titulo}
                      </h3>
                      {modulo.edades && (
                        <p className="text-accent font-montserrat font-medium">
                          {modulo.edades}
                        </p>
                      )}
                      {modulo.duracion && (
                        <p className="text-accent font-montserrat font-medium">
                          Duración: {modulo.duracion}
                        </p>
                      )}
                      {modulo.subtitulo && (
                        <p className="text-textSecondary font-montserrat text-sm mt-2">
                          {modulo.subtitulo}
                        </p>
                      )}
                    </div>
                    
                    {modulo.contenido.map((seccion, secIndex) => (
                      <div key={secIndex} className="mb-6">
                        <h4 className="text-lg font-bold text-accent font-montserrat mb-3 uppercase">
                          {seccion.categoria}:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {seccion.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                              <span className="text-textLight font-montserrat text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Información de Costos */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Información de Costos
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-accent font-cinzel mb-6 uppercase">
                  Tarifas Segundo Semestre 2025
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-bgDark rounded-lg p-8 border border-accent">
                    <h4 className="text-xl font-bold text-textLight font-cinzel mb-4 uppercase">
                      Un Estudiante
                    </h4>
                    <p className="text-3xl font-bold text-accent mb-4">$1.238.240</p>
                    <p className="text-sm text-textSecondary font-montserrat leading-relaxed">
                      Un millón doscientos treinta y ocho mil doscientos cuarenta pesos
                    </p>
                  </div>
                  
                  <div className="bg-bgDark rounded-lg p-8 border border-accent">
                    <h4 className="text-xl font-bold text-textLight font-cinzel mb-4 uppercase">
                      Dos Hermanos
                    </h4>
                    <p className="text-3xl font-bold text-accent mb-4">$2.100.430</p>
                    <p className="text-sm text-textSecondary font-montserrat leading-relaxed">
                      Dos millones cien mil cuatrocientos treinta pesos
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 bg-accent/10 rounded-lg p-8 border border-accent">
                  <h4 className="text-xl font-bold text-accent font-cinzel mb-4 uppercase">
                    Descuento por Pronto Pago
                  </h4>
                  <p className="text-textLight font-montserrat text-lg leading-relaxed">
                    Los estudiantes que realicen el pago completo de la matrícula entre el 
                    <strong className="text-accent"> 12 de mayo y el 15 de junio de 2025</strong> obtendrán 
                    un <strong className="text-accent">descuento del 10%</strong> sobre el valor total.
                  </p>
                </div>

                {/* Información de Pago */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-accent font-cinzel uppercase mb-6 text-center">
                    Información de Pago
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
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
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-bgDarkSection rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-textLight font-cinzel uppercase mb-4">
            ¡Inscríbete Ahora!
          </h3>
          <p className="text-lg text-textLight font-montserrat mb-8 max-w-2xl mx-auto">
            Da el primer paso hacia tu formación musical profesional. Únete al Conservatorio Rubato y desarrolla todo tu potencial artístico.
          </p>
          <p className="text-accent font-montserrat mb-8 font-medium">
            Recuerda adjuntar el comprobante de pago al formulario de inscripción
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://docs.google.com/forms/d/1FHUF50xHpTJf8g6Q7eQ4_6h0UJQ33o0nYYarffdaWrU/viewform?edit_requested=true&pli=1" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-textLight font-bold py-4 px-8 rounded-lg hover:bg-primary transition-colors font-montserrat text-lg"
            >
              Formulario de Inscripción
            </a>
            <Link 
              href="/contacto" 
              className="bg-transparent border-2 border-accent text-accent font-bold py-4 px-8 rounded-lg hover:bg-accent hover:text-textLight transition-colors font-montserrat text-lg"
            >
              Más Información
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
