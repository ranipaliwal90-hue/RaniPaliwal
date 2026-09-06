import React from 'react';

import PageTransition from '@/components/animations/PageTransition';
import Hero from '@/components/home/Hero';
import StatsSection from '@/components/home/StatsSection';
import Philosophy from '@/components/home/Philosophy';
import YouTubeVideos from '@/components/home/YouTubeVideos';
import ResultsPreview from '@/components/home/ResultsPreview';
import BeingFitPreview from '@/components/home/BeingFitPreview';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <StatsSection />
      <ResultsPreview />
      <YouTubeVideos />
      <Philosophy />
      <BeingFitPreview />
      <FinalCTA />
    </PageTransition>
  );
}