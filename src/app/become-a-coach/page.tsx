import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Users,
} from 'lucide-react';

import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import LeafDecoration from '@/components/ui/LeafDecoration';
import { TEAM_GALLERY, COACH_PILLARS } from '@/data/coach';

export const metadata: Metadata = {
  title: 'Become a Coach | Join Team Rani Paliwal',
  description:
    'Turn your passion for health and fitness into a rewarding career. Get mentored by ASN Certified Coach Rani Paliwal and join our passionate team in Udaipur & online.',
};

export default function BecomeACoachPage() {
  return (
    <PageTransition>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden bg-radial-glow">

        <LeafDecoration
          size="lg"
          className="top-10 left-4"
        />

        <Container size="large">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 flex flex-col items-start">

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

                  <span>
                    Passionate Team Community
                  </span>

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

            {/* HERO IMAGE */}
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


      {/* =====================================================
          TEAM SHOWCASE & SLIDING GALLERY
      ===================================================== */}
      <section className="py-20 bg-white overflow-hidden">

        <Container size="large">

          {/* SECTION HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-14">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F241A]">
              Life with Team Rani Paliwal
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mt-3">
              Here is a glimpse of our trainers, nutritionists
              and wellness mentors in action.
            </p>

          </div>


          {/* =================================================
              INFINITE HORIZONTAL SLIDER
          ================================================= */}
          <div className="relative w-full overflow-hidden">

            {/* SLIDER TRACK */}
            <div className="team-gallery-track flex w-max">

              {/* =================================================
                  FIRST SET
              ================================================= */}
              <div className="flex gap-6 pr-6">

                {TEAM_GALLERY.map((item) => (

                  <div
                    key={`first-${item.id}`}
                    className="
                      group
                      w-[280px]
                      sm:w-[320px]
                      lg:w-[350px]
                      flex-shrink-0
                    "
                  >

                    <div
                      className="
                        bg-[#F6FBF7]
                        rounded-[28px]
                        overflow-hidden
                        border
                        border-emerald-100
                        shadow-md
                        transition-all
                        duration-500
                        hover:-translate-y-3
                        hover:border-emerald-300
                        hover:shadow-[0_20px_45px_rgba(15,81,50,0.18)]
                      "
                    >

                      {/* IMAGE */}
                      <div className="relative h-[400px] sm:h-[440px] lg:h-[460px] w-full overflow-hidden bg-gray-100">

                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="350px"
                          className="
                            object-contain
                            object-center
                            transition-transform
                            duration-700
                            group-hover:scale-[1.03]
                          "
                        />

                        {/* DARK GRADIENT */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/70
                            via-black/20
                            to-transparent
                            opacity-80
                          "
                        />

                        {/* IMAGE CONTENT */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">

                          <span
                            className="
                              text-[10px]
                              sm:text-xs
                              font-bold
                              text-lime-400
                              uppercase
                              tracking-widest
                              block
                            "
                          >
                            {item.role}
                          </span>

                          <h3 className="text-lg sm:text-xl font-bold drop-shadow-sm">
                            {item.title}
                          </h3>

                        </div>

                      </div>


                      {/* DESCRIPTION */}
                      <div className="p-5 sm:p-6">

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* =================================================
                  DUPLICATE SET
                  Creates seamless infinite loop
              ================================================= */}
              <div className="flex gap-6 pr-6">

                {TEAM_GALLERY.map((item) => (

                  <div
                    key={`second-${item.id}`}
                    className="
                      group
                      w-[280px]
                      sm:w-[320px]
                      lg:w-[350px]
                      flex-shrink-0
                    "
                  >

                    <div
                      className="
                        bg-[#F6FBF7]
                        rounded-[28px]
                        overflow-hidden
                        border
                        border-emerald-100
                        shadow-md
                        transition-all
                        duration-500
                        hover:-translate-y-3
                        hover:border-emerald-300
                        hover:shadow-[0_20px_45px_rgba(15,81,50,0.18)]
                      "
                    >

                      {/* IMAGE */}
                      <div className="relative h-[400px] sm:h-[440px] lg:h-[460px] w-full overflow-hidden bg-gray-100">

                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="350px"
                          className="
                            object-contain
                            object-center
                            transition-transform
                            duration-700
                            group-hover:scale-[1.03]
                          "
                        />

                        {/* DARK GRADIENT */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/70
                            via-black/20
                            to-transparent
                            opacity-80
                          "
                        />

                        {/* BADGE */}
                        <span
                          className="
                            absolute
                            top-4
                            left-4
                            text-[10px]
                            sm:text-xs
                            font-extrabold
                            uppercase
                            tracking-wider
                            text-white
                            bg-[#0F5132]/90
                            backdrop-blur-md
                            px-3
                            sm:px-3.5
                            py-1.5
                            rounded-full
                            border
                            border-emerald-400/30
                          "
                        >
                          {item.badge}
                        </span>


                        {/* IMAGE CONTENT */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">

                          <span
                            className="
                              text-[10px]
                              sm:text-xs
                              font-bold
                              text-lime-400
                              uppercase
                              tracking-widest
                              block
                            "
                          >
                            {item.role}
                          </span>

                          <h3 className="text-lg sm:text-xl font-bold drop-shadow-sm">
                            {item.title}
                          </h3>

                        </div>

                      </div>


                      {/* DESCRIPTION */}
                      <div className="p-5 sm:p-6">

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* SLIDER CSS */}
            <style>{`
              .team-gallery-track {
                animation: teamGallerySlide 32s linear infinite;
                will-change: transform;
              }

              .team-gallery-track:hover {
                animation-play-state: paused;
              }

              @keyframes teamGallerySlide {
                0% {
                  transform: translateX(0);
                }

                100% {
                  transform: translateX(-50%);
                }
              }

              @media (prefers-reduced-motion: reduce) {
                .team-gallery-track {
                  animation: none;
                }
              }
            `}</style>

          </div>

        </Container>

      </section>


      {/* =====================================================
          PILLARS OF MENTORSHIP
      ===================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#FAFDFA] to-[#F1F8F4]">

        <Container size="large">

          {/* SECTION HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F241A]">
              What You Get As A Coach
            </h2>

          </div>


          {/* 4 CARDS IN ONE ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            {COACH_PILLARS.map((pillar) => (

              <div
                key={pillar.number}
                className="
                  group
                  relative
                  bg-white
                  rounded-3xl
                  p-6
                  lg:p-7
                  border
                  border-emerald-100
                  shadow-sm
                  h-full
                  flex
                  flex-col
                  overflow-hidden
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-3
                  hover:border-emerald-300
                  hover:shadow-[0_20px_45px_rgba(15,81,50,0.15)]
                "
              >

                {/* TOP GLOW */}
                <div
                  className="
                    absolute
                    -top-16
                    -right-16
                    w-36
                    h-36
                    rounded-full
                    bg-emerald-100/60
                    blur-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                />


                {/* CONTENT */}
                <div className="relative z-10">

                  {/* NUMBER */}
                  <span
                    className="
                      text-4xl
                      font-black
                      text-emerald-300
                      block
                      mb-3
                      transition-all
                      duration-500
                      group-hover:text-emerald-500
                      group-hover:scale-110
                      origin-left
                    "
                  >
                    {pillar.number}
                  </span>


                  {/* TITLE */}
                  <h3
                    className="
                      text-lg
                      lg:text-xl
                      font-bold
                      text-[#0F241A]
                      mb-1
                      transition-colors
                      duration-300
                      group-hover:text-[#0F5132]
                    "
                  >
                    {pillar.title}
                  </h3>


                  {/* SUBTITLE */}
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </p>


                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </Container>

      </section>

    </PageTransition>
  );
}