import Link from "next/link";

import { getAllBlogs } from "@/lib/blogStore";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const blogs = await getAllBlogs();

  return (
    <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-4xl p-6 sm:p-8">
      <h1 className="font-headline text-[24px] sm:text-[28px] font-extrabold tracking-tight text-[var(--text-primary)]">
        Dashboard
      </h1>
      <p className="mt-2 text-[14px] leading-[1.75] text-[var(--text-muted)]">
        Quick actions to manage your blog.
      </p>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <Link
          href="/admin/blogs/new"
          className="btn-primary w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-headline font-bold tracking-tight text-[15px] text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
        >
          Add New Blog
        </Link>

        <Link
          href="/admin/blogs"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-headline font-bold tracking-tight text-[15px] text-[var(--blue-700)] border-2 border-[var(--blue-700)] hover:bg-[var(--blue-700)] hover:text-[var(--text-white)] transition-colors"
        >
          View All Blogs ({blogs.length})
        </Link>
      </div>
    </div>
  );
}
