"use client";

import React from 'react';
import { useHomePageContent } from '../hooks/useCMS';
import { CMSContentWrapper, useDateFormatter, CMSImage } from '../components/cms/CMSComponents';
import { CMSEvent, CMSNews } from '../types/cms';

export default function HomePageCMS() {
  const { 
    featuredEvents, 
    recentNews, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    siteConfig, 
    loading, 
    error, 
    refetch 
  } = useHomePageContent();

  const { formatDate } = useDateFormatter();

  // Componente para eventos destacados
  const FeaturedEventsSection: React.FC<{ events: CMSEvent[] }> = ({ events }) => (
    <section className="py-16 md:py-24 bg-bgDarkSection">
      <div className="container mx-auto px-8 md:px-16 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
            Próximos Eventos
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
            No te pierdas nuestros próximos conciertos, masterclasses y eventos especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-bgDark rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-bgDarkSection hover:border-accent/30">
              <div className="relative h-48">
                <CMSImage
                  image={event.images[0]}
                  fallbackSrc="/images/placeholder-event.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {event.isFeatured && (
                  <div className="absolute top-4 left-4 bg-accent text-textLight px-3 py-1 rounded-full text-sm font-semibold font-montserrat">
                    Destacado
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-textSecondary text-sm font-montserrat">
                    {formatDate(event.startDate)}
                  </span>
                </div>

                <h3 className="text-textLight font-bold text-lg font-cinzel uppercase mb-3 line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-textSecondary font-montserrat text-sm mb-4 line-clamp-3">
                  {event.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-textSecondary text-sm font-montserrat">
                      {event.location}
                    </span>
                  </div>

                  <a
                    href={`/eventos/${event.slug}`}
                    className="bg-accent text-textLight px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary transition-colors font-montserrat"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/eventos"
            className="inline-flex items-center gap-2 bg-primary text-textLight px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-colors font-montserrat"
          >
            Ver todos los eventos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );

  // Componente para noticias recientes
  const RecentNewsSection: React.FC<{ news: CMSNews[] }> = ({ news }) => (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-8 md:px-16 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
            Últimas Noticias
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
            Mantente al día con las últimas novedades de la Fundación Rubato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {news.slice(0, 4).map((article, index) => (
            <div key={article.id} className={`bg-bgDarkSection rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-bgDark hover:border-accent/30 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="relative h-48">
                <CMSImage
                  image={article.featuredImage}
                  fallbackSrc="/images/placeholder-news.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {article.isFeatured && (
                  <div className="absolute top-4 left-4 bg-accent text-textLight px-3 py-1 rounded-full text-sm font-semibold font-montserrat">
                    Destacada
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-primary text-textLight px-3 py-1 rounded-full text-sm font-semibold font-montserrat capitalize">
                  {getCategoryLabel(article.category)}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-textSecondary text-sm font-montserrat">
                    {formatDate(article.publishedAt || article.createdAt)}
                  </span>
                  <span className="text-accent text-sm font-montserrat">
                    Por {article.author}
                  </span>
                </div>

                <h3 className="text-textLight font-bold text-lg font-cinzel uppercase mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-textSecondary font-montserrat text-sm mb-4 line-clamp-3">
                  {article.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag: string) => (
                        <span key={tag} className="bg-bgDark text-textSecondary px-2 py-1 rounded text-xs font-montserrat">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={`/noticias/${article.slug}`}
                    className="bg-accent text-textLight px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary transition-colors font-montserrat"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/noticias"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent hover:text-textLight transition-colors font-montserrat"
          >
            Ver todas las noticias
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      'achievement': 'Logro',
      'announcement': 'Anuncio',
      'recognition': 'Reconocimiento',
      'activity': 'Actividad',
      'collaboration': 'Colaboración',
      'general': 'General'
    };
    return labels[category] || category;
  };

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop"
          alt="Orquesta Sinfónica Rubato"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold font-cinzel uppercase mb-6 leading-tight tracking-[-0.02em]">
            Fundación Musical Rubato
          </h1>
          <p className="text-xl md:text-3xl font-montserrat mb-12 font-light leading-relaxed">
            Transformando vidas a través de la música en la región Caribe
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/eventos"
              className="bg-primary text-textLight px-12 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-colors font-montserrat"
            >
              Ver Eventos
            </a>
            <a 
              href="/apoyanos"
              className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-bgDark transition-colors font-montserrat"
            >
              Apóyanos
            </a>
          </div>
        </div>
      </section>

      {/* Sección de contenido dinámico */}
      <CMSContentWrapper
        data={{ featuredEvents, recentNews }}
        loading={loading}
        error={error}
        onRetry={refetch}
        loadingText="Cargando contenido de la página principal..."
      >
        {({ featuredEvents, recentNews }: { featuredEvents: CMSEvent[], recentNews: CMSNews[] }) => (
          <>
            {/* Eventos Destacados */}
            {featuredEvents && featuredEvents.length > 0 && (
              <FeaturedEventsSection events={featuredEvents} />
            )}

            {/* Sección de Impacto */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent">
              <div className="container mx-auto px-8 md:px-16 max-w-6xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                  Nuestro Impacto
                </h2>
                <div className="w-24 h-1 bg-textLight mx-auto mb-12"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-textLight font-cinzel mb-2">
                      150+
                    </div>
                    <p className="text-textLight/80 font-montserrat">Estudiantes beneficiados</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-textLight font-cinzel mb-2">
                      20+
                    </div>
                    <p className="text-textLight/80 font-montserrat">Conciertos realizados</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-textLight font-cinzel mb-2">
                      5
                    </div>
                    <p className="text-textLight/80 font-montserrat">Años transformando vidas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-textLight font-cinzel mb-2">
                      100%
                    </div>
                    <p className="text-textLight/80 font-montserrat">Becas otorgadas</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Noticias Recientes */}
            {recentNews && recentNews.length > 0 && (
              <RecentNewsSection news={recentNews} />
            )}

            {/* Llamada a la Acción */}
            <section className="py-16 md:py-24 bg-bgDarkSection">
              <div className="container mx-auto px-8 md:px-16 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-6">
                  Únete a Nuestra Misión
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
                <p className="text-textSecondary text-lg font-montserrat leading-relaxed mb-8">
                  Tu apoyo hace posible que continuemos brindando educación musical de calidad 
                  y oportunidades de crecimiento a jóvenes talentosos en nuestra región.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/apoyanos"
                    className="bg-primary text-textLight px-12 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-colors font-montserrat"
                  >
                    Hacer Donación
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
          </>
        )}
      </CMSContentWrapper>
    </main>
  );
}
