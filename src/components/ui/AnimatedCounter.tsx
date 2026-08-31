'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  isTextOnly?: boolean;
  textValue?: string;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  className = '',
  isTextOnly = false,
  textValue = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isTextOnly || !isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      setDisplayValue(Math.floor(easedProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration, isTextOnly]);

  if (isTextOnly) {
    return <span className={className}>{textValue}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}
