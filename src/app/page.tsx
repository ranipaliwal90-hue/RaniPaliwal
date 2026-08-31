import React from 'react';
import PageTransition from '@/components/animations/PageTransition';
import Hero from '@/components/home/Hero';
import StatsSection from '@/components/home/StatsSection';
import AboutPreview from '@/components/home/AboutPreview';
import Philosophy from '@/components/home/Philosophy';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import BecomeACoach from '@/components/home/BecomeACoach';
import Testimonials from '@/components/home/Testimonials';
import YouTubeVideos from '@/components/home/YouTubeVideos';
import BeingFitPreview from '@/components/home/BeingFitPreview';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <StatsSection />
      <AboutPreview />
      <Philosophy />
      <ProgramsPreview />
      <BecomeACoach />
      <Testimonials />
      <YouTubeVideos />
      <BeingFitPreview />
      <FinalCTA />
    </PageTransition>
  );
}
