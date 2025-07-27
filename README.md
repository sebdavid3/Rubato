# 🎵 Fundación Rubato - Sitio Web

> **Transformando vidas a través de la música en la región Caribe de Colombia**

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4)
![CMS Ready](https://img.shields.io/badge/CMS-Ready-green)

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Integración CMS](#-integración-cms)
- [Deployment](#-deployment)
- [Contribución](#-contribución)

## 🎯 Acerca del Proyecto

La **Fundación Musical Rubato** es una organización sin fines de lucro dedicada a la formación musical integral y el desarrollo de jóvenes talentos en Colombia. Este sitio web es la plataforma digital que conecta a la comunidad con todos los programas, eventos y oportunidades que ofrece la fundación.

### 🎪 Propósito Principal

- **Educación Musical**: Promocionar programas de formación musical de excelencia
- **Eventos Culturales**: Difundir conciertos, festivales y actividades artísticas
- **Impacto Social**: Mostrar el impacto transformador de la música en la comunidad
- **Conectividad**: Crear un punto de encuentro digital para estudiantes, padres y colaboradores

### 🌟 Misión del Proyecto

Desarrollar una plataforma web moderna, accesible y dinámica que refleje la excelencia artística de la fundación mientras facilita la gestión de contenido y la interacción con la comunidad.

## ✨ Características Principales

### 🎨 Experiencia de Usuario
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Interfaz Elegante**: Diseño que refleja la sofisticación musical
- **Navegación Intuitiva**: Estructura clara y fácil de usar
- **Performance Optimizada**: Carga rápida con Next.js 15

### 🎭 Funcionalidades Clave

#### 📅 Gestión de Eventos
- Calendario interactivo de conciertos y presentaciones
- Información detallada de eventos con ubicación y precios
- Sistema de categorización (conciertos, masterclasses, talleres)
- Integración con mapas para ubicaciones

#### 🎪 Festival Internacional
- Sitio dedicado al Festival Internacional de Música
- Información de artistas invitados con biografías
- Cronograma detallado de actividades
- Sistema de inscripciones online
- Archivo histórico de ediciones anteriores

#### 📰 Centro de Noticias
- Blog integrado con las últimas noticias
- Categorización automática de contenido
- Sistema de búsqueda y filtros
- Galería de imágenes integrada

#### 🎼 Programas Educativos
- **Conservatorio**: Información completa del programa
- **Filarmónica Juvenil**: Detalles de la orquesta juvenil
- **Cursos Libres**: Talleres y clases abiertas
- **Programa de Becas**: Oportunidades para jóvenes talentos

#### 👥 Portal de Estudiantes
- Área privada para estudiantes activos
- Consulta de calificaciones y horarios
- Widgets informativos personalizados
- Comunicaciones directas

### 🔧 Características Técnicas

#### ⚡ Performance y SEO
- **Server-Side Rendering (SSR)** con Next.js
- **Static Site Generation (SSG)** para páginas estáticas
- **Optimización de imágenes** automática
- **Metadatos SEO** dinámicos
- **Lighthouse Score 90+**

#### 🎨 Sistema de Diseño
- **Tailwind CSS** para estilos consistentes
- **Fonts personalizadas**: Cinzel y Montserrat
- **Tema oscuro** profesional
- **Componentes reutilizables**
- **Animaciones suaves**

#### 📱 Integración CMS
- **Arquitectura Headless** lista para CMS
- **Fallback automático** a datos locales
- **Cache inteligente** con TTL configurable
- **Hooks especializados** para cada tipo de contenido
- **Compatibilidad multi-CMS** (Strapi, Contentful, Sanity)

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
```json
{
  "next": "15.3.4",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "typescript": "5.0"
}
```

### Styling & UI
```json
{
  "tailwindcss": "3.4.17",
  "@tailwindcss/postcss": "4.1.10",
  "autoprefixer": "10.4.21",
  "postcss": "8.5.6"
}
```

### Development Tools
```json
{
  "eslint": "9.0",
  "eslint-config-next": "15.3.4",
  "@types/node": "20.0",
  "@types/react": "19.0",
  "@types/react-dom": "19.0"
}
```

### Arquitectura
- **Next.js 15** con App Router
- **TypeScript** para type safety
- **Component-based architecture**
- **Custom hooks** para lógica reutilizable
- **Responsive design** con Tailwind CSS

## 📁 Estructura del Proyecto

```
rubato-frontend/
├── 📄 README.md                          # Este archivo
├── 📄 package.json                       # Dependencias y scripts
├── 📄 next.config.ts                     # Configuración de Next.js
├── 📄 tailwind.config.js                 # Configuración de Tailwind
├── 📄 tsconfig.json                      # Configuración de TypeScript
├── 📄 eslint.config.mjs                  # Configuración de ESLint
├── 📄 postcss.config.js                  # Configuración de PostCSS
│
├── 📁 public/                            # Archivos estáticos
│   ├── 🖼️ favicon.ico                    # Favicon del sitio
│   └── 📁 images/                        # Imágenes del proyecto
│       ├── 📁 galeria/                   # Logos y elementos visuales
│       ├── 📁 festival/                  # Imágenes del festival
│       └── 📁 pilares/                   # Imágenes institucionales
│
├── 📁 src/                               # Código fuente principal
│   ├── 📁 app/                           # Pages y layouts (App Router)
│   │   ├── 📄 layout.tsx                 # Layout principal
│   │   ├── 📄 page.tsx                   # Página de inicio
│   │   ├── 📄 globals.css                # Estilos globales
│   │   │
│   │   ├── 📁 eventos/                   # Sección de eventos
│   │   │   ├── 📄 page.tsx               # Lista de eventos
│   │   │   └── 📁 [slug]/                # Evento individual
│   │   │       └── 📄 page.tsx
│   │   │
│   │   ├── 📁 festival/                  # Festival Internacional
│   │   │   ├── 📄 page.tsx               # Página principal del festival
│   │   │   ├── 📁 2025/                  # Edición 2025
│   │   │   │   ├── 📄 page.tsx           # Festival 2025
│   │   │   │   ├── 📁 cronograma/        # Cronograma de actividades
│   │   │   │   ├── 📁 inscripciones/     # Sistema de inscripciones
│   │   │   │   └── 📁 invitados/         # Artistas invitados
│   │   │   └── 📁 archivo/               # Ediciones anteriores
│   │   │
│   │   ├── 📁 conservatorio/             # Programa del Conservatorio
│   │   ├── 📁 filarmonica-juvenil/       # Filarmónica Juvenil
│   │   ├── 📁 cursos-libres/             # Cursos y talleres
│   │   ├── 📁 noticias/                  # Centro de noticias
│   │   ├── 📁 contacto/                  # Información de contacto
│   │   └── 📁 api/                       # API Routes
│   │       └── 📁 revalidate/            # Endpoints de revalidación
│   │
│   ├── 📁 components/                    # Componentes reutilizables
│   │   ├── 📁 global/                    # Componentes globales
│   │   │   ├── 📄 Header.tsx             # Navegación principal
│   │   │   └── 📄 Footer.tsx             # Pie de página
│   │   ├── 📁 events/                    # Componentes de eventos
│   │   ├── 📁 festival/                  # Componentes del festival
│   │   ├── 📁 portal/                    # Portal de estudiantes
│   │   ├── 📁 cms/                       # Componentes CMS
│   │   └── 📁 ui/                        # Componentes UI base
│   │
│   ├── 📁 data/                          # Datos y contenido
│   │   ├── 📄 eventos.ts                 # Mock de eventos
│   │   ├── 📄 noticias.ts                # Mock de noticias
│   │   ├── 📄 festival.ts                # Datos del festival
│   │   └── 📄 agrupaciones.ts            # Información de agrupaciones
│   │
│   ├── 📁 hooks/                         # Custom React Hooks
│   │   └── 📄 useCMS.ts                  # Hooks para CMS
│   │
│   ├── 📁 lib/                           # Utilidades y servicios
│   │   ├── 📄 cms.ts                     # Servicio principal del CMS
│   │   └── 📄 adapters.ts                # Adaptadores de datos
│   │
│   └── 📁 types/                         # Definiciones de TypeScript
│       └── 📄 cms.ts                     # Tipos del CMS
│
├── 📁 scripts/                           # Scripts de utilidad
│   └── 📄 migrate-to-cms.js              # Script de migración CMS
│
└── 📁 docs/                              # Documentación técnica
    ├── 📄 CMS_INTEGRATION.md             # Guía de integración CMS
    ├── 📄 CMS_IMPLEMENTATION_SUMMARY.md  # Resumen de implementación
    └── 📄 ESTADO_ACTUAL_PROYECTO.md      # Estado actual del proyecto
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** 18.0 o superior
- **npm** o **yarn** como gestor de paquetes
- **Git** para clonar el repositorio

### 1. Clonar el Repositorio
```bash
git clone https://github.com/sebdavid3/Rubato.git
cd Rubato/rubato-frontend
```

### 2. Instalar Dependencias
```bash
# Con npm
npm install

# Con yarn
yarn install
```

### 3. Configurar Variables de Entorno
```bash
# Crear archivo de configuración local
cp .env.example .env.local
```

Configurar las variables en `.env.local`:
```env
# Configuración del CMS (opcional para desarrollo)
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337/api
CMS_API_TOKEN=your_cms_token_here
NEXT_PUBLIC_USE_FALLBACK_DATA=true

# Configuración del sitio
NEXT_PUBLIC_SITE_URL=http://localhost:3000
REVALIDATION_SECRET=your_secret_here

# Cache configuration
NEXT_PUBLIC_CMS_CACHE_TTL=300
```

### 4. Ejecutar en Modo Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

# Con Turbopack (más rápido)
npm run dev --turbo
```

El sitio estará disponible en `http://localhost:3001`

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con Turbopack
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
```

## 🔗 Integración CMS

El proyecto está **completamente preparado** para integrarse con cualquier CMS headless moderno. La arquitectura implementada permite:

### 🎯 Características del Sistema CMS

#### ✅ **Estado Actual: IMPLEMENTADO**
- ✅ **Tipos TypeScript** completos en `src/types/cms.ts`
- ✅ **Servicio CMS** con fallback automático en `src/lib/cms.ts`
- ✅ **Hooks especializados** para cada tipo de contenido
- ✅ **Componentes UI** universales para CMS
- ✅ **Cache inteligente** con TTL configurable
- ✅ **Adaptadores** para datos existentes

#### 🎪 **Modo de Funcionamiento**

**Durante Desarrollo:**
```
Hook → CMS Service → (CMS falla) → Fallback Data → Componentes
```

**En Producción:**
```
Hook → CMS Service → CMS API → Cache → Componentes
```

### 🛠️ CMS Compatibles

| CMS | Estado | Configuración |
|-----|--------|---------------|
| **Strapi** | ✅ Listo | `NEXT_PUBLIC_CMS_TYPE=strapi` |
| **Contentful** | ✅ Listo | `NEXT_PUBLIC_CMS_TYPE=contentful` |
| **Sanity** | ✅ Listo | `NEXT_PUBLIC_CMS_TYPE=sanity` |
| **WordPress** | ✅ Listo | `NEXT_PUBLIC_CMS_TYPE=wordpress` |

### 🔄 Migración a CMS

```bash
# 1. Configurar variables de entorno para tu CMS
NEXT_PUBLIC_CMS_API_URL=https://your-cms.com/api
CMS_API_TOKEN=your_production_token
NEXT_PUBLIC_USE_FALLBACK_DATA=false

# 2. Ejecutar script de migración
node scripts/migrate-to-cms.js

# 3. Verificar integración
npm run build && npm run start
```

### 📖 Documentación Detallada
- 📄 **[CMS_INTEGRATION.md](CMS_INTEGRATION.md)** - Guía completa de integración
- 📄 **[CMS_IMPLEMENTATION_SUMMARY.md](CMS_IMPLEMENTATION_SUMMARY.md)** - Resumen técnico

## 🌐 Deployment

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
out/
```

### Variables de Entorno para Producción
```env
NEXT_PUBLIC_CMS_API_URL=https://your-cms.herokuapp.com/api
CMS_API_TOKEN=your_production_token
NEXT_PUBLIC_USE_FALLBACK_DATA=false
NEXT_PUBLIC_SITE_URL=https://fundacionrubato.org
REVALIDATION_SECRET=your_secure_secret
NEXT_PUBLIC_CMS_CACHE_TTL=600
```

## 📊 Métricas y Performance

### 🚀 Objetivos de Performance
- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s

### 📈 Optimizaciones Implementadas
- ✅ **Server-Side Rendering** para SEO
- ✅ **Image Optimization** automática
- ✅ **Code Splitting** automático
- ✅ **Cache strategies** multi-nivel
- ✅ **Prefetching** de rutas críticas

## 🤝 Contribución

### 🔧 Configuración de Desarrollo

1. **Fork del repositorio**
2. **Crear rama de feature**:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Seguir convenciones**:
   - ESLint para calidad de código
   - TypeScript estricto
   - Componentes documentados
   - Tests para nuevas features

### 📝 Convenciones de Código

#### Estructura de Componentes
```tsx
// components/ejemplo/MiComponente.tsx
import React from 'react';
import { TipoProps } from '@/types/cms';

interface MiComponenteProps {
  titulo: string;
  datos?: TipoProps[];
}

export default function MiComponente({ titulo, datos = [] }: MiComponenteProps) {
  return (
    <div className="bg-bgDark p-4 rounded-lg">
      <h2 className="text-textLight font-cinzel">{titulo}</h2>
      {/* Resto del componente */}
    </div>
  );
}
```

#### Hooks Personalizados
```tsx
// hooks/useEjemplo.ts
import { useState, useEffect } from 'react';
import { cmsService } from '@/lib/cms';

export function useEjemplo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lógica del hook
  }, []);

  return { data, loading, error };
}
```

### 🎯 Áreas de Contribución
- **Nuevas funcionalidades** para el CMS
- **Mejoras de performance** y optimización
- **Componentes reutilizables** adicionales
- **Tests automatizados** y documentación
- **Integración con servicios** externos

## 📚 Recursos Adicionales

### 📖 Documentación Técnica
- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Features](https://react.dev/blog/2024/04/25/react-19)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### 🎨 Diseño y UX
- **Fonts**: [Cinzel](https://fonts.google.com/specimen/Cinzel), [Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Color Palette**: Tema oscuro profesional con acentos dorados
- **Icons**: Heroicons y SVG personalizados
- **Images**: Optimización automática con Next.js

### 🔧 Herramientas de Desarrollo
- **VS Code Extensions**: ES7+ React/Redux/React-Native snippets, Tailwind CSS IntelliSense
- **Chrome DevTools**: React Developer Tools, Lighthouse
- **Testing**: Jest + React Testing Library (para implementar)

## 📞 Contacto y Soporte

### 👥 Equipo de Desarrollo
- **Sebastián David** - Developer Principal
- **Fundación Rubato** - Product Owner

### 🔗 Enlaces Importantes
- **Sitio Web**: [fundacionrubato.org](https://fundacionrubato.org)
- **GitHub**: [github.com/sebdavid3/Rubato](https://github.com/sebdavid3/Rubato)
- **Email**: info@fundacionrubato.org

### 🐛 Reportar Issues
Para reportar bugs o solicitar nuevas funcionalidades, utiliza el [sistema de issues de GitHub](https://github.com/sebdavid3/Rubato/issues).

---

<div align="center">

**🎵 Hecho con ❤️ para la Fundación Musical Rubato**

*Transformando vidas a través de la música desde 2018*

[![Fundación Rubato](https://img.shields.io/badge/Fundación-Rubato-purple?style=for-the-badge)](https://fundacionrubato.org)

</div>
