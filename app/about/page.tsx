import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };

const milestones = [
  {
    icon: "rocket_launch",
    iconBg: "bg-[var(--blue-50)]",
    iconColor: "text-[var(--blue-700)]",
    year: "2012",
    title: "The Inception",
    description:
      "Launched as a boutique advisory firm with a core focus on mutual fund education for first-time investors.",
  },
  {
    icon: "devices",
    iconBg: "bg-[var(--green-50)]",
    iconColor: "text-[var(--green-700)]",
    year: "2017",
    title: "Digital Transformation",
    description:
      "Pivoted to a digital-first platform, allowing users to start their SIP journeys in under 2 minutes.",
    offset: true,
  },
  {
    icon: "military_tech",
    iconBg: "bg-[var(--gold-light)]",
    iconColor: "text-[var(--gold-dark)]",
    year: "2023",
    title: "Industry Recognition",
    description:
      "Awarded 'Best Wealth Tech Platform' for our innovative portfolio rebalancing algorithms.",
  },
];

const leaders = [
  {
    name: "Arjun Mehta",
    role: "Chief Executive Officer",
    bio: "Ex-Goldman Sachs, 20+ years in Asset Management.",
    offset: false,
  },
  {
    name: "Sarah D'Souza",
    role: "Head of Research",
    bio: "CFA Charterholder, Specialist in Emerging Markets.",
    offset: true,
  },
  {
    name: "Vikram Iyer",
    role: "Chief Technology Officer",
    bio: "Architect behind our proprietary wealth engine.",
    offset: false,
  },
  {
    name: "Priya Nair",
    role: "Chief Compliance Officer",
    bio: "Ensuring the highest standards of regulatory integrity.",
    offset: true,
  },
];

const badges = [
  { icon: "verified_user", title: "SEBI Registered", sub: "INA000012345" },
  { icon: "security", title: "ISO 27001 Certified", sub: "Data Privacy Standards" },
  { icon: "account_balance", title: "AMFI Registered", sub: "ARN-9876543" },
  { icon: "workspace_premium", title: "NPCI Partner", sub: "UPI Autopay Integrated" },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
        role="region"
        aria-labelledby="about-hero-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
              Our Legacy
            </span>
            <h1
              id="about-hero-title"
              className="font-headline text-[44px] md:text-[72px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)] mb-6"
            >
              Our Mission to{" "}
              <span className="text-[var(--blue-700)] italic">Empower</span>{" "}
              Investors
            </h1>
            <div className="space-y-5 text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-xl">
              <p>
                At Sipwala, we believe wealth creation shouldn&apos;t be a privilege
                of the few. Founded with the vision to democratize systematic
                investing, we&apos;ve built a platform that combines human expertise
                with algorithmic precision.
              </p>
              <p>
                Our journey began in a small office with a big goal: to simplify
                the complex world of mutual funds. Today, we stand as a trusted
                partner for thousands of families navigating their financial
                futures.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative animate-float">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[linear-gradient(135deg,var(--green-700),var(--blue-700))] flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-[rgb(var(--text-white-rgb)/0.30)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: `${(i + 1) * 100}px`,
                      height: `${(i + 1) * 100}px`,
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 text-center p-8">
                <div className="font-headline text-[72px] font-black leading-[1.05] text-[var(--text-white)] mb-2">
                  12+
                </div>
                <div className="text-[rgb(var(--text-white-rgb)/0.80)] font-medium">
                  Years of Excellence
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-[var(--surface)] p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--gray-100)] hidden md:block">
              <div className="text-[var(--blue-700)] font-headline text-[40px] font-black leading-[1.2] mb-1">
                50K+
              </div>
              <div className="text-[14px] leading-[1.75] text-[var(--text-secondary)] font-medium">
                Investors Trust Us
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ─── Milestones ────────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-16 md:py-24"
        role="region"
        aria-labelledby="about-milestones-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2
                id="about-milestones-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)] mb-[14px]"
              >
                Milestones that Define Us
              </h2>
              <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)]">
                A decade of commitment to financial growth and technological
                innovation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className={`bg-[var(--surface)] p-6 md:p-8 rounded-3xl group border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors ${m.offset ? "md:translate-y-8" : ""}`}
              >
                <div
                  className={`w-12 h-12 ${m.iconBg} rounded-xl flex items-center justify-center mb-8`}
                >
                  <span
                    className={`material-symbols-outlined ${m.iconColor}`}
                  >
                    {m.icon}
                  </span>
                </div>
                <div className="text-[12px] leading-[1.75] text-[var(--gray-400)] font-headline font-bold mb-2">
                  {m.year}
                </div>
                <h3 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-4">
                  {m.title}
                </h3>
                <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership Team ───────────────────────────────── */}
      <section
        className="py-16 md:py-24"
        role="region"
        aria-labelledby="about-leadership-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="about-leadership-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)] mb-[14px]"
            >
            The Visionaries
          </h2>
            <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-xl mx-auto">
            Led by industry veterans with decades of experience in global
            markets and technology.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((l) => (
            <div
              key={l.name}
              className={`space-y-5 ${l.offset ? "lg:mt-12" : ""}`}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--gray-50)] border border-[var(--borderSoft)] flex items-center justify-center group transition-colors hover:border-[rgb(var(--blue-700-rgb)/0.20)]">
                <div className="w-24 h-24 rounded-full bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] flex items-center justify-center text-[var(--text-white)] font-headline text-[40px] font-black group-hover:scale-110 transition-transform">
                  {l.name.charAt(0)}
                </div>
              </div>
              <div>
                <h4 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)]">
                  {l.name}
                </h4>
                <p className="text-[11px] font-bold tracking-[2px] uppercase mb-2 text-[var(--blue-700)]">
                  {l.role}
                </p>
                <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)] italic">
                  {l.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ─── Trust Badges ──────────────────────────────────── */}
      <section
        className="bg-[var(--surface)] py-16 md:py-24"
        role="region"
        aria-labelledby="about-badges-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2 id="about-badges-title" className="sr-only">
            Trust Badges
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {badges.map((b) => (
              <div
                key={b.title}
                className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity"
              >
                <span
                  className="material-symbols-outlined fill-1 text-4xl text-[var(--green-700)]"
                >
                  {b.icon}
                </span>
                <div>
                  <div className="font-headline font-bold text-[14px] leading-[1.75] text-[var(--text-primary)]">
                    {b.title}
                  </div>
                  <div className="text-[12px] leading-[1.75] text-[var(--gray-400)]">
                    {b.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
