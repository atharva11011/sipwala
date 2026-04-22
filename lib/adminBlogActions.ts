"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/adminAuth";
import { deleteBlogById } from "@/lib/blogStore";

export async function deleteBlogPostAction(formData: FormData): Promise<void> {
  requireAdmin();

  const id = String(formData.get("id") ?? "").trim();
  const redirectTo = String(formData.get("redirectTo") ?? "").trim() || "/admin/blogs";

  if (!id) {
    redirect(redirectTo);
  }

  await deleteBlogById(id);

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin");
  revalidatePath("/admin/blogs");

  redirect(redirectTo);
}
