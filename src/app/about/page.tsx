import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Award, CheckCircle2, Heart, Shield, Sparkles, Target, Zap } from 'lucide-react';
import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';
import FadeUp from '@/components/animations/FadeUp';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import Philosophy from '@/components/home/Philosophy';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Meet Rani Paliwal | Health, Fitness & Nutrition Coach',
  description:
    'Learn about Coach Rani Paliwal — 12+ years experience in ASN Certified nutrition, personal training, and holistic lifestyle coaching in Udaipur, Rajasthan.',
};

export default function AboutPage() {
  const expertise = [
    {
      title: 'Personalized Nutrition',
      desc: 'Personalized nutrition guidance adapted to individual goals, food preferences, daily routines, and lifestyle needs.',
    },

    {
      title: 'Weight Management',
      desc: 'Practical guidance focused on healthier eating habits, weight management, activity, and sustainable lifestyle changes.',
    },

    {
      title: 'Fitness & Wellness',
      desc: 'Guidance around fitness, nutrition, daily routines, and building consistent habits for better overall wellbeing.',
    },

    {
      title: 'Online & In-Person Coaching',
      desc: 'Coaching support through Being Fit in Udaipur along with virtual nutrition and wellness guidance for clients remotely.',
    },
  ];

  const journey = [
  {
    step: '01',
    title: 'Passion For Transformation',
    desc: 'Started her coaching journey in Udaipur with a focus on helping individuals build healthier routines through fitness, nutrition, and lifestyle guidance.',
  },

  {
    step: '02',
    title: 'Nutrition & Wellness Coaching',
    desc: 'Developed a coaching approach around practical nutrition, healthy lifestyle habits, weight management, and personalized wellness guidance.',
  },

  {
    step: '03',
    title: 'Being Fit, Udaipur',
    desc: 'Built her coaching presence through Being Fit in Udaipur, bringing together fitness, nutrition, and wellness support for the local community.',
  },

  {
    step: '04',
    title: 'Growing Coaching Community',
    desc: 'Continues to support individuals through personalized coaching, fitness activities, nutrition guidance, and online wellness support.',
  },
];

  return (
    <PageTransition>
      {/* About Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden bg-radial-glow">
        <LeafDecoration size="lg" className="top-10 left-4" />
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <Badge variant="green" icon={<Award className="w-3.5 h-3.5" />}>
                ASN Certified Coach
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F241A] tracking-tight mt-4 mb-6">
                Meet <span className="text-gradient-brand">Rani Paliwal</span>
              </h1>
              <p className="text-lg sm:text-xl font-extrabold text-emerald-800 mb-4">
                Health & Wellness Consultant • 12+ Years Experience
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Welcome! I am Rani Paliwal, an ASN Certified Coach based in Udaipur, Rajasthan. Over the past 12+ years, I have empowered more than 10,000 individuals to build a healthier, stronger, and more confident lifestyle through custom nutrition and functional fitness.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F5132] bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>ASN Certified Coach</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F5132] bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>10,000+ Client Transformations</span>
                </div>
              </div>

              <Button href="/contact" variant="primary" size="lg" showArrow>
                Book a 1-on-1 Consultation
              </Button>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-white max-w-md mx-auto">
                <Image
                  src="/rani2.jpg"
                  alt="Coach Rani Paliwal Portrait"
                  width={600}
                  height={720}
                  className="w-full h-[480px] object-cover object-top"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border border-white/90">
                  <p className="text-sm font-extrabold text-[#0F5132]">Rani Paliwal</p>
                  <p className="text-xs text-gray-600 font-medium">ASN Certified Coach • Udaipur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy Component */}
      <Philosophy />

      {/* Expertise */}
      <section className="py-20 bg-white">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="green" className="mb-3">
              Professional Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F241A]">
              My Core Specializations
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="p-8 rounded-[28px] bg-[#F6FBF7] border border-emerald-100 hover:border-emerald-300 transition-colors flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F241A] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-[#FAFDFA] to-[#F1F8F4]">
        <Container size="normal">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="green" className="mb-3">
              The Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F241A]">
              Coaching Milestones & Impact
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-200 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
            {journey.map((step, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="relative group">
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0F5132] border-4 border-white shadow-md group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">Step {step.step}</span>
                  <h3 className="text-xl font-extrabold text-[#0F241A] mb-2">{step.title}</h3>
                  <p className="text-base text-gray-600 max-w-xl leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </PageTransition>
  );
}
