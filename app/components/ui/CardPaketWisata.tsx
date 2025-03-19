import React from "react";

export const CardPaketWisata = () => {
  return (
    <div className="mt-5 flex w-full flex-wrap justify-center gap-4">
      <div className="flex w-[20rem] flex-col rounded-lg shadow-xl">
        <div className="h-52 w-full rounded-lg">
          <img
            src="/explore/pinklombok.jpg"
            className="h-full w-full rounded"
            alt=""
          />
        </div>
        <div className="flex w-full flex-col gap-2 p-2">
          <p className="text-base font-bold uppercase">Wisata Lombok</p>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Jadwal Kebarangatan</p>
            <span className="">30 Jan 2025</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Kuota Tersedia</p>
            <span className="">30 Kuota</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Durasi</p>
            <span className="">3 Hari</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Transportasi</p>
            <span className="">Lion Air</span>
          </div>
          <div className="mt-2 w-full">
            <button className="btn w-full bg-purple-600 font-bold text-white">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-[20rem] flex-col rounded-lg shadow-xl">
        <div className="h-52 w-full">
          <img
            src="/explore/singapore.jpg"
            className="h-full w-full rounded"
            alt=""
          />
        </div>
        <div className="flex w-full flex-col gap-2 p-2">
          <p className="text-base font-bold uppercase">Wisata Bandung</p>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Jadwal Kebarangatan</p>
            <span className="">29 Mar 2025</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Kuota Tersedia</p>
            <span className="">30 Kuota</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Durasi</p>
            <span className="">3 Hari</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Transportasi</p>
            <span className="">Bus Ac</span>
          </div>
          <div className="mt-2 w-full">
            <button className="btn w-full bg-purple-600 font-bold text-white">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-[20rem] flex-col rounded-lg shadow-xl">
        <div className="h-52 w-full">
          <img
            src="/explore/tokyo.jpg"
            className="h-full w-full rounded"
            alt=""
          />
        </div>
        <div className="flex w-full flex-col gap-2 p-2">
          <p className="text-base font-bold uppercase">Wisata Bali</p>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Jadwal Kebarangatan</p>
            <span className="">5 Jun 2025</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Kuota Tersedia</p>
            <span className="">30 Kuota</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Durasi</p>
            <span className="">3 Hari</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-base">Transportasi</p>
            <span className="">Lion Air</span>
          </div>
          <div className="mt-2 w-full">
            <button className="btn w-full bg-purple-600 font-bold text-white">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
