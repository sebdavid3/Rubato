// Datos del Festival Internacional de Música Rubato

export interface FestivalEdicion {
  ano: number;
  nombre: string;
  esActiva: boolean;
  estado: 'proxima' | 'actual' | 'pasada';
  fechaInicio?: string;
  fechaFin?: string;
  descripcion: string;
  ubicacion: string;
}

export interface ArtistaInvitado {
  id: string;
  nombre: string;
  foto: string;
  biografia?: string;
  pais: string;
  instrumento?: string;
  edicion: number;
}

export interface Patrocinador {
  id: string;
  nombre: string;
  logoUrl: string;
  sitioWeb?: string;
  edicion: number;
  tipo: 'principal' | 'colaborador' | 'apoyo';
}

export interface EventoFestival {
  id: string;
  titulo: string;
  descripcion: string;
  fechaHoraInicio: string;
  fechaHoraFin: string;
  ubicacion: string;
  imagen: string;
  artistas: string[];
  festivalEdicion: number;
  categoria: 'concierto' | 'masterclass' | 'conferencia' | 'taller';
  entrada: 'libre' | 'paga';
  precio?: number;
}

export interface LiderFestival {
  id: string;
  nombre: string;
  cargo: string;
  foto: string;
  biografia: string;
  categoria: 'presidente' | 'director' | 'equipo';
}

// Ediciones del Festival
export const festivalEdiciones: FestivalEdicion[] = [
  {
    ano: 2025,
    nombre: "II Festival Internacional de Música Rubato",
    esActiva: true,
    estado: 'actual',
    fechaInicio: "2025-11-15",
    fechaFin: "2025-11-22",
    descripcion: "Una semana de música excepcional con artistas internacionales y nacionales, masterclasses, y conciertos únicos que continúa la tradición de excelencia musical iniciada en 2023.",
    ubicacion: "Barranquilla, Colombia"
  },
  {
    ano: 2023,
    nombre: "I Festival Internacional de Música Rubato",
    esActiva: false,
    estado: 'pasada',
    fechaInicio: "2023-11-10",
    fechaFin: "2023-11-18",
    descripcion: "La primera edición del Festival Internacional de Música Rubato nació gracias a la suma de varios esfuerzos e ideales, concretándose a través del uso de la música como medio para la sensibilización de la sociedad y como puente para la formación de niños y niñas de todos los estratos sociales.",
    ubicacion: "Barranquilla, Colombia"
  }
];

// Artistas 2025 (Edición Actual)
export const artistas2025: ArtistaInvitado[] = [
  {
    id: "1",
    nombre: "María Fernanda Rivas",
    foto: "/images/festival/2025/maria-fernanda-rivas.jpg",
    biografia: "Pianista colombiana reconocida internacionalmente",
    pais: "Colombia",
    instrumento: "Piano",
    edicion: 2025
  },
  {
    id: "2",
    nombre: "Jean-Pierre Durand",
    foto: "/images/festival/2025/jean-pierre-durand.jpg",
    biografia: "Violinista francés, primer violin de la Orquesta de París",
    pais: "Francia",
    instrumento: "Violín",
    edicion: 2025
  },
  {
    id: "3",
    nombre: "Carlos Montenegro",
    foto: "/images/festival/2025/carlos-montenegro.jpg",
    biografia: "Director de orquesta venezolano",
    pais: "Venezuela",
    instrumento: "Dirección",
    edicion: 2025
  }
];

// Artistas 2023 (Edición Pasada - Datos Reales)
export const artistas2023: ArtistaInvitado[] = [
  // Artistas Internacionales - Concentus Quartet
  {
    id: "1",
    nombre: "Israel Gutiérrez Vildosola",
    foto: "/images/festival/2023/israel-gutierrez.jpg",
    biografia: "Nació en 1996 en Chillán, Chile. Recibió sus primeras clases de violín con la profesora Carmen Gloria Meya a los nueve años de edad en la \"Escuela artística Claudio Arrau León de Chillan\". Ha tocado como solista con diversas orquestas en Chile, como la OSEM, la Orquesta de Cámara de la Universidad Católica de Chile y la Orquesta Sinfónica de Concepción. A día de hoy estudia música en la Universidad de Artes en Graz con la maestra Eszter Haffner y se enorgullece de tocar un violín de 'Michaelo Angolo' del siglo XVIII. Ha participado en varios concursos y festivales en Europa, Sudamérica y Estados Unidos. Actualmente es miembro del Cuarteto de Cuerdas Concentus residente en Austria, con el cual ha estudiado bajo la guía de Wendy y Mathias Enderle (Carmina Quartett) y Alexander Pavlovsky (Jerusalem Quartet) y con el cual ha hecho conciertos en Rumania, Serbia, Austria y Hungría. Desde 2021 mantiene una activa agenda de conciertos con el Octeto Oberton, grupo con el cual se ha presentado en importantes salas de Austria, Italia y Alemania. Se ha presentado en el Dialoge Festival Salzburg, el Davos Festival en Suiza y el Festival Musica Sull'Aqua en Italia. Ha tocado con la Harmonie Orchestre en la Ópera de Viena y también en el Konzerthaus de Viena con la Orquesta Iberacademy. Fue integrante así mismo del Abad string Quartet, grupo con el cual se presentó en el Festival de Lucerna, en Berna, Viena, Tokio, Salzburgo y Medellín.",
    pais: "Chile",
    instrumento: "Violín",
    edicion: 2023
  },
  {
    id: "2",
    nombre: "Itam Gutierrez Nuñez",
    foto: "/images/festival/2023/itam-gutierrez.jpg",
    biografia: "Inició sus estudios de violín en la Escuela Experimental de Música \"Jorge Peña Hen\" en la ciudad de La Serena, Chile. En 2006 continúa sus estudios en la Facultad de Artes de la Universidad de Chile y luego en el Conservatorio de Música de la Universidad Mayor, graduándose en 2016 con \"Máximo honor\". En 2009 obtuvo el primer lugar en el Concurso Nacional de Violín organizado por la Fundación de Orquestas Juveniles e Infantiles de Chile. Con la Orquesta Sinfónica del Estado de São Paulo, Filarmónica de Santiago, Filarmónica de Salzburgo y la Academia Orquestal \"Schleswig-Holstein Musik Festival\", ha compartido escenario con grandes directores, en los cuales se encuentran Andrés Orozco Estrada, Maxim Vengerov, Christoph Eschenbach, Marin Alsop, Manfred Honeck, Michael Sanderling, Vladimir Jurowski, Krzysztof Urbański, entre otros. Hoy se desempeña como primer violín de \"Concentus Quartet\" con el que ha dado exitosos conciertos en Viena, Graz, Budapest, Belgrado y Cluj-Napoca. Actualmente cursa sus estudios de maestría con la maestra Eszter Haffner en la Universidad de Artes de Graz, Austria.",
    pais: "Chile",
    instrumento: "Violín",
    edicion: 2023
  },
  {
    id: "3",
    nombre: "Samuel Sedano Sainz",
    foto: "/images/festival/2023/samuel-sedano.jpg",
    biografia: "Nació en 1996 en la ciudad de Burgos, España. Cursó el grado medio en el conservatorio Rafael Frühbeck de Burgos, y posteriormente obtuvo su grado de Bachelor en violín en el Real Conservatorio Superior de Música de Madrid, bajo la guía de Ana Maria Valderrama y Savva Fatkoulin. En 2021 se graduó con la máxima calificación del máster en viola en la Kunstuniversität Graz, en la clase de Peter Barsony. Se ha presentado en escenarios de toda Europa con numerosas orquestas, entre ellas la Euskadiko Orkestra, la Wiener Jeunesse Orchester y la Junge Deutsche Philharmonie. Ha recibido clases de reconocidos profesores como Nobuko Imai, Ori Kam, Thomas Riebl, y ha recibido influencias de cuartetos como el Carmina Quartett, Jerusalem Quartet, Cuarteto Quiroga, entre otros. Desde 2021 mantiene una activa agenda de conciertos con el Octeto Oberton, grupo con el cual se ha presentado en importantes salas de Austria, Italia y Alemania. Desde 2019 forma parte del Cuarteto Concentus, con el cual ha realizado numerosos conciertos en salas de toda Europa.",
    pais: "España",
    instrumento: "Viola",
    edicion: 2023
  },
  {
    id: "4",
    nombre: "Sebastián Mendoza",
    foto: "/images/festival/2023/sebastian-mendoza.jpg",
    biografia: "El primer contacto que Sebastián tuvo con la música fue en la Fundación Batuta. Se inició en el Violoncello con los profesores Tomás Ojeda y Magdalena Eichmeyer en Bogotá y con Maria Grün en Viena. Sus estudios superiores los realizó en la Kunstuniversität Graz (Austria) bajo la tutela de Tobías Stosiek. En 2022 estudió en la Hochschule für Musik Freiburg (Alemania) como becario del programa Erasmus, en la clase de Jean-Guihen Queyras y, actualmente, cursa estudios de maestría en violonchelo en la clase de Julian Arp en Graz. Formando parte de la Mahler Chamber Orchestra participó en dos giras en Alemania en 2019 y 2022 y, en el marco del Davos Festival, realizó varios conciertos en Suiza en el verano de 2020. También participó en giras internacionales con la Filarmónica Joven de Colombia. Como músico de cámara se destaca su participación en la Serie de los Jóvenes Intérpretes del Banco de la República, actuando en la Temporada Nacional de Conciertos 2016. Asimismo, ha participado en festivales como el Festival Dialoge en Salzburg en 2019 y en el Festival Musica Sull'Acqua en Italia en 2022. Como miembro del Cuarteto Concentus ha estudiado con Wendy y Matthias Enderle en la Kunstuniversität Graz, y se ha presentado en escenarios de Austria, Hungría, Rumania y Serbia. Actualmente estudia bajo la tutoría de Alexander Pavlovsky, integrante del Jerusalem Quartet. Dentro de sus compromisos para el 2023 se destacan conciertos en Castilla y León con el Cuarteto Concentus, presentaciones en el verano como miembro de la Verbier Festival Orchestra y su participación como solista en la Serie de los Jóvenes Intérpretes del Banco de la República en Bogotá.",
    pais: "Colombia",
    instrumento: "Violonchelo",
    edicion: 2023
  },
  
  // Artistas Internacionales - Otros
  {
    id: "5",
    nombre: "Elea Nick",
    foto: "/images/festival/2023/elea-nick.jpg",
    biografia: "Elea Nick celebró sus mayores éxitos internacionales cuando fue galardonada con el primer premio en Novosibirsk 2013, en Lublin Lipinski-Wieniawski 2015 y en Sofía \"Jóvenes Virtuosos\" 2017. En 2015 ganó el Studienpreis de Migros Kulturprozent y en 2016 la televisión nacional suiza presentó un documental sobre ella.",
    pais: "Suiza",
    instrumento: "Violín",
    edicion: 2023
  },
  {
    id: "6",
    nombre: "Dante Valencia",
    foto: "/images/festival/2023/dante-valencia.jpg",
    biografia: "Nació en San Vicente (Chile) en 1996. Descubrió el contrabajo mientras asistía a la escuela de música de su ciudad natal y pronto se convirtió en su instrumento principal. Después de varios años bajo la tutoría de la profesora Vilma Guerrero, ingresó al ciclo medio de interpretación en el Conservatorio de Música de la Universidad Mayor (Chile), bajo la supervisión del maestro Sebastián Espinosa. Como continuación de su formación, ha recibido lecciones magistrales de Alain Posch, Matthew McDonald, Maria Krykov, Stanislav Anischenko, entre otros. Ha participado como solista con diversas orquestas a lo largo del país, siendo en la actualidad contrabajo de la Orquesta de la Universidad Mayor. Asimismo, ha ganado varios premios y distinciones y ha participado en variados festivales como el de la Academia Orquestal Schleswig-Holstein (Alemania) o el Festival de Música de Cámara de Portillo (Chile). Ha tocado en destacados teatros nacionales y europeos, tales como Teatro Municipal de Santiago (Chile) y Konzerthaus Berlin y Elbphilarmonie (Alemania), entre otros. Actualmente realiza sus estudios de Máster con Wies de Boevé en la Escuela Superior de Música Reina Sofía en Madrid.",
    pais: "Chile",
    instrumento: "Contrabajo",
    edicion: 2023
  },

  // Artistas Nacionales - Trío Ars Diversa
  {
    id: "7",
    nombre: "Humberto Ramírez",
    foto: "/images/festival/2023/humberto-ramirez.jpg",
    biografia: "Completó su pregrado en la Escuela de Música de la Universidad Juan N. Corpas en Bogotá. Es ganador del Premio \"Jóvenes Talentos\" de la Alianza Colombo-Francesa (2009), de Jóvenes Talentos del Auditorio Fabio Lozano (2009 y 2011) y de la Serie de Jóvenes Intérpretes del Banco de la República (2011). Realizó la maestría en interpretación de violín y el Performer Diploma en la Jacobs School of Music de la Universidad de Indiana (Bloomington). En la actualidad, se desempeña como docente de planta de tiempo completo y director del Departamento de Música de la Universidad del Norte.",
    pais: "Colombia",
    instrumento: "Violín",
    edicion: 2023
  },
  {
    id: "8",
    nombre: "Juan David Echeverry",
    foto: "/images/festival/2023/juan-echeverry.jpg",
    biografia: "Maestro en Violoncello egresado de la Universidad de Antioquia en 2017. Comenzó sus estudios musicales en la Red de Escuelas de Música de Medellín en 2007. Fue miembro de la Orquesta Filarmónica Juvenil de Bogotá, Banda y Orquesta Sinfónica de la Universidad de Antioquia, Orquesta Filarmónica Joven de Colombia y Orquesta de las Américas. Se desempeñó como violonchelista principal encargado de la Orquesta Sinfónica de Caldas a principios de 2020. Desde 2021 es violonchelista supernumerario de la Orquesta Filarmónica de Cali. Durante 2022, se desempeñó como funcionario de la Fundación Nacional Batuta, en el área de Cuerdas Bajas y Coordinación del Centro Musical Sinfónico Maicao, La Guajira. Actualmente es instructor de Violoncello en el Colegio Alemán en Barranquilla.",
    pais: "Colombia",
    instrumento: "Violonchelo",
    edicion: 2023
  },
  {
    id: "9",
    nombre: "Cristian García",
    foto: "/images/festival/2023/cristian-garcia.jpg",
    biografia: "Ha desarrollado una carrera multifacética como artista colaborador, músico de cámara, vocal coach y educador. Ha dado conciertos en diversos escenarios en Colombia, Perú, Ecuador y Estados Unidos. Cristian García ha compartido escenario con cantantes, instrumentistas, coros, ensambles y compañías teatrales y de ópera en Festivales de Música en Barranquilla, Cartagena, Bogotá, Quito, Lima y Spokane. Cristian García es Licenciado en Música de la Universidad Pedagógica Nacional donde estudió piano con Karol Bermúdez y dirección orquestal con Miguel Pinto. Obtuvo su título de Maestría en Música (Piano Performance) bajo la guía de la Dra. Jody Graves y de Kendall Feeney en Eastern Washington University (Cheney, WA, EEUU). Actualmente es profesor del Programa de Música de la Universidad del Norte en Barranquilla.",
    pais: "Colombia",
    instrumento: "Piano",
    edicion: 2023
  },

  // Artistas Nacionales - Otros
  {
    id: "10",
    nombre: "José Manuel Zapata",
    foto: "/images/festival/2023/jose-zapata.jpg",
    biografia: "Ingresó en el 2019 en el programa de extensión de la Universidad de Antioquia, lugar donde comenzó sus estudios de piano funcional a la edad de 12 años. En el año 2017 recibió su título de profesional como maestro en piano en la Universidad de Antioquia bajo la guía de la doctora Ana María Orduz. En el 2018 realizó estudios complementarios de Piano Performance bajo la tutela del Doctor Joel Schoenhals en Eastern Michigan University (EE.UU). Ganador del primer puesto en el festival-concurso pianissimo 2016 y concurso jóvenes solistas de la Universidad de Antioquia 2016. Ha participado en el IX y XII Festival Internacional de Música de Cartagena y en el Piano Festival of the Americas (EE.UU), además de ser invitado para dar conciertos y clases en el I Festival de solistas del Meta. Actualmente se desempeña como profesor de piano y pianista acompañante en la Universidad de Antioquia desarrollando énfasis en la correlación disciplinaria Interpretación-Pedagogía-Investigación.",
    pais: "Colombia",
    instrumento: "Piano",
    edicion: 2023
  },
  {
    id: "11",
    nombre: "Dúo Alexa y Julián",
    foto: "/images/festival/2023/duo-alexa-julian.jpg",
    biografia: "El dúo se conforma en el 2003, con el fin de dar a conocer las nuevas obras de compositores de la música Andina colombiana, dichas canciones poseen una estructura tradicional y han sido influenciadas por lenguajes musicales vanguardistas, destacándose las sonoridades tomadas del Jazz, así como otros lenguajes musicales de vanguardia. Paralelamente desarrollan sus propios proyectos musicales en géneros como World Music y la música académica. Han actuado en ciudades como Medellín, Armenia, Pereira y en España y Bélgica en diversas salas de Barcelona, Girona, Sitges, Polinyà, Huesca, Perpinyà, Figueres, Sabadell, Almuñecar, Granada, entre muchas otras ciudades de Europa.",
    pais: "Colombia",
    instrumento: "Dúo Musical",
    edicion: 2023
  },

  // Agrupaciones Rubato
  {
    id: "12",
    nombre: "Orquesta de Cámara de Barranquilla",
    foto: "/images/festival/2023/orquesta-camara-barranquilla.jpg",
    biografia: "Fundada en agosto de 2021 para unir a músicos profesionales del caribe colombiano y difundir la música clásica y latinoamericana.",
    pais: "Colombia",
    instrumento: "Orquesta de Cámara",
    edicion: 2023
  },
  {
    id: "13",
    nombre: "Orquesta Juvenil del Caribe de Barranquilla",
    foto: "/images/festival/2023/ojcb.jpg",
    biografia: "Orquesta juvenil de la región Caribe dirigida por la Fundación Rubato, enfocada en la formación de jóvenes músicos.",
    pais: "Colombia",
    instrumento: "Orquesta Juvenil",
    edicion: 2023
  }
];

// Patrocinadores 2025
export const patrocinadores2025: Patrocinador[] = [
  {
    id: "1",
    nombre: "Ministerio de Cultura",
    logoUrl: "/images/patrocinadores/mincultura.png",
    sitioWeb: "https://www.mincultura.gov.co",
    edicion: 2025,
    tipo: "principal"
  },
  {
    id: "2",
    nombre: "Universidad del Norte",
    logoUrl: "/images/patrocinadores/uninorte.png",
    sitioWeb: "https://www.uninorte.edu.co",
    edicion: 2025,
    tipo: "principal"
  },
  {
    id: "3",
    nombre: "Alcaldía de Barranquilla",
    logoUrl: "/images/patrocinadores/alcaldia-barranquilla.png",
    sitioWeb: "https://www.barranquilla.gov.co",
    edicion: 2025,
    tipo: "colaborador"
  }
];

// Patrocinadores 2023 - Datos Reales
export const patrocinadores2023: Patrocinador[] = [
  {
    id: "1",
    nombre: "Escuela Superior de Música Reina Sofía",
    logoUrl: "/images/patrocinadores/reina-sofia.png",
    sitioWeb: "https://www.escuelasuperiordemusicareinasofia.es",
    edicion: 2023,
    tipo: "principal"
  },
  {
    id: "2",
    nombre: "Fundación Rubato",
    logoUrl: "/images/patrocinadores/fundacion-rubato.png",
    sitioWeb: "https://www.fundacionrubato.org",
    edicion: 2023,
    tipo: "principal"
  },
  {
    id: "3",
    nombre: "Iber Academy",
    logoUrl: "/images/patrocinadores/iber-academy.png",
    sitioWeb: "https://iberacademy.com",
    edicion: 2023,
    tipo: "principal"
  },
  {
    id: "4",
    nombre: "Filarmónica Joven de Colombia",
    logoUrl: "/images/patrocinadores/filarmonica-joven-colombia.png",
    sitioWeb: "https://www.filarmonicajoven.org",
    edicion: 2023,
    tipo: "colaborador"
  },
  {
    id: "5",
    nombre: "Fundación Bolívar Davivienda",
    logoUrl: "/images/patrocinadores/bolivar-davivienda.png",
    sitioWeb: "https://www.fundacionbolivar.org.co",
    edicion: 2023,
    tipo: "colaborador"
  },
  {
    id: "6",
    nombre: "Universidad del Atlántico",
    logoUrl: "/images/patrocinadores/uniatlantico.png",
    sitioWeb: "https://www.uniatlantico.edu.co",
    edicion: 2023,
    tipo: "colaborador"
  },
  {
    id: "7",
    nombre: "Fundación Colombo Alemana",
    logoUrl: "/images/patrocinadores/fundacion-colombo-alemana.png",
    sitioWeb: "https://www.fundacioncolomboalemana.org",
    edicion: 2023,
    tipo: "apoyo"
  }
];

// Cronograma Festival 2023 - Datos Reales
export const cronograma2023 = [
  {
    fecha: "2023-09-15",
    lugar: "Colegio Alemán",
    agrupacion: "OJCB",
    programa: "Colombia",
    categoria: "concierto"
  },
  {
    fecha: "2023-09-16", 
    lugar: "Casa Pantoja",
    agrupacion: "Jam",
    programa: "Académico - Jazz - Latino",
    categoria: "concierto"
  },
  {
    fecha: "2023-09-18",
    lugar: "Auditorio Aduna",
    agrupacion: "Carmen - Ars Diversa",
    programa: "Solistas",
    categoria: "concierto"
  },
  {
    fecha: "2023-09-19",
    lugar: "Auditorio Confamiliar",
    agrupacion: "Cuarteto FJC - Riomar",
    programa: "Cuarteto",
    categoria: "concierto"
  },
  {
    fecha: "2023-09-20",
    lugar: "Auditorio La Fábrica",
    agrupacion: "Por definir",
    programa: "Ensambles Invitados",
    categoria: "concierto"
  },
  {
    fecha: "2023-09-22",
    lugar: "Auditorio Universidad del Atlántico",
    agrupacion: "Todos",
    programa: "Clausura",
    categoria: "concierto"
  }
];

// Equipo Directivo 2023
export const equipoDirectivo2023 = [
  {
    id: "1",
    nombre: "Andrés Arroyo",
    cargo: "Director Artístico",
    foto: "/images/festival/2023/equipo/andres-arroyo.jpg",
    instrumento: "Violín/Dirección"
  },
  {
    id: "2", 
    nombre: "Natalia Conde",
    cargo: "Directora Componente Social",
    foto: "/images/festival/2023/equipo/natalia-conde.jpg",
    instrumento: "Contrabajo"
  },
  {
    id: "3",
    nombre: "Juan Echeverry", 
    cargo: "Asistente de Dirección Artística",
    foto: "/images/festival/2023/equipo/juan-echeverry.jpg",
    instrumento: "Violonchelo"
  },
  {
    id: "4",
    nombre: "Steffin Hernández",
    cargo: "Directora Académica", 
    foto: "/images/festival/2023/equipo/steffin-hernandez.jpg",
    instrumento: "Dirección Académica"
  }
];

// Líderes Festival 2023
export const lideres2023: LiderFestival[] = [
  {
    id: "1",
    nombre: "Alfredo Reyes",
    cargo: "Presidente",
    foto: "/images/festival/2023/lideres/alfredo-reyes.jpg",
    biografia: "Nacido en la ciudad de Bogotá, inició sus estudios musicales a la edad de 8 años en el proceso de la Sinfónica Juvenil de Colombia. Recibió clases magistrales de violín con el maestro Dmitri Petoukhov, Alejandro Encinas, y clases magistrales de dirección de orquesta con el maestro Matthew Hazelwood. A la edad de 19 años ocupó el cargo de concertino de la Filarmónica del Caribe. Desde 2006 fue profesor y director de orquestas de la Fundación Nacional Batuta hasta el 2020. Hace parte de los fundadores de la Fundación Rubato y Actualmente es el director académico del Conservatorio Rubato, director de la Orquesta de Cámara de Barranquilla, director de la Filarmónica juvenil de Barranquilla y director de la Orquesta Sinfónica del Colegio Alemán de Barranquilla.",
    categoria: "presidente"
  },
  {
    id: "2",
    nombre: "Andrés Arroyo",
    cargo: "Director Artístico",
    foto: "/images/festival/2023/lideres/andres-arroyo.jpg",
    biografia: "Nació en Medellín (Colombia) en 1995. A los 15 años inició sus estudios de contrabajo. En 2012 estudia en la Universidad de Antioquia con el profesor Ilko Semov Rusev. Asimismo, ha recibido clases magistrales de los profesores Jeff Bradetich, Edicson Ruiz, Ander Perrino y Robin Kesselman. En el año 2018 inicio sus estudios en la Escuela Superior de Música Reina Sofía en la Cátedra de Contrabajo de Unidad Editorial con el profesor Duncan McTier. Disfrutó beca de matrícula co-financiada entre la Fundación Santo Domingo y la Fundación Albéniz y beca de residencia Fundación Santo Domingo y posteriormente finalizó sus estudios en el año 2022.",
    categoria: "director"
  },
  {
    id: "3",
    nombre: "Natalia Conde",
    cargo: "Directora Componente Social",
    foto: "/images/festival/2023/lideres/natalia-conde.jpg",
    biografia: "",
    categoria: "equipo"
  },
  {
    id: "4",
    nombre: "Juan Echeverry",
    cargo: "Asistente de Dirección Artística",
    foto: "/images/festival/2023/lideres/juan-echeverry.jpg",
    biografia: "",
    categoria: "equipo"
  },
  {
    id: "5",
    nombre: "Steffin Hernández",
    cargo: "Directora Académica",
    foto: "/images/festival/2023/lideres/steffin-hernandez.jpg",
    biografia: "",
    categoria: "equipo"
  },
  {
    id: "6",
    nombre: "Stefanny Carrillo",
    cargo: "Asistente de Dirección Académica",
    foto: "/images/festival/2023/lideres/stefanny-carrillo.jpg",
    biografia: "",
    categoria: "equipo"
  }
];

// Contenido global del festival
export const festivalGlobal = {
  mision: {
    imagen: "/images/festival/mision.jpg",
    texto: "Crear un espacio de formación académica y proyección artística que conjugue procesos musicales a nivel nacional e internacional, con el propósito de que niños, niñas y adolescentes de la región desarrollen sus talentos, a través de prácticas musicales de excelente calidad. El resultado de esta iniciativa contribuirá al ecosistema cultural y a la transformación social de la ciudad."
  },
  vision: {
    imagen: "/images/festival/vision.jpg", 
    texto: "El Festival Internacional de Música Rubato pretende ser, en un lapso de 10 años, una celebración regular y consolidada en el ámbito regional como un referente en la agenda cultural de calidad, legitimado por la población local como un evento de ciudad y reconocido desde lo formativo como un modelo de transformación social a partir del uso de la música como herramienta para el desarrollo de la sensibilidad y el crecimiento intelectual."
  },
  historia: {
    texto: "La primera edición del Festival Internacional de Música Rubato nace gracias a la suma de varios esfuerzos e ideales, y se concreta gracias a un acuerdo común: el uso de la música como medio para la sensibilización de la sociedad y como puente para la formación de niños y niñas de todos los estratos sociales. Entendemos la apuesta por la cultura, desde lo local, como una necesidad cada vez más contemporánea. Víctima de los estragos de la pandemia del Covid19 y sus efectos, el arte se enfrenta a retos importantes, y uno de ellos es el de acercarse a las poblaciones más vulnerables con contenido de calidad y de fácil acceso."
  },
  valores: [
    {
      titulo: "Fortalecimiento profesional",
      descripcion: "El fortalecimiento de la profesión del músico en la ciudad, potenciando el surgimiento de nuevas agrupaciones permanentes y remuneradas."
    },
    {
      titulo: "Músicas tradicionales",
      descripcion: "La firme apuesta por impulsar el debate, el estudio y la interpretación de las músicas tradicionales y/o académicas del país."
    },
    {
      titulo: "Formación juvenil", 
      descripcion: "Impulsar los espacios de formación para los niños, niñas y jóvenes de la ciudad, acercándolos a los espacios artísticos para que aprendan desde el escenario y desde el aula el arte del quehacer musical."
    }
  ]
};

// Función para obtener datos por año
export const getFestivalData = (ano: number) => {
  const edicion = festivalEdiciones.find(e => e.ano === ano);
  const artistas = ano === 2025 ? artistas2025 : ano === 2023 ? artistas2023 : [];
  const patrocinadores = ano === 2025 ? patrocinadores2025 : ano === 2023 ? patrocinadores2023 : [];
  const cronograma = ano === 2023 ? cronograma2023 : [];
  const equipoDirectivo = ano === 2023 ? equipoDirectivo2023 : [];
  const lideres = ano === 2023 ? lideres2023 : [];
  
  return {
    edicion,
    artistas,
    patrocinadores,
    cronograma,
    equipoDirectivo,
    lideres
  };
};

export const getEdicionesArchivo = () => {
  return festivalEdiciones.filter(e => e.estado === 'pasada');
};

export const getEdicionActual = () => {
  return festivalEdiciones.find(e => e.esActiva && e.estado === 'actual');
};
