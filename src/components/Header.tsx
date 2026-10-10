"use client";

import Link from "next/link";
import { useState } from "react";
import { BIZ, SERVICE_PAGES } from "@/lib/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * 앵커(#study-cafe) 대신 실제 라우트를 가리킨다 — 앵커는 색인 단위가 아니라서
   * 하위 페이지로 가는 내부 링크가 없으면 크롤러가 새 페이지를 찾지 못한다.
   */
  const navItems = [
    ...SERVICE_PAGES.map((page) => ({ href: page.path, label: page.navLabel })),
    { href: "/#contact", label: "오시는길" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFF9F0]/95 backdrop-blur-sm warm-shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#8B6F47]">OASIS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#5D4E37] hover:text-[#8B6F47] transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={"tel:" + BIZ.phone}
              className="bg-[#8B6F47] text-[#FFF9F0] px-5 py-2 rounded-full hover:bg-[#5D4E37] transition-colors font-medium text-sm warm-shadow"
            >
              상담문의
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E8E3D9]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-[#5D4E37] hover:text-[#8B6F47] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={"tel:" + BIZ.phone}
              className="block mt-4 bg-[#8B6F47] text-[#FFF9F0] px-5 py-2 rounded-full text-center hover:bg-[#5D4E37] transition-colors"
            >
              상담문의
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
