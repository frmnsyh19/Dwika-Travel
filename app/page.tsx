"use client";
import { useState } from "react";
import { Navbar } from "./components/ui/Navbar";
import { Header } from "./components/Header";
import { Explore } from "./components/Explore";
import { TravelPackage } from "./components/TravelPackage";
import { Pengalaman } from "./components/Pengalaman";
import { Reaction } from "./components/Reaction";
import { Footer } from "./components/ui/Footer";

export default function Home() {
  const [theme, setTheme] = useState<string>("light"); // Gunakan null agar SSR tidak menentukan temander apa pun sampai tema tersedia

  return (
    <div
      className="flex w-full flex-col justify-center items-center "
      data-theme={theme}>
      <div className="w-full shadow-xl flex justify-center items-center">
        <Navbar setThemes={setTheme} />
      </div>
      <div className=" w-full lg:w-11/12 gap-12 flex flex-col p-1 lg:p-2">
        <Header />
        <Explore />
        <Pengalaman />
        <TravelPackage />
        <Reaction />
      </div>
      <Footer />
    </div>
  );
}
