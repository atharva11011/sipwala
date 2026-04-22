"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminFooter from "@/components/admin/AdminFooter";

type Props = {
  children: React.ReactNode;
};

export default function AppShell({ children }: Props) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login";
  const isLogoutRoute = pathname === "/admin/logout";

  if (isAdmin) {
    // Don't show navbar on login/logout pages  
    const showAdminNavbar = !isLoginPage && !isLogoutRoute;

    return (
      <>
        {showAdminNavbar && <AdminNavbar />}
        {children}
        {showAdminNavbar && <AdminFooter />}
      </>
    );
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
