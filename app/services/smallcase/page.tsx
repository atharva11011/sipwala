import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smallcase",
  description:
    "Smallcases are curated baskets of stocks/ETFs built around themes or strategies. Learn how they work and how Sipwala supports your investing journey.",
};

const whyInvest = [
  {
    title: "Diversified Portfolio",
    icon: "account_tree",
    description:
      "Invest across multiple stocks and ETFs, reducing reliance on a single company.",
  },
  {
    title: "Theme-Based Investing",
    icon: "category",
    description:
      "Choose portfolios aligned with trends like technology, healthcare, ESG, or digital growth.",
  },
  {
    title: "Complete Transparency",
    icon: "visibility",
    description:
      "Know exactly where your money is invested—no hidden holdings.",
  },
  {
    title: "Easy to Manage",
    icon: "query_stats",
    description:
      "Track and rebalance as market conditions evolve—with a clear portfolio view.",
  },
  {
    title: "Cost-Effective",
    icon: "savings",
    description:
      "Lower costs than many traditional products, with a straightforward structure.",
  },
];

const support = [
  {
    title: "Personalized Financial Advice",
    icon: "person",
    description:
      "We help you select Smallcases that fit your goals, time horizon, and risk profile.",
  },
  {
    title: "Research-Driven Recommendations",
    icon: "travel_explore",
    description:
      "Our team tracks themes and market trends to shortlist high-potential portfolios.",
  },
  {
    title: "Monitoring & Rebalancing",
    icon: "monitoring",
    description:
      "We review performance and rebalance when needed—so your plan stays aligned.",
  },
  {
    title: "Investor Education",
    icon: "school",
    description:
      "Simple explanations, updates, and resources to help you invest with clarity.",
  },
];

const approach = [
  "Focus on long-term wealth creation",
  "Align investments with your financial goals",
  "Maintain transparency and trust",
  "Adapt strategies based on market trends",
  "Provide continuous guidance and support",
];

const steps = [
  {
    title: "Consultation",
    icon: "forum",
    description:
      "Discuss your goals and explore suitable Smallcase options with our experts.",
  },
  {
    title: "Financial Assessment",
    icon: "manage_accounts",
    description:
      "We evaluate income, risk tolerance, and investment horizon to guide selection.",
  },
  {
    title: "Investment Execution",
    icon: "task_alt",
    description:
      "Seamless onboarding with support for documentation and compliance.",
  },
  {
    title: "Ongoing Support",
    icon: "support_agent",
    description:
      "Regular monitoring, updates, and expert guidance to keep you on track.",
  },
];

const whoItsFor = [
  "Beginners entering the stock market",
  "Investors seeking structured portfolios",
  "Those interested in theme-based investing",
  "People who prefer transparent and flexible investing",
];

const whySipwala = [
  "Experienced financial planning experts",
  "Research-backed investment strategies",
  "Transparent and ethical practices",
  "Personalized solutions for every client",
  "Long-term wealth-building approach",
];

export default function SmallcasePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="smallcase-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--green-50)] text-[var(--green-700)] border border-[rgb(var(--green-700-rgb)/0.18)] mb-3">
                Services
              </span>
              <h1
                id="smallcase-title"
                className="font-headline text-[40px] md:text-[64px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Smallcase — Simplifying Your Investment Experience
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Investing in the stock market doesn’t have to be complicated.
                With Smallcases, you can invest in thoughtfully curated
                portfolios aligned with your goals, beliefs, and market trends.
                Sipwala makes it simple, strategic, and accessible—so you can
                build wealth with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Talk to an Advisor
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Try Calculators
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                <Image
                  src="/slides/pexels-maitree-rimthong-444156-1602726.png"
                  alt="Stocks and portfolio theme illustration"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--green-700-rgb),0.10),rgba(var(--blue-700-rgb),0.12))]" />
              </div>
              <div className="absolute -bottom-8 -left-6 md:-left-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[340px]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      insights
                    </span>
                  </div>
                  <div>
                    <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                      Theme-led investing
                    </div>
                    <div className="text-[12px] leading-[1.6] text-[var(--text-secondary)]">
                      Curated baskets with clarity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Is a Smallcase ──────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="what-is-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="what-is-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              What Is a Smallcase?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              A Smallcase is a modern investment product that lets you invest in
              a basket of stocks or ETFs based on a specific theme, strategy, or
              objective. Instead of picking individual stocks, you get a
              ready-made portfolio designed to reflect market trends, sector
              opportunities, and investment strategies.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Smallcases are ideal for beginners and experienced investors who
              want structured, transparent investing without unnecessary
              complexity.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Curated baskets",
                icon: "inventory_2",
                description:
                  "Hold a pre-built basket instead of managing many individual picks.",
              },
              {
                title: "Theme & strategy",
                icon: "hub",
                description:
                  "Invest around ideas—sectors, trends, or specific approaches.",
              },
              {
                title: "Clear visibility",
                icon: "manage_search",
                description:
                  "Know what you own and why—transparency stays front and center.",
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
              Why Invest in Smallcases?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Smallcases bring together simplicity and structure—so you can
              invest with a clear view of your portfolio and an approach aligned
              to your goals.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyInvest.map((r) => (
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
              How Sipwala Supports Your Smallcase Investments
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We go beyond recommending Smallcases—we partner with you through
              selection, execution, and long-term monitoring.
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
              Getting Started with Smallcases
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Starting your Smallcase journey with Sipwala is simple.
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

      {/* ─── Who Should Invest + CTA ──────────────────────── */}
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
                Who Should Invest in Smallcases?
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                Smallcases can be a great fit for investors who want structured,
                theme-led exposure with transparency and flexibility.
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
                      format_quote
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                      Let’s Build Your Wealth Smarter
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      Smallcases bring together simplicity, strategy, and smart
                      investing. With Sipwala by your side, you gain the
                      confidence to invest wisely and stay consistent.
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
