import { requireAdmin } from "@/lib/adminAuth";

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

    const backendUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;

    // If deployed on Vercel without a backend DB, filesystem deletes are not possible.
    if (process.env.VERCEL === "1" && !backendUrl) {
      return Response.json({
        error: "Vercel is read-only. To delete images: 1) Edit public/data/gallery.json in GitHub, 2) Remove the image entry, 3) Commit & push. The gallery will update automatically.",
        success: false,
        instruction: "Edit gallery.json in GitHub → Remove the entry → Commit → Done!"
      }, { status: 403 });
    }

    // Backend (preferred) or local filesystem fallback
    const { deleteGalleryImageById } = await import("@/lib/galleryStore");
    await deleteGalleryImageById(id);

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
