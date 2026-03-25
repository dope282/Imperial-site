import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-12 md:pt-16 pb-8 cursor-default">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Багануудын grid - Mobile: 1, Tablet: 2, Desktop: 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-12 md:mb-16 text-center md:text-left">
          
          {/* 1. Компанийн товч мэдээлэл */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <div className="font-bold text-xs mb-4 md:mb-6 uppercase tracking-[0.2em] text-gray-300">
              Imperial Partners LLC
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
              Бид олон улсын шаардлага хангасан химийн бодис, лабораторийн тоног төхөөрөмж, 
              хамгаалалтын хувцас хэрэглэлийг чанарын өндөр түвшинд нийлүүлнэ.
            </p>
          </div>

          {/* 2. Үндсэн холбоосууд */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-xs mb-4 md:mb-6 uppercase tracking-[0.2em] text-gray-300">Холбоосууд</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><Link href="/" className="hover:text-white transition-colors">Нүүр</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Бидний тухай</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Бүтээгдэхүүн</Link></li>
            </ul>
          </div>

          {/* 3. Бүтээгдэхүүний ангилал */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-xs mb-4 md:mb-6 uppercase tracking-[0.2em] text-gray-300">Бүтээгдэхүүн</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><Link href="/products?cat=chemical" className="hover:text-white transition-colors">Химийн бодис</Link></li>
              <li><Link href="/products?cat=glassware" className="hover:text-white transition-colors">Лабораторийн шил, сав</Link></li>
              <li><Link href="/products?cat=protection" className="hover:text-white transition-colors">ХАБЭА хэрэгсэл</Link></li>
            </ul>
          </div>

          {/* 4. Холбоо барих мэдээлэл */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-xs mb-4 md:mb-6 uppercase tracking-[0.2em] text-gray-300">Холбоо барих</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-light w-full">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 group">
                <svg className="w-5 h-5 text-[#0054A6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <Link 
                  href="https://www.google.com/maps/search/?api=1&query=TV5+Office+Ulaanbaatar" 
                  target="_blank"
                  className="hover:text-white transition-colors text-center md:text-left max-w-[200px] md:max-w-none"
                >
                  Улаанбаатар хот, Хан-Уул дүүрэг, 2-р хороо TV5 оффис 7 давхар
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <svg className="w-4 h-4 text-[#0054A6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <Link href="tel:+97677753888" className="hover:text-white transition-colors">+976 7775 3888</Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <svg className="w-4 h-4 text-[#0054A6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <Link href="mailto:sales8@imp.mn" className="hover:text-white transition-colors">sales8@imp.mn</Link>
              </li>
            </ul>
          </div>

          {/* 5. Сошиал медиа */}
          <div className="flex flex-col items-center md:items-start sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-xs mb-4 md:mb-6 uppercase tracking-[0.2em] text-gray-300">Сошиал медиа</h3>
            <Link 
              href="https://www.facebook.com/profile.php?id=100083298401308" 
              target="_blank" 
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-all group"
            >
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-[#0054A6] group-hover:bg-[#0054A6] group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="font-medium">Imperial Partners LLC</span>
            </Link>
          </div>
        </div>

        {/* Доод хэсэг - Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-xs text-gray-500 font-light text-center md:text-left">
            © 2026 Империал Партнерс ХХК. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-8 text-[10px] md:text-xs text-gray-500 font-light">
            <Link href="/privacy" className="hover:text-white transition-colors uppercase tracking-wider">Нууцлал</Link>
            <Link href="/terms" className="hover:text-white transition-colors uppercase tracking-wider">Нөхцөл</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}