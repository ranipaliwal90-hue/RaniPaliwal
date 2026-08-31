'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';
import FadeUp from '@/components/animations/FadeUp';

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#EBF7F0] via-[#F4FBF6] to-[#E2F3E9] border-t border-emerald-100">
      <LeafDecoration size="lg" className="top-4 left-6" />
      <LeafDecoration size="md" variant="bottom-left" className="bottom-6 right-8" />

      <Container size="normal" className="relative z-10 text-center">
        <FadeUp>
          <Badge variant="green" className="mb-4">
            Start Today
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#0F241A] tracking-tight max-w-4xl mx-auto leading-tight mb-6">
            Your Healthier, Stronger Life <br className="hidden sm:inline" />
            <span className="text-gradient-brand">Starts Right Here.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#4B6358] max-w-2xl mx-auto leading-relaxed mb-10">
            Take the first step toward a healthier, energizing, and sustainable active lifestyle with personalized coaching by Coach Rani Paliwal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button href="/contact" variant="primary" size="lg" showArrow className="w-full sm:w-auto">
              Book a Consultation
            </Button>
            <Button href="/programs" variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Programs
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
