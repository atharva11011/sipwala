import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <ContactSection />

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
