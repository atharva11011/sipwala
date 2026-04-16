import Link from "next/link";

const row1 = [
  {
    icon: "candlestick_chart",
    color: "bg-[rgb(var(--green-600-rgb)/0.12)] text-[var(--green-600)]",
    title: "Mutual Funds",
    desc: "Mutual funds are a type of certified managed combined investment scheme that gathers money from many investors to buy securities.",
    href: "/mutual-funds",
  },
  {
    icon: "show_chart",
    color: "bg-[rgb(var(--blue-700-rgb)/0.10)] text-[var(--blue-700)]",
    title: "Stock Broking",
    desc: "We provide the suitable content about a particular stock to the investor so that he can take correct decision either to enter in a stock ..",
    href: "/products/stock-broking",
  },
  {
    icon: "account_balance_wallet",
    color: "bg-[rgb(var(--gold-base-rgb)/0.14)] text-[var(--gold-dark)]",
    title: "PMS",
    desc: "Portfolio management is the art and science of selecting and overseeing a group of investments that meet the long-term financial objectives ..",
    href: "/products/pms",
  },
] as const;

const row2 = [
  {
    icon: "diversity_3",
    color: "bg-[rgb(var(--navy-700-rgb)/0.10)] text-[var(--navy-700)]",
    title: "Alternate Investment Funds",
    desc: "Other than the traditional modes of investment of equities, fixed income, and cash, through Alternate Investment Fund (AIF) we offer our clients an ..",
    href: "/products/aif",
  },
  {
    icon: "savings",
    color: "bg-[rgb(var(--green-600-rgb)/0.12)] text-[var(--green-600)]",
    title: "National Pension Scheme",
    desc: "A substantial corpus creation for one’s retirement phase is an essential aspect to take care of during financial distributor. It not only allows individuals to ..",
    href: "/products/national-pension-system",
  },
  {
    icon: "receipt_long",
    color: "bg-[rgb(var(--gold-base-rgb)/0.14)] text-[var(--gold-dark)]",
    title: "Bonds",
    desc: "Bonds refer to high-security debt instruments that enable an entity to raise funds and fulfill capital requirements. It is a category of debt that borrowers ..",
    href: "/products/bonds",
  },
] as const;

function ServiceCard({
  icon,
  color,
  title,
  desc,
  href,
}: {
  icon: string;
  color: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <div className="h-full p-6 md:p-8 bg-[var(--surface)] rounded-3xl border border-[var(--borderSoft)] hover:border-[var(--blue-200)] transition-colors duration-200 flex flex-col">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <h3 className="font-headline text-[18px] font-bold leading-[1.3] mt-5 mb-3 text-[var(--text-primary)]">
        {title}
      </h3>

      <p className="text-[14px] text-[var(--text-muted)] leading-[1.75] line-clamp-3 flex-1">
        {desc}
      </p>

      <Link
        href={href}
        className="inline-block mt-6 text-[var(--blue-700)] font-bold text-[14px] hover:underline"
      >
        Read More &rarr;
      </Link>
    </div>
  );
}

export default function ServicesScroller() {
  return (
    <section
      id="services-scroller"
      className="relative bg-[var(--gray-50)] py-16 md:py-24 overflow-hidden"
      role="region"
      aria-labelledby="services-scroller-title"
    >
      {/* Subtle background accents (uses existing color tokens) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[rgb(var(--blue-700-rgb)/0.08)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -right-28 w-[420px] h-[420px] bg-[rgb(var(--green-600-rgb)/0.08)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2
            id="services-scroller-title"
            className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)] mb-[14px]"
          >
            Our Services &amp; Products
          </h2>
          <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-2xl">
            Explore our curated suite of investment and protection offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {[...row1, ...row2].map((item) => (
            <ServiceCard
              key={item.title}
              icon={item.icon}
              color={item.color}
              title={item.title}
              desc={item.desc}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
