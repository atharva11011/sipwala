import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fixed Deposits",
  description:
    "Build financial security with Fixed Deposits at Sipwala—capital preservation, predictable returns, and flexible tenures for goal-based planning.",
};

const benefits = [
  {
    title: "Capital Protection",
    icon: "shield",
    description:
      "Fixed Deposits help shield your investment from market volatility. Your principal remains protected, supporting conservative investors and those approaching major milestones.",
  },
  {
    title: "Predictable Returns",
    icon: "paid",
    description:
      "A locked-in interest rate provides clarity on expected earnings from day one, enabling precise planning for education, retirement, or major purchases.",
  },
  {
    title: "Flexible Tenure Options",
    icon: "schedule",
    description:
      "Choose a timeframe aligned to your goals—short-term deposits (such as 7 days to 1 year) or longer commitments (up to 10 years), subject to product availability.",
  },
  {
    title: "Straightforward Process",
    icon: "task_alt",
    description:
      "No market monitoring or active management required. Deposit funds, select tenure, and receive the maturity value as per the agreed terms.",
  },
];

const advantage = [
  {
    title: "Guaranteed growth",
    icon: "trending_up",
    description:
      "Consistent, predictable returns at competitive rates (as per the selected issuer and tenure).",
  },
  {
    title: "Customizable terms",
    icon: "tune",
    description:
      "Tenure options that match your investment horizon and liquidity preferences.",
  },
  {
    title: "Seamless experience",
    icon: "support_agent",
    description:
      "Streamlined onboarding and support to keep the process simple and hassle-free.",
  },
];

const useCases = [
  {
    title: "Emergency buffer planning",
    icon: "savings",
    description:
      "Create a stable allocation to help build confidence during uncertain markets.",
  },
  {
    title: "Goal-based investing",
    icon: "flag",
    description:
      "Match maturity dates to goals like tuition, a planned purchase, or a future family need.",
  },
  {
    title: "Retirement readiness",
    icon: "elderly",
    description:
      "Use predictable cashflows as a complement to growth assets in later stages of life.",
  },
];

export default function FixedDepositPage() {
  return (
    <>
      {/* ─── Hero (unique: compact intro + stat cards) ─────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="fd-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[rgb(var(--blue-700-rgb)/0.18)] mb-3">
                Fixed Deposits
              </span>
              <h1
                id="fd-title"
                className="font-headline text-[38px] md:text-[62px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Build Financial Security with Fixed Deposits
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                At Sipwala, we help you work toward your financial goals through
                trusted investment solutions. Fixed Deposits offer a
                time-tested approach to capital preservation and predictable
                returns, making them a strong foundation for many portfolios.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Explore Fixed Deposit Options
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Use Calculators
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--green-700)]">
                        lock
                      </span>
                    </div>
                    <div>
                      <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                        Locked-in rate
                      </div>
                      <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                        Interest rate stays fixed for the selected tenure.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--blue-700)]">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                        Principal-first
                      </div>
                      <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                        Designed for stability and disciplined savings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                  <Image
                    src="/slides/pexels-maitree-rimthong-444156-1602726.png"
                    alt="Fixed deposit planning and saving"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--blue-700-rgb),0.12),rgba(var(--green-700-rgb),0.10))]" />
                </div>

                <div className="absolute -bottom-8 -right-4 md:-right-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[360px]">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--green-700)]">
                        account_balance
                      </span>
                    </div>
                    <div>
                      <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                        A steady core holding
                      </div>
                      <div className="mt-2 text-[12px] leading-[1.7] text-[var(--text-secondary)]">
                        Useful for conservative allocations and time-bound goals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Understanding ───────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="understanding-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="understanding-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Understanding Fixed Deposits
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              A Fixed Deposit is a low-risk investment instrument where you
              deposit funds for a predetermined period at a locked-in interest
              rate. Your principal remains secure while earning returns,
              regardless of market fluctuations.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Upon maturity, you receive your initial investment plus
              accumulated interest, as per the applicable terms.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {u.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {u.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {u.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="benefits-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="benefits-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Key Benefits of Fixed Deposits
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Fixed Deposits are designed to reduce uncertainty and support
              stable, goal-aligned investing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={b.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--green-700)]">
                        {b.icon}
                      </span>
                    </div>
                    <div>
                      <div className="font-headline text-[16px] md:text-[18px] font-extrabold text-[var(--text-primary)]">
                        {b.title}
                      </div>
                      <div className="mt-2 text-[13px] md:text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                        {b.description}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[var(--gray-50)] border border-[var(--borderSoft)] flex items-center justify-center font-headline font-extrabold text-[12px] text-[var(--text-muted)]">
                      {idx + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sipwala Advantage ────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="advantage-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="advantage-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              The Sipwala Advantage
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We understand the financial aspirations of our community in
              Amravati. Our approach blends market expertise with personal
              support so you can invest with clarity and confidence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantage.map((a) => (
              <div
                key={a.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {a.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {a.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {a.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--green-700)]">
                  info
                </span>
              </div>
              <div>
                <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                  Ready to secure your financial future?
                </div>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                  Contact Sipwala to explore Fixed Deposit options tailored to
                  your goals, preferred tenure, and liquidity needs.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/mutual-funds"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                  >
                    Explore Mutual Funds
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
