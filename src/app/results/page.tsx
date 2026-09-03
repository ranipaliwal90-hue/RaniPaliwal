import React from 'react';
import type { Metadata } from 'next';
import PageTransition from '@/components/animations/PageTransition';
import TransformationGallery from '@/components/results/TransformationGallery';

export const metadata: Metadata = {
  title: 'Transformation Gallery & Results | Coach Rani Paliwal',
  description:
    'Explore authentic before and after weight loss, weight gain, and fitness transformations of clients coached by ASN Certified Nutritionist Rani Paliwal.',
};

export default function ResultsPage() {
  return (
    <PageTransition>
      <TransformationGallery />
    </PageTransition>
  );
}