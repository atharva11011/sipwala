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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0/0.8)] p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-[var(--text-white)] hover:text-[var(--gray-200)] text-[32px] font-light"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-cover"
                sizes="90vw"
              />
            </div>

            <div className="bg-[var(--surface)] border-x border-b border-[var(--borderSoft)] rounded-b-2xl p-6 md:p-8">
              <h3 className="font-headline text-[24px] font-bold text-[var(--text-primary)] mb-3">
                {selectedImage.title}
              </h3>
              <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)] mb-4">
                {selectedImage.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[12px] uppercase font-bold tracking-wide text-[var(--blue-700)]">
                  {selectedImage.category}
                </span>
                <span className="text-[12px] text-[var(--gray-400)]">
                  {new Date(selectedImage.uploadedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
