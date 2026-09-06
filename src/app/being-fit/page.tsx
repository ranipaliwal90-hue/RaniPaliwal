import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Phone,
  Navigation,
} from 'lucide-react';

import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import EventsGallery from '@/components/being-fit/EventsGallery';
import { CLUB_INFO } from '@/data/club';

export const metadata: Metadata = {
  title:
    'Being Fit Club | Associated Fitness Center in Udaipur | Rani Paliwal',
  description:
    'Being Fit Fitness 2.0 is the associated nutrition & fitness club led by Rani Paliwal in Bhuwana, Udaipur. Modern strength machinery, weight management & yoga.',
};

export default function BeingFitPage() {
  return (
    <PageTransition>
      <main className="overflow-hidden bg-[#FAFDFA]">

        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="relative overflow-hidden bg-radial-glow pb-16 pt-28 lg:pb-24 lg:pt-36">

          <LeafDecoration
            size="lg"
            className="left-4 top-10"
          />

          <Container size="large">

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

              {/* ==================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="flex flex-col items-start lg:col-span-7">

                <div className="mb-4 flex items-center gap-3">
                  <Badge variant="green">
                    Associated Club with Rani Paliwal
                  </Badge>
                </div>

                <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[#0F241A] sm:text-5xl lg:text-6xl">
                  Being Fit —{' '}
                  <span className="text-gradient-brand">
                    Nutrition & Fitness Club
                  </span>
                </h1>

                <p className="mb-4 text-lg font-extrabold text-emerald-800 sm:text-xl">
                 Shree Krishna, 1st floor , Near Shrinath Hospital , Navratna Complex Udaipur 
                </p>

                <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Being Fit is the physical fitness & nutrition club
                  associated with <strong>Coach Rani Paliwal</strong>.
                  Located in   Shree Krishna, 1st floor , Near Shrinath Hospital , Navratna Complex Udaipur,
                  our club provides fitness, nutrition and group workout
                  experiences.
                </p>

                {/* ==================================================
                    MOBILE IMAGE
                    Only visible on mobile
                ================================================== */}

                <div className="mb-5 w-full lg:hidden">
                  <div className="relative w-full overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-2xl">
                    <div className="relative flex w-full items-center justify-center bg-white">
                      <Image
                        src="/being.png"
                        alt="Being Fit Associated Club Facility"
                        width={1200}
                        height={800}
                        className="h-auto max-h-[420px] w-full object-contain object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    BUTTONS
                    Mobile + Desktop
                ================================================== */}

                <div className="flex w-full items-center gap-2 sm:w-auto sm:gap-3">

                  {/* CALL NOW */}
                  <a
                    href={`tel:${CLUB_INFO.phone}`}
                    className="inline-flex h-[48px] min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#0F5132] px-2 text-[11px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B4329] hover:shadow-lg sm:h-[52px] sm:flex-none sm:gap-2 sm:px-7 sm:text-sm"
                  >
                    <Phone className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />

                    <span className="whitespace-nowrap">
                      Call Now
                    </span>
                  </a>

                  {/* GET DIRECTIONS */}
                  <a
                    href={CLUB_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[48px] min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-emerald-200 bg-white px-2 text-[11px] font-bold text-[#0F5132] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-md sm:h-[52px] sm:flex-none sm:gap-2 sm:px-7 sm:text-sm"
                  >
                    <Navigation className="h-4 w-4 shrink-0 text-emerald-600 sm:h-5 sm:w-5" />

                    <span className="whitespace-nowrap">
                      Get Directions
                    </span>
                  </a>

                </div>

              </div>

              {/* ==================================================
                  DESKTOP HERO IMAGE
                  Hidden on mobile
              ================================================== */}

              <div className="relative hidden w-full items-center justify-center lg:col-span-5 lg:flex">

                <div className="relative w-full overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-2xl">

                  <div className="relative flex w-full items-center justify-center bg-white">

                    <Image
                      src="/being.png"
                      alt="Being Fit Associated Club Facility"
                      width={1200}
                      height={800}
                      priority
                      className="h-auto max-h-[520px] w-full object-contain object-center"
                    />

                  </div>

                </div>

              </div>

            </div>

          </Container>

        </section>


        {/* =========================================================
            EVENTS / RESULTS / VIRTUAL COACHING GALLERY
        ========================================================== */}

        <EventsGallery />


        {/* =========================================================
            FACILITIES
        ========================================================== */}

        <section className="bg-white py-20">

          <Container size="large">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <Badge
                variant="green"
                className="mb-3"
              >
                Infrastructure
              </Badge>

              <h2 className="text-3xl font-extrabold text-[#0F241A] sm:text-4xl">
                Facility & Amenities
              </h2>

            </div>


            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">

              {CLUB_INFO.facilities.map((fac, idx) => (

                <StaggerItem key={idx}>

                  <div className="rounded-3xl border border-emerald-100 bg-[#F6FBF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <h3 className="mb-2 text-lg font-bold text-[#0F5132]">
                      {fac.name}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600">
                      {fac.desc}
                    </p>

                  </div>

                </StaggerItem>

              ))}

            </StaggerContainer>

          </Container>

        </section>

      </main>
    </PageTransition>
  );
}