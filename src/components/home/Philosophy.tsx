'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { PHILOSOPHY_CARDS } from '@/data/philosophy';

export default function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FAFDFA] via-[#F3FAF5] to-[#FAFDFA] relative overflow-hidden">
      <Container size="large">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="green" className="mb-3">
            Coaching Methodology
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F241A] tracking-tight">
            Transformation Starts With{' '}
            <br className="hidden sm:inline" />
            <span className="text-gradient-brand">
              The Right Approach.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Rani Paliwal&apos;s approach focuses on practical nutrition,
            sustainable lifestyle habits, and progressive fitness guidance.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_CARDS.map((card) => (
            <StaggerItem key={card.number}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 25,
                }}
                className="bg-white rounded-[28px] p-8 border border-emerald-100/90 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF7F0] text-[#0F5132] font-black text-lg flex items-center justify-center mb-6 group-hover:bg-[#0F5132] group-hover:text-lime-400 transition-colors duration-300">
                    {card.number}
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0F241A] mb-2 group-hover:text-[#0F5132] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
                    {card.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}