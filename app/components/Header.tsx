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
    <div data-aos="zoom-out-down" className=" w-full h-[18rem] lg:h-[30rem]">
      <img src="/headerbg.jpg" className=" w-full h-full rounded-lg" alt="" />
    </div>
  );
};
