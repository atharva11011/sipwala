import type { Metadata } from "next";
import GallerySection from "@/components/GallerySection";
import { getAllGalleryImages } from "@/lib/galleryStore";

export const metadata: Metadata = { title: "Gallery | About Us" };

export default async function AboutPage() {
  const galleryImages = await getAllGalleryImages();
  return (
    <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <GallerySection images={galleryImages} />
    </div>
  );
}
