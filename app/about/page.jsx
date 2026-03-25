"use client"; // Энийг заавал нэмнэ

import { useRef } from "react"; // useRef-ийг импортлох
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  // 1. Scroll хийх хэсгүүдийн "лавлах" (Reference) үүсгэх
  const historyRef = useRef(null);
  const visionRef = useRef(null);

  // 2. Гүйлгэх функц бичих
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100, // Header-ийн өндрийг хасаж тооцов
      behavior: "smooth", // Зөөлөн гүйлгэх
    });
  };

  return (
    <div className="bg-white min-h-screen cursor-default">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#f8fafc] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <h1 className="text-5xl font-bold text-[#0054A6] mb-6">Империал Партнерс</h1>
          <p className="max-w-xl text-gray-500 leading-relaxed mb-8">
            Манай компани нь олон улсын стандартад нийцсэн химийн бодис, лабораторийн тоног төхөөрөмж, 
            хамгаалалтын хувцас хэрэглэлийг чанарын өндөр түвшинд нийлүүлэн ажиллаж байна.
          </p>
          <div className="flex gap-4">
            {/* 3. Товчлуурууд дээр onClick нэмэх */}
            <button 
              onClick={() => scrollToSection(historyRef)}
              className="bg-[#0054A6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004494] transition-colors cursor-pointer"
            >
              Түүхэн замнал
            </button>
            <button 
              onClick={() => scrollToSection(visionRef)}
              className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
            >
              Бидний алсын хараа
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 skew-x-[-15deg] translate-x-12"></div>
      </section>

      {/* Company History Section - ref-ийг холбох */}
      <section ref={historyRef} className="py-24 max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="bg-gray-100 rounded-2xl aspect-[4/3] relative overflow-hidden shadow-sm">
              <Image 
                src="/images/about-plant.png" 
                alt="About us" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0056b3] text-white p-8 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-xs opacity-80">Жилийн туршлага</div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Компанийн түүх</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              "Империал партнерс" ХХК 2021 оноос Химийн хорт болон аюултай бодис импортлох, 
              борлуулах, ашиглах тусгай зөвшөөрлийн эрх авч үйл ажиллагаагаа эхлүүлсэн.
            </p>
            <p className="text-gray-500 leading-relaxed">
              ОХУ болон БНХАУ-тай гадаад харилцаагаа тэлж, олон улсад хүлээн зөвшөөрөгдсөн 
              чанар ашиглалтын шаардлага хангасан бараа бүтээгдэхүүнийг импортлон Монгол улсын 
              салбар салбарын "Үндэсний топ" үйлдвэрлэгч нартай хамтран ажиллаж байна.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Values Section - ref-ийг холбох */}
      <section ref={visionRef} className="py-20 bg-[#fcfdfe]">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <h2 className="text-3xl font-bold mb-12 relative inline-block">
            Алсын хараа ба Эрхэм зорилго, зорилт
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#0056b3]"></span>
          </h2>
          {/* ... картууд хэвээрээ ... */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50 text-left">
              <div className="w-12 h-12 bg-blue-50 text-[#0054A6] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Алсын хараа</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Стандарт нь бидний тэмүүлж буй соёлын жим.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50 text-left">
              <div className="w-12 h-12 bg-blue-50 text-[#0054A6] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Эрхэм зорилго</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Оролцогч бүх талуудтай хамтран санхүүгийн эрх чөлөөнд хүрэхийг эрмэлзэнэ.
              </p>
            </div>
            {/* Goal */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50 text-left">
              <div className="w-12 h-12 bg-blue-50 text-[#0054A6] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">ЗОРИЛТ</h3>
              <ul className="text-sm text-gray-500 space-y-3 leading-relaxed">
                <li>1. Чанар стандартын шаардлага хангасан химийн хорт бодис нийлүүлнэ.</li>
                <li>2. Лабораторийн хэрэгсэл, багаж тоног төхөөрөмжийн чанартай нийлүүлэлт.</li>
                <li>3. Эрэлт хэрэгцээнд нийцсэн хамгаалалтын хувцас хэрэглэл.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

{/* ISO Standards Section */}
<section className="py-24 max-w-7xl mx-auto px-12">
  <h2 className="text-3xl font-bold mb-8 text-gray-800">Чанарын стандартууд</h2>
  <div className="flex flex-col md:flex-row gap-16 items-start">
    <div className="w-full md:w-1/2">
      <p className="text-gray-500 mb-8 leading-relaxed">
        Бид үйл ажиллагаандаа олон улсын чанарын удирдлагын тогтолцоог мөрдлөг 
        болгон ажилладаг. Энэ нь бидний харилцагчдадаа өгч буй хамгийн том баталгаа юм.
      </p>
      <div className="space-y-4">
        {[
          "MNS ISO 9001:2015 Стандарт",
          "MNS ISO 17025:2017 Стандарт",
          "MNS ISO 45001:2018 Стандарт"
        ].map((std, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-700">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xs font-bold">✓</span>
            </div>
            <span className="font-medium">{std}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Зурагтай картуудын хэсэг */}
    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {[
        { id: "9001", img: "/images/iso-9001.png", label: "Чанар" },
        { id: "17025", img: "/images/iso-17025.png", label: "Лаборатори" },
        { id: "45001", img: "/images/iso-45001.png", label: "Аюулгүй байдал" }
      ].map((iso) => (
        <div key={iso.id} className="group">
          <div className="bg-white aspect-square rounded-2xl flex flex-col items-center justify-center p-2 border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src="/iso1.png" 
                alt={`ISO ${iso.id}`}
                fill
                className="object-contain p-4" // Логог бүтэн харуулахын тулд object-contain
              />
            </div>
          </div>
          <p className="text-center mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            ISO {iso.id}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}