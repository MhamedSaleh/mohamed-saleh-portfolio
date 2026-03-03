import React from 'react';

interface CardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly hover?: boolean;
  readonly onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) => {
  const classes = [
    'card',
    hover && 'card--hover',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
