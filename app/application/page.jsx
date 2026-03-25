"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Application() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Анкет амжилттай илгээгдлээ!");
        e.target.reset();
        setFileName("");
      } else {
        alert("Илгээхэд алдаа гарлаа. Та дахин оролдоно уу.");
      }
    } catch (error) {
      console.error(error);
      alert("Сервертэй холбогдоход алдаа гарлаа.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen cursor-default">
      <Header />

      <section className="bg-[#f8fafc] py-16 text-center border-b border-gray-100">
        <h1 className="text-4xl font-bold text-[#0054A6] mb-4">Ажлын анкет илгээх</h1>
        <p className="text-gray-500 max-w-xl mx-auto px-6 text-sm md:text-base">
          Манай багт нэгдэж, чадварлаг хамт олонтой хамтран ажиллахыг хүсвэл доорх анкетыг бөглөж ирүүлнэ үү.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-50 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Хувийн мэдээлэл */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-50 text-[#0054A6] rounded-full flex items-center justify-center text-sm">1</span>
                  Хувийн мэдээлэл
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Овог нэр</label>
                    <input name="name" type="text" required placeholder="Бүтэн нэрээ оруулна уу" className="input-style" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Утасны дугаар</label>
                    <input name="phone" type="tel" required placeholder="9911****" className="input-style" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Имэйл хаяг</label>
                    <input name="email" type="email" required placeholder="example@mail.com" className="input-style" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Оршин суугаа хаяг</label>
                    <input name="address" type="text" placeholder="Дүүрэг, хороо..." className="input-style" />
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* 2. Мэргэжил ба Туршлага */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-50 text-[#0054A6] rounded-full flex items-center justify-center text-sm">2</span>
                  Мэргэжил ба Туршлага
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Сонирхож буй албан тушаал</label>
                    <input name="position" type="text" placeholder="Албан тушаал..." className="input-style" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Боловсролын зэрэг</label>
                    <select name="education" className="input-style bg-gray-50">
                      <option value="Сонгоогүй">Сонгох...</option>
                      <option value="Бакалавр">Бакалавр</option>
                      <option value="Магистр">Магистр</option>
                      <option value="Тусгай дунд">Тусгай дунд</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Ажлын туршлага (Товч)</label>
                  <textarea name="experience" rows="4" placeholder="Туршлагаа бичнэ үү" className="input-style resize-none"></textarea>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* 3. Файл хавсаргах */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-50 text-[#0054A6] rounded-full flex items-center justify-center text-sm">3</span>
                  CV хавсаргах
                </h2>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors bg-gray-50/50 group cursor-pointer relative">
                  <input 
                    type="file" 
                    name="cv" 
                    id="cv-upload" 
                    required
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => setFileName(e.target.files[0]?.name || "")}
                  />
                  <div className="pointer-events-none">
                    <svg className={`w-12 h-12 mx-auto mb-4 transition-colors ${fileName ? 'text-blue-500' : 'text-gray-300 group-hover:text-[#0054A6]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm font-medium text-gray-600">
                      {fileName ? fileName : "Таны CV (PDF эсвэл Word)"}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Файлаа сонгоно уу</p>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#0054A6] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#004494] transition-all shadow-lg disabled:bg-gray-400"
              >
                {loading ? "Илгээж байна..." : "Анкет илгээх"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 0.875rem;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          outline: none;
          font-size: 0.875rem;
          transition: all 0.2s;
        }
        .input-style:focus {
          background-color: white;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  );
}