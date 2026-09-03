'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import Container from '@/components/ui/Container';
import { RESULTS } from '@/data/results';

export default function ResultsPreview() {
  const previewResults = RESULTS.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-lime-100/30 blur-3xl" />

      <Container size="large">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">

          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-emerald-600" />

            <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-700">
              Real People. Real Results.
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
            }}
            className="text-3xl font-extrabold tracking-[-0.04em] text-[#0F241A] sm:text-4xl lg:text-5xl"
          >
            Real{' '}
            <span className="text-gradient-brand">
              Transformations
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base"
          >
            Real journeys, real consistency, and real results.
            See how personalized fitness and nutrition coaching
            can create lasting transformations.
          </motion.p>

        </div>

        {/* =====================================================
            ONLY 3 CARDS
        ====================================================== */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {previewResults.map((result, index) => (

            <motion.article
              key={result.image}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-[22px] border border-emerald-100 bg-white shadow-[0_10px_28px_rgba(15,81,50,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_16px_38px_rgba(15,81,50,0.12)]"
            >

              {/* =================================================
                  IMAGE
              ================================================== */}
              <div className="relative overflow-hidden bg-white">

                <div className="relative aspect-[1.5] w-full bg-white">

                  <Image
                    src={result.image}
                    alt={`${result.name} transformation`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}
              <div className="bg-white px-4 pb-5 pt-4 text-center">

                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#8A765F]">
                  Success Story
                </p>

                <h3 className="mt-1 text-lg font-extrabold uppercase tracking-tight text-[#0F241A] sm:text-xl">
                  {result.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#0F5132]">
                  {result.title}
                </p>

                {/* Result */}
                {result.result && (
                  <div className="mt-3 inline-flex items-center rounded-full border border-emerald-100 bg-white px-4 py-1.5 shadow-sm">

                    <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#0F5132]">
                      {result.result}
                    </span>

                  </div>
                )}

              </div>

            </motion.article>

          ))}

        </div>

        {/* =====================================================
            SEE ALL RESULTS BUTTON
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-8 flex justify-center sm:mt-10"
        >

          <Link
            href="/results"
            className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#8BC52B] px-6 py-3 text-sm font-extrabold text-white shadow-[0_8px_22px_rgba(139,197,43,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#79AF20] hover:shadow-[0_12px_28px_rgba(139,197,43,0.26)] sm:px-8 sm:text-base"
          >

            <span>
              See All Results
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>

          </Link>

        </motion.div>

      </Container>
    </section>
  );
}