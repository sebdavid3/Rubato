# Integración con CMS - Fundación Rubato

Esta documentación explica cómo está estructurado el proyecto para integrarse con un Sistema de Gestión de Contenidos (CMS) como Strapi, Contentful, o Sanity.

## 📋 Tabla de Contenidos

- [Arquitectura del CMS](#arquitectura-del-cms)
- [Configuración](#configuración)
- [Tipos de Contenido](#tipos-de-contenido)
- [Estructura de Archivos](#estructura-de-archivos)
- [Implementación](#implementación)
- [Migración de Datos](#migración-de-datos)
- [Deployment](#deployment)

## 🏗️ Arquitectura del CMS

El proyecto está diseñado con una arquitectura flexible que permite:

1. **Desarrollo Local**: Usar datos estáticos durante el desarrollo
2. **Integración Gradual**: Migrar contenido por módulos al CMS
3. **Fallback Automático**: Datos de respaldo si el CMS no está disponible
4. **Cache Inteligente**: Optimización de rendimiento con cache configurable

### Flujo de Datos

```
Frontend Request → CMS Service → CMS API → Cache → Components
                              ↓ (si falla)
                           Fallback Data → Components
```

## ⚙️ Configuración

### 1. Variables de Entorno

Copia el archivo `.env.example` a `.env.local` y configura las variables:

```bash
cp .env.example .env.local
```

Variables principales:
- `NEXT_PUBLIC_CMS_API_URL`: URL de tu CMS
- `CMS_API_TOKEN`: Token de acceso al CMS
- `NEXT_PUBLIC_USE_FALLBACK_DATA`: Usar datos locales durante desarrollo

### 2. Configuración por CMS

#### Strapi
```env
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337/api
CMS_API_TOKEN=your_strapi_token
NEXT_PUBLIC_CMS_TYPE=strapi
```

#### Contentful
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_CMS_TYPE=contentful
```

#### Sanity
```env
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_token
NEXT_PUBLIC_CMS_TYPE=sanity
```

## 📊 Tipos de Contenido

### Entidades Principales

1. **Páginas** (`CMSPage`)
   - Contenido estático administrable
   - Metadatos SEO
   - Imágenes hero y galería

2. **Eventos** (`CMSEvent`)
   - Información de conciertos, masterclasses, talleres
   - Fechas, ubicación, precios
   - Artistas participantes

3. **Noticias** (`CMSNews`)
   - Artículos y anuncios
   - Categorización automática
   - Galería de imágenes

4. **Artistas** (`CMSArtist`)
   - Información de invitados al festival
   - Biografías e imágenes
   - Enlaces a redes sociales

5. **Agrupaciones** (`CMSEnsemble`)
   - Orquestas y conjuntos musicales
   - Repertorio y logros
   - Miembros y directores

6. **Configuración Global** (`CMSSiteConfig`)
   - Información de contacto
   - Navegación del sitio
   - Configuraciones globales

## 📁 Estructura de Archivos

```
src/
├── types/
│   └── cms.ts                 # Tipos TypeScript para CMS
├── lib/
│   ├── cms.ts                 # Servicio principal del CMS
│   └── adapters.ts            # Adaptadores de datos existentes
├── hooks/
│   └── useCMS.ts              # Hooks React para CMS
├── components/
│   └── cms/
│       └── CMSComponents.tsx  # Componentes de utilidad
└── app/
    └── [page]/
        ├── page.tsx           # Versión actual
        └── page_cms.tsx       # Versión con CMS
```

## 🚀 Implementación

### 1. Usar Hooks del CMS

```tsx
import { useEvents, useFeaturedNews } from '@/hooks/useCMS';
import { CMSContentWrapper } from '@/components/cms/CMSComponents';

function EventsPage() {
  const { data: events, loading, error, refetch } = useEvents({
    category: 'concert',
    limit: 10
  });

  return (
    <CMSContentWrapper
      data={events}
      loading={loading}
      error={error}
      onRetry={refetch}
      emptyState={{
        title: "No hay eventos",
        description: "No se encontraron eventos disponibles."
      }}
    >
      {(eventsList) => (
        <div>
          {eventsList.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </CMSContentWrapper>
  );
}
```

### 2. Componentes con Estados de Carga

```tsx
import { LoadingSpinner, ErrorMessage } from '@/components/cms/CMSComponents';

function MyComponent() {
  if (loading) return <LoadingSpinner text="Cargando eventos..." />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} />;
  
  // Renderizar contenido...
}
```

### 3. Renderizado de Contenido HTML

```tsx
import { CMSContentRenderer } from '@/components/cms/CMSComponents';

function ArticlePage({ article }: { article: CMSNews }) {
  return (
    <div>
      <h1>{article.title}</h1>
      <CMSContentRenderer 
        content={article.content}
        className="prose prose-invert"
      />
    </div>
  );
}
```

## 🔄 Migración de Datos

### Paso 1: Configurar CMS

1. Instalar y configurar tu CMS preferido
2. Crear los tipos de contenido basados en las interfaces TypeScript
3. Configurar permisos y tokens de API

### Paso 2: Migrar Contenido por Módulos

```bash
# 1. Empezar con eventos
cp src/app/eventos/page_cms.tsx src/app/eventos/page.tsx

# 2. Continuar con noticias
cp src/app/noticias/page_cms.tsx src/app/noticias/page.tsx

# 3. Migrar páginas estáticas
# Configurar páginas en el CMS y actualizar componentes
```

### Paso 3: Verificar Adaptadores

Los adaptadores convierten tus datos actuales al formato CMS:

```typescript
// Verificar que los datos se adapten correctamente
import { getAdaptedEvents } from '@/lib/adapters';

const events = await getAdaptedEvents();
console.log('Eventos adaptados:', events);
```

## 🚀 Deployment

### Variables de Producción

```env
# Producción
NEXT_PUBLIC_CMS_API_URL=https://your-cms.com/api
CMS_API_TOKEN=production_token
NEXT_PUBLIC_USE_FALLBACK_DATA=false
NEXT_PUBLIC_CMS_CACHE_TTL=600

# Revalidación
REVALIDATION_SECRET=your_secret
NEXT_PUBLIC_SITE_URL=https://fundacionrubato.org
```

### Configuración de Webhooks

Configura webhooks en tu CMS para revalidar contenido automáticamente:

```javascript
// api/revalidate.js
export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // Revalidar páginas específicas
    await res.revalidate('/eventos');
    await res.revalidate('/noticias');
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
```

### Optimización de Imágenes

Configura Next.js para optimizar imágenes del CMS:

```javascript
// next.config.js
module.exports = {
  images: {
    domains: [
      'localhost',
      'your-cms-domain.com',
      'images.unsplash.com'
    ],
    formats: ['image/webp', 'image/avif'],
  },
}
```

## 🔧 Configuración por CMS

### Strapi

1. **Instalación**:
```bash
npx create-strapi-app@latest rubato-cms
cd rubato-cms
npm run develop
```

2. **Tipos de Contenido**: Crear collection types basados en `src/types/cms.ts`

3. **Permisos**: Configurar roles y permisos para API pública

### Contentful

1. **Setup**: Crear espacio en Contentful
2. **Content Models**: Definir modelos basados en interfaces TypeScript
3. **API Keys**: Configurar tokens de acceso

### Sanity

1. **Instalación**:
```bash
npm install @sanity/client
```

2. **Studio**: Configurar Sanity Studio
3. **Schemas**: Definir esquemas basados en tipos TypeScript

## 📚 Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io/)
- [Contentful API](https://www.contentful.com/developers/docs/)
- [Sanity Documentation](https://www.sanity.io/docs)

## ⚠️ Consideraciones Importantes

1. **SEO**: Todos los componentes incluyen metadatos apropiados
2. **Performance**: Cache implementado a múltiples niveles
3. **Accessibility**: Componentes siguen estándares WCAG
4. **Error Handling**: Manejo robusto de errores con fallbacks
5. **Type Safety**: TypeScript estricto en toda la aplicación

## 🤝 Contribución

Para contribuir al desarrollo del CMS:

1. Seguir las interfaces TypeScript definidas
2. Mantener compatibilidad con datos existentes
3. Implementar tests para nuevas funcionalidades
4. Documentar cambios en la API
