'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  User,
  MapPin,
  Phone,
  Briefcase,
  Home,
  Send,
  CheckCircle2,
} from 'lucide-react';

interface ApplyCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyCoachModal({
  isOpen,
  onClose,
}: ApplyCoachModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    area: '',
    phone: '',
    previousWork: '',
    workPreference: '',
    careerGoal: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/apply-coach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          area: formData.area,
          phone: formData.phone,
          previousWork: formData.previousWork,
          workPreference: formData.workPreference,
          careerReason: formData.careerGoal,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || 'Something went wrong. Please try again.'
        );
      }

      console.log('Coach Application Sent Successfully:', data);

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        onClose();

        setFormData({
          name: '',
          area: '',
          phone: '',
          previousWork: '',
          workPreference: '',
          careerGoal: '',
        });
      }, 2500);
    } catch (error) {
      console.error('Coach Application Error:', error);

      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-[28px] bg-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:rotate-90 hover:bg-emerald-100 hover:text-[#0F5132] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <X className="h-5 w-5" />
            </button>

            {/* HEADER */}
            <div className="bg-gradient-to-br from-[#0F5132] to-[#0B4329] px-6 py-8 text-white sm:px-8">
              <div className="max-w-xl">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-lime-300">
                  Team Rani Paliwal
                </p>

                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Apply to Join Our Team
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-emerald-50 sm:text-base">
                  Share a few details with us and take the first step toward
                  building your career in fitness & wellness.
                </p>
              </div>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted ? (
              <motion.div
                className="flex min-h-[420px] flex-col items-center justify-center px-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.15,
                    type: 'spring',
                    stiffness: 180,
                  }}
                >
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </motion.div>

                <h3 className="text-2xl font-extrabold text-[#0F241A]">
                  Application Submitted!
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
                  Thank you for your interest in joining Team Rani Paliwal.
                  Our team will get in touch with you soon.
                </p>
              </motion.div>
            ) : (
              /* FORM */
              <form
                onSubmit={handleSubmit}
                className="space-y-5 px-6 py-7 sm:px-8 sm:py-8"
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-[#0F241A]"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600" />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12 w-full rounded-xl border border-emerald-100 bg-[#F8FCF9] pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>
                </div>

                {/* AREA + PHONE */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* AREA */}
                  <div>
                    <label
                      htmlFor="area"
                      className="mb-2 block text-sm font-bold text-[#0F241A]"
                    >
                      Area / City
                    </label>

                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600" />

                      <input
                        id="area"
                        name="area"
                        type="text"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="e.g. Udaipur"
                        required
                        className="h-12 w-full rounded-xl border border-emerald-100 bg-[#F8FCF9] pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-[#0F241A]"
                    >
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600" />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                        className="h-12 w-full rounded-xl border border-emerald-100 bg-[#F8FCF9] pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>
                </div>

                {/* PREVIOUS WORK */}
                <div>
                  <label
                    htmlFor="previousWork"
                    className="mb-2 block text-sm font-bold text-[#0F241A]"
                  >
                    Previous Work
                  </label>

                  <div className="relative">
                    <Briefcase className="absolute left-4 top-4 h-5 w-5 text-emerald-600" />

                    <textarea
                      id="previousWork"
                      name="previousWork"
                      value={formData.previousWork}
                      onChange={handleChange}
                      placeholder="Tell us about your previous work or experience..."
                      rows={3}
                      className="w-full resize-none rounded-xl border border-emerald-100 bg-[#F8FCF9] py-3 pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>
                </div>

                {/* WORK PREFERENCE */}
                <div>
                  <label
                    htmlFor="workPreference"
                    className="mb-2 block text-sm font-bold text-[#0F241A]"
                  >
                   What is your Goal
                  </label>

                  <div className="relative">
                    <Home className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600" />

                    <select
                      id="workPreference"
                      name="workPreference"
                      value={formData.workPreference}
                      onChange={handleChange}
                      required
                      className="h-12 w-full appearance-none rounded-xl border border-emerald-100 bg-[#F8FCF9] pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    >
                      <option value="" disabled>
                        Select work preference
                      </option>

                      <option value="Career Building">
                        Career Building
                      </option>

                      <option value="Part Time Business">
                        Part Time Business
                      </option>

                      <option value="Lifestyle Improvement">
                        Lifestyle Improvement
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                {/* CAREER GOAL */}
                <div>
                  <label
                    htmlFor="careerGoal"
                    className="mb-2 block text-sm font-bold text-[#0F241A]"
                  >
                    Tell Us About Your Career Goal
                  </label>

                  <textarea
                    id="careerGoal"
                    name="careerGoal"
                    value={formData.careerGoal}
                    onChange={handleChange}
                    placeholder="What would you like to achieve with us?"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-emerald-100 bg-[#F8FCF9] px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>

                {/* ERROR MESSAGE */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-600"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* SUBMIT */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{
                    scale: loading ? 1 : 1.02,
                    y: loading ? 0 : -2,
                  }}
                  whileTap={{
                    scale: loading ? 1 : 0.98,
                  }}
                  className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#0F5132] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:bg-[#0B4329] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span>
                    {loading
                      ? 'Sending Application...'
                      : 'Submit Application'}
                  </span>

                  <Send
                    className={`h-4 w-4 transition-transform duration-300 ${
                      loading
                        ? 'animate-pulse'
                        : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                    }`}
                  />
                </motion.button>

                <p className="text-center text-xs leading-relaxed text-gray-400">
                  By submitting this form, you agree to be contacted regarding
                  your coaching application.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}