import AdminGalleryClient from "./AdminGalleryClient";
import { getAllGalleryImages } from "@/lib/galleryStore";
import { requireAdmin } from "@/lib/adminAuth";

export default async function AdminGalleryPage() {
  requireAdmin();
  const images = await getAllGalleryImages();

  return (
    <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div className="space-y-8">
      <div className="pb-6 border-b border-[var(--borderSoft)]">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--blue-600)] to-[var(--blue-700)] flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-white text-3xl">collections</span>
          </div>
          <div>
            <h1 className="font-headline text-[40px] font-extrabold text-[var(--text-primary)]">
              Photo Gallery
            </h1>
            <p className="text-[14px] text-[var(--gray-400)] font-medium">
              Upload and manage photos for the gallery section
            </p>
          </div>
        </div>
      </div>

      <AdminGalleryClient images={images} />
      </div>
    </div>
  );
}
