"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";

type Accent = "blue" | "green" | "gold";

const checkmarkDelays = ["delay-[0ms]", "delay-[40ms]"] as const;

function accentStyles(accent: Accent) {
  if (accent === "green") {
    return {
      iconWrap: "bg-[var(--green-50)] text-[var(--green-600)]",
      insetTop: "shadow-[inset_0_3px_0_0_var(--green-600)]",
      hoverBg: "hover:bg-[var(--green-50)]",
      hoverBorder: "hover:border-[var(--green-100)]",
      link: "text-[var(--green-600)]",
      check: "text-[var(--green-600)]",
    };
  }

  if (accent === "gold") {
    return {
      iconWrap: "bg-[var(--gold-light)] text-[var(--gold-dark)]",
      insetTop: "shadow-[inset_0_3px_0_0_var(--gold-base)]",
      hoverBg: "hover:bg-[var(--gold-light)]",
      hoverBorder: "hover:border-[rgb(var(--gold-base-rgb)/0.45)]",
      link: "text-[var(--gold-dark)]",
      check: "text-[var(--gold-dark)]",
    };
  }

  return {
    iconWrap: "bg-[var(--blue-50)] text-[var(--blue-700)]",
    insetTop: "shadow-[inset_0_3px_0_0_var(--blue-600)]",
    hoverBg: "hover:bg-[var(--blue-50)]",
    hoverBorder: "hover:border-[var(--blue-200)]",
    link: "text-[var(--blue-700)]",
    check: "text-[var(--blue-700)]",
  };
}

const services = [
  {
    icon: "candlestick_chart",
    title: "Mutual Funds",
    tagline: "Grow wealth systematically",
    desc: "Mutual funds are a type of certified managed combined investment scheme that gathers money from many investors to buy securities.",
    href: "/mutual-funds",
    accent: "green",
    popular: true,
    tag: "Most Popular",
  },
  {
    icon: "show_chart",
    title: "Stock Broking",
    tagline: "Invest in India's best companies",
    desc: "We provide the suitable content about a particular stock to the investor so that he can take correct decision either to enter in a stock ..",
    href: "/contact",
    tag: "High Growth",
    accent: "blue",
    popular: false,
  },
  {
    icon: "account_balance_wallet",
    title: "PMS",
    tagline: "Personalised portfolio management",
    desc: "Portfolio management is the art and science of selecting and overseeing a group of investments that meet the long-term financial objectives ..",
    href: "/contact",
    tag: "Premium",
    accent: "gold",
    popular: false,
  },
  {
    icon: "diversity_3",
    title: "Alternate Investment Funds",
    tagline: "Beyond conventional investing",
    desc: "Other than the traditional modes of investment of equities, fixed income, and cash, through Alternate Investment Fund (AIF) we offer our clients an ..",
    href: "/contact",
    tag: "Expert Pick",
    accent: "blue",
    popular: false,
  },
  {
    icon: "savings",
    title: "National Pension Scheme",
    tagline: "Secure your retirement today",
    desc: "A substantial corpus creation for one’s retirement phase is an essential aspect to take care of during financial distributor. It not only allows individuals to ..",
    href: "/contact",
    tag: "Tax Saver",
    accent: "green",
    popular: false,
  },
  {
    icon: "receipt_long",
    title: "Bonds",
    tagline: "Steady, predictable income",
    desc: "Bonds refer to high-security debt instruments that enable an entity to raise funds and fulfill capital requirements. It is a category of debt that borrowers ..",
    href: "/contact",
    tag: "Low Risk",
    accent: "gold",
    popular: false,
  },
] as const;

export default function ServicesSection() {
  return (
    <section
      className="w-full bg-[var(--gray-50)] py-16 md:py-24"
      role="region"
      aria-labelledby="services-title"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[0.4px] bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
            WHAT WE OFFER
          </div>
          <h2
            id="services-title"
            className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)] mb-[14px]"
          >
            Our Services &amp; Products
          </h2>
          <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)]">
            Everything you need to build, protect, and grow your wealth — all
            under one roof.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-end">
          <Link
            href="/contact"
            className="text-[14px] font-bold text-[var(--blue-700)] hover:underline"
          >
            Talk to an advisor →
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {services.map((service) => {
            const styles = accentStyles(service.accent);
            const featureItems = service.popular
              ? [service.tagline]
              : [service.tagline, service.tag];

            return (
              <motion.div key={service.title} variants={scaleIn} className="h-full">
                <Link
                  href={service.href}
                  className={`group h-full flex flex-col rounded-3xl overflow-hidden border border-[var(--borderSoft)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 ${styles.hoverBg} ${styles.hoverBorder} ${styles.insetTop}`}
                >
                  {service.popular ? (
                    <div className="bg-[var(--green-600)] text-[var(--text-white)] text-[11px] font-bold py-1.5 text-center">
                      ⭐ Most Popular Choice
                    </div>
                  ) : null}

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${styles.iconWrap}`}
                    >
                      <span className="material-symbols-outlined text-3xl">
                        {service.icon}
                      </span>
                    </div>

                    <motion.h3
                      variants={fadeUp}
                      className="font-headline text-[18px] font-bold leading-[1.3] mb-4 text-[var(--text-primary)]"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      variants={fadeUp}
                      className="text-[14px] leading-[1.75] text-[var(--text-muted)] mb-8 line-clamp-3"
                    >
                      {service.desc}
                    </motion.p>

                    <ul className="space-y-3 mb-10">
                      {featureItems.map((item, idx) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-[14px] leading-[1.75] text-[var(--text-secondary)]"
                        >
                          <span
                            className={`material-symbols-outlined text-sm transition-transform duration-300 ease-out group-hover:translate-x-[3px] ${checkmarkDelays[Math.min(idx, checkmarkDelays.length - 1)]} ${styles.check}`}
                          >
                            check_circle
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mt-auto text-[14px] font-bold ${styles.link} flex items-center gap-2 group-hover:gap-4 transition-all`}
                    >
                      Read More
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-[linear-gradient(135deg,var(--navy-800),var(--blue-800))]">
          <div>
            <h3 className="font-headline font-bold text-[var(--text-white)] text-[18px] leading-[1.3]">
              Not sure where to start?
            </h3>
            <p className="mt-2 text-[14px] leading-[1.75] text-[rgb(var(--text-white-rgb)/0.75)]">
              Get a quick estimate or talk to an expert.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/calculator"
              className="px-6 py-3 rounded-xl bg-[rgb(var(--text-white-rgb)/0.10)] text-[var(--text-white)] border border-[rgb(var(--text-white-rgb)/0.20)] font-headline font-bold hover:bg-[rgb(var(--text-white-rgb)/0.15)] transition-colors text-center"
            >
              Try SIP Calculator
            </Link>
            <Link
              href="/contact"
              className="btn-primary px-6 py-3 rounded-xl bg-[var(--text-white)] text-[var(--blue-700)] font-headline font-bold hover:bg-[rgb(var(--text-white-rgb)/0.95)] transition-colors text-center"
            >
              Get Free Advice
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
