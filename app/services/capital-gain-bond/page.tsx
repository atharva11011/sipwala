import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capital Gain Bond",
  description:
    "Capital Gains Bonds help reduce capital gains tax (e.g., under Section 54EC) while keeping your investment secure and predictable. Learn how Sipwala can help.",
};

const benefits = [
  {
    title: "Tax Benefits",
    icon: "receipt_long",
    description:
      "Save or defer capital gains tax by reinvesting eligible profits wisely.",
  },
  {
    title: "Low-Risk",
    icon: "verified_user",
    description:
      "Often issued by government-backed institutions—built for safety-first goals.",
  },
  {
    title: "Stable Returns",
    icon: "trending_up",
    description:
      "Earn predictable interest income over the investment period.",
  },
  {
    title: "Compliance-Ready",
    icon: "gavel",
    description:
      "Stay aligned with tax rules while optimizing your overall financial strategy.",
  },
  {
    title: "Disciplined Lock-in",
    icon: "lock",
    description:
      "Typically comes with a 5-year lock-in—supporting medium-term planning.",
  },
];

const support = [
  {
    title: "Personalized Financial Advice",
    icon: "person",
    description:
      "We map Capital Gains Bonds into your broader financial plan and cash-flow needs.",
  },
  {
    title: "Expert Tax Planning",
    icon: "account_balance",
    description:
      "We help optimize tax savings while keeping everything fully compliant.",
  },
  {
    title: "Investment Assistance",
    icon: "assignment_turned_in",
    description:
      "From choosing bonds to documentation—our support keeps it seamless.",
  },
  {
    title: "Continuous Guidance",
    icon: "support_agent",
    description:
      "We keep you updated on rule changes, rates, and opportunities over time.",
  },
];

const approach = [
  "Analyze your financial and tax position",
  "Identify suitable tax-saving instruments",
  "Ensure timely investment within legal deadlines",
  "Focus on wealth preservation + growth",
  "Maintain transparency and trust at every step",
];

const steps = [
  {
    title: "Consultation",
    icon: "forum",
    description:
      "Share your capital gains and tax-saving requirements with our experts.",
  },
  {
    title: "Financial Assessment",
    icon: "manage_accounts",
    description:
      "We evaluate tax liability, timelines, and your wider investment goals.",
  },
  {
    title: "Investment Execution",
    icon: "task_alt",
    description:
      "Smooth processing with documentation and compliance support end-to-end.",
  },
  {
    title: "Ongoing Support",
    icon: "tips_and_updates",
    description:
      "Periodic updates and guidance to keep your plan optimized.",
  },
];

const whoItsFor = [
  "Individuals who have sold property or other assets",
  "Investors aiming to reduce capital gains tax",
  "Those seeking safe and stable returns",
  "Investors with a medium-term horizon",
];

const whySipwala = [
  "Trusted financial planning expertise",
  "Strong focus on tax-efficient strategies",
  "Transparent and ethical advisory",
  "Personalized solutions for every client",
  "End-to-end support and guidance",
];

const quickFacts = [
  { label: "Typical lock-in", value: "5 years" },
  { label: "Primary objective", value: "Tax-efficient wealth protection" },
  { label: "Common framework", value: "Section 54EC (India)" },
];

export default function CapitalGainBondPage() {
  return (
    <>
      {/* ─── Hero (unique layout: image-left) ───────────────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="cgb-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[16/13] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                <Image
                  src="/slides/pexels-markus-winkler-1430818-12244851.png"
                  alt="Tax planning and secure investing"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--blue-700-rgb),0.12),rgba(var(--green-700-rgb),0.08))]" />
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-2xl px-4 py-3"
                  >
                    <div className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-muted)]">
                      {fact.label}
                    </div>
                    <div className="mt-1 font-headline text-[14px] font-extrabold tracking-tight text-[var(--text-primary)]">
                      {fact.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[rgb(var(--blue-700-rgb)/0.18)] mb-3">
                Services
              </span>
              <h1
                id="cgb-title"
                className="font-headline text-[38px] md:text-[60px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Capital Gains Bonds — Secure Your Wealth with Tax-Efficient
                Investing
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Managing capital gains wisely is essential for preserving and
                growing your wealth. Capital Gains Bonds offer a smart, secure
                way to reduce tax impact while keeping your money invested in a
                predictable, disciplined structure.
              </p>
              <p className="mt-4 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                At Sipwala, we help you turn tax liability into an investment
                opportunity—so your wealth stays protected and productive.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Speak with an Expert
                </Link>
                <Link
                  href="/services/smallcase"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Explore Smallcase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Are Capital Gains Bonds ───────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="what-are-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="what-are-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              What Are Capital Gains Bonds?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Capital Gains Bonds are special financial instruments designed to
              help investors save capital gains tax under applicable tax laws
              (for example, Section 54EC in India). If you earn profits from
              selling assets, you may be liable to pay capital gains tax.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              By investing eligible gains into approved bonds within the
              required timeframe, you can reduce—or in some cases eliminate—
              your tax liability, making these bonds a powerful tool for
              tax-efficient investing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Property", icon: "apartment" },
              { title: "Shares / Mutual funds", icon: "bar_chart" },
              { title: "Gold", icon: "paid" },
              { title: "Other investments", icon: "widgets" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    {item.icon}
                  </span>
                </div>
                <div className="mt-5 font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {item.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  Common sources of capital gains that may create a tax event.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Invest ─────────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="why-invest-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="why-invest-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Why Invest in Capital Gains Bonds?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              These bonds balance security, stability, and tax efficiency—ideal
              when preserving wealth matters as much as growing it.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {b.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {b.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {b.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Support + Approach ─────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="support-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="support-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              How Sipwala Supports Your Investments
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We provide end-to-end support to help you maximize tax benefits
              and keep everything compliant, timely, and aligned with your
              future goals.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((s) => (
              <div
                key={s.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    {s.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {s.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {s.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--blue-700)]">
                  checklist
                </span>
              </div>
              <div>
                <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                  Our Approach to Tax-Efficient Investing
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {approach.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-2xl px-4 py-3"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                        check_circle
                      </span>
                      <div className="text-[13px] leading-[1.7] text-[var(--text-secondary)] font-medium">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Getting Started ───────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="getting-started-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="getting-started-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Getting Started with Capital Gains Bonds
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Starting your investment journey with Sipwala is straightforward.
              We focus on clarity, timelines, and compliance.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      {step.icon}
                    </span>
                  </div>
                  <div className="text-[12px] font-bold tracking-[2px] uppercase text-[var(--text-muted)]">
                    Step {index + 1}
                  </div>
                </div>
                <div className="mt-6 font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {step.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {step.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who It's For + CTA ────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="who-for-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-6">
              <h2
                id="who-for-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Who Should Consider Capital Gains Bonds?
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                These bonds are a strong fit when you want to protect capital,
                stay compliant, and make your gains work harder.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whoItsFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-2xl px-4 py-3"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                      check_circle
                    </span>
                    <div className="text-[13px] leading-[1.7] text-[var(--text-secondary)] font-medium">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      shield
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Why Choose Sipwala?
                    </div>
                    <div className="mt-4 space-y-3">
                      {whySipwala.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[18px] text-[var(--blue-700)] mt-[2px]">
                            check_circle
                          </span>
                          <div className="text-[14px] leading-[1.75] text-[var(--text-secondary)] font-medium">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                      >
                        Contact Us
                      </Link>
                      <Link
                        href="/services/angel-funds"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                      >
                        Explore Angel Funds
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      workspace_premium
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                      Secure Your Wealth, Save More Tax
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      Capital Gains Bonds aren’t just about saving tax—they’re
                      about protecting your wealth and making smarter financial
                      decisions. With Sipwala, your investments stay safe,
                      compliant, and aligned with your future goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
