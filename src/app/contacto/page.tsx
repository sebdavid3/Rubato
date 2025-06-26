"use client";

import React, { useState } from "react";
import MapaContacto from "../../components/ui/MapaContacto";

// Componente principal de la página de contacto
export default function Contacto() {
  const [form, setForm] = useState({ 
    nombre: "", 
    apellidos: "",
    email: "", 
    telefono: "",
    ciudad: "",
    departamento: "",
    edad: "",
    instrumentoInteres: "",
    motivoContacto: "",
    mensaje: "" 
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

  const departamentosColombia = [
    "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", 
    "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", 
    "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", 
    "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima", 
    "Valle del Cauca", "Vaupés", "Vichada"
  ];

  const instrumentos = [
    "Piano", "Violín", "Viola", "Violonchelo", "Contrabajo", "Flauta", "Clarinete", "Oboe", 
    "Fagot", "Saxofón", "Trompeta", "Trombón", "Tuba", "Corno Francés", "Percusión", 
    "Guitarra", "Canto", "Dirección Musical", "Otro", "No tengo experiencia musical"
  ];

  const motivosContacto = [
    "Información sobre programas", "Inscripciones", "Voluntariado", "Donaciones", 
    "Colaboración institucional", "Eventos y conciertos", "Trabajo o empleo", "Otro"
  ];

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-4xl mx-auto font-medium">
            Estamos aquí para resolver tus dudas y ayudarte a ser parte de nuestra comunidad musical
          </p>
        </div>
      </section>

      {/* Espaciado */}
      <div className="h-16 md:h-24"></div>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-6xl">
        
        {/* Información de contacto y formulario */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <p className="text-textSecondary text-lg font-montserrat max-w-2xl mx-auto">
              ¿Tienes preguntas sobre nuestros programas, eventos o quieres ser parte de la Fundación Rubato? 
              Completa el formulario y nos pondremos en contacto contigo pronto.
            </p>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl p-8 md:p-12 shadow-lg border border-bgDarkSection">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Información de contacto */}
              <div className="lg:col-span-1">
                <h3 className="font-bold mb-6 text-accent text-2xl font-cinzel uppercase">Información de Contacto</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-textLight font-montserrat mb-1">Email</h4>
                      <p className="font-montserrat text-textSecondary">info@fundacionrubato.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-textLight font-montserrat mb-1">Teléfono</h4>
                      <p className="font-montserrat text-textSecondary">+57 123 456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-textLight font-montserrat mb-1">Dirección</h4>
                      <p className="font-montserrat text-textSecondary">Cl. 61 #37-44<br />Barranquilla, Atlántico</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-bgDark rounded-lg p-6 border border-accent/20">
                  <h4 className="font-bold text-accent font-montserrat mb-3 uppercase">Horarios de Atención</h4>
                  <div className="space-y-2 text-sm">
                    <p className="font-montserrat text-textSecondary"><strong className="text-textLight">Lunes - Viernes:</strong> 8:00 AM - 6:00 PM</p>
                    <p className="font-montserrat text-textSecondary"><strong className="text-textLight">Sábados:</strong> 9:00 AM - 2:00 PM</p>
                    <p className="font-montserrat text-textSecondary"><strong className="text-textLight">Domingos:</strong> Cerrado</p>
                  </div>
                </div>
              </div>
              
              {/* Formulario */}
              <div className="lg:col-span-2">
                <h3 className="font-bold mb-6 text-accent text-2xl font-cinzel uppercase">Envíanos un Mensaje</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <label className="block font-montserrat text-textLight mb-2">Teléfono</label>
                      <input 
                        type="tel" 
                        name="telefono" 
                        value={form.telefono} 
                        onChange={handleChange} 
                        placeholder="300 123 4567"
                        className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block font-montserrat text-textLight mb-2">Ciudad</label>
                      <input 
                        type="text" 
                        name="ciudad" 
                        value={form.ciudad} 
                        onChange={handleChange} 
                        placeholder="Tu ciudad"
                        className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat text-textLight mb-2">Departamento</label>
                      <select 
                        name="departamento" 
                        value={form.departamento} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                      >
                        <option value="">Seleccionar...</option>
                        {departamentosColombia.map((dept, index) => (
                          <option key={index} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-montserrat text-textLight mb-2">Edad</label>
                      <input 
                        type="number" 
                        name="edad" 
                        value={form.edad} 
                        onChange={handleChange} 
                        min="1" 
                        max="100"
                        placeholder="Tu edad"
                        className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-montserrat text-textLight mb-2">Instrumento de Interés</label>
                      <select 
                        name="instrumentoInteres" 
                        value={form.instrumentoInteres} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                      >
                        <option value="">Seleccionar...</option>
                        {instrumentos.map((instrumento, index) => (
                          <option key={index} value={instrumento}>{instrumento}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-montserrat text-textLight mb-2">Motivo de Contacto *</label>
                      <select 
                        name="motivoContacto" 
                        value={form.motivoContacto} 
                        onChange={handleChange} 
                        required
                        className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                      >
                        <option value="">Seleccionar...</option>
                        {motivosContacto.map((motivo, index) => (
                          <option key={index} value={motivo}>{motivo}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-montserrat text-textLight mb-2">Mensaje</label>
                    <textarea 
                      name="mensaje" 
                      value={form.mensaje} 
                      onChange={handleChange} 
                      rows={5} 
                      placeholder="Cuéntanos más detalles sobre tu consulta o interés en la Fundación Rubato..."
                      className="w-full px-4 py-3 bg-bgDark border border-bgDarkSection rounded-md text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-montserrat"
                    />
                  </div>
                  
                  <div className="text-xs text-accent font-montserrat mb-4">
                    * Campos obligatorios
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-4 px-8 bg-primary text-textLight font-bold rounded-md hover:bg-accent transition-colors font-montserrat text-lg"
                  >
                    Enviar Mensaje
                  </button>
                  
                  {enviado && (
                    <div className="mt-4 p-4 bg-accent/10 border border-accent rounded-lg">
                      <p className="text-accent font-semibold font-montserrat text-center">
                        ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Ubicación y mapa */}
        <section className="mb-20">
          <div className="bg-bgDarkSection rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-textLight font-montserrat mb-2">
                    Cl. 61 #37-44
                  </p>
                  <p className="text-lg text-textSecondary font-montserrat mb-4">
                    Barranquilla, Atlántico
                  </p>
                  <p className="text-sm text-textSecondary font-montserrat leading-relaxed">
                    Visita nuestras instalaciones y descubre todo lo que la Fundación Rubato tiene para ofrecerte. 
                    Estamos ubicados en el corazón de Barranquilla.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <MapaContacto 
                  direccion="Cl. 61 #37-44, Barranquilla, Atlántico, Colombia"
                  coordenadas={{ lat: 10.9970, lng: -74.7873 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-bgDarkSection rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-textLight font-cinzel uppercase mb-4">
            ¡Te Esperamos!
          </h3>
          <p className="text-lg text-textLight font-montserrat mb-8 max-w-2xl mx-auto">
            Ven a conocer nuestras instalaciones y descubre cómo puedes ser parte de la transformación musical que estamos creando en Barranquilla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/conservatorio" 
              className="bg-accent text-textLight font-bold py-4 px-8 rounded-lg hover:bg-primary transition-colors font-montserrat text-lg"
            >
              Conocer Nuestros Programas
            </a>
            <a 
              href="/acerca-nosotros/mision-vision" 
              className="bg-transparent border-2 border-accent text-accent font-bold py-4 px-8 rounded-lg hover:bg-accent hover:text-textLight transition-colors font-montserrat text-lg"
            >
              Conocer Nuestra Misión
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
