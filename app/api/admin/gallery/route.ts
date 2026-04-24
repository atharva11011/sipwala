import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/adminAuth";
import {
  addGalleryImage,
  deleteGalleryImageById,
} from "@/lib/galleryStore";
import type { GalleryImage } from "@/lib/galleryStore";

export async function POST(req: Request) {
  try {
    requireAdmin();

    const body = await req.json();
    const { title, description, imageUrl, category, featured } = body;

    if (!title || !description || !imageUrl || !category) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newImage: GalleryImage = {
      id: `gallery-${Date.now()}`,
      title,
      description,
      imageUrl,
      category,
      featured: featured || false,
      uploadedAt: new Date().toISOString(),
    };

    await addGalleryImage(newImage);
    revalidatePath("/about");

    return Response.json(newImage, { status: 201 });
  } catch (error) {
    console.error("Gallery API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
