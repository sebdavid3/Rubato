import React from 'react';

type FlexDirection = 'row' | 'col' | 'row-reverse' | 'col-reverse';
type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type Gap = '1' | '2' | '3' | '4' | '6' | '8' | '12';

interface FlexBoxProps {
  children: React.ReactNode;
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gap;
  wrap?: boolean;
  className?: string;
  as?: React.ElementType;
}

const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
  gap = '4',
  wrap = false,
  className = '',
  as: Component = 'div'
}) => {
  const baseClasses = 'flex';
  
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse'
  };
  
  const justifyClasses = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  };
  
  const alignClasses = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch'
  };
  
  const gapClasses = {
    '1': 'gap-1',
    '2': 'gap-2',
    '3': 'gap-3',
    '4': 'gap-4',
    '6': 'gap-6',
    '8': 'gap-8',
    '12': 'gap-12'
  };
  
  const wrapClass = wrap ? 'flex-wrap' : '';
  
  const combinedClasses = [
    baseClasses,
    directionClasses[direction],
    justifyClasses[justify],
    alignClasses[align],
    gapClasses[gap],
    wrapClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClasses}>
      {children}
    </Component>
  );
};

export default FlexBox;
