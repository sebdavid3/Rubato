// Servicio de API para el CMS
// Esta clase integra específicamente con Strapi CMS

import { CMSApiResponse, CMSEvent, CMSNews, CMSArtist, CMSSponsor, CMSEnsemble, CMSCourse, CMSPage, CMSSiteConfig, CMSStudent, CMSQueryParams } from '@/types/cms';

// Configuración del CMS - Strapi específico
const CMS_CONFIG = {
  // En producción, esto vendría de variables de entorno
  API_URL: process.env.NEXT_PUBLIC_CMS_API_URL && process.env.NEXT_PUBLIC_CMS_API_URL !== '' 
    ? process.env.NEXT_PUBLIC_CMS_API_URL 
    : null,
  API_TOKEN: process.env.CMS_API_TOKEN,
  CMS_TYPE: process.env.NEXT_PUBLIC_CMS_TYPE || 'strapi',
  // Configuración de cache
  CACHE_TTL: parseInt(process.env.NEXT_PUBLIC_CMS_CACHE_TTL || '300'), // 5 minutos
  // Configuración de fallbacks
  USE_FALLBACK_DATA: process.env.NODE_ENV === 'development' || 
                     process.env.NEXT_PUBLIC_USE_FALLBACK_DATA === 'true' ||
                     !process.env.NEXT_PUBLIC_CMS_API_URL,
  // Debug mode
  DEBUG_MODE: process.env.NEXT_PUBLIC_CMS_DEBUG === 'true',
};

class CMSService {
  private cache = new Map<string, { data: any; timestamp: number }>();

  // Método auxiliar para formatear una imagen individual de Strapi
  private formatStrapiImage(imageData: any): any {
    const img = imageData.attributes || imageData;
    return {
      id: imageData.id,
      url: `${CMS_CONFIG.API_URL?.replace('/api', '')}${img.url}`,
      alt: img.alternativeText || '',
      width: img.width,
      height: img.height,
      caption: img.caption
    };
  }

  // Método auxiliar para formatear múltiples imágenes de Strapi
  private formatStrapiImageArray(imagesData: any[]): any[] {
    return imagesData.map(img => this.formatStrapiImage(img));
  }

  // Método específico para formatear respuestas de Strapi
  private formatStrapiResponse<T>(strapiData: any): T[] | T {
    if (Array.isArray(strapiData.data)) {
      return strapiData.data.map((item: any) => this.formatStrapiItem(item));
    } else if (strapiData.data) {
      return this.formatStrapiItem(strapiData.data);
    }
    return strapiData;
  }

  // Formatear un item individual de Strapi
  private formatStrapiItem(item: any): any {
    const formatted = {
      id: item.id,
      slug: item.attributes.slug,
      status: item.attributes.publishedAt ? 'published' : 'draft',
      createdAt: item.attributes.createdAt,
      updatedAt: item.attributes.updatedAt,
      publishedAt: item.attributes.publishedAt,
      ...item.attributes
    };

    // Procesar imágenes usando método auxiliar
    if (item.attributes.images?.data) {
      formatted.images = this.formatStrapiImageArray(item.attributes.images.data);
    }

    // Procesar imagen destacada usando método auxiliar
    if (item.attributes.featuredImage?.data) {
      formatted.featuredImage = this.formatStrapiImage(item.attributes.featuredImage.data);
    }

    // Procesar galería de imágenes usando método auxiliar
    if (item.attributes.galleryImages?.data) {
      formatted.galleryImages = this.formatStrapiImageArray(item.attributes.galleryImages.data);
    }

    return formatted;
  }

  // Método genérico para hacer peticiones al CMS con soporte específico para Strapi
  private async fetchFromCMS<T>(
    endpoint: string,
    params?: CMSQueryParams
  ): Promise<CMSApiResponse<T>> {
    const cacheKey = `${endpoint}${JSON.stringify(params || {})}`;
    
    if (CMS_CONFIG.DEBUG_MODE) {
      console.log(`🔍 CMS Request: ${endpoint}`, params);
    }
    
    // Verificar cache
    const cachedData = this.cache.get(cacheKey);
    if (cachedData && Date.now() - cachedData.timestamp < CMS_CONFIG.CACHE_TTL * 1000) {
      if (CMS_CONFIG.DEBUG_MODE) {
        console.log(`📦 Cache hit for ${endpoint}`);
      }
      return cachedData.data;
    }

    // Si no hay API URL configurada o estamos en desarrollo, usar datos de fallback
    if (!CMS_CONFIG.API_URL || CMS_CONFIG.API_URL === '' || CMS_CONFIG.USE_FALLBACK_DATA) {
      if (CMS_CONFIG.DEBUG_MODE) {
        console.log(`🔄 Using fallback data for ${endpoint}`);
      }
      return this.getFallbackData<T>(endpoint, params);
    }

    try {
      const url = new URL(`${CMS_CONFIG.API_URL}${endpoint}`);
      
      // Configurar parámetros específicos de Strapi
      if (params?.populate) {
        url.searchParams.append('populate', params.populate.join(','));
      } else {
        // Poblar campos por defecto para cada tipo de contenido
        if (endpoint.includes('/events')) {
          url.searchParams.append('populate', 'images,metadata,metadata.ogImage');
        } else if (endpoint.includes('/news')) {
          url.searchParams.append('populate', 'featuredImage,galleryImages,metadata,metadata.ogImage');
        } else if (endpoint.includes('/artists')) {
          url.searchParams.append('populate', 'profileImage,galleryImages,metadata');
        } else if (endpoint.includes('/ensembles')) {
          url.searchParams.append('populate', 'featuredImage,galleryImages,upcomingEvents,metadata');
        }
      }
      
      // Agregar filtros de Strapi
      if (params?.filters) {
        Object.entries(params.filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== 'all') {
            url.searchParams.append(`filters[${key}][$eq]`, value.toString());
          }
        });
      }
      
      // Agregar ordenamiento
      if (params?.sort) {
        params.sort.forEach(sortParam => {
          url.searchParams.append('sort', sortParam);
        });
      } else {
        // Ordenamiento por defecto
        url.searchParams.append('sort', 'createdAt:desc');
      }
      
      // Agregar paginación
      if (params?.pagination) {
        if (params.pagination.page) {
          url.searchParams.append('pagination[page]', params.pagination.page.toString());
        }
        if (params.pagination.pageSize) {
          url.searchParams.append('pagination[pageSize]', params.pagination.pageSize.toString());
        }
      }

      if (CMS_CONFIG.DEBUG_MODE) {
        console.log(`🌐 Fetching from: ${url.toString()}`);
      }

      const response = await fetch(url.toString(), {
        headers: {
          'Content-Type': 'application/json',
          ...(CMS_CONFIG.API_TOKEN && { 'Authorization': `Bearer ${CMS_CONFIG.API_TOKEN}` }),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const rawData = await response.json();
      
      // Formatear respuesta específica de Strapi
      const formattedData = this.formatStrapiResponse<T>(rawData);
      
      const result = { 
        data: formattedData as T,
        meta: rawData.meta
      };
      
      // Guardar en cache
      this.cache.set(cacheKey, { data: result, timestamp: Date.now() });
      
      if (CMS_CONFIG.DEBUG_MODE) {
        console.log(`✅ CMS Response for ${endpoint}:`, result);
      }
      
      return result;
    } catch (error) {
      console.error('❌ Error fetching from CMS:', error);
      
      // Si está habilitado, usar datos de fallback
      if (CMS_CONFIG.USE_FALLBACK_DATA) {
        console.log(`🔄 Falling back to local data for ${endpoint}`);
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

  // === MÉTODOS WEBHOOK PARA REVALIDACIÓN ===

  // Método para configurar webhooks de Strapi
  async setupWebhooks(): Promise<void> {
    if (!CMS_CONFIG.API_URL || !CMS_CONFIG.API_TOKEN) {
      console.log('⚠️ No se pueden configurar webhooks: faltan credenciales de API');
      return;
    }

    const webhooks = [
      {
        name: 'Frontend Revalidation - Events',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`,
        headers: { 'x-revalidate-secret': process.env.REVALIDATION_SECRET },
        events: ['entry.create', 'entry.update', 'entry.delete', 'entry.publish', 'entry.unpublish'],
        contentTypes: ['api::event.event']
      },
      {
        name: 'Frontend Revalidation - News',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`,
        headers: { 'x-revalidate-secret': process.env.REVALIDATION_SECRET },
        events: ['entry.create', 'entry.update', 'entry.delete', 'entry.publish', 'entry.unpublish'],
        contentTypes: ['api::news.news']
      }
    ];

    for (const webhook of webhooks) {
      try {
        await fetch(`${CMS_CONFIG.API_URL}/webhooks`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CMS_CONFIG.API_TOKEN}`
          },
          body: JSON.stringify(webhook)
        });
        console.log(`✅ Webhook configurado: ${webhook.name}`);
      } catch (error) {
        console.error(`❌ Error configurando webhook ${webhook.name}:`, error);
      }
    }
  }
}

// Exportar una instancia singleton del servicio
export const cmsService = new CMSService();

// Exportar también la clase para casos específicos
export default CMSService;
