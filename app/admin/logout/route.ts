import { NextResponse } from "next/server";

import { clearAdminSessionCookie } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  clearAdminSessionCookie();
  return NextResponse.redirect(new URL("/admin/login", request.url));
}
