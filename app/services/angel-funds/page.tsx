import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Angel Funds",
  description:
    "Angel funds help investors participate in early-stage startup growth. Learn what they are, why to consider them, and how Sipwala supports your journey.",
};

const reasons = [
  {
    title: "High Return Potential",
    icon: "rocket_launch",
    description:
      "Early-stage investments can generate substantial returns if the startup succeeds and scales.",
  },
  {
    title: "Portfolio Diversification",
    icon: "scatter_plot",
    description:
      "Spread exposure across multiple startups and sectors to reduce concentration risk.",
  },
  {
    title: "Support Innovation",
    icon: "lightbulb",
    description:
      "Be part of groundbreaking ideas, technologies, and businesses shaping the future.",
  },
  {
    title: "Early Access",
    icon: "early_on",
    description:
      "Get early exposure to emerging products, services, and industries before they go mainstream.",
  },
  {
    title: "Tax Benefits",
    icon: "receipt_long",
    description:
      "Depending on regulations, angel investments may offer attractive tax advantages.",
  },
];

const support = [
  {
    title: "Personalized Investment Advice",
    icon: "person",
    description:
      "Our planners align opportunities with your goals and risk appetite.",
  },
  {
    title: "Thorough Due Diligence",
    icon: "fact_check",
    description:
      "We assess business models, founders, and market potential to help you make informed decisions.",
  },
  {
    title: "Portfolio Management",
    icon: "monitoring",
    description:
      "Ongoing monitoring and optimization to keep your strategy disciplined and intentional.",
  },
  {
    title: "Investor Education",
    icon: "school",
    description:
      "Insights, resources, and updates so you stay informed and confident.",
  },
];

const approach = [
  "Identify high-potential opportunities",
  "Evaluate risk vs. reward",
  "Align investments with your financial goals",
  "Maintain transparency at every step",
  "Focus on long-term value creation",
];

const steps = [
  {
    title: "Consultation",
    icon: "forum",
    description:
      "Discuss your goals and explore available opportunities with our experts.",
  },
  {
    title: "Assessment",
    icon: "manage_accounts",
    description:
      "We evaluate your profile and risk tolerance to suggest suitable options.",
  },
  {
    title: "Investment Execution",
    icon: "task_alt",
    description:
      "We assist with documentation, compliance, and smooth onboarding.",
  },
  {
    title: "Ongoing Support",
    icon: "support_agent",
    description:
      "Regular tracking, updates, and guidance to help maximize outcomes over time.",
  },
];

const whoItsFor = [
  "Investors seeking high-growth opportunities",
  "Individuals diversifying beyond traditional assets",
  "People interested in startups and innovation",
  "Investors with a medium to high-risk appetite",
];

const whySipwala = [
  "Experienced financial planning team",
  "Strong research and due diligence process",
  "Transparent and ethical approach",
  "Personalized investment strategies",
  "Long-term partnership mindset",
];

export default function AngelFundsPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="angel-funds-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--green-50)] text-[var(--green-700)] border border-[rgb(var(--green-700-rgb)/0.18)] mb-3">
                Services
              </span>
              <h1
                id="angel-funds-title"
                className="font-headline text-[40px] md:text-[64px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Angel Funds — Empowering Your Investment Journey
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Angel funds open the door to exciting opportunities in the world
                of startups and innovation. At Sipwala, we help you explore,
                understand, and invest in high-potential businesses—turning your
                capital into a catalyst for growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Talk to an Advisor
                </Link>
                <Link
                  href="/company-profile"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Learn About Sipwala
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                <Image
                  src="/slides/pexels-picasjoe-11348120.png"
                  alt="Startup investment concept"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--green-700-rgb),0.10),rgba(var(--blue-700-rgb),0.12))]" />
              </div>
              <div className="absolute -bottom-8 -left-6 md:-left-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[340px]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                      Disciplined guidance
                    </div>
                    <div className="text-[12px] leading-[1.6] text-[var(--text-secondary)]">
                      Clarity, due diligence, and transparency.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Are Angel Funds ─────────────────────────── */}
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
              What Are Angel Funds?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Angel funds are a form of early-stage investment where capital is
              provided to startups and small businesses with strong growth
              potential. These funds are pooled from angel investors—individuals
              who believe in innovative ideas and are willing to invest early in
              exchange for future returns.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              They play a critical role in the startup ecosystem by supporting
              new ideas, helping businesses scale, and bridging the gap between
              concept and execution.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Back innovation",
                icon: "lightbulb",
                description:
                  "Support new solutions and the founders building them.",
              },
              {
                title: "Enable growth",
                icon: "trending_up",
                description:
                  "Provide capital that helps startups scale and hire.",
              },
              {
                title: "Bridge execution",
                icon: "handyman",
                description:
                  "Help promising ideas become real products and businesses.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-7 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {card.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {card.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Invest ───────────────────────────────────── */}
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
              Why Invest in Angel Funds?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Angel investing can be a powerful way to participate in high-growth
              opportunities—when approached with the right expectations,
              research, and portfolio discipline.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    {r.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {r.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {r.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Support ───────────────────────────────────────── */}
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
              How Sipwala Supports Your Angel Investments
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We simplify angel investing with expert guidance and end-to-end
              support—so you can make decisions with clarity and stay aligned to
              your long-term plan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((s) => (
              <div
                key={s.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
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
              <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--green-700)]">
                  alt_route
                </span>
              </div>
              <div>
                <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                  Our Investment Approach
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

      {/* ─── Getting Started ──────────────────────────────── */}
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
              Getting Started with Angel Funds
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Starting your angel investment journey with Sipwala is simple and
              seamless.
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

      {/* ─── Who Should Consider ──────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="who-should-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-6">
              <h2
                id="who-should-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Who Should Consider Angel Funds?
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                Angel funds may be suitable for investors who understand higher
                volatility and are comfortable with a longer time horizon.
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
                      stars
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
                        href="/calculator"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                      >
                        Try Calculators
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      format_quote
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                      Let’s Build the Future Together
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      Angel investing is more than just funding—it’s about
                      believing in ideas, supporting innovation, and creating
                      impact. Sipwala helps you take confident steps into this
                      exciting investment space.
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
