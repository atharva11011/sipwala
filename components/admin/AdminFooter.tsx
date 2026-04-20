"use client";

import Link from "next/link";

export default function AdminFooter() {
  return (
    <footer className="w-full border-t border-[var(--borderSoft)] bg-[var(--surface)]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-[12px] text-[var(--text-muted)] leading-[1.75]">
            Admin Panel · SIPWALA
          </div>

          <div className="flex items-center gap-4 text-[12px] font-bold text-[var(--blue-700)]">
            <Link href="/admin" className="hover:underline">
              Dashboard
            </Link>
            <Link href="/admin/blogs" className="hover:underline">
              Blogs
            </Link>
            <Link href="/" className="hover:underline">
              View Site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
