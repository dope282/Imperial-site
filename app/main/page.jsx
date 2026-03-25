import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Hero() {
  return (
    <div className="bg-white min-h-screen cursor-default">
      <Header />

      {/* 1. Hero Section - Орчин үеийн цэнхэр градиент арын фонтой */}
      <section className="relative h-[85vh] bg-[#f8fafc] flex items-center overflow-hidden">
        {/* Арын фонны хэлбэр дүрс */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 skew-x-[-15deg] translate-x-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 items-center relative z-10 w-full">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-extrabold text-[#0054A6] leading-tight uppercase tracking-tight">
              Imperial <span className="text-[var--color-primary]">Partners</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Бид орчин үеийн дэвшилтэт химийн бодис, шил сав болон аюулгүй
              ажиллагааны хэрэгслийг мэргэжлийн түвшинд нийлүүлж байна.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/products" className="bg-[#0054A6] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all shadow-lg shadow-blue-200">
                Бүтээгдэхүүн үзэх
              </Link>
              <Link href="/about" className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm">
                Илүү ихийг
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-end relative h-[500px]">
            {/* Hero Image - Энд өөрийн зургаа Image tag-аар солино уу */}
            <div className="relative w-full h-full">
              <Image 
                src="/gazar.png" 
                fill 
                className="object-contain drop-shadow-2xl" 
                alt="Main visualization"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section - Тоон үзүүлэлтүүд */}
      <section className="py-24 max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[450px] bg-gray-50 rounded-3xl p-8 flex items-center justify-center">
            {/* Чимэглэлийн зураг эсвэл SVG */}
            <Image src="/gazarmap.png" fill className="object-contain p-12 opacity-80" alt="Plant visualization"/>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-gray-800">Империал Партнерс ХХК</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            Бид Монгол улсын шинжлэх ухаан, боловсрол болон уул уурхайн салбарт
            чанартай лабораторийн тоног төхөөрөмж, химийн бодисыг нийлүүлэгч
            компани юм.
          </p>
          <p className="text-gray-600 font-medium italic border-l-4 border-[#0054A6] pl-4">
            Олон улсын нэр хүнд бүхий брэндүүдийн албан ёсны түншээр ажиллаж, харилцагчиддаа хамгийн найдвартай бүтээгдэхүүнийг санал болгож байна.
          </p>
          <div className="flex gap-6 mt-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1">
              <h3 className="text-3xl font-black text-[#0054A6] mb-1">10+</h3>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Жилийн туршлага</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1">
              <h3 className="text-3xl font-black text-[#0054A6] mb-1">100+</h3>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Байнгын харилцагч</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categories Section - Ангиллууд */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Бүтээгдэхүүний ангилал</h2>
            <div className="w-20 h-1.5 bg-[#0054A6] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <CategoryCard 
              icon="/SVG.svg" 
              title="Химийн бодис" 
              desc="Техникийн зэрэглэлийн төрөл бүрийн химийн бодисууд." 
              link="/products?cat=chemical"
            />
            {/* Category 2 */}
            <CategoryCard 
              icon="/icon1.svg" 
              title="Шил сав, хэрэгсэл" 
              desc="Халуунд тэсвэртэй шилэн колбо, стакан болон бусад лабораторийн туслах хэрэгсэл." 
              link="/products?cat=glassware"
            />
            {/* Category 3 */}
            <CategoryCard 
              icon="/SVG1.svg" 
              title="Хөдөлмөр хамгаалал" 
              desc="Аюулгүй ажиллагааны хувцас, бээлий, нүдний шил болон амьсгалын замын хамгаалалт." 
              link="/products?cat=protection"
            />
          </div>
        </div>
      </section>

      {/* 4. Partners Section - Хамтрагчид */}
      <section className="py-24 max-w-7xl mx-auto px-12">
        <h2 className="text-2xl font-bold text-center text-gray-400 uppercase tracking-widest mb-16">Хамтрагч байгууллагууд</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-80 grayscale hover:grayscale-0 transition-all">
          <div className="h-12 relative"><Image src="/partners/logo1.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo2.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo3.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo4.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo5.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo6.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo7.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo8.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo9.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo10.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo11.png" fill className="object-contain" alt="Partner"/></div>
          <div className="h-12 relative"><Image src="/partners/logo12.png" fill className="object-contain" alt="Partner"/></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Ангиллын карт компонент
function CategoryCard({ icon, title, desc, link }) {
  return (
    <div className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0054A6] transition-colors">
        <div className="relative w-8 h-8 group-hover:invert transition-all">
          <Image src={icon} fill alt={title} className="object-contain" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">{desc}</p>
      <Link href={link} className="flex items-center gap-2 text-[#0054A6] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
        Дэлгэрэнгүй
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </Link>
    </div>
  );
}