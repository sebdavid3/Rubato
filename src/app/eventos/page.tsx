"use client";

import React from 'react';
import { eventos, getEventosDestacados } from '../../data/eventos';
import Image from 'next/image';
import Link from 'next/link';

export default function EventosPage() {
  const [filtroCategoria, setFiltroCategoria] = React.useState<string>('todos');
  const [filtroEstado, setFiltroEstado] = React.useState<string>('todos');

  // Filtrar eventos según los criterios seleccionados
  const eventosFiltrados = eventos.filter(evento => {
    const cumpleCategoria = filtroCategoria === 'todos' || evento.categoria === filtroCategoria;
    const cumpleEstado = filtroEstado === 'todos' || evento.estado === filtroEstado;
    return cumpleCategoria && cumpleEstado;
  });

  const eventosDestacados = getEventosDestacados();

  const formatearFecha = (fechaISO: string) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const categorias = [
    { value: 'todos', label: 'Todos los eventos' },
    { value: 'concierto', label: 'Conciertos' },
    { value: 'masterclass', label: 'Masterclasses' },
    { value: 'taller', label: 'Talleres' },
    { value: 'conferencia', label: 'Conferencias' },
    { value: 'festival', label: 'Festival' }
  ];

  const estados = [
    { value: 'todos', label: 'Todos' },
    { value: 'proximo', label: 'Próximos' },
    { value: 'en_curso', label: 'En curso' },
    { value: 'finalizado', label: 'Finalizados' }
  ];

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Eventos
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            Descubre todos nuestros conciertos, masterclasses, talleres y eventos especiales
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      {/* Eventos Destacados */}
      {eventosDestacados.length > 0 && (
        <section className="py-16 md:py-20 bg-bgDarkSection">
          <div className="container mx-auto px-8 md:px-16 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
                Eventos Destacados
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
                No te pierdas estos eventos especiales que hemos preparado para ti
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventosDestacados.slice(0, 3).map((evento) => (
                <div key={evento.id} className="bg-bgDark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Image 
                      src={evento.imagenPrincipal} 
                      alt={evento.titulo}
                      className="w-full h-48 object-cover"
                      width={350}
                      height={192}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-textLight px-3 py-1 rounded-full text-xs font-bold uppercase font-montserrat">
                        {evento.categoria}
                      </span>
                    </div>
                    {evento.esPago && evento.precio && (
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-montserrat">
                          ${evento.precio.toLocaleString('es-CO')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-accent text-sm font-montserrat">
                        {formatearFecha(evento.fechaInicio)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-textLight font-cinzel mb-3">
                      {evento.titulo}
                    </h3>
                    <p className="text-textSecondary font-montserrat text-sm mb-4 line-clamp-3">
                      {evento.descripcionCorta}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-4 h-4 text-textSecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-textSecondary text-sm font-montserrat">
                        {evento.ubicacion}
                      </span>
                    </div>
                    <Link 
                      href={`/eventos/${evento.slug}`}
                      className="inline-block bg-accent text-textLight px-6 py-2 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat text-sm"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtros y Lista Completa */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Todos los Eventos
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          {/* Filtros */}
          <div className="bg-bgDarkSection rounded-xl p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-textLight font-montserrat font-medium mb-2">
                  Categoría
                </label>
                <select 
                  value={filtroCategoria}
                  onChange={(e) => setFiltroCategoria(e.target.value)}
                  className="w-full bg-bgDark text-textLight border border-bgDark rounded-lg px-4 py-2 font-montserrat focus:border-accent outline-none"
                >
                  {categorias.map(categoria => (
                    <option key={categoria.value} value={categoria.value}>
                      {categoria.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-textLight font-montserrat font-medium mb-2">
                  Estado
                </label>
                <select 
                  value={filtroEstado}
                  onChange={(e) => setFiltroEstado(e.target.value)}
                  className="w-full bg-bgDark text-textLight border border-bgDark rounded-lg px-4 py-2 font-montserrat focus:border-accent outline-none"
                >
                  {estados.map(estado => (
                    <option key={estado.value} value={estado.value}>
                      {estado.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Lista de Eventos */}
          <div className="space-y-6">
            {eventosFiltrados.map((evento) => (
              <div key={evento.id} className="bg-bgDarkSection rounded-xl p-6 hover:bg-bgDark transition-colors duration-300">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-1">
                    <Image 
                      src={evento.imagenPrincipal} 
                      alt={evento.titulo}
                      className="w-full h-32 object-cover rounded-lg"
                      width={230}
                      height={128}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-accent text-textLight px-2 py-1 rounded text-xs font-bold uppercase font-montserrat">
                        {evento.categoria}
                      </span>
                      {evento.festivalEdicion && (
                        <span className="bg-primary text-textLight px-2 py-1 rounded text-xs font-bold uppercase font-montserrat">
                          Festival {evento.festivalEdicion}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">
                      {evento.titulo}
                    </h3>
                    
                    <p className="text-textSecondary font-montserrat text-sm mb-3">
                      {evento.descripcionCorta}
                    </p>
                    
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-textSecondary font-montserrat">
                          {formatearFecha(evento.fechaInicio)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-textSecondary font-montserrat">
                          {evento.ubicacion}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1 text-center">
                    {evento.esPago && evento.precio && (
                      <div className="mb-3">
                        <span className="text-2xl font-bold text-accent font-montserrat">
                          ${evento.precio.toLocaleString('es-CO')}
                        </span>
                      </div>
                    )}
                    {!evento.esPago && (
                      <div className="mb-3">
                        <span className="text-lg font-bold text-primary font-montserrat">
                          Entrada Libre
                        </span>
                      </div>
                    )}
                    
                    <Link 
                      href={`/eventos/${evento.slug}`}
                      className="inline-block bg-accent text-textLight px-6 py-2 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat text-sm"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {eventosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-textSecondary font-montserrat text-lg">
                No se encontraron eventos que coincidan con los filtros seleccionados.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
