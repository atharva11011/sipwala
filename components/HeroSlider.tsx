'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const slides = [
  {
    label: 'Mutual Funds',
    title: 'Grow Your Wealth',
    subtitle: 'Expert-curated funds for every risk profile.',
    img: '/slides/pexels-ambam-29063346.png',
  },
  {
    label: 'Life Insurance',
    title: 'Life Insurance',
    subtitle: 'Life Is Very Unpredictable. We Have Plans For Every Situation.',
    img: '/slides/pexels-kindelmedia-6774947.png',
  },
  {
    label: 'SIP Planning',
    title: 'Start Your SIP Today',
    subtitle: 'Small steps, big corpus. Start with just ₹500/month.',
    img: '/slides/pexels-maitree-rimthong-444156-1602726.png',
  },
  {
    label: 'Tax Savings',
    title: 'Save Tax with ELSS',
    subtitle: 'Save up to ₹46,800 every year under Section 80C.',
    img: '/slides/pexels-towfiqu-barbhuiya-3440682-10972831.png',
  },
] as const;

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const goTo = useCallback((index: number) => {
    const safeIndex = ((index % slides.length) + slides.length) % slides.length;
    setCurrentSlide(safeIndex);
  }, []);

  const next = useCallback(() => {
    setCurrentSlide((s) => (s + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      next();
    }, 5000);

    return () => window.clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full min-h-[100svh] pt-14 sm:pt-16 box-border overflow-hidden bg-[linear-gradient(160deg,#F0F7FF_0%,#F0FDF8_50%,#FFFDF0_100%)]">
      {/* Background image crossfade */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={slides[currentSlide].img}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.99 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={false}
        >
          <Image
            src={slides[currentSlide].img}
            alt={slides[currentSlide].title}
            fill
            priority={currentSlide === 0}
            className="object-cover"
            sizes="100vw"
          />

          {/* Soft navy overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--navy-950-rgb)/0.72)] via-[rgb(var(--navy-950-rgb)/0.42)] to-transparent animate-hero-hue" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 min-h-[100svh] flex items-center pb-20 sm:pb-16">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-[14px] py-[5px] rounded-full bg-[rgb(var(--text-white-rgb)/0.14)] backdrop-blur-sm border border-[rgb(var(--text-white-rgb)/0.16)]"
              >
                <span className="text-[11px] font-bold uppercase tracking-[2px] text-[rgb(var(--text-white-rgb)/0.92)] font-headline">
                  {slides[currentSlide].label}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-5 sm:mt-6 font-headline text-[40px] sm:text-[44px] md:text-[72px] font-black tracking-tight text-[var(--text-white)] leading-[1.05]"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] font-normal text-[rgb(var(--text-white-rgb)/0.84)] leading-[1.8] max-w-xl"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/mutual-funds"
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-headline font-bold tracking-tight text-[15px] sm:text-[16px] text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
                >
                  Read More
                </Link>
                <Link
                  href="/contact"
                  className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-headline font-bold tracking-tight text-[15px] sm:text-[16px] text-[var(--text-white)] border border-[rgb(var(--text-white-rgb)/0.35)] hover:bg-[rgb(var(--text-white-rgb)/0.10)] transition-colors"
                >
                  Contact Now
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow controls */}
        <button
          type="button"
          onClick={prev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[rgb(var(--text-white-rgb)/0.70)] hover:bg-[rgb(var(--text-white-rgb)/0.86)] transition-colors items-center justify-center"
          aria-label="Previous slide"
        >
          <span className="material-symbols-outlined text-[var(--text-primary)]">chevron_left</span>
        </button>
        <button
          type="button"
          onClick={next}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[rgb(var(--text-white-rgb)/0.70)] hover:bg-[rgb(var(--text-white-rgb)/0.86)] transition-colors items-center justify-center"
          aria-label="Next slide"
        >
          <span className="material-symbols-outlined text-[var(--text-primary)]">chevron_right</span>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {slides.map((_, idx) => {
            const active = idx === currentSlide;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goTo(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  active
                    ? 'w-8 bg-[var(--text-white)]'
                    : 'w-2.5 bg-[rgb(var(--text-white-rgb)/0.40)] hover:bg-[rgb(var(--text-white-rgb)/0.60)]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={active}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
