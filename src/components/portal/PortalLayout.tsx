import React from "react";

interface PortalLayoutProps {
  tituloPagina: string;
  children: React.ReactNode;
}

const PortalLayout: React.FC<PortalLayoutProps> = ({ tituloPagina, children }) => (
  <div className="min-h-screen flex">
    {/* Sidebar */}
    <aside className="w-64 bg-primary text-white p-6 hidden md:block">
      <div className="font-bold text-2xl mb-8">Rubato Portal</div>
      <nav>
        <ul className="space-y-4">
          <li><a href="/portal/dashboard" className="hover:underline">Dashboard</a></li>
          <li><a href="/portal/calificaciones" className="hover:underline">Calificaciones</a></li>
          <li><a href="/portal/horario" className="hover:underline">Horario</a></li>
        </ul>
      </nav>
    </aside>
    {/* Main */}
    <main className="flex-1 bg-[#F8F4FC] p-8">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-primary">{tituloPagina}</h1>
        <button className="bg-secondary text-white px-4 py-2 rounded">Cerrar sesión</button>
      </header>
      {children}
    </main>
  </div>
);

export default PortalLayout;
