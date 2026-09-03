'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Eye,
  X,
  Calculator,
  Award,
} from 'lucide-react';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import LeafDecoration from '@/components/ui/LeafDecoration';
import { RESULTS } from '@/data/results';

export default function TransformationGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] =
    useState<typeof RESULTS[0] | null>(null);

  // =====================================================
  // BMI CALCULATOR STATES
  // =====================================================

  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [age, setAge] = useState<string>('28');
  const [heightFt, setHeightFt] = useState<string>('5');
  const [heightIn, setHeightIn] = useState<string>('5');
  const [weightKg, setWeightKg] = useState<string>('65');

  const [bmiResult, setBmiResult] = useState<{
    bmi: number;
    category: string;
    color: string;
    bg: string;
    advice: string;
  } | null>(null);

  // =====================================================
  // CATEGORY FILTERS
  // =====================================================

  const categories = [
    'All',
    'Weight Loss',
    'Weight Gain',
    'Skin Result',
  ];

  const filteredResults = RESULTS.filter((item) => {
    if (activeCategory === 'All') {
      return true;
    }

    if (activeCategory === 'Weight Loss') {
      return item.title.toLowerCase().includes('loss');
    }

    if (activeCategory === 'Weight Gain') {
      return item.title.toLowerCase().includes('gain');
    }

    if (activeCategory === 'Skin Result') {
      const title = item.title.toLowerCase();
      const name = item.name.toLowerCase();

      return (
        title.includes('skin') ||
        title.includes('acne') ||
        title.includes('glow') ||
        title.includes('skin care') ||
        title.includes('skincare') ||
        name.includes('skin') ||
        name.includes('acne')
      );
    }

    return true;
  });

  // =====================================================
  // BMI CALCULATOR
  // =====================================================

  const handleCalculateBmi = (e: React.FormEvent) => {
    e.preventDefault();

    const feet = parseFloat(heightFt) || 0;
    const inches = parseFloat(heightIn) || 0;
    const weight = parseFloat(weightKg) || 0;

    if (feet <= 0 || weight <= 0) return;

    const totalInches = feet * 12 + inches;
    const heightMeters = totalInches * 0.0254;

    const bmiValue = parseFloat(
      (weight / (heightMeters * heightMeters)).toFixed(1)
    );

    let category = 'Normal Weight';
    let color = 'text-emerald-700';
    let bg = 'bg-emerald-100/80 border-emerald-300';

    let advice =
      'Great job! Your BMI is within the healthy range. Maintain your nutrition & workout routine.';

    if (bmiValue < 18.5) {
      category = 'Underweight';
      color = 'text-amber-800';
      bg = 'bg-amber-100 border-amber-300';

      advice =
        'You are currently below healthy weight. Coach Rani can help you build lean muscle with custom nutrition.';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      category = 'Overweight';
      color = 'text-orange-800';
      bg = 'bg-orange-100 border-orange-300';

      advice =
        'Your BMI indicates overweight. Join Coach Rani’s weight loss challenge to drop fat safely.';
    } else if (bmiValue >= 30) {
      category = 'Obese';
      color = 'text-rose-800';
      bg = 'bg-rose-100 border-rose-300';

      advice =
        'Your BMI indicates obesity. Coach Rani provides personalized metabolic resets & meal plans.';
    }

    setBmiResult({
      bmi: bmiValue,
      category,
      color,
      bg,
      advice,
    });
  };

  const handleClearBmi = () => {
    setAge('28');
    setHeightFt('5');
    setHeightIn('5');
    setWeightKg('65');
    setGender('female');
    setBmiResult(null);
  };

  return (
    <div className="min-h-screen bg-[#FAFDFA]">

      {/* =====================================================
          HERO / HEADER
      ====================================================== */}

      <section className="relative overflow-hidden bg-radial-glow pb-14 pt-28 lg:pb-16 lg:pt-36">

        <LeafDecoration
          size="lg"
          className="left-4 top-10"
        />

        <Container size="large">

          <div className="mx-auto max-w-3xl text-center">

            <motion.div
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Badge
                variant="green"
                icon={<Award className="h-3.5 w-3.5" />}
              >
                SUCCESS STORIES & TRANSFORMATIONS
              </Badge>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mt-3 mb-4 text-4xl font-extrabold tracking-tight text-[#0F241A] sm:text-5xl lg:text-6xl"
            >
              Real People.{' '}
              <span className="text-gradient-brand">
                Real Results.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              Discover inspiring transformation journeys achieved
              through home-cooked nutrition, personalized coaching,
              and sustainable habits with Coach Rani Paliwal.
            </motion.p>

            {/* =================================================
                CATEGORY FILTER TABS
            ================================================== */}

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
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >

              {categories.map((cat) => (

                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    text-xs
                    font-extrabold
                    transition-all
                    duration-300
                    sm:text-sm
                    ${
                      activeCategory === cat
                        ? 'scale-105 bg-[#0F5132] text-white shadow-md shadow-emerald-950/20'
                        : 'border border-emerald-100 bg-white text-gray-700 hover:bg-emerald-50 hover:text-[#0F5132]'
                    }
                  `}
                >
                  {cat}
                </button>

              ))}

            </motion.div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          TRANSFORMATION GALLERY
      ====================================================== */}

      <section className="bg-white py-14">

        <Container size="large">

          {filteredResults.length > 0 ? (

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              {filteredResults.map((item, index) => (

                <motion.div
                  key={`${item.name}-${index}`}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 4) * 0.06,
                  }}
                  className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-emerald-100/90 bg-[#F6FBF7] shadow-md transition-all duration-300 hover:shadow-xl"
                >

                  {/* IMAGE */}

                  <div
                    className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-white"
                    onClick={() => setSelectedImage(item)}
                  >

                    <Image
                      src={item.image}
                      alt={`${item.name} transformation`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain object-center p-2 transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* HOVER OVERLAY */}

                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0F5132] shadow-lg transition-transform group-hover:scale-110">

                        <Eye className="h-6 w-6" />

                      </div>

                    </div>

                    {/* RESULT BADGE */}

                    <span className="absolute left-4 top-4 rounded-full border border-emerald-400/30 bg-[#0F5132]/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                      {item.result || 'Success Story'}
                    </span>

                  </div>


                  {/* CARD CONTENT */}

                  <div className="p-6">

                    <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-widest text-emerald-700">
                      Verified Transformation
                    </span>

                    <h3 className="mb-1 text-xl font-extrabold text-[#0F241A]">
                      {item.name}
                    </h3>

                    <p className="mb-4 text-sm font-bold text-emerald-800">
                      {item.title}
                    </p>

                    <div className="flex items-center justify-between border-t border-emerald-100/80 pt-3">

                      <span className="text-xs font-semibold text-gray-600">
                        Coach Rani Paliwal
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedImage(item)}
                        className="flex items-center gap-1 text-xs font-extrabold text-[#0F5132] hover:underline"
                      >
                        View Photo
                        <Eye className="h-3.5 w-3.5" />
                      </button>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          ) : (

            /* =================================================
               NO SKIN RESULTS MESSAGE
            ================================================== */

            <div className="flex min-h-[280px] items-center justify-center text-center">

              <div>

                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <Eye className="h-7 w-7 text-emerald-600" />
                </div>

                <h3 className="text-xl font-extrabold text-[#0F241A]">
                  No Skin Results Added Yet
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
                  Skin transformation results will appear here once
                  they are added to the results data.
                </p>

              </div>

            </div>

          )}

        </Container>

      </section>


      {/* =====================================================
          BMI CALCULATOR
      ====================================================== */}

      <section className="relative overflow-hidden border-y border-emerald-100 bg-gradient-to-b from-[#F1F8F4] via-[#FAFDFA] to-[#F1F8F4] py-20">

        <Container size="normal">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <Badge
              variant="green"
              icon={<Calculator className="h-3.5 w-3.5" />}
            >
              Body Composition Audit
            </Badge>

            <h2 className="mt-2 text-3xl font-extrabold text-[#0F241A] sm:text-4xl">
              Calculate Your Body Mass Index (BMI)
            </h2>

            <p className="mt-2 text-base text-gray-600">
              Find out your current BMI category and get
              personalized wellness advice from Coach Rani Paliwal.
            </p>

          </div>


          <div className="grid grid-cols-1 overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-xl md:grid-cols-12">

            {/* FORM */}

            <form
              onSubmit={handleCalculateBmi}
              className="border-b border-emerald-100 p-6 md:col-span-7 md:border-b-0 md:border-r sm:p-10"
            >

              <div className="space-y-5">

                {/* GENDER */}

                <div>

                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-600">
                    Gender
                  </label>

                  <div className="flex gap-4">

                    <label className="flex cursor-pointer items-center gap-2">

                      <input
                        type="radio"
                        name="gender"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                        className="h-4 w-4 accent-[#0F5132]"
                      />

                      <span className="text-sm font-bold text-gray-800">
                        Female
                      </span>

                    </label>

                    <label className="flex cursor-pointer items-center gap-2">

                      <input
                        type="radio"
                        name="gender"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                        className="h-4 w-4 accent-[#0F5132]"
                      />

                      <span className="text-sm font-bold text-gray-800">
                        Male
                      </span>

                    </label>

                  </div>

                </div>


                {/* AGE + WEIGHT */}

                <div className="grid grid-cols-2 gap-4">

                  <div>

                    <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-600">
                      Age (Years)
                    </label>

                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full rounded-xl border border-emerald-200 bg-[#F6FBF7] px-4 py-2.5 text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F5132]"
                      required
                    />

                  </div>


                  <div>

                    <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-600">
                      Weight (KG)
                    </label>

                    <input
                      type="number"
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      className="w-full rounded-xl border border-emerald-200 bg-[#F6FBF7] px-4 py-2.5 text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F5132]"
                      required
                    />

                  </div>

                </div>


                {/* HEIGHT */}

                <div>

                  <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-600">
                    Height (Feet & Inches)
                  </label>

                  <div className="grid grid-cols-2 gap-4">

                    <input
                      type="number"
                      placeholder="Feet"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="w-full rounded-xl border border-emerald-200 bg-[#F6FBF7] px-4 py-2.5 text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F5132]"
                      required
                    />

                    <input
                      type="number"
                      placeholder="Inches"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="w-full rounded-xl border border-emerald-200 bg-[#F6FBF7] px-4 py-2.5 text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F5132]"
                      required
                    />

                  </div>

                </div>


                {/* BUTTONS */}

                <div className="flex gap-3 pt-2">

                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-[#0F5132] py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#0D4028]"
                  >
                    Calculate BMI
                  </button>

                  <button
                    type="button"
                    onClick={handleClearBmi}
                    className="rounded-xl border border-emerald-200 px-5 py-3 text-sm font-bold text-emerald-800 transition-colors hover:bg-emerald-50"
                  >
                    Reset
                  </button>

                </div>

              </div>

            </form>


            {/* BMI RESULT */}

            <div className="flex flex-col justify-center bg-[#F6FBF7] p-6 text-center md:col-span-5 sm:p-10">

              {bmiResult ? (

                <div className="animate-fadeIn space-y-4">

                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                    Your Calculated BMI
                  </span>

                  <div className="text-5xl font-black text-[#0F241A]">
                    {bmiResult.bmi}
                  </div>

                  <span
                    className={`inline-block rounded-full border px-4 py-1.5 text-sm font-extrabold ${bmiResult.bg} ${bmiResult.color}`}
                  >
                    {bmiResult.category}
                  </span>

                  <p className="pt-2 text-xs font-medium leading-relaxed text-gray-600">
                    {bmiResult.advice}
                  </p>

                  <div className="pt-4">

                    <Button
                      href="/contact"
                      variant="primary"
                      size="sm"
                      showArrow
                      className="w-full"
                    >
                      Book Free Consultation
                    </Button>

                  </div>

                </div>

              ) : (

                <div className="py-6 text-center text-gray-500">

                  <Calculator className="mx-auto mb-3 h-12 w-12 text-emerald-300" />

                  <p className="text-sm font-bold text-gray-700">
                    Enter your details
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Click Calculate BMI to view your category.
                  </p>

                </div>

              )}

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          RECOMMENDED HEIGHT & WEIGHT CHART
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">
        <Container size="large">

          {/* HEADER */}
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-700">
                Healthy Weight Guide
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="text-3xl font-extrabold tracking-tight text-[#0F241A] sm:text-4xl lg:text-5xl"
            >
              Recommended Height & Weight Chart
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base"
            >
              Find your ideal weight range based on your height.
            </motion.p>

          </div>

          {/* =================================================
              RESPONSIVE TABLE
              Mobile: fits completely inside the screen.
              No horizontal scroll / no slider.
          ================================================== */}
          <div className="w-full overflow-hidden rounded-[20px] border border-emerald-100 bg-white shadow-[0_12px_35px_rgba(15,81,50,0.08)] sm:rounded-[28px]">

            <table className="w-full table-fixed border-collapse text-center">

              {/* Fixed column widths so the table never overflows on mobile */}
              <colgroup>
                <col className="w-[17%]" />
                <col className="w-[23%]" />
                <col className="w-[30%]" />
                <col className="w-[30%]" />
              </colgroup>

              <thead>
                <tr className="bg-[#3B8545] text-white">

                  <th className="min-w-0 break-words px-1 py-3 text-[9px] font-extrabold leading-tight sm:px-4 sm:py-4 sm:text-sm md:text-base">
                    Height
                  </th>

                  <th className="min-w-0 break-words px-1 py-3 text-[9px] font-extrabold leading-tight sm:px-4 sm:py-4 sm:text-sm md:text-base">
                    Height (cm)
                  </th>

                  <th className="min-w-0 break-words px-1 py-3 text-[9px] font-extrabold leading-tight sm:px-4 sm:py-4 sm:text-sm md:text-base">
                    Weight – Women (kg)
                  </th>

                  <th className="min-w-0 break-words px-1 py-3 text-[9px] font-extrabold leading-tight sm:px-4 sm:py-4 sm:text-sm md:text-base">
                    Weight – Men (kg)
                  </th>

                </tr>
              </thead>

              <tbody>
                {[
                  ['4\'10"', '147.3', '44–49', '53–59'],
                  ['4\'11"', '149.9', '45–50', '57–60'],
                  ['5\'0"', '152.4', '46–51', '58–61'],
                  ['5\'1"', '154.9', '47–53', '59–62'],
                  ['5\'2"', '157.5', '49–54', '61–63'],
                  ['5\'3"', '160.0', '50–56', '62–64'],
                  ['5\'4"', '162.6', '51–57', '63–65'],
                  ['5\'5"', '165.1', '53–59', '64–66'],
                  ['5\'6"', '167.6', '55–61', '65–67'],
                  ['5\'7"', '170.2', '56–63', '65–69'],
                  ['5\'8"', '172.7', '58–65', '66–70'],
                  ['5\'9"', '175.3', '60–67', '67–72'],
                  ['5\'10"', '177.8', '62–69', '68–74'],
                  ['5\'11"', '180.3', '64–71', '69–77'],
                  ['6\'0"', '182.9', '66–72', '70–79'],
                  ['6\'1"', '185.4', '67–73', '71–80'],
                  ['6\'2"', '188.0', '68–74', '72–82'],
                  ['6\'3"', '190.5', '69–75', '73–84'],
                  ['6\'4"', '193.0', '70–77', '74–86'],
                ].map((row, index) => (
                  <tr
                    key={row[0]}
                    className={`border-t border-emerald-100 ${
                      index % 2 === 0
                        ? 'bg-white'
                        : 'bg-[#F6FBF7]'
                    }`}
                  >

                    <td className="whitespace-nowrap px-1 py-2.5 text-[10px] font-extrabold text-[#2F7D3C] sm:px-4 sm:py-3.5 sm:text-sm md:text-base">
                      {row[0]}
                    </td>

                    <td className="whitespace-nowrap px-1 py-2.5 text-[10px] font-medium text-gray-700 sm:px-4 sm:py-3.5 sm:text-sm md:text-base">
                      {row[1]}
                    </td>

                    <td className="whitespace-nowrap px-1 py-2.5 text-[10px] font-semibold text-gray-700 sm:px-4 sm:py-3.5 sm:text-sm md:text-base">
                      {row[2]}
                    </td>

                    <td className="whitespace-nowrap px-1 py-2.5 text-[10px] font-semibold text-gray-700 sm:px-4 sm:py-3.5 sm:text-sm md:text-base">
                      {row[3]}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          {/* NOTE */}
          <p className="mt-4 px-2 text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
            * Weight ranges are approximate and may vary based on body frame and muscle mass.
          </p>

        </Container>
      </section>


      {/* =====================================================
          LIGHTBOX PREVIEW
      ====================================================== */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setSelectedImage(null)}
          >

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black"
              >
                <X className="h-5 w-5" />
              </button>


              {/* IMAGE */}

              <div className="relative aspect-[4/3] w-full bg-gray-100">

                <Image
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  fill
                  className="object-contain p-2"
                />

              </div>


              {/* CONTENT */}

              <div className="flex flex-col justify-between gap-4 bg-white p-6 sm:flex-row sm:items-center">

                <div>

                  <h3 className="text-xl font-extrabold text-[#0F241A]">
                    {selectedImage.name}
                  </h3>

                  <p className="text-sm font-bold text-emerald-800">
                    {selectedImage.title}
                  </p>

                </div>

                <Button
                  href="/contact"
                  variant="primary"
                  size="sm"
                  showArrow
                >
                  Start Transformation
                </Button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}