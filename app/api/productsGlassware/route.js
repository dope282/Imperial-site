// app/api/products/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const glasswareProducts = [
    {
      id: 1,
      name: "Хуванцар Юүлүүр",
      description: "75мм, 110мм, 120мм, 150мм.",
      image: "/images/zurag15.jpg", // public/ доторх зам
      category: "glassware"
    },
    {
      id: 2,
      name: "Шилэн Юүлүүр",
      description: "56мм, 75мм, 100мм, 150мм.",
      image: "/images/zurag12.jpg",
      category: "glassware"
    },
    {
      id: 3,
      name: "Нэрмэл усны сав",
      description: "250мл, 500мл.",
      image: "/images/zurag23.jpg",
      category: "glassware"
    },
    {
      id: 4,
      name: "Шилэн савх",
      description: "220мм.",
      image: "/images/zurag51.png",
      category: "glassware"
    },
    {
      id: 5,
      name: "Пипетка",
      description: "2мл, 5мл, 10мл, 25мл.",
      image: "/images/zurag52.png",
      category: "glassware"
    },
    {
      id: 6,
      name: "Мор-ын Пипетка",
      description: "0.1мл, 2мл, 5мл, 10мл, 25мл.",
      image: "/images/zurag53.png",
      category: "glassware"
    },
    {
      id: 7,
      name: "Бариултай мензурка",
      description: "50мл, 100мл, 250мл, 500мл, 1000мл, 2000мл.",
      image: "/images/zurag54.png",
      category: "glassware"
    },
    {
      id: 8,
      name: "Шилэн аяга",
      description: "50мл, 100мл, 250мл, 500мл, 1000мл.",
      image: "/images/zurag55.png",
      category: "glassware"
    },
    {
      id: 9,
      name: "Хуванцар цилиндр",
      description: "100мл, 250мл, 500мл, 1000мл.",
      image: "/images/zurag60.png",
      category: "glassware"
    },
    {
      id: 10,
      name: "Шилэн цилиндр",
      description: "50мл, 100мл, 250мл.",
      image: "/images/zurag3.jpg",
      category: "glassware"
    },
    {
      id: 11,
      name: "Хэмжээст колбо",
      description: "100мл, 250мл, 500мл, 1000мл, 2000мл.",
      image: "/images/zurag18.jpg",
      category: "glassware"
    },
    {
      id: 12,
      name: "Хэмжээст колбо /Бор",
      description: "250мл, 500мл, 1000мл.",
      image: "/images/zurag26.jpg",
      category: "glassware"
    },
    {
      id: 13,
      name: "Шувтан колбо",
      description: "100мм, 250мм, 500мм, 1000мм.",
      image: "/images/zurag16.jpg",
      category: "glassware"
    },
    {
      id: 14,
      name: "Бөөрөнхий колбо",
      description: "100мм, 250мм, 500мм, 1000мм.",
      image: "/images/zurag20.jpg",
      category: "glassware"
    },
    {
      id: 15,
      name: "Бюретка",
      description: "10мл, 25мл, 50мл, 10мл (Автомат) 25мл, 50мл, 40-45мл.",
      image: "/images/zurag24.jpg",
      category: "glassware"
    },
    {
      id: 17,
      name: "Тагтай сав",
      description: "40мл.",
      image: "/images/zurag56.png",
      category: "glassware"
    },
    {
      id: 18,
      name: "Дусаагууртай сав",
      description: "40мл.",
      image: "/images/zurag57.png",
      category: "glassware"
    },
    {
      id: 19,
      name: "Хусуур халбага",
      description: "Нарийн, өргөн.",
      image: "/images/zurag61.png",
      category: "glassware"
    },
    {
      id: 20,
      name: "Цагийн шил",
      description: "60мл, 100мл, 150мл.",
      image: "/images/zurag62.png",
      category: "glassware"
    },
    {
      id: 22,
      name: "Бор дөрвөлжин сав, хяналтын цагираг бүхий таглаатай",
      description: "125мл, 270мл, 540мл, 1000мл.",
      image: "/images/zurag63.png",
      category: "glassware"
    },
    {
      id: 23,
      name: "Дөрвөлжин тунгалаг, хяналтын цагираг бүхий таглаатай",
      description: "125мл, 540мл, 1000мл.",
      image: "/images/zurag64.png",
      category: "glassware"
    },
    {
      id: 24,
      name: "Тэгш өнцөгт лонх 1000мл байгалийн 242 PE тагтай",
      description: "1000мл.",
      image: "/images/zurag65.png",
      category: "glassware"
    },
    {
      id: 25,
      name: "Шилэн хэмжээст цилиндр бөөрөнхий тавиуртай",
      description: "100мл, 250мл, 500мл.",
      image: "/images/zurag14.jpg",
      category: "glassware"
    },
    {
      id: 26,
      name: "Хуруу шилний тавиур",
      description: "3x18 15, 3x8 50.",
      image: "/images/zurag13.jpg",
      category: "glassware"
    },
    {
      id: 27,
      name: "Центрифугийн тюб",
      description: "15мл, 50мл.",
      image: "/images/zurag19.jpg",
      category: "glassware"
    },
    {
      id: 28,
      name: "Таглаатай сав, Лацтай",
      description: "150мл.",
      image: "/images/zurag67.png",
      category: "glassware"
    },
    {
      id: 29,
      name: "Ёш /угаагч/",
      description: "200мл.",
      image: "/images/zurag17.jpg",
      category: "glassware"
    },
    {
      id: 30,
      name: "Хуруу шилний тавиур",
      description: "52мм x 14, 75мм x 20, 75мм x 40, 18,5 x 24.",
      image: "/images/zurag13.jpg",
      category: "glassware"
    },
    // {
    //   id: 31,
    //   name: "Таглаатай сав лацтай",
    //   description: "150мл.",
    //   image: "/images/zurag.jpg",
    //   category: "glassware"
    // },
    {
      id: 32,
      name: "Дугуй тагтай сав",
      description: "200мл, 500мл.",
      image: "/images/zurag68.png",
      category: "glassware"
    },
    {
      id: 33,
      name: "Дугуй тагтай тэгш өнцөгт сав",
      description: "500мл, 750мл, 1000мл.",
      image: "/images/zurag69.png",
      category: "glassware"
    },
    {
      id: 34,
      name: "Дугуй тагтай тэгш өнцөгт сав",
      description: "500мл, 750мл, 1000мл.",
      image: "/images/zurag70.png",
      category: "glassware"
    },
    {
      id: 35,
      name: "Хуваагч юүлүүр",
      description: "125мл, 250мл, 500мл, 1000мл.",
      image: "/images/zurag71.png",
      category: "glassware"
    },
  ];

  return NextResponse.json(glasswareProducts);
}