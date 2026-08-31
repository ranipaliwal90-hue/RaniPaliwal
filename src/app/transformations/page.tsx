'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';
import FinalCTA from '@/components/home/FinalCTA';

import {
  TRANSFORMATIONS,
  Transformation,
} from '@/data/transformations';

export default function TransformationsPage() {
  const [activeTab, setActiveTab] = useState<
    'All' | 'Weight Loss' | 'Fitness' | 'Lifestyle'
  >('All');

  const categories: Array<
    'All' | 'Weight Loss' | 'Fitness' | 'Lifestyle'
  > = [
    'All',
    'Weight Loss',
    'Fitness',
    'Lifestyle',
  ];

  const filteredTransformations =
    activeTab === 'All'
      ? TRANSFORMATIONS
      : TRANSFORMATIONS.filter(
          (item) => item.category === activeTab
        );

  return (
    <PageTransition>

      {/* =========================================================
          HEADER / HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-radial-glow pb-16 pt-28 lg:pb-20 lg:pt-36">

        <LeafDecoration
          size="lg"
          className="left-4 top-10"
        />

        <Container
          size="large"
          className="text-center"
        >

          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Badge
              variant="green"
              icon={
                <Sparkles className="h-3.5 w-3.5" />
              }
            >
              Real Results
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#0F241A] sm:text-5xl lg:text-6xl"
          >
            Real People.{' '}
            <span className="text-gradient-brand">
              Real Transformations.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-xl"
          >
            Consistent habits, customized nutrition plans,
            and expert coaching create sustainable health
            outcomes.
          </motion.p>

          {/* =====================================================
              FILTER TABS
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {categories.map((category) => {
              const isActive = activeTab === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveTab(category)}
                  className={`relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'border border-emerald-100 bg-white text-gray-600 hover:bg-emerald-50 hover:text-[#0F5132]'
                  }`}
                >

                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 z-0 rounded-full bg-[#0F5132]"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 whitespace-nowrap">
                    {category}
                  </span>

                </button>
              );
            })}
          </motion.div>

        </Container>
      </section>

      {/* =========================================================
          TRANSFORMATIONS GALLERY
      ========================================================== */}
      <section className="min-h-[600px] bg-white py-16">

        <Container size="large">

          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >

            <AnimatePresence mode="popLayout">

              {filteredTransformations.map(
                (item: Transformation) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-emerald-100 bg-[#F6FBF7] shadow-md transition-shadow duration-300 hover:shadow-2xl"
                  >

                    {/* =================================================
                        FULL IMAGE
                    ================================================== */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">

                      <Image
                        src={item.imageAfter}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />

                      {/* Gradient Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-90" />

                      {/* =================================================
                          TOP BADGES
                      ================================================== */}
                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">

                        <span className="whitespace-nowrap rounded-full border border-emerald-300/30 bg-[#0F5132]/90 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
                          {item.duration}
                        </span>

                        <span className="whitespace-nowrap rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-bold text-lime-400 backdrop-blur-md">
                          {item.category}
                        </span>

                      </div>

                      {/* =================================================
                          IMAGE TEXT
                      ================================================== */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">

                        <h3 className="text-xl font-bold leading-tight drop-shadow-sm">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-emerald-200">
                          {item.subtitle}
                        </p>

                      </div>

                    </div>

                    {/* =================================================
                        CARD CONTENT
                    ================================================== */}
                    <div className="flex flex-grow flex-col justify-between p-6">

                      <div>

                        {/* Story */}
                        <p className="mb-5 text-sm leading-relaxed text-gray-600">
                          {item.story}
                        </p>

                        {/* Quote */}
                        <div className="mb-6 rounded-2xl border border-emerald-100 bg-white p-4">

                          <Quote className="mb-2 h-5 w-5 text-emerald-300" />

                          <p className="text-xs font-medium italic leading-relaxed text-gray-700">
                            &quot;{item.quote}&quot;
                          </p>

                        </div>

                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 border-t border-emerald-200/60 pt-4">

                        {item.tags.map((tag, index) => (
                          <span
                            key={`${item.id}-${tag}-${index}`}
                            className="rounded-md bg-emerald-100/70 px-2.5 py-1 text-[10px] font-bold text-emerald-900"
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                    </div>

                  </motion.article>
                )
              )}

            </AnimatePresence>

          </motion.div>

          {/* =========================================================
              EMPTY STATE
          ========================================================== */}
          {filteredTransformations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <p className="text-gray-500">
                No transformations found.
              </p>
            </motion.div>
          )}

        </Container>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <FinalCTA />

    </PageTransition>
  );
}