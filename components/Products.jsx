"use client";
import { useEffect, useState } from "react";

export default function ProductsPage({ category }) {
  const [products, setProducts] = useState([]);      
  const [glassware, setGlassware] = useState([]);    
  const [protection, setProtection] = useState([]);  
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/products").then(res => res.json()).then(data => setProducts(data));
    fetch("/api/productsGlassware").then(res => res.json()).then(data => setGlassware(data));
    fetch("/api/productsProtection").then(res => res.json()).then(data => setProtection(data));
  }, []);

  useEffect(() => {
    setPage(1);
    setSearch("");
  }, [category]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  let displayData = [];
  let isGrid = false;
  let itemsPerPage = 10;

  if (category === "chemical") {
    displayData = products.filter((p) =>
      ["Олон улсын нэр", "Монгол нэр", "Томъёо", "CAS дугаар"].some((key) =>
        p[key]?.toLowerCase().includes(search.toLowerCase())
      )
    );
    isGrid = false;
    itemsPerPage = 10;
  } else {
    const sourceData = category === "glassware" ? glassware : protection;
    displayData = sourceData.filter((item) =>
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase())
    );
    isGrid = true;
    itemsPerPage = 6;
  }

  const totalPages = Math.ceil(displayData.length / itemsPerPage);
  const startIdx = (page - 1) * itemsPerPage;
  const currentItems = displayData.slice(startIdx, startIdx + itemsPerPage);

  const getPages = (total) => {
    const pages = [];
    // СЕРВЕР ТАЛД (BUILD) АЛДАА ӨГӨХГҮЙ БАЙХ ЗАСВАР:
    const isClient = typeof window !== 'undefined';
    const isMobile = isClient && window.innerWidth < 768;
    const maxVisible = isMobile ? 3 : 5; // Илүү компакт болгохын тулд 5 болгов
    
    if (total <= maxVisible) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      let s = Math.max(2, page - (isMobile ? 0 : 1));
      let e = Math.min(total - 1, page + (isMobile ? 0 : 1));
      
      if (s > 2) pages.push("…");
      for (let i = s; i <= e; i++) pages.push(i);
      if (e < total - 1) pages.push("…");
      pages.push(total);
    }
    return pages;
  };

  return (
    <div className="flex flex-col gap-3 md:gap-6">
      {/* Search Input - Mobile дээр илүү компакт, Sticky (дээрээ наалдана) */}
      <div className="sticky top-[64px] md:top-24 z-30 py-2 bg-gray-50/80 backdrop-blur-sm">
        <input
          type="text"
          placeholder={`${category === "chemical" ? "Бодис хайх..." : "Бүтээгдэхүүн хайх..."}`}
          value={search}
          onChange={handleSearchChange}
          className="w-full p-2.5 md:p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0054A6] outline-none bg-white shadow-sm text-sm"
        />
      </div>

      {isGrid ? (
        /* --- GRID DISPLAY (Glassware & Protection) --- */
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {currentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="relative aspect-square bg-gray-50 border-b border-gray-50">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-95 group-active:scale-105 transition-transform" />
              </div>
              <div className="p-3 md:p-5">
                <h3 className="font-bold text-gray-800 mb-1 text-[13px] md:text-base line-clamp-1">{item.name}</h3>
                <p className="text-[10px] md:text-xs text-gray-400 leading-tight line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* --- TABLE / CARD DISPLAY (Chemical) --- */
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <th className="p-4 border-b">Олон улсын нэр</th>
                  <th className="p-4 border-b">Монгол нэр</th>
                  <th className="p-4 border-b">Томъёо</th>
                  <th className="p-4 border-b">CAS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {currentItems.map((p, i) => (
                  <tr key={i} className="hover:bg-blue-50/30 transition-colors text-sm">
                    <td className="p-4 text-[#0054A6] font-medium">{p["Олон улсын нэр"]}</td>
                    <td className="p-4 text-gray-600">{p["Монгол нэр"]}</td>
                    <td className="p-4 font-serif text-gray-500">{p["Томъёо"]}</td>
                    <td className="p-4 text-gray-400">{p["CAS дугаар"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View (Илүү нягт, 2 баганаар) */}
          <div className="md:hidden grid grid-cols-1 divide-y divide-gray-50">
            {currentItems.map((p, i) => (
              <div key={i} className="p-3.5 space-y-1.5 active:bg-gray-50">
                <div className="text-[#0054A6] font-bold text-[13px] leading-snug">{p["Олон улсын нэр"]}</div>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-tighter block">Монгол</span>
                    <span className="text-gray-700 text-[11px] font-medium line-clamp-1">{p["Монгол нэр"] || "-"}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 uppercase tracking-tighter block">Томъёо</span>
                    <span className="text-gray-600 font-serif text-[11px]">{p["Томъёо"] || "-"}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-[9px] text-gray-500 font-mono">
                    CAS: {p["CAS дугаар"]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- COMMON PAGINATION (Compact) --- */}
      <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-12">
        <div className="hidden sm:block text-[10px] text-gray-400 font-medium">
          {displayData.length} илэрц
        </div>
        <div className="flex items-center gap-1 mx-auto sm:mx-0">
          <button 
            onClick={() => setPage(p => Math.max(1, p - 1))} 
            disabled={page === 1} 
            className="w-8 h-8 flex items-center justify-center border rounded-lg disabled:opacity-20 text-gray-400"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          
          <div className="flex gap-1">
            {getPages(totalPages).map((p, i) => (
              <button
                key={i}
                onClick={() => typeof p === 'number' && setPage(p)}
                className={`w-8 h-8 flex items-center justify-center border rounded-lg text-[11px] font-bold transition-all ${
                  page === p ? "bg-[#0054A6] text-white border-[#0054A6]" : "bg-white text-gray-600 border-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setPage(p => Math.min(totalPages, p + 1))} 
            disabled={page === totalPages} 
            className="w-8 h-8 flex items-center justify-center border rounded-lg disabled:opacity-20 text-gray-400"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}