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

      {/* Hero Section - Mobile optimized */}
      <section className="bg-[#f8fafc] py-10 md:py-20 text-center border-b border-gray-100">
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#0054A6] mb-3 px-6">
          Ажлын анкет илгээх
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto px-8 text-[13px] md:text-base leading-relaxed">
          Манай багт нэгдэж, чадварлаг хамт олонтой хамтран ажиллахыг хүсвэл доорх анкетыг бөглөж ирүүлнэ үү.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-20">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-100/50 border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
              
              {/* 1. Хувийн мэдээлэл */}
              <div className="space-y-5">
                <h2 className="text-base md:text-lg font-bold text-gray-800 flex items-center gap-3">
                  <span className="w-7 h-7 md:w-8 md:h-8 bg-[#0054A6] text-white rounded-lg flex items-center justify-center text-xs shadow-lg shadow-blue-100">1</span>
                  Хувийн мэдээлэл
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="group space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Овог нэр</label>
                    <input name="name" type="text" required placeholder="Бүтэн нэрээ оруулна уу" className="input-style" />
                  </div>
                  <div className="group space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Утасны дугаар</label>
                    <input name="phone" type="tel" required placeholder="9911****" className="input-style" />
                  </div>
                  <div className="group space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Имэйл хаяг</label>
                    <input name="email" type="email" required placeholder="example@mail.com" className="input-style" />
                  </div>
                  <div className="group space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Оршин суугаа хаяг</label>
                    <input name="address" type="text" placeholder="Дүүрэг, хороо..." className="input-style" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-50"></div>

              {/* 2. Мэргэжил ба Туршлага */}
              <div className="space-y-5">
                <h2 className="text-base md:text-lg font-bold text-gray-800 flex items-center gap-3">
                  <span className="w-7 h-7 md:w-8 md:h-8 bg-[#0054A6] text-white rounded-lg flex items-center justify-center text-xs shadow-lg shadow-blue-100">2</span>
                  Мэргэжил ба Туршлага
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="group space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Сонирхож буй албан тушаал</label>
                    <input name="position" type="text" placeholder="Албан тушаал..." className="input-style" />
                  </div>
                  <div className="group space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Боловсролын зэрэг</label>
                    <select name="education" className="input-style appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em] cursor-pointer">
                      <option value="Сонгоогүй">Сонгох...</option>
                      <option value="Бакалавр">Бакалавр</option>
                      <option value="Магистр">Магистр</option>
                      <option value="Тусгай дунд">Тусгай дунд</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Ажлын туршлага (Товч)</label>
                  <textarea name="experience" rows="4" placeholder="Өмнөх ажлын туршлага болон ур чадвараа энд бичнэ үү..." className="input-style resize-none"></textarea>
                </div>
              </div>

              <div className="h-px bg-gray-50"></div>

              {/* 3. CV Upload */}
              <div className="space-y-5">
                <h2 className="text-base md:text-lg font-bold text-gray-800 flex items-center gap-3">
                  <span className="w-7 h-7 md:w-8 md:h-8 bg-[#0054A6] text-white rounded-lg flex items-center justify-center text-xs shadow-lg shadow-blue-100">3</span>
                  CV хавсаргах
                </h2>
                <div className="relative group border-2 border-dashed border-gray-200 rounded-2xl p-6 md:p-10 text-center hover:border-[#0054A6] hover:bg-blue-50/30 transition-all cursor-pointer">
                  <input 
                    type="file" 
                    name="cv" 
                    id="cv-upload" 
                    required
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    onChange={(e) => setFileName(e.target.files[0]?.name || "")}
                  />
                  <div className="space-y-3">
                    <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center transition-all ${fileName ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-400 group-hover:scale-110'}`}>
                      {fileName ? (
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className={`text-[13px] md:text-sm font-bold ${fileName ? 'text-green-600' : 'text-gray-600'}`}>
                        {fileName ? fileName : "Таны CV (PDF эсвэл Word)"}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-tighter">Сонгохын тулд дарна уу</p>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#0054A6] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-[#004494] transition-all shadow-xl shadow-blue-100 active:scale-[0.98] disabled:bg-gray-300 disabled:shadow-none"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Илгээж байна...
                  </span>
                ) : "Анкет илгээх"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 1rem;
          background-color: #fcfdfe;
          border: 1.5px solid #f1f5f9;
          border-radius: 1rem;
          outline: none;
          font-size: 0.875rem;
          color: #1e293b;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .input-style:hover {
          border-color: #e2e8f0;
          background-color: #f8fafc;
        }
        .input-style:focus {
          background-color: white;
          border-color: #0054A6;
          box-shadow: 0 0 0 4px rgba(0, 84, 166, 0.08);
        }
        .input-style::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}