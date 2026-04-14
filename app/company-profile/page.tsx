import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "Learn about Sipwala—our story, values, services, and approach to helping clients build long-term financial confidence.",
};

const coreValues = [
  {
    title: "Trust First",
    icon: "handshake",
    description:
      "We earn trust through consistency, integrity, and advice that prioritizes your long-term outcomes.",
    iconBg: "bg-[var(--green-50)]",
    iconColor: "text-[var(--green-700)]",
  },
  {
    title: "Client-Centric",
    icon: "person",
    description:
      "Your goals shape the plan. We design strategies around your timeline, risk comfort, and real-life needs.",
    iconBg: "bg-[var(--blue-50)]",
    iconColor: "text-[var(--blue-700)]",
  },
  {
    title: "Transparency",
    icon: "visibility",
    description:
      "Clear communication, simple explanations, and honest expectations—no jargon, no guesswork.",
    iconBg: "bg-[var(--gray-50)]",
    iconColor: "text-[var(--text-secondary)]",
  },
  {
    title: "Growth Mindset",
    icon: "trending_up",
    description:
      "We keep improving processes, tools, and knowledge to deliver better outcomes in a changing world.",
    iconBg: "bg-[var(--gold-light)]",
    iconColor: "text-[var(--gold-dark)]",
  },
  {
    title: "Commitment",
    icon: "verified",
    description:
      "From onboarding to reviews, we stay accountable and support you at every step.",
    iconBg: "bg-[var(--blue-50)]",
    iconColor: "text-[var(--blue-700)]",
  },
];

const services = [
  {
    title: "Investment Planning",
    icon: "savings",
    description:
      "Goal-aligned SIP and investment planning built for consistency and discipline.",
  },
  {
    title: "Wealth Management",
    icon: "account_balance_wallet",
    description:
      "Portfolio guidance with a long-term view—risk awareness, allocation, and review cadence.",
  },
  {
    title: "Insurance Solutions",
    icon: "shield",
    description:
      "Coverage planning that protects what matters most—life, health, and general insurance.",
  },
  {
    title: "Retirement Planning",
    icon: "elderly",
    description:
      "A retirement roadmap that balances security, growth, and expected cash-flow needs.",
  },
  {
    title: "Tax Planning & Advisory",
    icon: "receipt_long",
    description:
      "Planning support to help you invest efficiently and stay organized across the year.",
  },
  {
    title: "Financial Goal Planning",
    icon: "flag",
    description:
      "From education to home-buying—structured plans that turn milestones into monthly actions.",
  },
];

const process = [
  {
    title: "Understand",
    icon: "forum",
    description:
      "We start by learning your goals, current investments, risk comfort, and time horizon.",
  },
  {
    title: "Design",
    icon: "edit_note",
    description:
      "We translate your inputs into a clear strategy with priorities, allocation, and action steps.",
  },
  {
    title: "Implement",
    icon: "task_alt",
    description:
      "We help you execute—SIPs, protection planning, and setup—without confusion.",
  },
  {
    title: "Review",
    icon: "calendar_month",
    description:
      "Periodic reviews keep you on track, aligned with changes in life and markets.",
  },
];

export default function CompanyProfilePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="company-profile-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--green-50)] text-[var(--green-700)] border border-[rgb(var(--green-700-rgb)/0.18)] mb-3">
                Company Profile
              </span>
              <h1
                id="company-profile-title"
                className="font-headline text-[40px] md:text-[64px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)] mb-5"
              >
                Sipwala — Your Financial Growth Partner
              </h1>
              <p className="text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Sipwala is a team of dedicated financial professionals helping
                individuals, families, and businesses make confident financial
                decisions. We focus on clarity, discipline, and long-term
                progress—so your plan stays practical and your journey stays
                steady.
              </p>

              <div className="mt-8 p-5 md:p-6 rounded-3xl bg-[var(--gray-50)] border border-[var(--borderSoft)]">
                <div className="text-[12px] font-bold tracking-[2px] uppercase text-[var(--blue-700)] mb-2">
                  Our Guiding Principle
                </div>
                <div className="font-headline text-[18px] md:text-[20px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                  “Badhate Chalo Bharose Ke Sath”
                </div>
                <div className="text-[14px] leading-[1.8] text-[var(--text-secondary)] mt-2">
                  Grow forward with trust—step by step.
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                <Image
                  src="/slides/pexels-kindelmedia-6774947.png"
                  alt="Financial planning meeting"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--green-700-rgb),0.10),rgba(var(--blue-700-rgb),0.12))]" />
              </div>

              <div className="absolute -bottom-8 -left-6 md:-left-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[320px]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                      Client-first advisory
                    </div>
                    <div className="text-[12px] leading-[1.6] text-[var(--text-secondary)]">
                      Simple, transparent, and goal-led.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who We Are ───────────────────────────────────── */}
      <section
        className="py-14 md:py-20"
        role="region"
        aria-labelledby="who-we-are-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <h2
                id="who-we-are-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Who We Are
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                Sipwala is more than a financial services provider—we aim to be
                your long-term partner in success. With deep domain knowledge
                and a client-first approach, we simplify complex choices and
                convert them into clear, actionable steps.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {process.map((step) => (
                  <div
                    key={step.title}
                    className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--gray-50)] border border-[var(--borderSoft)] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[var(--text-secondary)]">
                          {step.icon}
                        </span>
                      </div>
                      <div>
                        <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                          {step.title}
                        </div>
                        <div className="mt-1 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                          {step.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Journey ───────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-14 md:py-20"
        role="region"
        aria-labelledby="journey-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="journey-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Our Journey
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Our story began as <span className="font-semibold">Mahalakshmi Investments</span>,
              built on trust and service excellence. As we grew, we evolved into
              Sipwala—reflecting a broader vision and a modern approach to
              financial services.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              The name changed, but our values stayed the same: transparency,
              responsibility, and a strong commitment to client success.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Strong foundation",
                icon: "foundation",
                description:
                  "A relationship-led advisory culture built on consistency and trust.",
              },
              {
                title: "Modern experience",
                icon: "bolt",
                description:
                  "Simplified journeys and smarter processes to reduce friction and improve clarity.",
              },
              {
                title: "Long-term focus",
                icon: "timeline",
                description:
                  "Plans designed for resilience—reviewed, refined, and aligned with life changes.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[var(--surface)] p-6 md:p-7 rounded-3xl border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
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

      {/* ─── Core Values ───────────────────────────────────── */}
      <section
        className="py-14 md:py-20"
        role="region"
        aria-labelledby="values-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2
                id="values-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Our Core Values
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                We keep our work grounded in principles that protect your trust
                and support long-term outcomes.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="bg-[var(--surface)] p-6 md:p-7 rounded-3xl border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${v.iconBg} flex items-center justify-center mb-6`}
                >
                  <span className={`material-symbols-outlined ${v.iconColor}`}>
                    {v.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {v.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {v.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ──────────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-14 md:py-20"
        role="region"
        aria-labelledby="services-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="services-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Our Services
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              A well-rounded set of services designed to support you across
              stages—starting, protecting, growing, and planning for the future.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[var(--surface)] p-6 md:p-7 rounded-3xl border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
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
        </div>
      </section>

      {/* ─── Mission & Vision ──────────────────────────────── */}
      <section
        className="py-14 md:py-20"
        role="region"
        aria-labelledby="mission-vision-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2
            id="mission-vision-title"
            className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
          >
            Our Mission & Vision
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[var(--surface)] rounded-3xl border border-[var(--borderSoft)] p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    target
                  </span>
                </div>
                <div className="font-headline text-[18px] md:text-[20px] font-extrabold text-[var(--text-primary)]">
                  Mission
                </div>
              </div>
              <p className="text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                To empower individuals and businesses with personalized financial
                solutions and trusted guidance—so they can pursue their goals
                with confidence, clarity, and security.
              </p>
            </div>

            <div className="bg-[var(--surface)] rounded-3xl border border-[var(--borderSoft)] p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    public
                  </span>
                </div>
                <div className="font-headline text-[18px] md:text-[20px] font-extrabold text-[var(--text-primary)]">
                  Vision
                </div>
              </div>
              <p className="text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                To help make financial prosperity accessible—by delivering
                tailored solutions, building lasting trust, and supporting
                clients as they shape a secure and successful future.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-headline text-[18px] md:text-[20px] font-extrabold text-[var(--text-primary)]">
                  Why Choose Sipwala
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  Experienced experts, personalized strategies, transparent
                  practices, and a long-term relationship mindset.
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-primary px-5 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
