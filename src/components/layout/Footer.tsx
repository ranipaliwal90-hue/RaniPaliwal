import React from 'react';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  MessageCircle,
  Heart,
} from 'lucide-react';

import {
  InstagramIcon,
  FacebookIcon,
} from '@/components/ui/SocialIcons';

import Container from '@/components/ui/Container';
import { NAV_ITEMS, BRAND_INFO } from '@/data/navigation';
import { PROGRAMS } from '@/data/programs';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-100/80 bg-gradient-to-b from-[#F4FBF7] to-[#E9F5EE] pb-12 pt-16">

      {/* Decorative ambient glow */}

      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />


      <Container
        size="large"
        className="relative z-10"
      >

        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* =========================
              BRAND
          ========================== */}

          <div className="space-y-5 lg:col-span-2">

            <div>

              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >

                {/* RP LOGO */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0F5132]
                    shadow-md
                    ring-1
                    ring-emerald-100
                  "
                >
                  <span
                    className="
                      text-[16px]
                      font-black
                      tracking-[-0.08em]
                      text-white
                    "
                  >
                    RP
                  </span>
                </div>


                {/* BRAND TEXT */}

                <div className="flex flex-col">

                  <span className="text-2xl font-extrabold text-[#0F241A]">
                    Rani Paliwal
                  </span>

                  <span className="-mt-0.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    ASN Certified Coach & Wellness Consultant
                  </span>

                </div>

              </Link>


              <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
                Empowering individuals through personalized nutrition,
                fitness guidance, and sustainable lifestyle habits in
                Udaipur, Rajasthan.
              </p>

            </div>


            {/* =========================
                BEING FIT
            ========================== */}

            <div className="flex max-w-md items-center gap-3.5 rounded-2xl border border-emerald-100 bg-white p-3.5 shadow-xs">

              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-emerald-100 bg-[#F6FBF7] p-1">

                <img
                  src="/being.png"
                  alt="Being Fit Associated Club"
                  className="h-full w-full object-contain"
                />

              </div>


              <div className="flex flex-col">

                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Associated Club
                </span>

                <span className="text-sm font-extrabold text-[#0F5132]">
                  Being Fit — Nutrition & Fitness Club
                </span>

                <span className="text-xs font-medium text-gray-600">
                  Bhuwana, Udaipur
                </span>

              </div>

            </div>


            {/* =========================
                SOCIAL LINKS
            ========================== */}

            <div className="flex flex-wrap items-center gap-3 pt-1">

              {/* Instagram */}

              <a
                href="https://instagram.com/rani_paliwal?r=nametag"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rani Paliwal Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-200
                  bg-white
                  text-[#0F5132]
                  shadow-xs
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0F5132]
                  hover:text-white
                "
              >
                <InstagramIcon className="h-5 w-5" />
              </a>


              {/* Facebook */}

              <a
                href="https://www.facebook.com/beingfit.asia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Being Fit Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-200
                  bg-white
                  text-[#0F5132]
                  shadow-xs
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0F5132]
                  hover:text-white
                "
              >
                <FacebookIcon className="h-5 w-5" />
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/rani-paliwal-4164b670/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rani Paliwal LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-200
                  bg-white
                  text-[#0F5132]
                  shadow-xs
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0F5132]
                  hover:text-white
                "
              >
                <span className="text-sm font-black">
                  in
                </span>
              </a>


              {/* YouTube */}

              <a
                href="https://www.youtube.com/@ranipaliwal3200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rani Paliwal YouTube"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-200
                  bg-white
                  text-[#0F5132]
                  shadow-xs
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0F5132]
                  hover:text-white
                "
              >
                <span className="text-sm font-black">
                  ▶
                </span>
              </a>


              {/* WhatsApp */}

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-200
                  bg-white
                  text-emerald-600
                  shadow-xs
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-600
                  hover:text-white
                "
              >
                <MessageCircle className="h-5 w-5" />
              </a>

            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================== */}

          <div className="space-y-4">

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F5132]">
              Quick Links
            </h4>

            <ul className="space-y-2.5 text-sm">

              {NAV_ITEMS.map((item) => (

                <li key={item.href}>

                  <Link
                    href={item.href}
                    className="
                      inline-block
                      font-semibold
                      text-gray-600
                      transition-transform
                      duration-200
                      hover:translate-x-1
                      hover:text-[#0F5132]
                    "
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =========================
              PROGRAMS
          ========================== */}

          <div className="space-y-4">

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F5132]">
              Coaching Programs
            </h4>

            <ul className="space-y-2.5 text-sm">

              {PROGRAMS.map((prog) => (

                <li key={prog.id}>

                  <Link
                    href={`/programs#${prog.id}`}
                    className="
                      inline-block
                      font-semibold
                      text-gray-600
                      transition-transform
                      duration-200
                      hover:translate-x-1
                      hover:text-[#0F5132]
                    "
                  >
                    {prog.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =========================
              CONTACT
          ========================== */}

          <div className="space-y-4">

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F5132]">
              Contact & Location
            </h4>

            <div className="space-y-3 text-sm text-gray-600">

              <div className="flex items-start gap-2.5">

                <MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />

                <span>
                  Udaipur, Rajasthan
                  <br />
                  (Being fit Nutrtion and Fitness Club)
                </span>

              </div>


              <div className="flex items-center gap-2.5">

                <Phone className="h-4 w-4 shrink-0 text-emerald-600" />

                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="font-bold hover:text-[#0F5132]"
                >
                  {BRAND_INFO.displayPhone}
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM COPYRIGHT
        ========================== */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-emerald-200/60 pt-8 text-xs text-gray-500 md:flex-row">

          <p className="text-center md:text-left">
            © 2026 Rani Paliwal. All rights reserved
            Associated with Being Fit Club.
          </p>


          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">

            <Link
              href="/contact"
              className="transition-colors hover:text-[#0F5132]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-[#0F5132]"
            >
              Terms & Conditions
            </Link>

            {/* <span className="flex items-center gap-1 font-semibold text-emerald-700">

              Made with

              <Heart className="inline h-3.5 w-3.5 fill-emerald-600 text-emerald-600" />

              in Udaipur

            </span> */}

          </div>

        </div>

      </Container>

    </footer>
  );
}