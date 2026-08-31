'use client';

import React from 'react';

interface LeafDecorationProps {
  className?: string;
  variant?: 'top-right' | 'bottom-left' | 'floating' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
}

export default function LeafDecoration({
  className = '',
  variant = 'floating',
  size = 'md',
}: LeafDecorationProps) {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-44 h-44',
  };

  return (
    <div
      className={`pointer-events-none absolute z-0 select-none opacity-20 hover:opacity-40 transition-opacity duration-700 ${sizeMap[size]} ${
        variant === 'floating' ? 'animate-float-slow' : 'animate-float-reverse'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-emerald-600 fill-current"
      >
        <path
          d="M50 5C25 5 5 25 5 50C5 75 25 95 50 95C75 95 95 75 95 50C95 25 75 5 50 5ZM50 85C30.7 85 15 69.3 15 50C15 30.7 30.7 15 50 15C69.3 15 85 30.7 85 50C85 69.3 69.3 85 50 85Z"
          fillOpacity="0.1"
        />
        <path
          d="M10 50C10 20 40 10 70 10C70 40 60 70 30 80C20 83 10 70 10 50Z"
          fill="currentColor"
          fillOpacity="0.4"
        />
        <path
          d="M30 70C45 55 60 40 75 25"
          stroke="#0F5132"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
