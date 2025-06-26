"use client";

import React, { useState } from 'react';

export default function Inscripciones2025() {
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    edad: '',
    ciudad: '',
    departamento: '',
    instrumento: '',
    nivel: '',
    programa: '',
    motivacion: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    // Aquí iría la lógica real de envío
  };

  const instrumentos = [
    "Piano", "Violín", "Viola", "Violonchelo", "Contrabajo", "Flauta", "Clarinete", "Oboe", 
    "Fagot", "Saxofón", "Trompeta", "Trombón", "Tuba", "Corno Francés", "Percusión", 
    "Guitarra", "Canto", "Dirección Musical", "Otro"
  ];

  const niveles = [
    "Principiante", "Intermedio", "Avanzado", "Profesional"
  ];

  const programas = [
    "Masterclass Individual", "Taller Grupal", "Música de Cámara", "Todos los Programas"
  ];

  const departamentos = [
    "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", 
    "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", 
    "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", 
    "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima", 
    "Valle del Cauca", "Vaupés", "Vichada"
  ];

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Inscripciones 2025
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            Únete al VI Festival Internacional de Música Rubato
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-6xl">
        {/* Información del Festival */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Información del Festival 2025
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-bgDarkSection rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">Fechas</h3>
              <p className="text-textSecondary font-montserrat">
                <strong className="text-accent">15 - 22 de Noviembre</strong><br />
                2025
              </p>
            </div>

            <div className="bg-bgDarkSection rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">Ubicación</h3>
              <p className="text-textSecondary font-montserrat">
                <strong className="text-accent">Barranquilla</strong><br />
                Colombia
              </p>
            </div>

            <div className="bg-bgDarkSection rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textLight font-cinzel mb-4">Duración</h3>
              <p className="text-textSecondary font-montserrat">
                <strong className="text-accent">8 días</strong><br />
                de actividades intensivas
              </p>
            </div>
          </div>

          {/* Programas Disponibles */}
          <div className="bg-bgDarkSection rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-accent font-cinzel text-center mb-8 uppercase">
              Programas Disponibles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-bgDark rounded-lg">
                <h4 className="text-lg font-bold text-textLight font-cinzel mb-3">Masterclasses</h4>
                <p className="text-textSecondary font-montserrat text-sm mb-4">
                  Clases magistrales individuales con artistas internacionales
                </p>
                <p className="text-accent font-bold text-xl">$150.000</p>
              </div>
              <div className="text-center p-6 bg-bgDark rounded-lg">
                <h4 className="text-lg font-bold text-textLight font-cinzel mb-3">Talleres</h4>
                <p className="text-textSecondary font-montserrat text-sm mb-4">
                  Talleres grupales de técnica e interpretación
                </p>
                <p className="text-accent font-bold text-xl">$80.000</p>
              </div>
              <div className="text-center p-6 bg-bgDark rounded-lg">
                <h4 className="text-lg font-bold text-textLight font-cinzel mb-3">Música de Cámara</h4>
                <p className="text-textSecondary font-montserrat text-sm mb-4">
                  Ensambles y grupos de música de cámara
                </p>
                <p className="text-accent font-bold text-xl">$100.000</p>
              </div>
              <div className="text-center p-6 bg-bgDark rounded-lg">
                <h4 className="text-lg font-bold text-textLight font-cinzel mb-3">Paquete Completo</h4>
                <p className="text-textSecondary font-montserrat text-sm mb-4">
                  Acceso a todas las actividades del festival
                </p>
                <p className="text-accent font-bold text-xl">$250.000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de Inscripción */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Formulario de Inscripción
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-textSecondary text-lg font-montserrat max-w-3xl mx-auto">
              Completa el siguiente formulario para inscribirte en el VI Festival Internacional de Música Rubato 2025.
            </p>
          </div>

          <div className="bg-bgDarkSection rounded-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Información Personal */}
              <div>
                <h3 className="text-xl font-bold text-accent font-cinzel mb-6 uppercase">Información Personal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Nombre *</label>
                    <input 
                      type="text" 
                      name="nombre" 
                      value={form.nombre} 
                      onChange={handleChange} 
                      required 
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    />
                  </div>
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Apellidos *</label>
                    <input 
                      type="text" 
                      name="apellidos" 
                      value={form.apellidos} 
                      onChange={handleChange} 
                      required 
                      placeholder="Tus apellidos"
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="tu.email@ejemplo.com"
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    />
                  </div>
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Teléfono *</label>
                    <input 
                      type="tel" 
                      name="telefono" 
                      value={form.telefono} 
                      onChange={handleChange} 
                      required 
                      placeholder="300 123 4567"
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Edad *</label>
                    <input 
                      type="number" 
                      name="edad" 
                      value={form.edad} 
                      onChange={handleChange} 
                      required 
                      min="8" 
                      max="80"
                      placeholder="Tu edad"
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    />
                  </div>
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Ciudad *</label>
                    <input 
                      type="text" 
                      name="ciudad" 
                      value={form.ciudad} 
                      onChange={handleChange} 
                      required 
                      placeholder="Tu ciudad"
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    />
                  </div>
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Departamento *</label>
                    <select 
                      name="departamento" 
                      value={form.departamento} 
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    >
                      <option value="">Seleccionar...</option>
                      {departamentos.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Información Musical */}
              <div>
                <h3 className="text-xl font-bold text-accent font-cinzel mb-6 uppercase">Información Musical</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Instrumento Principal *</label>
                    <select 
                      name="instrumento" 
                      value={form.instrumento} 
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    >
                      <option value="">Seleccionar...</option>
                      {instrumentos.map((instrumento, index) => (
                        <option key={index} value={instrumento}>{instrumento}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Nivel Musical *</label>
                    <select 
                      name="nivel" 
                      value={form.nivel} 
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    >
                      <option value="">Seleccionar...</option>
                      {niveles.map((nivel, index) => (
                        <option key={index} value={nivel}>{nivel}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block font-montserrat text-textLight mb-2">Programa de Interés *</label>
                  <select 
                    name="programa" 
                    value={form.programa} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                  >
                    <option value="">Seleccionar...</option>
                    {programas.map((programa, index) => (
                      <option key={index} value={programa}>{programa}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <label className="block font-montserrat text-textLight mb-2">Motivación para Participar</label>
                  <textarea 
                    name="motivacion" 
                    value={form.motivacion} 
                    onChange={handleChange} 
                    rows={4} 
                    placeholder="Cuéntanos por qué quieres participar en el festival y qué esperas obtener de esta experiencia..."
                    className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                  />
                </div>
              </div>

              <div className="text-xs text-accent font-montserrat">
                * Campos obligatorios
              </div>

              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-primary text-textLight px-12 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-colors font-montserrat"
                >
                  Enviar Inscripción
                </button>
              </div>

              {enviado && (
                <div className="mt-6 p-6 bg-accent/10 border border-accent rounded-lg">
                  <p className="text-accent font-semibold font-montserrat text-center">
                    ¡Gracias por tu inscripción! Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto con los siguientes pasos.
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Información Adicional */}
        <section className="bg-bgDarkSection rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-accent font-cinzel text-center mb-8 uppercase">
            Información Importante
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-textLight font-cinzel mb-4">Requisitos</h3>
              <ul className="text-textSecondary font-montserrat space-y-2">
                <li>• Nivel mínimo intermedio en el instrumento</li>
                <li>• Edad mínima de 8 años</li>
                <li>• Disponibilidad para participar durante toda la semana</li>
                <li>• Instrumento propio (excepto piano y percusión)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-textLight font-cinzel mb-4">Incluye</h3>
              <ul className="text-textSecondary font-montserrat space-y-2">
                <li>• Todas las clases y talleres seleccionados</li>
                <li>• Materiales de estudio</li>
                <li>• Acceso a conciertos del festival</li>
                <li>• Certificado de participación</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-textSecondary font-montserrat">
              Para más información contacta: 
              <a href="mailto:festival@fundacionrubato.org" className="text-accent hover:underline ml-1">
                festival@fundacionrubato.org
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
