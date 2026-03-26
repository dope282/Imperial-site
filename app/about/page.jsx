"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  const historyRef = useRef(null);
  const visionRef = useRef(null);

  const scrollToSection = (elementRef) => {
    // Header-ийн өндөрт тааруулан offset-ийг mobile дээр 70, desktop дээр 100 болгов
    const offset = typeof window !== 'undefined' && window.innerWidth < 768 ? 70 : 100; 
    const elementPosition = elementRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white min-h-screen cursor-default">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#f8fafc] py-12 md:py-24 overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-extrabold text-[#0054A6] mb-6 tracking-tight">
              Империал Партнерс
            </h1>
            <p className="text-gray-500 leading-relaxed mb-10 text-sm md:text-lg max-w-xl mx-auto md:mx-0">
              Манай компани нь олон улсын стандартад нийцсэн химийн бодис, лабораторийн тоног төхөөрөмж, 
              хамгаалалтын хувцас хэрэглэлийг чанарын өндөр түвшинд нийлүүлэн ажиллаж байна.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection(historyRef)}
                className="bg-[#0054A6] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all shadow-lg shadow-blue-100 active:scale-95 text-sm md:text-base"
              >
                Түүхэн замнал
              </button>
              <button 
                onClick={() => scrollToSection(visionRef)}
                className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm active:scale-95 text-sm md:text-base"
              >
                Бидний алсын хараа
              </button>
            </div>
          </div>
        </div>
        {/* Decorative background for desktop */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-blue-50 skew-x-[-12deg] translate-x-20"></div>
      </section>

      {/* --- COMPANY HISTORY --- */}
      <section ref={historyRef} className="py-16 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 relative order-2 md:order-1">
            <div className="bg-gray-100 rounded-3xl aspect-[4/3] relative overflow-hidden shadow-2xl shadow-gray-200/50">
              <Image 
                src="/history.jpg" 
                alt="Imperial Partners History" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-8 bg-[#0054A6] text-white p-5 md:p-10 rounded-2xl shadow-xl">
              <div className="text-2xl md:text-4xl font-black mb-1">10+</div>
              <div className="text-[10px] md:text-xs font-bold opacity-90 uppercase tracking-widest">Жилийн туршлага</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">Компанийн түүх</h2>
            <div className="space-y-5 text-sm md:text-base text-gray-500 leading-relaxed font-light">
              <p>
                <strong className="text-gray-800 font-semibold">"Империал партнерс" ХХК</strong> 2021 оноос Химийн хорт болон аюултай бодис импортлох, 
                борлуулах, ашиглах тусгай зөвшөөрлийн эрх авч үйл ажиллагаагаа эхлүүлсэн.
              </p>
              <p>
                ОХУ болон БНХАУ-тай гадаад харилцаагаа тэлж, олон улсад хүлээн зөвшөөрөгдсөн 
                чанар ашиглалтын шаардлага хангасан бараа бүтээгдэхүүнийг импортлон Монгол улсын 
                салбар салбарын <span className="text-[#0054A6] font-medium">"Үндэсний топ"</span> үйлдвэрлэгч нартай хамтран ажиллаж байна.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section ref={visionRef} className="py-16 md:py-28 bg-[#fcfdfe] border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Алсын хараа ба Эрхэм зорилго</h2>
            <div className="w-20 h-1.5 bg-[#0054A6] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Vision Card */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-[#0054A6] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0054A6] group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Алсын хараа</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                Стандарт нь бидний тэмүүлж буй соёлын жим. Бид салбартаа үлгэр жишээ соёлыг тогтоохыг зорино.
              </p>
            </div>
            {/* Mission Card */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-[#0054A6] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0054A6] group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Эрхэм зорилго</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                Оролцогч бүх талуудтай хамтран тогтвортой хөгжил болон санхүүгийн эрх чөлөөнд хүрэхийг эрмэлзэнэ.
              </p>
            </div>
            {/* Goal Card */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-[#0054A6] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0054A6] group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-6">ЗОРИЛТ</h3>
              <ul className="text-xs md:text-sm space-y-4 font-light opacity-90 text-gray-500">
                <li className="flex gap-3"><span className="font-bold text-gray-500">01.</span> Чанар стандартын шаардлага хангасан химийн бодис нийлүүлнэ.</li>
                <li className="flex gap-3"><span className="font-bold text-gray-500">02.</span> Лабораторийн хэрэгсэл, багаж тоног төхөөрөмжөөр хангах.</li>
                <li className="flex gap-3"><span className="font-bold text-gray-500">03.</span> Эрэлт хэрэгцээнд нийцсэн хамгаалалтын хувцас нийлүүлэх.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- STANDARDS --- */}
      <section className="py-16 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">Чанарын стандартууд</h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-sm md:text-lg font-light">
              Бид үйл ажиллагаандаа олон улсын чанарын удирдлагын тогтолцоог мөрдлөг 
              болгон ажилладаг. Энэ нь бидний харилцагчдадаа өгч буй хамгийн том баталгаа юм.
            </p>
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              {[
                "MNS ISO 9001:2015",
                "MNS ISO 17025:2017",
                "MNS ISO 45001:2018"
              ].map((std, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-100">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="font-bold text-gray-700 text-xs md:text-sm uppercase tracking-tight">{std}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ISO Grid - Compact for mobile */}
          <div className="w-full lg:w-1/2 grid grid-cols-3 gap-3 md:gap-6">
            {[9001, 17025, 45001].map((id) => (
              <div key={id} className="group text-center">
                <div className="bg-white aspect-square rounded-2xl md:rounded-3xl flex items-center justify-center p-2 border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <div className="relative w-full h-full p-2 md:p-6">
                    <Image 
                      src="/iso1.png" 
                      alt={`ISO ${id}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="mt-4 text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">ISO {id}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}