import Link from "next/link";

type Blog = {
  date: string;
  month: string;
  day: string;
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  featured: boolean;
};

const blogs: Blog[] = [
  {
    date: "March 24, 2026",
    month: "MAR",
    day: "24",
    slug: "corrections-dont-break-portfolios",
    title: "Corrections Don't Break Portfolios, Reactions Do",
    excerpt:
      "Market corrections are normal. The real damage to your wealth happens not during the fall — but in the panic that follows it. Here's why staying invested always wins.",
    tag: "Market Insight",
    readTime: "4 min read",
    featured: true,
  },
  {
    date: "March 6, 2026",
    month: "MAR",
    day: "06",
    slug: "sip-laziness-pays-off",
    title: "SIP Is the Only Place Where Laziness Pays Off",
    excerpt:
      "You don't need to time the market, watch every tick, or read every report. Set up a SIP, forget about it, and let compounding do the heavy lifting for you.",
    tag: "SIP & MF",
    readTime: "3 min read",
    featured: false,
  },
  {
    date: "February 13, 2026",
    month: "FEB",
    day: "13",
    slug: "gen-z-emotionally-intelligent-investors",
    title: "Why Gen Z Might Become the Most Emotionally Intelligent Investors Yet",
    excerpt:
      "Gen Z grew up during financial crises and a pandemic. That exposure may have given them something previous generations lacked — a healthy respect for uncertainty and risk.",
    tag: "Gen Z & Finance",
    readTime: "5 min read",
    featured: false,
  },
];

export default function BlogSection() {
  return (
    <section
      className="bg-[var(--gray-50)] py-16 md:py-24"
      role="region"
      aria-labelledby="blog-title"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[0.4px] bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
              From Our Desk
            </div>
            <h2
              id="blog-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)] mb-[14px]"
            >
              Our Blog
            </h2>
            <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-sm">
              Market insights, investment wisdom, and financial clarity — written
              for real people.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-[14px] font-bold text-[var(--blue-700)] flex items-center gap-2 hover:gap-3 transition-all"
          >
            Read All Blogs
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="bg-[var(--surface)] rounded-3xl overflow-hidden border border-[var(--borderSoft)] hover:border-[var(--blue-200)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div
                className="relative h-36 overflow-hidden bg-[rgb(var(--blue-700-rgb)/0.08)]"
              >
                {blog.featured ? (
                  <div className="absolute top-4 left-4 bg-[var(--green-600)] text-[var(--text-white)] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    Featured
                  </div>
                ) : null}

                <div
                  className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)]"
                >
                  {blog.tag}
                </div>

                {/* Decorative circles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute -top-10 -right-14 w-40 h-40 rounded-full bg-[rgb(var(--blue-700-rgb)/0.05)]"
                  />
                  <div
                    className="absolute top-10 -right-8 w-28 h-28 rounded-full bg-[rgb(var(--blue-700-rgb)/0.05)]"
                  />
                  <div
                    className="absolute -bottom-14 left-10 w-44 h-44 rounded-full bg-[rgb(var(--blue-700-rgb)/0.05)]"
                  />
                  <div
                    className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[rgb(var(--blue-700-rgb)/0.05)]"
                  />
                </div>

                <div className="absolute bottom-4 left-6 leading-none">
                  <div className="text-5xl font-extrabold tracking-tighter text-[var(--blue-700)]">
                    {blog.day}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-70 text-[var(--blue-700)]">
                    {blog.month}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="text-[12px] text-[var(--gray-400)] font-medium mb-3 flex items-center gap-2">
                  <span>{blog.date}</span>
                  <span className="text-[var(--gray-300)]">·</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="font-headline font-bold text-[18px] leading-[1.3] text-[var(--text-primary)] mb-4 group-hover:text-[var(--blue-700)] transition-colors">
                  {blog.title}
                </h3>

                <p className="text-[14px] leading-[1.75] text-[var(--text-muted)] line-clamp-3 flex-1 mb-6">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div
                    className="text-[14px] font-bold flex items-center gap-1.5 group-hover:gap-3 transition-all text-[var(--blue-700)]"
                  >
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
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="btn-primary px-10 py-4 border-2 border-[var(--blue-700)] text-[var(--blue-700)] font-headline font-bold rounded-xl hover:bg-[var(--blue-700)] hover:text-[var(--text-white)] transition-all duration-300 inline-flex items-center gap-2"
          >
            Read All Blogs
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
