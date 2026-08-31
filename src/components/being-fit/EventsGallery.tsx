'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  CalendarDays,
  Trophy,
  MonitorPlay,
  ArrowUpRight,
  X,
  Clock3,
  Quote,
} from 'lucide-react';

import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import { TRANSFORMATIONS } from '@/data/transformations';

type GalleryImage = {
  id: string;
  title: string;
  image: string;
  subtitle?: string;
  duration?: string;
  story?: string;
  quote?: string;
};

type GalleryCategory = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ElementType;
  images: GalleryImage[];
};

const IMAGE_CATEGORIES: GalleryCategory[] = [
  {
    id: 'physical-center',
    title: 'Results of Physical Center',
    shortTitle: 'Physical Center',
    description:
      'Real transformation results from clients training at Being Fit Fitness Center.',
    icon: Building2,

    images: TRANSFORMATIONS.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.imageAfter,
      subtitle: item.subtitle,
      duration: item.duration,
      story: item.story,
      quote: item.quote,
    })),
  },

  {
    id: 'events',
    title: 'Being Fit Events',
    shortTitle: 'Events',
    description:
      'Memorable moments from Being Fit events, celebrations and community activities.',
    icon: CalendarDays,

    images: [
      {
        id: 'event-1',
        title: 'Fitness Community Moments',
        image: '/Events/event.jpg.jpg',
      },
      {
        id: 'event-2',
        title: 'Wellness & Fitness Gathering',
        image: '/Events/event1.jpg.jpg',
      },
      {
        id: 'event-3',
        title: 'Being Fit Community',
        image: '/Events/event2.jpg.jpg',
      },
      {
        id: 'event-4',
        title: 'Fitness Celebration',
        image: '/Events/event3.jpg.jpg',
      },
      {
        id: 'event-5',
        title: 'Wellness Event Moments',
        image: '/Events/eventt4.jpg.jpg',
      },
      {
        id: 'event-6',
        title: 'Community Fitness Day',
        image: '/Events/event5.jpg.jpg',
      },
      {
        id: 'event-7',
        title: 'Fitness & Wellness Moments',
        image: '/Events/event6.jpg.jpg',
      },
      {
        id: 'event-8',
        title: 'Together We Get Stronger',
        image: '/Events/event7.jpg.jpg',
      },
      {
        id: 'event-9',
        title: 'Stronger Together',
        image: '/Events/event8.jpg.jpg',
      },
      {
        id: 'event-10',
        title: 'Fitness Beyond Workouts',
        image: '/Events/event8.jpg (2).jpg',
      },
      {
        id: 'event-11',
        title: 'Moments That Inspire',
        image: '/Events/event9.jpg.jpg',
      },
      {
        id: 'event-12',
        title: 'Move • Connect • Celebrate',
        image: '/Events/event10.jpg.jpg',
      },
      {
        id: 'event-13',
        title: 'Wellness in Action',
        image: '/Events/event11.jpg.jpg',
      },
      {
        id: 'event-14',
        title: 'Active Community Moments',
        image: '/Events/event12.jpg.jpg',
      },
      {
        id: 'event-15',
        title: 'Celebrating Healthy Living',
        image: '/Events/event14.jpg',
      },
    ],
  },

  {
    id: 'results',
    title: 'Fitness Results',
    shortTitle: 'Results',
    description:
      'Real achievements, client milestones and success moments from the Being Fit community.',
    icon: Trophy,

    images: [
      {
        id: 'result-1',
        title: 'Weight Loss Transformation',
        image: '/result/result1.jpg',
      },
      {
        id: 'result-2',
        title: 'Before & After Progress',
        image: '/result/result2.jpg',
      },
      {
        id: 'result-3',
        title: 'Remarkable Weight Loss Journey',
        image: '/result/result3.jpg',
      },
      {
        id: 'result-4',
        title: 'Fitness Progress & Results',
        image: '/result/result4.jpg',
      },
      {
        id: 'result-5',
        title: 'Successful Weight Management',
        image: '/result/result5.jpg',
      },
      {
        id: 'result-6',
        title: 'Real Client Transformation',
        image: '/result/result6.jpg',
      },
      {
        id: 'result-7',
        title: 'Consistency Brings Results',
        image: '/result/result7.jpg',
      },
      {
        id: 'result-8',
        title: 'A Journey to Better Health',
        image: '/result/result8.jpg',
      },
      {
        id: 'result-9',
        title: 'Progress Through Dedication',
        image: '/result/result9.jpg',
      },
      {
        id: 'result-10',
        title: 'Stronger, Healthier, Better',
        image: '/result/result10.jpg',
      },
      {
        id: 'result-11',
        title: 'Real Fitness Achievement',
        image: '/result/result11.jpg',
      },
      {
        id: 'result-12',
        title: 'transformation Through Consistency',
        image: '/result/result13.jpg',
      },
    ],
  },

  {
    id: 'virtual-coaching',
    title: 'Virtual Coaching',
    shortTitle: 'Virtual Coaching',
    description:
      'Online fitness and nutrition coaching sessions, virtual consultations and wellness guidance from anywhere.',
    icon: MonitorPlay,

    images: [
      {
        id: 'virtual-1',
        title: 'Virtual Nutrition Club',
        image: '/virtual.jpg',
      },
    ],
  },
];

export default function EventsGallery() {
  const [activeCategory, setActiveCategory] =
    useState('physical-center');

  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const activeData =
    IMAGE_CATEGORIES.find(
      (category) => category.id === activeCategory
    ) || IMAGE_CATEGORIES[0];

  const isPhysicalCenter =
    activeCategory === 'physical-center';

  const isVirtual =
    activeCategory === 'virtual-coaching';

  const isEvents =
    activeCategory === 'events';

  const isResults =
    activeCategory === 'results';

  return (
    <section className="relative overflow-hidden bg-[#F1F8F4] py-14 sm:py-18 lg:py-24">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -left-32 bottom-10 h-64 w-64 rounded-full bg-lime-100/30 blur-3xl sm:h-72 sm:w-72" />

      <Container size="large">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-8 max-w-3xl px-1 text-center sm:mb-10"
        >

          <Badge
            variant="green"
            icon={
              <Trophy className="h-3.5 w-3.5" />
            }
          >
            Being Fit Gallery
          </Badge>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0F241A] sm:text-4xl lg:text-5xl">
            Real Moments.

            <span className="text-gradient-brand">
              {' '}Real Results.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
            Explore physical center transformations,
            Being Fit events, fitness results and
            virtual coaching moments.
          </p>

        </motion.div>

        {/* ======================================================
            CATEGORY TABS
            MOBILE = 2 x 2
            DESKTOP = SINGLE ROW
        ====================================================== */}

        <div className="mb-9 w-full sm:mb-12">

          <div
            className="
              mx-auto
              grid
              w-full
              max-w-5xl
              grid-cols-2
              gap-2
              rounded-2xl
              border
              border-emerald-100
              bg-white
              p-2
              shadow-sm

              sm:flex
              sm:items-center
              sm:justify-center
              sm:gap-2
              sm:rounded-full
            "
          >

            {IMAGE_CATEGORIES.map((category) => {

              const Icon = category.icon;

              const isActive =
                activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  className={`
                    flex
                    min-h-[46px]
                    w-full
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    px-2
                    py-2.5
                    text-[11px]
                    font-bold
                    transition-all
                    duration-300

                    sm:w-auto
                    sm:min-h-[44px]
                    sm:shrink-0
                    sm:rounded-full
                    sm:px-5
                    sm:text-sm

                    lg:px-6

                    ${
                      isActive
                        ? 'bg-[#0F5132] text-white shadow-md'
                        : 'text-gray-600 hover:bg-emerald-50 hover:text-[#0F5132]'
                    }
                  `}
                >

                  <Icon
                    className="
                      h-3.5
                      w-3.5
                      shrink-0
                      sm:h-4
                      sm:w-4
                    "
                  />

                  <span className="whitespace-nowrap">
                    {category.shortTitle}
                  </span>

                </button>
              );
            })}

          </div>

        </div>

        {/* ======================================================
            CATEGORY INFORMATION
        ====================================================== */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeData.id}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
            className="mb-7 sm:mb-8"
          >

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div className="min-w-0">

                <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-700 sm:text-xs">
                  {activeData.shortTitle}
                </p>

                <h3 className="text-2xl font-extrabold leading-tight text-[#0F241A] sm:text-3xl">
                  {activeData.title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                  {activeData.description}
                </p>

              </div>

              <div className="self-start rounded-full bg-white px-4 py-2 text-xs font-bold text-emerald-800 shadow-sm sm:self-auto">
                {activeData.images.length}{' '}
                {activeData.images.length === 1
                  ? 'Photo'
                  : 'Photos'}
              </div>

            </div>

          </motion.div>

        </AnimatePresence>

        {/* ======================================================
            IMAGE GRID
        ====================================================== */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeData.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.35,
            }}
            className={`
              grid
              w-full
              gap-5

              ${
                isVirtual
                  ? 'grid-cols-1'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }

              lg:gap-6
            `}
          >

            {activeData.images.map(
              (item, index) => (

                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:shadow-2xl

                    sm:rounded-[24px]

                    ${
                      isVirtual
                        ? 'mx-auto max-w-6xl'
                        : ''
                    }
                  `}
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage(item)
                    }
                    className="block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label={`Open ${item.title}`}
                  >

                    <div
                      className={`
                        relative
                        w-full
                        overflow-hidden
                        bg-gray-100

                        ${
                          isVirtual
                            ? 'aspect-[16/9]'
                            : 'aspect-[4/5]'
                        }
                      `}
                    >

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes={
                          isVirtual
                            ? '100vw'
                            : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        }
                        className="
                          object-contain
                          bg-white
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.015]
                        "
                        priority={
                          isVirtual ||
                          index === 0
                        }
                      />

                      {/* Overlay */}

                      <div
                        className={`
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/75
                          via-black/10
                          to-transparent
                          transition-opacity
                          duration-300

                          ${
                            isVirtual
                              ? 'opacity-40 group-hover:opacity-70'
                              : 'opacity-55 group-hover:opacity-80'
                          }
                        `}
                      />

                      {/* Category */}

                      <div className="absolute left-3 top-3 sm:left-5 sm:top-5">

                        <span className="inline-flex rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-[10px]">
                          {activeData.shortTitle}
                        </span>

                      </div>

                      {/* Duration */}

                      {isPhysicalCenter &&
                        item.duration && (
                          <div className="absolute right-3 top-3 sm:right-5 sm:top-5">

                            <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[9px] font-bold text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-[10px]">

                              <Clock3 className="h-3 w-3" />

                              {item.duration}

                            </span>

                          </div>
                        )}

                      {/* Bottom Content */}

                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">

                        <div className="flex items-end justify-between gap-3">

                          <div className="min-w-0 flex-1">

                            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-lime-300 sm:text-[10px]">
                              Being Fit
                            </p>

                            <h4
                              className={`
                                font-extrabold
                                leading-tight
                                text-white
                                drop-shadow-md

                                ${
                                  isVirtual
                                    ? 'text-base sm:text-xl lg:text-2xl'
                                    : 'text-base sm:text-lg'
                                }
                              `}
                            >
                              {item.title}
                            </h4>

                            {isPhysicalCenter &&
                              item.subtitle && (
                                <p className="mt-1 text-[11px] font-semibold leading-relaxed text-emerald-100 sm:text-sm">
                                  {item.subtitle}
                                </p>
                              )}

                          </div>

                          {/* Open Image */}

                          <span
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-white/95
                              text-[#0F5132]
                              shadow-lg
                              transition-all
                              duration-300
                              group-hover:scale-110
                              group-hover:bg-[#0F5132]
                              group-hover:text-white

                              sm:h-11
                              sm:w-11
                            "
                          >

                            <ArrowUpRight
                              className="
                                h-4
                                w-4
                                sm:h-5
                                sm:w-5
                              "
                            />

                          </span>

                        </div>

                      </div>

                    </div>

                  </button>

                  {/* =================================================
                      PHYSICAL CENTER DETAILS
                      NO TAGS / NO FOCUS AREAS
                  ================================================== */}

                  {isPhysicalCenter && (
                    <div className="p-5 sm:p-6">

                      {/* Subtitle */}

                      {item.subtitle && (
                        <div className="mb-4">

                          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                            Journey
                          </p>

                          <p className="mt-1 text-sm font-bold leading-relaxed text-[#0F241A]">
                            {item.subtitle}
                          </p>

                        </div>
                      )}

                      {/* Story */}

                      {item.story && (
                        <div className="mb-5">

                          <p className="text-sm leading-relaxed text-gray-600">
                            {item.story}
                          </p>

                        </div>
                      )}

                      {/* Quote */}

                      {item.quote && (
                        <div className="rounded-2xl border border-emerald-100 bg-[#F6FBF7] p-4">

                          <Quote className="mb-2 h-5 w-5 text-emerald-500" />

                          <p className="text-xs font-medium italic leading-relaxed text-gray-700 sm:text-sm">
                            &quot;{item.quote}&quot;
                          </p>

                        </div>
                      )}

                    </div>
                  )}


            
                  {/* =================================================
                      VIRTUAL CONTENT
                  ================================================== */}

                  {isVirtual && (
                    <div className="p-5 sm:p-7">

                      <div className="flex items-start gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0F5132]">

                          <MonitorPlay className="h-5 w-5" />

                        </div>

                        <div>

                          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                            Online Coaching
                          </p>

                          <h4 className="mt-1 text-xl font-extrabold text-[#0F241A]">
                            Virtual Fitness & Nutrition Coaching
                          </h4>

                        </div>

                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                       Live online nutrition sessions with Coach Rani Paliwal, bringing personalized guidance and a supportive wellness community together from anywhere.
                      </p>

                    </div>
                  )}

                </motion.div>

              )
            )}

          </motion.div>

        </AnimatePresence>

        {/* ======================================================
            VIRTUAL COACHING INFO
        ====================================================== */}

        {isVirtual && (

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              mx-auto
              mt-6
              max-w-6xl
              rounded-2xl
              border
              border-emerald-100
              bg-white
              p-5
              text-center
              shadow-sm

              sm:mt-8
              sm:p-7
            "
          >

            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-[#0F5132]">

              <MonitorPlay className="h-5 w-5" />

            </div>

            <p className="text-base font-extrabold text-[#0F241A] sm:text-lg">
              Expert Guidance From Anywhere
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-gray-500 sm:text-sm">
              Virtual fitness and nutrition coaching
              designed to provide personalized guidance,
              accountability and ongoing support from
              wherever you are.
            </p>

          </motion.div>

        )}

        {/* ======================================================
            LIGHTBOX
        ====================================================== */}

        <AnimatePresence>

          {selectedImage && (

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-black/90
                p-2
                backdrop-blur-md

                sm:p-5
              "
              onClick={() =>
                setSelectedImage(null)
              }
            >

              {/* Close Button */}

              <button
                type="button"
                onClick={() =>
                  setSelectedImage(null)
                }
                className="
                  absolute
                  right-3
                  top-3
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:bg-white/20

                  sm:right-6
                  sm:top-6
                  sm:h-11
                  sm:w-11
                "
                aria-label="Close image"
              >

                <X className="h-5 w-5 sm:h-6 sm:w-6" />

              </button>

              {/* Lightbox */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  relative
                  flex
                  w-full
                  max-w-6xl
                  max-h-[94vh]
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-2xl

                  sm:rounded-[28px]
                "
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                {/* Large Image */}

                <div
                  className="
                    relative
                    h-[58vh]
                    min-h-[280px]
                    w-full
                    bg-black

                    sm:h-[65vh]
                    sm:min-h-[400px]

                    lg:h-[70vh]
                  "
                >

                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />

                </div>

                {/* ==================================================
                    LIGHTBOX DETAILS
                    NO TAGS
                =================================================== */}

                <div className="max-h-[30vh] overflow-y-auto bg-white px-4 py-4 sm:px-7 sm:py-5">

                  <div className="flex items-start justify-between gap-4">

                    <div className="min-w-0 flex-1">

                      <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-700 sm:text-[10px]">
                        {activeData.shortTitle}
                      </p>

                      <h3 className="mt-1 text-base font-extrabold text-[#0F241A] sm:text-xl">
                        {selectedImage.title}
                      </h3>

                      {isPhysicalCenter && (
                        <>

                          {selectedImage.subtitle && (
                            <p className="mt-1 text-xs font-semibold text-emerald-700 sm:text-sm">
                              {selectedImage.subtitle}
                            </p>
                          )}

                          {selectedImage.duration && (
                            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-800">
                              <Clock3 className="h-3 w-3" />
                              {selectedImage.duration}
                            </div>
                          )}

                          {selectedImage.story && (
                            <p className="mt-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
                              {selectedImage.story}
                            </p>
                          )}

                          {selectedImage.quote && (
                            <div className="mt-3 rounded-xl bg-[#F6FBF7] p-3 sm:p-4">

                              <div className="flex gap-2">

                                <Quote className="h-4 w-4 shrink-0 text-emerald-500" />

                                <p className="text-xs italic leading-relaxed text-gray-700">
                                  &quot;{selectedImage.quote}&quot;
                                </p>

                              </div>

                            </div>
                          )}

                        </>
                      )}

                    </div>

                    {/* Close */}

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedImage(null)
                      }
                      className="
                        shrink-0
                        rounded-full
                        bg-[#0F5132]
                        px-4
                        py-2
                        text-[11px]
                        font-bold
                        text-white
                        transition-colors
                        hover:bg-[#0B4329]

                        sm:px-5
                        sm:py-2.5
                        sm:text-xs
                      "
                    >
                      Close
                    </button>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </Container>

    </section>
  );
}