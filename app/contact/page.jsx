"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
  const [loading, setLoading] = useState(false);

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
        alert("Таны хүсэлт амжилттай илгээгдлээ. Бид тантай удахгүй холбогдох болно.");
        e.target.reset();
      } else {
        alert("Илгээхэд алдаа гарлаа.");
      }
    } catch (error) {
      alert("Сервертэй холбогдоход алдаа гарлаа.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen cursor-default">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="bg-[#0f172a] py-12 md:py-24 text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight">
          Бидэнтэй холбогдоорой
        </h1>
        <p className="max-w-2xl mx-auto opacity-80 text-xs md:text-lg leading-relaxed font-light">
          Танд тусгай зориулалтын химийн бодисын талаар асуух зүйл байна уу? <br className="hidden md:block" />
          Манай мэргэжлийн баг танд туслахад бэлэн байна.
        </p>
      </section>

      {/* --- CONTACT INFO CARDS --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 -mt-10 md:-mt-16 mb-12 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          
          {/* Phone Card */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-50 flex flex-col items-center text-center group transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-[#0054A6] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#0054A6] group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm md:text-base uppercase tracking-wider">Утас</h3>
            <div className="flex flex-col gap-1">
              <Link href="tel:+97677753888" className="text-gray-500 text-sm md:text-base hover:text-[#0054A6] font-medium transition-colors">+976 7775 3888</Link>
              <Link href="tel:+97694005088" className="text-gray-500 text-sm md:text-base hover:text-[#0054A6] font-medium transition-colors">+976 9400 5088</Link>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-50 flex flex-col items-center text-center group transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-[#0054A6] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#0054A6] group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm md:text-base uppercase tracking-wider">Имэйл хаяг</h3>
            <Link href="mailto:sales8@imp.mn" className="text-gray-500 text-sm md:text-base hover:text-[#0054A6] font-medium transition-colors">sales8@imp.mn</Link>
          </div>

          {/* Address Card */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-50 flex flex-col items-center text-center group transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-[#0054A6] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#0054A6] group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm md:text-base uppercase tracking-wider">Хаяг</h3>
            <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed px-2">
              Улаанбаатар хот, Хан-Уул дүүрэг, 2-р хороо TV5 оффис 7 давхар
            </p>
          </div>
        </div>
      </section>

      {/* --- FORM & MAP SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
        
        {/* Contact Form */}
        <div className="order-2 lg:order-1">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Захиалга / Лавлагаа</h2>
            <p className="text-gray-400 text-sm md:text-base font-light">
              Танд шаардлагатай байгаа химийн бодисын талаарх мэдээллээ доорх маягтаар илгээнэ үү. 
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Таны нэр</label>
                <input name="name" required type="text" placeholder="Нэрээ оруулна уу" className="input-style-contact" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Байгууллагын нэр</label>
                <input name="company" type="text" placeholder="Байгууллага" className="input-style-contact" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Имэйл</label>
                <input name="email" required type="email" placeholder="example@mail.com" className="input-style-contact" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Утас</label>
                <input name="phone" required type="text" placeholder="Утасны дугаар" className="input-style-contact" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Химийн бодисын төрөл</label>
              <select name="type" className="input-style-contact text-gray-500 bg-white">
                <option value="Сонгоогүй">Сонгох...</option>
                <option value="Шингэн бодис">Шингэн бодис</option>
                <option value="Хатуу бодис">Хатуу бодис</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Дэлгэрэнгүй мэдээлэл</label>
              <textarea name="experience" rows="4" placeholder="Хэрэгцээ шаардлагаа тодорхой бичнэ үү..." className="input-style-contact resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#0054A6] text-white py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#004494] transition-all shadow-lg shadow-blue-100 active:scale-[0.98] disabled:bg-gray-400"
            >
              {loading ? "Илгээж байна..." : "Илгээх"}
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex flex-col order-1 lg:order-2">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Манай байршил</h2>
            <div className="w-16 h-1 bg-[#0054A6] rounded-full mx-auto lg:mx-0"></div>
          </div>
          <div className="flex-1 bg-gray-50 rounded-3xl overflow-hidden relative border border-gray-100 shadow-inner min-h-[350px] md:min-h-[500px]">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21400.380196430386!2d106.84914350509642!3d47.896765452757634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96930061e557cf%3A0x49f338540bd6756b!2sTV5!5e0!3m2!1sen!2smn!4v1774493006583!5m2!1sen!2smn" 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
             
             {/* Map Info Badge - Only visible on desktop or large tablet */}
             <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-2xl hidden md:flex items-center gap-5 border border-white/20">
               <div className="w-12 h-12 bg-[#0054A6] rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 </svg>
               </div>
               <div>
                 <p className="text-sm font-bold text-gray-900 mb-0.5">Империал Партнерс ХХК</p>
                 <p className="text-[11px] text-gray-500 font-light leading-tight">Улаанбаатар, Хан-Уул дүүрэг, TV5 оффис 7 давхар</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        .input-style-contact {
          width: 100%;
          padding: 1rem;
          background-color: #f8fafc;
          border: 1.5px solid #f1f5f9;
          border-radius: 1rem;
          outline: none;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }
        .input-style-contact:focus {
          background-color: white;
          border-color: #0054A6;
          box-shadow: 0 0 0 4px rgba(0, 84, 166, 0.05);
        }
      `}</style>
    </div>
  );
}