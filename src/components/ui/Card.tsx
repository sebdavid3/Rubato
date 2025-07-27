import React from 'react';

type CardVariant = 'default' | 'section' | 'dark';
type CardSize = 'sm' | 'md' | 'lg' | 'xl';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  className?: string;
  hasShadow?: boolean;
  hasHover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  hasShadow = false,
  hasHover = false
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-bgDark border border-bgDarkSection',
    section: 'bg-bgDarkSection border border-bgDark',
    dark: 'bg-bgDark'
  };
  
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8',
    xl: 'p-8 md:p-12'
  };
  
  const shadowClass = hasShadow ? 'shadow-lg' : '';
  const hoverClass = hasHover ? 'hover:shadow-xl hover:border-accent/30' : '';
  
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    shadowClass,
    hoverClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;
