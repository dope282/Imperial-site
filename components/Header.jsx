"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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

  return (
    <>
      {/* Header-ийн өндрийг md:h-20, харин mobile дээр h-16 болгож багасгав */}
      <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md z-[60] border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-16 md:h-20 flex justify-between items-center">
          
          {/* Logo - Гар утсан дээр арай жижиг */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity z-10">
            <Image
              src="/logo.png"
              alt="Imperial Partners"
              width={120}
              height={40}
              className="object-contain w-20 md:w-32" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`py-2 text-sm font-medium transition-all border-b-2 ${
                  pathname === link.href 
                  ? "text-[#0054A6] border-[#0054A6]" 
                  : "text-gray-600 border-transparent hover:text-[#0054A6]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
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

            {/* Mobile Menu Toggle - Илүү жижиг padding */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 text-gray-600 hover:text-[#0054A6]"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-10 6h10" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR --- */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[70] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[260px] bg-white z-[80] shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col h-full">
          {/* Sidebar Top - Margin багассан */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Цэс</span>
            <button onClick={() => setIsOpen(false)} className="p-1 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links - Gap багассан, Текстийн хэмжээг sm болгосон */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${
                  pathname === link.href ? "bg-blue-50 text-[#0054A6]" : "text-gray-700 active:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="my-4 border-b border-gray-50" />
            
            <Link
              href="/application"
              className={`w-full text-center py-3.5 rounded-xl text-sm font-bold transition-all ${
                pathname === "/application"
                  ? "bg-[#0054A6] text-white"
                  : "bg-gray-900 text-white shadow-lg shadow-gray-200"
              }`}
            >
              Анкет илгээх
            </Link>
          </nav>

          {/* Bottom Info - Илүү компакт */}
          <div className="mt-auto pb-4 border-t border-gray-50 pt-6">
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0054A6]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-medium uppercase">Холбоо барих</p>
                <p className="text-xs font-bold text-gray-700">+976 7775 3888</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}