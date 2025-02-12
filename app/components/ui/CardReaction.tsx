"use client";

import React, { useEffect } from "react";
import { Rating } from "./Rating";
import { Avatar } from "./Avatar";
import AOS from "aos";
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
        className=" w-full lg:w-80 hover:bg-blue-400 hover:text-white rounded-2xl gap-2 p-2 flex flex-col justify-center items-center shadow-lg">
        <div className=" w-full h-60 flex p-1 bg-white flex-col gap-5 shadow rounded-2xl">
          <div className=" w-full flex h-full flex-col p-5 gap-2 justify-center">
            <Rating />
            <p className=" text-sm mt-2 text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ea
              totam. Quidem, accusamus? Perferendis, beatae nesciunt.
              Reprehenderit veritatis non ipsa veniam recusandae qui reiciendis
              hic.
            </p>
          </div>
        </div>
        <div className=" w-full flex h-14 p-5 bg-none justify-start items-center gap-2">
          <Avatar />
          <p className=" text-base">Firmansyah</p>
        </div>
      </div>
      <div
        data-aos="zoom-out-down"
        className=" w-full lg:w-80 hover:bg-blue-400 hover:text-white rounded-2xl gap-2 p-2 flex flex-col justify-center items-center shadow-lg">
        <div className=" w-full h-60 flex p-1 bg-white flex-col gap-5 shadow rounded-2xl">
          <div className=" w-full flex h-full flex-col p-5 gap-2 justify-center">
            <Rating />
            <p className=" text-sm mt-2 text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ea
              totam. Quidem, accusamus? Perferendis, beatae nesciunt.
              Reprehenderit veritatis non ipsa veniam recusandae qui reiciendis
              hic.
            </p>
          </div>
        </div>
        <div className=" w-full flex h-14 p-5 bg-none justify-start items-center gap-2">
          <Avatar />
          <p className=" text-base">Firmansyah</p>
        </div>
      </div>
      <div
        data-aos="zoom-out-down"
        className=" w-full lg:w-80 hover:bg-blue-400 hover:text-white rounded-2xl gap-2 p-2 flex flex-col justify-center items-center shadow-lg">
        <div className=" w-full h-60 flex p-1 bg-white flex-col gap-5 shadow rounded-2xl">
          <div className=" w-full flex h-full flex-col p-5 gap-2 justify-center">
            <Rating />
            <p className=" text-sm mt-2 text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ea
              totam. Quidem, accusamus? Perferendis, beatae nesciunt.
              Reprehenderit veritatis non ipsa veniam recusandae qui reiciendis
              hic.
            </p>
          </div>
        </div>
        <div className=" w-full flex h-14 p-5 bg-none justify-start items-center gap-2">
          <Avatar />
          <p className=" text-base">Firmansyah</p>
        </div>
      </div>
      <div
        data-aos="zoom-out-down"
        className=" w-full lg:w-80 hover:bg-blue-400 hover:text-white rounded-2xl gap-2 p-2 flex flex-col justify-center items-center shadow-lg">
        <div className=" w-full h-60 flex p-1 bg-white flex-col gap-5 shadow rounded-2xl">
          <div className=" w-full flex h-full flex-col p-5 gap-2 justify-center">
            <Rating />
            <p className=" text-sm mt-2 text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ea
              totam. Quidem, accusamus? Perferendis, beatae nesciunt.
              Reprehenderit veritatis non ipsa veniam recusandae qui reiciendis
              hic.
            </p>
          </div>
        </div>
        <div className=" w-full flex h-14 p-5 bg-none justify-start items-center gap-2">
          <Avatar />
          <p className=" text-base">Firmansyah</p>
        </div>
      </div>
    </>
  );
};
