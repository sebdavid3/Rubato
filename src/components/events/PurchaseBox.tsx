import React from "react";

interface PurchaseBoxProps {
  evento: {
    esPago?: boolean;
    precio?: number;
    urlInscripcion?: string;
  };
}

const PurchaseBox: React.FC<PurchaseBoxProps> = ({ evento }) => {
  if (evento.esPago) {
    return (
      <div className="sticky top-24 bg-[#F8F4FC] rounded shadow p-6">
        <div className="font-bold text-lg mb-2">Compra tu entrada</div>
        <div className="mb-4 text-primary font-semibold">${evento.precio?.toFixed(2)}</div>
        <a href={evento.urlInscripcion} className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 block text-center">Comprar</a>
      </div>
    );
  }
  return (
    <div className="sticky top-24 bg-[#F8F4FC] rounded shadow p-6">
      <div className="font-bold text-lg mb-2">Registro gratuito</div>
      <a href={evento.urlInscripcion} className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 block text-center">Inscribirse</a>
    </div>
  );
};

export default PurchaseBox;
