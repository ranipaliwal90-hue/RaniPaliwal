'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

import Container from '@/components/ui/Container';

const PHILOSOPHY_CARDS = [
  {
    image: '/result/Screenshot 2026-09-01 195909.png',
    title: 'Weight Loss',
    subtitle: 'Sustainable Weight Management',
    description:
      'A practical and sustainable approach focused on healthy fat loss, balanced nutrition, and lifestyle habits that can be maintained long term.',
  },
  {
    image: '/result/76b4b0fa-325f-4997-aa50-bcd51e150818.png',
    title: 'Healthy Weight Gain',
    subtitle: 'Strength & Nutrition',
    description:
      'A balanced nutrition and strength-focused approach designed to support healthy weight gain, better energy, and improved overall fitness.',
  },
  {
    image: '/nutrition1.jpg',
    title: 'Nutrition Coaching',
    subtitle: 'Personalized Nutrition',
    description:
      'Personalized nutrition guidance built around your lifestyle, goals, food preferences, and sustainable everyday habits.',
  },
];

export default function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFDFA] via-[#F3FAF5] to-[#FAFDFA] py-16 sm:py-20 lg:py-24">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-lime-100/30 blur-3xl" />

      <Container size="large">

        {/* ==============================
            HEADER
        =============================== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2"
          >
            <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-700">
              Coaching Methodology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl font-extrabold tracking-[-0.04em] text-[#0F241A] sm:text-4xl lg:text-5xl"
          >
            Transformation Starts With{' '}
            <span className="text-gradient-brand">
              The Right Approach.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base"
          >
            Rani Paliwal&apos;s approach focuses on practical nutrition,
            sustainable lifestyle habits, and progressive fitness guidance.
          </motion.p>

        </div>

        {/* ==============================
            CARDS
        =============================== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {PHILOSOPHY_CARDS.map((card, index) => (

            <motion.article
              key={card.title}
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
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                    }
              }
              className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-emerald-100 bg-white shadow-[0_12px_35px_rgba(15,81,50,0.08)] transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_18px_45px_rgba(15,81,50,0.14)]"
            >

              {/* ==============================
                  IMAGE
              =============================== */}
              <div className="w-full bg-white p-2">

                <div className="relative h-[240px] w-full overflow-hidden rounded-[20px] bg-white sm:h-[250px] lg:h-[240px]">

                  <Image
                    src={card.image}
                    alt={`${card.title} coaching`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                </div>

              </div>

              {/* ==============================
                  CONTENT
              =============================== */}
              <div className="flex flex-1 flex-col bg-white px-5 pb-6 pt-5 text-center sm:px-6">

                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8A765F]">
                  Coaching Program
                </p>

                <h3 className="mt-1 text-xl font-extrabold tracking-tight text-[#0F241A] sm:text-2xl">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm font-bold text-[#0F5132]">
                  {card.subtitle}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>

              </div>

            </motion.article>

          ))}

        </div>

        {/* ==============================
            SEE PROGRAMS BUTTON
        =============================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <Link
            href="/programs"
            className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#8BC52B] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(139,197,43,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#79AF20] hover:shadow-[0_14px_30px_rgba(139,197,43,0.28)] sm:px-9 sm:text-base"
          >
            <span>View All Services</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>

      </Container>
    </section>
  );
}