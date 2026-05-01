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

// Use public directory for gallery data (works on Vercel)
const galleryPath = path.join(process.cwd(), "public", "data", "gallery.json");

function getBackendBaseUrl(): string | null {
  const raw = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!raw) return null;
  return raw.replace(/\/+$/, "");
}

async function backendFetchJson<T>(pathName: string, init?: RequestInit): Promise<T> {
  const baseUrl = getBackendBaseUrl();
  if (!baseUrl) {
    throw new Error(
      "Backend URL is not configured. Set NEXT_PUBLIC_BACKEND_URL (and optionally BACKEND_URL)."
    );
  }

  const res = await fetch(`${baseUrl}${pathName}`, {
    cache: "no-store",
    ...init,
    headers: {
      "content-type": "application/json",
      ...(init?.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const message = text || res.statusText || "Request failed";
    throw new Error(`${res.status} ${message}`);
  }

  return (await res.json()) as T;
}

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  const backendUrl = getBackendBaseUrl();
  if (backendUrl) {
    return backendFetchJson<GalleryImage[]>("/api/gallery", { method: "GET" });
  }

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
  try {
    // Ensure directory exists
    const dir = path.dirname(galleryPath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(galleryPath, JSON.stringify(images, null, 2));
  } catch (error) {
    console.error("Error saving gallery images:", error);
    // On Vercel, file writes will fail - provide helpful message
    if (process.env.VERCEL === "1") {
      throw new Error("Gallery storage is read-only on this deployment. Use a cloud storage service like Cloudinary or AWS S3.");
    }
    throw error;
  }
}

export async function addGalleryImage(image: GalleryImage): Promise<void> {
  const backendUrl = getBackendBaseUrl();
  if (backendUrl) {
    await backendFetchJson<GalleryImage>("/api/gallery", {
      method: "POST",
      body: JSON.stringify(image),
    });
    return;
  }

  const images = await getAllGalleryImages();
  images.push(image);
  await saveGalleryImages(images);
}

export async function deleteGalleryImageById(id: string): Promise<void> {
  const backendUrl = getBackendBaseUrl();
  if (backendUrl) {
    await backendFetchJson<{ success: boolean }>(`/api/gallery/${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    return;
  }

  const images = await getAllGalleryImages();
  const filtered = images.filter((img) => img.id !== id);
  await saveGalleryImages(filtered);
}

export async function updateGalleryImage(
  id: string,
  updates: Partial<Omit<GalleryImage, "id" | "imageUrl">>
): Promise<void> {
  const backendUrl = getBackendBaseUrl();
  if (backendUrl) {
    if (!updates.title?.trim() || !updates.description?.trim()) {
      throw new Error("Title and description are required");
    }

    await backendFetchJson<GalleryImage>(`/api/gallery/${encodeURIComponent(id)}`, {
      method: "PUT",
      body: JSON.stringify({
        title: updates.title,
        description: updates.description,
        category: updates.category,
        featured: updates.featured,
      }),
    });
    return;
  }

  const images = await getAllGalleryImages();
  const image = images.find((img) => img.id === id);
  if (!image) throw new Error("Image not found");
  
  Object.assign(image, updates);
  await saveGalleryImages(images);
}
