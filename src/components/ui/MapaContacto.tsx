import React from "react";

interface MapaContactoProps {
  direccion: string;
  coordenadas?: { lat: number; lng: number };
}

const MapaContacto: React.FC<MapaContactoProps> = ({ direccion, coordenadas }) => {
  // Coordenadas aproximadas de la dirección en Barranquilla (Cl. 61 #37-44)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lat = coordenadas?.lat || 10.9970;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lng = coordenadas?.lng || -74.7873;
  
  // URL para Google Maps con la dirección
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(direccion)}`;
  
  // URL alternativa usando la dirección directamente (no requiere API key)
  const googleMapsDirectUrl = `https://maps.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`;

  return (
    <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border border-bgDarkSection">
      <iframe
        src={googleMapsDirectUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa de ${direccion}`}
        className="w-full h-full"
      />
    </div>
  );
};

export default MapaContacto;
