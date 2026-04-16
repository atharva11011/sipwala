import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Life Insurance",
  description:
    "Life insurance helps protect your family’s future and provides peace of mind. Explore term insurance, benefits, and how Sipwala supports your protection planning.",
};

const importance = [
  {
    title: "Family Protection First",
    icon: "favorite",
    description:
      "Ensure your loved ones stay financially secure, no matter what happens.",
  },
  {
    title: "Income Replacement",
    icon: "currency_exchange",
    description:
      "Replace lost income and help your family maintain their lifestyle.",
  },
  {
    title: "Goal Protection",
    icon: "school",
    description:
      "Support children’s education, marriage, and long-term dreams.",
  },
  {
    title: "Loan & Liability Protection",
    icon: "account_balance",
    description:
      "Cover home loans, personal loans, and other obligations.",
  },
  {
    title: "Peace of Mind",
    icon: "psychology",
    description:
      "Live confidently knowing your family has a safety net.",
  },
];

const keyBenefits = [
  {
    title: "Life Coverage",
    icon: "shield",
    description:
      "Protection against uncertainties such as death, disability, or critical illness (as per policy).",
  },
  {
    title: "Death Benefit",
    icon: "diversity_3",
    description: "Financial support for your family in your absence.",
  },
  {
    title: "Tax Benefits",
    icon: "receipt_long",
    description:
      "Potential tax savings under applicable sections (for example, Section 80C in India).",
  },
  {
    title: "Bonus / Maturity Benefits",
    icon: "workspace_premium",
    description:
      "In certain policies, additional benefits may apply along with the sum assured.",
  },
  {
    title: "Wealth & Estate Planning",
    icon: "account_tree",
    description: "Helps support long-term legacy planning for your family.",
  },
];

const whySipwala = [
  {
    title: "Personalized guidance",
    icon: "tune",
    description: "Recommendations tailored to your income, goals, and stage of life.",
  },
  {
    title: "Simple & transparent process",
    icon: "visibility",
    description: "Clear explanations and paperwork support—no confusion.",
  },
  {
    title: "Family-first approach",
    icon: "volunteer_activism",
    description: "Protection planning built around what matters most—your people.",
  },
  {
    title: "Long-term relationship focus",
    icon: "handshake",
    description:
      "Ongoing support as your responsibilities and coverage needs evolve.",
  },
];

const planningApproach = [
  "Aligned with your income and lifestyle",
  "Sufficient to cover your family’s future needs",
  "Balanced with your investments and savings goals",
  "Flexible to adapt as your life evolves",
];

const rightTime = [
  "When you start earning",
  "When you get married",
  "When you have children",
  "When you take loans",
];

export default function LifeInsurancePage() {
  return (
    <>
      {/* ─── Hero (unique: split badge + quote card) ───────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="life-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[rgb(var(--blue-700-rgb)/0.18)] mb-3">
                Protection planning
              </span>
              <h1
                id="life-title"
                className="font-headline text-[38px] md:text-[62px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Secure Your Tomorrow with Life Insurance
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Life is full of possibilities—and uncertainties. Think of life
                insurance as a protective shield for your loved ones: a promise
                that their dreams and future remain secure.
              </p>
              <p className="mt-4 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                It’s not just a policy. It’s peace of mind.
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
                  Explore Calculators
                </Link>
              </div>

              <div className="mt-8 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      verified
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[16px] md:text-[18px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                      A promise to your loved ones
                    </div>
                    <p className="mt-2 text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                      “No matter what happens, I’ve got you covered.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-[rgb(var(--navy-950-rgb)/0.28)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--surface)]">
                  <Image
                    src="/slides/pexels-kindelmedia-6774947.png"
                    alt="Family protection and life planning"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is Life Insurance ───────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="what-life-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="what-life-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              What is Life Insurance?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Life insurance is a financial agreement where you pay a regular
              premium, and in return your family receives a financial payout in
              case of an unfortunate event. It helps your loved ones maintain
              their lifestyle, stay financially stable, and continue pursuing
              their goals.
            </p>
          </div>

          <div className="mt-10 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--blue-700)]">
                  timer
                </span>
              </div>
              <div>
                <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                  What is Term Insurance?
                </div>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                  Term insurance is the simplest and most affordable form of
                  life insurance. It provides coverage for a specific period
                  (term), offers a high sum assured at a comparatively low cost,
                  and pays a lump sum to your family in case of untimely demise.
                </p>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                  Why it matters: it acts as a financial safety net when your
                  family needs it the most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Importance ───────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="importance-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="importance-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Why Life Insurance is Important
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Life insurance is one of the most responsible financial decisions
              you can make.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {importance.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    {item.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {item.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits + Trust ─────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="benefits-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2
                id="benefits-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Key Benefits of Life Insurance
              </h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {keyBenefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-[var(--blue-700)]">
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

            <div className="lg:col-span-5">
              <div className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      handshake
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Why Trust Sipwala?
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      At Sipwala, we understand your dreams, responsibilities,
                      and emotions. We don’t just sell policies—we help you
                      build protection plans that truly matter.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {whySipwala.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="material-symbols-outlined text-[18px] text-[var(--blue-700)] mt-[2px]">
                        check_circle
                      </span>
                      <div>
                        <div className="font-headline text-[14px] font-extrabold text-[var(--text-primary)]">
                          {item.title}
                        </div>
                        <div className="mt-1 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                  >
                    Get Protected
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

      {/* ─── Planning Approach + Timing ───────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="planning-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2
                id="planning-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Our Approach to Protection Planning
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                We ensure your life insurance plan is practical today and
                resilient for tomorrow.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {planningApproach.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-2xl px-4 py-3"
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

            <div className="lg:col-span-5">
              <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      schedule
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      When should you take life insurance?
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      The best time is now. The earlier you start, the lower the
                      premium and the higher the protection for your budget.
                    </p>

                    <div className="mt-6 space-y-3">
                      {rightTime.map((item) => (
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

                    <div className="mt-7">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─────────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="cta-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--green-700)]">
                  security
                </span>
              </div>
              <div>
                <h2
                  id="cta-title"
                  className="font-headline text-[22px] md:text-[30px] font-extrabold tracking-tight text-[var(--text-primary)]"
                >
                  Let’s Secure Your Future Together
                </h2>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)] max-w-3xl">
                  Life is unpredictable—but your family’s future doesn’t have to
                  be. Connect with Sipwala and build a strong financial shield
                  for the people you love.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                  >
                    Connect with Sipwala
                  </Link>
                  <Link
                    href="/products/health-insurance"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                  >
                    Explore Health Insurance
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
