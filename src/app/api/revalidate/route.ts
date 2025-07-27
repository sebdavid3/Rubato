import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

// Endpoint para revalidar páginas cuando el contenido cambia en Strapi
export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');
  
  // Verificar el secret de revalidación
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json(
      { message: 'Invalid secret' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { model, entry } = body;

    console.log('🔄 Revalidando contenido:', { model, entryId: entry?.id });

    // Revalidar según el tipo de contenido
    switch (model) {
      case 'event':
        // Revalidar páginas de eventos
        revalidatePath('/eventos');
        revalidatePath('/');
        if (entry?.attributes?.slug) {
          revalidatePath(`/eventos/${entry.attributes.slug}`);
        }
        // Revalidar por tags
        revalidateTag('events');
        revalidateTag('featured-events');
        break;

      case 'news':
        // Revalidar páginas de noticias
        revalidatePath('/noticias');
        revalidatePath('/');
        if (entry?.attributes?.slug) {
          revalidatePath(`/noticias/${entry.attributes.slug}`);
        }
        // Revalidar por tags
        revalidateTag('news');
        revalidateTag('featured-news');
        break;

      case 'artist':
        // Revalidar páginas del festival
        revalidatePath('/festival');
        revalidatePath('/festival/2025');
        revalidateTag('festival-artists');
        break;

      case 'ensemble':
        // Revalidar páginas de agrupaciones
        if (entry?.attributes?.slug) {
          revalidatePath(`/${entry.attributes.slug}`);
        }
        revalidateTag('ensembles');
        break;

      default:
        // Revalidar página principal por defecto
        revalidatePath('/');
        break;
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      model,
      entry: entry?.id
    });

  } catch (error) {
    console.error('❌ Error revalidando:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// También soportar GET para testing manual
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const path = request.nextUrl.searchParams.get('path');
  
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json(
      { message: 'Invalid secret' },
      { status: 401 }
    );
  }

  try {
    if (path) {
      revalidatePath(path);
      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        path
      });
    } else {
      // Revalidar páginas principales
      revalidatePath('/');
      revalidatePath('/eventos');
      revalidatePath('/noticias');
      revalidatePath('/festival');
      
      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        paths: ['/', '/eventos', '/noticias', '/festival']
      });
    }
  } catch (error) {
    console.error('❌ Error revalidando:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
