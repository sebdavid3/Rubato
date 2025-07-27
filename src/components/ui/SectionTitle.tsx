import React from 'react';

type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TitleSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type TitleColor = 'light' | 'accent' | 'primary';

interface SectionTitleProps {
  children: React.ReactNode;
  level?: TitleLevel;
  size?: TitleSize;
  color?: TitleColor;
  className?: string;
  centered?: boolean;
  withDivider?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  level = 'h2',
  size = 'lg',
  color = 'light',
  className = '',
  centered = false,
  withDivider = false
}) => {
  const Component = level;
  
  const baseClasses = 'font-bold font-cinzel uppercase leading-tight';
  
  const sizeClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl', 
    lg: 'text-2xl sm:text-3xl md:text-4xl',
    xl: 'text-3xl sm:text-4xl md:text-5xl',
    '2xl': 'text-4xl sm:text-5xl md:text-6xl',
    '3xl': 'text-5xl sm:text-6xl md:text-7xl'
  };
  
  const colorClasses = {
    light: 'text-textLight',
    accent: 'text-accent', 
    primary: 'text-primary'
  };
  
  const marginClasses = {
    sm: 'mb-2',
    md: 'mb-3 sm:mb-4',
    lg: 'mb-4 sm:mb-6',
    xl: 'mb-6 sm:mb-8',
    '2xl': 'mb-6 sm:mb-8',
    '3xl': 'mb-6 sm:mb-8'
  };
  
  const centerClass = centered ? 'text-center' : '';
  
  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    colorClasses[color],
    marginClasses[size],
    centerClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <>
      <Component className={combinedClasses}>
        {children}
      </Component>
      {withDivider && (
        <div className={`w-16 sm:w-24 h-1 bg-accent ${centered ? 'mx-auto' : ''} mb-4 sm:mb-6`}></div>
      )}
    </>
  );
};

export default SectionTitle;
