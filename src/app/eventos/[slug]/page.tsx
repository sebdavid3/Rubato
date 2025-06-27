import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getEventoBySlug } from '../../../data/eventos';

interface EventoDetalleProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventoDetalle({ params }: EventoDetalleProps) {
  const { slug } = await params;
  const evento = getEventoBySlug(slug);

  if (!evento) {
    return (
      <main className="bg-bgDark min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-textLight font-cinzel mb-4">
            Evento no encontrado
          </h1>
          <p className="text-textSecondary font-montserrat mb-6">
            El evento que buscas no existe o ha sido eliminado.
          </p>
          <Link 
            href="/eventos"
            className="inline-block bg-accent text-textLight px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
          >
            Volver a Eventos
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
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Navegación */}
      <div className="bg-bgDarkSection py-4">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm font-montserrat">
            <Link href="/" className="text-textSecondary hover:text-accent transition-colors">
              Inicio
            </Link>
            <span className="text-textSecondary">/</span>
            <Link href="/eventos" className="text-textSecondary hover:text-accent transition-colors">
              Eventos
            </Link>
            <span className="text-textSecondary">/</span>
            <span className="text-textLight">{evento.titulo}</span>
          </nav>
        </div>
      </div>

      {/* Hero del Evento */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0">
          <Image 
            src={evento.imagenPrincipal} 
            alt={evento.titulo}
            style={{objectFit: "cover"}}
            fill
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8 md:px-16 max-w-6xl">
            <div className="text-white max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent text-textLight px-3 py-1 rounded-full text-sm font-bold uppercase font-montserrat">
                  {evento.categoria}
                </span>
                {evento.festivalEdicion && (
                  <span className="bg-primary text-textLight px-3 py-1 rounded-full text-sm font-bold uppercase font-montserrat">
                    Festival {evento.festivalEdicion}
                  </span>
                )}
                <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase font-montserrat ${
                  evento.estado === 'proximo' ? 'bg-green-600' : 
                  evento.estado === 'en_curso' ? 'bg-yellow-600' : 'bg-gray-600'
                } text-white`}>
                  {evento.estado === 'proximo' ? 'Próximo' : 
                   evento.estado === 'en_curso' ? 'En Curso' : 'Finalizado'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
                {evento.titulo}
              </h1>
              
              <p className="text-xl md:text-2xl font-montserrat mb-6 font-medium">
                {evento.descripcionCorta}
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-montserrat text-lg">
                    {formatearFecha(evento.fechaInicio)}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-montserrat text-lg">
                    {evento.ubicacion}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contenido Principal */}
            <div className="md:col-span-2">
              <div className="bg-bgDarkSection rounded-xl p-8">
                <h2 className="text-2xl font-bold text-textLight font-cinzel uppercase mb-6">
                  Descripción del Evento
                </h2>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-textSecondary font-montserrat leading-relaxed text-lg">
                    {evento.contenido}
                  </p>
                </div>

                {/* Artistas Participantes */}
                {evento.artistas && evento.artistas.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-bgDark">
                    <h3 className="text-xl font-bold text-textLight font-cinzel uppercase mb-4">
                      Artistas Participantes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {evento.artistas.map((artista, index) => (
                        <span 
                          key={index}
                          className="bg-accent text-textLight px-3 py-1 rounded-full text-sm font-montserrat"
                        >
                          {artista}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Información del Evento */}
              <div className="bg-bgDarkSection rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-textLight font-cinzel uppercase mb-4">
                  Información del Evento
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-textLight font-montserrat font-medium">Fecha y Hora</span>
                    </div>
                    <p className="text-textSecondary font-montserrat ml-7">
                      {formatearFecha(evento.fechaInicio)}
                      {evento.fechaFin && evento.fechaFin !== evento.fechaInicio && (
                        <span> - {formatearFecha(evento.fechaFin)}</span>
                      )}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-textLight font-montserrat font-medium">Ubicación</span>
                    </div>
                    <p className="text-textSecondary font-montserrat ml-7">
                      {evento.ubicacion}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <span className="text-textLight font-montserrat font-medium">Categoría</span>
                    </div>
                    <p className="text-textSecondary font-montserrat ml-7 capitalize">
                      {evento.categoria}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span className="text-textLight font-montserrat font-medium">Precio</span>
                    </div>
                    <p className="text-textSecondary font-montserrat ml-7">
                      {evento.esPago && evento.precio ? (
                        <span className="text-accent font-bold text-lg">
                          ${evento.precio.toLocaleString('es-CO')}
                        </span>
                      ) : (
                        <span className="text-primary font-bold">Entrada Libre</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="space-y-4">
                {evento.estado === 'proximo' && (
                  <>
                    {evento.esPago ? (
                      <button className="w-full bg-accent text-textLight py-3 rounded-lg font-bold hover:bg-primary transition-colors font-montserrat">
                        Comprar Boletos
                      </button>
                    ) : (
                      <button className="w-full bg-primary text-textLight py-3 rounded-lg font-bold hover:bg-accent transition-colors font-montserrat">
                        Registrarse
                      </button>
                    )}
                  </>
                )}
                
                <button className="w-full bg-transparent border-2 border-accent text-accent py-3 rounded-lg font-medium hover:bg-accent hover:text-textLight transition-colors font-montserrat">
                  Compartir Evento
                </button>
                
                <Link 
                  href="/contacto"
                  className="block w-full text-center bg-bgDark text-textLight py-3 rounded-lg font-medium hover:bg-bgDarkSection transition-colors font-montserrat border border-bgDark"
                >
                  Más Información
                </Link>
              </div>

              {/* Mapa (si tiene coordenadas) */}
              {evento.coordenadasMapa && (
                <div className="mt-6 bg-bgDarkSection rounded-xl p-6">
                  <h3 className="text-lg font-bold text-textLight font-cinzel uppercase mb-4">
                    Ubicación
                  </h3>
                  <div className="bg-bgDark rounded-lg h-48 flex items-center justify-center">
                    <p className="text-textSecondary font-montserrat">
                      Mapa disponible próximamente
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Relacionados */}
      <section className="py-16 md:py-20 bg-bgDarkSection">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Eventos Relacionados
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/eventos"
              className="inline-block bg-accent text-textLight px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors font-montserrat"
            >
              Ver Todos los Eventos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
