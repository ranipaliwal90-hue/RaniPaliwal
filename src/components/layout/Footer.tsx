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
    <footer className="relative overflow-hidden border-t border-[#173A63] bg-[#08284D] pb-12 pt-16 text-white">

      {/* Decorative ambient glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

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
                    ring-emerald-300/30
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

                  <span className="text-2xl font-extrabold text-white">
                    Rani Paliwal
                  </span>

                  <span className="-mt-0.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                    ASN Certified Coach & Wellness Consultant
                  </span>

                </div>

              </Link>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-blue-100/80">
                Empowering individuals through personalized nutrition,
                fitness guidance, and sustainable lifestyle habits in
                Udaipur, Rajasthan.
              </p>

            </div>

            {/* =========================
                BEING FIT
            ========================== */}

            <div className="flex max-w-md items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3.5 shadow-sm backdrop-blur-sm">

              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white p-1">

                <img
                  src="/being.png"
                  alt="Being Fit Associated Club"
                  className="h-full w-full object-contain"
                />

              </div>

              <div className="flex flex-col">

                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200/70">
                  Associated Club
                </span>

                <span className="text-sm font-extrabold text-white">
                  Being Fit — Nutrition & Fitness Club
                </span>

                <span className="text-xs font-medium text-blue-100/70">
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
                  border-white/20
                  bg-white/5
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#08284D]
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
                  border-white/20
                  bg-white/5
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#08284D]
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
                  border-white/20
                  bg-white/5
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#08284D]
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
                  border-white/20
                  bg-white/5
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#08284D]
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
                  border-white/20
                  bg-white/5
                  text-emerald-300
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-500
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

            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
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
                      text-blue-100/80
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-white
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

            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
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
                      text-blue-100/80
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-white
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

            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Location
            </h4>

            <div className="space-y-3 text-sm text-blue-100/80">

              <div className="flex items-start gap-2.5">

                <MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />

                <span>
                  Being fit Nutriton and Fitness club
                  <br />
                  Shree Krishna, 1st floor, Near Shrinath hospital,
                  Navratna complex, Udaipur Rajasthan
                </span>

              </div>


              <div className="flex items-center gap-2.5">

                <Phone className="h-4 w-4 shrink-0 text-emerald-300" />

                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="font-bold text-white transition-colors hover:text-emerald-300"
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

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            pt-8
            text-xs
            text-blue-100/60
            md:flex-row
          "
        >

          <p className="text-center md:text-left">
            © 2026 Rani Paliwal. All rights reserved
            Associated with Being Fit Club.
          </p>


          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">

            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </Container>

    </footer>
  );
}