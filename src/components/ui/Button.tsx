import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  isExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  disabled = false,
  isExternal = false
}) => {
  const baseClasses = 'inline-flex items-center gap-2 rounded-lg font-medium font-montserrat transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary text-textLight hover:bg-accent',
    accent: 'bg-accent text-textLight hover:bg-primary',
    outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-textLight',
    ghost: 'bg-transparent text-accent hover:bg-accent/10'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold'
  };
  
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  // Si es un enlace
  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  // Si es un botón
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
