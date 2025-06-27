import React from "react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fundación Rubato | Acerca de Nosotros",
  description: "Conoce nuestra misión, visión y el equipo que hace posible la transformación social a través de la música en la Fundación Rubato.",
};

export default function AcercaDeNosotros() {
  const equipo = [
    {
      nombre: "Alfredo Reyes",
      cargo: "Director",
      imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    },
    {
      nombre: "Steffin Hernandez",
      cargo: "Gerente",
      imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    },
    {
      nombre: "Victoria Garcia",
      cargo: "Asistente Administrativa",
      imagen: "https://images.unsplash.com/photo-1494790108755-2616c04c9998?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    },
    {
      nombre: "Sebastian Ibañez",
      cargo: "Gerente TI",
      imagen: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    },
    {
      nombre: "David Jiménez",
      cargo: "Asistente de Dirección",
      imagen: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    }
  ];

  const profesores = [
    {
      nombre: "Ana María López",
      cargo: "Profesora de Piano",
      especialidad: "Piano Clásico y Composición",
      imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    },
    {
      nombre: "Carlos Mendoza",
      cargo: "Profesor de Violín",
      especialidad: "Violín y Música de Cámara",
      imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    },
    {
      nombre: "María Elena Castro",
      cargo: "Profesora de Flauta",
      especialidad: "Instrumentos de Viento",
      imagen: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    },
    {
      nombre: "Roberto Silva",
      cargo: "Profesor de Guitarra",
      especialidad: "Guitarra Clásica y Popular",
      imagen: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    },
    {
      nombre: "Lucía Vargas",
      cargo: "Profesora de Canto",
      especialidad: "Técnica Vocal y Lírica",
      imagen: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    },
    {
      nombre: "Diego Morales",
      cargo: "Profesor de Trompeta",
      especialidad: "Instrumentos de Viento Metal",
      imagen: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      instagram: "#"
    }
  ];

  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Acerca de Nosotros
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-3xl mx-auto font-medium">
            Brindando sueños y creando propósitos
          </p>
        </div>
      </section>

      {/* Espaciado adicional */}
      <div className="h-16 md:h-24"></div>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-6xl">
        
        {/* Introducción sobre la Fundación */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Quiénes Somos
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-textLight font-cinzel mb-6">
                  La Fundación Rubato tiene por objeto:
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-bgDark rounded-lg p-6 shadow-md border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <p className="text-lg text-textLight font-montserrat">
                      La <strong className="text-accent">formación musical</strong>, principalmente de niños, niñas y adolescentes con fines de integración social, fomento y acceso a la cultura.
                    </p>
                  </div>
                </div>
                
                <div className="bg-bgDark rounded-lg p-6 shadow-md border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <p className="text-lg text-textLight font-montserrat">
                      La <strong className="text-accent">promoción y apoyo</strong> a proyectos juveniles e infantiles de práctica orquestal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bgDark rounded-lg p-8 text-center border border-bgDarkSection">
                <h4 className="text-xl font-bold text-accent font-cinzel mb-4 uppercase">
                  Nuestros Principios
                </h4>
                <p className="text-lg text-textLight font-montserrat leading-relaxed">
                  La Fundación se guiará por los siguientes principios: <strong className="text-accent">Democracia, solidaridad, equidad, justicia, transparencia, creatividad</strong> y en general con los derechos fundamentales de los seres humanos contenidos en la Constitución Nacional y el derecho internacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Nuestra Misión
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" 
                  alt="Niños en formación musical"
                  width={400}
                  height={300}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg md:text-xl text-textLight font-montserrat leading-relaxed">
                  Crear <strong className="text-accent">espacios musicales y sociales</strong> favoreciendo la calidad de vida en niños, niñas y adolescentes en situación de vulnerabilidad, impulsando los valores humanos en un sector más amplio de la sociedad colombiana, a partir de la organización y el apoyo a <strong className="text-accent">programas musicales de carácter artístico y formativo</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visión */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Nuestra Visión
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="bg-bgDarkSection rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <Image 
                  src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop" 
                  alt="Costa Caribe colombiana"
                  width={400}
                  height={300}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg md:text-xl text-textLight font-montserrat leading-relaxed">
                  La Fundación Rubato busca ser <strong className="text-accent">pionera en procesos musicales</strong> desde la Costa Caribe colombiana hasta extenderse al resto del país, proporcionando el <strong className="text-accent">desarrollo integral y la libertad de expresarse</strong> en un espacio seguro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Nuestro Equipo
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary font-montserrat max-w-2xl mx-auto">
              Conoce a las personas que hacen posible nuestra misión de transformación social a través de la música
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {equipo.map((miembro, index) => (
              <div key={index} className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 w-full md:w-80 lg:w-80">
                <div className="relative overflow-hidden h-64">
                  <Image 
                    src={miembro.imagen} 
                    alt={miembro.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">
                    {miembro.nombre}
                  </h3>
                  <p className="text-textSecondary font-montserrat mb-4">
                    {miembro.cargo}
                  </p>
                  <a 
                    href={miembro.instagram}
                    className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-montserrat font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Profesores */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
              Nuestros Profesores
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary font-montserrat max-w-2xl mx-auto">
              Conoce a los maestros que guían el proceso de formación musical de nuestros estudiantes
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {profesores.map((profesor, index) => (
              <div key={index} className="bg-bgDarkSection rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 w-full md:w-80 lg:w-80">
                <div className="relative overflow-hidden h-64">
                  <Image 
                    src={profesor.imagen} 
                    alt={profesor.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-textLight font-cinzel mb-2">
                    {profesor.nombre}
                  </h3>
                  <p className="text-accent font-montserrat text-sm mb-2 font-medium">
                    {profesor.cargo}
                  </p>
                  <p className="text-textSecondary font-montserrat text-sm mb-4">
                    {profesor.especialidad}
                  </p>
                  <a 
                    href={profesor.instagram}
                    className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-montserrat font-medium text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-bgDarkSection rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-textLight font-cinzel uppercase mb-4">
            Únete a Nuestra Causa
          </h3>
          <p className="text-lg text-textLight font-montserrat mb-8 max-w-2xl mx-auto">
            Ayúdanos a seguir brindando sueños y creando propósitos a través de la música. Conoce cómo puedes ser parte de esta transformación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/programas" 
              className="bg-accent text-textLight font-bold py-3 px-8 rounded-lg hover:bg-primary transition-colors font-montserrat"
            >
              Ver Nuestros Programas
            </a>
            <a 
              href="/apoyanos" 
              className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-8 rounded-lg hover:bg-accent hover:text-textLight transition-colors font-montserrat"
            >
              Cómo Apoyar
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
