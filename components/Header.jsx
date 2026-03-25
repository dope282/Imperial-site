"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Динамик классууд: Одоо байгаа хуудсаас хамаарч өнгө өөрчлөгдөнө
  const navClass = (path) =>
    `py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
      pathname === path
        ? "text-[#0054A6] border-[#0054A6]"
        : "text-gray-500 border-transparent hover:text-[#0054A6] hover:border-[#0054A6]"
    }`;

  return (
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Imperial Partners"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Navigation - Төв хэсэгт байрлах цэсүүд */}
        <nav className="hidden md:flex gap-10 items-center">
          <Link href="/" className={navClass("/")}>
            Нүүр
          </Link>
          <Link href="/products" className={navClass("/products")}>
            Бүтээгдэхүүн
          </Link>
          <Link href="/about" className={navClass("/about")}>
            Бидний тухай
          </Link>
          <Link href="/contact" className={navClass("/contact")}>
            Холбоо барих
          </Link>
        </nav>

        {/* Action Button - Анкет илгээх (Баруун талд тусдаа харагдана) */}
        <Link
          href="/application"
          className={`text-sm font-bold px-5 py-2 rounded-lg transition-all ${
            pathname === "/application"
              ? "bg-[#0054A6] text-white"
              : "text-[#0054A6] border border-[#0054A6] hover:bg-[#0054A6] hover:text-white"
          }`}
        >
          Анкет илгээх
        </Link>
        
      </div>
    </header>
  );
}