import Hero from "@/app/main/page";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin", "cyrillic"] });
export default function Home() {
  return (
    // <div className={inter.className}>
    <div>
      <Hero/>
    </div>
  );
}