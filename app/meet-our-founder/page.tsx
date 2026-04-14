import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet Our Founders",
  description:
    "Learn about Sipwala’s founders—Santosh Behare and Seema Behare—and the values and vision behind our work.",
};

const founders = [
  {
    name: "Santosh Behare",
    role: "Founder & Visionary Leader",
    imageSrc: "/867Santosh%20Behare%20Photo%20PNG.png",
    imageAlt: "Founder portrait",
    highlights: [
      "Ex-Serviceman (BSF) with 11+ years of national service",
      "Certified Financial Planner (CFP)",
      "NISM-certified across multiple financial programs",
      "Motivational trainer & soft skills mentor",
    ],
    paragraphs: [
      "At the heart of our organization stands Santosh Behare, a leader whose journey reflects discipline, dedication, and purpose. His service in the Border Security Force (BSF) shaped an enduring commitment to integrity, resilience, and responsibility.",
      "Transitioning from military service to financial leadership, Santosh brought the same discipline into finance—pairing structured planning with ethical, client-first guidance. His work focuses on helping people build long-term financial confidence through clarity and consistent actions.",
    ],
  },
  {
    name: "Seema Behare",
    role: "Co-Founder & Strategic Advisor",
    imageSrc: "/726Behare%20mam%2012.jpg",
    imageAlt: "Co-founder portrait",
    highlights: [
      "10+ years teaching Resource Management at SGBAU, Amravati",
      "Chairperson at JCI (2018)",
      "Strong communication, mentoring, and people leadership",
      "Oversees backend operations and planning workflows",
    ],
    paragraphs: [
      "Seema Behare brings a unique blend of academic excellence, leadership, and financial insight. With over a decade of teaching experience in Resource Management, she has a passion for simplifying concepts and making guidance accessible.",
      "Her leadership experience and mentoring mindset help build a strong client experience and a high-performing team culture. She also supports operational excellence—ensuring planning, documentation, and coordination run smoothly behind the scenes.",
    ],
  },
];

const principles = [
  {
    title: "Discipline from Service",
    icon: "military_tech",
    description:
      "A structured, process-driven approach—focused on doing the right things consistently.",
  },
  {
    title: "Expertise from Knowledge",
    icon: "school",
    description:
      "Continuous learning, certifications, and practical experience that translate into better advice.",
  },
  {
    title: "Empathy through Mentorship",
    icon: "psychology",
    description:
      "Guidance that respects your situation, listens carefully, and explains the ‘why’ clearly.",
  },
  {
    title: "Trust via Transparency",
    icon: "visibility",
    description:
      "Clear communication, honest expectations, and a relationship built for the long term.",
  },
];

export default function MeetOurFounderPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="founders-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
            Leadership
          </span>
          <h1
            id="founders-title"
            className="font-headline text-[40px] md:text-[64px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
          >
            Meet Our Founders
          </h1>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-3xl">
            Sipwala is built on discipline, knowledge, and trust. Learn about the
            founders who shaped our approach—and the values that guide every
            client relationship.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-8">
              <div className="text-[12px] font-bold tracking-[2px] uppercase text-[var(--green-700)] mb-2">
                Our Guiding Principle
              </div>
              <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                “Badhate Chalo Bharose Ke Sath”
              </div>
              <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                Grow forward with trust.
              </div>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    account_balance
                  </span>
                </div>
                <div>
                  <div className="font-headline text-[18px] md:text-[20px] font-extrabold text-[var(--text-primary)]">
                    Groww Lakshmi Finserv Pvt. Ltd.
                  </div>
                  <div className="mt-2 text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                    Sipwala is our modern platform experience—built on a foundation
                    of service, transparency, and disciplined planning.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Founder Profiles ──────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="profiles-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2
            id="profiles-title"
            className="sr-only"
          >
            Founder Profiles
          </h2>

          <div className="grid grid-cols-1 gap-10">
            {founders.map((founder, idx) => (
              <div
                key={founder.name}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start ${
                  idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[var(--borderSoft)] bg-[var(--gray-50)] shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                    <Image
                      src={founder.imageSrc}
                      alt={founder.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 380px, 100vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.25))]" />
                  </div>
                </div>

                {/* Copy */}
                <div className="lg:col-span-8">
                  <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                      <div>
                        <h3 className="font-headline text-[26px] md:text-[34px] font-black tracking-tight text-[var(--text-primary)] leading-[1.15]">
                          {founder.name}
                        </h3>
                        <div className="mt-2 text-[12px] font-bold tracking-[2px] uppercase text-[var(--blue-700)]">
                          {founder.role}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gray-50)] border border-[var(--borderSoft)]">
                        <span className="material-symbols-outlined text-[var(--green-700)]">
                          verified
                        </span>
                        <span className="text-[12px] font-bold tracking-wide text-[var(--text-secondary)]">
                          Values-led leadership
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      {founder.paragraphs.map((p) => (
                        <p
                          key={p}
                          className="text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {founder.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-start gap-3 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-2xl px-4 py-3"
                        >
                          <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                            check_circle
                          </span>
                          <div className="text-[13px] leading-[1.7] text-[var(--text-secondary)] font-medium">
                            {h}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy ───────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="philosophy-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="philosophy-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Our Philosophy & Leadership Vision
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Under the guidance of Santosh and Seema Behare, our organization is
              built on discipline, expertise, empathy, and transparency. Their
              combined leadership ensures clients receive not just financial
              advice—but a long-term growth partnership.
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
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="commitment-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2
            id="commitment-title"
            className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
          >
            Our Commitment to You
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    partner_exchange
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  Personalized solutions
                </div>
              </div>
              <p className="text-[14px] leading-[1.9] text-[var(--text-secondary)]">
                Plans designed around your goals, timeline, and comfort—so you
                can move forward with confidence.
              </p>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    fact_check
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  Transparent guidance
                </div>
              </div>
              <p className="text-[14px] leading-[1.9] text-[var(--text-secondary)]">
                Clear explanations and honest expectations—so you always know
                what you’re doing and why.
              </p>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--gray-50)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--text-secondary)]">
                    support_agent
                  </span>
                </div>
                <div className="font-headline text-[18px] font-extrabold text-[var(--text-primary)]">
                  Dedicated support
                </div>
              </div>
              <p className="text-[14px] leading-[1.9] text-[var(--text-secondary)]">
                Long-term relationship building with support across stages—start,
                protect, grow, and review.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--blue-700)]">
                  format_quote
                </span>
              </div>
              <div>
                <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)] leading-[1.35]">
                  A Message from Our Founders
                </div>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                  “Success is not just about earning wealth, but about building
                  trust, creating value, and securing futures. We are here to
                  walk every step of that journey with you.”
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                  >
                    Connect with Us
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
