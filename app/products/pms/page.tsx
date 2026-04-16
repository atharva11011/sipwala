import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Management Services (PMS)",
  description:
    "Portfolio Management Services (PMS) is a tailored approach where experts manage your portfolio, aiming to optimize returns and minimize risks.",
};

export default function PmsPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-14" aria-labelledby="pms-title">
        <div className="max-w-[900px] mx-auto px-5 lg:px-8">
          <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[rgb(var(--blue-700-rgb)/0.18)] mb-3">
            Portfolio Management Services (PMS)
          </span>
          <h1
            id="pms-title"
            className="font-headline text-[34px] md:text-[52px] font-black tracking-tight leading-[1.12] text-[var(--text-primary)]"
          >
            Invest with Confidence through Portfolio Management Services (PMS)
            at sipwala!
          </h1>

          <div className="mt-6 text-[16px] md:text-[17px] leading-[1.95] text-[var(--text-secondary)]">
            <p>
              Greetings from Amravati! At sipwala, we&apos;re dedicated to elevating
              your financial journey. Let&apos;s explore the realm of Portfolio
              Management Services (PMS)—a sophisticated investment avenue
              designed to cater to your unique financial goals.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              What is PMS?
            </h2>
            <p className="mt-3 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              Picture having a skilled financial advisor solely dedicated to
              nurturing and growing your investments. PMS is precisely that—a
              tailored approach where our experts manage your portfolio, aiming
              to optimize returns and minimize risks.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              Why Choose PMS as Your Investment Partner?
            </h2>

            <ol className="mt-5 space-y-6">
              <li>
                <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                  1. Expert Guidance
                </div>
                <div className="mt-2 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  PMS puts seasoned investment professionals at your service.
                  Benefit from their market insights, strategic decisions, and
                  personalized advice to navigate the complex financial
                  landscape.
                </div>
              </li>
              <li>
                <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                  2. Customized Approach
                </div>
                <div className="mt-2 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  One size doesn&apos;t fit all, and neither should your investment
                  strategy. PMS allows for a personalized approach, aligning
                  your portfolio with your financial aspirations, risk
                  tolerance, and investment horizon.
                </div>
              </li>
              <li>
                <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                  3. Diverse Investment Opportunities
                </div>
                <div className="mt-2 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  PMS opens doors to a world of investment opportunities. From
                  equities to fixed income, real estate, and more, enjoy a
                  diversified portfolio managed by experts to optimize returns.
                </div>
              </li>
              <li>
                <div className="font-headline font-extrabold text-[16px] text-[var(--text-primary)]">
                  4. Transparent and Efficient Management
                </div>
                <div className="mt-2 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  PMS provides transparency in portfolio holdings and
                  performance, giving you a clear view of how your investments
                  are faring. Enjoy the efficiency of professional management
                  tailored to your financial objectives.
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-12">
            <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-[var(--text-primary)]">
              Why Trust sipwala for PMS?
            </h2>
            <p className="mt-3 text-[16px] leading-[1.9] text-[var(--text-secondary)]">
              We understand the pulse of Amravati and the aspirations of its
              people. At sipwala, we combine financial expertise with a
              personalized touch, ensuring your financial success is our
              primary focus.
            </p>

            <ul role="list" className="mt-6 space-y-4">
              {[
                {
                  title: "Tailored Portfolio Management",
                  desc: "PMS is your bespoke investment solution, with strategies crafted to match your unique financial goals and risk tolerance.",
                },
                {
                  title: "Stress-Free Investing",
                  desc: "Say goodbye to the stress of managing your portfolio. Our experts handle the complexities, allowing you to focus on what you do best while your investments flourish.",
                },
                {
                  title: "Strategic Wealth Creation",
                  desc: "PMS aims for wealth creation through strategic investment decisions. Benefit from a dynamic approach to financial growth tailored to your needs.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[var(--green-700)] mt-[2px]">
                    check_circle
                  </span>
                  <span className="text-[15px] leading-[1.85] text-[var(--text-secondary)]">
                    <span className="font-extrabold text-[var(--text-primary)]">
                      {item.title}:
                    </span>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-[16px] md:text-[17px] leading-[1.95] text-[var(--text-secondary)]">
              <p>
                Step into a new era of investment confidence with Groww Lakshmi
                Finserv Pvt Ltd&apos;s Portfolio Management Services. Let&apos;s sculpt
                a prosperous future together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
