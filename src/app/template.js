"use client";

import { Footer } from "@/components/page/footer";
import { MainNavbar } from "@/components/page/main-navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }) {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const isDetailPage =
      pathname.startsWith("/coin/detail/") ||
      pathname.startsWith("/feature/detail/") ||
      pathname.startsWith("/news/detail/");
    setShowNav(!isDetailPage);
  }, [pathname]);

  return (
    <>
      {showNav && <MainNavbar />}
      {children}
      {showNav && <Footer />}
    </>
  );
}
