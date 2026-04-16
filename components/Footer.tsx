"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { X, Globe, Mail, MessageCircle, ChevronUp } from "lucide-react";
import { slideInLeft, staggerContainer } from "@/lib/animations";

const siteMapLinks = [
  { label: "Home", href: "/" },
  { label: "My Story", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Success Stories", href: "/#success-stories" },
  { label: "SIP Calculator", href: "/calculator" },
  { label: "Free Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "SEBI Registration", href: "/sebi-registration" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Grievance Redressal", href: "/grievance-redressal" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const IMPORTANT_LINK_TEXT =
  "Important Links | Disclaimer | Disclosure | SID/SAI/KIM | Code of Conduct | SEBI Circulars | AMFI Risk Factors";

const fadeUpDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  },
});

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Main footer body */}
      <div className="relative overflow-hidden border-t border-[rgb(var(--text-white-rgb)/0.08)] bg-[radial-gradient(1200px_700px_at_-10%_-20%,rgb(var(--blue-600-rgb)/0.35),transparent_60%),linear-gradient(180deg,rgb(var(--blue-900-rgb)/0.98),rgb(var(--navy-950-rgb)/0.99))]">
        {/* Decorative geometry */}
        <svg
          className="absolute inset-y-0 right-0 w-[65%] max-w-[900px] h-full pointer-events-none text-[rgb(var(--text-white-rgb)/0.07)]"
          viewBox="0 0 800 400"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M420 360 L560 120 L700 360 Z"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M500 370 L650 170 L800 370 Z"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M350 390 L520 190 L690 390 Z"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M40 360 C 260 210 470 160 780 140"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-12 lg:pt-16 pb-8 lg:pb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto] gap-10 lg:gap-12">
            {/* Brand */}
            <motion.div
              variants={slideInLeft}
              className="lg:col-span-5 lg:col-start-1 lg:row-start-1 text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start">
                <Link
                  href="/"
                  aria-label="Sipwala"
                  className="inline-flex"
                >
                  <span className="font-headline font-extrabold tracking-tight leading-none text-[34px] text-[var(--red-400)]">
                    SIPWALA
                  </span>
                </Link>
              </div>

              <p className="mt-4 text-[14px] leading-[1.75] text-[rgb(var(--text-white-rgb)/0.72)] max-w-[280px] mx-auto lg:mx-0">
                Helping everyday Indians understand SIP investing and build real
                wealth — one conversation at a time.
              </p>
            </motion.div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1 lg:col-start-6 lg:row-span-2" />

            {/* Site Map */}
            <motion.div
              variants={fadeUpDelay(0.1)}
              className="lg:col-span-3 lg:col-start-7 lg:row-span-2 text-center lg:text-left"
            >
              <div className="text-[11px] font-bold tracking-[2px] uppercase mb-6 pb-3 border-b border-[rgb(var(--text-white-rgb)/0.15)] text-[rgb(var(--text-white-rgb)/0.92)]">
                Site Map
              </div>
              <ul className="flex flex-col gap-3.5">
                {siteMapLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className={`text-[14px] transition-colors ${
                        isActive(l.href)
                          ? "text-[rgb(var(--text-white-rgb)/0.95)] font-medium"
                          : "text-[rgb(var(--text-white-rgb)/0.70)] hover:text-[var(--blue-200)]"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              variants={fadeUpDelay(0.2)}
              className="lg:col-span-3 lg:col-start-10 lg:row-span-2 text-center lg:text-left"
            >
              <div className="text-[11px] font-bold tracking-[2px] uppercase mb-6 pb-3 border-b border-[rgb(var(--text-white-rgb)/0.15)] text-[rgb(var(--text-white-rgb)/0.92)]">
                Legal
              </div>
              <ul className="flex flex-col gap-3.5">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-[rgb(var(--text-white-rgb)/0.70)] hover:text-[var(--blue-200)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social + Back to top */}
            <motion.div
              variants={slideInLeft}
              className="lg:col-span-5 lg:col-start-1 lg:row-start-2 text-center lg:text-left"
            >
              <div className="mt-2 flex items-center justify-center lg:justify-start gap-2.5">
                {[
                  { label: "X", href: "#", icon: X },
                  { label: "Website", href: "#", icon: Globe },
                  { label: "Email", href: "#", icon: Mail },
                  { label: "Message", href: "#", icon: MessageCircle },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg border border-[rgb(var(--text-white-rgb)/0.15)] bg-transparent flex items-center justify-center text-[rgb(var(--text-white-rgb)/0.82)] transition-all hover:text-[var(--blue-200)] hover:border-[rgb(var(--blue-200-rgb)/0.35)] hover:bg-[rgb(var(--blue-200-rgb)/0.10)]"
                    aria-label={s.label}
                  >
                    <s.icon size={18} />
                  </motion.a>
                ))}
              </div>

              <motion.button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ x: 0, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="mt-10 w-full lg:w-auto inline-flex items-center justify-center gap-2 border border-[rgb(var(--text-white-rgb)/0.20)] bg-transparent px-6 py-3 rounded-[6px] text-[rgb(var(--text-white-rgb)/0.82)] text-[12px] font-bold tracking-[1.5px] uppercase hover:bg-[rgb(var(--text-white-rgb)/0.08)] hover:text-[rgb(var(--text-white-rgb)/0.95)] transition-colors"
              >
                <ChevronUp size={16} />
                Back to Top
              </motion.button>
            </motion.div>
          </div>

          {/* Regulatory / risk factors */}
          <div className="mt-12 pt-8 border-t border-[rgb(var(--text-white-rgb)/0.12)]">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="text-[12px] leading-[1.75] text-[rgb(var(--text-white-rgb)/0.86)]">
                <Link
                  href="/privacy-policy"
                  className="font-bold hover:text-[var(--blue-200)] transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="mx-2 text-[rgb(var(--text-white-rgb)/0.35)]" aria-hidden="true">
                  |
                </span>
                <span className="font-bold">SIPWALA</span>
              </div>

              <p className="max-w-[1000px] text-[12px] leading-[1.9] text-[rgb(var(--text-white-rgb)/0.72)]">
                <span className="font-bold text-[rgb(var(--text-white-rgb)/0.88)]">
                  Risk Factors – Investments in Mutual Funds are subject to Market Risks.
                </span>{" "}
                Read all scheme related documents carefully before investing.
                Mutual Fund Schemes do not assure or guarantee any returns. Past
                performances of any Mutual Fund Scheme may or may not be
                sustained in future. There is no guarantee that the investment
                objective of any suggested scheme shall be achieved. All
                existing and prospective investors are advised to check and
                evaluate the Exit loads and other cost structure (TER)
                applicable at the time of making the investment before
                finalizing on any investment decision for Mutual Funds schemes.
                We deal in Regular Plans only for Mutual Fund Schemes and earn
                a Trailing Commission on client investments. Disclosure For
                Commission earnings is made to clients at the time of
                investments.
              </p>

              <p className="max-w-[1000px] text-[12px] leading-[1.9] text-[rgb(var(--text-white-rgb)/0.72)]">
                AMFI Registered Mutual Fund Distributor – ARN-307703 | Date of initial registration – 10-SEP-2024 | Current validity of ARN – 09-SEP-2027
              </p>

              <p className="max-w-[1000px] text-[12px] leading-[1.9] text-[rgb(var(--text-white-rgb)/0.72)]">
                {IMPORTANT_LINK_TEXT}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright strip */}
      <div className="bg-[rgb(var(--blue-900-rgb)/0.90)] border-t border-[rgb(var(--text-white-rgb)/0.10)] px-5 lg:px-8 py-3.5 text-center">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[12px] leading-[1.75] text-[rgb(var(--text-white-rgb)/0.80)] font-normal inline-flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="hidden sm:inline-block w-[60px] h-px bg-[rgb(var(--text-white-rgb)/0.18)]"
            />
            <span>
              Copyright © 2025, SIPwala. All Rights Reserved. Mutual fund
              investments are subject to market risks.
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline-block w-[60px] h-px bg-[rgb(var(--text-white-rgb)/0.18)]"
            />
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
