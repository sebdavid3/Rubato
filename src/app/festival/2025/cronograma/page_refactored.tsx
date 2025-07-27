"use client";

import React from 'react';
import { getFestivalData } from '../../../../data/festival';
import Card from '../../../../components/ui/Card';
import SectionTitle from '../../../../components/ui/SectionTitle';
import IconCircle from '../../../../components/ui/IconCircle';

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

  const programaItems = [
    {
      icon: (
        <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "Conciertos",
      description: "Una selección de conciertos con artistas nacionales e internacionales en diferentes venues de la ciudad."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Masterclasses",
      description: "Clases magistrales con artistas invitados para estudiantes y músicos profesionales de la región."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Talleres",
      description: "Talleres especializados en música de cámara, técnica instrumental y actividades pedagógicas."
    }
  ];

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <SectionTitle level="h1" size="2xl" centered>
            Cronograma 2025
          </SectionTitle>
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
            <SectionTitle size="xl" centered withDivider>
              Programación en Desarrollo
            </SectionTitle>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Estamos trabajando en una programación excepcional para el II Festival Internacional de Música Rubato. 
              Pronto anunciaremos el cronograma completo de conciertos, masterclasses y actividades especiales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programaItems.map((item, index) => (
              <Card key={index} variant="section" size="lg" className="text-center">
                <IconCircle size="lg" centered hasMargin>
                  {item.icon}
                </IconCircle>
                <SectionTitle level="h3" size="md" className="mb-4">
                  {item.title}
                </SectionTitle>
                <p className="text-textSecondary font-montserrat">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <Card variant="default" size="lg" className="text-center bg-gradient-to-r from-primary/20 to-accent/20">
            <SectionTitle level="h3" size="lg" className="mb-4">
              Mantente Informado
            </SectionTitle>
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
          </Card>
        </div>
      </section>
      
      {/* Resto del componente... */}
    </main>
  );
}
