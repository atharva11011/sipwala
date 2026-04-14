import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insurance Planning",
  description:
    "Insurance planning helps you protect your family, income, and assets with the right coverage structure. Learn how insurance works and the key building blocks of a policy.",
};

const takeaways = [
  "Insurance is a contract (policy) where an insurer covers losses from specific contingencies or perils.",
  "There are many types of insurance policies; life, health, home/property, and motor are common starting points.",
  "Most policies are built around three core components: premium, deductible, and policy limit.",
];

const components = [
  {
    title: "Premium",
    icon: "payments",
    description:
      "The amount you pay to keep the policy active—monthly, quarterly, or yearly.",
  },
  {
    title: "Deductible",
    icon: "account_balance_wallet",
    description:
      "The amount you pay out of pocket before the insurer starts paying eligible claims (common in health/motor/property).",
  },
  {
    title: "Policy Limit",
    icon: "tune",
    description:
      "The maximum amount the insurer will pay for covered losses during a period or for a specific claim.",
  },
];

const commonTypes = [
  { title: "Motor", icon: "directions_car" },
  { title: "Health", icon: "health_and_safety" },
  { title: "Home / Property", icon: "house" },
  { title: "Life", icon: "shield" },
];

export default function InsurancePlanningPage() {
  return (
    <>
      {/* ─── Hero (single image section) ───────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="ip-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[rgb(var(--blue-700-rgb)/0.18)] mb-3">
                Protection strategy
              </span>
              <h1
                id="ip-title"
                className="font-headline text-[38px] md:text-[62px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Insurance Planning
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Insurance planning is the foundation of financial security. It
                helps protect your family, income, and assets against life’s
                uncertainties—so one unexpected event doesn’t derail long-term
                goals.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Get a Coverage Review
                </Link>
                <Link
                  href="/products/general-insurance"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Explore General Insurance
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {commonTypes.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-2xl px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[var(--blue-700)]">
                        {item.icon}
                      </span>
                      <div className="text-[12px] font-bold tracking-[1px] text-[var(--text-secondary)]">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                  <Image
                    src="/slides/pexels-towfiqu-barbhuiya-3440682-10972831.png"
                    alt="Insurance planning and financial protection"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--blue-700-rgb),0.12),rgba(var(--green-700-rgb),0.10))]" />
                </div>

                <div className="absolute -bottom-8 -left-6 md:-left-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[360px]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[var(--green-700)]">
                        policy
                      </span>
                    </div>
                    <div>
                      <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                        A plan, not just a policy
                      </div>
                      <div className="text-[12px] leading-[1.6] text-[var(--text-secondary)]">
                        Right cover • right limits • right time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is Insurance ─────────────────────────────── */}
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
              What is Insurance?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Insurance is a contract—represented by a policy—in which an
              individual or entity receives financial protection or
              reimbursement against losses from an insurance company. The
              company pools many clients’ risks to make protection more
              affordable.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Insurance policies can help hedge the risk of financial losses,
              both big and small, that may arise from damage to you or your
              property, or from liability for damage or injury caused to a third
              party.
            </p>
          </div>
        </div>
      </section>

      {/* ─── How Insurance Works ───────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="how-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <h2
                id="how-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                How Insurance Works
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                There are many types of insurance policies, and most individuals
                or businesses can find a plan that fits their needs—at a price.
                Common personal covers include motor, health, homeowners/
                property, and life insurance.
              </p>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                In some places, certain covers (like motor insurance) may be
                legally required. Regardless, the goal stays the same: reduce
                the financial shock of unexpected events.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      lightbulb
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Key Takeaways
                    </div>
                    <div className="mt-5 space-y-3">
                      {takeaways.map((item) => (
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
                        href="/products/health-insurance"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                      >
                        Health Insurance
                      </Link>
                      <Link
                        href="/products/life-insurance"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                      >
                        Life Insurance
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Components ──────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="components-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="components-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              The 3 Building Blocks of Most Policies
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Understanding these three terms makes it much easier to compare
              policies and choose the right cover.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((item) => (
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

          <div className="mt-10 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--blue-700)]">
                  support_agent
                </span>
              </div>
              <div>
                <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                  Want help choosing the right cover?
                </div>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                  Share your goals, responsibilities, and current policies.
                  Sipwala can help you identify gaps, optimize limits, and keep
                  coverage aligned as life changes.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/products/general-insurance"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                  >
                    General Insurance
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
