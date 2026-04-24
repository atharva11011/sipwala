import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/adminAuth";
import { addGalleryImage } from "@/lib/galleryStore";
import type { GalleryImage } from "@/lib/galleryStore";

export async function POST(req: Request) {
  try {
    requireAdmin();

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const title = String(formData.get("title") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const category = String(formData.get("category") ?? "events").trim();
    const featured = String(formData.get("featured") ?? "false") === "true";

    if (!file) {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }

    if (!title || !description) {
      return Response.json(
        { error: "Missing title or description" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return Response.json(
        { error: "File must be an image" },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return Response.json(
        { error: "File size must be less than 5MB" },
        { status: 400 }
      );
    }

    // Create gallery directory if it doesn't exist
    const galleryDir = join(process.cwd(), "public", "gallery");
    await mkdir(galleryDir, { recursive: true });

    // Generate unique filename
    const timestamp = Date.now();
    const ext = file.name.split(".").pop();
    const filename = `gallery-${timestamp}.${ext}`;
    const filepath = join(galleryDir, filename);

    // Save file to public/gallery
    const bytes = await file.arrayBuffer();
    await writeFile(filepath, Buffer.from(bytes));

    // Create gallery entry
    const imageUrl = `/gallery/${filename}`;
    const newImage: GalleryImage = {
      id: `gallery-${timestamp}`,
      title,
      description,
      imageUrl,
      category,
      featured,
      uploadedAt: new Date().toISOString(),
    };

    await addGalleryImage(newImage);
    revalidatePath("/about");

    return Response.json(newImage, { status: 201 });
  } catch (error) {
    console.error("Gallery upload error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
