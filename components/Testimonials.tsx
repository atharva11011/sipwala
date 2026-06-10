
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Swapnil Navandar",
    role: "Investor",
    text: "Meeting with Santosh Behare in 2019 completely changed my approach to investing. His goal-based guidance helped me build a disciplined investment strategy.",
  },
  {
    name: "Anil Chainani",
    role: "Investor",
    text: "I have been a customer for many years. The service is excellent and the investment recommendations have helped me grow my wealth steadily.",
  },
  {
    name: "Anand Katta",
    role: "Investor",
    text: "Investing has become much easier thanks to the guidance and support. I now feel more confident about my financial future.",
  },
  {
    name: "Amol Agrawal",
    role: "Investor",
    text: "Professional advice and continuous support helped me make smarter financial decisions and build a secure future.",
  },
  {
    name: "Abhishek Nahata",
    role: "Investor",
    text: "Their personalized investment plans and dedicated service have delivered excellent results for my portfolio.",
  },
];

const reviews = [...testimonials, ...testimonials];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className="text-[#FBBF24] text-[13px]"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[var(--surface)] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2563EB]">
              Client Testimonials
            </span>
          </div>

          <h2
            className="
              mt-5
              font-headline
              text-[34px]
              md:text-[52px]
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-[var(--text-primary)]
            "
          >
            What our customers are saying
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-[15px]
              leading-7
              text-[var(--text-muted)]
            "
          >
            Trusted by investors across India for reliable financial
            guidance, wealth creation, and long-term investment success.
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative mt-16 overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-6"
          >
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="
                  group
                  w-[340px]
                  rounded-3xl
                  border
                  border-[#D9E2F2]
                  bg-white
                  shadow-sm
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#2563EB]
                  hover:shadow-lg
                "
              >
                {/* Top Accent */}
                <div className="h-1 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA]" />

                <div className="p-7">
                  {/* User */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#DBEAFE]
                        bg-[#EFF6FF]
                      "
                    >
                      <span className="material-symbols-outlined text-[#2563EB]">
                        person
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[17px] font-semibold text-[var(--text-primary)]">
                        {review.name}
                      </h3>

                      <p className="text-sm text-[var(--text-muted)]">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p
                    className="
                      mt-5
                      min-h-[120px]
                      text-[14px]
                      leading-7
                      text-[var(--text-muted)]
                    "
                  >
                    {review.text}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#EEF2FF] pt-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/google-logo.svg"
                        alt="Google"
                        width={18}
                        height={18}
                      />

                      <span className="text-[12px] font-medium text-[var(--text-muted)]">
                        Google Review
                      </span>
                    </div>

                    <Stars />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[var(--surface)] to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[var(--surface)] to-transparent" />
        </div>
      </div>
    </section>
  );
}

