import React from 'react';
import type { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  href, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn--${variant}`;
  const sizeClasses = `btn--${size}`;
  const disabledClasses = disabled ? 'btn--disabled' : '';
  
  const classes = [
    baseClasses,
    variantClasses,
    sizeClasses,
    disabledClasses,
    className
  ].filter(Boolean).join(' ');

  const Component = href ? 'a' : 'button';
  const componentProps = {
    ...props,
    className: classes,
    onClick,
    disabled,
    ...(href && { href })
  };

  return React.createElement(Component, componentProps, children);
};
