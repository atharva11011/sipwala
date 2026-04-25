import Link from "next/link";

import ConfirmDeleteButton from "@/components/admin/ConfirmDeleteButton";
import { deleteBlogPostAction } from "@/lib/adminBlogActions";
import { formatDisplayDate, getAllBlogs } from "@/lib/blogStore";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const blogs = await getAllBlogs();
  const recent = blogs.slice(0, 5);
  const nowMs = Date.now();
  const draftCount = blogs.filter((blog) => {
    const publishedMs = new Date(blog.publishedAt).getTime();
    if (Number.isNaN(publishedMs)) return true;
    return publishedMs > nowMs;
  }).length;
  const publishedCount = blogs.length - draftCount;

  return (
    <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-4xl p-6 sm:p-8">
      <h1 className="font-headline text-[24px] sm:text-[28px] font-extrabold tracking-tight text-[var(--text-primary)]">
        Dashboard
      </h1>
      <p className="mt-2 text-[14px] leading-[1.75] text-[var(--text-muted)]">
        Quick actions to manage your blog.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-3xl border border-[var(--borderSoft)] bg-[var(--surfaceAlt)] p-5">
          <div className="text-[12px] font-bold tracking-tight text-[var(--text-muted)]">
            Total posts
          </div>
          <div className="mt-2 font-headline text-[28px] font-extrabold tracking-tight text-[var(--text-primary)]">
            {blogs.length}
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--borderSoft)] bg-[var(--surfaceAlt)] p-5">
          <div className="text-[12px] font-bold tracking-tight text-[var(--text-muted)]">
            Published
          </div>
          <div className="mt-2 font-headline text-[28px] font-extrabold tracking-tight text-[var(--text-primary)]">
            {publishedCount}
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--borderSoft)] bg-[var(--surfaceAlt)] p-5">
          <div className="text-[12px] font-bold tracking-tight text-[var(--text-muted)]">
            Drafts
          </div>
          <div className="mt-2 font-headline text-[28px] font-extrabold tracking-tight text-[var(--text-primary)]">
            {draftCount}
          </div>
          <div className="mt-1 text-[12px] text-[var(--text-muted)]">
            Drafts are posts with a future publish date.
          </div>
        </div>
      </div>

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

      <div className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-headline text-[18px] sm:text-[20px] font-extrabold tracking-tight text-[var(--text-primary)]">
              Recent Posts
            </h2>
            <p className="mt-1 text-[13px] leading-[1.75] text-[var(--text-muted)]">
              Jump back into what you published recently.
            </p>
          </div>

          <Link
            href="/admin/blogs"
            className="text-[13px] font-bold text-[var(--blue-700)] hover:underline"
          >
            View all
          </Link>
        </div>

        {recent.length === 0 ? (
          <div className="mt-5 rounded-3xl border border-[var(--borderSoft)] bg-[var(--surfaceAlt)] p-5 text-[14px] text-[var(--text-muted)]">
            No posts yet.
          </div>
        ) : (
          <div className="mt-5 overflow-hidden rounded-3xl border border-[var(--borderSoft)]">
            <div className="divide-y divide-[var(--borderSoft)]">
              {recent.map((blog) => {
                const publishedMs = new Date(blog.publishedAt).getTime();
                const status = Number.isNaN(publishedMs)
                  ? "Draft"
                  : publishedMs > nowMs
                    ? "Draft"
                    : "Published";
                const updatedAt = blog.updatedAt || blog.publishedAt;

                return (
                <div
                  key={blog.id}
                  className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="font-headline font-bold text-[15px] leading-[1.35] text-[var(--text-primary)] truncate">
                      {blog.title}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span
                        className={
                          "inline-flex items-center px-2.5 py-1 rounded-xl text-[12px] font-bold border " +
                          (status === "Published"
                            ? "text-[var(--blue-700)] border-[var(--blue-200)] bg-[var(--blue-50)]"
                            : "text-[var(--text-secondary)] border-[var(--border)] bg-[var(--surfaceAlt)]")
                        }
                      >
                        {status}
                      </span>

                      <div className="text-[12px] text-[var(--text-muted)]">
                        Updated {formatDisplayDate(updatedAt)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/blogs/${blog.id}/edit`}
                      className="inline-flex items-center gap-2 h-10 px-3 rounded-xl text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--blue-600-rgb)/0.25)] focus-visible:ring-inset"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        edit
                      </span>
                      Edit
                    </Link>

                    <Link
                      href={`/admin/blogs/${blog.id}/view`}
                      className="inline-flex items-center gap-2 h-10 px-3 rounded-xl text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--blue-600-rgb)/0.25)] focus-visible:ring-inset"
                    >
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      View
                    </Link>

                    <ConfirmDeleteButton
                      id={blog.id}
                      redirectTo="/admin"
                      action={deleteBlogPostAction}
                      className="inline-flex items-center gap-2 h-10 px-3 rounded-xl text-[13px] font-bold text-[rgb(var(--red-700-rgb)/0.95)] border border-[rgb(var(--red-600-rgb)/0.35)] hover:border-[rgb(var(--red-600-rgb)/0.55)] transition-colors whitespace-nowrap disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--red-600-rgb)/0.18)] focus-visible:ring-inset"
                    />
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
