import React from "react";

interface Calificacion {
  asignatura: string;
  nota: number;
}

interface GradesTableProps {
  calificaciones: Calificacion[];
}

const GradesTable: React.FC<GradesTableProps> = ({ calificaciones }) => (
  <table className="min-w-full bg-[#F8F4FC] rounded shadow my-6">
    <thead>
      <tr>
        <th className="px-4 py-2 text-left text-primary">Asignatura</th>
        <th className="px-4 py-2 text-left text-primary">Nota</th>
      </tr>
    </thead>
    <tbody>
      {calificaciones.map((c, idx) => (
        <tr key={idx} className="border-t">
          <td className="px-4 py-2">{c.asignatura}</td>
          <td className="px-4 py-2">{c.nota}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default GradesTable;
