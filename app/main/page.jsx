"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Hero() {
  return (
    <div className="bg-white min-h-screen cursor-default">
      <Header />

      {/* 1. Hero Section - Mobile Optimized */}
      <section className="relative min-h-[70vh] md:h-[85vh] bg-[#f8fafc] flex items-center overflow-hidden">
        {/* Арын фонны хэлбэр дүрс - Mobile-д багасгасан */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-50/50 md:bg-blue-50 md:skew-x-[-15deg] md:translate-x-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center relative z-10 w-full py-16 md:py-0">
          <div className="flex flex-col gap-5 md:gap-6 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0054A6] leading-tight uppercase tracking-tight">
              Imperial <span className="text-[#0054A6]">Partners</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-lg">
              Бид орчин үеийн дэвшилтэт химийн бодис, шил сав болон аюулгүй
              ажиллагааны хэрэгслийг мэргэжлийн түвшинд нийлүүлж байна.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 w-full sm:w-auto">
              <Link href="/products" className="bg-[#0054A6] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#004494] transition-all shadow-lg shadow-blue-200 text-center">
                Бүтээгдэхүүн үзэх
              </Link>
              <Link href="/about" className="bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm text-center">
                Илүү ихийг
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex justify-end relative h-[400px] lg:h-[500px]">
            <div className="relative w-full h-full">
              <Image 
                src="/gazar.png" 
                fill 
                className="object-contain drop-shadow-2xl" 
                alt="Main visualization"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section - Responsive Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative h-[250px] md:h-[450px] bg-gray-50 rounded-3xl p-6 md:p-8 flex items-center justify-center order-2 lg:order-1">
            <Image src="/gazarmap.png" fill className="object-contain p-8 md:p-12 opacity-80" alt="Plant visualization"/>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 order-1 lg:order-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Империал Партнерс ХХК</h2>
          <p className="text-gray-500 leading-relaxed text-sm md:text-lg">
            Бид Монгол улсын шинжлэх ухаан, боловсрол болон уул уурхайн салбарт
            чанартай лабораторийн тоног төхөөрөмж, химийн бодисыг нийлүүлэгч
            компани юм.
          </p>
          <p className="text-gray-600 font-medium italic border-l-4 border-[#0054A6] pl-4 text-left text-xs md:text-base">
            Олон улсын нэр хүнд бүхий брэндүүдийн албан ёсны түншээр ажиллаж байна.
          </p>
          <div className="flex flex-row gap-4 md:gap-6 mt-2">
            <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex-1">
              <h3 className="text-2xl md:text-3xl font-black text-[#0054A6] mb-1">10+</h3>
              <p className="text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-wider">Жилийн туршлага</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex-1">
              <h3 className="text-2xl md:text-3xl font-black text-[#0054A6] mb-1">100+</h3>
              <p className="text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-wider">Байнгын харилцагч</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categories Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Бүтээгдэхүүний ангилал</h2>
            <div className="w-16 md:w-20 h-1.5 bg-[#0054A6] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <CategoryCard 
              icon="/SVG.svg" 
              title="Химийн бодис" 
              desc="Техникийн зэрэглэлийн төрөл бүрийн химийн бодисууд." 
              link="/products?cat=chemical"
            />
            <CategoryCard 
              icon="/icon1.svg" 
              title="Шил сав, хэрэгсэл" 
              desc="Халуунд тэсвэртэй шилэн колбо, стакан болон бусад хэрэгсэл." 
              link="/products?cat=glassware"
            />
            <CategoryCard 
              icon="/SVG1.svg" 
              title="Хөдөлмөр хамгаалал" 
              desc="Аюулгүй ажиллагааны хувцас, бээлий, нүдний шил болон хамгаалалт." 
              link="/products?cat=protection"
            />
          </div>
        </div>
      </section>

      {/* 4. Partners Section - Mobile Friendly Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-lg md:text-2xl font-bold text-center text-gray-300 uppercase tracking-widest mb-10 md:16">Хамтрагч байгууллагууд</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center opacity-70 grayscale">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-8 md:h-12 relative hover:grayscale-0 transition-all cursor-pointer">
              <Image src={`/partners/logo${i+1}.png`} fill className="object-contain" alt="Partner"/>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CategoryCard({ icon, title, desc, link }) {
  return (
    <div className="group bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#0054A6] transition-colors">
        <div className="relative w-7 h-7 md:w-8 md:h-8 group-hover:invert transition-all">
          <Image src={icon} fill alt={title} className="object-contain" />
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">{title}</h3>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">{desc}</p>
      <Link href={link} className="flex items-center gap-2 text-[#0054A6] font-bold text-xs md:text-sm uppercase tracking-wider">
        Дэлгэрэнгүй
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </Link>
    </div>
  );
}