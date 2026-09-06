'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation, Dumbbell, Flame, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { CLUB_INFO } from '@/data/club';

export default function BeingFitPreview() {
  const clubHighlights = [
    'Strength & Weight Training',
    'Personal 1-on-1 Supervision',
    'Custom Weight Management',
    'Yoga & Wellness Corner',
    'Holistic Lifestyle Coaching',
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <Container size="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Being Fit Associated Club Info */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-xl bg-white p-1 shadow-sm border border-emerald-100 overflow-hidden">
                <Image
                  src="/being.png"
                  alt="Being Fit Brand Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <Badge variant="green">
                Associated Fitness Club
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F241A] tracking-tight mb-2">
             Being fit Nutriton And Fitness Club
            </h2>

            <p className="text-lg font-bold text-emerald-700 mb-4">
              {CLUB_INFO.subtitle}
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Being Fit is the fitness and nutrition club associated with <strong>Rani Paliwal</strong>, providing an empowering physical environment for strength training, group fitness, and healthier lifestyle practices in Udaipur.
            </p>

            {/* Location Pill */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 text-[#0F5132] font-semibold text-sm mb-8 border border-emerald-100">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{CLUB_INFO.address}</span>
            </div>

            {/* Feature Cards Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              {clubHighlights.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6FBF7] border border-emerald-100/70 hover:border-emerald-300 transition-colors">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-[#0F241A]">
                      {feature}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/being-fit" variant="primary" size="md" showArrow>
                Explore Being Fit
              </Button>
              <a
                href={`tel:${CLUB_INFO.phone}`}
                className="px-5 py-2.5 rounded-full text-sm font-bold bg-emerald-50 text-[#0F5132] hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                Call Now
              </a>
              <a
                href={CLUB_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Column: Gym Image & Floating Card */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-300/30 to-lime-200/30 rounded-[36px] blur-2xl -z-10" />

              <div className="relative rounded-[28px] overflow-hidden border-4 border-white shadow-2xl bg-white">
                <Image
                  src="/being2.jpg"
                  alt="Being Fit Associated Club Facility"
                  width={650}
                  height={520}
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl shadow-xl border border-white/90 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0F5132] text-lime-400 flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-gray-900">Associated Club with Rani Paliwal</p>
                      <p className="text-xs text-emerald-700 font-medium">Being Fit, Near Shrinath Hospital, Navratna Complex, Pulla Bhuwana, Mahaveer Colony Park, Udaipur, Rajasthan</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
