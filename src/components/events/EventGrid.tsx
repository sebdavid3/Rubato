import React from "react";
import EventCard, { EventCardProps } from "./EventCard";
import { Evento } from "../../data/eventos";

export interface EventGridProps {
  eventos: Evento[];
  titulo?: string;
  descripcion?: string;
  columnas?: number;
  mostrarTitulo?: boolean;
}

const EventGrid: React.FC<EventGridProps> = ({ 
  eventos, 
  titulo = "Próximos Eventos",
  descripcion,
  columnas = 3,
  mostrarTitulo = true
}) => {
  if (eventos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-textSecondary font-montserrat text-lg">
          No hay eventos disponibles en este momento.
        </p>
      </div>
    );
  }

  // Convertir eventos a EventCardProps
  const eventosParaCard: EventCardProps[] = eventos.map(evento => ({
    titulo: evento.titulo,
    fecha: new Date(evento.fechaInicio).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    ubicacion: evento.ubicacion,
    imagen: evento.imagenPrincipal,
    urlDetalle: `/eventos/${evento.slug}`,
    categoria: evento.categoria,
    esPago: evento.esPago,
    precio: evento.precio,
    descripcionCorta: evento.descripcionCorta
  }));

  const getGridCols = () => {
    switch (columnas) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-1 md:grid-cols-2";
      case 3: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-8 md:px-16 max-w-6xl">
        {mostrarTitulo && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              {titulo}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            {descripcion && (
              <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
                {descripcion}
              </p>
            )}
          </div>
        )}
        
        <div className={`grid ${getGridCols()} gap-6 md:gap-8`}>
          {eventosParaCard.map((evento, idx) => (
            <EventCard key={idx} {...evento} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGrid;
