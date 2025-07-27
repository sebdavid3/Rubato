import React from 'react';

type CircleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type CircleColor = 'accent' | 'primary' | 'secondary';

interface IconCircleProps {
  children: React.ReactNode;
  size?: CircleSize;
  color?: CircleColor;
  className?: string;
  centered?: boolean;
  hasMargin?: boolean;
}

const IconCircle: React.FC<IconCircleProps> = ({
  children,
  size = 'md',
  color = 'accent',
  className = '',
  centered = false,
  hasMargin = false
}) => {
  const baseClasses = 'rounded-full flex items-center justify-center flex-shrink-0';
  
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };
  
  const colorClasses = {
    accent: 'bg-accent',
    primary: 'bg-primary',
    secondary: 'bg-bgDarkSection border-2 border-accent'
  };
  
  const positionClass = centered ? 'mx-auto' : '';
  
  const marginClasses = {
    xs: hasMargin ? 'mb-2' : '',
    sm: hasMargin ? 'mb-3' : '',
    md: hasMargin ? 'mb-4' : '',
    lg: hasMargin ? 'mb-6' : '',
    xl: hasMargin ? 'mb-8' : ''
  };
  
  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    colorClasses[color],
    positionClass,
    marginClasses[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default IconCircle;
