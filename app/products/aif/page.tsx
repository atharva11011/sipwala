import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIF",
  description:
    "Alternative Investment Funds (AIF) provide eligible investors access to private markets and alternative strategies such as private equity, real estate, and hedge-fund style approaches.",
};

const offerings = [
  {
    title: "Private Equity",
    icon: "business_center",
    description:
      "Access to non-listed businesses with long-horizon growth potential.",
  },
  {
    title: "Residential & Commercial Real Estate",
    icon: "apartment",
    description:
      "Participation in property-linked strategies beyond public markets.",
  },
  {
    title: "Real Estate Funds",
    icon: "home_work",
    description:
      "Diversified real-estate exposure via professionally managed funds.",
  },
  {
    title: "Hedge Fund Strategies",
    icon: "candlestick_chart",
    description:
      "Sophisticated approaches designed for absolute-return objectives.",
  },
];

const categories = [
  {
    title: "Category I — Development-Focused Investments",
    badge: "Category I",
    icon: "rocket_launch",
    description:
      "Category I AIFs channel capital into sectors with strong social and economic impact.",
    bullets: [
      "Early-stage ventures and start-up ecosystems",
      "Small and medium enterprises (SMEs)",
      "Infrastructure development projects",
      "Social ventures addressing critical national priorities",
    ],
    note: "These strategies can support economic development while offering growth potential through participation in emerging opportunities.",
  },
  {
    title: "Category II — Private Equity and Debt Strategies",
    badge: "Category II",
    icon: "account_balance",
    description:
      "Category II includes private equity and debt-focused vehicles with disciplined mandates and professional management.",
    bullets: [
      "Institutional-quality portfolio management",
      "Well-defined investment mandates and strategies",
      "Risk-adjusted return optimization",
      "Portfolio hedging capabilities (strategy dependent)",
    ],
    note: "Category II AIFs can act as a robust alternative to traditional investments while introducing differentiated risk-return profiles.",
  },
  {
    title: "Category III — Hedge Funds and Leveraged Strategies",
    badge: "Category III",
    icon: "trending_up",
    description:
      "Category III represents the most sophisticated AIF category, typically featuring hedge funds using active trading and complex strategies.",
    bullets: [
      "Use of leverage to amplify returns (risk increases)",
      "Long and short positions across asset classes",
      "Derivatives for directional and hedging strategies",
      "Global market exposure across domestic and international securities",
    ],
    note: "These strategies pursue absolute returns and generally require deeper market expertise and active risk management.",
  },
];

const principles = [
  "Diversification beyond equities, fixed income, and cash",
  "Access to non-traditional asset classes for eligible investors",
  "Different risk-return profiles compared to public markets",
  "Professional management and structured mandates",
];

export default function AifPage() {
  return (
    <>
      {/* ─── Hero (unique: compact intro + side image) ─────── */}
      <section
        className="pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
        role="region"
        aria-labelledby="aif-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[rgb(var(--blue-700-rgb)/0.18)] mb-3">
                Alternative Investments
              </span>
              <h1
                id="aif-title"
                className="font-headline text-[38px] md:text-[62px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
                Alternative Investment Funds (AIF)
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                Beyond conventional investment channels—equities, fixed income,
                and cash—AIFs can provide eligible investors access to
                non-traditional asset classes such as private equity, real
                estate funds, and hedge-fund style strategies.
              </p>
              <p className="mt-4 text-[16px] md:text-[17px] leading-[1.9] text-[var(--text-secondary)] max-w-xl">
                These specialized vehicles can play a critical role in
                diversification by adding exposure to strategies with different
                risk-return characteristics than public markets.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
                >
                  Check Eligibility
                </Link>
                <Link
                  href="/products/equity"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                >
                  Explore Equity
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-2xl px-4 py-3"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                      check_circle
                    </span>
                    <div className="text-[13px] leading-[1.7] text-[var(--text-secondary)] font-medium">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[16/12] rounded-[2rem] overflow-hidden border border-[var(--borderSoft)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] bg-[var(--gray-50)]">
                  <Image
                    src="/slides/pexels-towfiqu-barbhuiya-3440682-10972831.png"
                    alt="Alternative investments and portfolio strategy"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--blue-700-rgb),0.10),rgba(var(--green-700-rgb),0.10))]" />
                </div>

                <div className="absolute -bottom-8 -left-6 md:-left-10 bg-[var(--surface)] p-5 md:p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--borderSoft)] max-w-[380px]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[var(--blue-700)]">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <div className="font-headline font-extrabold text-[14px] text-[var(--text-primary)]">
                        Institutional-grade exposure
                      </div>
                      <div className="text-[12px] leading-[1.6] text-[var(--text-secondary)]">
                        Designed for eligible investors and mandates.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Offerings ─────────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="offerings-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="offerings-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              Strategy Spectrum
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Our AIF universe spans multiple strategies, helping eligible
              clients access opportunities typically seen in institutional and
              high-net-worth portfolios.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--green-700)]">
                    {o.icon}
                  </span>
                </div>
                <div className="font-headline text-[16px] font-extrabold text-[var(--text-primary)]">
                  {o.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                  {o.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AIF Classification ───────────────────────────── */}
      <section
        className="bg-[var(--gray-50)] py-12 md:py-16"
        role="region"
        aria-labelledby="class-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="class-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
            >
              AIF Classification Structure
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              AIFs are commonly grouped into categories based on strategy,
              mandate, and complexity.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {categories.map((c) => (
              <div
                key={c.badge}
                className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[var(--blue-700)]">
                        {c.icon}
                      </span>
                    </div>
                    <div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[2px] uppercase bg-[var(--gray-50)] border border-[var(--borderSoft)] text-[var(--text-muted)]">
                        {c.badge}
                      </div>
                      <div className="mt-3 font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                        {c.title}
                      </div>
                      <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                        {c.description}
                      </p>
                    </div>
                  </div>

                  <div className="md:min-w-[260px] bg-[var(--gray-50)] border border-[var(--borderSoft)] rounded-2xl p-5">
                    <div className="text-[12px] font-bold tracking-[2px] uppercase text-[var(--text-muted)]">
                      Typical focus
                    </div>
                    <div className="mt-4 space-y-3">
                      {c.bullets.map((b) => (
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
                  </div>
                </div>

                <div className="mt-6 text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                  {c.note}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--green-50)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--green-700)]">
                  warning
                </span>
              </div>
              <div>
                <div className="font-headline text-[18px] md:text-[22px] font-extrabold text-[var(--text-primary)]">
                  Important note
                </div>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[var(--text-secondary)]">
                  AIFs can involve higher complexity, lower liquidity, and
                  different risk characteristics than traditional products.
                  Eligibility, minimum investment, and terms vary by fund. Read
                  offering documents carefully and consider suitability.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
                  >
                    Discuss AIF Options
                  </Link>
                  <Link
                    href="/products/insurance-planning"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-headline text-sm font-bold tracking-tight border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--blue-700)] hover:border-[rgb(var(--blue-700-rgb)/0.35)] transition-colors"
                  >
                    Insurance Planning
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
