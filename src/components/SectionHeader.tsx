import React from 'react';
import type { SectionHeaderProps } from '../types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      <h2 className="section-title text-h2">{title}</h2>
      {subtitle && <p className="section-subtitle text-body">{subtitle}</p>}
    </div>
  );
};
