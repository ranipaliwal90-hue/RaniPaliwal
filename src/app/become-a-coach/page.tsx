import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Users,
  CheckCircle2,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Laptop,
  TrendingUp,
} from 'lucide-react';

import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import LeafDecoration from '@/components/ui/LeafDecoration';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';

import ApplyCoachButton from '@/components/coach/ApplyCoachButton';

import { TEAM_GALLERY, COACH_PILLARS } from '@/data/coach';

export const metadata: Metadata = {
  title: 'Become a Coach | Join Team Rani Paliwal',
  description:
    'Turn your passion for health and fitness into a rewarding career. Learn, grow and build your wellness career with Coach Rani Paliwal.',
};

export default function BecomeACoachPage() {
  return (
    <PageTransition>
      <main className="overflow-hidden bg-[#FAFDFA]">

        {/* =====================================================
            SLIDER ANIMATION
        ===================================================== */}
        <style>{`
          @keyframes teamGallerySlide {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .team-gallery-track {
            animation: teamGallerySlide 45s linear infinite;
            will-change: transform;
          }

          @media (max-width: 640px) {
            .team-gallery-track {
              animation-duration: 35s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .team-gallery-track {
              animation: none;
            }
          }
        `}</style>


        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="relative overflow-hidden bg-radial-glow pb-16 pt-28 lg:pb-24 lg:pt-36">

          <LeafDecoration
            size="lg"
            className="left-4 top-10"
          />

          <Container size="large">

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

              {/* LEFT CONTENT */}
              <div className="flex flex-col items-start lg:col-span-7">

                <h1 className="mt-4 mb-4 text-4xl font-extrabold tracking-tight text-[#0F241A] sm:text-5xl lg:text-6xl">
                  Become a Coach.
                  <br />

                  <span className="text-gradient-brand">
                    Join Team Rani Paliwal
                  </span>
                </h1>

                <p className="mb-3 text-sm font-bold text-emerald-700 sm:text-base">
                  Udaipur & Remote Worldwide • Since 2012
                </p>

                <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Empower others, build a rewarding career, and learn the
                  practical systems behind fitness, nutrition and wellness
                  coaching. Receive mentorship, guidance and team support
                  directly through Team Rani Paliwal.
                </p>


                {/* TEAM BADGE */}
                <div className="mb-8 flex flex-wrap gap-4">

                  <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#0F5132]">

                    <Users className="h-4 w-4 text-emerald-600" />

                    <span>
                      Passionate Team Community
                    </span>

                  </div>

                </div>


                {/* APPLY BUTTON */}
                <ApplyCoachButton />

              </div>


              {/* HERO IMAGE */}
              <div className="relative lg:col-span-5">

                <div className="relative overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-2xl">

                  <Image
                    src="/ranigroup.jpg"
                    alt="Coach Rani Paliwal and Team Mentorship"
                    width={600}
                    height={500}
                    priority
                    className="h-[420px] w-full object-cover sm:h-[460px]"
                  />

                </div>

              </div>

            </div>

          </Container>

        </section>


        {/* =====================================================
            TEAM SHOWCASE & AUTO SLIDER
        ===================================================== */}
        <section className="overflow-hidden bg-white py-20">

          <Container size="large">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <h2 className="text-3xl font-extrabold text-[#0F241A] sm:text-4xl">
                Life with Team Rani Paliwal
              </h2>

              <p className="mt-3 text-base text-gray-600 sm:text-lg">
                Here is a glimpse of our trainers, nutritionists
                and wellness mentors in action.
              </p>

            </div>


            {/* SLIDER */}
            <div className="team-gallery-wrapper relative w-full overflow-hidden">

              <div className="team-gallery-track flex w-max gap-5">

                {/* FIRST SET */}
                {TEAM_GALLERY.map((item) => (

                  <div
                    key={`first-${item.id}`}
                    className="group w-[250px] shrink-0 overflow-hidden rounded-[26px] border border-emerald-100 bg-[#F6FBF7] transition-all duration-500 sm:w-[280px]"
                  >

                    <div className="relative h-[340px] w-full overflow-hidden bg-gray-100">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="280px"
                        className="object-cover object-center transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 text-white">

                        <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-lime-400">
                          {item.role}
                        </span>

                        <h3 className="text-lg font-bold leading-tight">
                          {item.title}
                        </h3>

                      </div>

                    </div>


                    <div className="p-5">

                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                ))}


                {/* DUPLICATE SET */}
                {TEAM_GALLERY.map((item) => (

                  <div
                    key={`second-${item.id}`}
                    aria-hidden="true"
                    className="group w-[250px] shrink-0 overflow-hidden rounded-[26px] border border-emerald-100 bg-[#F6FBF7] transition-all duration-500 sm:w-[280px]"
                  >

                    <div className="relative h-[340px] w-full overflow-hidden bg-gray-100">

                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="280px"
                        className="object-cover object-center transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 text-white">

                        <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-lime-400">
                          {item.role}
                        </span>

                        <h3 className="text-lg font-bold leading-tight">
                          {item.title}
                        </h3>

                      </div>

                    </div>


                    <div className="p-5">

                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </Container>

        </section>


        {/* =====================================================
            PILLARS OF MENTORSHIP
        ===================================================== */}
        <section className="bg-gradient-to-b from-[#FAFDFA] to-[#F1F8F4] py-20">

          <Container size="large">

            <div className="mx-auto mb-16 max-w-3xl text-center">

              <h2 className="text-3xl font-extrabold text-[#0F241A] sm:text-4xl">
                What You Get As A Coach
              </h2>

              <p className="mt-3 text-base text-gray-600 sm:text-lg">
                Learn, grow and build your wellness coaching journey
                with the right support.
              </p>

            </div>


            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {COACH_PILLARS.map((pillar) => (

                <StaggerItem key={pillar.number}>

                  <div className="flex h-full min-w-0 flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-7">

                    <span className="mb-3 block text-4xl font-black text-emerald-300">
                      {pillar.number}
                    </span>

                    <h3 className="mb-1 text-lg font-bold text-[#0F241A] lg:text-xl">
                      {pillar.title}
                    </h3>

                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-emerald-700">
                      {pillar.subtitle}
                    </p>

                    <p className="text-sm leading-relaxed text-gray-600">
                      {pillar.description}
                    </p>

                  </div>

                </StaggerItem>

              ))}

            </StaggerContainer>

          </Container>

        </section>


        {/* =====================================================
            WHO CAN JOIN OUR TEAM
        ===================================================== */}
        <section className="bg-white py-20">

          <Container size="large">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#0F5132]">

                <Users className="h-4 w-4" />

                Who Can Join?

              </span>


              <h2 className="text-3xl font-extrabold tracking-tight text-[#0F241A] sm:text-4xl lg:text-5xl">

                Who Can Join Our

                <span className="text-gradient-brand">
                  {' '}Team?
                </span>

              </h2>


              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">

                You don't need to be an expert. If you are passionate about
                health, fitness and helping others, there is a place for you
                to learn, grow and build your journey with us.

              </p>

            </div>


            {/* JOIN CARDS */}
            <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

              {/* STUDENTS */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-[#F6FBF7] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5132] text-white shadow-md transition-transform duration-300 group-hover:scale-110">

                    <GraduationCap className="h-7 w-7" />

                  </div>


                  <h3 className="mb-3 text-xl font-extrabold text-[#0F241A]">
                    Students
                  </h3>


                  <p className="text-sm leading-relaxed text-gray-600">

                    Learn valuable fitness and wellness skills while building
                    your professional journey alongside your studies.

                  </p>

                </div>

              </StaggerItem>


              {/* WORKING PROFESSIONALS */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-[#F6FBF7] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5132] text-white shadow-md transition-transform duration-300 group-hover:scale-110">

                    <BriefcaseBusiness className="h-7 w-7" />

                  </div>


                  <h3 className="mb-3 text-xl font-extrabold text-[#0F241A]">
                    Working Professionals
                  </h3>


                  <p className="text-sm leading-relaxed text-gray-600">

                    Turn your passion for health and fitness into an additional
                    career opportunity alongside your existing work.

                  </p>

                </div>

              </StaggerItem>


              {/* HOMEMAKERS */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-[#F6FBF7] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5132] text-white shadow-md transition-transform duration-300 group-hover:scale-110">

                    <HeartHandshake className="h-7 w-7" />

                  </div>


                  <h3 className="mb-3 text-xl font-extrabold text-[#0F241A]">
                    Homemakers
                  </h3>


                  <p className="text-sm leading-relaxed text-gray-600">

                    Learn flexible coaching skills and create a meaningful
                    wellness career while managing your responsibilities.

                  </p>

                </div>

              </StaggerItem>


              {/* FITNESS ENTHUSIASTS */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-[#F6FBF7] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5132] text-white shadow-md transition-transform duration-300 group-hover:scale-110">

                    <Users className="h-7 w-7" />

                  </div>


                  <h3 className="mb-3 text-xl font-extrabold text-[#0F241A]">
                    Fitness Enthusiasts
                  </h3>


                  <p className="text-sm leading-relaxed text-gray-600">

                    Turn your passion for fitness, nutrition and wellness into
                    a professional journey with the right guidance.

                  </p>

                </div>

              </StaggerItem>


              {/* RETIRED PERSONS */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-[#F6FBF7] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5132] text-white shadow-md transition-transform duration-300 group-hover:scale-110">

                    <Users className="h-7 w-7" />

                  </div>


                  <h3 className="mb-3 text-xl font-extrabold text-[#0F241A]">
                    Retired Persons
                  </h3>


                  <p className="text-sm leading-relaxed text-gray-600">

                    Use your experience and passion for health to support
                    others while building a meaningful second career in
                    fitness and wellness.

                  </p>

                </div>

              </StaggerItem>

            </StaggerContainer>


            {/* BOTTOM MESSAGE */}
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-emerald-100 bg-emerald-50/70 px-6 py-5 text-center">

              <p className="text-sm font-semibold leading-relaxed text-[#0F5132] sm:text-base">

                All you need is the willingness to learn, grow and help others
                live a healthier lifestyle.

              </p>

            </div>

          </Container>

        </section>


        {/* =====================================================
            WHY CHOOSE A CAREER IN WELLNESS
        ===================================================== */}
        <section className="bg-[#F8FBF9] py-20 lg:py-24">

          <Container size="large">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#0F5132]">

                <TrendingUp className="h-4 w-4" />

                Wellness Career

              </span>


              <h2 className="text-3xl font-extrabold tracking-tight text-[#0F241A] sm:text-4xl lg:text-5xl">

                Why Choose a Career in

                <span className="text-gradient-brand">
                  {' '}Wellness?
                </span>

              </h2>


              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">

                The wellness industry is growing rapidly, creating meaningful
                opportunities for people who want to help others while building
                a flexible and rewarding career.

              </p>

            </div>


            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">

              {/* GROWING DEMAND */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-white px-7 py-9 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F9F3] text-[#0F5132] transition-transform duration-300 group-hover:scale-110">

                    <TrendingUp className="h-8 w-8" />

                  </div>


                  <h3 className="mb-4 text-2xl font-extrabold text-[#0F241A]">
                    Growing Demand
                  </h3>


                  <p className="text-base leading-relaxed text-gray-600">

                    Increasing awareness about health, fitness and wellness is
                    creating a growing need for knowledgeable and passionate
                    wellness coaches.

                  </p>

                </div>

              </StaggerItem>


              {/* WORK FROM HOME */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-white px-7 py-9 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F9F3] text-[#0F5132] transition-transform duration-300 group-hover:scale-110">

                    <Laptop className="h-8 w-8" />

                  </div>


                  <h3 className="mb-4 text-2xl font-extrabold text-[#0F241A]">
                    Work From Home
                  </h3>


                  <p className="text-base leading-relaxed text-gray-600">

                    Build your wellness career with a flexible work model that
                    allows you to work remotely and manage your professional
                    journey around your lifestyle.

                  </p>

                </div>

              </StaggerItem>


              {/* MENTORSHIP */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-white px-7 py-9 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F9F3] text-[#0F5132] transition-transform duration-300 group-hover:scale-110">

                    <Users className="h-8 w-8" />

                  </div>


                  <h3 className="mb-4 text-2xl font-extrabold text-[#0F241A]">
                    Mentorship
                  </h3>


                  <p className="text-base leading-relaxed text-gray-600">

                    Learn with guidance, practical support and mentorship from
                    Coach Rani Paliwal while developing the confidence and
                    skills needed to grow in wellness.

                  </p>

                </div>

              </StaggerItem>

            </StaggerContainer>

          </Container>

        </section>


        {/* =====================================================
            HOW THE MODEL WORKS
        ===================================================== */}
        <section className="bg-white py-20 lg:py-24">

          <Container size="large">

            {/* SECTION HEADING */}
            <div className="mx-auto mb-14 max-w-3xl text-center">

              <h2 className="text-3xl font-extrabold tracking-tight text-[#0F241A] sm:text-4xl lg:text-5xl">
                How The Model Works
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-emerald-500" />

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Learn, implement and grow — step by step.
              </p>

            </div>


            {/* MODEL CARDS */}
            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {/* STEP 1 */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-[#FAFDFA] px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    1
                  </div>

                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0F5132]">

                    <HeartHandshake className="h-6 w-6" />

                  </div>

                  <h3 className="mb-3 text-xl font-extrabold text-[#0F241A]">
                    Transform Your Own Health
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    Learn practical nutrition, fitness and healthy lifestyle
                    principles that you can apply in your own life.
                  </p>

                </div>

              </StaggerItem>


              {/* STEP 2 */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-[#FAFDFA] px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    2
                  </div>

                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0F5132]">

                    <GraduationCap className="h-6 w-6" />

                  </div>

                  <h3 className="mb-3 text-xl font-extrabold text-[#0F241A]">
                    Get Trained & Certified
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    Learn coaching systems, communication and wellness
                    guidance through structured training and mentorship.
                  </p>

                </div>

              </StaggerItem>


              {/* STEP 3 */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-[#FAFDFA] px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    3
                  </div>

                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0F5132]">

                    <Users className="h-6 w-6" />

                  </div>

                  <h3 className="mb-3 text-xl font-extrabold text-[#0F241A]">
                    Start Helping Others
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    Use your knowledge and training to guide people toward
                    healthier habits and wellness goals.
                  </p>

                </div>

              </StaggerItem>


              {/* STEP 4 */}
              <StaggerItem>

                <div className="group h-full rounded-[28px] border border-emerald-100 bg-[#FAFDFA] px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    4
                  </div>

                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0F5132]">

                    <TrendingUp className="h-6 w-6" />

                  </div>

                  <h3 className="mb-3 text-xl font-extrabold text-[#0F241A]">
                    Build Your Career
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    Develop your skills, build meaningful relationships and
                    grow your career in the fitness and wellness space.
                  </p>

                </div>

              </StaggerItem>

            </StaggerContainer>

          </Container>

        </section>


        {/* =====================================================
            CAREER OPPORTUNITY SECTION
            IMAGE REMOVED
        ===================================================== */}
        <section className="bg-white py-20">

          <Container size="large">

            <div className="mx-auto max-w-5xl">

              {/* HEADING */}
              <div className="mb-12 text-center">

                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#0F5132]">

                  <BriefcaseBusiness className="h-4 w-4" />

                  Wellness Career Opportunity

                </span>


                <h2 className="text-3xl font-extrabold tracking-tight text-[#0F241A] sm:text-4xl lg:text-5xl">

                  Build a Career Around

                  <span className="text-gradient-brand">
                    {' '}Helping Others
                  </span>

                </h2>


                <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">

                  Turn your passion for health, fitness and wellness into
                  meaningful work while learning and growing with Team
                  Rani Paliwal.

                </p>

              </div>


              {/* MAIN CONTENT CARD */}
              <div className="rounded-[32px] border border-emerald-100 bg-gradient-to-br from-[#F6FBF7] to-white p-7 shadow-sm sm:p-10">

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                  {/* LEFT */}
                  <div>

                    <div className="mb-5 flex items-center gap-3">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F5132] text-white shadow-md">

                        <HeartHandshake className="h-6 w-6" />

                      </div>


                      <div>

                        <h3 className="text-xl font-extrabold text-[#0F241A]">
                          Make an Impact
                        </h3>

                        <p className="text-sm font-semibold text-emerald-700">
                          Help people live healthier lives
                        </p>

                      </div>

                    </div>


                    <p className="text-sm leading-7 text-gray-600 sm:text-base">

                      If you enjoy helping people, learning about fitness
                      and nutrition, and building meaningful relationships,
                      this could be an opportunity to grow your skills and
                      create a career in the wellness space.

                    </p>

                  </div>


                  {/* RIGHT */}
                  <div>

                    <div className="mb-5 flex items-center gap-3">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F5132] text-white shadow-md">

                        <GraduationCap className="h-6 w-6" />

                      </div>


                      <div>

                        <h3 className="text-xl font-extrabold text-[#0F241A]">
                          Learn & Grow
                        </h3>

                        <p className="text-sm font-semibold text-emerald-700">
                          Guidance and practical experience
                        </p>

                      </div>

                    </div>


                    <p className="text-sm leading-7 text-gray-600 sm:text-base">

                      Get practical guidance, learn coaching approaches,
                      understand client needs and develop the confidence
                      required to support people on their wellness journey.

                    </p>

                  </div>

                </div>


                {/* BENEFITS */}
                <div className="mt-10 grid grid-cols-1 gap-4 border-t border-emerald-100 pt-8 sm:grid-cols-2">

                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />

                    <span className="text-sm font-semibold text-[#0F241A]">
                      Flexible work opportunities
                    </span>

                  </div>


                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />

                    <span className="text-sm font-semibold text-[#0F241A]">
                      Part-time & full-time options
                    </span>

                  </div>


                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />

                    <span className="text-sm font-semibold text-[#0F241A]">
                      Learn from experienced mentors
                    </span>

                  </div>


                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />

                    <span className="text-sm font-semibold text-[#0F241A]">
                      Work from home opportunities
                    </span>

                  </div>

                </div>


                {/* WORK MODEL */}
                <div className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0F5132]">

                      <Laptop className="h-5 w-5" />

                    </div>


                    <div>

                      <h4 className="font-extrabold text-[#0F241A]">
                        Build a career around helping others
                      </h4>


                      <p className="mt-1 text-sm leading-relaxed text-gray-600">

                        Choose a work model that fits your goals and
                        lifestyle while developing your skills in the
                        fitness, nutrition and wellness space.

                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* CTA */}
              <div className="mt-10 text-center">

                <p className="mb-4 text-sm font-semibold text-gray-600">
                  Interested in joining the team?
                </p>

                <ApplyCoachButton />

              </div>

            </div>

          </Container>

        </section>

      </main>
    </PageTransition>
  );
}