import React from 'react';

interface TagProps {
  readonly children: React.ReactNode;
  readonly variant?: 'default' | 'accent';
  readonly size?: 'sm' | 'md';
  readonly className?: string;
}

export const Tag: React.FC<TagProps> = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  const classes = [
    'tag',
    `tag--${variant}`,
    `tag--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
