import React from 'react';
import { cn } from '../utils/cn';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
}

export function Button({
  children,
  className,
  variant = 'primary',
  icon: Icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors',
        'text-sm md:text-base',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700 disabled:hover:bg-blue-600'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:hover:bg-gray-100',
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}