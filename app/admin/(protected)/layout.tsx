import { requireAdmin } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export default function AdminProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  requireAdmin();

  return (
    <main className="bg-[var(--gray-50)] py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {children}
      </div>
    </main>
  );
}
