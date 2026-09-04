import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Users } from 'lucide-react';

import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import LeafDecoration from '@/components/ui/LeafDecoration';
import { COACH_PILLARS, TEAM_GALLERY } from '@/data/coach';

export const metadata: Metadata = {
  title: 'Become a Coach | Join Team Rani Paliwal',
  description:
    'Turn your passion for health and fitness into a rewarding career. Get mentored by Coach Rani Paliwal and join our passionate team in Udaipur & online.',
};

export default function BecomeACoachPage() {
  return (
    <PageTransition>

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
                Become a Coach. <br />

                <span className="text-gradient-brand">
                  Join Team Rani Paliwal
                </span>
              </h1>

              <p className="mb-4 text-lg font-extrabold text-emerald-800 sm:text-xl">
                Udaipur & Remote Worldwide
              </p>

              <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
                Empower others, build a rewarding career, and learn the proven
                systems behind 10,000+ client transformations. Receive 1-on-1
                guidance, clinical nutrition strategies, and team support
                directly from Coach Rani Paliwal.
              </p>

              <div className="mb-8 flex flex-wrap gap-4">

                <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#0F5132]">

                  <Users className="h-4 w-4 text-emerald-600" />

                  <span>
                    Passionate Team Community
                  </span>

                </div>

              </div>

              <Button
                href="/contact"
                variant="primary"
                size="lg"
                showArrow
              >
                Apply to Join Our Team
              </Button>

            </div>


            {/* =================================================
                HERO IMAGE
            ================================================= */}
            <div className="relative lg:col-span-5">

              <div className="relative overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-2xl">

                <Image
                  src="/ranigroup.jpg"
                  alt="Coach Rani Paliwal & Team Mentorship"
                  width={600}
                  height={500}
                  className="h-[400px] w-full object-cover"
                  priority
                />

              </div>

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          TEAM SHOWCASE
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


          {/* =================================================
              HORIZONTAL IMAGE SLIDER
          ================================================= */}
          <div className="relative w-full overflow-hidden">

            <div
              className="flex w-max gap-5"
              style={{
                animation: 'teamMarquee 45s linear infinite',
              }}
            >

              {/* =================================================
                  FIRST SET
              ================================================= */}
              {TEAM_GALLERY.map((item) => (

                <div
                  key={`first-${item.id}`}
                  className="w-[270px] shrink-0 sm:w-[300px] lg:w-[320px]"
                >

                  <div className="group overflow-hidden rounded-[24px] border border-emerald-100 bg-[#F6FBF7] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    {/* IMAGE */}
                    <div className="relative h-[360px] w-full overflow-hidden bg-gray-100 sm:h-[390px] lg:h-[400px]">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="320px"
                        className="object-contain object-center"
                      />

                      {/* DARK GRADIENT */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      {/* BADGE */}
                      <span className="absolute left-4 top-4 rounded-full border border-emerald-400/30 bg-[#0F5132]/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                        {item.badge}
                      </span>

                      {/* IMAGE CONTENT */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">

                        <span className="block text-[10px] font-bold uppercase tracking-widest text-lime-400">
                          {item.role}
                        </span>

                        <h3 className="mt-1 text-lg font-bold leading-tight drop-shadow-sm">
                          {item.title}
                        </h3>

                      </div>

                    </div>


                    {/* DESCRIPTION */}
                    <div className="p-5">

                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}


              {/* =================================================
                  DUPLICATE SET
                  Required for seamless infinite scrolling
              ================================================= */}
              {TEAM_GALLERY.map((item) => (

                <div
                  key={`second-${item.id}`}
                  className="w-[270px] shrink-0 sm:w-[300px] lg:w-[320px]"
                >

                  <div className="group overflow-hidden rounded-[24px] border border-emerald-100 bg-[#F6FBF7] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    {/* IMAGE */}
                    <div className="relative h-[360px] w-full overflow-hidden bg-gray-100 sm:h-[390px] lg:h-[400px]">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="320px"
                        className="object-contain object-center"
                      />

                      {/* DARK GRADIENT */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      {/* IMAGE CONTENT */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">

                        <span className="block text-[10px] font-bold uppercase tracking-widest text-lime-400">
                          {item.role}
                        </span>

                        <h3 className="mt-1 text-lg font-bold leading-tight drop-shadow-sm">
                          {item.title}
                        </h3>

                      </div>

                    </div>


                    {/* DESCRIPTION */}
                    <div className="p-5">

                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </Container>


        {/* =====================================================
            SLIDER CSS
            Normal style tag - NO styled-jsx
        ===================================================== */}
        <style>
          {`
            @keyframes teamMarquee {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-50%);
              }
            }

            @media (max-width: 640px) {
              .team-slider {
                animation-duration: 35s;
              }
            }
          `}
        </style>

      </section>


      {/* =====================================================
          PILLARS OF MENTORSHIP
      ===================================================== */}
      <section className="bg-gradient-to-b from-[#FAFDFA] to-[#F1F8F4] py-20">

        <Container size="large">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <h2 className="text-3xl font-extrabold text-[#0F241A] sm:text-4xl">
              What You Get As A Coach
            </h2>

          </div>


          {/* =================================================
              4 CARDS IN ONE ROW ON DESKTOP
          ================================================= */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            {COACH_PILLARS.map((pillar) => (

              <div
                key={pillar.number}
                className="group flex h-full min-w-0 flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl"
              >

                <span className="mb-3 block text-4xl font-black text-emerald-300 transition-colors duration-300 group-hover:text-emerald-500">
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

            ))}

          </div>

        </Container>

      </section>

    </PageTransition>
  );
}