"use client";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";

export function MainNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/feature",
    },
    {
      name: "Market",
      link: "/coin",
    },
    {
      name: "News",
      link: "/news",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="px-4 xs:px-6">
        {/* Desktop Navigation */}
        <NavBody>
          <Link
            href="/"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 group transition-all duration-300 ease-in-out"
          >
            <span className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl">
              <span className="text-violet-700 font-black group-hover:text-violet-500 transition-colors duration-300">
                Zul
              </span>
              <span className="group-hover:text-violet-200 transition-colors duration-300">
                CryptoCap
              </span>
            </span>
          </Link>
          <NavItems items={navItems} as={Link} />
          <div className="flex items-center">
            <NavbarButton variant="dark">Connect to Wallet</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="px-4 xs:px-6">
            <Link
              href="/"
              className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 group transition-all duration-300 ease-in-out"
            >
              <span className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl">
                <span className="text-violet-700 font-black group-hover:text-violet-500 transition-colors duration-300">
                  Zul
                </span>
                <span className="group-hover:text-violet-200 transition-colors duration-300">
                  CryptoCap
                </span>
              </span>
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            className="mt-2 text-sm xs:text-base space-y-4"
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white hover:text-violet-400 transition-colors"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="dark"
                className="w-full"
              >
                Connect to Wallet
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
