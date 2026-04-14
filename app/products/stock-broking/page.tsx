import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stock Broking Services",
  description:
    "Access India's capital markets with Sipwala—full-service stock broking with exchange connectivity, market tools, research support, and guided onboarding.",
};

const benefits = [
  {
    title: "Exchange Connectivity",
    icon: "public",
    description:
      "Trade on leading Indian exchanges such as NSE and BSE. Participate in ownership of listed corporations across sectors, with potential for capital appreciation and dividends.",
  },
  {
    title: "Diversification Capabilities",
    icon: "account_tree",
    description:
      "Construct portfolios across industries, market caps, and strategies. Access a broad universe of listed securities to match your risk profile and objectives.",
  },
  {
    title: "Market Intelligence & Tools",
    icon: "analytics",
    description:
      "Use real-time data, professional charting, and research analysis to make informed decisions with greater market visibility.",
  },
  {
    title: "Expert Investment Guidance",
    icon: "support_agent",
    description:
      "Work with experienced professionals for portfolio-aligned recommendations, periodic reviews, and guidance adapted to changing market conditions.",
  },
];

const difference = [
  {
    title: "Client-centric service model",
    icon: "handshake",
    description:
      "Support across the investment lifecycle—from account setup and trading education to ongoing strategy refinement and market updates.",
  },
  {
    title: "Multi-platform trading technology",
    icon: "devices",
    description:
      "Access trading across desktop, web, and mobile with interfaces designed to support both beginners and experienced traders.",
  },
  {
    title: "Integrated product access",
    icon: "hub",
    description:
      "Manage multi-asset exposure through a unified platform, including equities, derivatives, mutual funds, and IPO participation (as available).",
  },
  {
    title: "Transparent pricing structure",
    icon: "receipt_long",
    description:
      "Choose from pricing plans aligned to your trading frequency, with an emphasis on clarity and cost efficiency.",
  },
];

const steps = [
  "Complete KYC verification by submitting required identity, address, and financial documentation",
  "Select the appropriate account type and preferred pricing plan based on your trading approach",
  "Fund your trading account through secure payment methods",
  "Begin investing with platform access and dedicated support",
];

export default function StockBrokingPage() {
  return (
    <>
      {/* ─── Hero (unique: headline + side image + highlights) ───── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="sb-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[rgb(var(--blue-700-rgb)/0.18)] mb-3">
                Stock Broking Services
              </span>
              <h1
                id="sb-title"
                className="font-headline text-[38px] md:text-[62px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Access India&apos;s Capital Markets with Sipwala
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Sipwala offers full-service stock broking solutions that provide
                direct access to India&apos;s leading exchanges. Our approach
                combines trading technology, research support, and personalized
                advisory to help investors pursue wealth creation through equity
                markets.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Open an Account
                </Link>
                <Link
                  href="/products/equity"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Learn Equity Basics
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--green-700)]">
                        bolt
                      </span>
                    </div>
                    <div>
                      <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                        Fast execution
                      </div>
                      <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                        Efficient order placement through recognized platforms.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--blue-700)]">
                        insights
                      </span>
                    </div>
                    <div>
                      <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                        Research support
                      </div>
                      <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                        Market intelligence designed to improve decision quality.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                  <Image
                    src="/slides/pexels-markus-winkler-1430818-12244851.png"
                    alt="Trading screens and market analysis"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--blue-700-rgb),0.12),rgba(var(--green-700-rgb),0.10))]" />
                </div>

                <div className="absolute -bottom-8 -left-4 md:-left-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[380px]">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--green-700)]">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                        Professional market access
                      </div>
                      <div className="mt-2 text-[12px] leading-[1.7] text-[var(--text-secondary)]">
                        Execution, tools, and guidance aligned to your timeline.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Understanding ───────────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="understanding-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="understanding-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Understanding Stock Broking
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Stock broking services act as a bridge between investors and stock
              exchanges. As your intermediary, we facilitate order execution on
              recognized platforms, provide market insights, and support
              decision-making so market access can translate into strategic
              investment action.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Core Benefits ───────────────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="benefits-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="benefits-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Core Benefits of Stock Broking
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Build exposure to listed markets with tools, execution, and advice
              designed for clarity and confidence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={b.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--green-700)]">
                        {b.icon}
                      </span>
                    </div>
                    <div>
                      <div className="font-headline text-[16px] md:text-[18px] font-extrabold text-[var(--text-primary)]">
                        {b.title}
                      </div>
                      <div className="mt-2 text-[13px] md:text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                        {b.description}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[var(--gray-50)] border border-[var(--borderSoft)] flex items-center justify-center font-headline font-extrabold text-[12px] text-[var(--text-muted)]">
                      {idx + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Sipwala Difference ─────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="difference-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="difference-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              The Sipwala Difference
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We aim to combine institutional-quality infrastructure with
              localized service excellence tailored to Amravati&apos;s investor
              community.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {difference.map((d) => (
              <div
                key={d.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--blue-700)]">
                    {d.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {d.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {d.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Account Opening Process ────────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="process-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="process-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Account Opening Process
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              A clear, guided setup so you can start investing with confidence.
            </p>
          </div>

          <div className="mt-10 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
            <ol className="space-y-4">
              {steps.map((s, idx) => (
                <li key={s} className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-2xl bg-[var(--blue-50)] border border-[rgb(var(--blue-700-rgb)/0.18)] flex items-center justify-center font-headline font-extrabold text-[13px] text-[var(--blue-700)]">
                    {idx + 1}
                  </div>
                  <div className="pt-[6px] text-[14px] md:text-[15px] leading-[1.85] text-[var(--text-secondary)] font-medium">
                    {s}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
              >
                Start Account Opening
              </Link>
              <Link
                href="/products/mutual-funds"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
              >
                Explore Mutual Funds
              </Link>
            </div>

            <div className="mt-6 text-[12px] leading-[1.7] text-[var(--text-muted)]">
              Investing and trading involve market risk. Eligibility and product
              availability may depend on regulatory requirements and account
              setup.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
