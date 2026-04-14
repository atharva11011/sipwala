import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Health Insurance",
  description:
    "Health insurance helps protect you and your family from unexpected medical expenses. Explore mediclaim, critical illness cover, key benefits, and how Sipwala supports you.",
};

const highlights = [
  {
    title: "Hospitalization expense cover",
    icon: "local_hospital",
    description:
      "Helps manage eligible medical bills so emergencies don’t derail your plans (as per policy terms).",
  },
  {
    title: "Cashless / reimbursement options",
    icon: "credit_card",
    description:
      "Choose the facility that fits the hospital network and your situation.",
  },
  {
    title: "Critical illness protection",
    icon: "health_and_safety",
    description:
      "Add a layer of financial support if you’re diagnosed with a covered critical illness.",
  },
  {
    title: "Second opinion support",
    icon: "stethoscope",
    description:
      "Access qualified medical opinions to make clearer decisions when it matters.",
  },
  {
    title: "International treatment add-ons",
    icon: "public",
    description:
      "Options for broader treatment coverage depending on the plan you choose.",
  },
  {
    title: "Annual health check-ups",
    icon: "clinical_notes",
    description:
      "Preventive check-ups for covered family members via reputed panel centers (plan dependent).",
  },
];

const whyMediclaim = [
  "Illness or injury can happen at any stage of life",
  "Medical emergencies rarely come with a warning",
  "Private healthcare costs can be significant",
  "Diagnostics, doctor fees, and medicines add up quickly",
  "Without cover, you may dip into savings meant for goals and dreams",
];

const rightTime = [
  "Preferably when you’re young—premiums are usually lower",
  "But better late than never—starting now is still beneficial",
  "No-claim benefits may apply for claim-free years (as per insurer rules)",
  "Tax benefits may be available under Section 80D (subject to eligibility)",
];

export default function HealthInsurancePage() {
  return (
    <>
      {/* ─── Hero (unique: stacked stats + image mosaic) ───── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="hi-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--green-50)] text-[var(--green-700)] border border-[rgb(var(--green-700-rgb)/0.18)] mb-3">
                Protection + preparedness
              </span>
              <h1
                id="hi-title"
                className="font-headline text-[38px] md:text-[62px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Health Insurance — Protect Your Family with Confidence
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Health insurance helps protect you from health emergencies and
                eligible hospitalization expenses. In a busy life, a well-chosen
                policy can be the difference between peace of mind and financial
                stress.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Get a Policy Review
                </Link>
                <Link
                  href="/products/life-insurance"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Explore Life Insurance
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Purpose", value: "Medical expense protection" },
                  { label: "Coverage", value: "Mediclaim + add-ons" },
                  { label: "Support", value: "Cashless / reimbursement" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-2xl px-4 py-3"
                  >
                    <div className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-muted)]">
                      {item.label}
                    </div>
                    <div className="mt-1 font-headline text-[14px] font-extrabold tracking-tight text-[var(--text-primary)]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                    <Image
                      src="/slides/pexels-ravi-roshan-2875998-14907378.png"
                      alt="Health care and protection"
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--green-700-rgb),0.10),rgba(var(--blue-700-rgb),0.10))]" />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--borderSoft)] bg-[var(--gray-50)]">
                    <Image
                      src="/slides/pexels-towfiqu-barbhuiya-3440682-10972831.png"
                      alt="Policy documents"
                      fill
                      sizes="(min-width: 1024px) 270px, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--borderSoft)] bg-[var(--gray-50)]">
                    <Image
                      src="/slides/pexels-towfiqu-barbhuiya-3440682-9755376.png"
                      alt="Planning and support"
                      fill
                      sizes="(min-width: 1024px) 270px, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Critical illness section ─────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="critical-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="critical-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Critical Illness Cover — Extra Protection When Life Changes
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              A critical illness cover can help insure you against the financial
              impact of serious illnesses—similar to how you protect your car or
              home. If you’re diagnosed with a covered condition, a payout may
              be available as per policy terms.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {item.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {item.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mediclaim explanation + why needed ───────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="mediclaim-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <h2
                id="mediclaim-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                What is a Mediclaim Policy?
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                Health insurance is often referred to as a mediclaim policy—a
                plan designed to help cover eligible medical and hospitalization
                expenses. It’s built to support you during emergencies, when
                costs can rise quickly.
              </p>

              <div className="mt-8 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      emergency
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Cashless + reimbursement options
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      Depending on your plan and hospital network, you may have
                      access to cashless facilities or reimbursement-based
                      claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      help
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Why is a Mediclaim Policy Needed?
                    </div>
                    <div className="mt-5 space-y-3">
                      {whyMediclaim.map((item) => (
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
                        Talk to Sipwala
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
          </div>
        </div>
      </section>

      {/* ─── When to take + note ──────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="when-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="when-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              When Should You Take a Mediclaim Policy?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Preferably at a young age—but better late than never. Starting
              earlier can be easier on the budget, and benefits may accumulate
              over time depending on the insurer and plan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    schedule
                  </span>
                </div>
                <div>
                  <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                    Practical timing guidance
                  </div>
                  <div className="mt-5 space-y-3">
                    {rightTime.map((item) => (
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
                </div>
              </div>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    info
                  </span>
                </div>
                <div>
                  <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                    Important note
                  </div>
                  <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                    Coverage, benefits, and eligibility vary by insurer and plan.
                    Tax benefits (such as Section 80D) are subject to applicable
                    laws and your eligibility. Always read policy wordings and
                    terms carefully.
                  </p>

                  <div className="mt-6">
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
      </section>
    </>
  );
}
