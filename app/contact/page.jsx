"use client";
import { useState } from "react"; // useState нэмсэн
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    
    // Анкетын API-тай ижил замаар явуулна. 
    // Хэрэв та өөр мэйл рүү явуулахыг хүсвэл API талдаа нөхцөл нэмж болно.
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

      {/* Hero Section */}
      <section className="bg-[#0f172a] py-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Бидэнтэй холбогдоорой</h1>
        <p className="max-w-2xl mx-auto opacity-90 text-sm md:text-base leading-relaxed">
          Танд тусгай зориулалтын химийн бодисын талаар асуух зүйл байна уу? <br />
          Манай мэргэжлийн баг танд туслахад бэлэн байна.
        </p>
      </section>

      {/* Contact Cards */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Phone Card - Click to Call */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-blue-50 text-[#0054A6] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0054A6] group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Утас</h3>
                  <Link href="tel:+97677753888" className="text-gray-500 text-sm hover:text-[#0054A6] transition-colors">+976 7775 3888</Link>
                  <Link href="tel:+97694005088" className="text-gray-500 text-sm hover:text-[#0054A6] transition-colors">+976 9400 5088</Link>
                </div>
      
                {/* Email Card - Click to Email */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-blue-50 text-[#0054A6] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0054A6] group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Имэйл хаяг</h3>
                  <Link href="mailto:sales8@imp.mn" className="text-gray-500 text-sm hover:text-[#0054A6] transition-colors">sales8@imp.mn</Link>
                </div>
      
                {/* Address Card - Click for Navigation */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-blue-50 text-[#0054A6] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0054A6] group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Хаяг</h3>
                  <Link 
                    href="https://www.google.com/maps/dir//TV5+Office" 
                    target="_blank" 
                    className="text-gray-500 text-sm hover:text-[#0054A6] transition-colors px-4"
                  >
                    Улаанбаатар хот, Хан-Уул дүүрэг, 2-р хороо TV5 оффис 7 давхар
                  </Link>
                </div>
              </div>
            </section>

      {/* Form and Map Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Химийн бодисын захиалга / Лавлагаа</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Танд шаардлагатай байгаа химийн бодисын талаарх мэдээллээ доорх маягтаар илгээнэ үү. 
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Таны нэр</label>
                <input name="name" required type="text" placeholder="Нэрээ оруулна уу" className="input-style-contact" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Байгууллагын нэр</label>
                <input name="company" type="text" placeholder="Байгууллага" className="input-style-contact" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Имэйл</label>
                <input name="email" required type="email" placeholder="example@mail.com" className="input-style-contact" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Утас</label>
                <input name="phone" required type="text" placeholder="Утасны дугаар" className="input-style-contact" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Химийн бодисын төрөл</label>
              <select name="type" className="input-style-contact text-gray-500">
                <option value="Сонгоогүй">Сонгох...</option>
                <option value="Шингэн бодис">Шингэн бодис</option>
                <option value="Хатуу бодис">Хатуу бодис</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Дэлгэрэнгүй мэдээлэл</label>
              <textarea name="experience" rows="4" placeholder="Хэрэгцээ шаардлагаа тодорхой бичнэ үү..." className="input-style-contact resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#0054A6] text-white py-3 rounded-lg font-bold hover:bg-[#004494] transition-colors shadow-md disabled:bg-gray-400"
            >
              {loading ? "Илгээж байна..." : "Илгээх"}
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Манай байршил</h2>
          <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-100 shadow-sm min-h-[400px]">
             {/* Google Maps Embed - Та өөрийн Map линкээ энд src-д солиод тавихад болно */}
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10700.190098215246!2d106.87824106725455!3d47.896765452757634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96930061e557cf%3A0x49f338540bd6756b!2sTV5!5e0!3m2!1sen!2smn!4v1774400292678!5m2!1sen!2smn" 
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              ></iframe>
             
             {/* Map Info Badge */}
             <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-50">
               <div className="w-10 h-10 bg-[#0054A6] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 </svg>
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-800">Империал Партнерс ХХК Оффис</p>
                 <p className="text-[10px] text-gray-400">Улаанбаатар хот, Хан-Уул дүүрэг, 2-р хороо TV5 оффис 7 давхар</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        .input-style-contact {
          width: 100%;
          padding: 0.75rem;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          outline: none;
          font-size: 0.875rem;
        }
        .input-style-contact:focus {
          ring: 2px;
          ring-color: #0054A6;
          border-color: #0054A6;
        }
      `}</style>
    </div>
  );
}