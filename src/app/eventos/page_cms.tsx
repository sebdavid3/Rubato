"use client";

import React from 'react';
import { useFilteredEvents } from '../../hooks/useCMS';
import { CMSContentWrapper, useDateFormatter } from '../../components/cms/CMSComponents';
import { CMSEvent } from '../../types/cms';
import Image from 'next/image';
import Link from 'next/link';

export default function EventosPageCMS() {
  const { 
    events, 
    loading, 
    error, 
    refetch, 
    filters, 
    setFilters, 
    totalEvents 
  } = useFilteredEvents();

  const { formatDateTime } = useDateFormatter();

  const categorias = [
    { value: 'all', label: 'Todos los eventos' },
    { value: 'concert', label: 'Conciertos' },
    { value: 'masterclass', label: 'Masterclasses' },
    { value: 'workshop', label: 'Talleres' },
    { value: 'conference', label: 'Conferencias' },
    { value: 'festival', label: 'Festival' }
  ];

  const estados = [
    { value: 'all', label: 'Todos' },
    { value: 'upcoming', label: 'Próximos' },
    { value: 'ongoing', label: 'En curso' },
    { value: 'completed', label: 'Finalizados' }
  ];

  const EventCard: React.FC<{ event: CMSEvent }> = ({ event }) => (
    <div className="bg-bgDarkSection rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-bgDark hover:border-accent/30">
      <div className="relative h-48">
        <Image
          src={event.images[0]?.url || '/images/placeholder-event.jpg'}
          alt={event.images[0]?.alt || event.title}
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {event.isFeatured && (
          <div className="absolute top-4 left-4 bg-accent text-textLight px-3 py-1 rounded-full text-sm font-semibold font-montserrat">
            Destacado
          </div>
        )}
        
        <div className="absolute top-4 right-4 bg-primary text-textLight px-3 py-1 rounded-full text-sm font-semibold font-montserrat capitalize">
          {getCategoryLabel(event.category)}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-textSecondary text-sm font-montserrat">
            {formatDateTime(event.startDate)}
          </span>
        </div>

        <h3 className="text-textLight font-bold text-lg font-cinzel uppercase mb-3 line-clamp-2">
          {event.title}
        </h3>

        <p className="text-textSecondary font-montserrat text-sm mb-4 line-clamp-3">
          {event.shortDescription}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-textSecondary text-sm font-montserrat">
            {event.location}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {event.isPaid && event.price && (
              <span className="text-accent font-semibold font-montserrat">
                ${event.price.toLocaleString()}
              </span>
            )}
            {!event.isPaid && (
              <span className="text-green-400 font-semibold font-montserrat">
                Entrada libre
              </span>
            )}
          </div>

          <Link
            href={`/eventos/${event.slug}`}
            className="bg-accent text-textLight px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary transition-colors font-montserrat"
          >
            Ver detalles
          </Link>
        </div>

        {event.artists && event.artists.length > 0 && (
          <div className="mt-4 pt-4 border-t border-bgDark">
            <p className="text-textSecondary text-xs font-montserrat mb-2">Artistas:</p>
            <div className="flex flex-wrap gap-2">
              {event.artists.slice(0, 3).map((artist, index) => (
                <span key={index} className="bg-bgDark text-textLight px-2 py-1 rounded text-xs font-montserrat">
                  {artist}
                </span>
              ))}
              {event.artists.length > 3 && (
                <span className="text-textSecondary text-xs font-montserrat">
                  +{event.artists.length - 3} más
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      'concert': 'Concierto',
      'masterclass': 'Masterclass',
      'workshop': 'Taller',
      'conference': 'Conferencia',
      'festival': 'Festival'
    };
    return labels[category] || category;
  };

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Eventos
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-3xl mx-auto">
            Descubre nuestra programación musical y cultural
          </p>
        </div>
      </section>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-7xl">
        {/* Filtros */}
        <div className="mb-12">
          <div className="bg-bgDarkSection rounded-xl p-6 mb-8">
            <h2 className="text-textLight font-bold text-xl font-cinzel uppercase mb-6">
              Filtrar Eventos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Filtro por categoría */}
              <div>
                <label className="block text-textSecondary font-montserrat text-sm mb-2">
                  Categoría
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-bgDark border border-bgDark rounded-lg px-4 py-3 text-textLight font-montserrat focus:border-accent focus:outline-none"
                >
                  {categorias.map(categoria => (
                    <option key={categoria.value} value={categoria.value}>
                      {categoria.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro por estado */}
              <div>
                <label className="block text-textSecondary font-montserrat text-sm mb-2">
                  Estado
                </label>
                <select
                  value={filters.eventStatus}
                  onChange={(e) => setFilters(prev => ({ ...prev, eventStatus: e.target.value }))}
                  className="w-full bg-bgDark border border-bgDark rounded-lg px-4 py-3 text-textLight font-montserrat focus:border-accent focus:outline-none"
                >
                  {estados.map(estado => (
                    <option key={estado.value} value={estado.value}>
                      {estado.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Búsqueda */}
              <div>
                <label className="block text-textSecondary font-montserrat text-sm mb-2">
                  Buscar
                </label>
                <input
                  type="text"
                  placeholder="Buscar eventos..."
                  value={filters.searchTerm}
                  onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
                  className="w-full bg-bgDark border border-bgDark rounded-lg px-4 py-3 text-textLight font-montserrat placeholder-textSecondary focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            {/* Limpiar filtros */}
            <button
              onClick={() => setFilters({ category: 'all', eventStatus: 'all', searchTerm: '' })}
              className="mt-4 bg-transparent border border-accent text-accent px-4 py-2 rounded-lg font-montserrat text-sm hover:bg-accent hover:text-textLight transition-colors"
            >
              Limpiar filtros
            </button>
          </div>

          {/* Resultados */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-textSecondary font-montserrat">
              Mostrando {events?.length || 0} de {totalEvents} eventos
            </p>
          </div>
        </div>

        {/* Grid de Eventos */}
        <CMSContentWrapper
          data={events}
          loading={loading}
          error={error}
          onRetry={refetch}
          emptyState={{
            title: 'No hay eventos disponibles',
            description: 'No se encontraron eventos que coincidan con los filtros seleccionados. Intenta ajustar los criterios de búsqueda.'
          }}
          loadingText="Cargando eventos..."
        >
          {(eventsList) => (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventsList.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </CMSContentWrapper>
      </div>
    </main>
  );
}
