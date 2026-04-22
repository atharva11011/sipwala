
// @ts-expect-error - server-only is provided by Next.js without bundled types.
import "server-only"; 

import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "sipwala_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getAdminUsername(): string {
  return process.env.ADMIN_USERNAME?.trim() || "admin";
}

function getAdminPassword(): string {
  // For local dev convenience only.
  if (process.env.ADMIN_PASSWORD?.trim()) return process.env.ADMIN_PASSWORD.trim();

  if (process.env.NODE_ENV !== "production") {
    return "admin";
  }

  return "";
}

function getSessionSecret(): string {
  if (process.env.ADMIN_SESSION_SECRET?.trim()) {
    return process.env.ADMIN_SESSION_SECRET.trim();
  }

  if (process.env.NODE_ENV !== "production") {
    return "dev-only-admin-session-secret-change-me";
  }

  return "";
}

type SessionPayload = {
  exp: number;
  v: 1;
};

function sign(data: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(data).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

export function adminConfigStatus(): {
  configured: boolean;
  usingDevDefaults: boolean;
} {
  const password = getAdminPassword();
  const secret = getSessionSecret();

  const usingDevDefaults =
    process.env.NODE_ENV !== "production" &&
    (!process.env.ADMIN_PASSWORD?.trim() || !process.env.ADMIN_SESSION_SECRET?.trim());

  const configured = Boolean(password && secret);
  return { configured, usingDevDefaults };
}

export function createSessionToken(): string {
  const secret = getSessionSecret();
  if (!secret) throw new Error("Admin session secret is not configured");

  const payload: SessionPayload = {
    v: 1,
    exp: Date.now() + SESSION_MAX_AGE_SECONDS * 1000,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = sign(payloadB64, secret);

  return `${payloadB64}.${signature}`;
}

export function verifySessionToken(token: string): boolean {
  const secret = getSessionSecret();
  if (!secret) return false;

  const [payloadB64, signature] = token.split(".");
  if (!payloadB64 || !signature) return false;

  const expected = sign(payloadB64, secret);
  if (!safeEqual(signature, expected)) return false;

  try {
    const payload = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString("utf8"),
    ) as SessionPayload;

    if (!payload || payload.v !== 1 || typeof payload.exp !== "number") return false;
    return Date.now() < payload.exp;
  } catch {
    return false;
  }
}

export function isAdminLoggedIn(): boolean {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}

export function requireAdmin(): void {
  if (!isAdminLoggedIn()) {
    redirect("/admin/login");
  }
}

export function setAdminSessionCookie(): void {
  const token = createSessionToken();

  cookies().set({
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export function clearAdminSessionCookie(): void {
  cookies().set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export function validateAdminCredentials(username: string, password: string): boolean {
  const expectedUsername = getAdminUsername();
  const expectedPassword = getAdminPassword();
  if (!expectedPassword) return false;

  return username === expectedUsername && password === expectedPassword;
}
