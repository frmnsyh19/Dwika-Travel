"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { FaPlaneDeparture } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

export const TravelPackage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div className=" w-full flex flex-col gap-3">
        <div className=" flex flex-col gap- h-full justify-start2 justify-center items-center w-full">
          <p className=" text-3xl font-bold">Travel Package</p>
          <p className=" text-base text-center">
            Our tour packages are specifically designed to meet your needs, from
            family vacations to challenging solo adventures.
          </p>
        </div>
        <div className=" w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={2} // Default untuk layar besar (lg)
            className=" w-full h-[27rem] lg:h-[30rem]"
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 }, // Untuk layar sm (≥640px)
              768: { slidesPerView: 2 }, // Untuk layar md (≥768px)
              1024: { slidesPerView: 4 }, // Untuk layar lg (≥1024px)
            }}>
            <SwiperSlide className="">
              <div
                data-aos="fade-down"
                className=" w-48 h-[24rem] lg:h-[26rem]  lg:w-[17rem] justify-between rounded flex shadow-lg flex-col gap-1 p-1">
                <img
                  src="/explore/pinklombok.jpg"
                  alt="Slide 1"
                  className="w-full h-40 lg:h-56 rounded-md"
                />
                <div className="w-full flex flex-col h-full justify-start gap-2">
                  <p className=" text-base font-bold">Pantai Pink Lombok</p>
                  <div className=" flex gap-2 items-center">
                    <HiOutlineLocationMarker className=" text-base" />
                    <p className=" text-base">Pantai Pink Lombok</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <HiUserGroup className=" text-base" />
                    <p className=" text-base">22 Kuota</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <FaPlaneDeparture className=" text-base" />
                    <p className=" text-base">22 Februari 2025</p>
                  </div>
                </div>
                <div className=" w-full p-1 flex justify-end">
                  <button className="btn w-full bg-sky-400 text-base text-white border-none">
                    Detail Paket
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-down"
                className=" w-48 h-[24rem] lg:h-[26rem]  lg:w-[17rem] justify-between rounded flex shadow-lg flex-col gap-1 p-1">
                <img
                  src="/explore/singapore.jpg"
                  alt="Slide 1"
                  className="w-full h-40 lg:h-56 rounded-md"
                />
                <div className="w-full flex flex-col h-full justify-start gap-2">
                  <p className=" text-base font-bold">
                    Universal Studio Singapura
                  </p>
                  <div className=" flex gap-2 items-center">
                    <HiOutlineLocationMarker className=" text-base" />
                    <p className=" text-base">Pantai Pink Lombok</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <HiUserGroup className=" text-base" />
                    <p className=" text-base">22 Kuota</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <FaPlaneDeparture className=" text-base" />
                    <p className=" text-base">22 Februari 2025</p>
                  </div>
                </div>
                <div className=" w-full p-1 flex justify-end">
                  <button className="btn w-full bg-sky-400 text-base text-white border-none">
                    Detail Paket
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-down"
                className=" w-48 h-[24rem] lg:h-[26rem]  lg:w-[17rem] justify-between rounded flex shadow-lg flex-col gap-1 p-1">
                <img
                  src="/explore/tokyo.jpg"
                  alt="Slide 1"
                  className="w-full h-40 lg:h-56 rounded-md"
                />
                <div className="w-full flex flex-col h-full justify-start gap-2">
                  <p className=" text-base font-bold">Tokyo Jepang</p>
                  <div className=" flex gap-2 items-center">
                    <HiOutlineLocationMarker className=" text-base" />
                    <p className=" text-base">Tokyo Jepang</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <HiUserGroup className=" text-base" />
                    <p className=" text-base">22 Kuota</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <FaPlaneDeparture className=" text-base" />
                    <p className=" text-base">22 Februari 2025</p>
                  </div>
                </div>
                <div className=" w-full p-1 flex justify-end">
                  <button className="btn w-full bg-sky-400 text-base text-white border-none">
                    Detail Paket
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-down"
                className=" w-48 h-[24rem] lg:h-[26rem]  lg:w-[17rem] justify-between rounded flex shadow-lg flex-col gap-1 p-1">
                <img
                  src="/explore/pinklombok.jpg"
                  alt="Slide 1"
                  className="w-full h-40 lg:h-56 rounded-md"
                />
                <div className="w-full flex flex-col h-full justify-start gap-2">
                  <p className=" text-base font-bold">Pantai Pink Lombok</p>
                  <div className=" flex gap-2 items-center">
                    <HiOutlineLocationMarker className=" text-base" />
                    <p className=" text-base">Pantai Pink Lombok</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <HiUserGroup className=" text-base" />
                    <p className=" text-base">22 Kuota</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <FaPlaneDeparture className=" text-base" />
                    <p className=" text-base">22 Februari 2025</p>
                  </div>
                </div>
                <div className=" w-full p-1 flex justify-end">
                  <button className="btn w-full bg-sky-400 text-base text-white border-none">
                    Detail Paket
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
