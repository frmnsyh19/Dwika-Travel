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
      once: false,
    });
  }, []);

  return (
    <div className=" mt-8 lg:mt-10 flex w-full items-center justify-center p-1 lg:h-screen">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-3xl font-bold">Explore Best Destination</p>
          <p className="text-center text-base capitalize leading-7">
            Wujudkan impian liburan Anda dengan mengunjungi tempat-tempat
            menakjubkan. Bersama kami, setiap destinasi bisa menjadi kenyataan!
          </p>
        </div>
        <div className="flex flex-col justify-start gap-5 p-2 lg:flex-row">
          <div
            data-aos="fade-up"
            className="flex flex-col gap-2 rounded-lg p-3 shadow w-[20rem] lg:w-[18rem]">
            <img
              src="/explore/pinklombok.jpg"
              className="h-96 w-full rounded-lg"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold capitalize">Pantai Pink Lombok</p>
              <div className="flex items-center gap-1">
                <FaLocationDot />
                <p className="text-base font-light">Lombok Indonesia</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-2 rounded-lg p-3 shadow w-[20rem] lg:w-[18rem]">
            <img
              src="/explore/tokyo.jpg"
              className="h-96 w-full rounded-lg"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold capitalize">Tokyo</p>
              <div className="flex items-center gap-1">
                <FaLocationDot />
                <p className="text-base font-light">Jepang</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-2 rounded-lg p-3 shadow w-[20rem] lg:w-[18rem]">
            <img
              src="/explore/singapore.jpg"
              className="h-96 w-full rounded-lg"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold capitalize">
                universal studios singapure{" "}
              </p>
              <div className="flex items-center gap-1">
                <FaLocationDot />
                <p className="text-base font-light">Singapura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
