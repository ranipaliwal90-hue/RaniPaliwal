import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  HeartHandshake,
  Users,
} from 'lucide-react';

import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { TEAM_GALLERY, COACH_PILLARS } from '@/data/coach';

export const metadata: Metadata = {
  title: 'Become a Coach | Join Team Rani Paliwal',
  description:
    'Turn your passion for health and fitness into a rewarding career. Get mentored by ASN Certified Coach Rani Paliwal and join our passionate team in Udaipur & online.',
};

export default function BecomeACoachPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden bg-radial-glow">
        <LeafDecoration size="lg" className="top-10 left-4" />

        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-7 flex flex-col items-start">
              <Badge
                variant="green"
                icon={<HeartHandshake className="w-3.5 h-3.5" />}
              >
                Team Mentorship & Careers
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F241A] tracking-tight mt-4 mb-4">
                Become a Coach. <br />
                <span className="text-gradient-brand">
                  Join Team Rani Paliwal
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-extrabold text-emerald-800 mb-4">
                Udaipur & Remote Worldwide
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Empower others, build a rewarding career, and learn the proven
                systems behind 10,000+ client transformations. Receive 1-on-1
                guidance, clinical nutrition strategies, and team support
                directly from Coach Rani Paliwal.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F5132] bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>Passionate Team Community</span>
                </div>
              </div>

              <Button
                href="#apply-form"
                variant="primary"
                size="lg"
                showArrow
              >
                Apply to Join Our Team
              </Button>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-white">
                <Image
                  src="/ranigroup.jpg"
                  alt="Coach Rani Paliwal & Team Mentorship"
                  width={600}
                  height={500}
                  className="w-full h-[440px] object-cover"
                  priority
                />

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Team Showcase & Gallery */}
      <section className="py-20 bg-white">
        <Container size="large">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="green" className="mb-3">
              Our Community
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F241A]">
              Life with Team Rani Paliwal
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mt-3">
              Here is a glimpse of our trainers, nutritionists
              and wellness mentors in action.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_GALLERY.map((item) => (
              <StaggerItem key={item.id}>

                <div className="bg-[#F6FBF7] rounded-[28px] overflow-hidden border border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">

                  {/* UPDATED IMAGE HEIGHT */}
                  <div className="relative h-[450px] sm:h-[500px] w-full overflow-hidden bg-gray-100">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain object-center hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

                    {/* Badge */}
                    <span className="absolute top-4 left-4 text-xs font-extrabold uppercase tracking-wider text-white bg-[#0F5132]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-400/30">
                      {item.badge}
                    </span>

                    {/* Image Content */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-bold text-lime-400 uppercase tracking-widest block">
                        {item.role}
                      </span>

                      <h3 className="text-xl font-bold drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>

                  </div>

                  {/* Description */}
                  <div className="p-6">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>

              </StaggerItem>
            ))}
          </StaggerContainer>

        </Container>
      </section>

      {/* Pillars of Mentorship */}
      <section className="py-20 bg-gradient-to-b from-[#FAFDFA] to-[#F1F8F4]">
        <Container size="large">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="green" className="mb-3">
              Mentorship Framework
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F241A]">
              What You Get As A Coach
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COACH_PILLARS.map((pillar) => (
              <StaggerItem key={pillar.number}>

                <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">

                  <div>
                    <span className="text-4xl font-black text-emerald-300 block mb-3">
                      {pillar.number}
                    </span>

                    <h3 className="text-xl font-bold text-[#0F241A] mb-1">
                      {pillar.title}
                    </h3>

                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
                      {pillar.subtitle}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                </div>

              </StaggerItem>
            ))}
          </StaggerContainer>

        </Container>
      </section>
    </PageTransition>
  );
}