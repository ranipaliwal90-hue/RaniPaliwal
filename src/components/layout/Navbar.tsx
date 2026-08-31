'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  PhoneCall,
  ArrowUpRight,
  Home,
  UserRound,
  GraduationCap,
  Dumbbell,
  Mail,
  ListChecks,
} from 'lucide-react';

import { NAV_ITEMS, BRAND_INFO } from '@/data/navigation';
import Container from '@/components/ui/Container';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  /*
   * ============================================================
   * MOBILE BOTTOM NAVIGATION
   * ============================================================
   */
  const mobileBottomNav = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
    },
    {
      label: 'About',
      href: '/about',
      icon: UserRound,
    },
    {
      label: 'Programs',
      href: '/programs',
      icon: ListChecks,
    },
    {
      label: 'Coach',
      href: '/become-a-coach',
      icon: GraduationCap,
    },
    {
      label: 'Being Fit',
      href: '/being-fit',
      icon: Dumbbell,
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: Mail,
    },
  ];

  return (
    <>
      {/* =========================================================
          TOP NAVBAR
      ========================================================== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 py-2.5 shadow-[0_8px_30px_rgba(15,81,50,0.08)] backdrop-blur-xl'
            : 'bg-white/75 py-3.5 backdrop-blur-md'
        }`}
      >
        <Container size="large">
          <nav className="flex h-[58px] w-full items-center gap-3">

            {/* =================================================
                BRAND
            ================================================== */}
            <Link
              href="/"
              className="group relative z-50 flex min-w-0 shrink-0 items-center gap-2.5"
            >
              {/* RP */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F5132] shadow-[0_6px_18px_rgba(15,81,50,0.18)]"
              >
                <span className="text-base font-black tracking-tight text-lime-400">
                  RP
                </span>
              </motion.div>

              {/* Brand Text */}
              <div className="flex min-w-0 flex-col">
                <span className="whitespace-nowrap text-[20px] font-extrabold leading-none tracking-[-0.03em] text-[#0F241A] transition-colors duration-200 group-hover:text-[#0F5132]">
                  Rani Paliwal
                </span>

                <span className="mt-1 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.09em] text-emerald-700">
                  ASN Certified Coach & Wellness Consultant
                </span>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAV
            ================================================== */}
            <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
              <div className="flex min-w-0 items-center gap-0">

                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group relative px-2.5 py-3 xl:px-3"
                    >
                      <span
                        className={`relative z-10 whitespace-nowrap text-[13px] font-semibold transition-colors duration-200 xl:text-[14px] ${
                          isActive
                            ? 'text-[#0F5132]'
                            : 'text-[#52605A] group-hover:text-[#0F5132]'
                        }`}
                      >
                        {item.label}
                      </span>

                      {/* Active dot */}
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active"
                          transition={{
                            type: 'spring',
                            stiffness: 450,
                            damping: 32,
                          }}
                          className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#0F5132]"
                        />
                      )}

                      {/* Hover line */}
                      {!isActive && (
                        <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-emerald-600 transition-all duration-300 group-hover:w-4" />
                      )}
                    </Link>
                  );
                })}

              </div>
            </div>

            {/* =================================================
                RIGHT ACTIONS
            ================================================== */}
            <div className="hidden shrink-0 items-center gap-2 lg:flex">

              {/* Phone */}
              <a
                href={`tel:${BRAND_INFO.phone}`}
                aria-label={`Call ${BRAND_INFO.displayPhone}`}
                className="group flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-100 bg-emerald-50/70 px-3 text-[11px] font-bold text-[#0F5132] transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-100 xl:px-3.5 xl:text-[12px]"
              >
                <PhoneCall className="h-3.5 w-3.5 shrink-0 text-emerald-600 transition-transform duration-300 group-hover:rotate-12" />

                <span className="whitespace-nowrap">
                  {BRAND_INFO.displayPhone}
                </span>
              </a>

              {/* Consultation */}
              <Link
                href="/contact"
                className="group flex h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0F5132] px-3.5 text-[12px] font-bold text-white shadow-[0_7px_20px_rgba(15,81,50,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B4329] hover:shadow-[0_10px_24px_rgba(15,81,50,0.24)] xl:px-4 xl:text-[13px]"
              >
                <span className="whitespace-nowrap">
                  Book Consultation
                </span>

                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>

            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative z-50 ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-[#0F5132] transition-colors hover:bg-emerald-100 lg:hidden"
              aria-label={
                mobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

          </nav>
        </Container>

        {/* =========================================================
            EXISTING MOBILE MENU
        ========================================================== */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.28,
                ease: 'easeOut',
              }}
              className="absolute left-0 right-0 top-full border-t border-emerald-100 bg-white/95 shadow-[0_20px_40px_rgba(15,81,50,0.10)] backdrop-blur-xl lg:hidden"
            >
              <Container className="py-5">

                <div className="flex flex-col gap-1">

                  {NAV_ITEMS.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                      <motion.div
                        key={item.href}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.045,
                          duration: 0.3,
                        }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all ${
                            isActive
                              ? 'bg-[#0F5132] text-white'
                              : 'text-[#34423B] hover:bg-emerald-50 hover:text-[#0F5132]'
                          }`}
                        >
                          <span className="whitespace-nowrap text-[15px] font-semibold">
                            {item.label}
                          </span>

                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}

                </div>

                {/* Mobile Actions */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="mt-4 flex flex-col gap-2 border-t border-emerald-100 pt-4"
                >

                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 py-3.5 text-sm font-bold text-[#0F5132]"
                  >
                    <PhoneCall className="h-4 w-4 text-emerald-600" />

                    <span className="whitespace-nowrap">
                      {BRAND_INFO.displayPhone}
                    </span>
                  </a>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#0F5132] py-3.5 text-sm font-bold text-white"
                  >
                    <span>Book Consultation</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                </motion.div>

              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =========================================================
          MOBILE BOTTOM NAVIGATION
          HOME / ABOUT / PROGRAMS / BECOME A COACH /
          BEING FIT / CONTACT
      ========================================================== */}
      <nav
        className="
          fixed
          left-2
          right-2
          bottom-2
          z-[60]

          lg:hidden

          rounded-[24px]
          border
          border-emerald-100

          bg-white/95
          backdrop-blur-xl

          shadow-[0_10px_35px_rgba(15,81,50,0.16)]

          px-1
          py-1

          pb-[calc(4px+env(safe-area-inset-bottom))]
        "
        aria-label="Mobile navigation"
      >
        <div className="grid grid-cols-6 items-center">

          {mobileBottomNav.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));

            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-w-0 items-center justify-center"
              >
                <motion.div
                  whileTap={{ scale: 0.92 }}
                  className={`
                    relative
                    flex
                    min-h-[52px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    gap-0.5
                    rounded-[18px]
                    px-0.5
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? 'bg-[#0F5132] text-white shadow-[0_5px_16px_rgba(15,81,50,0.20)]'
                        : 'text-[#66736D] hover:bg-emerald-50 hover:text-[#0F5132]'
                    }
                  `}
                >

                  {/* Icon */}
                  <Icon
                    className={`
                      h-[18px]
                      w-[18px]
                      shrink-0
                      transition-transform
                      duration-300

                      ${
                        isActive
                          ? 'text-lime-400'
                          : 'text-current'
                      }
                    `}
                    strokeWidth={isActive ? 2.5 : 2}
                  />

                  {/* Label */}
                  <span
                    className={`
                      w-full
                      truncate
                      text-center
                      text-[7px]
                      leading-tight
                      sm:text-[8px]

                      ${
                        isActive
                          ? 'font-bold text-white'
                          : 'font-semibold'
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="mobile-bottom-active"
                      className="
                        absolute
                        bottom-1
                        h-1
                        w-1
                        rounded-full
                        bg-lime-400
                      "
                    />
                  )}

                </motion.div>
              </Link>
            );
          })}

        </div>
      </nav>
    </>
  );
}