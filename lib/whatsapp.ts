export type LeadForm = {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message?: string;
};

export const WHATSAPP_NUMBER = "918983260641";

export function buildWhatsAppLeadText(form: LeadForm) {
  const now = new Date().toLocaleString();
  const safe = (v?: string) => (v && v.trim() ? v.trim() : "Not provided");

  const name = safe(form.name);
  const email = safe(form.email);
  const phone = safe(form.phone);
  const interest = safe(form.interest || "Website Enquiry");
  const message = safe(form.message);

  return [
    `New Lead from Sipwala website 🚀`,
    `Time: ${now}`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Interest: ${interest}`,
    `Message: ${message}`,
    ``,
    `Please follow up with this lead when possible.`,
  ].join("\n");
}

export function openWhatsAppLead(form: LeadForm) {
  const text = buildWhatsAppLeadText(form);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) {
    // Popup blockers may prevent new tabs; fall back to same-tab navigation.
    window.location.href = url;
  }
}
