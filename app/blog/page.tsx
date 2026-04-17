import Link from "next/link";
import {
  formatDay2,
  formatDisplayDate,
  formatMonthShort,
  formatReadTime,
  getAllBlogs,
  estimateReadTimeMinutes,
} from "@/lib/blogStore";

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  const blogs = await getAllBlogs();

  return (
    <main className="bg-[var(--gray-50)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[0.4px] bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
            From Our Desk
          </div>
          <h1 className="font-headline text-[28px] md:text-[44px] font-extrabold tracking-tight leading-[1.15] text-[var(--text-primary)] mb-[14px]">
            Our Blog
          </h1>
          <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-xl">
            Market insights, investment wisdom, and financial clarity — written
            for real people.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="mt-10 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl p-6 text-[var(--text-muted)]">
            No blogs published yet.
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {blogs.map((blog) => {
              const displayDate = formatDisplayDate(blog.publishedAt);
              const month = formatMonthShort(blog.publishedAt);
              const day = formatDay2(blog.publishedAt);
              const readTime = formatReadTime(
                estimateReadTimeMinutes(`${blog.title} ${blog.excerpt} ${blog.content}`),
              );

              return (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="bg-[var(--surface)] rounded-3xl overflow-hidden border border-[var(--borderSoft)] hover:border-[var(--blue-200)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative h-36 overflow-hidden bg-[rgb(var(--blue-700-rgb)/0.08)]">
                    {blog.featured ? (
                      <div className="absolute top-4 left-4 bg-[var(--green-600)] text-[var(--text-white)] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                        Featured
                      </div>
                    ) : null}

                    <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)]">
                      {blog.tag}
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-10 -right-14 w-40 h-40 rounded-full bg-[rgb(var(--blue-700-rgb)/0.05)]" />
                      <div className="absolute top-10 -right-8 w-28 h-28 rounded-full bg-[rgb(var(--blue-700-rgb)/0.05)]" />
                      <div className="absolute -bottom-14 left-10 w-44 h-44 rounded-full bg-[rgb(var(--blue-700-rgb)/0.05)]" />
                      <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[rgb(var(--blue-700-rgb)/0.05)]" />
                    </div>

                    <div className="absolute bottom-4 left-6 leading-none">
                      <div className="text-5xl font-extrabold tracking-tighter text-[var(--blue-700)]">
                        {day}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest opacity-70 text-[var(--blue-700)]">
                        {month}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="text-[12px] text-[var(--gray-400)] font-medium mb-3 flex items-center gap-2">
                      <span>{displayDate}</span>
                      <span className="text-[var(--gray-300)]">·</span>
                      <span>{readTime}</span>
                    </div>

                    <h2 className="font-headline font-bold text-[18px] leading-[1.3] text-[var(--text-primary)] mb-4 group-hover:text-[var(--blue-700)] transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-[14px] leading-[1.75] text-[var(--text-muted)] line-clamp-3 flex-1 mb-6">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-[14px] font-bold flex items-center gap-1.5 group-hover:gap-3 transition-all text-[var(--blue-700)]">
                        Read Article
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </div>

                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[var(--text-white)] bg-[var(--blue-700)]"
                        aria-label="Sipwala editorial team"
                        title="Sipwala editorial team"
                      >
                        S
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
