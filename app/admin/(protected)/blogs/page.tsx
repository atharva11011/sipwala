import Link from "next/link";

import ConfirmDeleteButton from "@/components/admin/ConfirmDeleteButton";
import { deleteBlogPostAction } from "@/lib/adminBlogActions";
import {
  formatDisplayDate,
  getAllBlogs,
  slugify,
} from "@/lib/blogStore";

export const dynamic = "force-dynamic";

export default async function AdminBlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-4xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-headline text-[22px] sm:text-[26px] font-extrabold tracking-tight text-[var(--text-primary)]">
            Blogs
          </h1>
          <p className="mt-2 text-[14px] leading-[1.75] text-[var(--text-muted)]">
            Create and publish blog posts.
          </p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="btn-primary w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-headline font-bold tracking-tight text-[14px] text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
        >
          Add New Blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-[var(--borderSoft)] bg-[var(--surfaceAlt)] p-6 text-[14px] text-[var(--text-muted)]">
          No blogs yet. Click “Add New Blog” to publish your first post.
        </div>
      ) : (
        <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--borderSoft)]">
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,220px)_minmax(0,160px)_auto] sm:gap-4 bg-[var(--surfaceAlt)] px-4 py-3 text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)]">
            <div>Title</div>
            <div className="hidden sm:block">Tag</div>
            <div className="hidden sm:block">Published</div>
            <div className="hidden sm:block text-right">Actions</div>
          </div>

          <div className="divide-y divide-[var(--borderSoft)]">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,220px)_minmax(0,160px)_auto] sm:gap-4 px-4 py-4"
              >
                <div className="min-w-0">
                  <div className="flex items-start gap-2">
                    <div className="min-w-0">
                      <div className="font-headline font-bold text-[15px] leading-[1.35] text-[var(--text-primary)]">
                        {blog.title}
                      </div>
                      <div className="mt-1 text-[12px] text-[var(--text-muted)] break-all">
                        /admin/blogs/{blog.id}/view
                      </div>
                    </div>

                    {blog.featured ? (
                      <span className="shrink-0 mt-0.5 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-[var(--green-600)] text-[var(--text-white)]">
                        Featured
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-3 sm:mt-0">
                  <span className="inline-flex text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)]">
                    {blog.tag}
                  </span>
                </div>

                <div className="mt-3 sm:mt-0 text-[13px] text-[var(--text-secondary)]">
                  {formatDisplayDate(blog.publishedAt)}
                </div>

                <div className="mt-3 sm:mt-0 flex justify-start sm:justify-end">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/admin/blogs/${blog.id}/edit`}
                      className="inline-flex items-center gap-2 h-10 px-4 rounded-xl text-[13px] font-bold whitespace-nowrap bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--blue-600-rgb)/0.25)] focus-visible:ring-inset"
                    >
                      <span className="material-symbols-outlined text-[16px]">edit</span>
                      Edit
                    </Link>

                    <Link
                      href={`/admin/blogs/${blog.id}/view`}
                      className="inline-flex items-center gap-2 h-10 px-4 rounded-xl text-[13px] font-bold whitespace-nowrap bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--blue-600-rgb)/0.25)] focus-visible:ring-inset"
                    >
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      View
                    </Link>

                    <ConfirmDeleteButton
                      id={blog.id}
                      redirectTo="/admin/blogs"
                      action={deleteBlogPostAction}
                      className="inline-flex items-center gap-2 h-10 px-4 rounded-xl text-[13px] font-bold whitespace-nowrap bg-[rgb(var(--red-700-rgb)/0.03)] border border-[rgb(var(--red-600-rgb)/0.35)] text-[rgb(var(--red-700-rgb)/0.95)] hover:border-[rgb(var(--red-600-rgb)/0.55)] hover:bg-[rgb(var(--red-700-rgb)/0.05)] transition-colors disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--red-600-rgb)/0.18)] focus-visible:ring-inset"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
