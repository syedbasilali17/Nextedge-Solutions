import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
const sizeClasses = {
  sm: 'h-24',
  md: 'h-28',
  lg: 'h-36',
  xl: 'h-44',
};;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/assets/images/logo.png"
        alt="Logo"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};