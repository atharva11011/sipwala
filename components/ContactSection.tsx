export default function ContactSection() {
  return (
    <section
      className="py-16 md:py-24 bg-[var(--surface)]"
      role="region"
      aria-labelledby="contact-title"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[0.4px] bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
            Let&apos;s Connect
          </div>
          <h2
            id="contact-title"
            className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)] mb-[14px]"
          >
            Your Financial <br />
            <span className="text-[var(--blue-700)] italic font-medium">Curator</span>{" "}
            is Here.
          </h2>
          <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-xl">
            Whether you&apos;re starting your first SIP or optimizing a legacy
            portfolio, our advisors are ready to guide you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[var(--surfaceAlt)] rounded-3xl p-6 md:p-8 border border-[var(--borderSoft)]">
            <h3 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-8">
              Personalised Consultation
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px] leading-[1.75]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px] leading-[1.75]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px] leading-[1.75]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
                    Investment Interest
                  </label>
                  <select className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] outline-none text-[14px] leading-[1.75] cursor-pointer">
                    <option>Monthly SIP</option>
                    <option>Lumpsum Investment</option>
                    <option>Tax Saving (ELSS)</option>
                    <option>Retirement Planning</option>
                    <option>Wealth Management</option>
                    <option>Insurance Planning</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
                  Message (Optional)
                </label>
                <textarea
                  placeholder="How can we help you grow?"
                  rows={4}
                  className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] resize-none outline-none text-[14px] leading-[1.75]"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full text-[var(--text-white)] font-headline font-bold py-4 rounded-xl bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform text-[16px]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Office Details */}
            <div className="bg-[var(--surfaceAlt)] p-6 md:p-8 rounded-3xl flex-1 border border-[var(--borderSoft)]">
              <h3 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--blue-700)]">
                  location_on
                </span>
                Our Studio
              </h3>
              <div className="space-y-6">
                <address className="not-italic text-[14px] leading-[1.75] text-[var(--text-muted)]">
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
                    <span className="material-symbols-outlined bg-[var(--surface)] p-2 rounded-lg text-sm group-hover:bg-[var(--blue-50)] group-hover:text-[var(--blue-700)] transition-colors">
                      mail
                    </span>
                    <span className="font-medium text-[14px] leading-[1.75]">hello@sipwala.com</span>
                  </a>
                  <a
                    href="tel:+912212345678"
                    className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--blue-700)] transition-colors group"
                  >
                    <span className="material-symbols-outlined bg-[var(--surface)] p-2 rounded-lg text-sm group-hover:bg-[var(--blue-50)] group-hover:text-[var(--blue-700)] transition-colors">
                      call
                    </span>
                    <span className="font-medium text-[14px] leading-[1.75]">+91 22 1234 5678</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--blue-700)] transition-colors group"
                  >
                    <span className="material-symbols-outlined bg-[var(--surface)] p-2 rounded-lg text-sm group-hover:bg-[var(--blue-50)] group-hover:text-[var(--blue-700)] transition-colors">
                      schedule
                    </span>
                    <span className="font-medium text-[14px] leading-[1.75]">Mon – Sat, 9 AM – 7 PM</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-56 rounded-3xl overflow-hidden relative group bg-[linear-gradient(135deg,rgb(var(--green-600-rgb)/0.14),rgb(var(--blue-700-rgb)/0.14))] border border-[var(--borderSoft)]">
              <div className="absolute inset-0">
                <svg
                  className="w-full h-full opacity-30 text-[var(--green-600)]"
                  viewBox="0 0 400 240"
                  xmlns="http://www.w3.org/2000/svg"
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
              <div className="absolute bottom-4 left-4 right-4 bg-[rgb(var(--text-white-rgb)/0.90)] backdrop-blur-md p-3 rounded-2xl flex justify-between items-center border border-[rgb(var(--text-primary-rgb)/0.06)]">
                <span className="text-[14px] leading-[1.75] font-bold text-[var(--text-primary)]">
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
  );
}
