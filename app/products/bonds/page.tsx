import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonds",
  description:
    "Bonds are high-security debt instruments used by companies and governments to raise funds for defined tenures. Explore how bonds work and where they fit in a portfolio.",
};

const bulletPoints = [
  "High-security debt instruments used to raise funds",
  "Borrowers raise money from individual investors for a specified tenure",
  "Issued by companies, governments, municipalities, and other entities",
  "Funds support business operations and infrastructure development",
];

export default function BondsPage() {
  return (
    <>
      {/* ─── Simple Bonds page (inspired by provided example image) ─── */}
      <section
        className="relative overflow-hidden pt-24 md:pt-32 pb-16 bg-[var(--surface)]"
        role="region"
        aria-labelledby="bonds-title"
      >
        <div className="max-w-[980px] mx-auto px-5 lg:px-8">
          <p className="text-[12px] font-bold tracking-[2px] uppercase text-[var(--blue-700)]">
            Introducing
          </p>
          <h1
            id="bonds-title"
            className="mt-2 font-headline text-[40px] md:text-[64px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
          >
            Bonds
          </h1>

          <div className="mt-6 space-y-5 text-[16px] md:text-[17px] leading-[1.95] text-[var(--text-secondary)]">
            <p>
              Bonds refer to high-security debt instruments that enable an
              entity to raise funds and fulfill capital requirements. It is a
              category of debt that borrowers avail from individual investors
              for a specified tenure.
            </p>
            <p>
              Organizations, including companies, governments, municipalities,
              and other entities, issue bonds for investors in primary markets.
              The corpus thus collected is used to fund business operations and
              infrastructural development by companies and governments alike.
            </p>
          </div>

          <ul role="list" className="mt-10 space-y-6">
            {bulletPoints.map((point) => (
              <li key={point} className="flex gap-x-4">
                <span className="mt-1 size-6 flex-none rounded-full bg-[var(--green-50)] border border-[rgb(var(--green-700-rgb)/0.25)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-[var(--green-700)]">
                    check
                  </span>
                </span>
                <span className="text-[14px] md:text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
