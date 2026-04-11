import type { Metadata } from "next";

export const metadata: Metadata = { title: "Explore Mutual Funds" };

const categories = [
  {
    icon: "corporate_fare",
    title: "Large Cap",
    description:
      "Stable growth through India's top 100 established companies. Ideal for long-term wealth preservation.",
    iconBg: "bg-[rgb(var(--blue-700-rgb)/0.10)]",
    iconColor: "text-[var(--blue-700)]",
    tag: "Low-Moderate Risk",
    tagColor: "bg-[rgb(var(--blue-700-rgb)/0.10)] text-[var(--blue-700)]",
    returns: "14.2% 3Y CAGR",
    span: 1,
  },
  {
    icon: "trending_up",
    title: "Mid Cap",
    description:
      "Targeting high-growth potential in emerging leaders. A balanced mix of risk and reward.",
    iconBg: "bg-[rgb(var(--green-600-rgb)/0.10)]",
    iconColor: "text-[var(--green-700)]",
    tag: "Moderate-High Risk",
    tagColor: "bg-[rgb(var(--green-600-rgb)/0.10)] text-[var(--green-700)]",
    returns: "24.1% 3Y CAGR",
    span: 1,
  },
  {
    icon: "rocket_launch",
    title: "Small Cap",
    description:
      "Aggressive growth from niche innovators. High volatility but exceptional multi-bagger potential.",
    iconBg: "bg-[rgb(var(--gold-base-rgb)/0.18)]",
    iconColor: "text-[var(--gold-dark)]",
    tag: "High Risk",
    tagColor: "bg-[rgb(var(--gold-base-rgb)/0.18)] text-[var(--gold-dark)]",
    returns: "31.8% 3Y CAGR",
    span: 1,
  },
  {
    icon: "factory",
    title: "Sectoral",
    description:
      "Concentrated bets on specific industries like Tech, Healthcare, or Finance. For the expert eye.",
    iconBg: "bg-[rgb(var(--navy-800-rgb)/0.10)]",
    iconColor: "text-[var(--navy-800)]",
    tag: "Very High Risk",
    tagColor: "bg-[rgb(var(--navy-800-rgb)/0.10)] text-[var(--navy-800)]",
    returns: "28.5% 3Y CAGR",
    span: 1,
  },
];

const featuredFunds = [
  {
    icon: "show_chart",
    name: "Quant Small Cap Fund",
    category: "High Risk • Equity: Small Cap",
    cagr: "34.2%",
    badge: "Top Performer",
    badgeColor: "bg-[rgb(var(--blue-700-rgb)/0.10)] text-[var(--blue-700)]",
  },
  {
    icon: "account_balance",
    name: "HDFC Index Fund",
    category: "Moderate Risk • Nifty 50",
    cagr: "18.5%",
    badge: "Recommended",
    badgeColor: "bg-[rgb(var(--green-600-rgb)/0.10)] text-[var(--green-700)]",
  },
  {
    icon: "eco",
    name: "Parag Parikh Flexi Cap",
    category: "Moderate Risk • Multi Cap",
    cagr: "22.8%",
    badge: "Most Trusted",
    badgeColor: "bg-[rgb(var(--navy-800-rgb)/0.10)] text-[var(--navy-800)]",
  },
  {
    icon: "savings",
    name: "SBI Blue Chip Fund",
    category: "Low-Moderate Risk • Large Cap",
    cagr: "15.4%",
    badge: "Stable",
    badgeColor: "bg-[rgb(var(--blue-700-rgb)/0.10)] text-[var(--blue-700)]",
  },
  {
    icon: "diamond",
    name: "Axis Mid Cap Fund",
    category: "High Risk • Mid Cap",
    cagr: "26.1%",
    badge: "High Growth",
    badgeColor: "bg-[rgb(var(--gold-base-rgb)/0.18)] text-[var(--gold-dark)]",
  },
  {
    icon: "bolt",
    name: "Mirae Asset ELSS Fund",
    category: "High Risk • ELSS Tax Saver",
    cagr: "20.3%",
    badge: "Tax Saver",
    badgeColor: "bg-[rgb(var(--green-600-rgb)/0.10)] text-[var(--green-700)]",
  },
];

export default function MutualFundsPage() {
  return (
    <>
      {/* ─── Header ────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-16 md:pb-24"
        role="region"
        aria-labelledby="mutual-funds-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <h1
                id="mutual-funds-title"
                className="font-headline text-[44px] md:text-[72px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)] mb-6"
              >
                Explore Mutual Funds
              </h1>
              <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-2xl">
                Navigate the world of curated investments. From steady large-cap
                growth to high-potential sectoral bets, find the vehicle that fits
                your financial horizon.
              </p>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-hint)]">
                  search
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-[var(--surface)] border border-[var(--borderSoft)] focus:border-[rgb(var(--blue-700-rgb)/0.35)] focus:ring-2 focus:ring-[rgb(var(--blue-700-rgb)/0.18)] transition text-[var(--text-primary)] placeholder:text-[var(--text-hint)] rounded-xl outline-none"
                  placeholder="Search by fund name or AMC..."
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {["All Funds", "Equity", "Debt", "Hybrid", "ELSS", "Index", "International"].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[2px] transition-colors border ${
                    i === 0
                      ? "bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] text-[var(--text-white)] border-transparent"
                      : "bg-[var(--gray-50)] text-[var(--text-secondary)] border-[var(--borderSoft)] hover:bg-[var(--blue-50)] hover:text-[var(--blue-700)]"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── Main Content ──────────────────────────────────── */}
      <section
        className="pb-16 md:pb-24"
        role="region"
        aria-labelledby="mutual-funds-browse-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Category Cards */}
          <div className="lg:col-span-8">
              <h2
                id="mutual-funds-browse-title"
                className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-6"
              >
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  className="group p-6 md:p-8 bg-[var(--surface)] rounded-3xl border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors flex flex-col justify-between h-72"
                >
                  <div>
                    <div
                      className={`w-12 h-12 ${cat.iconBg} rounded-full flex items-center justify-center mb-5 ${cat.iconColor} group-hover:scale-110 transition-transform`}
                    >
                      <span className="material-symbols-outlined">
                        {cat.icon}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)]">
                        {cat.title}
                      </h3>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${cat.tagColor}`}
                      >
                        {cat.returns}
                      </span>
                    </div>
                      <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                      {cat.description}
                    </p>
                  </div>
                  <button
                    className={`flex items-center gap-2 ${cat.iconColor} font-bold text-[14px] group-hover:gap-4 transition-all mt-4`}
                  >
                    View Funds{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              ))}

              {/* Index Funds Wide Card */}
                <div className="md:col-span-2 group p-6 md:p-8 bg-[var(--gray-50)] rounded-3xl border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] text-[var(--text-white)] rounded-2xl flex items-center justify-center shrink-0">
                    <span
                        className="material-symbols-outlined fill-1 text-3xl"
                    >
                      equalizer
                    </span>
                  </div>
                  <div>
                      <h3 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-2">
                      Index Funds
                    </h3>
                      <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)] max-w-md">
                      Low-cost passive investing that tracks market benchmarks
                      like Nifty 50 or Sensex. Ideal for long-term investors.
                    </p>
                  </div>
                </div>
                  <button className="btn-primary px-8 py-3 bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] text-[var(--text-white)] font-headline font-bold rounded-xl transition-colors whitespace-nowrap">
                  Explore Indexing
                </button>
              </div>
            </div>

            {/* Featured Funds Table */}
            <div>
              <div className="flex justify-between items-center mb-6">
                  <h2 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)]">
                  Top Performing Funds
                </h2>
                  <button className="text-[var(--blue-700)] font-bold text-[14px] flex items-center gap-1 hover:gap-2 transition-all">
                  View All{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="space-y-4">
                {featuredFunds.map((fund) => (
                  <div
                    key={fund.name}
                      className="group flex items-center justify-between p-5 bg-[var(--surface)] rounded-2xl border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.20)] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 bg-[var(--gray-50)] rounded-xl flex items-center justify-center text-[var(--blue-700)] group-hover:bg-[var(--blue-50)] transition-colors shrink-0 border border-[var(--borderSoft)]">
                        <span className="material-symbols-outlined">
                          {fund.icon}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                            <h4 className="font-headline font-bold text-[14px] leading-[1.75] text-[var(--text-primary)]">
                            {fund.name}
                          </h4>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${fund.badgeColor}`}
                          >
                            {fund.badge}
                          </span>
                        </div>
                          <p className="text-[12px] leading-[1.75] text-[var(--text-secondary)]">
                          {fund.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                          <div className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-muted)]">
                          3Y CAGR
                        </div>
                          <div className="text-[18px] font-headline font-extrabold leading-[1.2] text-[var(--blue-700)]">
                          {fund.cagr}
                        </div>
                      </div>
                        <button
                          className="bg-[var(--gray-50)] p-2 rounded-full text-[var(--blue-700)] hover:bg-[var(--blue-700)] hover:text-[var(--text-white)] transition-colors border border-[var(--borderSoft)]"
                          aria-label={`Add ${fund.name}`}
                        >
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Risk Guide */}
              <div className="bg-[linear-gradient(135deg,var(--navy-800),var(--blue-800))] p-6 md:p-8 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-white)] mb-4">
                  Risk vs Reward Guide
                </h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[var(--green-400)] shrink-0">
                      info
                    </span>
                      <p className="text-[14px] leading-[1.75] text-[rgb(var(--text-white-rgb)/0.78)]">
                      Higher potential returns typically involve higher
                      volatility and risk of capital loss.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[var(--green-400)] shrink-0">
                      analytics
                    </span>
                      <p className="text-[14px] leading-[1.75] text-[rgb(var(--text-white-rgb)/0.78)]">
                      Diversification across categories helps mitigate risk
                      while maintaining growth trajectories.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[var(--green-400)] shrink-0">
                      schedule
                    </span>
                      <p className="text-[14px] leading-[1.75] text-[rgb(var(--text-white-rgb)/0.78)]">
                      Longer time horizons generally reduce risk through market
                      cycle averaging.
                    </p>
                  </div>
                </div>
                {/* Visual risk ladder */}
                <div className="space-y-2 mb-6">
                  {[
                      { label: "Large Cap", width: "40%", color: "bg-[var(--blue-700)]" },
                      { label: "Mid Cap", width: "60%", color: "bg-[var(--green-600)]" },
                      { label: "Small Cap", width: "80%", color: "bg-[var(--gold-base)]" },
                      { label: "Sectoral", width: "95%", color: "bg-[var(--navy-800)]" },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center gap-3">
                        <span className="text-[12px] leading-[1.75] text-[rgb(var(--text-white-rgb)/0.75)] w-20 shrink-0">
                        {r.label}
                      </span>
                        <div className="flex-1 bg-[rgb(var(--text-white-rgb)/0.22)] h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${r.color} rounded-full`}
                          style={{ width: r.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                  <a className="block text-center py-3 bg-[rgb(var(--text-white-rgb)/0.14)] backdrop-blur-md rounded-xl text-[var(--text-white)] font-bold text-[14px] leading-[1.75] hover:bg-[rgb(var(--text-white-rgb)/0.18)] transition-colors border border-[rgb(var(--text-white-rgb)/0.20)]">
                  Read Investor Guide
                </a>
              </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[rgb(var(--green-600-rgb)/0.12)] rounded-full blur-3xl" />
            </div>

            {/* Market Trend */}
              <div className="p-6 bg-[var(--surface)] rounded-3xl border border-[var(--borderSoft)]">
                <h4 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-4">
                Market Trends
              </h4>
                <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)] mb-6">
                Small-cap funds have seen a 12% inflow increase this quarter. Is
                your portfolio balanced?
              </p>
              {[
                { label: "Nifty 50", change: "+1.24%", width: "70%", positive: true },
                { label: "Sensex", change: "+0.98%", width: "62%", positive: true },
                { label: "Nifty Mid 150", change: "-0.31%", width: "45%", positive: false },
              ].map((index) => (
                <div
                  key={index.label}
                    className="p-3 bg-[var(--gray-50)] rounded-lg border border-[var(--borderSoft)] mb-3"
                >
                  <div className="flex justify-between items-center mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--text-muted)]">
                      {index.label}
                    </span>
                    <span
                        className={`text-[11px] font-bold ${index.positive ? "text-[var(--green-600)]" : "text-[var(--gold-dark)]"}`}
                    >
                      {index.change}
                    </span>
                  </div>
                    <div className="h-1.5 w-full bg-[var(--gray-200)] rounded-full overflow-hidden">
                    <div
                        className={`h-full ${index.positive ? "bg-[var(--green-600)]" : "bg-[var(--gold-base)]"} rounded-full`}
                      style={{ width: index.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* SIP CTA */}
              <div className="p-6 bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] rounded-3xl text-[var(--text-white)]">
              <span className="material-symbols-outlined text-3xl mb-3 block">
                calculate
              </span>
                <h4 className="font-headline text-[18px] font-bold leading-[1.3] mb-2">
                Plan Your SIP
              </h4>
                <p className="text-[rgb(var(--text-white-rgb)/0.80)] text-[14px] leading-[1.75] mb-4">
                Calculate how much you need to invest today for tomorrow&apos;s goal.
              </p>
              <a
                href="/calculator"
                  className="btn-primary block text-center py-2.5 bg-[var(--text-white)] text-[var(--blue-700)] font-bold text-[14px] leading-[1.75] rounded-xl hover:bg-[rgb(var(--text-white-rgb)/0.95)] transition-colors"
              >
                Open Calculator
              </a>
            </div>
          </aside>
        </div>
        </div>
      </section>
    </>
  );
}
