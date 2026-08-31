'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Scale,
  Utensils,
  Dumbbell,
  Globe,
  Users,
  HeartPulse,
  ArrowRight,
} from 'lucide-react';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { PROGRAMS } from '@/data/programs';

export default function ProgramsPreview() {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-6 h-6" />;

      case 'Utensils':
        return <Utensils className="w-6 h-6" />;

      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6" />;

      case 'Globe':
        return <Globe className="w-6 h-6" />;

      case 'Users':
        return <Users className="w-6 h-6" />;

      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;

      default:
        return <Dumbbell className="w-6 h-6" />;
    }
  };

  const visiblePrograms = PROGRAMS.filter(
    (program) => !program.title.toLowerCase().includes('zumba')
  ).slice(0, 5);

  const ProgramCard = ({ program }: { program: (typeof PROGRAMS)[number] }) => (
    <StaggerItem className="h-full">
      <Link
        href={`/programs#${program.id}`}
        className="block h-full group"
      >
        <motion.div
          whileHover={shouldReduceMotion ? {} : { y: -5 }}
          transition={{
            type: 'spring',
            stiffness: 350,
            damping: 25,
          }}
          className="
            bg-white
            rounded-3xl
            p-8
            border
            border-emerald-100/90
            shadow-md
            hover:shadow-xl
            hover:border-emerald-300
            transition-all
            duration-300
            relative
            overflow-hidden
            flex
            flex-col
            justify-between
            h-full
            min-h-[300px]
          "
        >
          {/* Subtle hover background glow */}
          <div
            className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-emerald-100/50
              rounded-full
              blur-2xl
              group-hover:scale-150
              transition-transform
              duration-500
              pointer-events-none
            "
          />

          <div className="relative z-10">

            {/* ICON + BADGE */}
            <div className="flex items-center justify-between mb-6 gap-4">
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-[#EBF7F0]
                  text-[#0F5132]
                  flex
                  items-center
                  justify-center
                  group-hover:bg-[#0F5132]
                  group-hover:text-lime-400
                  transition-colors
                  duration-300
                  group-hover:scale-105
                  shrink-0
                "
              >
                {getIcon(program.iconName)}
              </div>

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-emerald-700
                  bg-emerald-50
                  px-3
                  py-1
                  rounded-full
                  border
                  border-emerald-100
                  text-right
                "
              >
                {program.badge}
              </span>
            </div>

            {/* TITLE */}
            <h3
              className="
                text-2xl
                font-bold
                text-[#0F241A]
                mb-2
                group-hover:text-[#0F5132]
                transition-colors
              "
            >
              {program.title}
            </h3>

            {/* TAGLINE */}
            <p className="text-xs font-semibold text-emerald-700 mb-4">
              {program.tagline}
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                text-sm
                text-[#4B6358]
                line-clamp-3
                mb-6
                leading-relaxed
              "
            >
              {program.description}
            </p>
          </div>

          {/* FOOTER */}
          <div
            className="
              relative
              z-10
              pt-4
              border-t
              border-emerald-50
              flex
              items-center
              justify-between
              text-sm
              font-bold
              text-[#0F5132]
              group-hover:text-emerald-600
            "
          >
            <span>Learn More</span>

            <div
              className="
                w-8
                h-8
                rounded-full
                bg-emerald-50
                flex
                items-center
                justify-center
                group-hover:bg-[#0F5132]
                group-hover:text-white
                transition-colors
              "
            >
              <ArrowRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                "
              />
            </div>
          </div>
        </motion.div>
      </Link>
    </StaggerItem>
  );

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <Container size="large">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            justify-between
            mb-16
            gap-6
          "
        >
          <div>
            <Badge variant="green" className="mb-3">
              Tailored Coaching
            </Badge>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                text-[#0F241A]
                tracking-tight
              "
            >
              Programs Designed Around You
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-xl">
              Whether your goal is weight loss, strength, or holistic
              lifestyle balance.
            </p>
          </div>

          <Button
            href="/programs"
            variant="secondary"
            size="md"
            showArrow
            className="shrink-0"
          >
            View All Programs
          </Button>
        </div>

        {/* =========================
            FIRST ROW - 3 CARDS
        ========================== */}
        <StaggerContainer
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            items-stretch
          "
        >
          {visiblePrograms
            .slice(0, 3)
            .map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
              />
            ))}
        </StaggerContainer>

        {/* =========================
            SECOND ROW - 2 WIDE CARDS
        ========================== */}
        <StaggerContainer
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            mt-8
            max-w-[1050px]
            mx-auto
            items-stretch
          "
        >
          {visiblePrograms
            .slice(3, 5)
            .map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
              />
            ))}
        </StaggerContainer>

      </Container>
    </section>
  );
}