import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-10 pb-6 cursor-default border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        {/* Багануудын grid - Mobile дээр 2 баганатай болгож өндрийг хэмнэв */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-12 mb-10 text-left">
          
          {/* 1. Компанийн товч мэдээлэл - Mobile дээр бүтэн өргөнөөр харагдана */}
          <div className="col-span-2 lg:col-span-1">
            <div className="font-bold text-[10px] mb-3 md:mb-6 uppercase tracking-[0.2em] text-blue-500">
              Imperial Partners
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-light max-w-xs">
              Олон улсын шаардлага хангасан химийн бодис, лабораторийн тоног төхөөрөмж нийлүүлэгч.
            </p>
          </div>

          {/* 2. Холбоосууд */}
          <div className="col-span-1">
            <h3 className="font-bold text-[10px] mb-4 uppercase tracking-[0.15em] text-gray-300">Цэс</h3>
            <ul className="space-y-2 text-[13px] text-gray-400 font-light">
              <li><Link href="/" className="hover:text-white transition-colors">Нүүр</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Бидний тухай</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Бүтээгдэхүүн</Link></li>
            </ul>
          </div>

          {/* 3. Ангилал */}
          <div className="col-span-1">
            <h3 className="font-bold text-[10px] mb-4 uppercase tracking-[0.15em] text-gray-300">Төрөл</h3>
            <ul className="space-y-2 text-[13px] text-gray-400 font-light">
              <li><Link href="/products?cat=chemical" className="hover:text-white transition-colors">Хими</Link></li>
              <li><Link href="/products?cat=glassware" className="hover:text-white transition-colors">Шил сав</Link></li>
              <li><Link href="/products?cat=protection" className="hover:text-white transition-colors">ХАБЭА</Link></li>
            </ul>
          </div>

          {/* 4. Холбоо барих - Mobile дээр бүтэн өргөнөөр харагдах нь утасны дугаарыг бүтэн харагдуулна */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-bold text-[10px] mb-4 uppercase tracking-[0.15em] text-gray-300">Холбоо барих</h3>
            <ul className="space-y-3 text-[13px] text-gray-400 font-light">
              <li className="flex items-start gap-2 group">
                <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-xs">ХУД, 2-р хороо, TV5 оффис 7 давхар</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <Link href="tel:+97677753888" className="hover:text-white transition-colors text-xs">+976 7775 3888</Link>
              </li>
            </ul>
          </div>

          {/* 5. Сошиал */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-bold text-[10px] mb-3 uppercase tracking-[0.15em] text-gray-300">Сошиал</h3>
            <Link 
              href="https://www.facebook.com/profile.php?id=100083298401308" 
              target="_blank" 
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-[13px] text-gray-400 group-hover:text-white">Facebook</span>
            </Link>
          </div>
        </div>

        {/* Copyright - Илүү жижиг, нягт */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 font-light">
            © 2026 Империал Партнерс ХХК.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500 font-light">
            <Link href="/privacy" className="hover:text-white">НУУЦЛАЛ</Link>
            <Link href="/terms" className="hover:text-white">НӨХЦӨЛ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}