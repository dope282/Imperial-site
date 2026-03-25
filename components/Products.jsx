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
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const maxVisible = isMobile ? 3 : 7;
    
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
    <div className="flex flex-col gap-4 md:gap-6">
      {/* Search Input */}
      <div className={`sticky top-20 z-20 md:static ${!isGrid ? 'bg-white p-4 md:p-6 rounded-t-2xl border-x border-t border-gray-100 shadow-sm' : ''}`}>
        <input
          type="text"
          placeholder={`${category === "chemical" ? "Бодис хайх..." : "Бүтээгдэхүүн хайх..."}`}
          value={search}
          onChange={handleSearchChange}
          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0054A6] outline-none bg-white shadow-sm text-sm"
        />
      </div>

      {isGrid ? (
        /* --- GRID DISPLAY (Glassware & Protection) --- */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {currentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all">
              <div className="relative aspect-square bg-gray-50">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base line-clamp-1">{item.name}</h3>
                <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* --- TABLE / CARD DISPLAY (Chemical) --- */
        <div className="bg-white rounded-b-2xl shadow-sm overflow-hidden border border-gray-100">
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

          {/* Mobile Card View (Зөвхөн гар утсан дээр харагдана) */}
          <div className="md:hidden divide-y divide-gray-100">
            {currentItems.map((p, i) => (
              <div key={i} className="p-4 space-y-2">
                <div className="text-[#0054A6] font-bold text-sm leading-tight">{p["Олон улсын нэр"]}</div>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  <div>
                    <span className="text-gray-400 block uppercase text-[9px] tracking-tighter">Монгол нэр</span>
                    <span className="text-gray-700">{p["Монгол нэр"] || "-"}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase text-[9px] tracking-tighter">Томъёо</span>
                    <span className="text-gray-600 font-serif">{p["Томъёо"] || "-"}</span>
                  </div>
                </div>
                <div className="inline-block bg-gray-50 px-2 py-0.5 rounded text-[10px] text-gray-500 border border-gray-100">
                  CAS: {p["CAS дугаар"]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- COMMON PAGINATION --- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-10">
        <div className="text-[10px] md:text-xs text-gray-400 font-medium">
          Нийт {displayData.length} илэрц
        </div>
        <div className="flex gap-1">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="w-8 h-8 flex items-center justify-center border rounded-md disabled:opacity-20 bg-white">←</button>
          {getPages(totalPages).map((p, i) => (
            <button
              key={i}
              onClick={() => typeof p === 'number' && setPage(p)}
              className={`min-w-[32px] h-8 flex items-center justify-center border rounded-md text-xs font-bold transition-all ${page === p ? "bg-[#0054A6] text-white border-[#0054A6]" : "bg-white text-gray-600 hover:border-gray-400"}`}
            >
              {p}
            </button>
          ))}
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="w-8 h-8 flex items-center justify-center border rounded-md disabled:opacity-20 bg-white">→</button>
        </div>
      </div>
    </div>
  );
}