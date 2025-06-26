// Hooks personalizados para trabajar con el CMS
// Estos hooks proporcionan una interfaz React para acceder a los datos del CMS

'use client';

import { useState, useEffect, useMemo } from 'react';
import { cmsService } from '../lib/cms';
import {
  CMSPage,
  CMSEvent,
  CMSNews,
  CMSArtist,
  CMSSponsor,
  CMSEnsemble,
  CMSCourse,
  CMSSiteConfig
} from '../types/cms';

// Hook genérico para manejar el estado de carga
interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

function useAsync<T>(
  asyncFunction: () => Promise<T>,
  dependencies: any[] = []
): UseAsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await asyncFunction();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    data,
    loading,
    error,
    refetch: fetchData
  };
}

// === HOOKS PARA PÁGINAS ===

export function usePage(slug: string): UseAsyncState<CMSPage | null> {
  return useAsync(
    () => cmsService.getPage(slug),
    [slug]
  );
}

export function usePages(): UseAsyncState<CMSPage[]> {
  return useAsync(
    () => cmsService.getPages(),
    []
  );
}

// === HOOKS PARA EVENTOS ===

export function useEvents(params?: {
  category?: string;
  isFeatured?: boolean;
  eventStatus?: string;
  limit?: number;
}): UseAsyncState<CMSEvent[]> {
  const dependencies = [
    params?.category,
    params?.isFeatured,
    params?.eventStatus,
    params?.limit
  ];

  return useAsync(
    () => cmsService.getEvents(params),
    dependencies
  );
}

export function useEvent(slug: string): UseAsyncState<CMSEvent | null> {
  return useAsync(
    () => cmsService.getEvent(slug),
    [slug]
  );
}

// Hook específico para eventos destacados
export function useFeaturedEvents(limit: number = 3): UseAsyncState<CMSEvent[]> {
  return useEvents({ isFeatured: true, limit });
}

// Hook específico para próximos eventos
export function useUpcomingEvents(limit?: number): UseAsyncState<CMSEvent[]> {
  return useEvents({ eventStatus: 'upcoming', limit });
}

// === HOOKS PARA NOTICIAS ===

export function useNews(params?: {
  category?: string;
  isFeatured?: boolean;
  limit?: number;
}): UseAsyncState<CMSNews[]> {
  const dependencies = [
    params?.category,
    params?.isFeatured,
    params?.limit
  ];

  return useAsync(
    () => cmsService.getNews(params),
    dependencies
  );
}

export function useNewsArticle(slug: string): UseAsyncState<CMSNews | null> {
  return useAsync(
    () => cmsService.getNewsArticle(slug),
    [slug]
  );
}

// Hook específico para noticias destacadas
export function useFeaturedNews(limit: number = 3): UseAsyncState<CMSNews[]> {
  return useNews({ isFeatured: true, limit });
}

// Hook específico para noticias recientes
export function useRecentNews(limit: number = 6): UseAsyncState<CMSNews[]> {
  return useNews({ limit });
}

// === HOOKS PARA FESTIVAL ===

export function useFestivalArtists(festivalEdition?: number): UseAsyncState<CMSArtist[]> {
  return useAsync(
    () => cmsService.getFestivalArtists(festivalEdition),
    [festivalEdition]
  );
}

export function useSponsors(festivalEdition?: number): UseAsyncState<CMSSponsor[]> {
  return useAsync(
    () => cmsService.getSponsors(festivalEdition),
    [festivalEdition]
  );
}

// === HOOKS PARA AGRUPACIONES ===

export function useEnsembles(): UseAsyncState<CMSEnsemble[]> {
  return useAsync(
    () => cmsService.getEnsembles(),
    []
  );
}

export function useEnsemble(slug: string): UseAsyncState<CMSEnsemble | null> {
  return useAsync(
    () => cmsService.getEnsemble(slug),
    [slug]
  );
}

// === HOOKS PARA CURSOS ===

export function useCourses(): UseAsyncState<CMSCourse[]> {
  return useAsync(
    () => cmsService.getCourses(),
    []
  );
}

// === HOOKS PARA CONFIGURACIÓN GLOBAL ===

export function useSiteConfig(): UseAsyncState<CMSSiteConfig | null> {
  return useAsync(
    () => cmsService.getSiteConfig(),
    []
  );
}

// === HOOKS CON FUNCIONALIDAD ADICIONAL ===

// Hook para filtrar y ordenar eventos con lógica local
export function useFilteredEvents() {
  const { data: events, loading, error, refetch } = useEvents();
  const [filters, setFilters] = useState({
    category: 'all',
    eventStatus: 'all',
    searchTerm: ''
  });

  const filteredEvents = useMemo(() => {
    if (!events) return [];

    return events.filter(event => {
      const matchesCategory = filters.category === 'all' || event.category === filters.category;
      const matchesStatus = filters.eventStatus === 'all' || event.eventStatus === filters.eventStatus;
      const matchesSearch = filters.searchTerm === '' || 
        event.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        event.shortDescription.toLowerCase().includes(filters.searchTerm.toLowerCase());

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [events, filters]);

  return {
    events: filteredEvents,
    loading,
    error,
    refetch,
    filters,
    setFilters,
    totalEvents: events?.length || 0
  };
}

// Hook para filtrar y ordenar noticias con lógica local
export function useFilteredNews() {
  const { data: news, loading, error, refetch } = useNews();
  const [filters, setFilters] = useState({
    category: 'all',
    searchTerm: ''
  });

  const filteredNews = useMemo(() => {
    if (!news) return [];

    return news.filter(article => {
      const matchesCategory = filters.category === 'all' || article.category === filters.category;
      const matchesSearch = filters.searchTerm === '' || 
        article.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        article.shortDescription.toLowerCase().includes(filters.searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [news, filters]);

  return {
    news: filteredNews,
    loading,
    error,
    refetch,
    filters,
    setFilters,
    totalNews: news?.length || 0
  };
}

// Hook para estadísticas del sitio
export function useSiteStats() {
  const { data: events } = useEvents();
  const { data: news } = useNews();
  const { data: ensembles } = useEnsembles();

  const stats = useMemo(() => {
    return {
      totalEvents: events?.length || 0,
      upcomingEvents: events?.filter(e => e.eventStatus === 'upcoming').length || 0,
      totalNews: news?.length || 0,
      featuredNews: news?.filter(n => n.isFeatured).length || 0,
      activeEnsembles: ensembles?.length || 0
    };
  }, [events, news, ensembles]);

  return stats;
}

// Hook para contenido de la página principal
export function useHomePageContent() {
  const featuredEvents = useFeaturedEvents(3);
  const recentNews = useRecentNews(4);
  const siteConfig = useSiteConfig();

  const loading = featuredEvents.loading || recentNews.loading || siteConfig.loading;
  const error = featuredEvents.error || recentNews.error || siteConfig.error;

  return {
    featuredEvents: featuredEvents.data || [],
    recentNews: recentNews.data || [],
    siteConfig: siteConfig.data,
    loading,
    error,
    refetch: async () => {
      await Promise.all([
        featuredEvents.refetch(),
        recentNews.refetch(),
        siteConfig.refetch()
      ]);
    }
  };
}
