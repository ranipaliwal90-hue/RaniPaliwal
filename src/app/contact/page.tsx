import type { Metadata } from 'next';
import {
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Navigation,
} from 'lucide-react';

import {
  InstagramIcon,
  FacebookIcon,
} from '@/components/ui/SocialIcons';
import { RiWhatsappLine, RiYoutubeFill } from 'react-icons/ri';

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

              {/* =================================================
                  SOCIAL LINKS — TOP
              ================================================== */}
              <div className="mt-8 flex flex-col items-center">
                <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-emerald-700">
                  Follow Rani&apos;s Journey
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                  <a
                    href="https://instagram.com/rani_paliwal?r=nametag"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rani Paliwal Instagram"
                    title="Instagram"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-100 bg-white text-[#0F5132] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5132] hover:text-white hover:shadow-lg sm:h-16 sm:w-16"
                  >
                    <InstagramIcon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </a>

                  <a
                    href="https://www.facebook.com/beingfit.asia"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Being Fit Facebook"
                    title="Facebook"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-100 bg-white text-[#0F5132] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5132] hover:text-white hover:shadow-lg sm:h-16 sm:w-16"
                  >
                    <FacebookIcon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rani-paliwal-4164b670/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rani Paliwal LinkedIn"
                    title="LinkedIn"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-100 bg-white text-[#0F5132] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5132] hover:text-white hover:shadow-lg sm:h-16 sm:w-16"
                  >
                    <span className="text-lg font-black sm:text-xl">in</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@ranipaliwal3200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rani Paliwal YouTube"
                    title="YouTube"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-100 bg-white text-[#0F5132] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5132] hover:text-white hover:shadow-lg sm:h-16 sm:w-16"
                  >
                    <RiYoutubeFill className="h-8 w-8 sm:h-9 sm:w-9" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Rani Paliwal on WhatsApp"
                    title="WhatsApp"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-100 bg-white text-emerald-600 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white hover:shadow-lg sm:h-16 sm:w-16"
                  >
                    <RiWhatsappLine className="h-8 w-8 sm:h-9 sm:w-9" />
                  </a>
                </div>
              </div>

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
                  LEFT SIDE — MAP & INFO
              ====================================================== */}
            <div className="order-2 lg:order-1 lg:col-span-5">

                <div className="mb-7">

                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">
                    Visit Us
                  </p>

                  <h2 className="text-3xl font-extrabold tracking-tight text-[#0F241A] sm:text-4xl">
                    Find Us in
                    <span className="block text-gradient-brand">
                      Udaipur
                    </span>
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                    Visit Being Fit Nutrition & Fitness Club in
                    Bhuwana, Udaipur for personalized fitness and
                    wellness guidance.
                  </p>

                </div>


                {/* =================================================
                    GOOGLE MAP
                ================================================== */}
                <div className="overflow-hidden rounded-[28px] border border-emerald-100 bg-white shadow-[0_20px_60px_rgba(15,81,50,0.10)]">

                  <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[460px]">

                    <iframe
                      title="Rani Paliwal Location - Udaipur"
                      src="https://www.google.com/maps?q=24.6181869,73.6965305&z=18&output=embed"
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                      }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />

                  </div>

                </div>


                {/* =================================================
                    LOCATION INFO
                ================================================== */}
                <div className="mt-4 rounded-2xl border border-emerald-100 bg-[#F6FBF7] p-4">

                  <div className="flex items-start gap-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0F5132] text-lime-400">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-700">
                        Location
                      </p>

                      <p className="mt-0.5 text-base font-bold text-[#0F241A]">
                        Udaipur, Rajasthan
                      </p>

                      <p className="text-xs leading-relaxed text-gray-500">
                       Being Fit, Near Shrinath Hospital, Navratna Complex, Pulla Bhuwana, Mahaveer Colony Park, Udaipur, Rajasthan 313011
                      </p>

                    </div>

                  </div>


                  {/* GET DIRECTIONS */}
                  <a
                    href="https://www.google.com/maps/place/Herbalife+Udaipur+%7C+Herbalife+Products+%7C+Weight+Gain+Weight+Loss+Udaipur/@24.6182918,73.6961858,18z/data=!4m6!3m5!1s0x3967e5bdca5efde5:0xfbb2374d5b5a0765!8m2!3d24.6181869!4d73.6965305!16s%2Fg%2F11gcfqr1t7?hl=en-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#8BC52B] px-5 py-3 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(139,197,43,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#79AF20] hover:shadow-[0_12px_25px_rgba(139,197,43,0.28)]"
                  >

                    <Navigation className="h-4 w-4" />

                    <span>
                      Get Directions
                    </span>

                    <ArrowUpRight className="h-4 w-4" />

                  </a>

                </div>


              </div>


              {/* =====================================================
                  RIGHT SIDE — CONTACT FORM
              ====================================================== */}
             <div className="order-1 lg:order-2 lg:col-span-7">

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
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex shrink-0 items-center gap-3 rounded-full bg-[#0F5132] px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B4329] hover:shadow-xl"
              >

                <MessageCircle className="h-4 w-4 text-lime-400" />

                <span className="whitespace-nowrap">
                  Chat on WhatsApp
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