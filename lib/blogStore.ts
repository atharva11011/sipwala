export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tag: string;
  featured: boolean;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  image?: string | null;
};

export type CreateBlogInput = {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  tag: string;
  featured?: boolean;
  publishedAt?: string;
  image?: string | null;
};

function getBlogsApiUrl(): string {
  const explicit = process.env.API_BASE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const backend =
    process.env.BACKEND_URL?.trim() ||
    process.env.NEXT_PUBLIC_BACKEND_URL?.trim();

  if (!backend) {
    throw new Error(
      "Blog API URL is not configured. Set API_BASE_URL or NEXT_PUBLIC_BACKEND_URL.",
    );
  }

  return `${backend.replace(/\/$/, "")}/api/blogs`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function readBoolean(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.toLowerCase() === "true";
  return Boolean(value);
}

function readOptionalImage(value: Record<string, unknown>): string | null {
  const image =
    readString(value.image) ||
    readString(value.imageUrl) ||
    readString(value.coverImage) ||
    readString(value.featuredImage) ||
    readString(value.thumbnail);

  return image || null;
}

function extractPayload(value: unknown): unknown {
  if (!isRecord(value)) return value;

  if ("data" in value) return value.data;
  if ("blog" in value) return value.blog;
  if ("post" in value) return value.post;

  return value;
}

function normalizeBlog(value: unknown): BlogPost | null {
  if (!isRecord(value)) return null;

  const id = readString(value.id) || readString(value._id);
  const title = readString(value.title);
  const slug = readString(value.slug) || slugify(title);
  const excerpt =
    readString(value.excerpt) ||
    readString(value.description) ||
    readString(value.summary);
  const content = readString(value.content) || readString(value.body);
  const tag =
    readString(value.tag) ||
    readString(value.category) ||
    readString(value.type) ||
    "Blog";
  const publishedAt =
    readString(value.publishedAt) ||
    readString(value.createdAt) ||
    readString(value.date) ||
    new Date().toISOString();

  if (!id || !slug || !title) return null;

  return {
    id,
    slug,
    title,
    excerpt,
    content,
    tag,
    featured: readBoolean(value.featured),
    publishedAt,
    updatedAt: readString(value.updatedAt) || undefined,
    author: readString(value.author) || undefined,
    image: readOptionalImage(value),
  };
}

async function readJson(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text.trim()) return null;

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

async function requestBlogApi(
  path = "",
  init?: RequestInit,
): Promise<unknown> {
  const response = await fetch(`${getBlogsApiUrl()}${path}`, {
    cache: "no-store",
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  const json = await readJson(response);

  if (!response.ok) {
    const message =
      isRecord(json) && typeof json.message === "string"
        ? json.message
        : `Blog API request failed with status ${response.status}`;

    throw new Error(message);
  }

  return extractPayload(json);
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

export function formatDisplayDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatMonthShort(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
}

export function formatDay2(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  return String(date.getDate()).padStart(2, "0");
}

export function estimateReadTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatReadTime(minutes: number): string {
  return `${minutes} min read`;
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const payload = await requestBlogApi();
    const rows = Array.isArray(payload) ? payload : [];

    return rows
      .map(normalizeBlog)
      .filter((blog): blog is BlogPost => Boolean(blog))
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
  } catch (error) {
    console.error("Blog fetch error:", error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogs();
  return posts.find((p) => p.slug === slug) ?? null;
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  const posts = await getAllBlogs();
  return posts.find((p) => p.id === id) ?? null;
}

export async function createBlog(input: CreateBlogInput): Promise<BlogPost> {
  const payload = await requestBlogApi("", {
    method: "POST",
    body: JSON.stringify(input),
  });

  const blog = normalizeBlog(payload);
  if (blog) return blog;

  const posts = await getAllBlogs();
  const slug = input.slug ? slugify(input.slug) : slugify(input.title);
  return posts.find((post) => post.slug === slug) ?? {
    id: slug,
    slug,
    title: input.title,
    excerpt: input.excerpt,
    content: input.content,
    tag: input.tag,
    featured: Boolean(input.featured),
    publishedAt: input.publishedAt ?? new Date().toISOString(),
    image: input.image ?? null,
  };
}

export async function updateBlogById(
  id: string,
  input: CreateBlogInput,
): Promise<BlogPost> {
  const payload = await requestBlogApi(`/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(input),
  });

  const blog = normalizeBlog(payload);
  if (blog) return blog;

  const updated = await getBlogById(id);
  if (!updated) throw new Error("Blog not found after update");
  return updated;
}

export async function deleteBlogById(id: string): Promise<void> {
  await requestBlogApi(`/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}
