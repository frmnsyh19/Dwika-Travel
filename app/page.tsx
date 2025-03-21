"use client";

import { Navbar } from "./components/ui/Navbar";
import { Header } from "./components/Header";
import { Explore } from "./components/Explore";
import { Reaction } from "./components/Reaction";
import { Footer } from "./components/ui/Footer";
import { Why } from "./components/Why";
import { PaketWisata } from "./components/PaketWisata";
import { Whatsapp } from "./components/ui/Whatsapp";
import { PaketWisataInternasional } from "./components/PaketWisataInternasional";

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
      <div className=" w-full lg:w-[90%] gap-12 flex flex-col overflow-y-hidden ">
        <Explore />
        <Why />
        {/* <Pengalaman /> */}
        {/* <TravelPackage /> */}
        <PaketWisata />
        <PaketWisataInternasional />
        <Reaction />
      </div>
      <Footer />
    </div>
  );
}
