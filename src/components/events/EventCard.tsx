import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface EventCardProps {
  titulo: string;
  fecha: string;
  ubicacion: string;
  imagen: string;
  urlDetalle: string;
  categoria?: string;
  esPago?: boolean;
  precio?: number;
  descripcionCorta?: string;
}

const EventCard: React.FC<EventCardProps> = ({ 
  titulo, 
  fecha, 
  ubicacion, 
  imagen, 
  urlDetalle, 
  categoria = "evento",
  esPago = false,
  precio,
  descripcionCorta
}) => {
  return (
    <Link href={urlDetalle} className="block group">
      <div className="rounded-xl overflow-hidden shadow-lg bg-bgDarkSection hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="relative h-48">
          <Image
            src={imagen}
            alt={titulo}
            fill
            style={{objectFit: "cover"}}
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-accent text-textLight px-3 py-1 rounded-full text-xs font-bold uppercase font-montserrat">
              {categoria}
            </span>
          </div>
          {esPago && precio && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-montserrat">
                ${precio.toLocaleString('es-CO')}
              </span>
            </div>
          )}
          {!esPago && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-montserrat">
                Entrada Libre
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
              {fecha}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-textLight mb-3 group-hover:text-accent transition-colors font-cinzel">
            {titulo}
          </h3>
          
          {descripcionCorta && (
            <p className="text-textSecondary font-montserrat text-sm mb-4 line-clamp-2">
              {descripcionCorta}
            </p>
          )}
          
          <div className="flex items-center gap-2 text-textSecondary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-montserrat">{ubicacion}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
