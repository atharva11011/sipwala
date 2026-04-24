"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/lib/galleryStore";

type Props = {
  images: GalleryImage[];
};

export default function GallerySection({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(images.map((img) => img.category)))];
  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section
      id="gallery"
      className="bg-[var(--surface)] py-16 md:py-24 scroll-mt-24"
      role="region"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[2px] uppercase bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
            Gallery
          </span>
          <h2
            id="gallery-title"
            className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)] mb-6"
          >
            Moments & Milestones
          </h2>
          <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] max-w-2xl mx-auto">
            Explore our journey through photos and events that define our culture and success.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-[13px] uppercase tracking-wide transition-all ${
                filter === cat
                  ? "bg-[var(--blue-700)] text-[var(--text-white)] shadow-md"
                  : "bg-[var(--gray-100)] text-[var(--text-secondary)] hover:bg-[var(--gray-200)]"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-[var(--gray-100)] aspect-[4/3] border border-[var(--borderSoft)] group-hover:border-[var(--blue-700)] transition-all duration-300">
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                {image.featured && (
                  <div className="absolute top-4 left-4 bg-[var(--green-600)] text-[var(--text-white)] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0,0,0/0.8)] via-[rgb(0,0,0/0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5 text-[var(--text-white)] w-full bg-gradient-to-t from-[rgb(0,0,0/0.5)] to-transparent">
                    <h3 className="font-headline font-bold text-[16px] leading-[1.3] mb-1 drop-shadow-md">
                      {image.title}
                    </h3>
                    <p className="text-[13px] text-[rgb(255,255,255/0.9)] line-clamp-2 drop-shadow">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)] text-[16px]">
              No images in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0/0.92)] p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[95vh] flex flex-col rounded-3xl overflow-hidden bg-[var(--surface)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--text-primary)] bg-opacity-20 hover:bg-opacity-30 text-[var(--text-white)] text-[28px] transition-all duration-200 group"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">close</span>
            </button>

            {/* Image Container */}
            <div className="relative w-full h-[50vh] md:h-[65vh] bg-[var(--gray-100)] flex-shrink-0">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 md:p-10 overflow-y-auto">
              {selectedImage.featured && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green-50)] text-[var(--green-700)] text-[11px] font-bold uppercase tracking-widest mb-4">
                  <span className="material-symbols-outlined text-sm">star</span>
                  Featured Image
                </div>
              )}
              
              <h3 className="font-headline text-[28px] md:text-[36px] font-bold text-[var(--text-primary)] mb-4 leading-[1.2]">
                {selectedImage.title}
              </h3>
              
              <p className="text-[15px] md:text-[16px] leading-[1.8] text-[var(--text-secondary)] mb-6">
                {selectedImage.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-[var(--borderSoft)]">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-[var(--gray-400)]">
                      Category
                    </span>
                    <p className="text-[14px] font-bold text-[var(--blue-700)]">
                      {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                    </p>
                  </div>
                  <div className="w-px h-12 bg-[var(--borderSoft)]"></div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-[var(--gray-400)]">
                      Uploaded
                    </span>
                    <p className="text-[14px] text-[var(--text-primary)]">
                      {new Date(selectedImage.uploadedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
