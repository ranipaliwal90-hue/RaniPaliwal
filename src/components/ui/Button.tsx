'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed group';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5 font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-[#0F5132] text-white hover:bg-[#0D4028] shadow-md hover:shadow-lg shadow-emerald-950/15 border border-[#10B981]/20',
    secondary:
      'bg-[#EBF7F0] text-[#0F5132] hover:bg-[#D8F0E2] border border-[#10B981]/30 font-semibold shadow-xs hover:shadow-md',
    outline:
      'bg-transparent text-[#0F5132] border-2 border-[#0F5132] hover:bg-[#0F5132] hover:text-white shadow-xs hover:shadow-md',
    accent:
      'bg-gradient-to-r from-emerald-600 to-lime-600 text-white hover:from-emerald-700 hover:to-lime-700 shadow-md hover:shadow-lg shadow-emerald-500/20',
    white:
      'bg-white text-[#0F5132] hover:bg-emerald-50 shadow-sm hover:shadow-md border border-emerald-100 font-semibold',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const whileHoverState: TargetAndTransition | undefined = shouldReduceMotion || disabled
    ? undefined
    : { y: -2, scale: 1.01 };

  const whileTapState: TargetAndTransition | undefined = shouldReduceMotion || disabled
    ? undefined
    : { scale: 0.98 };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <motion.span
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={whileHoverState}
        whileTap={whileTapState}
        className="inline-block"
      >
        <Link href={href} className={combinedClasses} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={whileHoverState}
      whileTap={whileTapState}
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
