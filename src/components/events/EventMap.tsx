import React from "react";

interface EventMapProps {
  coordenadas: { lat: number; lng: number };
  nombreLugar: string;
}

const EventMap: React.FC<EventMapProps> = ({ coordenadas, nombreLugar }) => (
  <div className="w-full h-64 rounded shadow overflow-hidden my-4">
    {/* Aquí iría la integración real con un mapa (ej: Google Maps, Mapbox). Placeholder por ahora. */}
    <div className="flex items-center justify-center w-full h-full bg-accent-soft text-secondary">
      <span>Mapa de {nombreLugar} ({coordenadas.lat}, {coordenadas.lng})</span>
    </div>
  </div>
);

export default EventMap;
