// Adaptadores para convertir datos existentes al formato CMS
// Estos adaptadores permiten usar los datos actuales mientras se migra al CMS

import {
  CMSEvent,
  CMSNews,
  CMSArtist,
  CMSSponsor,
  CMSEnsemble,
  CMSImage
} from '../types/cms';

// Importar datos existentes
import { Evento } from '../data/eventos';
import { Noticia } from '../data/noticias';
import { ArtistaInvitado, Patrocinador } from '../data/festival';

// Función helper para crear objetos CMSImage
function createCMSImage(url: string, alt: string): CMSImage {
  return {
    id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    url,
    alt,
    width: undefined,
    height: undefined
  };
}

// Adaptador para eventos
export function adaptEventoToCMSEvent(evento: Evento): CMSEvent {
  return {
    id: evento.id,
    slug: evento.slug,
    status: 'published',
    createdAt: evento.publicadoEn,
    updatedAt: evento.publicadoEn,
    publishedAt: evento.publicadoEn,
    title: evento.titulo,
    shortDescription: evento.descripcionCorta,
    content: evento.contenido,
    startDate: evento.fechaInicio,
    endDate: evento.fechaFin,
    location: evento.ubicacion,
    isFeatured: evento.esDestacado,
    category: mapEventCategory(evento.categoria),
    isPaid: evento.esPago,
    price: evento.precio,
    eventStatus: mapEventStatus(evento.estado),
    coordinates: evento.coordenadasMapa,
    artists: evento.artistas,
    images: [createCMSImage(evento.imagenPrincipal, evento.titulo)],
    festivalEdition: evento.festivalEdicion,
    metadata: {
      metaTitle: evento.titulo,
      metaDescription: evento.descripcionCorta
    }
  };
}

// Adaptador para noticias
export function adaptNoticiaToCMSNews(noticia: Noticia): CMSNews {
  const galleryImages = noticia.imagenesGaleria?.map((url, index) => 
    createCMSImage(url, `${noticia.titulo} - Imagen ${index + 1}`)
  );

  return {
    id: noticia.id,
    slug: noticia.slug,
    status: noticia.estaActiva ? 'published' : 'archived',
    createdAt: noticia.fechaPublicacion,
    updatedAt: noticia.fechaPublicacion,
    publishedAt: noticia.fechaPublicacion,
    title: noticia.titulo,
    shortDescription: noticia.descripcionCorta,
    content: noticia.contenido,
    author: noticia.autor,
    category: mapNewsCategory(noticia.categoria),
    isFeatured: noticia.esDestacada,
    tags: noticia.tags,
    featuredImage: createCMSImage(noticia.imagenPrincipal, noticia.titulo),
    galleryImages,
    externalUrl: noticia.urlExterna,
    metadata: noticia.metadatos ? {
      metaTitle: noticia.metadatos.metaTitle,
      metaDescription: noticia.metadatos.metaDescription,
      keywords: noticia.metadatos.keywords
    } : undefined
  };
}

// Adaptador para artistas del festival
export function adaptArtistaToCMSArtist(artista: ArtistaInvitado): CMSArtist {
  return {
    id: artista.id,
    slug: `artista-${artista.id}`,
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    name: artista.nombre,
    bio: artista.biografia || '',
    country: artista.pais,
    instrument: artista.instrumento,
    festivalEdition: artista.edicion,
    profileImage: createCMSImage(artista.foto, artista.nombre),
    metadata: {
      metaTitle: `${artista.nombre} - Artista Invitado`,
      metaDescription: `Conoce a ${artista.nombre}, artista invitado del Festival Rubato ${artista.edicion}`
    }
  };
}

// Adaptador para patrocinadores
export function adaptPatrocinadorToCMSSponsor(patrocinador: Patrocinador): CMSSponsor {
  return {
    id: patrocinador.id,
    slug: `patrocinador-${patrocinador.id}`,
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    name: patrocinador.nombre,
    logo: createCMSImage(patrocinador.logoUrl, patrocinador.nombre),
    website: patrocinador.sitioWeb,
    festivalEdition: patrocinador.edicion,
    type: mapSponsorType(patrocinador.tipo),
    order: 0
  };
}

// Adaptador inverso: de CMSSponsor a Patrocinador
export function adaptCMSSponsorToPatrocinador(cmsSponsor: CMSSponsor): Patrocinador {
  return {
    id: cmsSponsor.id,
    nombre: cmsSponsor.name,
    logoUrl: cmsSponsor.logo.url,
    sitioWeb: cmsSponsor.website,
    edicion: cmsSponsor.festivalEdition || 2025,
    tipo: reverseSponsorType(cmsSponsor.type)
  };
}

// Funciones helper para mapear categorías y estados
function mapEventCategory(categoria: string): 'concert' | 'masterclass' | 'conference' | 'workshop' | 'festival' {
  const categoryMap: Record<string, 'concert' | 'masterclass' | 'conference' | 'workshop' | 'festival'> = {
    'concierto': 'concert',
    'masterclass': 'masterclass',
    'conferencia': 'conference',
    'taller': 'workshop',
    'festival': 'festival'
  };
  return categoryMap[categoria] || 'concert';
}

function mapEventStatus(estado: string): 'upcoming' | 'ongoing' | 'completed' | 'cancelled' {
  const statusMap: Record<string, 'upcoming' | 'ongoing' | 'completed' | 'cancelled'> = {
    'proximo': 'upcoming',
    'en_curso': 'ongoing',
    'finalizado': 'completed'
  };
  return statusMap[estado] || 'upcoming';
}

function mapNewsCategory(categoria: string): 'achievement' | 'announcement' | 'recognition' | 'activity' | 'collaboration' | 'general' {
  const categoryMap: Record<string, 'achievement' | 'announcement' | 'recognition' | 'activity' | 'collaboration' | 'general'> = {
    'logro': 'achievement',
    'anuncio': 'announcement',
    'reconocimiento': 'recognition',
    'actividad': 'activity',
    'colaboracion': 'collaboration',
    'general': 'general'
  };
  return categoryMap[categoria] || 'general';
}

function mapSponsorType(tipo: string): 'main' | 'collaborator' | 'support' {
  const typeMap: Record<string, 'main' | 'collaborator' | 'support'> = {
    'principal': 'main',
    'colaborador': 'collaborator',
    'apoyo': 'support'
  };
  return typeMap[tipo] || 'support';
}

function reverseSponsorType(type: 'main' | 'collaborator' | 'support'): 'principal' | 'colaborador' | 'apoyo' {
  const reverseTypeMap: Record<'main' | 'collaborator' | 'support', 'principal' | 'colaborador' | 'apoyo'> = {
    'main': 'principal',
    'collaborator': 'colaborador',
    'support': 'apoyo'
  };
  return reverseTypeMap[type];
}

// Función para crear agrupaciones desde datos estáticos
export function createCMSEnsemble(
  id: string,
  name: string,
  description: string,
  shortDescription: string,
  type: 'orchestra' | 'chamber' | 'choir' | 'band' | 'quartet',
  featuredImageUrl: string,
  director?: string,
  isActive: boolean = true
): CMSEnsemble {
  return {
    id,
    slug: name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    name,
    description,
    shortDescription,
    type,
    isActive,
    director,
    featuredImage: createCMSImage(featuredImageUrl, name),
    metadata: {
      metaTitle: `${name} - Fundación Rubato`,
      metaDescription: shortDescription
    }
  };
}

// Datos de agrupaciones adaptados
export const cmsEnsembles: CMSEnsemble[] = [
  createCMSEnsemble(
    '1',
    'Filarmónica Juvenil de Barranquilla',
    'La Filarmónica Juvenil de Barranquilla es una orquesta sinfónica conformada por jóvenes talentosos de la región Caribe. Fundada en 2018, se ha convertido en un referente de excelencia musical y formación integral para la juventud barranquillera.',
    'Orquesta sinfónica juvenil de excelencia musical en la región Caribe',
    'orchestra',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    'Maestro Carlos Vives Jr.',
    true
  ),
  createCMSEnsemble(
    '2',
    'Orquesta de Cámara Rubato',
    'La Orquesta de Cámara Rubato es un conjunto musical de formato reducido que se especializa en repertorio clásico y contemporáneo. Está conformada por músicos profesionales y estudiantes avanzados que buscan la excelencia en la música de cámara.',
    'Conjunto de cámara especializado en repertorio clásico y contemporáneo',
    'chamber',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    'Maestra Ana Sofía Vargas',
    true
  ),
  createCMSEnsemble(
    '3',
    'Riomar Quartet',
    'El Riomar Quartet es un cuarteto de cuerdas formado por músicos profesionales con amplia experiencia en música de cámara. Su repertorio abarca desde el período clásico hasta composiciones contemporáneas de compositores colombianos.',
    'Cuarteto de cuerdas de música clásica y contemporánea colombiana',
    'quartet',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    undefined,
    true
  )
];

// Funciones de utilidad para obtener datos adaptados
export async function getAdaptedEvents(): Promise<CMSEvent[]> {
  try {
    const { eventos } = await import('../data/eventos');
    return eventos.map(adaptEventoToCMSEvent);
  } catch (error) {
    console.error('Error loading adapted events:', error);
    return [];
  }
}

export async function getAdaptedNews(): Promise<CMSNews[]> {
  try {
    const { noticias } = await import('../data/noticias');
    return noticias.filter(n => n.estaActiva).map(adaptNoticiaToCMSNews);
  } catch (error) {
    console.error('Error loading adapted news:', error);
    return [];
  }
}

export async function getAdaptedArtists(festivalEdition?: number): Promise<CMSArtist[]> {
  try {
    const { artistas2025, artistas2023 } = await import('../data/festival');
    
    let artists: ArtistaInvitado[] = [];
    if (!festivalEdition) {
      artists = [...artistas2025, ...artistas2023];
    } else if (festivalEdition === 2025) {
      artists = artistas2025;
    } else if (festivalEdition === 2023) {
      artists = artistas2023;
    }
    
    return artists.map(adaptArtistaToCMSArtist);
  } catch (error) {
    console.error('Error loading adapted artists:', error);
    return [];
  }
}

export async function getAdaptedSponsors(festivalEdition?: number): Promise<CMSSponsor[]> {
  try {
    const { patrocinadores2025, patrocinadores2023 } = await import('../data/festival');
    
    let sponsors: Patrocinador[] = [];
    if (!festivalEdition) {
      sponsors = [...patrocinadores2025, ...patrocinadores2023];
    } else if (festivalEdition === 2025) {
      sponsors = patrocinadores2025;
    } else if (festivalEdition === 2023) {
      sponsors = patrocinadores2023;
    }
    
    return sponsors.map(adaptPatrocinadorToCMSSponsor);
  } catch (error) {
    console.error('Error loading adapted sponsors:', error);
    return [];
  }
}
