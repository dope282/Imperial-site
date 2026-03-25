"use client";

import { useState, useEffect } from "react"; // useState, useEffect нэмсэн
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Sidebar-ийн төлөв

  // Хуудас солигдоход Sidebar-ийг автоматаар хаана
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Sidebar нээлттэй үед scroll-ыг хаана
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Нүүр", href: "/" },
    { name: "Бүтээгдэхүүн", href: "/products" },
    { name: "Бидний тухай", href: "/about" },
    { name: "Холбоо барих", href: "/contact" },
  ];

  const navClass = (path) =>
    `py-2 text-sm font-medium transition-all duration-200 md:border-b-2 ${
      pathname === path
        ? "text-[#0054A6] md:border-[#0054A6]"
        : "text-gray-600 md:border-transparent hover:text-[#0054A6] md:hover:border-[#0054A6]"
    }`;

  return (
    <>
      <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md z-[60] border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity z-10">
            <Image
              src="/logo.png"
              alt="Imperial Partners"
              width={120}
              height={40}
              className="object-contain w-24 md:w-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navClass(link.href)}>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Анкет илгээх товч (Desktop-д харагдана, Mobile-д Sidebar дотор орно) */}
            <Link
              href="/application"
              className={`hidden md:block text-xs font-bold px-5 py-2 rounded-lg transition-all ${
                pathname === "/application"
                  ? "bg-[#0054A6] text-white"
                  : "text-[#0054A6] border border-[#0054A6] hover:bg-[#0054A6] hover:text-white"
              }`}
            >
              Анкет илгээх
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#0054A6] transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR --- */}
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Content */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[80] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-[#0054A6]">ЦЭС</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold ${
                  pathname === link.href ? "text-[#0054A6]" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <hr className="my-4 border-gray-100" />
            
            <Link
              href="/application"
              className={`w-full text-center py-4 rounded-xl font-bold transition-all ${
                pathname === "/application"
                  ? "bg-[#0054A6] text-white"
                  : "bg-blue-50 text-[#0054A6]"
              }`}
            >
              Анкет илгээх
            </Link>
          </nav>

          <div className="mt-auto pt-10 text-center">
            <p className="text-xs text-gray-400 mb-2">Холбогдох утас:</p>
            <p className="text-sm font-bold text-gray-700">+976 7775 3888</p>
          </div>
        </div>
      </aside>
    </>
  );
}