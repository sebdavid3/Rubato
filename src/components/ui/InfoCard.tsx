import React from "react";
import Image from "next/image";

interface InfoCardProps {
  titulo: string;
  descripcion: string;
  imagen?: string;
  url?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ titulo, descripcion, imagen, url }) => {
  const content = (
    <div className="rounded-lg overflow-hidden shadow-md bg-bgDarkSection hover:shadow-xl transition-shadow duration-200 h-full flex flex-col">
      {imagen && (
        <div className="relative w-full h-40">
          <Image src={imagen} alt={titulo} fill className="object-cover" />
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold text-textLight mb-2 font-cinzel">{titulo}</h3>
        <p className="text-sm text-textSecondary font-montserrat">{descripcion}</p>
      </div>
    </div>
  );
  return url ? (
    <a href={url} className="block h-full">{content}</a>
  ) : (
    <div className="h-full">{content}</div>
  );
};

export default InfoCard;
