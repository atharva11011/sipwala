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

        <div className="mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="col-span-2 max-h-12 w-full flex items-center justify-center lg:col-span-1"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
                sizes="(min-width: 1024px) 158px, (min-width: 640px) 20vw, 40vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
