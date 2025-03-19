"use client";

import React, { useEffect } from "react";
import { Rating } from "./Rating";
import { Avatar } from "./Avatar";
import AOS from "aos";
import { FaRegUserCircle } from "react-icons/fa";
import "aos/dist/aos.css";
export const CardReaction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div
        data-aos="zoom-out-down"
        className=" w-full lg:w-80 hover:bg-purple-600 hover:text-white rounded-2xl gap-2 p-2 flex flex-col justify-center items-center shadow-lg">
        <div className=" w-full h-48 lg:h-60 flex p-1 bg-white flex-col gap-5 shadow rounded-2xl">
          <div className=" w-full flex h-full flex-col p-5 gap-2 justify-start">
            <Rating />
            <p className=" text-sm mt-2 text-slate-800">
              Paket wisatanya lengkap sekali banyak fasilitasnya sangat
              memuaskan, Terimakasi Dwika Travel
            </p>
          </div>
        </div>
        <div className=" w-full flex h-14 p-5 bg-none justify-start items-center gap-2">
          <FaRegUserCircle className="text-xl" />
          <p className=" text-base">Ibu Hamza</p>
        </div>
      </div>
      <div
        data-aos="zoom-out-down"
        className=" w-full lg:w-80 hover:bg-purple-600 hover:text-white rounded-2xl gap-2 p-2 flex flex-col justify-center items-center shadow-lg">
        <div className=" w-full h-48 lg:h-60 flex p-1 bg-white flex-col gap-5 shadow rounded-2xl">
          <div className=" w-full flex h-full flex-col p-5 gap-2 justify-start">
            <Rating />
            <p className=" text-sm mt-2 text-slate-800">
              Pelayanannya ramah dan memuaskan ga rugi, dwika travel sangat
              dapat dipercaya, terimakasi dwika travel
            </p>
          </div>
        </div>
        <div className=" w-full flex h-14 p-5 bg-none justify-start items-center gap-2">
          <FaRegUserCircle className="text-xl" />
          <p className=" text-base">Pak Sobri</p>
        </div>
      </div>
      <div
        data-aos="zoom-out-down"
        className=" w-full lg:w-80 hover:bg-purple-600 hover:text-white rounded-2xl gap-2 p-2 flex flex-col justify-center items-center shadow-lg">
        <div className=" w-full h-48 lg:h-60 flex p-1 bg-white flex-col gap-5 shadow rounded-2xl">
          <div className=" w-full flex h-full flex-col p-5 gap-2 justify-start">
            <Rating />
            <p className=" text-sm mt-2 text-slate-800">
              Fasilitas dan pilihan paket nya banyak sekali dan lengkap, terbaik
              dwika travel
            </p>
          </div>
        </div>
        <div className=" w-full flex h-14 p-5 bg-none justify-start items-center gap-2">
          <FaRegUserCircle className="text-xl" />
          <p className=" text-base">Firmansyah</p>
        </div>
      </div>
      <div
        data-aos="zoom-out-down"
        className=" w-full lg:w-80 hover:bg-purple-600 hover:text-white rounded-2xl gap-2 p-2 flex flex-col justify-center items-center shadow-lg">
        <div className=" w-full h-48 lg:h-60 flex p-1 bg-white flex-col gap-5 shadow rounded-2xl">
          <div className=" w-full flex h-full flex-col p-5 gap-2 justify-start">
            <Rating />
            <p className=" text-sm mt-2 text-slate-800">
              Pelayanannya cepat, ramah, pilihan paketnya lengkap sangat
              memuaskan, terimakasih dwika travel
            </p>
          </div>
        </div>
        <div className=" w-full flex h-14 p-5 bg-none justify-start items-center gap-2">
          <FaRegUserCircle className="text-xl" />
          <p className=" text-base">Putri</p>
        </div>
      </div>
    </>
  );
};
