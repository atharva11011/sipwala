"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { GalleryImage } from "@/lib/galleryStore";

type Props = {
  images: GalleryImage[];
};

export default function GallerySection({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, handleKeyDown]);

  const categories = ["all", ...Array.from(new Set(images.map((img) => img.category)))];
  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <section
        id="gallery"
        className="bg-white py-20 md:py-28 scroll-mt-24"
        role="region"
        aria-labelledby="gallery-title"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="flex flex-col items-center text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              Gallery
            </span>
            <h2
              id="gallery-title"
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-5 leading-[1.1]"
            >
              Moments &amp; Milestones
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              Explore our journey through photos and events that define our culture and success.
            </p>
            <div className="mt-10 w-12 h-0.5 rounded-full bg-blue-600" />
          </div>

          {/* ── Filter Pills ── */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize tracking-wide transition-all duration-200 border ${
                  filter === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Gallery Grid ── */}
          {filteredImages.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filteredImages.map((image, index) => (
                <button
                  key={image.id}
                  className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-xl break-inside-avoid block"
                  onClick={() => setSelectedImage(image)}
                  aria-label={`View ${image.title}`}
                >
                  {/* Card */}
                  <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-slate-50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-blue-200">

                    {/* Actual image — natural height, no fixed aspect box */}
                    <div className={`relative w-full ${index === 0 ? "aspect-[4/3]" : index % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                      <Image
                        src={image.imageUrl}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badges — top left */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      {image.featured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-600 text-white shadow-sm">
                          ★ Featured
                        </span>
                      )}
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-gray-700 backdrop-blur-sm shadow-sm capitalize">
                        {image.category}
                      </span>
                    </div>

                    {/* Expand icon — top right */}
                    <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-gray-700" aria-hidden="true">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </div>

                    {/* Hover text reveal — bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-4 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-bold text-base text-white leading-snug mb-0.5 drop-shadow">
                        {image.title}
                      </h3>
                      <p className="text-xs text-gray-200 line-clamp-2 leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* ── Empty State ── */
            <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-xl border border-dashed border-gray-200">
              <div className="w-14 h-14 mb-5 rounded-xl bg-blue-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-blue-500" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No images found</h3>
              <p className="text-sm text-gray-500 max-w-sm">
                There are no images in the "{filter}" category. Try a different filter.
              </p>
              <button
                onClick={() => setFilter("all")}
                className="mt-5 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                View all photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${selectedImage.title}`}
          onClick={() => setSelectedImage(null)}
        >
          {/* Modal box — fixed height so image always fills */}
          <div
            className="relative w-full max-w-4xl h-[85vh] flex flex-col md:flex-row rounded-xl overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
              className="absolute top-3 right-3 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 shadow-sm transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* ── LEFT: Image pane — fills full height, covers area ── */}
            <div className="relative w-full md:w-[55%] h-[45%] md:h-full shrink-0 bg-gray-900">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 55vw, 100vw"
                priority
              />
              {/* Subtle bottom gradient so it blends into white panel on mobile */}
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
            </div>

            {/* ── RIGHT: Info pane ── */}
            <div className="flex-1 flex flex-col overflow-y-auto">

              {/* Top accent strip */}
              <div className="h-1 w-full bg-blue-600 shrink-0" />

              <div className="flex flex-col flex-1 px-7 py-7 overflow-y-auto">

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {selectedImage.featured && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold uppercase tracking-widest">
                      ★ Featured
                    </span>
                  )}
                  <span className="inline-flex px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-[10px] font-semibold capitalize tracking-wide">
                    {selectedImage.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug mb-3">
                  {selectedImage.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {selectedImage.description}
                </p>

                {/* Meta — pinned to bottom */}
                <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">
                      Date added
                    </span>
                    <p className="text-sm font-semibold text-gray-700">
                      {new Date(selectedImage.uploadedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">
                      Category
                    </span>
                    <p className="text-sm font-semibold text-blue-600 capitalize">
                      {selectedImage.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}