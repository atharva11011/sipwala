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

    await deleteGalleryImageById(id);
    revalidatePath("/about");

    return Response.json({ success: true });
  } catch (error) {
    console.error("Delete gallery error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
