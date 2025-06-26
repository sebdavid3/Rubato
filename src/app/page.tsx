"use client";

import ImageGallery from "../components/ui/ImageGallery";
import EventGrid from "../components/events/EventGrid";
import { eventos } from "../data/eventos";
import { noticias } from "../data/noticias";

// Componente de llamada a la acción para contacto
const ContactCallToAction = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-textLight text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] font-cinzel uppercase mb-4">
          Únete a Nosotros
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 md:mb-6"></div>
        <p className="text-textSecondary text-base sm:text-lg font-montserrat max-w-2xl mx-auto px-4">
          ¿Tienes preguntas o quieres ser parte de nuestra comunidad musical? Estamos aquí para ayudarte
        </p>
      </div>
      
      <div className="bg-bgDarkSection rounded-xl p-6 sm:p-8 md:p-12 shadow-lg border border-bgDarkSection max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="font-bold mb-6 sm:mb-8 text-accent text-xl sm:text-2xl font-cinzel uppercase">Contáctanos</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-textLight font-montserrat mb-2 text-sm sm:text-base">Email</h4>
              <p className="font-montserrat text-textSecondary text-sm">info@fundacionrubato.org</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="font-bold text-textLight font-montserrat mb-2 text-sm sm:text-base">Teléfono</h4>
              <p className="font-montserrat text-textSecondary text-sm">+57 123 456 7890</p>
            </div>
            
            <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-textLight font-montserrat mb-2 text-sm sm:text-base">Ubicación</h4>
              <p className="font-montserrat text-textSecondary text-sm">Barranquilla, Atlántico</p>
            </div>
          </div>
          
          <p className="text-textSecondary font-montserrat mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-4">
            Escríbenos y te contactaremos pronto para resolver tus dudas sobre nuestros programas, eventos o cómo participar en la Fundación Rubato.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contacto"
              className="bg-accent text-textLight font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-primary transition-colors font-montserrat text-base sm:text-lg"
            >
              Formulario de Contacto
            </a>
            <a 
              href="/conservatorio"
              className="bg-transparent border-2 border-accent text-accent font-bold py-4 px-8 rounded-lg hover:bg-accent hover:text-textLight transition-colors font-montserrat text-lg"
            >
              Conocer Programas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  // Programas
  const programas = [
    {
      imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      titulo: "Conservatorio",
      url: "/conservatorio",
      descripcion: "Formación musical integral para jóvenes talentos con metodología de excelencia."
    },
    {
      imagen: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop",
      titulo: "Filarmónica",
      url: "/filarmonica-juvenil",
      descripcion: "Orquesta juvenil que desarrolla el talento musical a través de la práctica orquestal."
    },
    {
      imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      titulo: "Cursos Libres",
      url: "/cursos-libres",
      descripcion: "Cursos abiertos para todos los niveles, desde iniciación hasta perfeccionamiento."
    },
  ];

  // Accesos principales debajo de programas
  const accesosPrincipales = [
    {
      titulo: "Misión y Visión",
      descripcion: "Conoce nuestro propósito de transformación social a través de la música.",
      url: "/acerca-nosotros/mision-vision",
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      titulo: "Eventos",
      descripcion: "Descubre los conciertos, festivales y actividades musicales que desarrollamos.",
      url: "/eventos",
      imagen: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop"
    },
    {
      titulo: "Haz Parte",
      descripcion: "Únete como voluntario, donante o colaborador en nuestra misión musical.",
      url: "/apoyanos",
      imagen: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop"
    },
  ];

  // Galería - Imágenes variadas de tamaños diferentes para efecto masonry
  const imagenesGaleria = [
    {
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      alt: "Orquesta en concierto",
      size: "large" as const
    },
    {
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=800&fit=crop",
      alt: "Violinista joven",
      size: "tall" as const
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Piano en concierto",
      size: "medium" as const
    },
    {
      url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
      alt: "Instrumentos de viento",
      size: "medium" as const
    },
    {
      url: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=500&fit=crop",
      alt: "Coro juvenil",
      size: "wide" as const
    },
    {
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
      alt: "Ensayo de orquesta",
      size: "square" as const
    },
  ];
  
  // Noticias/Eventos destacados - Combinar ambos tipos de contenido
  const eventosDestacados = eventos.filter(e => e.esDestacado).slice(0, 2).map(e => ({
    tipo: 'evento' as const,
    titulo: e.titulo,
    fecha: new Date(e.fechaInicio).toLocaleDateString("es-ES", { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    ubicacion: e.ubicacion,
    imagen: e.imagenPrincipal,
    urlDetalle: `/eventos/${e.slug}`,
    categoria: e.categoria,
    esPago: e.esPago,
    precio: e.precio,
    descripcionCorta: e.descripcionCorta
  }));

  const noticiasDestacadas = noticias.filter(n => n.esDestacada).slice(0, 2).map(n => ({
    tipo: 'noticia' as const,
    titulo: n.titulo,
    fecha: new Date(n.fechaPublicacion).toLocaleDateString("es-ES", { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric'
    }),
    ubicacion: n.autor,
    imagen: n.imagenPrincipal,
    urlDetalle: `/noticias/${n.slug}`,
    categoria: n.categoria,
    esPago: false,
    precio: undefined,
    descripcionCorta: n.descripcionCorta
  }));

  // Combinar y ordenar por fecha
  const contenidoDestacado = [...eventosDestacados, ...noticiasDestacadas]
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, 3);

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section responsivo */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center">
        <img
          src="/images/galeria/anita.jpg"
          alt="Anita violinista"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="/images/galeria/logo_blanco_completo.png"
              alt="Logo Fundación Rubato"
              className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 filter drop-shadow-2xl"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat max-w-3xl mx-auto font-medium">
            Brindando sueños y creando propósitos
          </p>
        </div>
      </section>

      {/* Espaciado responsivo entre hero y contenido */}
      <div className="h-12 sm:h-16 md:h-20 lg:h-32"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 max-w-6xl">
        
        {/* Sección de Programas responsiva */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Nuestros Programas
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-textSecondary font-montserrat max-w-2xl mx-auto px-4">
              Descubre nuestras propuestas de formación musical integral para todas las edades
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programas.map((programa, index) => (
              <div key={index} className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={programa.imagen} 
                    alt={programa.titulo}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-textLight font-cinzel mb-3 uppercase">
                    {programa.titulo}
                  </h3>
                  <p className="text-textLight font-montserrat mb-4 leading-relaxed text-sm sm:text-base">
                    {programa.descripcion}
                  </p>
                  <a 
                    href={programa.url}
                    className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-montserrat font-medium text-sm sm:text-base"
                  >
                    Conocer más
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Accesos Principales responsiva */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Conoce la Fundación
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-textSecondary font-montserrat max-w-2xl mx-auto px-4">
              Explora nuestra misión, eventos y cómo puedes ser parte de esta transformación musical
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {accesosPrincipales.map((acceso, index) => (
              <div key={index} className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={acceso.imagen} 
                    alt={acceso.titulo}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-textLight font-cinzel mb-3 uppercase">
                    {acceso.titulo}
                  </h3>
                  <p className="text-textLight font-montserrat mb-4 leading-relaxed text-sm sm:text-base">
                    {acceso.descripcion}
                  </p>
                  <a 
                    href={acceso.url}
                    className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-montserrat font-medium text-sm sm:text-base"
                  >
                    Explorar
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Noticias y Eventos responsiva */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Noticias y Eventos
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-textSecondary font-montserrat max-w-2xl mx-auto px-4">
              Mantente al día con nuestras últimas actividades y próximos conciertos
            </p>
          </div>
          
          {/* Grid responsivo para pantallas grandes, scroll horizontal para móviles */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {contenidoDestacado.map((item, index) => (
              <div key={index} className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.imagen} 
                    alt={item.titulo}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase font-montserrat ${
                      item.tipo === 'evento' 
                        ? 'bg-accent text-textLight' 
                        : 'bg-primary text-textLight'
                    }`}>
                      {item.tipo === 'evento' ? item.categoria : 'Noticia'}
                    </span>
                  </div>
                  {item.esPago && item.precio && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-montserrat">
                        ${item.precio.toLocaleString('es-CO')}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-textLight font-cinzel mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-accent font-montserrat text-sm mb-2">
                    {item.fecha}
                  </p>
                  <p className="text-textSecondary font-montserrat text-sm mb-3">
                    {item.tipo === 'evento' ? `${item.ubicacion}` : `Por ${item.ubicacion}`}
                  </p>
                  <p className="text-textLight font-montserrat text-sm mb-4 line-clamp-2">
                    {item.descripcionCorta}
                  </p>
                  <a 
                    href={item.urlDetalle}
                    className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-montserrat font-medium text-sm"
                  >
                    {item.tipo === 'evento' ? 'Ver detalles' : 'Leer más'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
            {contenidoDestacado.length === 0 && (
              <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-lg font-bold text-textLight font-cinzel mb-4">
                  Próximamente
                </h3>
                <p className="text-textLight font-montserrat">
                  Nuevos eventos y noticias en camino.
                </p>
              </div>
            )}
          </div>

          {/* Scroll horizontal para móviles */}
          <div className="md:hidden overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max px-4">
              {contenidoDestacado.map((item, index) => (
                <div key={index} className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 w-72 flex-shrink-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.imagen} 
                      alt={item.titulo}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase font-montserrat ${
                        item.tipo === 'evento' 
                          ? 'bg-accent text-textLight' 
                          : 'bg-primary text-textLight'
                      }`}>
                        {item.tipo === 'evento' ? item.categoria : 'Noticia'}
                      </span>
                    </div>
                    {item.esPago && item.precio && (
                      <div className="absolute bottom-3 right-3">
                        <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-montserrat">
                          ${item.precio.toLocaleString('es-CO')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-textLight font-cinzel mb-2">
                      {item.titulo}
                    </h3>
                    <p className="text-accent font-montserrat text-xs mb-2">
                      {item.fecha}
                    </p>
                    <p className="text-textSecondary font-montserrat text-xs mb-2">
                      {item.tipo === 'evento' ? `${item.ubicacion}` : `Por ${item.ubicacion}`}
                    </p>
                    <p className="text-textLight font-montserrat text-xs mb-3 line-clamp-2">
                      {item.descripcionCorta}
                    </p>
                    <a 
                      href={item.urlDetalle}
                      className="inline-flex items-center gap-1 text-accent hover:text-primary transition-colors font-montserrat font-medium text-xs"
                    >
                      {item.tipo === 'evento' ? 'Ver detalles' : 'Leer más'}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
              {contenidoDestacado.length === 0 && (
                <div className="w-72 flex-shrink-0 bg-bgDarkSection rounded-xl shadow-lg p-6 text-center">
                  <h3 className="text-base font-bold text-textLight font-cinzel mb-3">
                    Próximamente
                  </h3>
                  <p className="text-textLight font-montserrat text-sm">
                    Nuevos eventos y noticias en camino.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Botones responsivos para ver todos los eventos y noticias */}
          <div className="text-center mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a 
                href="/eventos"
                className="bg-accent text-textLight px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat text-sm sm:text-base"
              >
                Ver Todos los Eventos
              </a>
              <a 
                href="/noticias"
                className="bg-transparent border-2 border-accent text-accent px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat text-sm sm:text-base"
              >
                Ver Todas las Noticias
              </a>
            </div>
          </div>
        </section>

        {/* Galería responsiva */}
        <section className="mb-16 sm:mb-20">
          <ImageGallery imagenes={imagenesGaleria} />
        </section>

        {/* Sección de Contacto responsiva */}
        <section className="mb-16 sm:mb-20">
          <ContactCallToAction />
        </section>

      </div>
    </main>
  );
}
