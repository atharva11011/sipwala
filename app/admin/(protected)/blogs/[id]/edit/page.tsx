import Link from "next/link";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

import MarkdownEditor from "@/components/admin/MarkdownEditor";
import { requireAdmin } from "@/lib/adminAuth";
import { getBlogById, slugify, updateBlogById } from "@/lib/blogStore";

type PageProps = {
  params: { id: string };
  searchParams?: { error?: string };
};

export const dynamic = "force-dynamic";

function toInputDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

export default async function AdminEditBlogPage({ params, searchParams }: PageProps) {
  const blog = await getBlogById(params.id);
  if (!blog) notFound();

  const error = searchParams?.error ? decodeURIComponent(searchParams.error) : "";

  const updateAction = async (formData: FormData) => {
    "use server";

    requireAdmin();

    const title = String(formData.get("title") ?? "").trim();
    const slug = String(formData.get("slug") ?? "").trim();
    const tag = String(formData.get("tag") ?? "").trim();
    const excerpt = String(formData.get("excerpt") ?? "").trim();
    const content = String(formData.get("content") ?? "").trim();
    const featured = Boolean(formData.get("featured"));

    const publishedAtRaw = String(formData.get("publishedAt") ?? "").trim();
    const publishedAt = publishedAtRaw ? new Date(publishedAtRaw).toISOString() : undefined;

    try {
      const updated = await updateBlogById(params.id, {
        title,
        slug: slug || undefined,
        tag,
        excerpt,
        content,
        featured,
        publishedAt,
      });

      revalidatePath("/");
      revalidatePath("/blog");
      revalidatePath(`/blog/${slugify(blog.slug)}`);
      revalidatePath(`/blog/${slugify(updated.slug)}`);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to update blog";
      redirect(`/admin/blogs/${params.id}/edit?error=${encodeURIComponent(message)}`);
    }

    redirect("/admin/blogs");
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-4xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-headline text-[22px] sm:text-[26px] font-extrabold tracking-tight text-[var(--text-primary)]">
            Edit Blog
          </h1>
          <p className="mt-2 text-[14px] leading-[1.75] text-[var(--text-muted)]">
            Update your post (content supports Markdown).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/admin/blogs/${params.id}/view`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-bold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--blue-200)] hover:text-[var(--blue-700)] transition-colors"
          >
            Preview
            <span className="material-symbols-outlined text-[16px]">visibility</span>
          </Link>

          <Link
            href="/admin/blogs"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-[var(--blue-700)] hover:gap-3 transition-all"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back
          </Link>
        </div>
      </div>

      {error ? (
        <div className="mt-6 rounded-2xl border border-[rgb(var(--red-600-rgb)/0.25)] bg-[rgb(var(--red-50-rgb)/0.55)] px-4 py-3 text-[13px] leading-[1.7] text-[rgb(var(--red-700-rgb)/0.95)]">
          {error}
        </div>
      ) : null}

      <form action={updateAction} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
              Title
            </label>
            <input
              name="title"
              type="text"
              required
              defaultValue={blog.title}
              className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px] leading-[1.75]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
              Slug
            </label>
            <input
              name="slug"
              type="text"
              defaultValue={blog.slug}
              className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px] leading-[1.75]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
              Tag
            </label>
            <input
              name="tag"
              type="text"
              required
              defaultValue={blog.tag}
              className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px] leading-[1.75]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
              Publish Date (optional)
            </label>
            <input
              name="publishedAt"
              type="date"
              defaultValue={toInputDate(blog.publishedAt)}
              className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] outline-none text-[14px] leading-[1.75]"
            />
          </div>
        </div>

        <label className="inline-flex items-center gap-3 select-none">
          <input
            name="featured"
            type="checkbox"
            defaultChecked={blog.featured}
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
            defaultValue={blog.excerpt}
            className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 py-3 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] resize-none outline-none text-[14px] leading-[1.75]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
            Content
          </label>
          <MarkdownEditor
            name="content"
            required
            rows={12}
            defaultValue={blog.content}
            placeholder="Write your blog in Markdown (headings, lists, links, etc.)"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-headline font-bold tracking-tight text-[15px] text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
