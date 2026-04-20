import Link from "next/link";

import { formatDisplayDate, getAllBlogs } from "@/lib/blogStore";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const blogs = await getAllBlogs();
  const recent = blogs.slice(0, 5);

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
              {recent.map((blog) => (
                <div
                  key={blog.id}
                  className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="font-headline font-bold text-[15px] leading-[1.35] text-[var(--text-primary)] truncate">
                      {blog.title}
                    </div>
                    <div className="mt-1 text-[12px] text-[var(--text-muted)]">
                      Published {formatDisplayDate(blog.publishedAt)}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/blogs/${blog.id}/edit`}
                      className="inline-flex items-center gap-1 text-[13px] font-bold text-[var(--blue-700)] hover:underline"
                    >
                      Edit
                      <span className="material-symbols-outlined text-[16px]">
                        edit
                      </span>
                    </Link>

                    <Link
                      href={`/admin/blogs/${blog.id}/view`}
                      className="inline-flex items-center gap-1 text-[13px] font-bold text-[var(--blue-700)] hover:underline"
                    >
                      View
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
