// Datos de Noticias de la Fundación Rubato
// Este archivo será administrado por el CMS

export interface Noticia {
  id: string;
  slug: string;
  titulo: string;
  descripcionCorta: string;
  contenido: string;
  fechaPublicacion: string;
  imagenPrincipal: string;
  imagenesGaleria?: string[];
  autor: string;
  categoria: 'logro' | 'anuncio' | 'reconocimiento' | 'actividad' | 'colaboracion' | 'general';
  esDestacada: boolean;
  estaActiva: boolean;
  tags: string[];
  urlExterna?: string; // Para noticias que enlazan a sitios externos
  metadatos?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// Noticias de ejemplo - En producción estas vendrán del CMS
export const noticias: Noticia[] = [
  {
    id: "1",
    slug: "rubato-gana-premio-cultural-2024",
    titulo: "Fundación Rubato gana Premio de Excelencia Cultural 2024",
    descripcionCorta: "Reconocimiento del Ministerio de Cultura por nuestro impacto en la formación musical juvenil de la región Caribe.",
    contenido: "La Fundación Rubato ha sido galardonada con el prestigioso Premio de Excelencia Cultural 2024 otorgado por el Ministerio de Cultura de Colombia. Este reconocimiento destaca nuestro trabajo constante en la formación musical de jóvenes en la región Caribe y nuestro compromiso con la transformación social a través de la música.",
    fechaPublicacion: "2024-06-20",
    imagenPrincipal: "/images/noticias/premio-cultural-2024.jpg",
    imagenesGaleria: [
      "/images/noticias/galeria/premio-1.jpg",
      "/images/noticias/galeria/premio-2.jpg"
    ],
    autor: "Equipo Comunicaciones Rubato",
    categoria: "reconocimiento",
    esDestacada: true,
    estaActiva: true,
    tags: ["premio", "reconocimiento", "ministerio cultura", "excelencia"],
    metadatos: {
      metaTitle: "Rubato gana Premio Cultural 2024 - Fundación Rubato",
      metaDescription: "La Fundación Rubato recibe reconocimiento del Ministerio de Cultura por su excelencia en formación musical juvenil.",
      keywords: ["premio", "cultura", "reconocimiento", "música", "juventud"]
    }
  },
  {
    id: "2",
    slug: "convenio-universidad-norte-2024",
    titulo: "Nuevo Convenio con Universidad del Norte fortalece programas académicos",
    descripcionCorta: "Alianza estratégica permitirá ofrecer programas de formación musical con certificación universitaria.",
    contenido: "Nos complace anunciar la firma de un convenio de cooperación académica con la Universidad del Norte que permitirá fortalecer nuestros programas de formación musical. Esta alianza estratégica incluye el intercambio de docentes, acceso a instalaciones y la posibilidad de obtener certificaciones universitarias para nuestros estudiantes más avanzados.",
    fechaPublicacion: "2024-06-15",
    imagenPrincipal: "/images/noticias/convenio-uninorte.jpg",
    autor: "Dirección Académica",
    categoria: "colaboracion",
    esDestacada: true,
    estaActiva: true,
    tags: ["convenio", "universidad del norte", "educación", "certificación"],
    metadatos: {
      metaTitle: "Convenio con Universidad del Norte - Fundación Rubato",
      metaDescription: "Nueva alianza estratégica fortalece los programas académicos de música con certificación universitaria.",
      keywords: ["convenio", "universidad", "educación musical", "certificación"]
    }
  },
  {
    id: "3",
    slug: "becas-estudiantes-destacados-2024",
    titulo: "Programa de Becas 2024: 50 jóvenes talentos recibirán formación gratuita",
    descripcionCorta: "Apertura del programa anual de becas que beneficiará a estudiantes de escasos recursos con alto potencial musical.",
    contenido: "Nos enorgullece anunciar la apertura de nuestro Programa de Becas 2024, a través del cual 50 jóvenes talentos de la región Caribe recibirán formación musical completamente gratuita. Este programa, financiado por donaciones y el apoyo de empresas aliadas, busca democratizar el acceso a la educación musical de calidad y descubrir nuevos talentos en comunidades vulnerables.",
    fechaPublicacion: "2024-06-10",
    imagenPrincipal: "/images/noticias/programa-becas-2024.jpg",
    autor: "Coordinación Social",
    categoria: "anuncio",
    esDestacada: false,
    estaActiva: true,
    tags: ["becas", "formación gratuita", "jóvenes talentos", "inclusión social"],
    metadatos: {
      metaTitle: "Programa de Becas 2024 - Fundación Rubato",
      metaDescription: "50 jóvenes talentos recibirán formación musical gratuita a través de nuestro programa de becas 2024.",
      keywords: ["becas", "formación gratuita", "talentos musicales", "inclusión"]
    }
  },
  {
    id: "4",
    slug: "estudiantes-rubato-concierto-teatro-colon",
    titulo: "Estudiantes de Rubato brillan en el Teatro Colón de Bogotá",
    descripcionCorta: "Tres estudiantes de nuestro conservatorio fueron invitados a participar en el Concierto Nacional de Jóvenes Talentos.",
    contenido: "Con gran orgullo anunciamos que tres estudiantes de nuestro Conservatorio fueron seleccionados para participar en el prestigioso Concierto Nacional de Jóvenes Talentos en el Teatro Colón de Bogotá. María Fernanda Pérez (violín), Carlos Andrés Gómez (piano) y Ana Sofía Martínez (violonchelo) representaron con excelencia a la región Caribe y demostraron el alto nivel de formación que ofrecemos en Rubato.",
    fechaPublicacion: "2024-06-05",
    imagenPrincipal: "/images/noticias/estudiantes-teatro-colon.jpg",
    autor: "Conservatorio Rubato",
    categoria: "logro",
    esDestacada: true,
    estaActiva: true,
    tags: ["estudiantes", "teatro colón", "logro", "jóvenes talentos"],
    metadatos: {
      metaTitle: "Estudiantes de Rubato en Teatro Colón - Fundación Rubato",
      metaDescription: "Estudiantes del Conservatorio Rubato brillan en el Concierto Nacional de Jóvenes Talentos en Bogotá.",
      keywords: ["estudiantes", "teatro colón", "concierto", "talentos", "bogotá"]
    }
  },
  {
    id: "5",
    slug: "nueva-sede-conservatorio-soledad",
    titulo: "Inauguración de nueva sede del Conservatorio en Soledad",
    descripcionCorta: "Ampliamos nuestra presencia en el área metropolitana con modernas instalaciones para 200 estudiantes adicionales.",
    contenido: "Estamos emocionados de anunciar la inauguración de nuestra nueva sede del Conservatorio Rubato en el municipio de Soledad. Esta moderna instalación cuenta con 12 aulas especializadas, un auditorio para 150 personas y tecnología de punta para la enseñanza musical. Con esta expansión, podremos atender a 200 estudiantes adicionales y acercar nuestra propuesta educativa a más familias del área metropolitana.",
    fechaPublicacion: "2024-05-28",
    imagenPrincipal: "/images/noticias/nueva-sede-soledad.jpg",
    autor: "Dirección General",
    categoria: "anuncio",
    esDestacada: false,
    estaActiva: true,
    tags: ["nueva sede", "soledad", "expansión", "conservatorio"],
    metadatos: {
      metaTitle: "Nueva sede en Soledad - Conservatorio Rubato",
      metaDescription: "Inauguramos nueva sede del Conservatorio en Soledad con capacidad para 200 estudiantes adicionales.",
      keywords: ["nueva sede", "soledad", "conservatorio", "expansión", "educación musical"]
    }
  }
];

// Función para obtener noticias destacadas
export const getNoticiasDestacadas = (limite = 3): Noticia[] => {
  return noticias
    .filter(noticia => noticia.esDestacada && noticia.estaActiva)
    .sort((a, b) => new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime())
    .slice(0, limite);
};

// Función para obtener noticias por categoría
export const getNoticiasPorCategoria = (categoria: string): Noticia[] => {
  return noticias
    .filter(noticia => noticia.categoria === categoria && noticia.estaActiva)
    .sort((a, b) => new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime());
};

// Función para obtener noticias recientes
export const getNoticiasRecientes = (limite = 10): Noticia[] => {
  return noticias
    .filter(noticia => noticia.estaActiva)
    .sort((a, b) => new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime())
    .slice(0, limite);
};

// Función para obtener noticia por slug
export const getNoticiaPorSlug = (slug: string): Noticia | undefined => {
  return noticias.find(noticia => noticia.slug === slug && noticia.estaActiva);
};
