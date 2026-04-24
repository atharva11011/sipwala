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

    // On Vercel: Cannot delete (read-only filesystem)
    // Solution: Edit public/data/gallery.json manually in GitHub
    
    if (process.env.VERCEL === "1") {
      return Response.json({
        error: "Vercel is read-only. To delete images: 1) Edit public/data/gallery.json in GitHub, 2) Remove the image entry, 3) Commit & push. The gallery will update automatically.",
        success: false,
        instruction: "Edit gallery.json in GitHub → Remove the entry → Commit → Done!"
      }, { status: 403 });
    }

    // Local development: Use filesystem
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
