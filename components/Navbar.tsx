"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const PRODUCTS = [
  "Mutual Funds",
  "Life Insurance",
  "Health Insurance",
  "General Insurance",
  "Insurance Planning",
  "Equity",
  "AIF",
  "Fixed Deposit",
  "Stock Broking",
  "National Pension System",
  "PMS",
  "Bonds",
];

const SERVICES = ["Angel Funds", "Smallcase", "Capital Gain Bond"];

type DropdownItem = { href: string; label: string };
type NavLink = {
  href: string;
  label: string;
  dropdownItems?: DropdownItem[];
  dropdownLayout?: "grid" | "list";
};

const ABOUT_ITEMS: DropdownItem[] = [
  { href: "/company-profile", label: "Company Profile" },
  { href: "/meet-our-founder", label: "Meet Our Founder" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/about#gallery", label: "Gallery" },
];

const PRODUCT_ITEMS: DropdownItem[] = PRODUCTS.map((p) => ({
  href:
    p === "Mutual Funds"
      ? "/mutual-funds"
      : `/products/${p.toLowerCase().replace(/ /g, "-")}`,
  label: p,
}));

const SERVICE_ITEMS: DropdownItem[] = SERVICES.map((s) => ({
  href: `/services/${s.toLowerCase().replace(/ /g, "-")}`,
  label: s,
}));

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "HOME" },
  {
    href: "/about",
    label: "ABOUT US",
    dropdownItems: ABOUT_ITEMS,
    dropdownLayout: "list",
  },
  {
    href: "/services",
    label: "SERVICES",
    dropdownItems: SERVICE_ITEMS,
    dropdownLayout: "list",
  },
  {
    href: "/mutual-funds",
    label: "PRODUCTS",
    dropdownItems: PRODUCT_ITEMS,
    dropdownLayout: "grid",
  },
  { href: "/calculator", label: "CALCULATORS" },
  { href: "/contact", label: "CONTACT US" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerClass = useMemo(
    () =>
      [
        "fixed top-0 w-full z-50",
        "bg-[rgb(var(--text-white-rgb)/0.96)] backdrop-blur-[16px]",
        "border-b border-[rgb(var(--gray-200-rgb)/0.8)]",
        "transition-[height,background-color,backdrop-filter] duration-300 ease-out",
        scrolled ? "h-14" : "h-16",
      ].join(" "),
    [scrolled]
  );

  const linkBaseClass =
    "relative flex items-center h-full px-3 text-[11px] xl:text-xs font-bold uppercase tracking-wide text-[var(--text-secondary)] transition-colors after:absolute after:left-3 after:right-3 after:bottom-[-2px] after:h-[2px] after:rounded after:bg-[var(--blue-600)] after:transition-transform after:duration-200 after:ease-out after:origin-left after:scale-x-0 hover:text-[var(--blue-700)] hover:after:scale-x-100";

  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={containerClass}
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-5 lg:px-8 h-full">
        {/* ─── Logo ─── */}
        <Link
          href="/"
          className="shrink-0 flex items-center"
          aria-label="Sipwala"
        >
          <span className="font-headline font-extrabold tracking-tight leading-none text-[24px] md:text-[28px] text-[var(--red-700)]">
            SIPWALA
          </span>
        </Link>

        {/* ─── Desktop Nav ─── */}
        <div className="hidden lg:flex items-stretch h-full">
          {NAV_LINKS.map((link) => {
            if (link.dropdownItems) {
              const dropdownItems = link.dropdownItems;
              const isActive = pathname === link.href;

              return (
                <div
                  key={link.label}
                  className="relative group flex items-stretch"
                >
                  <button
                    type="button"
                    className={`${linkBaseClass} gap-1 ${
                      isActive
                        ? "text-[var(--blue-700)] after:scale-x-100"
                        : ""
                    }`}
                    aria-haspopup="menu"
                  >
                    {link.label}
                    <span className="material-symbols-outlined text-[14px] dropdown-arrow">
                      expand_more
                    </span>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 w-72 bg-[var(--surface)] shadow-[0_18px_40px_rgba(15,23,42,0.12)] invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50 rounded-2xl overflow-hidden border border-[var(--borderSoft)]">
                    {dropdownItems.map((item, i) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-5 py-3 text-[11px] font-bold text-[var(--text-secondary)] hover:bg-[var(--gray-50)] hover:text-[var(--blue-700)] uppercase tracking-wide transition-colors ${
                          i < dropdownItems.length - 1
                            ? "border-b border-[var(--borderSoft)]"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${linkBaseClass} ${
                  pathname === link.href
                    ? "text-[var(--blue-700)] after:scale-x-100"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* ─── CTA Buttons ─── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="btn-primary px-5 py-2.5 rounded-xl font-headline text-sm font-bold tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
          >
            Enquiry Now
          </Link>
        </div>

        {/* ─── Mobile Hamburger ─── */}
        <button
          className="lg:hidden text-[var(--text-primary)] p-2 rounded-lg hover:bg-[var(--gray-100)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* ─── Mobile Menu ─── */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--surface)] border-t border-[var(--borderSoft)] px-5 pb-6 animate-slide-down">
          <div className="space-y-1 pt-2">
            {NAV_LINKS.map((link) => {
              if (link.dropdownItems) {
                const dropdownItems = link.dropdownItems;
                const isOpen = mobileDropdownOpen === link.label;

                return (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen((prev) =>
                          prev === link.label ? null : link.label
                        )
                      }
                      className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase text-[var(--text-secondary)] border-b border-[var(--borderSoft)] font-headline tracking-tight"
                    >
                      {link.label}
                      <span className="material-symbols-outlined text-sm">
                        {isOpen ? "expand_less" : "expand_more"}
                      </span>
                    </button>
                    {isOpen &&
                      (link.dropdownLayout === "grid" ? (
                        <div className="bg-[var(--gray-50)] rounded-xl mt-1 mb-2 p-3 grid grid-cols-2 gap-1 border border-[var(--borderSoft)]">
                          {dropdownItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="py-2 px-2 text-[11px] font-bold uppercase text-[var(--text-muted)] hover:text-[var(--blue-700)] transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-[var(--gray-50)] rounded-xl mt-1 mb-2 overflow-hidden border border-[var(--borderSoft)]">
                          {dropdownItems.map((item, i) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block py-3 px-4 text-[11px] font-bold uppercase tracking-wide text-[var(--text-muted)] hover:text-[var(--blue-700)] hover:bg-[rgb(var(--text-white-rgb)/0.7)] transition-colors ${
                                i < dropdownItems.length - 1
                                  ? "border-b border-[var(--borderSoft)]"
                                  : ""
                              }`}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-3 text-sm font-bold uppercase text-[var(--text-secondary)] hover:text-[var(--blue-700)] border-b border-[var(--borderSoft)] font-headline tracking-tight transition-colors"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileDropdownOpen(null);
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-3 pt-5">
            <Link
              href="/contact"
              className="flex-1 py-3 bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] text-[var(--text-white)] rounded-xl text-sm font-bold font-headline text-center"
              onClick={() => {
                setMobileOpen(false);
                setMobileDropdownOpen(null);
              }}
            >
              Enquiry Now
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
