"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  icon?: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: "dashboard" },
  { label: "Blogs", href: "/admin/blogs", icon: "article" },
  { label: "Gallery", href: "/admin/gallery", icon: "collections" },
  { label: "New Blog", href: "/admin/blogs/new", icon: "add_circle" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AdminNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[var(--surface)] border-b border-[var(--borderSoft)] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 lg:px-8">
        {/* Main navbar row */}
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/admin" className="flex items-center gap-2 sm:gap-3 flex-shrink-0" aria-label="Admin Dashboard">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[rgb(var(--blue-700-rgb)/0.10)] text-[var(--blue-700)] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-xl sm:text-2xl">admin_panel_settings</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-headline font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2] text-sm">
                Admin
              </div>
              <div className="text-[11px] text-[var(--text-muted)] leading-[1.3]">
                Manage blog content
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 flex-grow justify-center mx-4">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[13px] font-bold border transition-colors whitespace-nowrap " +
                    (active
                      ? "text-[var(--blue-700)] border-[var(--blue-200)] bg-[var(--blue-50)]"
                      : "text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)]")
                  }
                >
                  {item.icon && <span className="material-symbols-outlined text-base">{item.icon}</span>}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors"
            >
              View Site
            </Link>
            <Link
              href="/admin/logout"
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[rgb(var(--red-600-rgb)/0.35)] hover:text-[rgb(var(--red-700-rgb)/0.95)] transition-colors"
            >
              Logout
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-3 space-y-2 border-t border-[var(--borderSoft)]">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    "flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-bold border transition-colors " +
                    (active
                      ? "text-[var(--blue-700)] border-[var(--blue-200)] bg-[var(--blue-50)]"
                      : "text-[var(--text-secondary)] border-transparent hover:border-[var(--border)] hover:text-[var(--blue-700)]")
                  }
                >
                  {item.icon && <span className="material-symbols-outlined text-base">{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="flex gap-2 pt-2 border-t border-[var(--borderSoft)]">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors"
              >
                <span className="material-symbols-outlined text-base">language</span>
                <span>View Site</span>
              </Link>
              <Link
                href="/admin/logout"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[rgb(var(--red-600-rgb)/0.35)] hover:text-[rgb(var(--red-700-rgb)/0.95)] transition-colors"
              >
                <span className="material-symbols-outlined text-base">logout</span>
                <span>Logout</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
