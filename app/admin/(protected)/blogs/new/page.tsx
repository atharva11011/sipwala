import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/adminAuth";
import { createBlog } from "@/lib/blogStore";
import NewBlogFormClient from "./NewBlogFormClient";

type PageProps = {
  searchParams?: { error?: string };
};

export const dynamic = "force-dynamic";

export default function AdminNewBlogPage({ searchParams }: PageProps) {
  const error = searchParams?.error ? decodeURIComponent(searchParams.error) : "";

  const createAction = async (formData: FormData) => {
    "use server";

    requireAdmin();

    const title = String(formData.get("title") ?? "").trim();
    const slug = String(formData.get("slug") ?? "").trim();
    const tag = String(formData.get("tag") ?? "").trim();
    const excerpt = String(formData.get("excerpt") ?? "").trim();
    const content = String(formData.get("content") ?? "").trim();
    const featured = Boolean(formData.get("featured"));

    const publishedAtRaw = String(formData.get("publishedAt") ?? "").trim();
    const publishedAt = publishedAtRaw
      ? new Date(publishedAtRaw).toISOString()
      : undefined;

    try {
      const post = await createBlog({
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
      revalidatePath(`/blog/${post.slug}`);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to create blog";
      redirect(`/admin/blogs/new?error=${encodeURIComponent(message)}`);
    }

    redirect("/admin/blogs");
  };

  return <NewBlogFormClient error={error} createAction={createAction} />;
}
