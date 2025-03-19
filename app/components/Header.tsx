"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div
      data-aos="zoom-out-down"
      className=" mt-16 lg:mt-16 h-[13rem] w-full lg:h-[30rem]">
      <img src="/spanduk.jpg" className="h-full w-full rounded-lg" alt="" />
    </div>
  );
};
