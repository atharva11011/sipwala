import Link from "next/link";

import { requireAdmin } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export default function AdminProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  requireAdmin();

  return (
    <main className="bg-[var(--gray-50)] py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-4xl px-5 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[rgb(var(--blue-700-rgb)/0.10)] text-[var(--blue-700)] flex items-center justify-center">
              <span className="material-symbols-outlined">admin_panel_settings</span>
            </div>
            <div>
              <div className="font-headline font-extrabold tracking-tight text-[var(--text-primary)]">
                Admin
              </div>
              <div className="text-[12px] text-[var(--text-muted)]">
                Manage your blog content
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/admin/blogs"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/admin/logout"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[rgb(var(--red-600-rgb)/0.35)] hover:text-[rgb(var(--red-700-rgb)/0.95)] transition-colors"
            >
              Logout
            </Link>
          </div>
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </main>
  );
}
