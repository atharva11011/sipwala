import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Spiwala is a trusted financial planning partner offering personalized, transparent, and goal-based strategies for long-term financial confidence.",
};

const journeyPoints = [
  {
    title: "Started as Mahalakshmi Investments",
    icon: "history",
    description:
      "A relationship-first advisory built on trust and consistent service.",
  },
  {
    title: "Evolved into Spiwala",
    icon: "autorenew",
    description:
      "A modern brand experience while keeping the same values at the core.",
  },
  {
    title: "Expanded services",
    icon: "grid_view",
    description:
      "Support across investments, protection, retirement, and goal planning.",
  },
  {
    title: "Built long-term partnerships",
    icon: "handshake",
    description:
      "Success measured by outcomes, clarity, and peace of mind—year after year.",
  },
];

const approachCards = [
  {
    title: "Tailored to you",
    icon: "tune",
    description:
      "Strategies aligned to your current situation, responsibilities, and risk comfort.",
  },
  {
    title: "Goal-based planning",
    icon: "flag",
    description:
      "Plans built around milestones—education, home, retirement, and more.",
  },
  {
    title: "Flexible over time",
    icon: "swap_horiz",
    description:
      "As life changes, your plan adapts—without losing direction.",
  },
  {
    title: "Ongoing guidance",
    icon: "support_agent",
    description:
      "Clear reviews and steady support so you stay consistent and confident.",
  },
];

const achievements = [
  {
    label: "Happy Clients Served",
    value: "660+",
    note: "Supporting individuals and families in reaching key milestones.",
    tone: "text-[var(--blue-700)]",
    bg: "bg-[var(--blue-50)]",
  },
  {
    label: "Portfolio Managed",
    value: "₹30+ Cr",
    note: "Strategic long-term management with disciplined allocation.",
    tone: "text-[var(--green-700)]",
    bg: "bg-[var(--green-50)]",
  },
  {
    label: "SIP Book Size",
    value: "₹30+ L",
    note: "As of Sept 2023—promoting consistent investing habits.",
    tone: "text-[var(--gold-dark)]",
    bg: "bg-[var(--gold-light)]",
  },
];

const philosophy = [
  {
    title: "Long-term security",
    icon: "lock",
    description:
      "Building stability and protection so your plan can withstand uncertainty.",
  },
  {
    title: "Financial independence",
    icon: "workspace_premium",
    description:
      "Helping you create options—so your money supports your life decisions.",
  },
  {
    title: "Informed decisions",
    icon: "fact_check",
    description:
      "Simple explanations so you understand the ‘why’ behind each recommendation.",
  },
  {
    title: "Peace of mind",
    icon: "spa",
    description:
      "A plan you can follow calmly—without stress, confusion, or guesswork.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="who-we-are-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
                Who We Are
              </span>
              <h1
                id="who-we-are-title"
                className="font-headline text-[40px] md:text-[64px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Spiwala — Your Trusted Financial Planning Partner
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Welcome to Spiwala, where financial planning meets trust,
                strategy, and long-term vision. We help individuals, couples, and
                families build secure financial futures through personalized,
                transparent, goal-oriented guidance.
              </p>

              <div className="mt-8 p-5 md:p-6 rounded-3xl bg-[var(--gray-50)] border border-[var(--borderSoft)]">
                <div className="text-[12px] font-bold tracking-[2px] uppercase text-[var(--green-700)] mb-2">
                  Our Guiding Belief
                </div>
                <div className="font-headline text-[18px] md:text-[20px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                  “Badhate Chalo Bharose Ke Sath”
                </div>
                <div className="text-[14px] leading-[1.8] text-[var(--text-secondary)] mt-2">
                  Grow forward with trust.
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Get a Plan
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Try Calculators
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                <Image
                  src="/slides/pexels-markus-winkler-1430818-12244851.png"
                  alt="Financial planning workspace"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--green-700-rgb),0.10),rgba(var(--blue-700-rgb),0.12))]" />
              </div>

              <div className="absolute -bottom-8 -left-6 md:-left-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[340px]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--green-700)]">
                      trending_up
                    </span>
                  </div>
                  <div>
                    <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                      Goal-led planning
                    </div>
                    <div className="text-[12px] leading-[1.6] text-[var(--text-secondary)]">
                      Structured steps, steady progress.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Founder Intro ─────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="founder-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <h2
                id="founder-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Meet Santosh Behere
              </h2>
              <div className="mt-2 text-[12px] font-bold tracking-[2px] uppercase text-[var(--blue-700)]">
                Founder • Certified Financial Planner • Visionary Leader
              </div>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                Hello, I’m Santosh Behere. My journey began with a simple
                mission—to help people make smarter financial decisions and
                achieve lasting security. Today, that mission continues as a
                disciplined, client-focused financial planning practice.
              </p>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                Beyond numbers and investments, I believe financial planning is
                about confidence, clarity, and peace of mind.
              </p>

              <div className="mt-6">
                <Link
                  href="/meet-our-founder"
                  className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-[var(--blue-700)] hover:text-[var(--blue-800)] transition-colors"
                >
                  Read the full founder story
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--borderSoft)] bg-[var(--gray-50)] shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                  <Image
                    src="/867Santosh%20Behare%20Photo%20PNG.png"
                    alt="Founder portrait"
                    fill
                    sizes="(min-width: 768px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--blue-700)]">
                        checklist
                      </span>
                    </div>
                    <div>
                      <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                        What to expect
                      </div>
                      <div className="mt-2 space-y-3">
                        {[
                          "Clear goal mapping and prioritization",
                          "Simple, transparent guidance",
                          "Disciplined investing habits",
                          "Reviews that keep you on track",
                        ].map((item) => (
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Journey ───────────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
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
              Founded with a purpose to simplify and strengthen financial
              journeys, Spiwala has grown from its roots as Mahalakshmi
              Investments into a dynamic, client-focused planning practice.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyPoints.map((p) => (
              <div
                key={p.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {p.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {p.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {p.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What We Do ───────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="what-we-do-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="what-we-do-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              What We Do
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We specialize in personalized and goal-based financial planning.
              Every client is different, so we design strategies that stay
              practical, measurable, and adaptable across life changes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachCards.map((c) => (
              <div
                key={c.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    {c.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {c.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {c.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Achievements ─────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="achievements-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="achievements-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Our Achievements
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              These milestones reflect not just numbers—but trust, relationships,
              and results.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-8"
              >
                <div className={`inline-flex px-3 py-1 rounded-full ${a.bg}`}>
                  <div className={`text-[12px] font-bold tracking-[2px] uppercase ${a.tone}`}>
                    {a.label}
                  </div>
                </div>
                <div className={`mt-4 font-headline text-[44px] font-black ${a.tone}`}>
                  {a.value}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {a.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy ───────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="philosophy-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="philosophy-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Our Philosophy
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Financial planning isn’t just about wealth creation—it’s about
              building security, independence, and peace of mind. Every
              recommendation we make is guided by integrity, transparency, and
              your best interest.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((p) => (
              <div
                key={p.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {p.icon}
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  {p.title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {p.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Commitment + Message ─────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="commitment-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7">
              <h2
                id="commitment-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
              >
                Let’s Build Your Financial Future Together
              </h2>
              <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                Your goals are important. Your future is valuable. We’re here to
                guide you at every step—whether you’re starting your investment
                journey or planning long-term wealth creation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Talk to an Advisor
                </Link>
                <Link
                  href="/company-profile"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Company Profile
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[var(--blue-700)]">
                      format_quote
                    </span>
                  </div>
                  <div>
                    <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                      A Message from the Founder
                    </div>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                      “Financial success is not about timing the market, but
                      about time in the market—with the right guidance and
                      discipline. At Spiwala, we walk this journey with you,
                      every step of the way.”
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/meet-our-founder"
                        className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-[var(--blue-700)] hover:text-[var(--blue-800)] transition-colors"
                      >
                        Meet our founders
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
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
