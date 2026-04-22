import type { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import StatsStrip from "@/components/StatsStrip";
import type { StatItem } from "@/components/StatsStrip";
import ServicesScroller from "@/components/ServicesScroller";
import BlogSection from "@/components/BlogSection";
import GoalPlannerSection from "@/components/GoalPlannerSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import AssociatedWithSection from "@/components/AssociatedWithSection";

export const metadata: Metadata = {
  title: "Sipwala | Your Future, Cultivated with Precision",
};

const stats = [
  { value: "44 CR +", label: "ASSETS UNDER MANAGEMENT", dot: "blue" },
  { value: "550 +", label: "HAPPY FAMILY", dot: "green" },
  { value: "800 +", label: "HAPPY CLIENTS", dot: "blue" },
  { value: "14 +", label: "CUMULATIVE EXPERIENCE", dot: "gold" },
] satisfies readonly StatItem[];

const whyFeatures = [
  {
    icon: "visibility",
    title: "Total Transparency",
    description:
      "No hidden fees. No complex jargon. Just clear, performance-based reporting available at your fingertips 24/7.",
  },
  {
    icon: "verified_user",
    title: "Curated Expertise",
    description:
      "Our portfolio managers filter through thousands of funds to select only the top 1% for your consideration.",
  },
  {
    icon: "touch_app",
    title: "Effortless Execution",
    description:
      "One-click SIP setups, automated rebalancing, and paperless onboarding in under 3 minutes.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <StatsStrip stats={stats} />

      <ServicesScroller />

      <GoalPlannerSection />

      {/* ─── Why Sipwala ───────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[var(--surface)] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: features */}
            <div className="lg:col-span-5">
              <h2 className="font-headline text-[28px] md:text-[40px] font-extrabold leading-[1.2] tracking-tight text-[var(--text-primary)] mb-12">
                Why Sipwala?
              </h2>
              <div className="space-y-10">
                {whyFeatures.map((f) => (
                  <div key={f.title} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-[rgb(var(--blue-700-rgb)/0.10)] rounded-xl flex items-center justify-center text-[var(--blue-700)]">
                      <span className="material-symbols-outlined">{f.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-2">
                        {f.title}
                      </h4>
                      <p className="text-[14px] font-normal leading-[1.75] text-[var(--text-muted)]">
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image panel */}
            <div className="lg:col-span-7 relative">
              <div className="bg-[var(--surface)] border border-[var(--gray-200)] h-[480px] w-full rounded-[3rem] overflow-hidden relative group flex items-end">
                <div className="absolute inset-0 bg-[url('/g.png')] bg-cover bg-center bg-no-repeat bg-[var(--green-600)] bg-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[rgb(var(--navy-950-rgb)/0.80)] via-[rgb(var(--navy-950-rgb)/0.38)] to-transparent pointer-events-none" />
                <div className="relative p-10 z-10">
                  <p className="text-[var(--text-white)] text-2xl font-headline italic leading-[1.75]">
                    &quot;Wealth is not about what you earn, but how you manage what
                    you keep.&quot;
                  </p>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -top-6 -right-6 bg-[var(--surface)] p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--gray-100)] hidden md:block">
                <div className="text-[var(--blue-700)] font-headline text-[28px] font-extrabold mb-1 leading-[1.2]">
                  12+ Yrs
                </div>
                <div className="text-[12px] font-normal text-[var(--text-muted)] leading-[1.75] max-w-[140px]">
                  Of excellence in financial advisory
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AssociatedWithSection />

      <Testimonials />

      <BlogSection />

      <ContactSection />
    </>
  );
}
