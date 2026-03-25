"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsPage from "@/components/Products"; // Компонентоо зөв импортлоорой

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("chemical");

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col cursor-default">
      <Header />
      
      <div className="flex-1 max-w-7xl mx-auto w-full p-12">
        <h1 className="text-3xl font-bold text-gray-800">Бүтээгдэхүүний каталог</h1>
        <p className="text-gray-500 mt-2">Химийн бодиc, лабораторийн шил сав, хамгаалах хэрэгсэл</p>

        <div className="flex flex-col md:flex-row gap-8 mt-10">
          {/* SIDEBAR (Өмнөх логик) */}
          <div className="rounded-2xl bg-white shadow-sm w-full md:w-1/4 h-fit border border-gray-100">
            <div className="font-bold px-8 pb-3 pt-6 text-gray-700">Шүүлтүүр</div>
            <div className="mx-8 border-b border-gray-100"></div>
            <div className="font-bold text-[10px] text-gray-400 px-8 pt-6 uppercase tracking-widest">АНГИЛАЛ</div>
            <div className="px-8 py-4 flex flex-col gap-4">
              {['chemical', 'glassware', 'protection'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded accent-[#0054A6]"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                  />
                  <span className={`text-sm ${selectedCategory === cat ? 'text-[#0054A6] font-semibold' : 'text-gray-600'}`}>
                    {cat === 'chemical' ? 'Химийн бодис' : cat === 'glassware' ? 'Шил сав' : 'Хамгаалах хэрэгсэл'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1">
            <ProductsPage category={selectedCategory} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}