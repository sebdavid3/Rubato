// Datos de Agrupaciones Musicales de la Fundación Rubato
// Esta estructura está diseñada para ser administrada por un CMS

export interface Integrante {
  id: string;
  nombre: string;
  instrumento: string;
  foto: string;
  biografia: string;
  orden: number; // Para ordenar la visualización
}

export interface Logro {
  id: string;
  año: string;
  evento: string;
  descripcion: string;
  categoria: 'festival' | 'concierto' | 'curso' | 'colaboracion' | 'premio';
  fechaEvento?: string;
}

export interface Agrupacion {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  historia: string;
  mision?: string;
  imagenPrincipal: string;
  imagenGrupo: string;
  tipo: 'cuarteto' | 'orquesta' | 'coro' | 'ensamble' | 'duo' | 'trio';
  generos: string[];
  fundacion: string; // Año de fundación
  estaActiva: boolean;
  integrantes: Integrante[];
  logros: Logro[];
  repertorio: {
    categoria: string;
    descripcion: string;
  }[];
  contacto?: {
    email?: string;
    telefono?: string;
    manager?: string;
  };
  redesSociales?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
  publicadoEn: string;
  metadatos?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// Datos del RioMar Quartet
export const riomarQuartet: Agrupacion = {
  id: "riomar-quartet",
  nombre: "RioMar Quartet",
  slug: "riomar-quartet",
  descripcion: "Una agrupación de cuerdas que exalta la unidad en medio de la diversidad musical y cultural de la región Caribe colombiana, donde el Río Magdalena se encuentra con el mar.",
  historia: "RioMar Quartet es una agrupación proveniente de Barranquilla (Colombia), ciudad donde el Río Magdalena se encuentra para mezclarse con el mar Caribe. Gracias a esta convergencia, nace la idea de conformar un cuarteto de cuerdas que exalte la unidad en medio de la diversidad musical y cultural de esta región del país. Sus integrantes han adquirido experiencia y formación en música de cámara, orquestal, además de ser docentes en Conservatorios de Música, Universidades y ser un referente de liderazgo en la cultura en la ciudad y el departamento del Atlántico.",
  mision: "RioMar Quartet busca difundir un repertorio que abarque diferentes periodos y estilos de la música, pasando por repertorio clásico, contemporáneo y varias manifestaciones tradicionales y populares del Caribe colombiano.",
  imagenPrincipal: "/images/riomar-quartet/hero-bg.jpg",
  imagenGrupo: "/images/riomar-quartet/grupo-completo.jpg",
  tipo: "cuarteto",
  generos: ["Música Clásica", "Música Contemporánea", "Música del Caribe", "Música de Cámara"],
  fundacion: "2021",
  estaActiva: true,
  integrantes: [
    {
      id: "alfredo-reyes",
      nombre: "Alfredo Reyes",
      instrumento: "Violín",
      foto: "/images/riomar-quartet/alfredo-reyes.jpg",
      biografia: "Violinista y director musical, fundador de la Fundación Rubato. Con amplia experiencia en música de cámara y dirección orquestal.",
      orden: 1
    },
    {
      id: "salma-navarro",
      nombre: "Salma Navarro",
      instrumento: "Violín",
      foto: "/images/riomar-quartet/salma-navarro.jpg",
      biografia: "Violinista con formación en música de cámara y experiencia en agrupaciones sinfónicas de la región Caribe.",
      orden: 2
    },
    {
      id: "steffin-hernandez",
      nombre: "Steffin Hernández",
      instrumento: "Viola",
      foto: "/images/riomar-quartet/steffin-hernandez.jpg",
      biografia: "Violista y educadora musical, directora académica de la Fundación Rubato con especialización en pedagogía musical.",
      orden: 3
    },
    {
      id: "natalia-conde",
      nombre: "Natalia Conde",
      instrumento: "Violonchelo",
      foto: "/images/riomar-quartet/natalia-conde.jpg",
      biografia: "Violonchelista formada en la Universidad de Antioquia y la Escuela Superior de Música Reina Sofía en Madrid.",
      orden: 4
    }
  ],
  logros: [
    {
      id: "curso-cuartetos-2021",
      año: "2021",
      evento: "Curso Virtual para Cuartetos de Cuerda",
      descripcion: "Seleccionados a nivel de Latinoamérica para participar en el curso organizado por los cuartetos José White (México) y Q-Arte (Colombia).",
      categoria: "curso",
      fechaEvento: "2021-01-15"
    },
    {
      id: "festival-camara-2021",
      año: "2021",
      evento: "X Festival Internacional de Música de Cámara de Barranquilla",
      descripcion: "Seleccionados por concurso a nivel nacional para participar en este prestigioso festival.",
      categoria: "festival",
      fechaEvento: "2021-09-15"
    },
    {
      id: "teatro-santa-marta-2021",
      año: "2021",
      evento: "Reinauguración del Teatro Santa Marta",
      descripcion: "Artistas invitados para la reinauguración de este referente arquitectónico y patrimonial de Colombia.",
      categoria: "concierto",
      fechaEvento: "2021-11-20"
    },
    {
      id: "temporada-rubato-2021",
      año: "2021",
      evento: "Temporada de Conciertos Fundación Rubato",
      descripcion: "Participación en la temporada de conciertos de noviembre y diciembre organizada por la Fundación Rubato.",
      categoria: "concierto",
      fechaEvento: "2021-11-01"
    },
    {
      id: "festival-arcos-2022",
      año: "2022",
      evento: "XVII Festival Arcos UNAB",
      descripcion: "Talleristas invitados en el festival realizado en la ciudad de Bucaramanga.",
      categoria: "festival",
      fechaEvento: "2022-10-15"
    },
    {
      id: "gira-lido-pimienta-2023",
      año: "2023",
      evento: "Gira con Lido Pimienta",
      descripcion: "Acompañaron a la artista internacional Lido Pimienta en su gira por el Caribe colombiano.",
      categoria: "colaboracion",
      fechaEvento: "2023-07-01"
    }
  ],
  repertorio: [
    {
      categoria: "Repertorio Clásico",
      descripcion: "Obras maestras de los grandes compositores de la música de cámara, desde el período barroco hasta el romanticismo."
    },
    {
      categoria: "Música Contemporánea",
      descripcion: "Composiciones modernas y contemporáneas que enriquecen el panorama actual de la música de cámara."
    },
    {
      categoria: "Música del Caribe",
      descripcion: "Manifestaciones tradicionales y populares del Caribe colombiano adaptadas para cuarteto de cuerdas."
    }
  ],
  contacto: {
    email: "riomar@fundacionrubato.org",
    manager: "Fundación Rubato"
  },
  redesSociales: {
    instagram: "@riomarquartet",
    facebook: "RioMar Quartet"
  },
  publicadoEn: "2024-01-15",
  metadatos: {
    metaTitle: "RioMar Quartet - Cuarteto de Cuerdas | Fundación Rubato",
    metaDescription: "Conoce al RioMar Quartet, la agrupación de cuerdas de la Fundación Rubato que exalta la diversidad musical del Caribe colombiano.",
    keywords: ["RioMar Quartet", "cuarteto de cuerdas", "música de cámara", "Caribe colombiano", "Fundación Rubato", "Barranquilla"]
  }
};

// Datos de la Orquesta de Cámara de Barranquilla
export const orquestaCamara: Agrupacion = {
  id: "orquesta-camara-barranquilla",
  nombre: "Orquesta de Cámara de Barranquilla",
  slug: "orquesta-camara",
  descripcion: "Una orquesta de cámara que lleva la música clásica y contemporánea a todos los rincones de Barranquilla y el Caribe colombiano, promoviendo la excelencia musical y la educación artística.",
  historia: "La Orquesta de Cámara de Barranquilla surge como una iniciativa de la Fundación Rubato para crear un espacio de desarrollo musical de alto nivel en la ciudad. Conformada por músicos profesionales y estudiantes avanzados, la orquesta se ha consolidado como un referente de la música de cámara en el Caribe colombiano. A través de temporadas regulares de conciertos, la agrupación ha interpretado un amplio repertorio que va desde el barroco hasta la música contemporánea, incluyendo obras de compositores latinoamericanos y colombianos.",
  mision: "Fomentar la apreciación y práctica de la música de cámara de alta calidad, ofreciendo oportunidades de formación musical a jóvenes talentos y acercando la música clásica a toda la comunidad barranquillera.",
  imagenPrincipal: "/images/orquesta-camara/hero-bg.jpg",
  imagenGrupo: "/images/orquesta-camara/grupo-completo.jpg",
  tipo: "orquesta",
  generos: ["Música Clásica", "Música Contemporánea", "Música Barroca", "Música Latinoamericana"],
  fundacion: "2020",
  estaActiva: true,
  integrantes: [
    {
      id: "alfredo-reyes-director",
      nombre: "Alfredo Reyes",
      instrumento: "Director Musical",
      foto: "/images/orquesta-camara/alfredo-reyes.jpg",
      biografia: "Director musical y fundador de la Fundación Rubato. Violinista con amplia experiencia en dirección orquestal y música de cámara.",
      orden: 1
    }
  ],
  logros: [
    {
      id: "temporada-inaugural-2020",
      año: "2020",
      evento: "Temporada Inaugural",
      descripcion: "Primera temporada de conciertos de la Orquesta de Cámara de Barranquilla con gran acogida del público.",
      categoria: "concierto",
      fechaEvento: "2020-11-15"
    },
    {
      id: "colaboracion-filarmonica-2021",
      año: "2021",
      evento: "Colaboración con Filarmónica de Bogotá",
      descripcion: "Intercambio artístico y musical con músicos de la Filarmónica de Bogotá.",
      categoria: "colaboracion",
      fechaEvento: "2021-08-20"
    },
    {
      id: "concierto-navidad-2022",
      año: "2022",
      evento: "Concierto de Navidad",
      descripcion: "Tradicional concierto navideño que se ha convertido en una cita obligada para la comunidad.",
      categoria: "concierto",
      fechaEvento: "2022-12-15"
    }
  ],
  repertorio: [
    {
      categoria: "Música Barroca",
      descripcion: "Obras de Bach, Vivaldi, Handel y otros maestros del período barroco adaptadas para orquesta de cámara."
    },
    {
      categoria: "Música Clásica y Romántica",
      descripcion: "Sinfonías, conciertos y obras de cámara de Mozart, Beethoven, Schubert y compositores del período romántico."
    },
    {
      categoria: "Música Latinoamericana",
      descripcion: "Obras de compositores latinoamericanos y colombianos que enriquecen el panorama musical regional."
    },
    {
      categoria: "Música Contemporánea",
      descripcion: "Composiciones modernas y estrenos de obras de compositores actuales."
    }
  ],
  contacto: {
    email: "orquesta@fundacionrubato.org",
    manager: "Fundación Rubato"
  },
  redesSociales: {
    instagram: "@orquestacamarabaq",
    youtube: "@OrquestaCamaraBarranquilla"
  },
  publicadoEn: "2024-01-15",
  metadatos: {
    metaTitle: "Orquesta de Cámara de Barranquilla | Fundación Rubato",
    metaDescription: "Conoce la Orquesta de Cámara de Barranquilla, agrupación que promueve la música clásica y contemporánea en el Caribe colombiano.",
    keywords: ["Orquesta de Cámara", "Barranquilla", "música clásica", "Fundación Rubato", "música de cámara", "Caribe colombiano"]
  }
};

// Array de todas las agrupaciones (para futuras agrupaciones)
export const agrupaciones: Agrupacion[] = [
  riomarQuartet,
  orquestaCamara
  // Aquí se pueden agregar más agrupaciones en el futuro
];

// Funciones utilitarias para el CMS
export const getAgrupacionPorSlug = (slug: string): Agrupacion | undefined => {
  return agrupaciones.find(agrupacion => agrupacion.slug === slug && agrupacion.estaActiva);
};

export const getAgrupacionesActivas = (): Agrupacion[] => {
  return agrupaciones.filter(agrupacion => agrupacion.estaActiva);
};

export const getAgrupacionesPorTipo = (tipo: string): Agrupacion[] => {
  return agrupaciones.filter(agrupacion => agrupacion.tipo === tipo && agrupacion.estaActiva);
};
