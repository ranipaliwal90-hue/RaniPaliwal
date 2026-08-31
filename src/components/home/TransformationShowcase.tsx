'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { TRANSFORMATIONS } from '@/data/transformations';

export default function TransformationShowcase() {
  const showcaseItems = TRANSFORMATIONS.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFDFA] via-[#F1F8F4] to-[#FAFDFA] py-20 lg:py-28">
      
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-lime-100/40 blur-3xl" />

      <Container size="large">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge
            variant="green"
            icon={<Sparkles className="mb-0 h-3.5 w-3.5" />}
          >
            Real Results
          </Badge>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F241A] sm:text-4xl lg:text-5xl">
            Real People.{' '}
            <span className="text-gradient-brand">
              Real Transformations.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Small changes, consistent habits, and the right expert guidance
            create powerful, lasting results.
          </p>
        </motion.div>

        {/* ================= TRANSFORMATION CARDS ================= */}
        <StaggerContainer className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">

          {showcaseItems.map((item) => (
            <StaggerItem key={item.id}>

              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-emerald-100/90 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >

                {/* ================= IMAGE ================= */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">

                  <Image
                    src={item.imageAfter}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority={false}
                  />

                  {/* Soft Background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Duration Badge */}
                  <span className="absolute left-4 top-4 rounded-full border border-emerald-400/30 bg-[#0F5132]/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
                    {item.duration}
                  </span>

                  {/* Image Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">

                    <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-lime-400">
                      {item.category}
                    </span>

                    <h3 className="text-xl font-bold leading-tight drop-shadow-sm">
                      {item.title}
                    </h3>

                  </div>

                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex flex-grow flex-col justify-between p-6">

                  <div>

                    <p className="mb-2 text-xs font-semibold text-emerald-800">
                      {item.subtitle}
                    </p>

                    <p className="mb-4 line-clamp-3 text-sm italic leading-relaxed text-gray-600">
                      &quot;{item.quote}&quot;
                    </p>

                  </div>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between border-t border-emerald-50 pt-4">

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">

                      {item.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={`${tag}-${idx}`}
                          className="rounded-md bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-900"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                    {/* Arrow */}
                    <Link
                      href="/transformations"
                      aria-label={`View ${item.title} transformation`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#0F5132] transition-all duration-300 group-hover:bg-[#0F5132] group-hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                  </div>

                </div>

              </motion.div>

            </StaggerItem>
          ))}

        </StaggerContainer>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="text-center"
        >
          <Button
            href="/transformations"
            variant="primary"
            size="lg"
            showArrow
          >
            Explore All Transformations
          </Button>
        </motion.div>

      </Container>
    </section>
  );
}