import { redirect } from "next/navigation";

import {
  adminConfigStatus,
  isAdminLoggedIn,
  setAdminSessionCookie,
  validateAdminCredentials,
} from "@/lib/adminAuth";

type PageProps = {
  searchParams?: { error?: string };
};

export const dynamic = "force-dynamic";

export default function AdminLoginPage({ searchParams }: PageProps) {
  if (isAdminLoggedIn()) {
    redirect("/admin");
  }

  const { configured, usingDevDefaults } = adminConfigStatus();
  const error = searchParams?.error;

  const loginAction = async (formData: FormData) => {
    "use server";

    const { configured: isConfigured } = adminConfigStatus();
    if (!isConfigured) {
      redirect("/admin/login?error=not_configured");
    }

    const username = String(formData.get("username") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();

    if (!validateAdminCredentials(username, password)) {
      redirect("/admin/login?error=invalid_credentials");
    }

    setAdminSessionCookie();
    redirect("/admin");
  };

  return (
    <main className="bg-[var(--gray-50)] py-14 md:py-24">
      <div className="max-w-[560px] mx-auto px-5 lg:px-8">
        <div className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-4xl p-7 sm:p-10 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--blue-50)] border border-[var(--blue-200)] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px] text-[var(--blue-700)]">
                lock
              </span>
            </div>

            <div className="min-w-0">
              <h1 className="font-headline text-[26px] sm:text-[30px] font-extrabold tracking-tight text-[var(--text-primary)]">
                Admin Login
              </h1>
              <p className="mt-2 text-[14px] leading-[1.75] text-[var(--text-muted)]">
                Sign in to publish new blog posts.
              </p>
            </div>
          </div>

          {!configured ? (
            <div className="mt-5 rounded-2xl border border-[rgb(var(--red-600-rgb)/0.25)] bg-[rgb(var(--red-50-rgb)/0.55)] px-4 py-3 text-[13px] leading-[1.7] text-[rgb(var(--red-700-rgb)/0.95)] flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] mt-0.5">error</span>
              <div>
                Admin is not configured. Set <b>ADMIN_PASSWORD</b> and
                <b> ADMIN_SESSION_SECRET</b> in your environment.
              </div>
            </div>
          ) : null}

          {usingDevDefaults ? (
            <div className="mt-5 rounded-2xl border border-[rgb(var(--blue-600-rgb)/0.25)] bg-[rgb(var(--blue-50-rgb)/0.70)] px-4 py-3 text-[13px] leading-[1.7] text-[var(--text-secondary)] flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] mt-0.5 text-[var(--blue-700)]">info</span>
              <div>
                Dev defaults active: username <b>admin</b> / password <b>admin</b>.
                Set env vars before production.
              </div>
            </div>
          ) : null}

          {error === "invalid_credentials" ? (
            <div className="mt-5 rounded-2xl border border-[rgb(var(--red-600-rgb)/0.25)] bg-[rgb(var(--red-50-rgb)/0.55)] px-4 py-3 text-[13px] leading-[1.7] text-[rgb(var(--red-700-rgb)/0.95)] flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] mt-0.5">error</span>
              <div>Invalid username or password.</div>
            </div>
          ) : null}

          {error === "not_configured" ? (
            <div className="mt-5 rounded-2xl border border-[rgb(var(--red-600-rgb)/0.25)] bg-[rgb(var(--red-50-rgb)/0.55)] px-4 py-3 text-[13px] leading-[1.7] text-[rgb(var(--red-700-rgb)/0.95)] flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] mt-0.5">error</span>
              <div>Admin is not configured. Please set environment variables.</div>
            </div>
          ) : null}

          <form action={loginAction} className="mt-8 space-y-5">
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
                Username
              </label>
              <input
                name="username"
                type="text"
                autoComplete="username"
                placeholder="admin"
                className="w-full h-11 bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--text-secondary)] px-1 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full h-11 bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--blue-600)] focus:ring-2 focus:ring-[rgb(var(--blue-600-rgb)/0.18)] transition-colors px-4 rounded-xl text-[var(--text-primary)] placeholder:text-[var(--gray-400)] outline-none text-[14px]"
              />
            </div>

            <button
              type="submit"
              disabled={!configured}
              className="btn-primary w-full h-11 text-[var(--text-white)] font-headline font-bold rounded-xl bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))] active:scale-95 transition-transform text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
