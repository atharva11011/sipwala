"use client";

import type { GalleryImage } from "@/lib/galleryStore";

const MEDIA_DOWNLOAD =
  "https://media.bizonance.in/api/v1/image/download/eca82cda-d4d7-4fe5-915a-b0880bb8de74/bizonance";

function getFullImageUrl(src: string | undefined | null) {
  if (!src) return "";
  if (/^https?:\/\//i.test(src) || src.startsWith("data:")) return src;
  return `${MEDIA_DOWNLOAD}/${encodeURI(src.replace(/^\/+/, ""))}`;
}

function isGenericGalleryLabel(text: string | undefined | null) {
  if (!text) return false;
  const normalized = text.trim().toLowerCase();
  return normalized === "gallery image" || normalized === "gallery" || normalized === "image";
}

type Props = {
  images?: GalleryImage[];
};

export default function GallerySection({ images = [] }: Props) {
  return (
    <>
      <section
        id="gallery"
        className="bg-white py-20 md:py-28 scroll-mt-24"
        role="region"
        aria-labelledby="gallery-title"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
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
 
          {images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => {
                const finalUrl = getFullImageUrl(image?.imageUrl);

                return (
                  <div
                    key={image.id}
                    className="group relative w-full rounded-xl block"
                  >
                    <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-slate-50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-blue-200 aspect-[4/3]">
                      
                      {finalUrl ? (
                        <img
                          src={finalUrl}
                          alt={image?.title || "Image"}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-medium">
                          No image
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-white/90 text-gray-700 backdrop-blur-sm shadow-sm capitalize border border-gray-200">
                          {image?.category || "Other"}
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-4 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-bold text-base text-white leading-snug mb-0.5 drop-shadow">
                          {image?.title || "Untitled"}
                        </h3>
                        {image?.description &&
                          image?.description.trim() !== "" &&
                          !isGenericGalleryLabel(image.description) && (
                          <p className="text-xs text-gray-200 line-clamp-2 leading-relaxed">
                            {image.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
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
                There are no images to display in the gallery yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}