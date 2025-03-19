"use client";
import React from "react";
import { CardWisataInternasiol } from "./ui/CardWisataInternasiol";

export const PaketWisataInternasional = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-1">
      <div className="flex h-full w-full flex-col items-center justify-center gap-1 lg:w-[80%]">
        <p className="text-3xl font-bold">Paket Wisata Internasional</p>
        <p className="text-center text-base">
          Kami menawarkan perjalanan ke destinasi impian Anda dengan layanan
          eksklusif, Dari petualangan seru di Eropa hingga eksotisme Asia✈️🌍.
        </p>
      </div>
      <CardWisataInternasiol />
    </div>
  );
};
