'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  goal: string;
  preferredProgram: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    goal: 'Weight Loss & Fat Burn',
    preferredProgram: 'Weight Loss',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          goal: formData.goal,
          preferredProgram: formData.preferredProgram,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || 'Failed to send consultation request.'
        );
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Contact form error:', error);

      alert(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);

    setFormData({
      fullName: '',
      phone: '',
      email: '',
      goal: 'Weight Loss & Fat Burn',
      preferredProgram: 'Weight Loss',
      message: '',
    });

    setErrors({});
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-emerald-100 bg-white p-5 shadow-xl sm:p-8 lg:p-10">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col items-center justify-center space-y-4 py-12 text-center"
          >
            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#0F241A]">
              Thank You, {formData.fullName}!
            </h3>

            <p className="max-w-md text-base text-gray-600">
              Your consultation request has been received. Coach Rani
              Paliwal & Team Being Fit will reach out to you shortly.
            </p>

            <div className="pt-4">
              <Button
                onClick={resetForm}
                variant="secondary"
                size="md"
              >
                Submit Another Request
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* HEADER */}

            <div>
              <h3 className="mb-1 text-2xl font-bold text-[#0F241A]">
                Book Your Consultation
              </h3>

              <p className="text-sm text-gray-600">
                Fill out the form below and start your personalized
                fitness & nutrition journey.
              </p>
            </div>

            {/* FULL NAME */}

            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: e.target.value,
                  })
                }
                placeholder="e.g. Priya Sharma"
                className={`w-full rounded-xl border bg-[#F6FBF7] px-4 py-3 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-emerald-100 focus:ring-emerald-500'
                }`}
              />

              {errors.fullName && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* PHONE & EMAIL */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  placeholder="+91 99820XXXXX"
                  className={`w-full rounded-xl border bg-[#F6FBF7] px-4 py-3 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-emerald-100 focus:ring-emerald-500'
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-gray-700"
                >
                  Email Address (Optional)
                </label>

                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="yourname@example.com"
                  className={`w-full rounded-xl border bg-[#F6FBF7] px-4 py-3 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-emerald-100 focus:ring-emerald-500'
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* GOAL & PROGRAM */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="goal"
                  className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-gray-700"
                >
                  Your Primary Goal
                </label>

                <select
                  id="goal"
                  value={formData.goal}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      goal: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-emerald-100 bg-[#F6FBF7] px-4 py-3 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Weight Loss & Fat Burn">
                    Weight Loss & Fat Burn
                  </option>

                  <option value="Muscle Building & Strength">
                    Muscle Building & Strength
                  </option>

                  <option value="Clinical Nutrition & Digestion">
                    Clinical Nutrition & Digestion
                  </option>

                  <option value="Holistic Lifestyle Rejuvenation">
                    Holistic Lifestyle Rejuvenation
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="preferredProgram"
                  className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-gray-700"
                >
                  Preferred Program
                </label>

                <select
                  id="preferredProgram"
                  value={formData.preferredProgram}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferredProgram: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-emerald-100 bg-[#F6FBF7] px-4 py-3 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Weight Loss">
                    Weight Loss
                  </option>

                  <option value="Nutrition Coaching">
                    Nutrition Coaching
                  </option>

                  <option value="Personal Training">
                    Personal Training
                  </option>

                  <option value="Online Coaching">
                    Online Coaching
                  </option>

                  <option value="Wellness Coaching">
                    Wellness Coaching
                  </option>
                </select>
              </div>
            </div>

            {/* MESSAGE */}

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-gray-700"
              >
                Your Message / Specific Requirements
              </label>

              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                placeholder="Share any specific fitness background, health goals, or timing preferences..."
                className="w-full rounded-xl border border-emerald-100 bg-[#F6FBF7] px-4 py-3 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* ==================================================
                RESPONSIVE SUBMIT BUTTON
            ================================================== */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                flex
                w-full
                min-h-[56px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#0F5132]
                px-4
                py-4
                text-center
                text-sm
                font-extrabold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#0B4329]
                hover:shadow-xl
                sm:px-6
                sm:text-base
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {isSubmitting ? (
                <span className="whitespace-nowrap">
                  Sending...
                </span>
              ) : (
                <>
                  <span className="min-w-0 truncate">
                    Book My Consultation
                  </span>

                  <Send className="h-5 w-5 shrink-0" />
                </>
              )}
            </button>

          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}