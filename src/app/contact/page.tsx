import type { Metadata } from 'next';
import {
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import {
  InstagramIcon,
  FacebookIcon,
} from '@/components/ui/SocialIcons';

import PageTransition from '@/components/animations/PageTransition';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import ContactForm from '@/components/contact/ContactForm';
import { BRAND_INFO } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Book a Consultation | Rani Paliwal',
  description:
    'Start your fitness and nutrition transformation with Coach Rani Paliwal. Get in touch for personalized coaching and wellness guidance.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="overflow-hidden bg-[#FAFDFA]">

        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden pb-16 pt-32 lg:pb-20 lg:pt-40">

          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-emerald-100/40 blur-3xl" />

          <div className="pointer-events-none absolute -left-32 top-1/2 h-[300px] w-[300px] rounded-full bg-lime-100/30 blur-3xl" />

          <Container size="large">

            <div className="mx-auto max-w-4xl text-center">

              <div className="animate-fade-in-up">
                <Badge
                  variant="green"
                  icon={<Sparkles className="h-3.5 w-3.5" />}
                >
                  Get In Touch
                </Badge>
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0F241A] sm:text-5xl lg:text-6xl">
                Start Your{' '}
                <span className="text-gradient-brand">
                  Transformation
                </span>{' '}
                With Rani
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Take the first step toward a healthier, stronger,
                and more confident lifestyle. Connect directly
                with Coach Rani Paliwal.
              </p>

            </div>

          </Container>
        </section>

        {/* =========================================================
            MAIN CONTACT SECTION
        ========================================================== */}
        <section className="relative bg-white pb-20 lg:pb-28">

          <Container size="large">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">

              {/* =====================================================
                  LEFT SIDE
              ====================================================== */}
              <div className="lg:col-span-5">

                <div className="mb-8">

                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">
                    Let&apos;s Connect
                  </p>

                  <h2 className="text-3xl font-extrabold tracking-tight text-[#0F241A] sm:text-4xl">
                    Ready to take the
                    <span className="block text-gradient-brand">
                      first step?
                    </span>
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                    Whether you&apos;re looking for personalized nutrition,
                    fitness coaching, online guidance, or group fitness,
                    reach out and let&apos;s discuss your goals.
                  </p>

                </div>

                {/* =================================================
                    CONTACT DETAILS
                ================================================== */}
                <div className="space-y-3">

                  {/* Phone */}
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="group flex items-center gap-4 rounded-2xl border border-emerald-100 bg-[#F6FBF7] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-lg"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F5132] text-lime-400 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-700">
                        Phone
                      </p>

                      <p className="mt-0.5 text-base font-bold text-[#0F241A]">
                        {BRAND_INFO.displayPhone}
                      </p>

                      <p className="text-xs text-gray-500">
                        Available Mon–Sat for consultations
                      </p>

                    </div>

                    <ArrowUpRight className="h-4 w-4 text-emerald-600 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />

                  </a>

                  {/* WhatsApp */}
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-emerald-100 bg-[#F6FBF7] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-lg"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-700">
                        WhatsApp
                      </p>

                      <p className="mt-0.5 text-base font-bold text-[#0F241A]">
                        Chat with Coach Rani
                      </p>

                      <p className="text-xs text-gray-500">
                        Direct 1-on-1 coaching inquiry
                      </p>

                    </div>

                    <ArrowUpRight className="h-4 w-4 text-emerald-600 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />

                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-[#F6FBF7] p-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F5132] text-lime-400 shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>

                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-700">
                        Location
                      </p>

                      <p className="mt-0.5 text-base font-bold text-[#0F241A]">
                        Udaipur, Rajasthan
                      </p>

                      <p className="text-xs text-gray-500">
                        Associated with Being Fit Club, Bhuwana
                      </p>

                    </div>

                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-[#F6FBF7] p-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F5132] text-lime-400 shadow-sm">
                      <Clock className="h-5 w-5" />
                    </div>

                    <div>

                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-700">
                        Consultation Hours
                      </p>

                      <p className="mt-0.5 text-sm font-bold text-[#0F241A]">
                        Mon – Sat: 5:30 AM – 10:30 PM
                      </p>

                      <p className="text-xs font-semibold text-gray-500">
                        Sunday: 8:00 AM – 12:00 PM
                      </p>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    SOCIAL LINKS — LOGO ONLY
                ================================================== */}
                <div className="mt-8 border-t border-emerald-100 pt-6">

                  <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.16em] text-gray-500">
                    Follow Rani&apos;s Journey
                  </p>

                  <div className="flex items-center gap-3">

                    {/* Instagram */}
                    <a
                      href="https://instagram.com/rani_paliwal?r=nametag"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Rani Paliwal Instagram"
                      title="Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-white text-[#0F5132] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5132] hover:text-white hover:shadow-lg"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/beingfit.asia"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Being Fit Facebook"
                      title="Facebook"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-white text-[#0F5132] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5132] hover:text-white hover:shadow-lg"
                    >
                      <FacebookIcon className="h-5 w-5" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/rani-paliwal-4164b670/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Rani Paliwal LinkedIn"
                      title="LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-white text-[#0F5132] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5132] hover:text-white hover:shadow-lg"
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
                      title="YouTube"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-white text-[#0F5132] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5132] hover:text-white hover:shadow-lg"
                    >
                      <span className="text-sm font-black">
                        ▶
                      </span>
                    </a>

                  </div>

                </div>

              </div>

              {/* =====================================================
                  RIGHT SIDE — CONTACT FORM
              ====================================================== */}
              <div className="lg:col-span-7">

                <div className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-[#F6FBF7] p-5 shadow-[0_20px_60px_rgba(15,81,50,0.08)] sm:p-7 lg:p-8">

                  <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-100/50 blur-2xl" />

                  <div className="relative">

                    <div className="mb-7">

                      <div className="mb-3 flex items-center gap-2">

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F5132] text-xs font-extrabold text-lime-400">
                          01
                        </span>

                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-emerald-700">
                          Consultation Request
                        </span>

                      </div>

                      <h2 className="text-2xl font-extrabold tracking-tight text-[#0F241A] sm:text-3xl">
                        Tell us about your goals
                      </h2>

                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-600">
                        Share a few details and Rani can understand
                        how best to guide your fitness and wellness journey.
                      </p>

                    </div>

                    <ContactForm />

                  </div>

                </div>

              </div>

            </div>

          </Container>

        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}
        <section className="border-t border-emerald-100 bg-[#F1F8F4] py-12">

          <Container size="large">

            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">

              <div>

                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">
                  Your Journey Starts Here
                </p>

                <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-[#0F241A]">
                  One conversation can be the first step.
                </h3>

              </div>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="group flex shrink-0 items-center gap-3 rounded-full bg-[#0F5132] px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B4329] hover:shadow-xl"
              >

                <Phone className="h-4 w-4 text-lime-400" />

                <span className="whitespace-nowrap">
                  {BRAND_INFO.displayPhone}
                </span>

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

              </a>

            </div>

          </Container>

        </section>

      </main>
    </PageTransition>
  );
}