"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Blogs", href: "/admin/blogs" },
  { label: "New Blog", href: "/admin/blogs/new" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AdminNavbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[var(--surface)] border-b border-[var(--borderSoft)]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/admin" className="flex items-center gap-3" aria-label="Admin Dashboard">
            <div className="w-10 h-10 rounded-2xl bg-[rgb(var(--blue-700-rgb)/0.10)] text-[var(--blue-700)] flex items-center justify-center">
              <span className="material-symbols-outlined">admin_panel_settings</span>
            </div>
            <div>
              <div className="font-headline font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]">
                Admin
              </div>
              <div className="text-[12px] text-[var(--text-muted)] leading-[1.4]">
                Manage blog content
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="md:hidden inline-flex items-center justify-center px-3 py-2 rounded-xl text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors"
          >
            View Site
          </Link>
        </div>

        <nav className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "inline-flex items-center justify-center px-4 py-2 rounded-xl text-[13px] font-bold border transition-colors " +
                    (active
                      ? "text-[var(--blue-700)] border-[var(--blue-200)] bg-[var(--blue-50)]"
                      : "text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)]")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-xl text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors"
            >
              View Site
            </Link>

            <Link
              href="/admin/logout"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[rgb(var(--red-600-rgb)/0.35)] hover:text-[rgb(var(--red-700-rgb)/0.95)] transition-colors"
            >
              Logout
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
