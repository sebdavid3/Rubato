import React from "react";

interface UpcomingClassWidgetProps {
  clase: {
    nombre: string;
    hora: string;
    aula: string;
  };
}

const UpcomingClassWidget: React.FC<UpcomingClassWidgetProps> = ({ clase }) => (
  <div className="bg-[#F8F4FC] rounded shadow p-4 mb-4">
    <div className="font-bold text-lg text-primary mb-1">Próxima clase</div>
    <div className="text-secondary">{clase.nombre}</div>
    <div className="text-sm text-gray-500">{clase.hora} - Aula {clase.aula}</div>
  </div>
);

export default UpcomingClassWidget;
