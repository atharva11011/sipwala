import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Management Services (PMS)",
  description:
    "Portfolio Management Services (PMS) offer a premium, personalized investment experience where professionals manage your portfolio with a focus on growth, strategy, and risk management.",
};

export default function PmsPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-14" aria-labelledby="pms-title">
        <div className="max-w-[900px] mx-auto px-5 lg:px-8">
          <div className="text-[13px] font-medium text-[var(--text-muted)]">
            Home / PMS
          </div>

          <h1
            id="pms-title"
            className="mt-4 font-headline text-[38px] md:text-[56px] font-black tracking-tight leading-[1.08] text-[var(--text-primary)]"
          >
            Invest with Confidence through PMS 🌟
          </h1>

          <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)]">
            <p>
              Welcome to Sipwala, your trusted partner in building and managing
              wealth.
            </p>
            <p>
              Portfolio Management Services (PMS) offer a premium and
              personalized investment experience, where your investments are
              handled by experts with a clear focus on growth, strategy, and
              risk management.
            </p>
            <p>
              If you&apos;re looking to move beyond traditional investing, PMS is
              your gateway to smarter, more structured wealth creation.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              What is PMS? 💼
            </h2>
            <p className="mt-3 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Portfolio Management Services (PMS) is a customized investment
              solution where professional fund managers manage your portfolio on
              your behalf.
            </p>

            <p className="mt-5 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Think of it as having a dedicated financial expert who:
            </p>
            <ul role="list" className="mt-4 space-y-3">
              {[
                "Understands your financial goals",
                "Designs a personalized investment strategy",
                "Actively manages your portfolio",
                "Continuously monitors and optimizes performance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                    check_circle
                  </span>
                  <span className="text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              Why Choose PMS? 📈
            </h2>

            <ol className="mt-5 space-y-6">
              <li>
                <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                  1. Expert Guidance
                </div>
                <div className="mt-2 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  Get access to experienced professionals who make informed
                  investment decisions based on market research and insights.
                </div>
              </li>
              <li>
                <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                  2. Customized Investment Strategy
                </div>
                <div className="mt-2 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  Your portfolio is tailored to your financial goals, risk
                  appetite, and investment horizon.
                </div>
              </li>
              <li>
                <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                  3. Diversified Opportunities
                </div>
                <div className="mt-2 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  Invest across multiple asset classes including equities, debt,
                  and alternative investments.
                </div>
              </li>
              <li>
                <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                  4. Active Portfolio Management
                </div>
                <div className="mt-2 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  Your investments are regularly monitored and adjusted to
                  align with market conditions.
                </div>
              </li>
              <li>
                <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                  5. Transparency &amp; Control
                </div>
                <div className="mt-2 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  Get clear visibility into your portfolio holdings and
                  performance at all times.
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-12">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              Our Approach at Sipwala
            </h2>

            <ul role="list" className="mt-5 space-y-3">
              {[
                "Goal-Based Planning – Every investment starts with your financial goals",
                "Research-Driven Decisions – Backed by strong analysis and insights",
                "Risk Management – Balancing growth with stability",
                "Long-Term Wealth Creation – Focused on sustainable returns",
                "Continuous Monitoring – Regular tracking and optimization",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[var(--blue-700)] mt-[2px]">
                    arrow_right
                  </span>
                  <span className="text-[15px] leading-[1.85] text-[var(--text-secondary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              Why Trust Sipwala for PMS? 🤝
            </h2>
            <p className="mt-3 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We understand the aspirations of our clients and bring a personal
              touch to professional investing.
            </p>

            <div className="mt-6">
              <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                What Sets Us Apart:
              </div>
              <ul role="list" className="mt-4 space-y-3">
                {[
                  {
                    title: "Tailored Portfolio Solutions",
                    desc: "Strategies designed specifically for you",
                  },
                  {
                    title: "Stress-Free Investing",
                    desc: "We handle the complexities while you focus on your life",
                  },
                  {
                    title: "Strategic Wealth Creation",
                    desc: "Smart allocation and active management for better outcomes",
                  },
                  {
                    title: "Trusted Relationship",
                    desc: "Built on transparency, ethics, and long-term commitment",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                      check_circle
                    </span>
                    <span className="text-[15px] leading-[1.85] text-[var(--text-secondary)]">
                      <span className="font-extrabold text-[var(--text-primary)]">
                        {item.title}
                      </span>
                      <span className="text-[var(--text-secondary)]"> — {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              Who Should Opt for PMS?
            </h2>
            <p className="mt-3 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              PMS is ideal for:
            </p>
            <ul role="list" className="mt-4 space-y-3">
              {[
                "Investors seeking personalized investment management",
                "Individuals with a long-term wealth creation mindset",
                "Investors looking for professional expertise",
                "Those who prefer active management over passive investing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                    check_circle
                  </span>
                  <span className="text-[15px] leading-[1.85] text-[var(--text-secondary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              Step into Smarter Investing
            </h2>
            <p className="mt-3 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              With PMS, you don&apos;t just invest—you invest strategically.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Let Sipwala help you unlock the full potential of your wealth with
              expert guidance and personalized strategies.
            </p>
          </div>

          <div className="mt-12 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              Contact Us
            </h2>
            <p className="mt-3 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Ready to experience professional portfolio management?
            </p>
            <p className="mt-2 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Connect with Sipwala today and take a confident step toward
              structured and smart wealth creation.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
              >
                Connect with Sipwala
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
