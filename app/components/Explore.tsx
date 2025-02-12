"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import { FaLocationDot } from "react-icons/fa6";
import "aos/dist/aos.css";

export const Explore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col gap-5">
        <div className=" flex justify-center items-center flex-col gap-2">
          <p className=" text-3xl font-bold">Explore Best Destination</p>
          <p className=" text-base text-center">
            Make your vacation dreams come true by visiting amazing places. With
            us, every destination is possible!
          </p>
        </div>
        <div className=" flex lg:flex-row flex-col p-2 justify-start gap-5">
          <div
            data-aos="fade-up"
            className=" gap-2 rounded-lg w-full lg:w-[18rem] flex flex-col">
            <img
              src="/explore/pinklombok.jpg"
              className=" w-full h-96  rounded-lg"
              alt=""
            />
            <div className=" flex flex-col gap-1 ">
              <p className=" text-base font-bold">Pantai Pink Lombok</p>
              <div className=" flex gap-1 items-center">
                <FaLocationDot className=" text-sm" />
                <p className=" text-sm font-light">Lombok Indonesia</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className=" rounded-lg w-full lg:w-[18rem] flex flex-col gap-2">
            <img
              src="/explore/tokyo.jpg"
              className=" w-full h-96  rounded-lg"
              alt=""
            />
            <div className=" flex flex-col gap-1">
              <p className=" text-base font-bold">Tokyo</p>
              <div className=" flex gap-1 items-center">
                <FaLocationDot className=" text-sm" />
                <p className=" text-sm font-light">Jepang</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className=" rounded-lg w-full lg:w-[18rem] flex flex-col gap-2">
            <img
              src="/explore/singapore.jpg"
              className=" w-full h-96  rounded-lg"
              alt=""
            />
            <div className=" flex flex-col gap-1">
              <p className=" text-base font-bold">
                universal studios singapore
              </p>
              <div className=" flex gap-1 items-center">
                <FaLocationDot className=" text-sm" />
                <p className=" text-sm font-light">Singapura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
