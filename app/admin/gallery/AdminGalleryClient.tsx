"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { GalleryImage } from "@/lib/galleryStore";

type Props = {
  images: GalleryImage[];
};

export default function AdminGalleryClient({ images }: Props) {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [category, setCategory] = useState("events");
  const [featured, setFeatured] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editCategory, setEditCategory] = useState("events");
  const [editFeatured, setEditFeatured] = useState(false);
  const [isEditingSubmitting, setIsEditingSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB");
      return;
    }

    setImageFile(file);
    setError("");
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAddImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !description.trim() || !imageFile) {
      setError("Please fill in all fields and select an image");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("featured", String(featured));

      const response = await fetch("/api/admin/gallery/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to add image");
      }

      setTitle("");
      setDescription("");
      setImageFile(null);
      setImagePreview("");
      setCategory("events");
      setFeatured(false);
      setSuccess("Image uploaded successfully!");
      setTimeout(() => setSuccess(""), 3000);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteImage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      setError("");
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete image");
      }

      setSuccess("Image deleted successfully!");
      setTimeout(() => setSuccess(""), 3000);
      router.refresh();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Failed to delete image";
      setError(errorMsg);
      console.error("Delete error:", errorMsg);
    }
  };

  const handleEditImage = (image: GalleryImage) => {
    setEditingId(image.id);
    setEditTitle(image.title);
    setEditDescription(image.description);
    setEditCategory(image.category);
    setEditFeatured(image.featured);
  };

  const handleUpdateImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!editTitle.trim() || !editDescription.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setIsEditingSubmitting(true);

    try {
      const response = await fetch("/api/admin/gallery/edit", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          title: editTitle,
          description: editDescription,
          category: editCategory,
          featured: editFeatured,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update image");
      }

      setSuccess("Image updated successfully!");
      setTimeout(() => setSuccess(""), 3000);
      setEditingId(null);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsEditingSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Add Image Form */}
      <div className="bg-gradient-to-br from-[var(--surface)] to-[var(--surface-container)] p-8 md:p-12 rounded-3xl border border-[var(--borderSoft)] shadow-lg">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[var(--blue-50)] flex items-center justify-center">
            <span className="material-symbols-outlined text-[var(--blue-700)] text-2xl">add_photo_alternate</span>
          </div>
          <div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-[var(--text-primary)]">
              Add New Image
            </h2>
            <p className="text-[12px] text-[var(--gray-400)] font-medium">Upload a beautiful photo to your gallery</p>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-[var(--error)] bg-opacity-10 border border-[var(--error)] rounded-xl text-[var(--error)] text-[14px] flex items-start gap-3">
            <span className="material-symbols-outlined text-lg flex-shrink-0 mt-0.5">error</span>
            <div>{error}</div>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-[var(--green-600)] bg-opacity-10 border border-[var(--green-600)] rounded-xl text-[var(--green-700)] text-[14px] flex items-start gap-3">
            <span className="material-symbols-outlined text-lg flex-shrink-0 mt-0.5">check_circle</span>
            <div>{success}</div>
          </div>
        )}

        <form onSubmit={handleAddImage} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[13px] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">title</span>
                Image Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Office Opening Event"
                className="w-full px-4 py-3 border border-[var(--borderSoft)] rounded-xl focus:outline-none focus:border-[var(--blue-700)] focus:ring-2 focus:ring-[var(--blue-200)] bg-[var(--surface-container)] transition-all"
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">category</span>
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 border border-[var(--borderSoft)] rounded-xl focus:outline-none focus:border-[var(--blue-700)] focus:ring-2 focus:ring-[var(--blue-200)] bg-[var(--surface-container)] transition-all"
              >
                <option value="events">Events</option>
                <option value="team">Team</option>
                <option value="office">Office</option>
                <option value="awards">Awards</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">description</span>
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the image..."
              rows={4}
              className="w-full px-4 py-3 border border-[var(--borderSoft)] rounded-xl focus:outline-none focus:border-[var(--blue-700)] focus:ring-2 focus:ring-[var(--blue-200)] bg-[var(--surface-container)] transition-all"
            />
          </div>

          <div>
            <label className="block text-[13px] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">upload_file</span>
              Upload Image
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="image-input"
              />
              <label
                htmlFor="image-input"
                className="flex items-center justify-center w-full px-6 py-12 border-2 border-dashed border-[var(--blue-300)] rounded-2xl cursor-pointer hover:border-[var(--blue-700)] hover:bg-[var(--blue-50)] transition-all duration-300 group"
              >
                {imagePreview ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-[var(--blue-700)] shadow-md">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-[13px] font-bold text-[var(--blue-700)]">
                        {imageFile?.name}
                      </p>
                      <p className="text-[11px] text-[var(--gray-400)]">
                        {(imageFile?.size ?? 0 / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <p className="text-[11px] text-[var(--blue-600)] mt-1 font-medium">Click to change</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--blue-100)] mb-3 group-hover:bg-[var(--blue-200)] transition-colors">
                      <span className="material-symbols-outlined text-4xl text-[var(--blue-700)]">
                        cloud_upload
                      </span>
                    </div>
                    <p className="text-[15px] font-bold text-[var(--text-primary)] mb-1">
                      Drag your image here or click
                    </p>
                    <p className="text-[12px] text-[var(--gray-400)]">
                      PNG, JPG, WebP • Max 5MB
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-5 h-5 rounded-lg border border-[var(--borderSoft)] accent-[var(--blue-700)] cursor-pointer"
              />
              <div>
                <span className="text-[13px] font-bold text-[var(--text-primary)]">
                  Mark as Featured
                </span>
                <p className="text-[11px] text-[var(--gray-400)]">Show on gallery cover</p>
              </div>
            </label>
          </div>

          <button
            type="submit"
            disabled={isUploading}
            className="w-full bg-gradient-to-r from-[var(--blue-700)] to-[var(--blue-600)] text-[var(--text-white)] py-4 rounded-xl font-bold text-[15px] hover:shadow-lg hover:from-[var(--blue-800)] hover:to-[var(--blue-700)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
          >
            {isUploading ? (
              <>
                <span className="material-symbols-outlined text-lg animate-spin">hourglass_empty</span>
                Uploading...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">upload</span>
                Upload Image
              </>
            )}
          </button>
        </form>
      </div>

      {/* Gallery Images Section */}
      <div className="bg-gradient-to-br from-[var(--surface)] to-[var(--surface-container)] p-8 md:p-12 rounded-3xl border border-[var(--borderSoft)] shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[var(--green-50)] flex items-center justify-center flex-shrink-0 mt-1">
              <span className="material-symbols-outlined text-[var(--green-700)] text-3xl">collections</span>
            </div>
            <div>
              <h2 className="text-[32px] md:text-[36px] font-bold text-[var(--text-primary)] leading-tight">
                Gallery Images
              </h2>
              <p className="text-[14px] text-[var(--gray-400)] font-medium mt-1">{images.length} {images.length === 1 ? "image" : "images"} in gallery</p>
            </div>
          </div>
          {images.length > 0 && (
            <div className="px-5 py-3 rounded-full bg-gradient-to-r from-[var(--blue-50)] to-[var(--blue-100)] text-[var(--blue-700)] font-bold text-[16px] text-center md:text-left whitespace-nowrap">
              {images.length} Total
            </div>
          )}
        </div>

        {images.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--gray-100)] mb-4">
              <span className="material-symbols-outlined text-4xl text-[var(--gray-400)]">collections</span>
            </div>
            <p className="text-[var(--text-secondary)] text-[16px] font-medium">
              No images yet. Add your first image above!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group bg-[var(--surface-container)] border border-[var(--borderSoft)] rounded-2xl overflow-hidden hover:border-[var(--blue-700)] hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative w-full h-48 bg-[var(--gray-100)] overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {image.featured && (
                    <div className="absolute top-3 right-3 bg-[var(--green-600)] text-[var(--text-white)] text-[10px] font-bold uppercase px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                      <span className="material-symbols-outlined text-xs">star</span>
                      Featured
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-[var(--blue-600)] text-[var(--text-white)] text-[10px] font-bold uppercase px-3 py-1.5 rounded-full">
                    {image.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[15px] text-[var(--text-primary)] mb-2 line-clamp-2">
                    {image.title}
                  </h3>
                  <p className="text-[13px] text-[var(--text-secondary)] line-clamp-2 mb-4 flex-1">
                    {image.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--borderSoft)]">
                    <span className="text-[11px] text-[var(--gray-400)] font-medium">
                      {new Date(image.uploadedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => handleEditImage(image)}
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-[var(--blue-600)] to-[var(--blue-700)] text-[var(--text-white)] text-[13px] font-bold rounded-lg hover:shadow-lg hover:from-[var(--blue-700)] hover:to-[var(--blue-800)] transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">edit</span>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="flex-1 px-4 py-3 bg-[var(--error)] bg-opacity-15 text-[var(--error)] text-[13px] font-bold rounded-lg hover:bg-opacity-25 hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group border border-[var(--error)] border-opacity-20"
                    >
                      <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">delete</span>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--surface)] rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[var(--borderSoft)]">
            <div className="sticky top-0 bg-gradient-to-r from-[var(--blue-700)] to-[var(--blue-600)] p-6 flex items-center justify-between border-b border-[var(--borderSoft)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--text-white)] bg-opacity-20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">edit</span>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] text-white">Edit Image</h3>
                  <p className="text-[12px] text-blue-100">Update image details</p>
                </div>
              </div>
              <button
                onClick={() => setEditingId(null)}
                className="text-white hover:bg-[var(--text-white)] hover:bg-opacity-20 p-2 rounded-lg transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleUpdateImage} className="p-6 space-y-6">
              {error && (
                <div className="p-4 bg-[var(--error)] bg-opacity-10 border border-[var(--error)] rounded-xl text-[var(--error)] text-[14px] flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg flex-shrink-0 mt-0.5">error</span>
                  <div>{error}</div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">title</span>
                    Image Title
                  </label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full px-4 py-3 border border-[var(--borderSoft)] rounded-xl focus:outline-none focus:border-[var(--blue-700)] focus:ring-2 focus:ring-[var(--blue-200)] bg-[var(--surface-container)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">category</span>
                    Category
                  </label>
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-[var(--borderSoft)] rounded-xl focus:outline-none focus:border-[var(--blue-700)] focus:ring-2 focus:ring-[var(--blue-200)] bg-[var(--surface-container)] transition-all"
                  >
                    <option value="events">Events</option>
                    <option value="team">Team</option>
                    <option value="office">Office</option>
                    <option value="awards">Awards</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">description</span>
                  Description
                </label>
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-[var(--borderSoft)] rounded-xl focus:outline-none focus:border-[var(--blue-700)] focus:ring-2 focus:ring-[var(--blue-200)] bg-[var(--surface-container)] transition-all"
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-[var(--gray-50)] rounded-xl border border-[var(--borderSoft)]">
                <input
                  type="checkbox"
                  checked={editFeatured}
                  onChange={(e) => setEditFeatured(e.target.checked)}
                  id="edit-featured"
                  className="w-5 h-5 rounded-lg border border-[var(--borderSoft)] accent-[var(--blue-700)] cursor-pointer"
                />
                <label htmlFor="edit-featured" className="flex-1 cursor-pointer">
                  <span className="text-[13px] font-bold text-[var(--text-primary)]">
                    Mark as Featured
                  </span>
                  <p className="text-[11px] text-[var(--gray-400)]">Show on gallery cover</p>
                </label>
              </div>

              <div className="flex gap-3 pt-4 border-t border-[var(--borderSoft)]">
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="flex-1 px-4 py-3 border border-[var(--borderSoft)] text-[var(--text-primary)] text-[13px] font-bold rounded-lg hover:bg-[var(--gray-50)] hover:border-[var(--gray-300)] transition-all group"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isEditingSubmitting}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-[var(--blue-700)] to-[var(--blue-600)] text-[var(--text-white)] text-[13px] font-bold rounded-lg hover:shadow-lg hover:from-[var(--blue-800)] hover:to-[var(--blue-700)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isEditingSubmitting ? (
                    <>
                      <span className="material-symbols-outlined text-sm animate-spin">hourglass_empty</span>
                      Saving...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">save</span>
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
