'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  ChevronDown,
  Award,
  Star,
} from 'lucide-react';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const getMotionProps = (delay: number, yOffset = 20) => {
    if (shouldReduceMotion) return {};

    return {
      initial: {
        opacity: 0,
        y: yOffset,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    };
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-radial-glow">

      {/* Background Floating Decorative Leaves */}
      <LeafDecoration
        size="lg"
        className="top-10 left-4"
      />

      <LeafDecoration
        size="md"
        variant="bottom-left"
        className="bottom-12 right-8"
      />

      <Container size="large">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">

            {/* 1. Badge */}
            <motion.div
              {...getMotionProps(0.1, -12)}
              className="mb-6"
            >
              <Badge
                variant="green"
                icon={
                  <Award className="w-3.5 h-3.5" />
                }
              >
                12+ YEARS OF EXPERIENCE • ASN CERTIFIED
              </Badge>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h1
              {...getMotionProps(0.2, 24)}
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-extrabold
                text-[#0F241A]
                tracking-tight
                leading-[1.1]
                mb-4
              "
            >
              <span className="relative inline-block text-gradient-brand">

                Transform

                <svg
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-full
                    h-3
                    text-emerald-400/60
                    pointer-events-none
                  "
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q50,20 100,10"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                  />
                </svg>

              </span>

              {' '}
              Your Body.

              <br className="hidden sm:inline" />

              {' '}
              Transform Your Life.
            </motion.h1>

            {/* 3. Subtitle */}
            <motion.div
              {...getMotionProps(0.3, 18)}
              className="mb-4"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F5132] tracking-tight">
                Rani Paliwal
              </h2>

              <p className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wide mt-0.5">
                ASN Certified Coach & Health and Wellness Consultant
              </p>
            </motion.div>

            {/* 4. Description */}
            <motion.p
              {...getMotionProps(0.4, 18)}
              className="
                text-base
                sm:text-lg
                text-[#4B6358]
                max-w-2xl
                font-normal
                leading-relaxed
                mb-8
              "
            >
              Personalized fitness, nutrition, and wellness guidance designed
              to help you build a healthier, stronger, and more confident
              lifestyle.
            </motion.p>

            {/* 5. CTA Buttons */}
            <motion.div
              {...getMotionProps(0.5, 18)}
              className="
                flex
                flex-col
                sm:flex-row
                items-stretch
                sm:items-center
                gap-4
                w-full
                sm:w-auto
                mb-10
              "
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                showArrow
              >
                Start Your Transformation
              </Button>

              <Button
                href="/programs"
                variant="secondary"
                size="lg"
              >
                Explore Programs
              </Button>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              {...getMotionProps(0.6, 0)}
              className="
                flex
                items-center
                gap-4
                pt-4
                border-t
                border-emerald-100/80
                w-full
                sm:w-auto
              "
            >

              <div className="flex -space-x-3 overflow-hidden">

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    border-2
                    border-white
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-xs
                    text-[#0F5132]
                  "
                >
                  10k+
                </div>

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    border-2
                    border-white
                    bg-lime-100
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-xs
                    text-lime-800
                  "
                >
                  ASN
                </div>

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    border-2
                    border-white
                    bg-[#0F5132]
                    flex
                    items-center
                    justify-center
                    text-lime-400
                    font-bold
                    text-xs
                  "
                >
                  <Star className="w-3.5 h-3.5 fill-lime-400" />
                </div>

              </div>

              <div className="flex flex-col">

                <span
                  className="
                    font-extrabold
                    text-sm
                    text-[#0F5132]
                    flex
                    items-center
                    gap-1
                  "
                >
                  10,000+ Transformations

                  <ShieldCheck className="w-4 h-4 text-emerald-600 inline" />
                </span>

                <span className="text-xs text-gray-500 font-medium">
                  Udaipur & Global 1-on-1 Online Coaching
                </span>

              </div>

            </motion.div>
          </div>

          {/* =====================================================
              RIGHT COLUMN - HERO IMAGE
          ===================================================== */}
          <div className="lg:col-span-5 relative">

            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      scale: 0.95,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mx-auto
                max-w-md
                lg:max-w-none
              "
            >

              {/* Subtle Green Glow */}
              <div
                className="
                  absolute
                  -inset-4
                  bg-gradient-to-tr
                  from-emerald-400/30
                  to-lime-300/30
                  rounded-[40px]
                  blur-2xl
                  -z-10
                "
              />

              {/* =================================================
                  MAIN ROUNDED IMAGE FRAME
              ================================================= */}
              <div
                className="
                  relative
                  rounded-[32px]
                  overflow-visible
                  border-4
                  border-white
                  shadow-2xl
                  bg-white
                  group
                "
              >

                <Image
                  src="/ranii.jpg"
                  alt="Coach Rani Paliwal Health & Wellness Consultant"
                  width={600}
                  height={750}
                  className="
                    w-full
                    h-[460px]
                    sm:h-[540px]
                    object-cover
                    object-top
                    rounded-[28px]
                    group-hover:scale-[1.03]
                    transition-transform
                    duration-700
                    ease-out
                  "
                  priority
                />

                {/* Bottom Overlay Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[28px]
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

                {/* =================================================
                    ASN CERTIFIED FLOATING BADGE
                ================================================= */}
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 0,
                          x: 16,
                        }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                  }}
                  className="
                    absolute

                    /* MOBILE */
                    top-4
                    right-[-8px]

                    /* TABLET */
                    sm:top-5
                    sm:right-3

                    /* DESKTOP */
                    lg:top-7
                    lg:-right-7

                    glass-card

                    px-2.5
                    py-1.5

                    sm:px-4
                    sm:py-2.5

                    rounded-2xl

                    flex
                    items-center

                    gap-2
                    sm:gap-3

                    shadow-lg
                    border
                    border-white/80

                    z-30
                    whitespace-nowrap
                  "
                >

                  {/* Badge Icon */}
                  <div
                    className="
                      w-7
                      h-7

                      sm:w-9
                      sm:h-9

                      rounded-xl
                      bg-emerald-600
                      text-white

                      flex
                      items-center
                      justify-center

                      font-bold
                      text-sm
                      shrink-0
                    "
                  >
                    <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>

                  {/* Badge Text */}
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-900">
                      ASN Certified
                    </p>

                    <p className="text-[8px] sm:text-[10px] text-emerald-700 font-semibold">
                      Nutrition & Wellness
                    </p>
                  </div>

                </motion.div>

                {/* =================================================
                    TRANSFORMATIONS FLOATING CARD
                ================================================= */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -8, 0],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    absolute
                    bottom-5
                    left-4

                    sm:bottom-6
                    sm:left-6

                    glass-card

                    px-4
                    py-3

                    sm:px-5
                    sm:py-3.5

                    rounded-2xl

                    flex
                    items-center

                    gap-3
                    sm:gap-3.5

                    shadow-xl
                    border
                    border-white/90

                    z-20
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      sm:w-11
                      sm:h-11
                      rounded-full
                      bg-[#0F5132]
                      text-lime-400
                      flex
                      items-center
                      justify-center
                      font-black
                      text-xs
                      sm:text-sm
                      shrink-0
                    "
                  >
                    10k+
                  </div>

                  <div>
                    <p className="text-sm sm:text-base font-black text-gray-900 leading-tight">
                      10,000+
                    </p>

                    <p className="text-[10px] sm:text-xs text-emerald-800 font-bold">
                      Transformations
                    </p>
                  </div>

                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}
        <motion.div
          initial={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
            duration: 0.5,
          }}
          className="
            flex
            flex-col
            items-center
            justify-center
            mt-12
            lg:mt-16
            text-xs
            font-bold
            text-emerald-800
            tracking-wider
            uppercase
          "
        >
          <span>Scroll to explore</span>

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, 8, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="w-4 h-4 text-emerald-600 mt-1" />
          </motion.div>

        </motion.div>

      </Container>
    </section>
  );
}