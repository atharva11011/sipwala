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
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

async function getLogos(): Promise<Logo[]> {
  const logosDir = path.join(process.cwd(), "public", "logos");

  try {
    const entries = await fs.readdir(logosDir);

    return entries
      .filter((file) => file.toLowerCase().endsWith(".png"))
      .filter((file) => !file.toLowerCase().includes("sipwala"))
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      )
      .map((file) => ({
        src: `/logos/${file}`,
        alt: titleFromFilename(file),
      }));
  } catch {
    return [];
  }
}

export default async function AssociatedWithSection() {
  const logos = await getLogos();

  if (!logos.length) return null;

  return (
    <section
      className="bg-[#fafafa] py-20 md:py-28"
      role="region"
      aria-labelledby="associated-with-title"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <h2
            id="associated-with-title"
            className="
              text-4xl
              font-extrabold
              tracking-tight
              text-slate-900
              md:text-5xl
            "
          >
            Associated With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 md:text-base">
            Trusted partnerships with leading mutual fund houses and
            financial institutions.
          </p>
        </div>

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-6xl
            grid-cols-2
            gap-5
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
          "
        >
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="
                group
                flex
                h-[100px]
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-4
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gray-300
                hover:shadow-lg
              "
            >
              <div className="relative h-[55px] w-[140px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                  sizes="140px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}