import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/adminAuth";
import { deleteGalleryImageById } from "@/lib/galleryStore";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    requireAdmin();

    const id = params.id;
    if (!id) {
      return Response.json({ error: "Missing ID" }, { status: 400 });
    }

    console.log(`Attempting to delete gallery image: ${id}`);
    await deleteGalleryImageById(id);
    
    try {
      revalidatePath("/about");
      revalidatePath("/admin/gallery");
    } catch (err) {
      console.warn("Could not revalidate paths:", err);
    }

    console.log(`Successfully deleted gallery image: ${id}`);
    return Response.json({ success: true, message: "Image deleted successfully" });
  } catch (error) {
    console.error("Delete gallery error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to delete image";
    return Response.json(
      { error: errorMessage, success: false },
      { status: 500 }
    );
  }
}
