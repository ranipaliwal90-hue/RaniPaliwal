import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Scale,
  Utensils,
  Dumbbell,
  Globe,
  Users,
  HeartPulse,
  CheckCircle2,
} from 'lucide-react';

import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';
import FadeUp from '@/components/animations/FadeUp';
import { PROGRAMS, Program } from '@/data/programs';

export const metadata: Metadata = {
  title: 'Coaching Programs | Weight Loss, Nutrition & Personal Training',
  description:
    'Explore personalized fitness and nutrition programs by Rani Paliwal including Weight Management, Nutrition Coaching, Personal Training, Online Coaching, and Lifestyle & Wellness Coaching in Udaipur.',
};

export default function ProgramsPage() {
  const getIcon = (iconName: Program['iconName']) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-8 h-8" />;

      case 'Utensils':
        return <Utensils className="w-8 h-8" />;

      case 'Dumbbell':
        return <Dumbbell className="w-8 h-8" />;

      case 'Globe':
        return <Globe className="w-8 h-8" />;

      case 'Users':
        return <Users className="w-8 h-8" />;

      case 'HeartPulse':
        return <HeartPulse className="w-8 h-8" />;

      default:
        return <Dumbbell className="w-8 h-8" />;
    }
  };

  return (
    <PageTransition>
      {/* =========================
          PAGE HEADER
      ========================== */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden bg-radial-glow">
        <LeafDecoration size="lg" className="top-10 left-4" />

        <Container size="large" className="text-center">
          <Badge variant="green" className="mb-4">
            Customized Solutions
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F241A] tracking-tight max-w-4xl mx-auto">
            Programs Designed Around{' '}
            <span className="text-gradient-brand">You</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Personalized fitness, nutrition, and wellness guidance designed
            around your goals, routine, and lifestyle.
          </p>
        </Container>
      </section>

      {/* =========================
          PROGRAMS LIST
      ========================== */}
      <section className="py-16 bg-white">
        <Container size="large" className="space-y-20">
          {PROGRAMS.map((program: Program, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-32"
              >
                <FadeUp>
                  <div
                    className={`
                      grid
                      grid-cols-1
                      lg:grid-cols-12
                      gap-10
                      lg:gap-12
                      items-center
                      p-6
                      sm:p-8
                      lg:p-10
                      rounded-[32px]
                      bg-[#F6FBF7]
                      border
                      border-emerald-100
                      shadow-md
                      hover:shadow-xl
                      transition-shadow
                      duration-300
                    `}
                  >
                    {/* =========================
                        CONTENT COLUMN
                    ========================== */}
                    <div
                      className={`
                        lg:col-span-7
                        ${!isEven ? 'lg:order-2' : 'lg:order-1'}
                      `}
                    >
                      {/* Icon + Title */}
                      <div className="flex items-start gap-3 mb-5">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0F5132] text-lime-400 flex items-center justify-center shadow-md">
                          {getIcon(program.iconName)}
                        </div>

                        <div className="min-w-0">
                          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            {program.badge}
                          </span>

                          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F241A] mt-2">
                            {program.title}
                          </h2>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="text-base font-bold text-emerald-800 mb-4">
                        {program.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-base text-gray-600 leading-relaxed mb-6">
                        {program.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        <p className="text-xs font-extrabold text-gray-800 uppercase tracking-wider mb-3">
                          Program Features:
                        </p>

                        {program.features.map(
                          (feat: string, fIdx: number) => (
                            <div
                              key={fIdx}
                              className="flex items-start gap-3 text-sm font-semibold text-[#0F5132]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />

                              <span>{feat}</span>
                            </div>
                          )
                        )}
                      </div>

                      {/* Ideal For */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100 mb-8">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                          Ideal For:
                        </p>

                        <p className="text-sm font-semibold text-gray-800 mt-1 leading-relaxed">
                          {program.idealFor}
                        </p>
                      </div>

                      {/* Bottom CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-emerald-200/60">
                        <div className="text-sm font-bold text-emerald-900">
                          <span>Investment: </span>

                          <span className="inline-block mt-1 sm:mt-0 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200/60">
                            {program.pricingText}
                          </span>
                        </div>

                        <Button
                          href="/contact"
                          variant="primary"
                          size="md"
                          showArrow
                        >
                          Inquire for {program.title}
                        </Button>
                      </div>
                    </div>

                    {/* =========================
                        IMAGE COLUMN
                    ========================== */}
                    <div
                      className={`
                        lg:col-span-5
                        ${!isEven ? 'lg:order-1' : 'lg:order-2'}
                      `}
                    >
                      <div
                        className="
                          relative
                          w-full
                          min-h-[320px]
                          sm:min-h-[400px]
                          lg:min-h-[460px]
                          rounded-[24px]
                          overflow-hidden
                          border-2
                          border-white
                          shadow-xl
                          bg-white
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 1024px) 90vw,
                            45vw
                          "
                          className="
                            object-contain
                            p-2
                            sm:p-3
                            transition-transform
                            duration-700
                            hover:scale-[1.02]
                          "
                        />
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            );
          })}
        </Container>
      </section>
    </PageTransition>
  );
}