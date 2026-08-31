'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <LeafDecoration size="md" className="top-12 right-6 opacity-30" />

      <Container size="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Rani Image Slide from Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft decorative background frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-lime-100 rounded-[34px] rotate-2 -z-10" />

              <div className="relative rounded-[28px] overflow-hidden border-2 border-emerald-100 shadow-xl bg-white">
                <Image
                  src="/rani.png.jpg"
                  alt="Coach Rani Paliwal Health & Wellness Consultant"
                  width={550}
                  height={680}
                  className="w-full h-[450px] sm:h-[520px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Floating badge over image */}
                <div className="absolute bottom-6 right-6 glass-card p-4 rounded-2xl shadow-lg border border-white/80">
                  <p className="text-2xl font-black text-[#0F5132]">12+ Years</p>
                  <p className="text-xs font-bold text-gray-700">Dedicated Coaching</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content Slide from Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <Badge variant="green" icon={<Award className="w-3.5 h-3.5" />}>
              Certified Coaching Excellence
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F241A] tracking-tight mt-4 mb-3">
              Meet Rani Paliwal
            </h2>

            <p className="text-lg font-bold text-emerald-700 mb-6">
              Your Partner in Health, Fitness & Transformation
            </p>

            <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed mb-6">
              Rani Paliwal is an ASN Certified Coach and Health & Wellness Consultant with 12+ years of experience helping people build healthier lifestyles through personalized nutrition, fitness, and wellness guidance.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              {[
                'ASN Certified Nutritionist',
                '10,000+ Verified Transformations',
                'Personalized Meal & Workout Plans',
                'Udaipur & Worldwide Remote Support',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm font-semibold text-[#0F5132]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Highlight */}
            <div className="flex items-center gap-8 mb-8 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 w-full sm:w-auto">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#0F5132]">12+</span>
                <p className="text-xs font-semibold text-emerald-800">Years Experience</p>
              </div>
              <div className="h-8 w-px bg-emerald-200" />
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#0F5132]">10,000+</span>
                <p className="text-xs font-semibold text-emerald-800 font-medium">Transformations</p>
              </div>
            </div>

            <Button href="/about" variant="primary" size="lg" showArrow>
              Know My Story
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
