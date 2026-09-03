'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Users, Award, ArrowRight, HeartHandshake } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { TEAM_GALLERY, COACH_PILLARS } from '@/data/coach';

export default function BecomeACoach() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FAFDFA] via-[#F1F8F4] to-[#FAFDFA] relative overflow-hidden">
      <Container size="large">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="green" icon={<HeartHandshake className="w-3.5 h-3.5" />}>
            Career & Mentorship
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F241A] tracking-tight mt-3">
            Become a Coach. <br />
            <span className="text-gradient-brand">Join Team Rani Paliwal</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Turn your passion for health, nutrition, and fitness into a fulfilling career. Receive direct mentorship from ASN Certified Coach Rani Paliwal and grow alongside a passionate team.
          </p>
        </div>

        {/* Team Photo Gallery Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-extrabold text-[#0F241A]">
                Our Team & Coaching Community
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Collaborative workshops, team fitness sessions, and community mentorship in Udaipur & online.
              </p>
            </div>
            <Button href="/become-a-coach" variant="secondary" size="sm" showArrow className="hidden sm:inline-flex shrink-0">
              View Team Mentorship
            </Button>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_GALLERY.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -5 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="bg-white rounded-[28px] overflow-hidden border border-emerald-100/90 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between h-full"
                >
                  {/* Team Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                    <span className="absolute top-4 left-4 text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#0F5132]/90 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/30">
                      {item.badge}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold text-lime-400 uppercase tracking-widest block mb-0.5">
                        {item.role}
                      </span>
                      <h4 className="text-lg font-bold leading-tight drop-shadow-sm">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-emerald-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F5132] group-hover:text-emerald-600 transition-colors">
                        Team Mentorship
                      </span>
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#0F5132] flex items-center justify-center group-hover:bg-[#0F5132] group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Coaching Pillars */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-emerald-100 shadow-xl mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="green" icon={<Award className="w-3.5 h-3.5" />}>
              Why Become a Coach
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F241A] mt-2">
              Empower Lives While Building Your Career
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COACH_PILLARS.map((pillar) => (
              <div key={pillar.number} className="p-6 rounded-2xl bg-[#F6FBF7] border border-emerald-100/80 hover:border-emerald-300 transition-colors">
                <span className="text-3xl font-black text-emerald-300 block mb-2">{pillar.number}</span>
                <h4 className="text-lg font-extrabold text-[#0F241A] mb-1">{pillar.title}</h4>
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">{pillar.subtitle}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
      </Container>
    </section>
  );
}
