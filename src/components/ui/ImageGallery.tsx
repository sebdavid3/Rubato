import React from "react";
import Image from "next/image";

interface ImageItem {
  url: string;
  alt: string;
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide' | 'square';
}

interface ImageGalleryProps {
  imagenes: ImageItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imagenes }) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2 h-48 sm:h-64 md:h-80 lg:h-96';
      case 'tall':
        return 'row-span-2 h-48 sm:h-64 md:h-80 lg:h-96';
      case 'wide':
        return 'col-span-2 h-32 sm:h-40 md:h-48';
      case 'square':
        return 'h-32 sm:h-40 md:h-48';
      case 'medium':
        return 'h-24 sm:h-32 md:h-40';
      case 'small':
      default:
        return 'h-20 sm:h-24 md:h-32';
    }
  };

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-textLight text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] mb-6 sm:mb-8 text-center font-cinzel uppercase">
          Galería
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
        
        {/* Grid responsivo que se adapta mejor a móviles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 auto-rows-min">
          {imagenes.map((img, idx) => (
            <div
              key={idx}
              className={`${getSizeClasses(img.size)} overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {/* Texto descriptivo */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-textSecondary font-montserrat text-sm sm:text-base max-w-2xl mx-auto">
            Momentos especiales de nuestros conciertos, ensayos y actividades musicales que muestran la pasión y dedicación de nuestra comunidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
