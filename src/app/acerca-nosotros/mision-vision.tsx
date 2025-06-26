import React from "react";

export default function MisionVision() {
  return (
    <main className="bg-bgDark min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-bgSection">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-cinzel uppercase mb-4">
            Misión y Visión
          </h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
            Conoce nuestro propósito y hacia dónde nos dirigimos como fundación
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          
          {/* Misión */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
                Nuestra Misión
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>
            <div className="bg-bgSection rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" 
                    alt="Estudiantes en formación musical"
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-textDark font-montserrat leading-relaxed">
                    Crear un espacio de <strong className="text-primary">formación académica y proyección artística</strong> que conjugue procesos musicales a nivel nacional e internacional, con el propósito de que niños, niñas y adolescentes de la región desarrollen sus talentos, a través de prácticas musicales de excelente calidad.
                  </p>
                  <p className="text-lg md:text-xl text-textDark font-montserrat leading-relaxed mt-6">
                    El resultado de esta iniciativa contribuirá al <strong className="text-accent">ecosistema cultural y a la transformación social</strong> de la ciudad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textLight font-cinzel uppercase mb-4">
                Nuestra Visión
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>
            <div className="bg-bgSection rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop" 
                    alt="Festival de música"
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-textDark font-montserrat leading-relaxed">
                    El <strong className="text-primary">Festival Internacional de Música Rubato</strong> pretende ser, en un lapso de 10 años, una celebración regular y consolidada en el ámbito regional como un referente en la agenda cultural de calidad, legitimado por la población local como un evento de ciudad.
                  </p>
                  <p className="text-lg md:text-xl text-textDark font-montserrat leading-relaxed mt-6">
                    Reconocido desde lo formativo como un <strong className="text-accent">modelo de transformación social</strong> a partir del uso de la música como herramienta para el desarrollo de la sensibilidad y el crecimiento intelectual.
                  </p>
                  <p className="text-lg md:text-xl text-textDark font-montserrat leading-relaxed mt-6">
                    El festival aspira a extender su experiencia al resto del país y contar con una organización fortalecida, dotada de la infraestructura y del apoyo necesario para su correcto funcionamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-bgDarkSection rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-textLight font-cinzel uppercase mb-4">
              Únete a Nuestra Misión
            </h3>
            <p className="text-lg text-textSecondary font-montserrat mb-8 max-w-2xl mx-auto">
              Sé parte de la transformación social a través de la música. Conoce nuestros programas y cómo puedes participar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/programas" 
                className="bg-accent text-textLight font-bold py-3 px-8 rounded-lg hover:bg-primary transition-colors font-montserrat"
              >
                Ver Programas
              </a>
              <a 
                href="/contacto" 
                className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-8 rounded-lg hover:bg-accent hover:text-textLight transition-colors font-montserrat"
              >
                Contáctanos
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
