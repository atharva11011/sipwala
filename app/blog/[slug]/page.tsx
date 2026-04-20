import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMark from "@/lib/remarkMark";
import {
  formatDisplayDate,
  formatReadTime,
  getBlogBySlug,
  estimateReadTimeMinutes,
} from "@/lib/blogStore";

export const dynamic = "force-dynamic";

type PageProps = {
  params: { slug: string };
};

export default async function BlogDetailPage({ params }: PageProps) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) notFound();

  const displayDate = formatDisplayDate(blog.publishedAt);
  const readTime = formatReadTime(
    estimateReadTimeMinutes(`${blog.title} ${blog.excerpt} ${blog.content}`),
  );

  return (
    <main className="bg-[var(--gray-50)] py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-5 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[14px] font-bold text-[var(--blue-700)] hover:gap-3 transition-all"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Blog
        </Link>

        <div className="mt-8 bg-[var(--surface)] border border-[var(--borderSoft)] rounded-4xl p-6 sm:p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)]">
              {blog.tag}
            </span>
            {blog.featured ? (
              <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[var(--green-600)] text-[var(--text-white)]">
                Featured
              </span>
            ) : null}
          </div>

          <h1 className="mt-5 font-headline text-[28px] sm:text-[36px] md:text-[44px] font-extrabold tracking-tight leading-[1.15] text-[var(--text-primary)]">
            {blog.title}
          </h1>

          <div className="mt-4 text-[13px] text-[var(--text-muted)] font-medium flex flex-wrap items-center gap-2">
            <span>{displayDate}</span>
            <span className="text-[var(--gray-300)]">·</span>
            <span>{readTime}</span>
          </div>

          <p className="mt-6 text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            {blog.excerpt}
          </p>

          <div className="mt-10 border-t border-[var(--borderSoft)] pt-10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMark]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-8 mb-3 font-headline text-[22px] sm:text-[24px] font-extrabold tracking-tight text-[var(--text-primary)]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-7 mb-2 font-headline text-[18px] font-bold text-[var(--text-primary)]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-[15px] leading-[1.9] text-[var(--text-secondary)] mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 space-y-2 mb-5 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 space-y-2 mb-5 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li>{children}</li>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="font-bold text-[var(--blue-700)] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {children}
                  </a>
                ),
                mark: ({ children }) => (
                  <mark className="rounded px-1 bg-[rgb(var(--gold-base-rgb)/0.18)] text-[var(--text-secondary)]">
                    {children}
                  </mark>
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}
