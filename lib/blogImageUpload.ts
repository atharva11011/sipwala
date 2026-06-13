import { mkdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

function safeImageExtension(file: File): string {
  const fromName = extname(file.name).toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(fromName)) {
    return fromName;
  }

  const fromType = file.type.split("/")[1]?.toLowerCase();
  if (fromType === "jpeg") return ".jpg";
  if (["png", "webp", "gif"].includes(fromType)) return `.${fromType}`;

  return ".jpg";
}

export async function resolveBlogImage(formData: FormData): Promise<string | null> {
  const existingImage = String(formData.get("image") ?? "").trim();
  const imageFile = formData.get("imageFile");

  if (!(imageFile instanceof File) || imageFile.size === 0) {
    return existingImage || null;
  }

  if (!imageFile.type.startsWith("image/")) {
    throw new Error("Blog image must be an image file");
  }

  if (imageFile.size > MAX_IMAGE_SIZE) {
    throw new Error("Blog image must be less than 5MB");
  }

  const blogsDir = join(process.cwd(), "public", "blogs");
  await mkdir(blogsDir, { recursive: true });

  const filename = `blog-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}${safeImageExtension(imageFile)}`;
  const filepath = join(blogsDir, filename);
  const bytes = await imageFile.arrayBuffer();

  await writeFile(filepath, Buffer.from(bytes));

  return `/blogs/${filename}`;
}
