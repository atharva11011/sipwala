"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Swapnil Navandar",
    role: "Investor",
    text: "Meeting with Santosh Behare, CEO of sipwala, in 2019 was the turning point for me. Previously, my investments lacked discipline and relied heavily on hearsay or literature. However, after engaging with Santosh, I gained valuable insights into the importance of goal-oriented investments. It was enlightening to discuss financial strategies with him, and I'm grateful for the knowledge I've gained. I commend the work being done by sipwala under Santosh's leadership and wish him the best of luck. 👍👍",
  },
  {
    name: "Anil Chainani",
    role: "Investor",
    text: "I am customer of sipwala since many years. Their Mutual Funds service is very good. Their website easy to use, I can see many funds and choose which one I want. They help me pick good funds for me. With their help, my money grows. I suggest everyone to use sipwala for investments.",
  },
  {
    name: "Anand Katta",
    role: "Investor",
    text: "Thanks to Groww Lakshmi Finserv, investing has never been easier. Their guidance and support have empowered me to make informed decisions for my financial future.",
  },
  {
    name: "Amol Agrawal",
    role: "Investor",
    text: "I met Santosh, 2.5 years ago, and since then, my financial outlook has drastically improved. His expert guidance has empowered me to make smarter decisions, ensuring a secure future. I highly recommend Santosh for anyone seeking trusted financial advice.",
  },
  {
    name: "Abhishek Nahata",
    role: "Investor",
    text: "Thanks to Groww Lakshmi Finserv, Ive seen significant growth in my portfolio. Their tailored investment plans and dedicated team make all the difference.",
  },
];

function GoogleStarsRow() {
  return (
    <div className="flex items-center gap-1" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, idx) => (
        <span
          key={idx}
          className="material-symbols-outlined text-[18px] text-[var(--gold-dark)]"
          aria-hidden="true"
        >
          star
        </span>
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
    <section className="bg-[var(--surface)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">

        {/* Top heading block */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[620px]"
        >
          <div className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--text-muted)] mb-3">
            GOOGLE REVIEWS
          </div>
          <h2 className="font-headline text-[28px] md:text-[40px] font-extrabold text-[var(--text-primary)] leading-[1.2]">
            Client Testimonials
          </h2>
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
                  <div className="flex items-center justify-between gap-3">
                    <GoogleStarsRow />
                    <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-muted)]">
                      Google review
                    </span>
                  </div>

                  <p className="text-[14px] md:text-[16px] font-normal text-[var(--text-primary)] leading-[1.8] mt-5 mb-6">
                    {t.text}
                  </p>

                  <div className="text-[16px] font-bold text-[var(--text-primary)] mb-1">
                    {t.name}
                  </div>
                  <div className="text-[12px] font-normal text-[var(--text-muted)] leading-[1.75]">
                    {t.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
          className="mt-12 w-full flex items-center justify-end gap-3"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
