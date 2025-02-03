"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  const updateScrollDirection = useCallback(() => {
    let lastScrollY = window.scrollY;
    return () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
  }, [scrollDirection]);

  useEffect(() => {
    const updateScroll = updateScrollDirection();
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [updateScrollDirection]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navItems = useMemo(
    () => [
      { href: ``, label: "home" },
      { href: `/about`, label: "about" },
      { href: `/#contact`, label: "contact" },
    ],
    []
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-primary shadow-sm shadow-secondary transition-all duration-500 ${
          scrollDirection === "down" && !isMenuOpen
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <Link
              href={`/`}
              className="text-2xl font-bold z-50 relative flex items-center"
              aria-label="homeAriaLabel"
            >
              <p className="ml-2 text-lg font-semibold hidden sm:inline">
                HYPPONIX
              </p>
            </Link>
            <button
              className="z-50 relative text-2xl w-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen ? "closeMenuAriaLabel" : "openMenuAriaLabel"
              }
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes aria-hidden="true" />
              ) : (
                <FaBars aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <MobileMenu setIsMenuOpen={setIsMenuOpen} navItems={navItems} />
      )}
    </>
  );
};

export default Header;
