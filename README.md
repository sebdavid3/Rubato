# Fundación Rubato

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![ESLint](https://img.shields.io/badge/ESLint-9.0-4B32C3?style=flat-square&logo=eslint)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)

Aplicación web completa desarrollada para la Fundación Musical Rubato, una organización sin fines de lucro especializada en educación musical en Colombia.

## Descripción

Sitio web institucional que gestiona múltiples aspectos de la fundación: programas educativos del conservatorio, gestión de eventos y conciertos, información de agrupaciones musicales como la Filarmónica Juvenil y el RioMar Quartet, y la promoción del Festival Internacional de Música anual.

El proyecto incluye sistema de noticias, galería de imágenes, portal de contacto con mapa interactivo, y sección dedicada al festival con cronograma de actividades e información de artistas invitados. La arquitectura está preparada para integración futura con sistemas de gestión de contenido (CMS) como Strapi o Contentful.

La aplicación implementa un sistema de componentes reutilizables siguiendo principios de Clean Code, con diseño responsive optimizado para dispositivos móviles y desktop. Incluye optimizaciones de rendimiento mediante Server-Side Rendering y generación de páginas estáticas.

## Tecnologías y arquitectura

- **Next.js 15** con App Router para routing moderno y optimizaciones de rendimiento
- **React 19** con hooks personalizados para manejo de estado
- **TypeScript** para tipado estático y mejor experiencia de desarrollo
- **Tailwind CSS** con sistema de diseño personalizado y tema oscuro
- **Arquitectura modular** con componentes reutilizables y separación de responsabilidades
- **Preparado para CMS** con adaptadores para Strapi, Contentful y Sanity

## Características técnicas

- Diseño responsive con mobile-first approach
- Optimización de imágenes automática con Next.js Image
- SEO optimizado con metadatos dinámicos
- Sistema de routing dinámico para eventos y noticias
- Componentes de UI reutilizables (Card, Button, SectionTitle)
- Integración con mapas para información de contacto
- Galería de imágenes con lightbox interactivo

## Instalación

```bash
git clone https://github.com/sebdavid3/Rubato.git
cd rubato-frontend
npm install
npm run dev
```

Accede a http://localhost:3001

## Estructura del proyecto

- **`/src/app`** - Páginas y layouts usando App Router de Next.js
- **`/src/components`** - Componentes reutilizables organizados por funcionalidad
- **`/src/data`** - Datos mock y configuraciones para desarrollo
- **`/src/lib`** - Utilidades, servicios y adaptadores para CMS
- **`/src/types`** - Definiciones de tipos TypeScript
- **`/public`** - Assets estáticos e imágenes optimizadas



