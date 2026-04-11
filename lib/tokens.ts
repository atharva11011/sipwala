export const tokens = {
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    400: "#60A5FA",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  green: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    400: "#34D399",
    500: "#10B981",
    600: "#059669",
    700: "#047857",
  },
  gold: {
    light: "#FEF3C7",
    base: "#F59E0B",
    dark: "#D97706",
  },
  navy: {
    950: "#060B14",
    900: "#0A0F1E",
    800: "#0F172A",
    700: "#1E293B",
    600: "#334155",
  },
  gray: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
  },
  teal: {
    dark: "#0F2A2A",
    mid: "#134040",
  },
  surface: "#FFFFFF",
  surfaceAlt: "#F8FAFC",
  border: "#E2E8F0",
  borderSoft: "#F1F5F9",
  text: {
    primary: "#0F172A",
    secondary: "#334155",
    muted: "#64748B",
    hint: "#94A3B8",
    white: "#FFFFFF",
    whitesoft: "#CBD5E1",
  },
  brand: {
    trustpilotGreen: "#00B67A",
  },
} as const;

function hexToRgbTriplet(hex: string): string | null {
  const normalized = hex.replace("#", "").trim();
  const isShort = normalized.length === 3;
  const isLong = normalized.length === 6;
  if (!isShort && !isLong) return null;

  const full = isShort
    ? normalized
        .split("")
        .map((c) => c + c)
        .join("")
    : normalized;

  const r = Number.parseInt(full.slice(0, 2), 16);
  const g = Number.parseInt(full.slice(2, 4), 16);
  const b = Number.parseInt(full.slice(4, 6), 16);
  if ([r, g, b].some((n) => Number.isNaN(n))) return null;

  return `${r} ${g} ${b}`;
}

type AnyRecord = Record<string, unknown>;

function isRecord(value: unknown): value is AnyRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toKebab(input: string): string {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

export function tokensToCssVars(prefix = ""): string {
  const lines: string[] = [];

  const walk = (obj: AnyRecord, path: string[]) => {
    for (const [rawKey, value] of Object.entries(obj)) {
      const key = toKebab(rawKey);
      const nextPath = [...path, key];

      if (typeof value === "string") {
        const varName = `--${prefix}${nextPath.join("-")}`;
        lines.push(`${varName}: ${value};`);

        if (value.startsWith("#")) {
          const rgb = hexToRgbTriplet(value);
          if (rgb) lines.push(`${varName}-rgb: ${rgb};`);
        }

        continue;
      }

      if (isRecord(value)) {
        walk(value, nextPath);
      }
    }
  };

  walk(tokens as unknown as AnyRecord, []);
  return lines.join("\n");
}
