"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Testimonial = {
  name: string;
  date: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rahul Kumar",
    date: "June 01, 2024",
    text: "The Sipwala team helped me understand SIP from zero. A thorough review of my financial situation was done. Better fund options were found. These were implemented on my behalf, which removed a lot of stress. Regular updates were given and all my questions were answered.",
  },
  {
    name: "Priya Patel",
    date: "November 09, 2023",
    text: "I have been a Sipwala client for 2 years now and have always found the advice excellent. The team takes the time to explain things really clearly and ensures I understand and am well informed, helping me take confident financial decisions.",
  },
  {
    name: "Suresh Mehta",
    date: "October 15, 2023",
    text: "At 55 I thought investing was too late for me. Sipwala proved me completely wrong and built a conservative hybrid SIP plan that now gives me better returns than my FD. I feel financially secure for the first time in years.",
  },
  {
    name: "Ananya Krishnan",
    date: "March 22, 2024",
    text: "The session was incredibly clear and jargon-free. I finally understand what I am investing in, which makes me feel confident. Sipwala does not just hand you a fund list — the team explains the why behind every single decision.",
  },
  {
    name: "Vikram Rao",
    date: "January 14, 2024",
    text: "I was mis-sold ULIPs by my bank. Sipwala helped me exit them gracefully, recover what I could, and rebuild with proper direct mutual funds. Genuinely life-changing and honest advice. I recommend Sipwala to everyone I know.",
  },
  {
    name: "Neha & Dinesh Gupta",
    date: "August 30, 2023",
    text: "My husband and I attended a Sipwala session together. For the first time we had a real conversation about money as a couple. We built a joint SIP plan and our portfolio is up 38% in 2 years.",
  },
];

function StarSquare() {
  return (
    <span className="inline-flex items-center justify-center w-[22px] h-[22px] bg-[var(--brand-trustpilot-green)] text-[var(--text-white)]">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="block"
      >
        <path
          fill="currentColor"
          d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    </span>
  );
}

function TrustpilotStarsRow() {
  return (
    <div className="flex items-center gap-1" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, idx) => (
        <StarSquare key={idx} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -440, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 440, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--surface)] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Decorative arc */}
        <svg
          className="absolute top-10 right-6 w-[240px] h-[120px] pointer-events-none opacity-60 hidden sm:block"
          viewBox="0 0 240 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 108C52 38 140 14 228 24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-outline-variant"
          />
          <path
            d="M44 114C82 60 154 40 228 48"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-outline-variant"
          />
        </svg>

        {/* Top heading block */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[620px]"
        >
          <div className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--text-muted)] mb-3">
            THOUSANDS TRUST SIPWALA
          </div>
          <h2 className="font-headline text-[28px] md:text-[40px] font-extrabold text-[var(--text-primary)] leading-[1.2] mb-[14px]">
            Don&apos;t take our word for it, see what our clients say
          </h2>
          <p className="text-[16px] font-normal text-[var(--text-muted)] leading-[1.8] max-w-[520px]">
            We&apos;re honored by the feedback, and it fuels our commitment to
            delivering exceptional financial guidance. Read the reviews to hear
            firsthand how Sipwala is making a positive impact on people&apos;s
            financial lives. Your trust is our greatest achievement.
          </p>
        </motion.div>

        {/* Cards row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mt-14"
        >
          <div
            ref={scrollRef}
            className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          >
            <div className="flex gap-6 pr-2">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 md:p-8 min-w-[280px] md:min-w-[380px] max-w-[420px] snap-start transition-all duration-300 ease-out hover:border-[var(--blue-200)] hover:bg-[linear-gradient(160deg,var(--surface),var(--blue-50))] hover:-translate-y-1"
                >
                  <TrustpilotStarsRow />

                  <p className="text-[14px] md:text-[16px] font-normal text-[var(--text-primary)] leading-[1.8] mt-5 mb-6">
                    {t.text}
                  </p>

                  <div className="text-[16px] font-bold text-[var(--text-primary)] mb-1">
                    {t.name}
                  </div>
                  <div className="text-[12px] font-normal text-[var(--text-muted)] leading-[1.75]">
                    {t.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Trustpilot bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
          className="mt-12 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-[var(--text-primary)] font-extrabold">Trustpilot</div>
              <TrustpilotStarsRow />
              <div className="text-[var(--text-primary)] font-extrabold">Excellent</div>
            </div>
            <div className="mt-2 text-[12px] font-normal text-[var(--text-muted)] leading-[1.75]">
              4.9 Rating based on 500+ reviews
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              onClick={scrollLeft}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] transition-colors flex items-center justify-center"
              aria-label="Scroll testimonials left"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </motion.button>
            <motion.button
              type="button"
              onClick={scrollRight}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] transition-colors flex items-center justify-center"
              aria-label="Scroll testimonials right"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
