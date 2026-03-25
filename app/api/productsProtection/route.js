import { NextResponse } from "next/server";

export async function GET() {
  const protectionProducts = [
    {
      id: 1,
      name: "100111/Шил",
      description: "Гэрэл гялбалтыг бууруулна. Агаар чөлөөтэй нэвтрүүлнэ.",
      image: "/images/zurag46.jpg",
      category: "protection"
    },
    {
      id: 2,
      name: "SG-71009/Хамгаалалтын нүдний шил ",
      description: "Спорт загвартай, Хэрэглэхэд хялбар.",
      image: "/images/zurag50.jpg",
      category: "protection"
    },
    {
      id: 3,
      name: "CE-002/Шил",
      description: "Масктай хамт хэрэглэхэд боломжтой. Агаар чөлөөтэй нэвтрүүлнэ.",
      image: "/images/zurag41.jpg",
      category: "protection"
    },
    {
      id: 4,
      name: "AL-026/Шил",
      description: "Маш хөнгөн, агаарыг чөлөөтэй нэвтрүүлнэ.",
      image: "/images/zurag49.jpg",
      category: "protection"
    },
    {
      id: 5,
      name: "CE-002/Хамгаалах маск",
      description: "Солигддог шүүлтүүртэй, химийн бодисын аюулт хийнээс хамгаална.",
      image: "/images/zurag40.jpg",
      category: "protection"
    },
    {
      id: 6,
      name: "CE-001/Хамгаалах маск",
      description: "Солигддог шүүлтүүртэй, химийн бодисын аюулт хийнээс хамгаална.",
      image: "/images/zurag43.jpg",
      category: "protection"
    },
    {
      id: 7,
      name: "K-4000/Хамгаалалтын хувцас",
      description: "Материал: Олон давхар нэхмэл бус бүрхүүлт давхарга Зориулалт: Тод шар өнгө нь осол, эрсдэлээс сэргийлж ажилчныг харагдах байдлыг нэмэгдүүлнэ Цахилгаанжихгүй",
      image: "/images/zurag29.jpg",
      category: "protection"
    },
    {
      id: 8,
      name: "MC-3000/Хамгаалалтын хувцас",
      description: "Материал: Өндөр чанарын эсэргүүцэлтэй Зориулалт: Халдвар хамгаалал болон тоосонцроос хамгаална Нэг удаагийн халдвар хамгаалалтын хувцас",
      image: "/images/zurag48.jpg",
      category: "protection"
    },
    {
      id: 9,
      name: "406115/Хамгаалалтын хувцас",
      description: "Материал: Өндөр чанарын эсэргүүцэлтэй Зориулалт: Цацраг идэвхт туяанаас хамгаалах Нэг удаагийн хамгаалалтын хувцас",
      image: "/images/zurag28.jpg",
      category: "protection"
    },
    {
      id: 10,
      name: "K-1000/Хамгаалалтын хувцас",
      description: "Материал: Өндөр чанарын эсэргүүцэлтэй Зориулалт: Халдвар хамгаалал болон тоосонцроос хамгаална Нэг удаагийн халдвар хамгаалалтын хувцас",
      image: "/images/zurag47.jpg",
      category: "protection"
    },
    {
      id: 11,
      name: "Хамгаалалтын хувцас",
      description: "Материал: PVC хөвөн даавуу Зориулалт: Хамгаалалтын ажлын өмд",
      image: "/images/zurag37.jpg",
      category: "protection"
    },
    {
      id: 12,
      name: "Цогц хамгаалалтын өмсгөл",
      description: "Материал: 3 давхар Полипропилен Зориулалт: Цогц хамгаалалтын өмсгөл",
      image: "/images/zurag38.jpg",
      category: "protection"
    },
    {
      id: 13,
      name: "201735/Бээлий",
      description: "Нэр: Химийн ногоон нитрил бээлий Материал: Нитрил хөвөн Зориулалт: Хамгаалалтын ажлын бээлий",
      image: "/images/zurag39.jpg",
      category: "protection"
    },
    {
      id: 14,
      name: "201735/Бээлий",
      description: "Нэр: Химийн ногоон нитрил бээлий Материал: Нитрил хөвөн Зориулалт: Хамгаалалтын ажлын бээлий",
      image: "/images/zurag31.jpg",
      category: "protection"
    },
    {
      id: 15,
      name: "201735/Бээлий",
      description: "Нэр: Химийн ногоон нитрил бээлий Материал: Нитрил хөвөн Зориулалт: Хамгаалалтын ажлын бээлий",
      image: "/images/zurag32.jpg",
      category: "protection"
    },
    {
      id: 16,
      name: "A-350/Бээлий",
      description: "Нэр: Сэрүүн улирлын барьц сайтай бээлий Материал: PVC Зориулалт: Барьц атгалт дээр зэргийн Хурууны мэдрэмж алдагдуулахгүй",
      image: "/images/zurag35.jpg",
      category: "protection"
    },
    {
      id: 17,
      name: "E-46/Бээлий",
      description: "Нэр: Барьц сайтай бээлий Материал: Латекс, полиэстер, нейлон, spandex Зориулалт: Барьц атгалт дээр зэргийн, мэдрэмж алдагдуулахгүй",
      image: "/images/zurag34.jpg",
      category: "protection"
    },
    {
      id: 18,
      name: "V-330/Бээлий",
      description: "Нэр: Барьц сайтай бээлий Материал: Латекс, полиэстер, нейлон, spandex Зориулалт: Барьц сайтай ажлын бээлий",
      image: "/images/zurag32.jpg",
      category: "protection"
    },
    {
      id: 19,
      name: "D-0450/Нэг удаагийн бээлий",
      description: "Нитрил",
      image: "/images/zurag4.jpg",
      category: "protection"
    },
    {
      id: 20,
      name: "1207/Нэг удаагийн бээлий",
      description: "Латекс",
      image: "/images/zurag5.jpg",
      category: "protection"
    },
    {
      id: 21,
      name: "K-405/Углааш",
      description: "Материал: Полипропилен, полиэтилен бүрхүүл Зориулалт:	Халтирахгүй	Цахилгаанжихгүй	Урт ажлын гутлын хамгаалалт Size: 45–50",
      image: "/images/zurag30.jpg",
      category: "protection"
    },
    {
      id: 22,
      name: "LL-2-04G/Гутал",
      description: "Нэр: Ус нэвтрэхгүй, доргилт бууруулалттай, халтиргаагүй ажлын гутал Size: 38, 39, 40, 41",
      image: "/images/zurag45.jpg",
      category: "protection"
    },
    {
      id: 23,
      name: "LL-1-06/Гутал",
      description: "Нэр: Ус нэвтрэхгүй, доргилт бууруулалттай, халтиргаагүй ажлын гутал Size: 40, 41, 42",
      image: "/images/zurag44.jpg",
      category: "protection"
    },
  ];

  return NextResponse.json(protectionProducts);
}