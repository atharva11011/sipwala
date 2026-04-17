import Link from "next/link";

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
          <div className="grid grid-cols-12 bg-[var(--surfaceAlt)] px-4 py-3 text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)]">
            <div className="col-span-6">Title</div>
            <div className="col-span-3">Tag</div>
            <div className="col-span-2">Published</div>
            <div className="col-span-1 text-right">Link</div>
          </div>

          <div className="divide-y divide-[var(--borderSoft)]">
            {blogs.map((blog) => (
              <div key={blog.id} className="grid grid-cols-12 px-4 py-4">
                <div className="col-span-12 sm:col-span-6">
                  <div className="flex items-start gap-2">
                    <div className="min-w-0">
                      <div className="font-headline font-bold text-[15px] leading-[1.35] text-[var(--text-primary)]">
                        {blog.title}
                      </div>
                      <div className="mt-1 text-[12px] text-[var(--text-muted)] break-all">
                        /blog/{slugify(blog.slug)}
                      </div>
                    </div>

                    {blog.featured ? (
                      <span className="shrink-0 mt-0.5 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-[var(--green-600)] text-[var(--text-white)]">
                        Featured
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3 mt-3 sm:mt-0">
                  <span className="inline-flex text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)]">
                    {blog.tag}
                  </span>
                </div>

                <div className="col-span-6 sm:col-span-2 mt-3 sm:mt-0 text-[13px] text-[var(--text-secondary)]">
                  {formatDisplayDate(blog.publishedAt)}
                </div>

                <div className="col-span-12 sm:col-span-1 mt-3 sm:mt-0 flex sm:justify-end">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-[13px] font-bold text-[var(--blue-700)] hover:underline"
                    target="_blank"
                  >
                    View
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
