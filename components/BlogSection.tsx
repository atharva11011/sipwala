import Link from "next/link";
import {
  estimateReadTimeMinutes,
  formatDisplayDate,
  formatReadTime,
  getAllBlogs,
} from "@/lib/blogStore";

export default async function BlogSection() {
  const blogs = (await getAllBlogs()).slice(0, 3);

  return (
    <section className="bg-[var(--gray-50)] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center rounded-[20px] border border-[var(--blue-200)] bg-[var(--blue-50)] px-[14px] py-[5px] text-[11px] font-bold tracking-[0.4px] text-[var(--blue-700)]">
              From Our Desk
            </div>
            <h2 className="font-headline text-[28px] font-extrabold leading-[1.15] tracking-tight text-[var(--text-primary)] md:text-[44px]">
              Latest Market Insights
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-muted)]">
              Practical investment notes, SIP guidance, and financial planning
              ideas written for long-term wealth builders.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--blue-700)] px-5 py-3 text-[13px] font-bold text-[var(--text-white)] transition-all hover:gap-3 hover:bg-[var(--navy-950)]"
          >
            View all articles
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>

        {blogs.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-[var(--borderSoft)] bg-[var(--surface)] p-6 text-[var(--text-muted)]">
            No blogs published yet.
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
              const readTime = formatReadTime(
                estimateReadTimeMinutes(
                  `${blog.title} ${blog.excerpt} ${blog.content}`,
                ),
              );

              return (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--borderSoft)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-200)] hover:shadow-lg"
                >
                  <div className="relative h-36 overflow-hidden bg-[rgb(var(--blue-700-rgb)/0.08)]">
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -right-14 -top-10 h-40 w-40 rounded-full bg-[rgb(var(--blue-700-rgb)/0.06)]" />
                      <div className="absolute -bottom-16 left-8 h-44 w-44 rounded-full bg-[rgb(var(--green-600-rgb)/0.08)]" />
                    </div>

                    <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                      <span className="rounded-full border border-[var(--blue-200)] bg-[var(--blue-50)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--blue-700)]">
                        {blog.tag}
                      </span>
                      {blog.featured ? (
                        <span className="rounded-full bg-[var(--green-600)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[var(--text-white)]">
                          Featured
                        </span>
                      ) : null}
                    </div>

                    <div className="absolute bottom-5 left-6 text-[34px] font-extrabold leading-none tracking-tight text-[var(--blue-700)]">
                      SIP
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-[12px] font-medium text-[var(--gray-400)]">
                      <span>{formatDisplayDate(blog.publishedAt)}</span>
                      <span className="text-[var(--gray-300)]">.</span>
                      <span>{readTime}</span>
                    </div>

                    <h3 className="mb-4 font-headline text-[18px] font-bold leading-[1.3] text-[var(--text-primary)] transition-colors group-hover:text-[var(--blue-700)]">
                      {blog.title}
                    </h3>

                    <p className="mb-6 line-clamp-3 flex-1 text-[14px] leading-[1.75] text-[var(--text-muted)]">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-bold text-[var(--blue-700)] transition-all group-hover:gap-3">
                      Read Article
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
