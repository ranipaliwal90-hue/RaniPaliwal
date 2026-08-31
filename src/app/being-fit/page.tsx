import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
  CheckCircle2,
} from 'lucide-react';

import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import FinalCTA from '@/components/home/FinalCTA';
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

              {/* LEFT CONTENT */}

              <div className="flex flex-col items-start lg:col-span-7">

                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-emerald-100 bg-white p-1 shadow-sm">
                    <Image
                      src="/being.png"
                      alt="Being Fit Logo"
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>

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
                  Bhuwana, Udaipur, Rajasthan
                </p>

                <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Being Fit is the physical fitness & nutrition club
                  associated with <strong>Coach Rani Paliwal</strong>.
                  Located in Bhuwana, Udaipur, our club provides fitness,
                  nutrition and group workout experiences.
                </p>

                {/* ==================================================
                    BUTTONS
                ================================================== */}

                <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">

                  {/* CALL NOW */}
                  <a
                    href={`tel:${CLUB_INFO.phone}`}
                    className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#0F5132] px-7 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B4329] hover:shadow-lg"
                  >
                    <Phone className="h-5 w-5 shrink-0" />
                    <span className="whitespace-nowrap">
                      Call Now
                    </span>
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href={CLUB_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" />
                    <span className="whitespace-nowrap">
                      WhatsApp Us
                    </span>
                  </a>

                  {/* GET DIRECTIONS */}
                  <a
                    href={CLUB_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-7 text-sm font-bold text-[#0F5132] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-md"
                  >
                    <Navigation className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="whitespace-nowrap">
                      Get Directions
                    </span>
                  </a>

                </div>
              </div>

              {/* ==================================================
                  HERO IMAGE
              ================================================== */}

              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                    alt="Being Fit Associated Club Facility"
                    width={600}
                    height={500}
                    className="h-[400px] w-full object-cover"
                  />
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* =========================================================
            TIMINGS & LOCATION
        ========================================================== */}

        <section className="bg-[#0F5132] py-12 text-white">
          <Container size="large">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

              {/* LOCATION */}

              <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5">
                <MapPin className="mt-1 h-7 w-7 shrink-0 text-lime-400" />

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Location
                  </h3>

                  <p className="mt-1 text-sm text-emerald-100">
                    {CLUB_INFO.address}
                  </p>
                </div>
              </div>

              {/* TIMINGS */}

              <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5">
                <Clock className="mt-1 h-7 w-7 shrink-0 text-lime-400" />

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Operating Timings
                  </h3>

                  <p className="mt-1 text-xs text-emerald-100">
                    Mon – Sat: 5:30 AM – 10:30 PM
                  </p>

                  <p className="text-xs text-emerald-100">
                    Sunday: 8:00 AM – 12:00 PM
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5">
                <Phone className="mt-1 h-7 w-7 shrink-0 text-lime-400" />

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Direct Hotline
                  </h3>

                  <p className="mt-1 text-base font-bold text-lime-300">
                    {CLUB_INFO.phone}
                  </p>

                  <p className="text-xs text-emerald-100">
                    Call for membership inquiries
                  </p>
                </div>
              </div>

            </div>
          </Container>
        </section>

      {/* =========================================================
    CLUB TRAINING PILLARS
========================================================= */}

<section className="bg-white py-20">
  <Container size="large">

    <div className="mx-auto mb-14 max-w-3xl text-center">
      <Badge
        variant="green"
        className="mb-3"
      >
        Associated Club Facilities
      </Badge>

      <h2 className="text-3xl font-extrabold text-[#0F241A] sm:text-4xl">
        Fitness & Wellness at Being Fit
      </h2>
    </div>

    {/* 3 WIDE CARDS */}
    <StaggerContainer
      className="
        grid
        grid-cols-1
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {CLUB_INFO.offerings.map((cat, idx) => (
        <StaggerItem key={idx}>
          <div
            className="
              flex
              h-full
              min-h-[390px]
              flex-col
              rounded-3xl
              border
              border-emerald-100
              bg-[#F6FBF7]
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-emerald-300
              hover:shadow-lg
            "
          >
            <h3
              className="
                mb-5
                border-b
                border-emerald-200/60
                pb-4
                text-xl
                font-bold
                text-[#0F241A]
                sm:text-2xl
              "
            >
              {cat.title}
            </h3>

            <ul className="space-y-4">
              {cat.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="
                    flex
                    items-start
                    gap-3
                    text-base
                    font-semibold
                    leading-relaxed
                    text-gray-700
                  "
                >
                  <CheckCircle2
                    className="
                      mt-0.5
                      h-5
                      w-5
                      shrink-0
                      text-emerald-600
                    "
                  />

                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>

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

        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <FinalCTA />

      </main>
    </PageTransition>
  );
}