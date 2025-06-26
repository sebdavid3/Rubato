"use client";

import React, { useState } from 'react';
import { noticias, getNoticiasRecientes, getNoticiasPorCategoria } from '../../data/noticias';

export default function NoticiasPage() {
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todas');
  const [ordenamiento, setOrdenamiento] = useState<'fecha' | 'alfabetico'>('fecha');

  const categorias = [
    { value: 'todas', label: 'Todas las Noticias' },
    { value: 'logro', label: 'Logros' },
    { value: 'anuncio', label: 'Anuncios' },
    { value: 'reconocimiento', label: 'Reconocimientos' },
    { value: 'actividad', label: 'Actividades' },
    { value: 'colaboracion', label: 'Colaboraciones' },
    { value: 'general', label: 'General' }
  ];

  // Filtrar noticias según la categoría seleccionada
  const noticiasFiltradas = filtroCategoria === 'todas' 
    ? noticias.filter(n => n.estaActiva)
    : getNoticiasPorCategoria(filtroCategoria);

  // Ordenar noticias
  const noticiasOrdenadas = [...noticiasFiltradas].sort((a, b) => {
    if (ordenamiento === 'fecha') {
      return new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime();
    } else {
      return a.titulo.localeCompare(b.titulo);
    }
  });

  const noticiasDestacadas = noticias.filter(n => n.esDestacada && n.estaActiva).slice(0, 3);

  const formatearFecha = (fechaISO: string) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-bgDarkSection to-bgDark">
        <div className="absolute inset-0 bg-[url('/images/noticias/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-8 md:px-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-textLight font-cinzel uppercase mb-6">
            Noticias
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-textSecondary font-montserrat max-w-3xl mx-auto">
            Mantente al día con las últimas novedades, logros y anuncios de la Fundación Rubato. 
            Conoce nuestro impacto en la comunidad musical.
          </p>
        </div>
      </section>

      {/* Noticias Destacadas */}
      {noticiasDestacadas.length > 0 && (
        <section className="py-16 md:py-20 bg-bgDarkSection">
          <div className="container mx-auto px-8 md:px-16 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
                Noticias Destacadas
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
                Las noticias más importantes de nuestra fundación.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticiasDestacadas.map((noticia) => (
                <div key={noticia.id} className="bg-bgDark rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={noticia.imagenPrincipal} 
                      alt={noticia.titulo}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-textLight px-3 py-1 rounded-full text-xs font-bold uppercase font-montserrat">
                        {noticia.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-accent font-montserrat text-sm mb-2">
                      {formatearFecha(noticia.fechaPublicacion)}
                    </p>
                    <h3 className="text-lg font-bold text-textLight font-cinzel mb-3">
                      {noticia.titulo}
                    </h3>
                    <p className="text-textSecondary font-montserrat text-sm mb-3">
                      Por {noticia.autor}
                    </p>
                    <p className="text-textLight font-montserrat text-sm mb-4 line-clamp-3">
                      {noticia.descripcionCorta}
                    </p>
                    <a 
                      href={`/noticias/${noticia.slug}`}
                      className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-montserrat font-medium text-sm"
                    >
                      Leer más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Todas las Noticias */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Todas las Noticias
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          {/* Filtros y Controles */}
          <div className="bg-bgDarkSection rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              {/* Filtro por Categoría */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <label className="block text-textLight font-montserrat font-medium mb-2">
                    Categoría:
                  </label>
                  <select
                    value={filtroCategoria}
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                    className="bg-bgDark border border-bgDarkSection rounded-lg px-4 py-2 text-textLight font-montserrat focus:outline-none focus:border-accent"
                  >
                    {categorias.map((categoria) => (
                      <option key={categoria.value} value={categoria.value}>
                        {categoria.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Ordenamiento */}
                <div>
                  <label className="block text-textLight font-montserrat font-medium mb-2">
                    Ordenar por:
                  </label>
                  <select
                    value={ordenamiento}
                    onChange={(e) => setOrdenamiento(e.target.value as 'fecha' | 'alfabetico')}
                    className="bg-bgDark border border-bgDarkSection rounded-lg px-4 py-2 text-textLight font-montserrat focus:outline-none focus:border-accent"
                  >
                    <option value="fecha">Más recientes</option>
                    <option value="alfabetico">Alfabético</option>
                  </select>
                </div>
              </div>

              {/* Información de resultados */}
              <div className="text-textSecondary font-montserrat">
                {noticiasOrdenadas.length} noticias encontradas
              </div>
            </div>
          </div>

          {/* Grid de Noticias */}
          {noticiasOrdenadas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticiasOrdenadas.map((noticia) => (
                <div key={noticia.id} className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={noticia.imagenPrincipal} 
                      alt={noticia.titulo}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-textLight px-3 py-1 rounded-full text-xs font-bold uppercase font-montserrat">
                        {noticia.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-accent font-montserrat text-sm mb-2">
                      {formatearFecha(noticia.fechaPublicacion)}
                    </p>
                    <h3 className="text-lg font-bold text-textLight font-cinzel mb-3">
                      {noticia.titulo}
                    </h3>
                    <p className="text-textSecondary font-montserrat text-sm mb-3">
                      Por {noticia.autor}
                    </p>
                    <p className="text-textLight font-montserrat text-sm mb-4 line-clamp-3">
                      {noticia.descripcionCorta}
                    </p>
                    <a 
                      href={`/noticias/${noticia.slug}`}
                      className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-montserrat font-medium text-sm"
                    >
                      Leer más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">
                No hay noticias en esta categoría
              </h3>
              <p className="text-textSecondary font-montserrat">
                Prueba seleccionando una categoría diferente o revisa pronto para nuevas noticias.
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-bgDarkSection rounded-xl p-8">
              <h3 className="text-2xl font-bold text-textLight font-cinzel mb-4">
                ¿Quieres estar informado?
              </h3>
              <p className="text-textSecondary font-montserrat mb-6">
                Suscríbete a nuestro boletín para recibir las últimas noticias directamente en tu correo.
              </p>
              <a 
                href="/contacto"
                className="inline-block bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
              >
                Suscribirse al Boletín
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
