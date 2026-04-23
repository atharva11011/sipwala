import Image from "next/image";
import fs from "node:fs/promises";
import path from "node:path";

type Logo = {
  src: string;
  alt: string;
};

function titleFromFilename(filename: string) {
  const base = filename.replace(/\.[^/.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function getLogos(): Promise<Logo[]> {
  const logosDir = path.join(process.cwd(), "public", "logos");
  let entries: string[];
  try {
    entries = await fs.readdir(logosDir);
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code?: string }).code === "ENOENT"
    ) {
      return [];
    }
    throw error;
  }

  return entries
    .filter((name) => name.toLowerCase().endsWith(".png"))
    .filter((name) => !name.toLowerCase().includes("sipwala"))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    )
    .map((filename) => ({
      src: `/logos/${filename}`,
      alt: titleFromFilename(filename),
    }));
}

export default async function AssociatedWithSection() {
  const logos = await getLogos();

  if (logos.length === 0) return null;

  return (
    <section
      className="bg-[var(--surface)] py-16 md:py-24"
      role="region"
      aria-labelledby="associated-with-title"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <h2
          id="associated-with-title"
          className="text-center font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)]"
        >
          Associated With
        </h2>

        <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 items-center gap-x-6 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-8 md:grid-cols-5 lg:mx-0 lg:max-w-none lg:grid-cols-6 lg:gap-x-10 lg:gap-y-14">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex min-h-32 w-full items-center justify-center rounded-md bg-white/40 transition-transform duration-300 hover:bg-white/60 hover:scale-105 py-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={100}
                className="max-h-28 w-auto object-contain px-4"
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 160px, (min-width: 640px) 140px, 120px"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
