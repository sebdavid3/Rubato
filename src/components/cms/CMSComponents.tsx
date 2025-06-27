// Componentes de utilidad para el CMS
// Estos componentes manejan estados de carga, errores y contenido dinámico

import React from 'react';
import Image from 'next/image';

// Componente de loading genérico
export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '',
  text = 'Cargando...'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center justify-center py-8 ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-accent border-t-transparent ${sizeClasses[size]} mb-3`}></div>
      <p className={`text-textSecondary font-montserrat ${textSizeClasses[size]}`}>
        {text}
      </p>
    </div>
  );
};

// Componente de error genérico
export interface ErrorMessageProps {
  error: Error | string;
  onRetry?: () => void;
  className?: string;
  showRetry?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  error, 
  onRetry, 
  className = '',
  showRetry = true 
}) => {
  const errorMessage = typeof error === 'string' ? error : error.message;

  return (
    <div className={`bg-red-900/20 border border-red-600/30 rounded-lg p-6 text-center ${className}`}>
      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-red-400 font-semibold font-montserrat mb-2">
        Error al cargar el contenido
      </h3>
      <p className="text-red-300 font-montserrat text-sm mb-4">
        {errorMessage}
      </p>
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-montserrat text-sm transition-colors"
        >
          Intentar de nuevo
        </button>
      )}
    </div>
  );
};

// Componente de estado vacío
export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = ''
}) => {
  const defaultIcon = (
    <svg className="w-12 h-12 text-textSecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="mb-4">
        {icon || defaultIcon}
      </div>
      <h3 className="text-textLight font-semibold font-cinzel text-lg mb-2">
        {title}
      </h3>
      <p className="text-textSecondary font-montserrat mb-6 max-w-md mx-auto">
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="bg-accent hover:bg-primary text-textLight px-6 py-3 rounded-lg font-montserrat font-medium transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

// Componente wrapper que maneja automáticamente loading, error y estado vacío
export interface CMSContentWrapperProps<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  onRetry?: () => void;
  emptyState?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  };
  loadingText?: string;
  children: (data: T) => React.ReactNode;
  className?: string;
}

export function CMSContentWrapper<T>({
  data,
  loading,
  error,
  onRetry,
  emptyState,
  loadingText = 'Cargando contenido...',
  children,
  className = ''
}: CMSContentWrapperProps<T>): React.ReactElement {
  if (loading) {
    return (
      <div className={className}>
        <LoadingSpinner text={loadingText} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={className}>
        <ErrorMessage error={error} onRetry={onRetry} />
      </div>
    );
  }

  if (!data) {
    if (emptyState) {
      return (
        <div className={className}>
          <EmptyState
            title={emptyState.title}
            description={emptyState.description}
            icon={emptyState.icon}
          />
        </div>
      );
    }
    return <div className={className}></div>;
  }

  return <div className={className}>{children(data)}</div>;
}

// Componente para renderizar contenido HTML del CMS de forma segura
export interface CMSContentRendererProps {
  content: string;
  className?: string;
}

export const CMSContentRenderer: React.FC<CMSContentRendererProps> = ({
  content,
  className = ''
}) => {
  // En un entorno de producción, aquí se podría usar DOMPurify para sanitizar el HTML
  return (
    <div 
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

// Componente para mostrar imágenes del CMS con fallback
export interface CMSImageProps {
  image: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  } | null;
  fallbackSrc?: string;
  className?: string;
  sizes?: string;
}

export const CMSImage: React.FC<CMSImageProps> = ({
  image,
  fallbackSrc = '/images/placeholder.jpg',
  className = '',
  sizes
}) => {
  if (!image) {
    return (
      <Image
        src={fallbackSrc}
        alt="Imagen no disponible"
        className={className}
        sizes={sizes}
        width={500}
        height={300}
      />
    );
  }

  return (
    <Image
      src={image.url}
      alt={image.alt}
      width={image.width || 500}
      height={image.height || 300}
      className={className}
      sizes={sizes}
    />
  );
};

// Hook para formatear fechas de forma consistente
export const useDateFormatter = () => {
  const formatDate = (dateString: string, options?: Intl.DateTimeFormatOptions) => {
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return new Date(dateString).toLocaleDateString('es-ES', options || defaultOptions);
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Hace menos de una hora';
    if (diffInHours < 24) return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) return `Hace ${diffInWeeks} semana${diffInWeeks > 1 ? 's' : ''}`;
    
    return formatDate(dateString);
  };

  return {
    formatDate,
    formatDateTime,
    formatTimeAgo
  };
};
