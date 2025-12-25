import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
}) => {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverStyle = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';
  
  return (
    <div className={`bg-white rounded-xl shadow-md ${paddingStyles[padding]} ${hoverStyle} ${className}`}>
      {children}
    </div>
  );
};