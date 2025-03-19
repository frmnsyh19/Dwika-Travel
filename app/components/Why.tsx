"use client";
import React from "react";

export const Why = () => {
  return (
    <div className="mt-4 flex w-full flex-col gap-5 p-2">
      <div className="flex w-full items-center justify-center">
        <p className="text-center text-2xl font-bold uppercase lg:text-start">
          Mengapa Harus Memilih Kami?
        </p>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-4 p-2 lg:gap-2">
        <div className="flex h-60 w-[30rem] flex-col items-center justify-center gap-2 rounded-md bg-gray-100 hover:text-white">
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="flex items-center justify-center rounded-3xl bg-white p-3">
              <img
                src="/icons/handshake.png"
                className="w-12 text-white lg:w-20"
                alt=""
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1 p-2">
              <p className="text-neutral text-center text-xl font-bold capitalize">
                Jaringan Luas
              </p>

              <span className="text-center text-gray-500">
                Kerjasama dengan mitra terpercaya di berbagai destinasi domestik
                dan internasional.
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-60 w-[30rem] flex-col items-center justify-center gap-2 rounded-md bg-gray-100 hover:text-white">
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="flex items-center justify-center rounded-3xl bg-white p-3">
              <img
                src="/icons/group.png"
                className="w-12 text-white lg:w-20"
                alt=""
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1 p-2">
              <p className="text-neutral text-center text-xl font-bold capitalize">
                Team Profesional
              </p>

              <span className="text-center text-gray-500">
                Didukung oleh staf dan pemandu wisata berpengalaman.
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-60 w-[30rem] flex-col items-center justify-center gap-2 rounded-md bg-gray-100 hover:text-white">
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="flex items-center justify-center rounded-3xl bg-white p-3">
              <img
                src="/icons/travel.png"
                className="w-12 text-white lg:w-20"
                alt=""
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1 p-2">
              <p className="text-neutral text-center text-xl font-bold capitalize">
                Paket Lengkap
              </p>

              <span className="text-center text-gray-500">
                Paket Wisata Yang Lengkap Mulai Dari Wisata Demostik Hingga
                Internasional
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-60 w-[30rem] flex-col items-center justify-center gap-2 rounded-md bg-gray-100 hover:text-white">
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="flex items-center justify-center rounded-3xl bg-white p-3">
              <img
                src="/icons/customer-service.png"
                className="w-12 text-white lg:w-20"
                alt=""
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1 p-2">
              <p className="text-neutral text-center text-xl font-bold capitalize">
                24 Jam Dukungan
              </p>

              <span className="text-center text-gray-500">
                Siap membantu pelanggan kapan saja selama perjalanan.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
