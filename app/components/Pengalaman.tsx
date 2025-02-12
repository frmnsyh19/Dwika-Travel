import React from "react";
import { Stat } from "./ui/Stat";

export const Pengalaman = () => {
  return (
    <>
      <div className=" w-full flex lg:h-screen  justify-center items-center gap-1 lg:flex-row flex-col">
        <div className=" w-full lg:w-1/2 flex flex-col gap-2">
          <p className=" text-5xl lg:text-6xl font-bold">
            Our Expertise In Travel🌎
          </p>
          <p className=" text-sm capitalize ms-1 leading-7">
            We understand that every journey is a valuable experience. With
            expertise and dedication, we are ready to provide the best service
            to ensure your trip is comfortable, safe, and unforgettable. From
            planning to execution, our experienced team is ready to help you
            explore your dream destinations with flexible travel solutions
            tailored to your needs. Service excellence, punctuality, and
            customer comfort are our top priorities.
          </p>
          <Stat />
        </div>
        <div className=" w-full lg:w-2/5 mt-40 lg:mt-0 justify-end  flex gap-1">
          <div className="relative flex justify-center items-center w-full ">
            {/* Mask / Squircle Background */}
            <div className="mask bg-slate-800 mask-squircle w-full h-80 lg:h-[20rem] z-10"></div>

            {/* Gambar di Atas Mask */}
            <img
              src="/explore/pengalaman.png"
              className="absolute h-[28rem]   bottom-1 z-50"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
