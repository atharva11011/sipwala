import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Insurance",
  description:
    "Comprehensive general insurance solutions from Sipwala: motor, travel, critical illness, fire, and shop insurance—with guidance and claim support.",
};

type CoverageCard = {
  title: string;
  icon: string;
  description: string;
  bullets: string[];
};

const coverages: CoverageCard[] = [
  {
    title: "Motor Insurance",
    icon: "directions_car",
    description:
      "Protection from financial losses due to damage or loss of your vehicle.",
    bullets: [
      "Coverage for vehicle damage or loss",
      "Protection against third-party liabilities",
      "Coverage for accidental death or injury (plan dependent)",
      "Cashless claim facility at network garages (where available)",
      "Hassle-free and quick claim support",
    ],
  },
  {
    title: "Travel Insurance",
    icon: "flight",
    description:
      "A worry-free journey for leisure, business, or education—at home or abroad.",
    bullets: [
      "Covers medical emergencies abroad (as per policy)",
      "Protection against trip cancellations or delays",
      "Covers lost baggage or documents",
      "Financial security against unexpected travel expenses",
    ],
  },
  {
    title: "Critical Illness Insurance",
    icon: "health_and_safety",
    description:
      "Financial support during serious health conditions—so you can focus on recovery.",
    bullets: [
      "Coverage for illnesses such as cancer, heart attack, stroke (as per policy)",
      "Support for high-cost treatments and hospitalization",
      "Lump sum payout for medical and recovery expenses (plan dependent)",
    ],
  },
  {
    title: "Fire Insurance",
    icon: "local_fire_department",
    description:
      "Protects property and assets against fire-related damages and allied risks.",
    bullets: [
      "Residential and commercial property",
      "Furniture, machinery, and stock",
      "Loss due to fire, explosion, or related risks",
      "Goods stored or temporarily moved (as per policy)",
    ],
  },
  {
    title: "Shop Insurance",
    icon: "storefront",
    description:
      "Safeguards your business from unforeseen risks—so operations stay resilient.",
    bullets: [
      "Protection against fire, theft, and natural disasters",
      "Burglary and accidental damage cover (as per policy)",
      "Support for losses due to business interruption (plan dependent)",
    ],
  },
];

const whySipwala = [
  "Personalized insurance solutions",
  "Quick and hassle-free claim assistance",
  "Trusted advisory and transparent process",
  "Coverage tailored to your needs",
  "Dedicated support at every step",
];

export default function GeneralInsurancePage() {
  return (
    <>
      {/* ─── Hero (unique: left content + stacked collage) ─── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="gi-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[rgb(var(--blue-700-rgb)/0.18)] mb-3">
                Comprehensive coverage
              </span>
              <h1
                id="gi-title"
                className="font-headline text-[38px] md:text-[62px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                General Insurance — Comprehensive Insurance Solutions for Every
                Need
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                At Sipwala, we believe protection is the foundation of financial
                security. Our range of insurance solutions helps safeguard you,
                your family, and your assets against life’s uncertainties.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/products/health-insurance"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Explore Health Insurance
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Protect", value: "Family + assets" },
                  { label: "Cover", value: "Everyday risks" },
                  { label: "Support", value: "Claims help" },
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
              <div className="relative">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                      <Image
                        src="/slides/pexels-picasjoe-11348120.png"
                        alt="Protection planning"
                        fill
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--blue-700-rgb),0.12),rgba(var(--green-700-rgb),0.10))]" />
                    </div>
                  </div>

                  <div className="col-span-7">
                    <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-[var(--borderSoft)] bg-[var(--gray-50)]">
                      <Image
                        src="/slides/pexels-towfiqu-barbhuiya-3440682-10972831.png"
                        alt="Policy details"
                        fill
                        sizes="(min-width: 1024px) 340px, 60vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="col-span-5">
                    <div className="relative aspect-[11/12] rounded-2xl overflow-hidden border border-[var(--borderSoft)] bg-[var(--gray-50)]">
                      <Image
                        src="/slides/pexels-maitree-rimthong-444156-1602726.png"
                        alt="Travel and mobility"
                        fill
                        sizes="(min-width: 1024px) 220px, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-6 md:-left-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[360px]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[var(--green-700)]">
                        shield
                      </span>
                    </div>
                    <div>
                      <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                        Secure what matters most
                      </div>
                      <div className="text-[12px] leading-[1.6] text-[var(--text-secondary)]">
                        From health and travel to vehicles and business.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Coverage Grid ─────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="coverage-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="coverage-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Insurance Solutions
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Choose the coverage that matches your life stage, risk exposure,
              and responsibilities.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {coverages.map((card) => (
              <div
                key={card.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-8 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      {card.title}
                    </div>
                    <p className="mt-2 text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                      {card.description}
                    </p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {card.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                            check_circle
                          </span>
                          <div className="text-[13px] leading-[1.75] text-[var(--text-secondary)] font-medium">
                            {b}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-headline text-[13px] font-extrabold tracking-tight text-[var(--blue-700)] hover:text-[var(--blue-800)]"
                      >
                        Request assistance
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Sipwala + CTA ─────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="why-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <h2
                id="why-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Why Choose Sipwala?
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                We help you choose the right cover, understand terms clearly,
                and support you through claims—so protection actually feels
                simple.
              </p>

              <div className="mt-8 space-y-3">
                {whySipwala.map((item) => (
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

            <div className="lg:col-span-6">
              <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[22px] md:text-[30px] font-extrabold tracking-tight text-[var(--text-primary)]">
                      Secure What Matters Most
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      From your health and travel to your vehicle and business—
                      Sipwala helps you stay protected at every stage of life.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                      >
                        Contact Us
                      </Link>
                      <Link
                        href="/products/life-insurance"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                      >
                        Explore Life Insurance
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      support_agent
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                      Claim support that stays with you
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      When something unexpected happens, you want clarity—not
                      complexity. We help you navigate claims and documentation
                      with less stress.
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
