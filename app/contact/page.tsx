import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-24 md:pt-32 pb-16 md:pb-24"
        role="region"
        aria-labelledby="contact-hero-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
                Let&apos;s Connect
              </div>
              <h1
                id="contact-hero-title"
                className="font-headline text-[44px] md:text-[72px] font-black tracking-tight leading-[1.05] text-[var(--text-primary)]"
              >
              Your Financial <br />
              <span className="text-[var(--green-700)] italic font-medium">
                Curator
              </span>{" "}
              is Here.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-md">
                Whether you&apos;re starting your first SIP or optimizing a legacy
                portfolio, our advisors are ready to guide you.
              </p>
            </div>
          </div>

          {/* ─── Bento Grid ──────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Contact Form */}
            <div className="lg:col-span-7 rounded-3xl border border-[var(--borderSoft)] bg-[var(--surface)] p-6 md:p-8">
              <h2 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-8">
                Personalised Consultation
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--text-muted)] px-1 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Arjun Mehta"
                      className="w-full rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 py-3 text-[14px] leading-[1.75] text-[var(--text-primary)] placeholder:text-[var(--text-hint)] outline-none transition focus:ring-2 focus:ring-[rgb(var(--green-600-rgb)/0.22)] focus:border-[rgb(var(--green-600-rgb)/0.35)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--text-muted)] px-1 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="arjun@example.com"
                      className="w-full rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 py-3 text-[14px] leading-[1.75] text-[var(--text-primary)] placeholder:text-[var(--text-hint)] outline-none transition focus:ring-2 focus:ring-[rgb(var(--green-600-rgb)/0.22)] focus:border-[rgb(var(--green-600-rgb)/0.35)]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--text-muted)] px-1 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 py-3 text-[14px] leading-[1.75] text-[var(--text-primary)] placeholder:text-[var(--text-hint)] outline-none transition focus:ring-2 focus:ring-[rgb(var(--green-600-rgb)/0.22)] focus:border-[rgb(var(--green-600-rgb)/0.35)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--text-muted)] px-1 block">
                      Investment Interest
                    </label>
                    <select className="w-full rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 py-3 text-[14px] leading-[1.75] text-[var(--text-primary)] outline-none transition focus:ring-2 focus:ring-[rgb(var(--green-600-rgb)/0.22)] focus:border-[rgb(var(--green-600-rgb)/0.35)] cursor-pointer">
                      <option>Monthly SIP</option>
                      <option>Lumpsum Investment</option>
                      <option>Tax Saving (ELSS)</option>
                      <option>Retirement Planning</option>
                      <option>Wealth Management</option>
                      <option>Insurance Planning</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--text-muted)] px-1 block">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="How can we help you grow?"
                    rows={4}
                    className="w-full rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 py-3 text-[14px] leading-[1.75] text-[var(--text-primary)] placeholder:text-[var(--text-hint)] resize-none outline-none transition focus:ring-2 focus:ring-[rgb(var(--green-600-rgb)/0.22)] focus:border-[rgb(var(--green-600-rgb)/0.35)]"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] text-[var(--text-white)] font-headline font-bold py-4 rounded-xl active:scale-95 transition-transform text-[14px]"
                >
                  Send Message
                </button>
              </form>
            </div>

          {/* Right column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Office Details */}
              <div className="rounded-3xl border border-[var(--borderSoft)] bg-[var(--gray-50)] p-6 md:p-8 flex-1">
                <h3 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[var(--green-600)]">
                  location_on
                  </span>
                  Our Studio
                </h3>
                <div className="space-y-6">
                  <address className="not-italic text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                    <span className="block font-bold text-[var(--text-primary)] mb-1">
                      HQ Office
                    </span>
                    Floor 12, Financial District Skyline Tower,
                    <br />
                    Bandra Kurla Complex, Mumbai 400051
                  </address>
                  <div className="flex flex-col gap-3">
                    <a
                      href="mailto:hello@sipwala.com"
                      className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--blue-700)] transition-colors group"
                    >
                      <span className="material-symbols-outlined bg-[var(--surface)] border border-[var(--borderSoft)] p-2 rounded-lg group-hover:bg-[var(--blue-50)] text-sm">
                        mail
                      </span>
                      <span className="font-medium text-[14px] leading-[1.75]">
                        hello@sipwala.com
                      </span>
                    </a>
                    <a
                      href="tel:+912212345678"
                      className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--blue-700)] transition-colors group"
                    >
                      <span className="material-symbols-outlined bg-[var(--surface)] border border-[var(--borderSoft)] p-2 rounded-lg group-hover:bg-[var(--blue-50)] text-sm">
                        call
                      </span>
                      <span className="font-medium text-[14px] leading-[1.75]">
                        +91 22 1234 5678
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--blue-700)] transition-colors group"
                    >
                      <span className="material-symbols-outlined bg-[var(--surface)] border border-[var(--borderSoft)] p-2 rounded-lg group-hover:bg-[var(--blue-50)] text-sm">
                        schedule
                      </span>
                      <span className="font-medium text-[14px] leading-[1.75]">
                        Mon – Sat, 9 AM – 7 PM
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-56 rounded-3xl overflow-hidden relative group border border-[var(--borderSoft)] bg-[linear-gradient(135deg,rgb(var(--green-600-rgb)/0.14),rgb(var(--blue-700-rgb)/0.12))]">
                {/* Abstract map grid */}
                <div className="absolute inset-0 text-[var(--green-700)]">
                  <svg
                    className="w-full h-full opacity-30"
                    viewBox="0 0 400 240"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {[...Array(8)].map((_, i) => (
                      <line
                        key={`h${i}`}
                        x1="0"
                        y1={i * 32}
                        x2="400"
                        y2={i * 32}
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    ))}
                    {[...Array(14)].map((_, i) => (
                      <line
                        key={`v${i}`}
                        x1={i * 32}
                        y1="0"
                        x2={i * 32}
                        y2="240"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    ))}
                    <circle cx="200" cy="120" r="8" fill="currentColor" />
                    <circle
                      cx="200"
                      cy="120"
                      r="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.5"
                    />
                    <circle
                      cx="200"
                      cy="120"
                      r="35"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[rgb(var(--text-white-rgb)/0.90)] backdrop-blur-md p-3 rounded-2xl border border-[rgb(var(--gray-200-rgb)/0.65)] flex justify-between items-center">
                  <span className="text-[14px] font-bold text-[var(--text-primary)]">
                    View on Google Maps
                  </span>
                  <span className="material-symbols-outlined text-[var(--blue-700)] text-sm">
                    open_in_new
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────────── */}
      <section
        className="py-16 md:py-24"
        role="region"
        aria-labelledby="contact-cta-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] rounded-[3rem] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[rgb(var(--text-white-rgb)/0.06)] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[rgb(var(--text-white-rgb)/0.06)] rounded-full pointer-events-none" />
            <h2
              id="contact-cta-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold leading-[1.2] text-[var(--text-white)] mb-[14px] relative z-10"
            >
              Cultivate Your Growth Today
            </h2>
            <p className="text-[16px] leading-[1.8] text-[rgb(var(--text-white-rgb)/0.84)] mb-12 max-w-2xl mx-auto relative z-10">
              Join 50,000+ investors who trust Sipwala for their wealth journey.
              No paperwork, just precision.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-xl border border-[rgb(var(--text-white-rgb)/0.22)] bg-[rgb(var(--text-white-rgb)/0.92)] text-[var(--text-primary)] placeholder:text-[var(--text-hint)] outline-none focus:ring-2 focus:ring-[rgb(var(--text-white-rgb)/0.30)]"
              />
              <button className="btn-primary bg-[var(--text-white)] text-[var(--blue-700)] px-8 py-4 rounded-xl font-headline font-bold transition-colors tracking-tight hover:bg-[rgb(var(--text-white-rgb)/0.95)]">
                Get Started
              </button>
            </div>
            <p className="text-[12px] leading-[1.75] text-[rgb(var(--text-white-rgb)/0.55)] mt-6 relative z-10">
              Instant account creation. Regulated by SEBI.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────── */}
      <section
        className="pb-16 md:pb-24"
        role="region"
        aria-labelledby="contact-faq-title"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2
            id="contact-faq-title"
            className="font-headline text-[28px] md:text-[40px] font-extrabold leading-[1.2] text-[var(--text-primary)] text-center mb-12"
          >
          Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does account setup take?",
                a: "Account creation is entirely paperless and takes less than 3 minutes. You'll need your PAN card and Aadhaar number.",
              },
              {
                q: "Is there a minimum SIP amount?",
                a: "Most funds allow you to start a SIP with as little as ₹500 per month. Some ELSS funds start at ₹500 as well.",
              },
              {
                q: "Are my investments safe with Sipwala?",
                a: "Sipwala is a SEBI-registered investment advisor. Your investments are held directly with the fund houses, not with us. We are purely an advisory and execution platform.",
              },
              {
                q: "Can I change or stop my SIP anytime?",
                a: "Yes, you can modify, pause, or stop your SIP at any time through our platform with zero exit charges.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.25)] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[var(--blue-700)] shrink-0 mt-0.5">
                    help
                  </span>
                  <div>
                    <h4 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                      {faq.a}
                    </p>
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
