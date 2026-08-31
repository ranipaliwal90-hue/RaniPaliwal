'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Award, MessageSquareHeart, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import Badge from '@/components/ui/Badge';

export default function WhyBeingFit() {
  const pillars = [
    {
      icon: <UserCheck className="w-7 h-7 text-emerald-600" />,
      title: 'Personalized Guidance',
      description:
        'Every body is unique. We craft meal strategies and training programs tailored specifically to your metabolic rate, lifestyle, and goals.',
    },
    {
      icon: <Award className="w-7 h-7 text-emerald-600" />,
      title: 'Expert Coaching',
      description:
        'Guided by ASN Certified Coach Rani Paliwal with over 12 years of hands-on expertise in sustainable fitness and clinical nutrition.',
    },
    {
      icon: <MessageSquareHeart className="w-7 h-7 text-emerald-600" />,
      title: 'Real-Time Support',
      description:
        'Continuous accountability through regular progress audits, habit tracking, and direct WhatsApp support to keep you motivated.',
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-emerald-600" />,
      title: 'Sustainable Results',
      description:
        'No extreme starvation diets or unsustainable routines. We focus on long-term lifestyle habits that deliver lasting health transformations.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFDFA] via-[#F3FAF5] to-[#FAFDFA] relative overflow-hidden">
      <Container size="large">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="green" className="mb-3">
            Why Being Fit
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F241A] tracking-tight">
            More Than Fitness. <br className="hidden sm:inline" />
            <span className="text-gradient-brand">A Healthier Way of Life.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            Our holistic framework integrates science-backed nutrition, functional training, and constant coaching support.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl p-8 border border-emerald-100/80 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col items-start h-full group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:bg-[#0F5132] group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                  <div className="group-hover:text-lime-400 transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0F241A] mb-3 group-hover:text-[#0F5132] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
