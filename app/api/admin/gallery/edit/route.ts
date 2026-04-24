import { requireAdmin } from "@/lib/adminAuth";
import { updateGalleryImage } from "@/lib/galleryStore";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    requireAdmin();

    const { id, title, description, category, featured } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Image ID is required" },
        { status: 400 }
      );
    }

    if (!title?.trim() || !description?.trim()) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    await updateGalleryImage(id, {
      title: title.trim(),
      description: description.trim(),
      category: category || "other",
      featured: featured === true,
    });

    revalidatePath("/about");
    revalidatePath("/admin/gallery");

    return NextResponse.json(
      { message: "Image updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Gallery update error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update image" },
      { status: 500 }
    );
  }
}
