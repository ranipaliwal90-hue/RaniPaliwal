import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  MessageCircle,
  Heart,
} from 'lucide-react';

import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import Container from '@/components/ui/Container';
import { NAV_ITEMS, BRAND_INFO } from '@/data/navigation';
import { PROGRAMS } from '@/data/programs';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#F4FBF7] to-[#E9F5EE] border-t border-emerald-100/80 pt-16 pb-12 relative overflow-hidden">

      {/* Decorative ambient glow */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <Container size="large" className="relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">

          {/* =========================
              BRAND
          ========================== */}

          <div className="lg:col-span-2 space-y-5">

            <div>

              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >

                {/* RANI PALIWAL LOGO */}

                <div className="relative w-12 h-12 shrink-0 rounded-full bg-white overflow-hidden shadow-md ring-1 ring-emerald-100">

                  <Image
                    src="/ranilogo.jpg"
                    alt="Rani Paliwal - Being Fit"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />

                </div>

                {/* BRAND TEXT */}

                <div className="flex flex-col">

                  <span className="font-extrabold text-2xl text-[#0F241A]">
                    Rani Paliwal
                  </span>

                  <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase -mt-0.5">
                    ASN Certified Coach & Wellness Consultant
                  </span>

                </div>

              </Link>

              <p className="text-sm text-gray-600 max-w-md leading-relaxed mt-3">
                Empowering individuals through personalized nutrition,
                fitness guidance, and sustainable lifestyle habits in
                Udaipur, Rajasthan.
              </p>

            </div>

            {/* =========================
                BEING FIT
            ========================== */}

            <div className="p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-xs max-w-md flex items-center gap-3.5">

              <div className="relative w-12 h-12 shrink-0 rounded-xl bg-[#F6FBF7] p-1 border border-emerald-100 overflow-hidden">

                <Image
                  src="/being.png"
                  alt="Being Fit Associated Club"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />

              </div>

              <div className="flex flex-col">

                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  Associated Club
                </span>

                <span className="text-sm font-extrabold text-[#0F5132]">
                  Being Fit — Nutrition & Fitness Club
                </span>

                <span className="text-xs text-gray-600 font-medium">
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
                className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-[#0F5132] hover:bg-[#0F5132] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xs"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* Facebook */}

              <a
                href="https://www.facebook.com/beingfit.asia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Being Fit Facebook"
                className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-[#0F5132] hover:bg-[#0F5132] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xs"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/rani-paliwal-4164b670/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rani Paliwal LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-[#0F5132] hover:bg-[#0F5132] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xs"
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
                className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-[#0F5132] hover:bg-[#0F5132] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xs"
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
                className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xs"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

            </div>

          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}

          <div className="space-y-4">

            <h4 className="text-xs font-bold text-[#0F5132] uppercase tracking-wider">
              Quick Links
            </h4>

            <ul className="space-y-2.5 text-sm">

              {NAV_ITEMS.map((item) => (
                <li key={item.href}>

                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#0F5132] hover:translate-x-1 inline-block transition-transform duration-200 font-semibold"
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

            <h4 className="text-xs font-bold text-[#0F5132] uppercase tracking-wider">
              Coaching Programs
            </h4>

            <ul className="space-y-2.5 text-sm">

              {PROGRAMS.map((prog) => (
                <li key={prog.id}>

                  <Link
                    href={`/programs#${prog.id}`}
                    className="text-gray-600 hover:text-[#0F5132] hover:translate-x-1 inline-block transition-transform duration-200 font-semibold"
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

            <h4 className="text-xs font-bold text-[#0F5132] uppercase tracking-wider">
              Contact & Location
            </h4>

            <div className="space-y-3 text-sm text-gray-600">

              <div className="flex items-start gap-2.5">

                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />

                <span>
                  Udaipur, Rajasthan
                  <br />
                  (Being Fit Fitness 2.0, Bhuwana)
                </span>

              </div>

              <div className="flex items-center gap-2.5">

                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />

                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="hover:text-[#0F5132] font-bold"
                >
                  {BRAND_INFO.displayPhone}
                </a>

              </div>

              <div className="pt-2 text-xs font-semibold text-emerald-800 bg-emerald-100/60 p-3 rounded-xl border border-emerald-200/50">

                <p>
                  Personal Consultations:
                </p>

                <p>
                  Mon - Sat: 5:30 AM – 10:30 PM
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM COPYRIGHT
        ========================== */}

        <div className="pt-8 border-t border-emerald-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">

          <p className="text-center md:text-left">
            © 2026 Rani Paliwal. All rights reserved. Associated with Being Fit Club.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">

            <Link
              href="/contact"
              className="hover:text-[#0F5132] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#0F5132] transition-colors"
            >
              Terms & Conditions
            </Link>

            <span className="flex items-center gap-1 text-emerald-700 font-semibold">

              Made with

              <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600 inline" />

              in Udaipur

            </span>

          </div>

        </div>

      </Container>

    </footer>
  );
}