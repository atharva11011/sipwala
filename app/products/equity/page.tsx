import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equity Investing",
  description:
    "Learn the core principles of equity investing, how to think about risk and returns, and how Sipwala helps you build a disciplined long-term approach.",
};

const principles = [
  {
    title: "Think long term",
    icon: "schedule",
    description:
      "Wealth-building through equities rewards patience—not short-term reactions.",
  },
  {
    title: "Invest consistently",
    icon: "repeat",
    description:
      "Regular contributions (even smaller amounts) can compound into meaningful portfolios.",
  },
  {
    title: "Know your risk tolerance",
    icon: "tune",
    description:
      "Understanding your comfort with volatility helps keep your strategy aligned.",
  },
  {
    title: "Start early",
    icon: "rocket_launch",
    description:
      "Time is an advantage—compounding needs runway to work.",
  },
];

const smartApproach = [
  "Focus on the underlying business: fundamentals, quality, and sustainability",
  "Diversify across companies and themes instead of relying on a single bet",
  "Use prudent position sizing to manage downside risk",
  "Stay disciplined through cycles—avoid emotional, reactionary decisions",
];

export default function EquityPage() {
  return (
    <>
      {/* ─── Hero (unique: diagonal feature card + image) ───── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="eq-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--green-50)] text-[var(--green-700)] border border-[rgb(var(--green-700-rgb)/0.18)] mb-3">
                Equity
              </span>
              <h1
                id="eq-title"
                className="font-headline text-[38px] md:text-[62px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Equity Investing
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                When you buy equities, you’re not just chasing short-term price
                moves—you’re taking ownership in real businesses. The question
                isn’t only “what will the stock do next?” It’s “does this
                business have sustainable growth potential?”
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Speak to an Advisor
                </Link>
                <Link
                  href="/mutual-funds"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Explore Mutual Funds
                </Link>
              </div>

              <div className="mt-8 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      insights
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[16px] md:text-[18px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                      A serious investor’s lens
                    </div>
                    <p className="mt-2 text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                      Price is what you pay. Fundamentals drive what you own.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[16/12] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                  <Image
                    src="/slides/pexels-bia-limova-1908542654-33175650.png"
                    alt="Equity markets and long-term investing"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--green-700-rgb),0.10),rgba(var(--blue-700-rgb),0.12))]" />
                </div>

                <div className="absolute -bottom-8 right-4 md:right-8 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[380px] rotate-[-2deg]">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--green-700)]">
                        lock
                      </span>
                    </div>
                    <div>
                      <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                        Discipline beats prediction
                      </div>
                      <div className="mt-1 text-[12px] leading-[1.6] text-[var(--text-secondary)]">
                        Process + diversification + time in the market.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Principles ───────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="principles-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="principles-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Core Principles
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              A strong equity strategy is built on simple principles—executed
              consistently.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {p.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {p.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {p.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Risk & Returns + Education ───────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="risk-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2
                id="risk-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Understanding Equity Risk and Returns
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                Equity investing offers significant growth potential—but it
                comes with market risk. Stocks can outperform traditional
                savings over long periods, yet they require a longer horizon and
                the ability to stay invested through volatility.
              </p>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                Over extended timelines, diversified equity exposure has
                historically delivered strong outcomes in many markets—especially
                as innovation and productivity drive business growth.
              </p>

              <div className="mt-8 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      school
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      The Education Imperative
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      Stocks aren’t a shortcut to instant wealth. Thinking of
                      equities as “quick money” often leads to poor decisions.
                      You’re not gambling—you’re buying ownership in businesses
                      with real operations and long-term trajectories.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      checklist
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Smart Investment Approach
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      Equities demand analysis and diversification. Success
                      rarely comes from concentrating all your capital in a
                      single idea. A quality-focused portfolio plus prudent
                      sizing protects wealth while still participating in market
                      growth.
                    </p>

                    <div className="mt-6 space-y-3">
                      {smartApproach.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                            check_circle
                          </span>
                          <div className="text-[14px] leading-[1.75] text-[var(--text-secondary)] font-medium">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
                      >
                        Build a Plan
                      </Link>
                      <Link
                        href="/products/insurance-planning"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                      >
                        Insurance Planning
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      warning
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Important note
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      Equity investments are subject to market risks. Consider
                      your horizon and risk tolerance, diversify appropriately,
                      and review product details before investing.
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
