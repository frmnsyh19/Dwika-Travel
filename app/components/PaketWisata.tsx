"use client";
import React from "react";
import { CardPaketWisata } from "./ui/CardPaketWisata";

export const PaketWisata = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-1">
      <div className="flex h-full w-full flex-col items-center justify-center gap-1 lg:w-[80%]">
        <p className="text-3xl font-bold">Paket Wisata</p>
        <p className="text-center text-base">
          Paket tur kami dirancang khusus untuk memenuhi kebutuhan Anda, mulai
          dari liburan keluarga hingga petualangan solo yang menantang.
        </p>
      </div>
      <CardPaketWisata />
    </div>
  );
};
