"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

// ─── Helpers ──────────────────────────────────────────────
function formatINR(amount: number): string {
  if (amount >= 10000000) {
    return `₹ ${(amount / 10000000).toFixed(2)} Cr`;
  } else if (amount >= 100000) {
    return `₹ ${(amount / 100000).toFixed(2)} L`;
  } else {
    return `₹ ${Math.round(amount).toLocaleString("en-IN")}`;
  }
}

function calcSIP(monthly: number, ratePercent: number, years: number) {
  const r = ratePercent / 100 / 12;
  const n = years * 12;
  const totalValue =
    r === 0 ? monthly * n : monthly * (((1 + r) ** n - 1) / r) * (1 + r);
  const totalInvested = monthly * n;
  const totalReturns = totalValue - totalInvested;
  const growth = totalValue / totalInvested;
  return { totalValue, totalInvested, totalReturns, growth };
}

// ─── Recommended Funds ────────────────────────────────────
const funds = [
  {
    icon: "show_chart",
    name: "Quant Small Cap Fund",
    category: "High Risk • Equity: Small Cap",
    cagr: "34.2%",
  },
  {
    icon: "account_balance",
    name: "HDFC Index Fund",
    category: "Moderate Risk • Nifty 50",
    cagr: "18.5%",
  },
  {
    icon: "eco",
    name: "Parag Parikh Flexi Cap",
    category: "Moderate Risk • Multi Cap",
    cagr: "22.8%",
  },
];

// ─── Slider ───────────────────────────────────────────────
function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="font-headline font-bold text-[14px] md:text-[16px] text-[var(--text-primary)]">
          {label}
        </label>
        <div className="bg-[var(--gray-50)] px-4 py-2 rounded-xl text-[var(--blue-700)] font-headline font-bold text-[18px] border border-[var(--borderSoft)] min-w-[140px] text-right">
          {format(value)}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-[12px] leading-[1.75] font-normal text-[var(--text-muted)]">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

// ─── Donut Chart SVG ──────────────────────────────────────
function DonutChart({
  investedRatio,
  growth,
}: {
  investedRatio: number;
  growth: number;
}) {
  // Circumference of circle with r=16 ≈ 100.53 → we use 100 units
  const circumference = 100.53;
  const investedArc = investedRatio * circumference;
  const returnsArc = (1 - investedRatio) * circumference;

  return (
    <div className="relative w-48 h-48">
      <svg
        className="w-full h-full transform -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          strokeWidth="3.5"
          className="stroke-[var(--gray-200)]"
        />
        {/* Invested arc */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          strokeWidth="3.5"
          className="stroke-[var(--blue-700)]"
          strokeDasharray={`${investedArc} ${circumference}`}
          strokeLinecap="round"
        />
        {/* Returns arc */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          strokeWidth="3.5"
          className="stroke-[var(--green-600)]"
          strokeDasharray={`${returnsArc} ${circumference}`}
          strokeDashoffset={-investedArc}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-muted)]">
          Growth
        </span>
        <span className="text-[28px] font-headline font-extrabold leading-[1.2] text-[var(--text-primary)]">
          x{growth.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default function CalculatorPage() {
  const [monthly, setMonthly] = useState(25000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const { totalValue, totalInvested, totalReturns, growth } = useMemo(
    () => calcSIP(monthly, rate, years),
    [monthly, rate, years]
  );

  const investedRatio = totalInvested / totalValue;

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-16 md:pb-24"
        role="region"
        aria-labelledby="calculator-hero-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 items-start">
            <div className="lg:col-span-7">
              <h1
                id="calculator-hero-title"
                className="font-headline text-[44px] md:text-[72px] font-black tracking-tight text-[var(--text-primary)] mb-6 leading-[1.05]"
              >
              Wealth Creation,{" "}
                <span className="text-[var(--green-700)] italic">Simplified.</span>
              </h1>
              <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-xl">
              Estimate how your small monthly investments can grow into a
              substantial corpus over time using our professional SIP
              forecasting tool.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end items-start pt-4">
              <div className="animate-float bg-[var(--gold-light)] p-4 rounded-xl flex items-center gap-4 border border-[rgb(var(--gold-base-rgb)/0.28)] w-full max-w-xs">
                <div className="bg-[var(--surface)] p-3 rounded-full border border-[var(--borderSoft)] shrink-0">
                  <span className="material-symbols-outlined text-[var(--gold-dark)] text-2xl">
                  savings
                </span>
              </div>
              <div>
                  <span className="block font-headline font-bold text-[var(--text-primary)] text-[14px] leading-[1.75]">
                  Tax Saving Alert
                </span>
                  <span className="text-[12px] leading-[1.75] text-[var(--text-secondary)]">
                  Save up to ₹46,800 via ELSS funds.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Calculator Bento ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sliders Panel */}
          <div className="lg:col-span-7 bg-[var(--surface)] rounded-3xl p-6 md:p-8 border border-[var(--borderSoft)]">
            <h2 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-10 flex items-center gap-2">
              <span className="material-symbols-outlined text-[var(--blue-700)]">tune</span>
              Adjust Your Parameters
            </h2>
            <div className="space-y-12">
              <Slider
                label="Monthly Investment"
                value={monthly}
                min={500}
                max={100000}
                step={500}
                format={(v) => `₹ ${v.toLocaleString("en-IN")}`}
                onChange={setMonthly}
              />
              <Slider
                label="Expected Return Rate (p.a.)"
                value={rate}
                min={1}
                max={30}
                step={0.5}
                format={(v) => `${v} %`}
                onChange={setRate}
              />
              <Slider
                label="Time Period"
                value={years}
                min={1}
                max={40}
                step={1}
                format={(v) => `${v} Yr${v !== 1 ? "s" : ""}`}
                onChange={setYears}
              />
            </div>

            {/* Tips */}
            <div className="mt-10 p-4 bg-[var(--gray-50)] rounded-xl flex items-start gap-3 border border-[var(--borderSoft)]">
              <span className="material-symbols-outlined text-[var(--green-700)] shrink-0">
                lightbulb
              </span>
              <p className="text-[12px] leading-[1.75] text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Pro Tip:</strong>{" "}
                Increasing your SIP by just ₹1,000/month can significantly boost
                your long-term corpus. Start early for maximum compounding
                benefit.
              </p>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[var(--surface)] rounded-3xl p-6 md:p-8 border border-[var(--borderSoft)] shadow-[0px_20px_40px_rgba(15,23,42,0.06)] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline font-bold text-[var(--text-primary)] mb-8 text-center text-[16px] leading-[1.8]">
                  Investment Breakdown
                </h3>

                {/* Donut Chart */}
                <div className="flex justify-center mb-10">
                  <DonutChart
                    investedRatio={investedRatio}
                    growth={growth}
                  />
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[var(--blue-700)] inline-block" />
                      <span className="text-[14px] leading-[1.75] font-normal text-[var(--text-secondary)]">
                        Invested
                      </span>
                    </div>
                    <p className="text-[18px] font-headline font-bold leading-[1.3] text-[var(--text-primary)]">
                      {formatINR(totalInvested)}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[var(--green-600)] inline-block" />
                      <span className="text-[14px] leading-[1.75] font-normal text-[var(--text-secondary)]">
                        Est. Returns
                      </span>
                    </div>
                    <p className="text-[18px] font-headline font-bold leading-[1.3] text-[var(--text-primary)]">
                      {formatINR(totalReturns)}
                    </p>
                  </div>
                </div>

                {/* Total Value */}
                <div className="bg-[rgb(var(--green-600-rgb)/0.06)] rounded-2xl p-6 mb-6 text-center border border-[rgb(var(--green-600-rgb)/0.14)]">
                  <span className="text-[11px] font-bold tracking-[2px] uppercase mb-2 block text-[var(--green-700)]">
                    Total Corpus
                  </span>
                  <div className="text-[40px] font-headline font-black leading-[1.2] text-[var(--text-primary)]">
                    {formatINR(totalValue)}
                  </div>
                  <div className="text-[12px] leading-[1.75] text-[var(--text-secondary)] mt-1">
                    After {years} year{years !== 1 ? "s" : ""} at {rate}% p.a.
                  </div>
                </div>

                <button className="btn-primary w-full bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] text-[var(--text-white)] py-4 rounded-xl font-headline font-bold text-[16px] active:scale-95 transition-transform">
                  Start This SIP →
                </button>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[rgb(var(--blue-700-rgb)/0.06)] rounded-full blur-3xl" />
            </div>

            {/* Disclaimer */}
            <div className="bg-[var(--gray-50)] rounded-2xl p-5 flex items-start gap-3 border border-[var(--borderSoft)]">
              <span className="material-symbols-outlined text-[var(--blue-700)] shrink-0">
                verified
              </span>
              <div>
                <h4 className="font-headline font-bold text-[var(--text-primary)] text-[14px] leading-[1.75]">
                  Professional Projection
                </h4>
                <p className="text-[12px] leading-[1.75] text-[var(--text-secondary)] mt-1">
                  Calculations based on monthly compounding. Mutual fund
                  investments are subject to market risks. Read all scheme
                  related documents carefully.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ─── Recommended Funds ─────────────────────────────── */}
      <section
        className="pb-16 md:pb-24"
        role="region"
        aria-labelledby="calculator-recommended-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
            <div className="max-w-xl">
              <h2
                id="calculator-recommended-title"
                className="font-headline text-[28px] md:text-[40px] font-extrabold leading-[1.2] text-[var(--text-primary)] mb-[14px]"
              >
              Recommended for Your Goal
            </h2>
              <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)]">
              Based on your {years}-year horizon, these high-growth potential
              funds are curated by our experts.
            </p>
          </div>
          <Link
            href="/mutual-funds"
              className="text-[var(--blue-700)] font-bold text-[14px] flex items-center gap-2 group shrink-0"
          >
            View all funds
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {funds.map((fund) => (
            <div
              key={fund.name}
              className="bg-[var(--surface)] p-6 md:p-8 rounded-3xl transition-colors border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.20)] hover:bg-[var(--blue-50)] group"
            >
              <div className="w-12 h-12 bg-[var(--gray-50)] rounded-xl mb-6 flex items-center justify-center group-hover:bg-[var(--blue-50)] transition-colors border border-[var(--borderSoft)]">
                <span className="material-symbols-outlined text-[var(--blue-700)]">
                  {fund.icon}
                </span>
              </div>
              <h4 className="font-headline font-bold text-[18px] leading-[1.3] text-[var(--text-primary)] mb-2">
                {fund.name}
              </h4>
              <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)] mb-6">
                {fund.category}
              </p>
              <div className="flex justify-between items-end border-t border-[var(--borderSoft)] pt-6">
                <div>
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-muted)]">
                    3Y CAGR
                  </span>
                  <p className="text-[28px] font-headline font-extrabold leading-[1.2] text-[var(--blue-700)]">
                    {fund.cagr}
                  </p>
                </div>
                <button
                  className="bg-[var(--gray-50)] p-2 rounded-full text-[var(--blue-700)] hover:bg-[var(--blue-700)] hover:text-[var(--text-white)] transition-colors border border-[var(--borderSoft)]"
                  aria-label={`Add ${fund.name}`}
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
