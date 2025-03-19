"use client";
import React from "react";
import { CardPaketWisata } from "./ui/CardPaketWisata";

export const PaketWisata = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-1">
      <div className="flex h-full w-full flex-col items-center justify-center gap-1 lg:w-[80%]">
        <p className="text-2xl font-bold">Paket Wisata Domestik</p>
        <p className="text-center text-base">
          Jelajahi keindahan Indonesia dengan paket wisata domestik!, Kami
          menawarkan perjalanan seru ke berbagai destinasi eksotis,
        </p>
      </div>
      <CardPaketWisata />
    </div>
  );
};
