'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { STATS } from '@/data/stats';

export default function StatsSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#0F5132] via-[#115E3B] to-[#0D4028] text-white relative overflow-hidden shadow-xl">
      {/* Background organic pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <Container size="large">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-emerald-600/40">
          {STATS.map((stat, idx) => (
            <StaggerItem
              key={stat.id}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? 'pt-6 md:pt-0' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-lime-400 mb-1 flex items-center justify-center">
                <AnimatedCounter
                  value={stat.numericValue}
                  suffix={stat.suffix}
                  isTextOnly={stat.isTextOnly}
                  textValue={stat.textValue}
                  duration={2.2}
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 font-normal max-w-[180px]">
                {stat.sublabel}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
