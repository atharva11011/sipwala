import { NextResponse } from "next/server";

function getBackendBaseUrl(): string {
  const raw = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  if (raw) {
    return raw.replace(/\/+$/, "");
  }

  // In local development, default to the expected backend port if env vars are not set.
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:4000";
  }

  throw new Error(
    "Backend URL is not configured. Set BACKEND_URL (recommended) or NEXT_PUBLIC_BACKEND_URL."
  );
}

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as ContactPayload;

    const name = asTrimmedString(body.name);
    const email = asTrimmedString(body.email);
    const phone = asTrimmedString(body.phone);
    const interest = asTrimmedString(body.interest);
    const message = asTrimmedString(body.message);

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const backendBaseUrl = getBackendBaseUrl();

    const upstream = await fetch(`${backendBaseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || undefined,
        interest: interest || undefined,
        message: message || undefined,
      }),
    });

    const contentType = upstream.headers.get("content-type") || "application/json";
    const raw = await upstream.text();

    return new NextResponse(raw, {
      status: upstream.status,
      headers: {
        "content-type": contentType,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    console.error("/api/contact proxy failed:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
