"use client";

import React, { useState } from "react";
import ImageGallery from "../../components/ui/ImageGallery";

export default function FilarmonicaJuvenil() {
  const [activeSection, setActiveSection] = useState<'audiciones' | 'repertorio' | null>(null);

  // Datos de audiciones
  const requisitos = [
    "Vivir en la ciudad de Barranquilla o en municipios aledaños",
    "Tener entre 14 y 25 años de edad",
    "Contar con el nivel técnico y musical requerido",
    "Diligenciar el formulario llenando todos los campos",
    "Recordar la fecha de cierre de convocatoria"
  ];

  const preparacionAudicion = [
    "Ubicarse de tal manera que pueda observarse las manos del instrumentista y estar en el centro del video",
    "Buscar un lugar adecuado sin distracciones visuales y sonoras que puedan interferir con la grabación",
    "Empezar mencionando su nombre completo, la ciudad o municipio de residencia, escalas, estudio y obras a interpretar. Todo esto debe decirse al inicio del video para evitar interrupciones",
    "En lo posible, usar una cámara de buena calidad, de lo contrario, ubicarse en un sitio con buena iluminación",
    "No exceder los 10 minutos de duración",
    "Una vez terminada la grabación, subir el video a YouTube y adjuntarlo al formulario"
  ];

  // Repertorio de la orquesta
  const repertorio = [
    {
      titulo: "Gargoyles",
      compositor: "Doug Spata"
    },
    {
      titulo: "Palladio",
      compositor: "Karl Jenkins, Arr. Robert Longfield"
    },
    {
      titulo: "The Great Gate Of Kiev and Hopak",
      compositor: "Modest Mussorgsky, Arr. Edmund J. Siennicki"
    },
    {
      titulo: "Pirates of the Caribbean (Piratas del Caribe)",
      compositor: "Klaus Badelt, Arr. Larry Moore & Felix D. Morgan"
    },
    {
      titulo: "Concierto para dos Violines en Re menor",
      compositor: "Johan Sebastian Bach"
    },
    {
      titulo: "Hungarian Dance N°1 & N°5",
      compositor: "Johannes Brahms"
    },
    {
      titulo: "Colombia tierra querida",
      compositor: "Lucho Bermúdez, Arr. Rubén Darío Gómez Prada"
    },
    {
      titulo: "La Piragua",
      compositor: "José Benito Barros, Arr. Yovanny Morales"
    }
  ];

  // Galería de imágenes de la Filarmónica
  const imagenesFilarmonica = [
    {
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      alt: "Filarmónica Juvenil en concierto",
      size: "large" as const
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
      alt: "Jóvenes músicos en ensayo",
      size: "tall" as const
    },
    {
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop",
      alt: "Sección de cuerdas",
      size: "medium" as const
    },
    {
      url: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=500&fit=crop",
      alt: "Presentación en teatro",
      size: "wide" as const
    },
    {
      url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
      alt: "Sección de vientos",
      size: "medium" as const
    },
    {
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
      alt: "Director y orquesta",
      size: "square" as const
    }
  ];

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
        <img
          src="/images/galeria/DSCF0469.jpg"
          alt="Filarmónica Juvenil de Barranquilla"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Filarmónica Juvenil
          </h1>
          <p className="text-xl md:text-2xl font-montserrat mb-2 font-medium">
            de Barranquilla
          </p>
          <p className="text-lg md:text-xl font-montserrat max-w-4xl mx-auto opacity-90">
            Formando jóvenes músicos para cambiar vidas a través de la excelencia musical
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-6xl">
        
        {/* ¿Quiénes somos? */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              ¿Quiénes Somos?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg md:text-xl text-textLight font-montserrat leading-relaxed">
                La Filarmónica Juvenil de Barranquilla es un proyecto que busca brindar la oportunidad a jóvenes 
                de Barranquilla y los municipios aledaños, que hacen parte de diferentes procesos musicales de la ciudad, 
                para conformar la orquesta y ser parte del mundo sinfónico.
              </p>
              
              <p className="text-lg md:text-xl text-textLight font-montserrat leading-relaxed">
                Nuestro objetivo es formar jóvenes que con excelencia musical y de forma colectiva, 
                la música les ayude a cambiar vidas, ser mejores personas y compartir todos sus conocimientos con los demás.
              </p>
              
              <div className="bg-bgDark rounded-lg p-6 border border-accent/20 mt-8">
                <p className="text-accent font-montserrat text-lg font-medium">
                  Con nuestra orquesta se realizarán diferentes temporadas de conciertos en el territorio nacional e internacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navegación de secciones */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveSection(activeSection === 'audiciones' ? null : 'audiciones')}
              className={`px-8 py-4 rounded-lg font-bold font-montserrat text-lg transition-colors ${
                activeSection === 'audiciones'
                  ? 'bg-accent text-textLight'
                  : 'bg-bgDarkSection text-textLight hover:bg-accent'
              }`}
            >
              Audiciones
            </button>
            <button
              onClick={() => setActiveSection(activeSection === 'repertorio' ? null : 'repertorio')}
              className={`px-8 py-4 rounded-lg font-bold font-montserrat text-lg transition-colors ${
                activeSection === 'repertorio'
                  ? 'bg-accent text-textLight'
                  : 'bg-bgDarkSection text-textLight hover:bg-accent'
              }`}
            >
              Repertorio
            </button>
          </div>

          {/* Sección de Audiciones */}
          {activeSection === 'audiciones' && (
            <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 md:p-12 animate-fadeIn">
              <h3 className="text-2xl md:text-3xl font-bold text-accent font-cinzel uppercase mb-8 text-center">
                Audiciones
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-bgDark rounded-lg p-6 border border-accent/30">
                  <h4 className="text-xl font-bold text-accent font-cinzel mb-4 uppercase text-center">
                    Estado Actual
                  </h4>
                  <div className="text-center">
                    <p className="text-textLight font-montserrat mb-4">
                      Las audiciones para el segundo semestre del 2025 se encuentran cerradas.
                    </p>
                    <p className="text-textSecondary font-montserrat text-sm">
                      Muchas gracias por su interés. ¡Estamos muy entusiasmados de tenerlos con nosotros en la próxima convocatoria!
                    </p>
                  </div>
                </div>
                
                <div className="bg-bgDark rounded-lg p-6 border border-accent/30">
                  <h4 className="text-xl font-bold text-accent font-cinzel mb-4 uppercase text-center">
                    Próxima Convocatoria
                  </h4>
                  <div className="text-center">
                    <p className="text-textLight font-montserrat mb-4">
                      No dejes pasar esta oportunidad en la próxima convocatoria de hacer parte de la Filarmónica Juvenil de Barranquilla.
                    </p>
                    <p className="text-accent font-montserrat font-medium">
                      ¡Mantente atento a nuestras redes sociales!
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-accent font-cinzel mb-6 uppercase">
                    Requisitos
                  </h4>
                  <div className="space-y-4">
                    {requisitos.map((requisito, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-textLight text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-textLight font-montserrat text-sm leading-relaxed">{requisito}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-accent font-cinzel mb-6 uppercase">
                    Cómo Preparar mi Audición
                  </h4>
                  <div className="space-y-4">
                    {preparacionAudicion.map((paso, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-textLight text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-textLight font-montserrat text-sm leading-relaxed">{paso}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sección de Repertorio */}
          {activeSection === 'repertorio' && (
            <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 md:p-12 animate-fadeIn">
              <h3 className="text-2xl md:text-3xl font-bold text-accent font-cinzel uppercase mb-8 text-center">
                Repertorio
              </h3>
              
              <div className="mb-8">
                <p className="text-textLight font-montserrat text-center leading-relaxed max-w-3xl mx-auto">
                  La Filarmónica Juvenil de Barranquilla en su recorrido ha interpretado obras y piezas musicales 
                  nacionales e internacionales.
                </p>
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/30 mt-6">
                  <p className="text-accent font-montserrat text-sm text-center">
                    <strong>Para los nuevos aspirantes:</strong> deben tener en cuenta que su responsabilidad es 
                    ponerse al día con el repertorio aparte de las piezas de la audición que se encuentran en el formulario.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {repertorio.map((obra, index) => (
                  <div key={index} className="bg-bgDark rounded-lg p-6 border border-bgDarkSection hover:border-accent/30 transition-colors">
                    <h4 className="text-lg font-bold text-textLight font-cinzel mb-2">
                      {obra.titulo}
                    </h4>
                    <p className="text-accent font-montserrat text-sm">
                      {obra.compositor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Galería */}
        <section className="mb-20">
          <ImageGallery imagenes={imagenesFilarmonica} />
        </section>

        {/* Call to Action */}
        <section className="text-center bg-bgDarkSection rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-textLight font-cinzel uppercase mb-4">
            ¡Únete a la Filarmónica!
          </h3>
          <p className="text-lg text-textLight font-montserrat mb-8 max-w-2xl mx-auto">
            Forma parte de esta experiencia musical única y desarrolla tu talento junto a otros jóvenes apasionados por la música.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              className="bg-accent text-textLight font-bold py-4 px-8 rounded-lg hover:bg-primary transition-colors font-montserrat text-lg"
            >
              Más Información
            </a>
            <a 
              href="/conservatorio" 
              className="bg-transparent border-2 border-accent text-accent font-bold py-4 px-8 rounded-lg hover:bg-accent hover:text-textLight transition-colors font-montserrat text-lg"
            >
              Conocer el Conservatorio
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
