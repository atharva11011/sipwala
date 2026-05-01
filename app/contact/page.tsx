import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
};

// FAQ Data (clean separation)
const faqs = [
  {
    question: "How long does account setup take?",
    answer:
      "Account creation is entirely paperless and takes less than 3 minutes. You'll need your PAN card and Aadhaar number.",
  },
  {
    question: "Is there a minimum SIP amount?",
    answer:
      "Most funds allow you to start a SIP with as little as ₹500 per month. Some ELSS funds start at ₹500 as well.",
  },
  {
    question: "Are my investments safe with Sipwala?",
    answer:
      "Sipwala is a SEBI-registered investment advisor. Your investments are held directly with the fund houses, not with us. We are purely an advisory and execution platform.",
  },
  {
    question: "Can I change or stop my SIP anytime?",
    answer:
      "Yes, you can modify, pause, or stop your SIP at any time through our platform with zero exit charges.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Contact Form Section */}
      <ContactSection />

      {/* FAQ Section */}
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
            {faqs.map(({ question, answer }) => (
              <div
                key={question}
                className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--borderSoft)] hover:border-[rgb(var(--blue-700-rgb)/0.25)] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[var(--blue-700)] shrink-0 mt-1">
                    help
                  </span>

                  <div>
                    <h4 className="font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] mb-2">
                      {question}
                    </h4>

                    <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                      {answer}
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