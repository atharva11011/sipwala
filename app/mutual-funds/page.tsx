import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mutual Funds",
  description:
    "Mutual funds help you grow wealth through diversified, professionally managed portfolios. Explore types, benefits, and how Sipwala guides your investment journey.",
};

const reasons = [
  {
    title: "Diversification",
    icon: "account_tree",
    description:
      "Your investment is spread across multiple assets, reducing risk concentration.",
  },
  {
    title: "Professional Management",
    icon: "workspace_premium",
    description:
      "Experienced fund managers make informed decisions to pursue better outcomes.",
  },
  {
    title: "Affordable for Everyone",
    icon: "savings",
    description:
      "Start with small amounts—mutual funds are beginner-friendly and accessible.",
  },
  {
    title: "Flexibility & Liquidity",
    icon: "swap_horiz",
    description:
      "Invest, withdraw, or switch funds based on your needs and life goals.",
  },
  {
    title: "Goal-Based Investing",
    icon: "flag",
    description:
      "Plan for retirement, education, or wealth creation with structured strategies.",
  },
];

const trust = [
  {
    title: "Local understanding + professional expertise",
    icon: "handshake",
    description:
      "We understand your goals, lifestyle, and priorities—and advise accordingly.",
  },
  {
    title: "Personalized investment strategy",
    icon: "tune",
    description:
      "Recommendations are aligned with your timeline, risk appetite, and objectives.",
  },
  {
    title: "Guidance at every step",
    icon: "support_agent",
    description:
      "From selection to tracking, you’re supported with clear, practical advice.",
  },
  {
    title: "Trust-first approach",
    icon: "verified",
    description:
      "Transparency, process clarity, and long-term relationships come first.",
  },
];

const fundTypes = [
  {
    title: "Open-Ended Funds",
    icon: "all_inclusive",
    description:
      "Flexible funds that allow you to invest and withdraw anytime (as per fund rules).",
  },
  {
    title: "Closed-Ended Funds",
    icon: "lock",
    description:
      "Funds with a fixed number of units and a lock-in period.",
  },
  {
    title: "Equity Funds",
    icon: "show_chart",
    description:
      "Invest mainly in stocks—generally suited for long-term growth goals.",
  },
  {
    title: "Debt Funds",
    icon: "account_balance",
    description:
      "Invest in bonds and fixed-income instruments—typically lower volatility.",
  },
  {
    title: "Hybrid Funds",
    icon: "balance",
    description:
      "A mix of equity and debt—aims to balance growth and stability.",
  },
  {
    title: "Income Funds",
    icon: "payments",
    description:
      "Focus on regular income through interest and dividends.",
  },
  {
    title: "Real Asset Funds",
    icon: "diamond",
    description:
      "Exposure to physical assets like gold, commodities, or real estate themes.",
  },
  {
    title: "Sector Funds",
    icon: "domain",
    description:
      "Focused investing in specific industries like IT, pharma, or energy.",
  },
];

const philosophy = [
  "Long-term wealth creation",
  "Risk-managed diversification",
  "Goal-based planning",
  "Consistent investing (SIP approach)",
  "Transparency and trust",
];

const steps = [
  {
    title: "Consultation",
    icon: "forum",
    description: "Discuss your goals with our experts.",
  },
  {
    title: "Financial Assessment",
    icon: "manage_accounts",
    description: "We analyze your income, risk appetite, and time horizon.",
  },
  {
    title: "Investment Plan",
    icon: "assignment",
    description: "Get a customized mutual fund strategy.",
  },
  {
    title: "Ongoing Support",
    icon: "monitoring",
    description: "Regular tracking, updates, and expert guidance.",
  },
];

export default function MutualFundsPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="mf-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--green-50)] text-[var(--green-700)] border border-[rgb(var(--green-700-rgb)/0.18)] mb-3">
                Namaste from Amravati
              </span>
              <h1
                id="mf-title"
                className="font-headline text-[40px] md:text-[64px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Mutual Funds — Grow Your Wealth with Confidence
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                At Sipwala, we believe that financial growth begins with the
                right knowledge and the right guidance. Mutual Funds are one of
                the most powerful and accessible ways to build wealth—smart,
                flexible, and disciplined.
              </p>
              <p className="mt-4 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Let’s take your first step toward a secure financial future.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Start with a Consultation
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Explore SIP Calculators
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/15] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                <Image
                  src="/slides/pexels-towfiqu-barbhuiya-3440682-9755376.png"
                  alt="Planning and investing with mutual funds"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--blue-700-rgb),0.10),rgba(var(--green-700-rgb),0.10))]" />
              </div>

              <div className="absolute -bottom-8 -left-6 md:-left-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[360px]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      calendar_month
                    </span>
                  </div>
                  <div>
                    <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                      SIP-friendly investing
                    </div>
                    <div className="text-[12px] leading-[1.6] text-[var(--text-secondary)]">
                      Build wealth steadily, month by month.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Are Mutual Funds ─────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="what-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="what-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              What Are Mutual Funds?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Think of mutual funds like a community garden—many investors
              contribute small amounts, and together the money is invested into
              a diversified portfolio.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Pool money",
                icon: "groups",
                description:
                  "Funds collect contributions from multiple investors.",
              },
              {
                title: "Diversified portfolio",
                icon: "scatter_plot",
                description:
                  "Invests across stocks, bonds, or other assets to spread risk.",
              },
              {
                title: "Managed by experts",
                icon: "person_search",
                description:
                  "Professional fund managers handle research and allocation.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-7 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
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

      {/* ─── Why Choose ───────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="why-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="why-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Why Choose Mutual Funds?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Mutual funds combine simplicity and discipline—making them one of
              the most popular investment options for long-term goals.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
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

      {/* ─── Why Trust ─────────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="trust-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="trust-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Why Trust Sipwala?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We combine local understanding with professional expertise. We
              don’t just invest your money—we help you build your financial
              future.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trust.map((t) => (
              <div
                key={t.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    {t.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {t.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {t.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Types ─────────────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="types-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="types-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Types of Mutual Funds
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Explore mutual fund types based on how they invest—and what you
              want to achieve.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundTypes.map((type) => (
              <div
                key={type.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {type.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {type.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {type.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy + Steps ────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="philosophy-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <h2
                id="philosophy-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Our Investment Philosophy
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                We follow a disciplined approach—&quot;Badhate Chalo Bharose Ke
                Sath&quot;—growing steadily with trust.
              </p>

              <div className="mt-8 space-y-3">
                {philosophy.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-2xl px-4 py-3"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                      check_circle
                    </span>
                    <div className="text-[14px] leading-[1.75] text-[var(--text-secondary)] font-medium">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      route
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Start Your Investment Journey
                    </div>
                    <div className="mt-2 text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                      Getting started with mutual funds is easy—with a plan that
                      matches your goals.
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {steps.map((step, index) => (
                        <div
                          key={step.title}
                          className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-2xl p-4"
                        >
                          <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-[var(--blue-50)] flex items-center justify-center">
                              <span className="material-symbols-outlined text-[var(--blue-700)]">
                                {step.icon}
                              </span>
                            </div>
                            <div className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-muted)]">
                              Step {index + 1}
                            </div>
                          </div>
                          <div className="mt-4 font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                            {step.title}
                          </div>
                          <div className="mt-1 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                            {step.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
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
                        Try SIP Calculator
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      warning
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Important Note
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      Investments in mutual funds are subject to market risks.
                      Please read all scheme-related documents carefully before
                      investing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing ───────────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="closing-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--green-700)]">
                  eco
                </span>
              </div>
              <div>
                <h2
                  id="closing-title"
                  className="font-headline text-[22px] md:text-[30px] font-extrabold tracking-tight text-[var(--text-primary)]"
                >
                  Let’s Grow Together
                </h2>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)] max-w-3xl">
                  Mutual funds are not just investments—they are a path to
                  financial independence and long-term security. Join Sipwala and
                  become part of a growing community focused on smart investing
                  and steady progress.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                  >
                    Connect with Sipwala
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
        </div>
      </section>
    </>
  );
}
