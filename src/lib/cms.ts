// Servicio de API para el CMS
// Esta clase simula las llamadas que se harían a un CMS real como Strapi, Contentful, etc.

import {
  CMSApiResponse,
  CMSQueryParams,
  CMSPage,
  CMSEvent,
  CMSNews,
  CMSArtist,
  CMSSponsor,
  CMSEnsemble,
  CMSCourse,
  CMSStudent,
  CMSSiteConfig
} from '../types/cms';

// Configuración del CMS
const CMS_CONFIG = {
  // En producción, esto vendría de variables de entorno
  API_URL: process.env.NEXT_PUBLIC_CMS_API_URL && process.env.NEXT_PUBLIC_CMS_API_URL !== '' 
    ? process.env.NEXT_PUBLIC_CMS_API_URL 
    : null,
  API_TOKEN: process.env.CMS_API_TOKEN,
  // Configuración de cache
  CACHE_TTL: 300, // 5 minutos
  // Configuración de fallbacks
  USE_FALLBACK_DATA: process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_CMS_API_URL,
};

class CMSService {
  private cache = new Map<string, { data: any; timestamp: number }>();

  // Método genérico para hacer peticiones al CMS
  private async fetchFromCMS<T>(
    endpoint: string,
    params?: CMSQueryParams
  ): Promise<CMSApiResponse<T>> {
    const cacheKey = `${endpoint}${JSON.stringify(params || {})}`;
    
    // Verificar cache
    const cachedData = this.cache.get(cacheKey);
    if (cachedData && Date.now() - cachedData.timestamp < CMS_CONFIG.CACHE_TTL * 1000) {
      return cachedData.data;
    }

    // Si no hay API URL configurada o estamos en desarrollo, usar datos de fallback
    if (!CMS_CONFIG.API_URL || CMS_CONFIG.API_URL === '' || CMS_CONFIG.USE_FALLBACK_DATA) {
      console.log(`Using fallback data for ${endpoint}`);
      return this.getFallbackData<T>(endpoint, params);
    }

    try {
      const url = new URL(`${CMS_CONFIG.API_URL}${endpoint}`);
      
      // Agregar parámetros de query
      if (params?.populate) {
        url.searchParams.append('populate', params.populate.join(','));
      }
      if (params?.filters) {
        Object.entries(params.filters).forEach(([key, value]) => {
          url.searchParams.append(`filters[${key}]`, value);
        });
      }
      if (params?.sort) {
        url.searchParams.append('sort', params.sort.join(','));
      }
      if (params?.pagination) {
        if (params.pagination.page) {
          url.searchParams.append('pagination[page]', params.pagination.page.toString());
        }
        if (params.pagination.pageSize) {
          url.searchParams.append('pagination[pageSize]', params.pagination.pageSize.toString());
        }
      }

      const response = await fetch(url.toString(), {
        headers: {
          'Content-Type': 'application/json',
          ...(CMS_CONFIG.API_TOKEN && { 'Authorization': `Bearer ${CMS_CONFIG.API_TOKEN}` }),
        },
      });

      if (!response.ok) {
        throw new Error(`CMS API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      // Guardar en cache
      this.cache.set(cacheKey, { data, timestamp: Date.now() });
      
      return data;
    } catch (error) {
      console.error('Error fetching from CMS:', error);
      
      // Si está habilitado, usar datos de fallback
      if (CMS_CONFIG.USE_FALLBACK_DATA) {
        return this.getFallbackData<T>(endpoint, params);
      }
      
      throw error;
    }
  }

  // Método para obtener datos de fallback durante el desarrollo
  private async getFallbackData<T>(endpoint: string, params?: CMSQueryParams): Promise<CMSApiResponse<T>> {
    // Importar adaptadores y datos locales como fallback
    try {
      switch (endpoint) {
        case '/events':
          const { getAdaptedEvents } = await import('./adapters');
          const adaptedEvents = await getAdaptedEvents();
          return { data: adaptedEvents as T };
        case '/news':
          const { getAdaptedNews } = await import('./adapters');
          const adaptedNews = await getAdaptedNews();
          return { data: adaptedNews as T };
        case '/festival-artists':
          const { getAdaptedArtists } = await import('./adapters');
          const festivalEdition = params?.filters?.festivalEdition;
          const adaptedArtists = await getAdaptedArtists(festivalEdition);
          return { data: adaptedArtists as T };
        case '/sponsors':
          const { getAdaptedSponsors } = await import('./adapters');
          const sponsorEdition = params?.filters?.festivalEdition;
          const adaptedSponsors = await getAdaptedSponsors(sponsorEdition);
          return { data: adaptedSponsors as T };
        case '/ensembles':
          const { cmsEnsembles } = await import('./adapters');
          return { data: cmsEnsembles as T };
        default:
          return { 
            data: [] as T,
            error: {
              status: 404,
              name: 'NotFound',
              message: `Fallback data not available for ${endpoint}`
            }
          };
      }
    } catch (error) {
      console.error(`Error loading fallback data for ${endpoint}:`, error);
      return { 
        data: [] as T,
        error: {
          status: 500,
          name: 'FallbackError',
          message: `Failed to load fallback data for ${endpoint}: ${error instanceof Error ? error.message : 'Unknown error'}`
        }
      };
    }
  }

  // === MÉTODOS PARA PÁGINAS ===

  async getPage(slug: string): Promise<CMSPage | null> {
    try {
      const response = await this.fetchFromCMS<CMSPage[]>('/pages', {
        filters: { slug },
        populate: ['heroImage', 'featuredImages', 'metadata.ogImage']
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching page:', error);
      return null;
    }
  }

  async getPages(): Promise<CMSPage[]> {
    try {
      const response = await this.fetchFromCMS<CMSPage[]>('/pages', {
        filters: { status: 'published' },
        populate: ['heroImage']
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching pages:', error);
      return [];
    }
  }

  // === MÉTODOS PARA EVENTOS ===

  async getEvents(params?: {
    category?: string;
    isFeatured?: boolean;
    eventStatus?: string;
    limit?: number;
  }): Promise<CMSEvent[]> {
    try {
      const filters: Record<string, any> = { status: 'published' };
      
      if (params?.category && params.category !== 'all') {
        filters.category = params.category;
      }
      if (params?.isFeatured !== undefined) {
        filters.isFeatured = params.isFeatured;
      }
      if (params?.eventStatus && params.eventStatus !== 'all') {
        filters.eventStatus = params.eventStatus;
      }

      const response = await this.fetchFromCMS<CMSEvent[]>('/events', {
        filters,
        populate: ['images'],
        sort: ['startDate:desc'],
        ...(params?.limit && { pagination: { pageSize: params.limit } })
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  }

  async getEvent(slug: string): Promise<CMSEvent | null> {
    try {
      const response = await this.fetchFromCMS<CMSEvent[]>('/events', {
        filters: { slug },
        populate: ['images', 'metadata.ogImage']
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching event:', error);
      return null;
    }
  }

  // === MÉTODOS PARA NOTICIAS ===

  async getNews(params?: {
    category?: string;
    isFeatured?: boolean;
    limit?: number;
  }): Promise<CMSNews[]> {
    try {
      const filters: Record<string, any> = { status: 'published' };
      
      if (params?.category && params.category !== 'all') {
        filters.category = params.category;
      }
      if (params?.isFeatured !== undefined) {
        filters.isFeatured = params.isFeatured;
      }

      const response = await this.fetchFromCMS<CMSNews[]>('/news', {
        filters,
        populate: ['featuredImage', 'galleryImages'],
        sort: ['publishedAt:desc'],
        ...(params?.limit && { pagination: { pageSize: params.limit } })
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }

  async getNewsArticle(slug: string): Promise<CMSNews | null> {
    try {
      const response = await this.fetchFromCMS<CMSNews[]>('/news', {
        filters: { slug },
        populate: ['featuredImage', 'galleryImages', 'metadata.ogImage']
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching news article:', error);
      return null;
    }
  }

  // === MÉTODOS PARA ARTISTAS DEL FESTIVAL ===

  async getFestivalArtists(festivalEdition?: number): Promise<CMSArtist[]> {
    try {
      console.log(`Fetching festival artists for edition: ${festivalEdition}`);
      const filters: Record<string, any> = { status: 'published' };
      
      if (festivalEdition) {
        filters.festivalEdition = festivalEdition;
      }

      const response = await this.fetchFromCMS<CMSArtist[]>('/festival-artists', {
        filters,
        populate: ['profileImage', 'galleryImages'],
        sort: ['name:asc']
      });
      
      console.log(`Successfully fetched ${response.data?.length || 0} festival artists`);
      return response.data || [];
    } catch (error) {
      console.error('Error fetching festival artists:', error);
      return [];
    }
  }

  // === MÉTODOS PARA PATROCINADORES ===

  async getSponsors(festivalEdition?: number): Promise<CMSSponsor[]> {
    try {
      const filters: Record<string, any> = { status: 'published' };
      
      if (festivalEdition) {
        filters.festivalEdition = festivalEdition;
      }

      const response = await this.fetchFromCMS<CMSSponsor[]>('/sponsors', {
        filters,
        populate: ['logo'],
        sort: ['order:asc', 'name:asc']
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching sponsors:', error);
      return [];
    }
  }

  // === MÉTODOS PARA AGRUPACIONES ===

  async getEnsembles(): Promise<CMSEnsemble[]> {
    try {
      const response = await this.fetchFromCMS<CMSEnsemble[]>('/ensembles', {
        filters: { status: 'published', isActive: true },
        populate: ['featuredImage', 'galleryImages']
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching ensembles:', error);
      return [];
    }
  }

  async getEnsemble(slug: string): Promise<CMSEnsemble | null> {
    try {
      const response = await this.fetchFromCMS<CMSEnsemble[]>('/ensembles', {
        filters: { slug },
        populate: ['featuredImage', 'galleryImages', 'upcomingEvents']
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching ensemble:', error);
      return null;
    }
  }

  // === MÉTODOS PARA CURSOS ===

  async getCourses(): Promise<CMSCourse[]> {
    try {
      const response = await this.fetchFromCMS<CMSCourse[]>('/courses', {
        filters: { status: 'published', isActive: true },
        populate: ['featuredImage']
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  }

  // === MÉTODOS PARA CONFIGURACIÓN DEL SITIO ===

  async getSiteConfig(): Promise<CMSSiteConfig | null> {
    try {
      const response = await this.fetchFromCMS<CMSSiteConfig>('/site-config', {
        populate: ['contactInfo', 'navigation', 'globalSettings']
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching site config:', error);
      return null;
    }
  }

  // === MÉTODOS PARA EL PORTAL DE ESTUDIANTES ===

  async getStudent(id: string): Promise<CMSStudent | null> {
    try {
      const response = await this.fetchFromCMS<CMSStudent[]>('/students', {
        filters: { id },
        populate: ['courses']
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching student:', error);
      return null;
    }
  }

  // === MÉTODOS DE UTILIDAD ===

  // Limpiar cache manualmente
  clearCache(): void {
    this.cache.clear();
  }

  // Revalidar cache para un endpoint específico
  async revalidate(endpoint: string, params?: CMSQueryParams): Promise<void> {
    const cacheKey = `${endpoint}${JSON.stringify(params || {})}`;
    this.cache.delete(cacheKey);
    // Hacer una nueva petición para actualizar el cache
    await this.fetchFromCMS(endpoint, params);
  }
}

// Exportar una instancia singleton del servicio
export const cmsService = new CMSService();

// Exportar también la clase para casos específicos
export default CMSService;
