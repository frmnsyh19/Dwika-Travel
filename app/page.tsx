"use client";

import { Navbar } from "./components/ui/Navbar";
import { Header } from "./components/Header";
import { Explore } from "./components/Explore";
import { Reaction } from "./components/Reaction";
import { Footer } from "./components/ui/Footer";
import { Why } from "./components/Why";
import { PaketWisata } from "./components/PaketWisata";
import { Whatsapp } from "./components/ui/Whatsapp";

export default function Home() {
  return (
    <div
      className="flex w-full flex-col overflow-y-hidden justify-center items-center "
      data-theme="light">
      <Whatsapp />
      <div className="w-full shadow-xl flex justify-center items-center">
        <Navbar />
      </div>
      <Header />
      <div className=" w-full lg:w-[90%] gap-12 flex flex-col p-1">
        <Explore />
        <Why />
        {/* <Pengalaman /> */}
        {/* <TravelPackage /> */}
        <PaketWisata />
        <Reaction />
      </div>
      <Footer />
    </div>
  );
}
