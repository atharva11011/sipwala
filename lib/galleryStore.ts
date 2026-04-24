import fs from "node:fs/promises";
import path from "node:path";

export type GalleryImage = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  uploadedAt: string;
  featured: boolean;
};

const galleryPath = path.join(process.cwd(), "data", "gallery.json");

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  try {
    const content = await fs.readFile(galleryPath, "utf-8");
    return JSON.parse(content) as GalleryImage[];
  } catch {
    return [];
  }
}

export async function getFeaturedGalleryImages(): Promise<GalleryImage[]> {
  const images = await getAllGalleryImages();
  return images.filter((img) => img.featured);
}

export async function saveGalleryImages(images: GalleryImage[]): Promise<void> {
  await fs.writeFile(galleryPath, JSON.stringify(images, null, 2));
}

export async function addGalleryImage(image: GalleryImage): Promise<void> {
  const images = await getAllGalleryImages();
  images.push(image);
  await saveGalleryImages(images);
}

export async function deleteGalleryImageById(id: string): Promise<void> {
  const images = await getAllGalleryImages();
  const filtered = images.filter((img) => img.id !== id);
  await saveGalleryImages(filtered);
}

export async function updateGalleryImage(
  id: string,
  updates: Partial<Omit<GalleryImage, "id" | "imageUrl">>
): Promise<void> {
  const images = await getAllGalleryImages();
  const image = images.find((img) => img.id === id);
  if (!image) throw new Error("Image not found");
  
  Object.assign(image, updates);
  await saveGalleryImages(images);
}
