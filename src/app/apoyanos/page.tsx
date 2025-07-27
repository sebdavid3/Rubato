"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button, SectionTitle } from "../../components/ui";

// Componente para tarjeta de método de donación
const DonationMethodCard: React.FC<{
  title: string;
  details?: string[];
  icon: React.ReactNode;
  actionText: string;
  actionUrl?: string;
  isExternal?: boolean;
  onClick?: () => void;
  showDetails?: boolean;
  isExpandable?: boolean;
}> = ({ title, details, icon, actionText, actionUrl, isExternal = false, onClick, showDetails = false, isExpandable = false }) => {

  return (
    <div className="bg-bgDarkSection rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-bgDark hover:border-accent/30 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-textLight font-cinzel uppercase">
          {title}
        </h3>
      </div>
      
      {/* Solo mostrar detalles si es expandible y showDetails es true */}
      {isExpandable && details && showDetails && (
        <div className="space-y-2 mb-4 flex-grow">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-textSecondary font-montserrat text-sm">{detail}</p>
            </div>
          ))}
        </div>
      )}
      
      {/* Descripción general para elementos no expandibles o cuando no están expandidos */}
      {(!isExpandable || !showDetails) && (
        <div className="flex-grow mb-4">
          <p className="text-textSecondary font-montserrat text-sm">
            {isExpandable ? "Haz clic para ver los datos bancarios" : "Donación rápida y segura"}
          </p>
        </div>
      )}
      
      <div className="mt-auto">
        {/* Solo transferencia bancaria es expandible */}
        {title === "Transferencia Bancaria" ? (
          /* Botón para expandir/colapsar transferencia bancaria */
          <Button 
            onClick={onClick}
            variant="accent"
            size="md"
            className="w-full text-center"
          >
            {actionText}
          </Button>
        ) : (
          /* Enlaces externos para Mercado Pago y PayPal - siempre directos */
          actionUrl && (
            <Button 
              href={actionUrl}
              variant="accent"
              size="md"
              isExternal={isExternal}
              className="inline-flex items-center justify-center gap-2 w-full"
            >
              {actionText}
              {isExternal && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                )}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

// Componente para sección de impacto
const ImpactSection: React.FC = () => {
  const impactStats = [
    { number: "150+", label: "Estudiantes beneficiados" },
    { number: "20+", label: "Conciertos realizados" },
    { number: "5", label: "Años transformando vidas" },
    { number: "100%", label: "Becas otorgadas" }
  ];

  return (
    <section className="py-16 md:py-20 bg-bgDarkSection">
      <div className="container mx-auto px-8 md:px-16 max-w-6xl">
        <div className="text-center mb-12">
          <SectionTitle 
            level="h2" 
            size="xl" 
            centered 
            withDivider
            className="mb-6"
          >
            El Impacto de Tu Donación
          </SectionTitle>
          <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
            Cada contribución que recibimos se convierte directamente en oportunidades 
            de crecimiento y formación musical para jóvenes talentosos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent font-cinzel mb-2">
                {stat.number}
              </div>
              <p className="text-textSecondary font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-bgDark rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-textLight font-cinzel mb-4">
                Tu Donación en Acción
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-textLight font-bold text-sm">$</span>
                  </div>
                  <div>
                    <p className="text-textLight font-semibold font-montserrat">$50.000 mensuales</p>
                    <p className="text-textSecondary font-montserrat text-sm">Financia materiales musicales para un estudiante</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-textLight font-bold text-sm">$</span>
                  </div>
                  <div>
                    <p className="text-textLight font-semibold font-montserrat">$200.000 mensuales</p>
                    <p className="text-textSecondary font-montserrat text-sm">Cubre una beca completa mensual</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-textLight font-bold text-sm">$</span>
                  </div>
                  <div>
                    <p className="text-textLight font-semibold font-montserrat">$500.000 o más</p>
                    <p className="text-textSecondary font-montserrat text-sm">Apoya eventos y masterclasses especiales</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64">
              <Image 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop"
                alt="Estudiantes en clase de música"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente principal
const Apoyanos: React.FC = () => {
  const [showBankDetails, setShowBankDetails] = useState(false);

  const donationMethods = [
    {
      title: "Transferencia Bancaria",
      details: [
        "No. de Cuenta: 442-000033-40",
        "Tipo de cuenta: Ahorros",
        "Banco: Bancolombia",
        "Nombre: Fundación Rubato",
        "NIT: 901559056"
      ],
      icon: (
        <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      actionText: showBankDetails ? "Cerrar detalles" : "Ver datos bancarios",
      onClick: () => setShowBankDetails(!showBankDetails),
      showDetails: showBankDetails,
      isExpandable: true
    },
    {
      title: "Mercado Pago",
      icon: (
        <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      actionText: "Donar con Mercado Pago",
      actionUrl: "https://link.mercadopago.com.co/fundacionrubato",
      isExternal: true,
      isExpandable: false
    },
    {
      title: "PayPal",
      icon: (
        <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 18a9 9 0 01-9-9t9-9" />
        </svg>
      ),
      actionText: "Donar con PayPal",
      actionUrl: "https://www.powr.io/checkout_screen?unique_label=9ac57b3f_1658888777",
      isExternal: true,
      isExpandable: false
    }
  ];

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop"
          alt="Orquesta juvenil en concierto"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-6">
            Tu Apoyo Transforma Vidas
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium leading-relaxed">
            A través de la música, brindamos oportunidades de crecimiento y desarrollo 
            a jóvenes talentos que sueñan con un futuro mejor
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      {/* Introducción */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-4xl text-center">
          <SectionTitle 
            level="h2" 
            size="xl" 
            centered 
            withDivider
            className="mb-8"
          >
            ¿Por Qué Tu Donación Importa?
          </SectionTitle>
          <p className="text-textSecondary text-lg font-montserrat leading-relaxed mb-8">
            En la Fundación Rubato creemos que la música tiene el poder de transformar comunidades 
            enteras. Tu contribución no solo financia lecciones de música; invierte en el futuro 
            de jóvenes que, a través del arte, desarrollan disciplina, confianza y habilidades 
            para la vida.
          </p>
          <p className="text-textLight text-lg font-montserrat leading-relaxed">
            Cada peso donado se destina directamente a becas, instrumentos, materiales educativos 
            y la realización de conciertos que enriquecen nuestra comunidad cultural.
          </p>
        </div>
      </section>

      {/* Sección de Impacto */}
      <ImpactSection />

      {/* Métodos de Donación */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-5xl">
          <div className="text-center mb-12">
            <SectionTitle 
              level="h2" 
              size="xl" 
              centered 
              withDivider
              className="mb-6"
            >
              ¿Cómo Puedo Donar?
            </SectionTitle>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Hemos habilitado múltiples canales para que tu donación sea fácil y segura, 
              desde cualquier lugar del mundo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donationMethods.map((method, index) => (
              <DonationMethodCard
                key={index}
                title={method.title}
                details={method.details}
                icon={method.icon}
                actionText={method.actionText}
                actionUrl={method.actionUrl}
                isExternal={method.isExternal}
                onClick={method.onClick}
                showDetails={method.showDetails}
                isExpandable={method.isExpandable}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Voluntariado */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                Únete Como Voluntario
              </h2>
              <div className="w-24 h-1 bg-accent mb-6"></div>
              <p className="text-textSecondary text-lg font-montserrat leading-relaxed mb-6">
                Además de las donaciones económicas, valoramos enormemente el tiempo y talento 
                que nuestros voluntarios aportan a la fundación. Hay muchas formas de contribuir:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-textLight" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-textLight font-montserrat">Apoyo en eventos y conciertos</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-textLight" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-textLight font-montserrat">Asistencia administrativa</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-textLight" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-textLight font-montserrat">Mentoring y apoyo pedagógico</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-textLight" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-textLight font-montserrat">Marketing y comunicaciones</p>
                </div>
              </div>
              <Button 
                href="/contacto"
                variant="accent"
                size="lg"
                className="inline-flex items-center gap-2 text-lg"
              >
                Quiero ser Voluntario
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
            <div className="relative h-96">
              <Image 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=600&fit=crop"
                alt="Voluntarios apoyando evento musical"
                fill
                className="object-cover w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la acción final */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
            Cada Donación Cuenta
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-textSecondary text-lg font-montserrat leading-relaxed mb-8">
            Tu generosidad no solo financia educación musical de calidad; construye sueños, 
            fortalece comunidades y crea un legado cultural que perdurará por generaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://link.mercadopago.com.co/fundacionrubato"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-textLight px-12 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-colors font-montserrat"
            >
              Donar Ahora
            </a>
            <a 
              href="/contacto"
              className="bg-transparent border-2 border-accent text-accent px-12 py-4 rounded-lg font-bold text-lg hover:bg-accent hover:text-textLight transition-colors font-montserrat"
            >
              Más Información
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

// Export por defecto
export default Apoyanos;
