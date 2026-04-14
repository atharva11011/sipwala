import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "National Pension Scheme (NPS)",
  description:
    "Build a secure retirement with NPS—government-backed, regulated retirement savings with diversification, low cost, and tax efficiency.",
};

const npsHelpsWith = [
  "Create a retirement corpus",
  "Invest regularly with discipline",
  "Benefit from tax advantages (as applicable)",
  "Stay financially prepared for the future",
];

const keyBenefits = [
  {
    title: "Retirement corpus creation",
    icon: "savings",
    description:
      "Build a dedicated fund for post-retirement life through consistent contributions.",
  },
  {
    title: "Tax benefits",
    icon: "receipt_long",
    description:
      "Eligible contributions may offer tax-saving opportunities under applicable provisions.",
  },
  {
    title: "Long-term wealth creation",
    icon: "timeline",
    description:
      "Disciplined investing plus compounding can support long-horizon growth.",
  },
  {
    title: "Low cost structure",
    icon: "price_check",
    description:
      "One of the most cost-effective retirement products available.",
  },
  {
    title: "Diversified investment",
    icon: "account_tree",
    description:
      "Exposure to equity, corporate debt, and government securities helps balance risk.",
  },
  {
    title: "Regulated and transparent",
    icon: "verified",
    description:
      "Operates under a strong regulatory framework for clarity and governance.",
  },
];

const features = [
  {
    title: "Flexibility",
    icon: "tune",
    description:
      "Choose an investment pattern and manage retirement savings aligned to your goals.",
  },
  {
    title: "Liquidity",
    icon: "water_drop",
    description:
      "Partial withdrawals may be allowed for specific conditions (education, medical needs, emergencies) as per rules.",
  },
  {
    title: "Diversification",
    icon: "layers",
    description:
      "Allocation across asset classes can reduce concentration risk over time.",
  },
  {
    title: "Tax efficiency",
    icon: "workspace_premium",
    description:
      "Designed with tax-saving opportunities that can support salaried and self-employed investors.",
  },
  {
    title: "Easy online access",
    icon: "language",
    description:
      "Open, manage, and track your NPS account conveniently through online platforms.",
  },
];

const accountTypes = [
  {
    title: "Tier I account",
    icon: "lock",
    description:
      "The primary retirement account for long-term savings with withdrawal restrictions that support retirement discipline.",
  },
  {
    title: "Tier II account",
    icon: "lock_open",
    description:
      "A voluntary savings account offering more flexibility in withdrawals and contributions.",
  },
];

const withdrawals = [
  {
    title: "Before retirement age",
    icon: "assignment",
    description:
      "Partial withdrawals may be allowed for approved purposes under specific rules.",
  },
  {
    title: "At retirement",
    icon: "payments",
    description:
      "A portion of the corpus can generally be withdrawn, while the remainder is used to purchase an annuity for pension income (as per regulations).",
  },
  {
    title: "In case of death",
    icon: "diversity_3",
    description:
      "The corpus is passed on to the nominee as per policy rules.",
  },
];

const sipwalaSupport = [
  {
    title: "Personalized retirement planning",
    icon: "map",
    description:
      "Goal-based planning that connects your savings rate to your desired retirement lifestyle.",
  },
  {
    title: "Guidance on account opening",
    icon: "assignment_turned_in",
    description:
      "Step-by-step support for documentation and setup.",
  },
  {
    title: "Tax-saving strategy support",
    icon: "calculate",
    description:
      "Help you understand how NPS fits into your broader tax plan (as applicable).",
  },
  {
    title: "Asset allocation advice",
    icon: "pie_chart",
    description:
      "Allocation suggestions that reflect your timeline, risk tolerance, and cash-flow needs.",
  },
  {
    title: "Ongoing monitoring",
    icon: "monitoring",
    description:
      "Periodic reviews so your plan stays aligned as your goals and life stage change.",
  },
];

const whySipwala = [
  "Trusted financial guidance",
  "Transparent and ethical support",
  "Personalized retirement solutions",
  "Long-term financial planning focus",
  "Dedicated assistance at every step",
];

export default function NationalPensionSystemPage() {
  return (
    <>
      {/* ─── Hero (unique: simple promise + clarity checklist) ───── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="nps-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[rgb(var(--blue-700-rgb)/0.18)] mb-3">
                National Pension Scheme (NPS)
              </span>
              <h1
                id="nps-title"
                className="font-headline text-[38px] md:text-[62px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Build a Secure Retirement with NPS
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                NPS is a government-backed retirement savings plan designed to
                help you build a strong financial future. It encourages
                disciplined investing during your earning years so you can aim
                for financial independence after retirement.
              </p>
              <p className="mt-4 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                At Sipwala, we help you understand NPS clearly and use it
                thoughtfully as part of long-term wealth and retirement
                planning.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Talk to a Retirement Advisor
                </Link>
                <Link
                  href="/products/fixed-deposit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Stable Savings Options
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {npsHelpsWith.map((item) => (
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
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                  <Image
                    src="/slides/pexels-ravi-roshan-2875998-14907378.png"
                    alt="Retirement planning and pension savings"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--blue-700-rgb),0.12),rgba(var(--green-700-rgb),0.10))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is NPS ───────────────────────────────────────── */}
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
              What is NPS?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              The National Pension Scheme is a long-term retirement solution
              regulated by the Pension Fund Regulatory and Development
              Authority (PFRDA). It is open to Indian citizens and offers a
              structured way to save for retirement while benefiting from
              market-linked growth.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Benefits ───────────────────────────────────────────── */}
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
              Why Choose NPS?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              NPS is a trusted retirement option that balances flexibility with
              stability through a regulated structure and diversified exposure.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((b) => (
              <div
                key={b.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    {b.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {b.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {b.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ───────────────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="features-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="features-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Features of NPS
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Practical features that support long-term retirement planning
              without adding unnecessary complexity.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--blue-700)]">
                        {f.icon}
                      </span>
                    </div>
                    <div>
                      <div className="font-headline text-[16px] md:text-[18px] font-extrabold text-[var(--text-primary)]">
                        {f.title}
                      </div>
                      <div className="mt-2 text-[13px] md:text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                        {f.description}
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

      {/* ─── Account Types ─────────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="accounts-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="accounts-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Account Types in NPS
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {accountTypes.map((a) => (
              <div
                key={a.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    {a.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] md:text-[18px] font-extrabold text-[var(--text-primary)]">
                  {a.title}
                </div>
                <div className="mt-2 text-[13px] md:text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                  {a.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Withdrawal Options ───────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="withdrawals-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="withdrawals-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Withdrawal Options
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Withdrawals are permitted based on age and retirement conditions,
              as defined by applicable regulations.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {withdrawals.map((w) => (
              <div
                key={w.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {w.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {w.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {w.description}
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
                  Keep it simple
                </div>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                  NPS works best when it is treated as a long-term plan. The
                  biggest advantage comes from consistency—regular
                  contributions, sensible allocation, and periodic review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sipwala Support ───────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="sipwala-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="sipwala-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              How Sipwala Helps You with NPS
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We make retirement planning practical and easy to follow, so your
              plan stays aligned to your goals.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sipwalaSupport.map((s) => (
              <div
                key={s.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {s.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {s.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {s.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--green-700)]">
                  check_circle
                </span>
              </div>
              <div>
                <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                  Why choose Sipwala?
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whySipwala.map((item) => (
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

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
                  >
                    Start Planning Your Retirement
                  </Link>
                  <Link
                    href="/mutual-funds"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                  >
                    Explore Mutual Funds
                  </Link>
                </div>

                <div className="mt-6 text-[12px] leading-[1.7] text-[var(--text-muted)]">
                  Tax benefits, withdrawal rules, and eligibility are subject to
                  applicable regulations and can change. Always review the
                  latest rules and product disclosures.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
