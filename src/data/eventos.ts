// Datos de prueba para la colección de Eventos
// Esta estructura está diseñada para ser administrada por un CMS

export interface Evento {
  id: string;
  titulo: string;
  slug: string;
  imagenPrincipal: string;
  descripcionCorta: string;
  contenido: string;
  fechaInicio: string;
  fechaFin?: string;
  ubicacion: string;
  esDestacado: boolean;
  categoria: 'concierto' | 'masterclass' | 'conferencia' | 'taller' | 'festival';
  esPago: boolean;
  precio?: number;
  festivalEdicion?: number; // Opcional: asociar evento a una edición del festival
  estado: 'proximo' | 'en_curso' | 'finalizado';
  coordenadasMapa?: {
    lat: number;
    lng: number;
  };
  artistas?: string[]; // Array de nombres de artistas participantes
  publicadoEn: string; // Fecha de publicación
}

export const eventos: Evento[] = [
  {
    id: "1",
    titulo: "Concierto de Apertura Rubato 2025",
    slug: "concierto-apertura-2025",
    imagenPrincipal: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    descripcionCorta: "Gran inauguración de la temporada con la Filarmónica Juvenil.",
    contenido: "El concierto de apertura contará con la participación de solistas invitados y repertorio clásico. Una noche especial para dar inicio a la temporada 2025 de la Fundación Rubato.",
    fechaInicio: "2025-06-19T19:00:00-05:00",
    fechaFin: "2025-06-19T21:00:00-05:00",
    ubicacion: "Teatro Mayor Rubato",
    esDestacado: true,
    categoria: "concierto",
    esPago: true,
    precio: 50000,
    estado: "proximo",
    artistas: ["Filarmónica Juvenil de Barranquilla", "Alfredo Reyes"],
    publicadoEn: "2025-05-15T10:00:00-05:00",
    coordenadasMapa: {
      lat: 10.9639,
      lng: -74.7964
    }
  },
  {
    id: "2",
    titulo: "Festival Internacional Rubato - Gala Final",
    slug: "festival-gala-final-2025",
    imagenPrincipal: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop",
    descripcionCorta: "Cierre del festival con orquestas invitadas y premiación.",
    contenido: "La gala final reúne a los mejores talentos del festival en una noche inolvidable. Premiación a los participantes destacados y presentaciones especiales.",
    fechaInicio: "2025-07-31T20:00:00-05:00",
    ubicacion: "Auditorio Principal Fundación Rubato",
    esDestacado: true,
    categoria: "festival",
    esPago: true,
    precio: 80000,
    festivalEdicion: 2025,
    estado: "proximo",
    artistas: ["Orquestas Invitadas", "Concentus Quartet"],
    publicadoEn: "2025-05-20T14:30:00-05:00",
    coordenadasMapa: {
      lat: 10.9639,
      lng: -74.7964
    }
  },
  {
    id: "3",
    titulo: "Clase Magistral de Violín",
    slug: "clase-magistral-violin-2025",
    imagenPrincipal: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    descripcionCorta: "Sesión especial con la maestra invitada Ana Pérez.",
    contenido: "Dirigido a estudiantes avanzados. Cupos limitados. La maestra Ana Pérez compartirá su experiencia y técnicas avanzadas de interpretación.",
    fechaInicio: "2025-07-10T16:00:00-05:00",
    fechaFin: "2025-07-10T18:00:00-05:00",
    ubicacion: "Sala 2, Conservatorio Rubato",
    esDestacado: false,
    categoria: "masterclass",
    esPago: true,
    precio: 25000,
    estado: "proximo",
    artistas: ["Ana Pérez"],
    publicadoEn: "2025-06-01T09:00:00-05:00"
  },
  {
    id: "4",
    titulo: "Concierto de Música de Cámara",
    slug: "concierto-musica-camara-junio",
    imagenPrincipal: "https://images.unsplash.com/photo-1465621619447-5f31d03a60c1?w=600&h=400&fit=crop",
    descripcionCorta: "Repertorio clásico y contemporáneo con el Quinteto Rubato.",
    contenido: "Una velada íntima con obras de Mozart, Brahms y compositores colombianos contemporáneos. El Quinteto Rubato presenta un repertorio cuidadosamente seleccionado.",
    fechaInicio: "2025-06-28T19:30:00-05:00",
    ubicacion: "Sala de Música de Cámara, Conservatorio Rubato",
    esDestacado: false,
    categoria: "concierto",
    esPago: true,
    precio: 35000,
    estado: "proximo",
    artistas: ["Quinteto Rubato"],
    publicadoEn: "2025-05-25T16:00:00-05:00"
  },
  {
    id: "5",
    titulo: "Taller de Dirección Orquestal",
    slug: "taller-direccion-orquestal-2025",
    imagenPrincipal: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop",
    descripcionCorta: "Taller intensivo para jóvenes directores con el maestro Carlos Montenegro.",
    contenido: "Taller de tres días dirigido a estudiantes de dirección orquestal. Incluye práctica con orquesta en vivo y sesiones teóricas sobre técnica de dirección.",
    fechaInicio: "2025-07-15T09:00:00-05:00",
    fechaFin: "2025-07-17T17:00:00-05:00",
    ubicacion: "Auditorio Principal Fundación Rubato",
    esDestacado: true,
    categoria: "taller",
    esPago: true,
    precio: 150000,
    estado: "proximo",
    artistas: ["Carlos Montenegro", "Orquesta Juvenil del Caribe"],
    publicadoEn: "2025-06-05T11:00:00-05:00"
  },
  {
    id: "6",
    titulo: "Conferencia: El Futuro de la Educación Musical",
    slug: "conferencia-futuro-educacion-musical",
    imagenPrincipal: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    descripcionCorta: "Mesa redonda con expertos internacionales en pedagogía musical.",
    contenido: "Expertos de diferentes países discutirán las tendencias actuales y futuras en la educación musical, metodologías innovadoras y el papel de la tecnología.",
    fechaInicio: "2025-06-25T14:00:00-05:00",
    fechaFin: "2025-06-25T17:00:00-05:00",
    ubicacion: "Auditorio Universidad del Norte",
    esDestacado: false,
    categoria: "conferencia",
    esPago: false,
    estado: "proximo",
    publicadoEn: "2025-06-10T08:00:00-05:00"
  }
];

// Funciones utilitarias para el CMS
export const getEventosDestacados = () => eventos.filter(evento => evento.esDestacado);
export const getEventosProximos = () => eventos.filter(evento => evento.estado === 'proximo');
export const getEventosByFestival = (edicion: number) => eventos.filter(evento => evento.festivalEdicion === edicion);
export const getEventoBySlug = (slug: string) => eventos.find(evento => evento.slug === slug);
