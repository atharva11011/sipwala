"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import MarkdownEditor from "@/components/admin/MarkdownEditor";
import remarkMark from "@/lib/remarkMark";

type Props = {
  error?: string;
  createAction: (formData: FormData) => void | Promise<void>;
};

function countWords(input: string): number {
  const trimmed = input.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

export default function NewBlogFormClient({ error = "", createAction }: Props) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [tag, setTag] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [featured, setFeatured] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const [showPreview, setShowPreview] = useState(false);

  const isDirty =
    title.trim() !== "" ||
    slug.trim() !== "" ||
    tag.trim() !== "" ||
    publishedAt.trim() !== "" ||
    featured ||
    excerpt.trim() !== "" ||
    content.trim() !== "";

  const isSubmittingRef = useRef(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isDirty || isSubmittingRef.current) return;
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const words = useMemo(() => countWords(content), [content]);
  const readMinutes = useMemo(() => {
    if (words === 0) return 0;
    return Math.max(1, Math.ceil(words / 200));
  }, [words]);

  const inputClassName =
    "w-full h-11 bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px]";

  const textareaClassName =
    "w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px] leading-[1.75]";

  const handleBackClick = (e: React.MouseEvent) => {
    if (!isDirty || isSubmittingRef.current) return;
    const ok = window.confirm("You have unsaved changes. Leave this page?");
    if (!ok) e.preventDefault();
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-4xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-headline text-[22px] sm:text-[26px] font-extrabold tracking-tight text-[var(--text-primary)]">
            New Blog
          </h1>
          <p className="mt-2 text-[14px] leading-[1.75] text-[var(--text-muted)]">
            Publish a new post (content supports Markdown).
          </p>
        </div>

        <Link
          href="/admin/blogs"
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-[14px] font-bold text-[var(--blue-700)] hover:gap-3 transition-all"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back
        </Link>
      </div>

      {error ? (
        <div className="mt-6 rounded-2xl border border-[rgb(var(--red-600-rgb)/0.25)] bg-[rgb(var(--red-50-rgb)/0.55)] px-4 py-3 text-[13px] leading-[1.7] text-[rgb(var(--red-700-rgb)/0.95)]">
          {error}
        </div>
      ) : null}

      <form
        action={createAction}
        onSubmit={() => {
          isSubmittingRef.current = true;
        }}
        className="mt-8 space-y-6 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
              Title
            </label>
            <input
              name="title"
              type="text"
              required
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
              Slug (optional)
            </label>
            <input
              name="slug"
              type="text"
              placeholder="auto-generated-from-title"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className={inputClassName}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
              Tag
            </label>
            <input
              name="tag"
              type="text"
              required
              placeholder="Market Insight"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
              Publish Date (optional)
            </label>
            <input
              name="publishedAt"
              type="date"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
              className={inputClassName}
            />
          </div>
        </div>

        <label className="inline-flex items-center gap-3 select-none">
          <input
            name="featured"
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="w-4 h-4 accent-[var(--blue-700)]"
          />
          <span className="text-[14px] font-medium text-[var(--text-secondary)]">
            Featured
          </span>
        </label>

        <div className="space-y-2">
          <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            required
            rows={3}
            placeholder="Short summary shown on cards"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className={textareaClassName + " resize-none"}
          />
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
              Content
            </label>

            <div className="text-[12px] text-[var(--text-muted)] ml-auto">
              {words > 0 ? (
                <>
                  {words} words{readMinutes ? ` · ~${readMinutes} min read` : ""}
                </>
              ) : (
                <>0 words</>
              )}
            </div>
          </div>

          <div className={showPreview ? "grid grid-cols-1 lg:grid-cols-2 gap-4" : ""}>
            <div>
              <MarkdownEditor
                name="content"
                required
                rows={12}
                placeholder="Write your blog in Markdown (headings, lists, links, etc.)"
                value={content}
                onValueChange={setContent}
                toolbarLeading={
                  <div className="inline-flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowPreview(false)}
                      className={
                        "h-9 px-4 rounded-xl border text-[12px] font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--blue-600-rgb)/0.25)] focus-visible:ring-inset " +
                        (showPreview
                          ? "border-[var(--borderSoft)] bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--surfaceAlt)]"
                          : "border-[var(--blue-200)] bg-[var(--blue-50)] text-[var(--blue-700)]")
                      }
                      aria-pressed={!showPreview}
                    >
                      Write
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPreview(true)}
                      className={
                        "h-9 px-4 rounded-xl border text-[12px] font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--blue-600-rgb)/0.25)] focus-visible:ring-inset " +
                        (showPreview
                          ? "border-[var(--blue-200)] bg-[var(--blue-50)] text-[var(--blue-700)]"
                          : "border-[var(--borderSoft)] bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--surfaceAlt)]")
                      }
                      aria-pressed={showPreview}
                    >
                      Preview
                    </button>
                  </div>
                }
              />
            </div>

            {showPreview ? (
              <div className="rounded-2xl border border-[var(--borderSoft)] bg-[var(--surfaceAlt)] p-4 sm:p-5">
                <div className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)]">
                  Preview
                </div>

                {content.trim() ? (
                  <div className="mt-4">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkMark]}
                      components={{
                        h2: ({ children }) => (
                          <h2 className="mt-7 mb-2 font-headline text-[18px] sm:text-[20px] font-extrabold tracking-tight text-[var(--text-primary)]">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="mt-6 mb-2 font-headline text-[16px] font-bold text-[var(--text-primary)]">
                            {children}
                          </h3>
                        ),
                        p: ({ children }) => (
                          <p className="text-[14px] leading-[1.9] text-[var(--text-secondary)] mb-4">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc pl-6 space-y-2 mb-5 text-[14px] leading-[1.9] text-[var(--text-secondary)]">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal pl-6 space-y-2 mb-5 text-[14px] leading-[1.9] text-[var(--text-secondary)]">
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
                      {content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="mt-4 text-[13px] text-[var(--text-muted)]">
                    Nothing to preview yet.
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>

        <div className="sticky bottom-0 -mx-6 sm:-mx-8 px-6 sm:px-8 py-3 bg-[var(--surface)] border-t border-[var(--borderSoft)] rounded-b-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="text-[12px] text-[var(--text-muted)] min-h-[18px]">
              {isDirty ? "Unsaved changes" : ""}
            </div>

            <button
              type="submit"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center px-8 h-11 rounded-xl font-headline font-bold tracking-tight text-[15px] text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
            >
              Publish Blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
