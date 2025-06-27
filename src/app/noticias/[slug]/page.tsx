"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getNoticiaPorSlug, getNoticiasRecientes } from '../../../data/noticias';

export default function NoticiaDetallePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const noticia = getNoticiaPorSlug(slug);
  const noticiasRelacionadas = getNoticiasRecientes(3).filter(n => n.slug !== slug);

  if (!noticia) {
    return (
      <main className="bg-bgDark min-h-screen">
        <div className="container mx-auto px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-textLight font-cinzel mb-4">
            Noticia no encontrada
          </h1>
          <p className="text-textSecondary font-montserrat mb-8">
            La noticia que buscas no existe o ha sido removida.
          </p>
          <Link 
            href="/noticias"
            className="inline-block bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
          >
            Ver todas las noticias
          </Link>
        </div>
      </main>
    );
  }

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
      {/* Hero con imagen de la noticia */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src={noticia.imagenPrincipal}
          alt={noticia.titulo}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-8 h-full flex items-end pb-12">
          <div className="text-white max-w-4xl">
            <div className="mb-4">
              <span className="bg-primary text-textLight px-4 py-2 rounded-full text-sm font-bold uppercase font-montserrat">
                {noticia.categoria}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-cinzel uppercase mb-4">
              {noticia.titulo}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm font-montserrat">
              <span>{formatearFecha(noticia.fechaPublicacion)}</span>
              <span>Por {noticia.autor}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación de breadcrumb */}
      <section className="bg-bgDarkSection py-4">
        <div className="container mx-auto px-8">
          <nav className="text-sm font-montserrat">
            <Link href="/" className="text-textSecondary hover:text-accent transition-colors">Inicio</Link>
            <span className="text-textSecondary mx-2">›</span>
            <Link href="/noticias" className="text-textSecondary hover:text-accent transition-colors">Noticias</Link>
            <span className="text-textSecondary mx-2">›</span>
            <span className="text-textLight">{noticia.titulo}</span>
          </nav>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="bg-bgDarkSection rounded-xl p-8 md:p-12 shadow-lg">
            {/* Resumen */}
            <div className="mb-8">
              <p className="text-xl text-textLight font-montserrat leading-relaxed">
                {noticia.descripcionCorta}
              </p>
            </div>

            {/* Contenido principal */}
            <div className="prose prose-invert max-w-none">
              <div 
                className="text-textLight font-montserrat leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: noticia.contenido }}
              />
            </div>

            {/* Tags */}
            {noticia.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-bgDarkSection">
                <h3 className="text-lg font-bold text-textLight font-cinzel mb-4">
                  Etiquetas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {noticia.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-bgDark text-textSecondary px-3 py-1 rounded-full text-sm font-montserrat"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Compartir */}
            <div className="mt-8 pt-8 border-t border-bgDarkSection">
              <h3 className="text-lg font-bold text-textLight font-cinzel mb-4">
                Compartir esta noticia
              </h3>
              <div className="flex gap-4">
                <button className="bg-accent text-textLight p-3 rounded-lg hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="bg-accent text-textLight p-3 rounded-lg hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="bg-accent text-textLight p-3 rounded-lg hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias relacionadas */}
      {noticiasRelacionadas.length > 0 && (
        <section className="py-16 md:py-20 bg-bgDarkSection">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
                Noticias Relacionadas
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticiasRelacionadas.map((noticiaRel) => (
                <div key={noticiaRel.id} className="bg-bgDark rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={noticiaRel.imagenPrincipal} 
                      alt={noticiaRel.titulo}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-textLight px-3 py-1 rounded-full text-xs font-bold uppercase font-montserrat">
                        {noticiaRel.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-accent font-montserrat text-sm mb-2">
                      {formatearFecha(noticiaRel.fechaPublicacion)}
                    </p>
                    <h3 className="text-lg font-bold text-textLight font-cinzel mb-3">
                      {noticiaRel.titulo}
                    </h3>
                    <p className="text-textSecondary font-montserrat text-sm mb-3">
                      Por {noticiaRel.autor}
                    </p>
                    <p className="text-textLight font-montserrat text-sm mb-4 line-clamp-3">
                      {noticiaRel.descripcionCorta}
                    </p>
                    <a 
                      href={`/noticias/${noticiaRel.slug}`}
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

            <div className="text-center mt-12">
              <Link 
                href="/noticias"
                className="inline-block bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
              >
                Ver todas las noticias
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
