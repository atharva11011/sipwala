// import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tag: string;
  featured: boolean;
  publishedAt: string; // ISO date string
  updatedAt?: string; // ISO date string
};

export type CreateBlogInput = {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  tag: string;
  featured?: boolean;
  publishedAt?: string; // ISO date string
};

const BLOGS_FILE_PATH = path.join(process.cwd(), "data", "blogs.json");

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isBlogPost(value: unknown): value is BlogPost {
  if (!isRecord(value)) return false;

  return (
    typeof value.id === "string" &&
    typeof value.slug === "string" &&
    typeof value.title === "string" &&
    typeof value.excerpt === "string" &&
    typeof value.content === "string" &&
    typeof value.tag === "string" &&
    typeof value.featured === "boolean" &&
    typeof value.publishedAt === "string"
  );
}

async function ensureBlogsFileExists() {
  const dir = path.dirname(BLOGS_FILE_PATH);
  await fs.mkdir(dir, { recursive: true });

  try {
    await fs.access(BLOGS_FILE_PATH);
  } catch {
    await fs.writeFile(BLOGS_FILE_PATH, "[]\n", "utf8");
  }
}

async function readBlogsUnsafe(): Promise<unknown> {
  await ensureBlogsFileExists();
  const raw = await fs.readFile(BLOGS_FILE_PATH, "utf8");
  return JSON.parse(raw);
}

async function writeBlogs(posts: BlogPost[]) {
  await ensureBlogsFileExists();

  const tmpPath = `${BLOGS_FILE_PATH}.tmp`;
  await fs.writeFile(tmpPath, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
  await fs.rename(tmpPath, BLOGS_FILE_PATH);
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

  return date
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();
}

export function formatDay2(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  return String(date.getDate()).padStart(2, "0");
}

export function estimateReadTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return minutes;
}

export function formatReadTime(minutes: number): string {
  return `${minutes} min read`;
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const parsed = await readBlogsUnsafe();
  if (!Array.isArray(parsed)) return [];

  const posts = parsed.filter(isBlogPost);
  posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return posts;
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
  const title = input.title.trim();
  const excerpt = input.excerpt.trim();
  const content = input.content.trim();
  const tag = input.tag.trim();

  if (!title || !excerpt || !content || !tag) {
    throw new Error("Missing required fields");
  }

  const slug = (input.slug?.trim() ? slugify(input.slug) : slugify(title)).trim();
  if (!slug) throw new Error("Invalid slug");

  const posts = await getAllBlogs();
  if (posts.some((p) => p.slug === slug)) {
    throw new Error("Slug already exists");
  }

  const now = new Date();
  const publishedAt = input.publishedAt?.trim() || now.toISOString();

  const id = crypto.randomUUID();

  const post: BlogPost = {
    id,
    slug,
    title,
    excerpt,
    content,
    tag,
    featured: Boolean(input.featured),
    publishedAt,
    updatedAt: now.toISOString(),
  };

  await writeBlogs([post, ...posts]);
  return post;
}

export async function updateBlogById(
  id: string,
  input: CreateBlogInput,
): Promise<BlogPost> {
  const title = input.title.trim();
  const excerpt = input.excerpt.trim();
  const content = input.content.trim();
  const tag = input.tag.trim();

  if (!title || !excerpt || !content || !tag) {
    throw new Error("Missing required fields");
  }

  const posts = await getAllBlogs();
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) throw new Error("Blog not found");

  const existing = posts[index]!;

  const nextSlug = (
    input.slug?.trim()
      ? slugify(input.slug)
      : slugify(existing.slug || title)
  ).trim();
  if (!nextSlug) throw new Error("Invalid slug");
  if (posts.some((p) => p.slug === nextSlug && p.id !== id)) {
    throw new Error("Slug already exists");
  }

  const publishedAt = input.publishedAt?.trim() || existing.publishedAt;
  const now = new Date();

  const next: BlogPost = {
    ...existing,
    slug: nextSlug,
    title,
    excerpt,
    content,
    tag,
    featured: Boolean(input.featured),
    publishedAt,
    updatedAt: now.toISOString(),
  };

  const updated = [...posts];
  updated[index] = next;
  await writeBlogs(updated);
  return next;
}

export async function deleteBlogById(id: string): Promise<void> {
  const posts = await getAllBlogs();
  const next = posts.filter((p) => p.id !== id);
  await writeBlogs(next);
}
