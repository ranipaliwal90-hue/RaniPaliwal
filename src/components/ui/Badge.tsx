'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'green' | 'lime' | 'light' | 'outline';
  className?: string;
  animateDot?: boolean;
}

export default function Badge({
  children,
  icon,
  variant = 'green',
  className = '',
  animateDot = true,
}: BadgeProps) {
  const variantStyles = {
    green: 'bg-[#EBF7F0] text-[#0F5132] border-[#10B981]/25',
    lime: 'bg-[#F2FCE2] text-[#365314] border-[#84CC16]/30',
    light: 'bg-white/90 backdrop-blur-md text-[#0F5132] border-emerald-100 shadow-sm',
    outline: 'bg-transparent text-[#0F5132] border-[#0F5132]/30',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border ${variantStyles[variant]} ${className}`}
    >
      {animateDot && (
        <span className="relative flex h-2 w-2">
          <motion.span
            animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inline-flex h-full w-full rounded-full bg-emerald-500"
          />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
        </span>
      )}
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
