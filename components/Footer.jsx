import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 cursor-default">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* 1. Компанийн товч мэдээлэл */}
          <div className="lg:col-span-1">
            <div className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-300">
              Imperial Partners LLC
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Бид олон улсын шаардлага хангасан химийн бодис, лабораторийн тоног төхөөрөмж, 
              хамгаалалтын хувцас хэрэглэлийг чанарын өндөр түвшинд нийлүүлнэ.
            </p>
          </div>

          {/* 2. Үндсэн холбоосууд */}
          <div>
            <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-300">Холбоосууд</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link href="/" className="hover:text-white transition-colors">Нүүр</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Бидний тухай</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Бүтээгдэхүүн</Link></li>
              {/* <li><Link href="/news" className="hover:text-white transition-colors">Мэдээлэл</Link></li> */}
            </ul>
          </div>

          {/* 3. Бүтээгдэхүүний ангилал */}
          <div>
            <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-300">Бүтээгдэхүүн</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link href="/products?cat=chemical" className="hover:text-white transition-colors">Химийн бодис</Link></li>
              <li><Link href="/products?cat=glassware" className="hover:text-white transition-colors">Лабораторийн шил, сав</Link></li>
              <li><Link href="/products?cat=protection" className="hover:text-white transition-colors">ХАБЭА хэрэгсэл</Link></li>
            </ul>
          </div>

          {/* 4. Холбоо барих мэдээлэл */}
          <div>
            <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-300">Холбоо барих</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex gap-3 group">
                {/* Байршил заагч айкон */}
                <svg className="w-5 h-5 text-[#0054A6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
  
                {/* Google Maps линк */}
                <Link 
                href="https://www.google.com/maps/search/?api=1&query=TV5+Office+Ulaanbaatar" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors border-b border-transparent hover:border-white/20 text-sm"
                >
                Улаанбаатар хот, Хан-Уул дүүрэг, 2-р хороо TV5 оффис 7 давхар
                </Link>
              </li>
              <li className="flex gap-3 group">
              {/* Утасны айкон */}
              <svg className="w-4 h-4 text-[#0054A6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {/* tel: холбоос нь шууд залгах цонхыг нээнэ */}
              <Link 
                  href="tel:+97677753888" 
                  className="hover:text-white transition-colors border-b border-transparent hover:border-white/20"
                  >+976 7775 3888</Link>
              </li>
              <li className="flex gap-3 group">
              {/* Утасны айкон */}
              <svg className="w-4 h-4 text-[#0054A6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {/* tel: холбоос нь шууд залгах цонхыг нээнэ */}
              <Link 
                  href="tel:+97694005088" 
                  className="hover:text-white transition-colors border-b border-transparent hover:border-white/20"
                  >+976 9400 5088</Link>
              </li>
              <li className="flex gap-3 group">
                  <svg className="w-4 h-4 text-[#0054A6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  {/* mailto: холбоос нь шууд имэйл апп-ыг нээх болно */}
                  <Link 
                    href="mailto:sales8@imp.mn" 
                    className="hover:text-white transition-colors border-b border-transparent hover:border-white/20"
                  >sales8@imp.mn</Link>
              </li>
            </ul>
          </div>

          {/* 5. Сошиал медиа */}
          <div>
  <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-300">Сошиал медиа</h3>
  
  {/* target="_blank" нь шинэ таб дээр нээх зориулалттай */}
  <Link 
    href="https://www.facebook.com/profile.php?id=100083298401308" // Энд өөрийн фэйсбүүк линкийг тавиарай
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-sm text-gray-400 font-light hover:text-white transition-all group"
  >
    <div className="w-8 h-8 bg-[#0053a615] flex items-center justify-center text-[#0054A6] group-hover:bg-[#0053a615] group-hover:text-white transition-all">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </div>
    <span className="group-hover:translate-x-1 transition-transform">Imperial Partners LLC</span>
  </Link>
</div>
        </div>

        {/* Доод хэсэг - Зохиогчийн эрх */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-light">
            © 2023 Империал Партнерс ХХК. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-light">
            <Link href="/privacy" className="hover:text-white transition-colors">Нууцлалын бодлого</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Үйлчилгээний нөхцөл</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}