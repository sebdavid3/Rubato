// Tipos globales para la integración con CMS
// Estos tipos definen la estructura de contenido que vendrá del CMS

export interface CMSImage {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface CMSMetadata {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: CMSImage;
  canonicalUrl?: string;
}

export interface CMSContent {
  id: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  metadata?: CMSMetadata;
}

// Estructura base para páginas estáticas administrables por CMS
export interface CMSPage extends CMSContent {
  title: string;
  content: string; // HTML/Markdown content
  heroImage?: CMSImage;
  heroVideo?: string;
  featuredImages?: CMSImage[];
  customFields?: Record<string, any>;
}

// Estructura para configuración global del sitio
export interface CMSSiteConfig {
  siteName: string;
  siteDescription: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    socialMedia: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      youtube?: string;
      linkedin?: string;
    };
  };
  navigation: {
    main: NavItem[];
    footer: NavItem[];
  };
  globalSettings: {
    enableDonations: boolean;
    enableEventRegistration: boolean;
    enableNewsletterSignup: boolean;
    maintenanceMode: boolean;
  };
}

export interface NavItem {
  id: string;
  label: string;
  url: string;
  isExternal?: boolean;
  children?: NavItem[];
  order: number;
}

// Estructura para eventos administrables por CMS
export interface CMSEvent extends CMSContent {
  title: string;
  shortDescription: string;
  content: string;
  startDate: string;
  endDate?: string;
  location: string;
  isFeatured: boolean;
  category: 'concert' | 'masterclass' | 'conference' | 'workshop' | 'festival';
  isPaid: boolean;
  price?: number;
  maxAttendees?: number;
  currentAttendees?: number;
  registrationUrl?: string;
  festivalEdition?: number;
  eventStatus: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  coordinates?: {
    lat: number;
    lng: number;
  };
  artists?: string[];
  images: CMSImage[];
  customFields?: {
    requirements?: string;
    includes?: string[];
    schedule?: Array<{
      time: string;
      activity: string;
    }>;
  };
}

// Estructura para noticias administrables por CMS
export interface CMSNews extends CMSContent {
  title: string;
  shortDescription: string;
  content: string;
  author: string;
  category: 'achievement' | 'announcement' | 'recognition' | 'activity' | 'collaboration' | 'general';
  isFeatured: boolean;
  tags: string[];
  featuredImage: CMSImage;
  galleryImages?: CMSImage[];
  externalUrl?: string;
}

// Estructura para artistas del festival
export interface CMSArtist extends CMSContent {
  name: string;
  bio: string;
  country: string;
  instrument?: string;
  festivalEdition: number;
  profileImage: CMSImage;
  galleryImages?: CMSImage[];
  socialMedia?: {
    website?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

// Estructura para patrocinadores
export interface CMSSponsor extends CMSContent {
  name: string;
  description?: string;
  logo: CMSImage;
  website?: string;
  festivalEdition?: number;
  type: 'main' | 'collaborator' | 'support';
  order: number;
}

// Estructura para agrupaciones musicales
export interface CMSEnsemble extends CMSContent {
  name: string;
  description: string;
  shortDescription: string;
  type: 'orchestra' | 'chamber' | 'choir' | 'band' | 'quartet';
  isActive: boolean;
  director?: string;
  members?: Array<{
    name: string;
    instrument: string;
    role?: string;
  }>;
  featuredImage: CMSImage;
  galleryImages?: CMSImage[];
  repertoire?: string[];
  achievements?: string[];
  upcomingEvents?: string[]; // Event IDs
}

// Estructura para cursos
export interface CMSCourse extends CMSContent {
  name: string;
  description: string;
  shortDescription: string;
  category: 'individual' | 'group' | 'masterclass' | 'workshop';
  level: 'beginner' | 'intermediate' | 'advanced' | 'all';
  duration: string;
  price?: number;
  isActive: boolean;
  instructor?: string;
  maxStudents?: number;
  currentStudents?: number;
  schedule?: Array<{
    day: string;
    time: string;
  }>;
  requirements?: string[];
  includes?: string[];
  featuredImage: CMSImage;
  galleryImages?: CMSImage[];
}

// Estructura para el portal de estudiantes
export interface CMSStudent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth: string;
  enrollmentDate: string;
  isActive: boolean;
  courses: Array<{
    courseId: string;
    enrollmentDate: string;
    status: 'active' | 'completed' | 'dropped';
    grades?: Array<{
      assignment: string;
      grade: number;
      date: string;
      feedback?: string;
    }>;
  }>;
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
  };
}

// Respuesta estándar de la API del CMS
export interface CMSApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  error?: {
    status: number;
    name: string;
    message: string;
  };
}

// Parámetros para consultas al CMS
export interface CMSQueryParams {
  populate?: string[];
  filters?: Record<string, any>;
  sort?: string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  locale?: string;
}
