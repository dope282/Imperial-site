"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsPage from "@/components/Products";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("chemical");

  const categories = [
    { id: 'chemical', name: 'Химийн бодис' },
    { id: 'glassware', name: 'Шил сав' },
    { id: 'protection', name: 'Хамгаалах хэрэгсэл' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col cursor-default">
      <Header />
      
      <div className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-12">
        {/* Title Area */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Бүтээгдэхүүний каталог</h1>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Химийн бодиc, лабораторийн шил сав, хамгаалах хэрэгсэл
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8 md:mt-10">
          
          {/* SIDEBAR / FILTER AREA */}
          <div className="w-full md:w-1/4 h-fit">
            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
              {/* Desktop Header */}
              <div className="hidden md:block font-bold px-8 pb-3 pt-6 text-gray-700">Шүүлтүүр</div>
              <div className="hidden md:block mx-8 border-b border-gray-100"></div>
              <div className="hidden md:block font-bold text-[10px] text-gray-400 px-8 pt-6 uppercase tracking-widest">АНГИЛАЛ</div>

              {/* Mobile Filter Horizontal Scroll / Desktop Vertical List */}
              <div className="px-4 md:px-8 py-4 flex md:flex-col gap-2 md:gap-4 overflow-x-auto no-scrollbar md:overflow-visible">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-3 px-4 py-2 md:px-0 md:py-0 rounded-full md:rounded-none whitespace-nowrap transition-all duration-200 border md:border-none ${
                      selectedCategory === cat.id 
                        ? 'bg-[#0054A6] text-white md:bg-transparent md:text-[#0054A6] md:font-semibold border-[#0054A6]' 
                        : 'bg-white text-gray-600 border-gray-200 md:hover:text-[#0054A6]'
                    }`}
                  >
                    {/* Desktop Checkbox (Mobile-д нуух) */}
                    <div className={`hidden md:flex w-4 h-4 rounded border items-center justify-center transition-all ${
                      selectedCategory === cat.id ? 'bg-[#0054A6] border-[#0054A6]' : 'border-gray-300'
                    }`}>
                      {selectedCategory === cat.id && (
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      )}
                    </div>
                    
                    <span className="text-xs md:text-sm">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl md:bg-transparent p-4 md:p-0 shadow-sm md:shadow-none border border-gray-50 md:border-none">
               <ProductsPage category={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}