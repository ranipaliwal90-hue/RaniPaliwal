'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { TESTIMONIALS } from '@/data/testimonials';

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FAFDFA] via-[#F4FBF6] to-[#FAFDFA] relative overflow-hidden">
      <Container size="large">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="green" className="mb-3">
            Community Feedback
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F241A] tracking-tight">
            What Our Community Says
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3">
            Stories from members and clients who transformed their health with Coach Rani Paliwal.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="bg-white rounded-3xl p-8 border border-emerald-100/90 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between h-full relative"
              >
                <Quote className="w-10 h-10 text-emerald-100 absolute top-6 right-6 pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic mb-6">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-50 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#0F5132] text-lime-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0F241A] leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-700">
                      {item.program} • {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
