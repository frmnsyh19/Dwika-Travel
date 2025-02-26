"use client";
import React, { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { FaSun } from "react-icons/fa";
import Link from "next/link";

export const Navbar = ({
  setThemes,
}: {
  setThemes: (theme: string) => void;
}) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setThemes(theme);
  }, [theme, setThemes]);

  return (
    <div className="navbar w-full flex lg:justify-start justify-between lg:w-11/12">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-5 w-[24rem] ml-1 p-2 shadow ${
              theme === "light"
                ? "bg-white shadow-lg"
                : "bg-slate-800 shadow-lg"
            }`}>
            <li className=" w-full p-2 flex justify-center items-center">
              <Link href={"/"} className="text-lg">
                Home
              </Link>
            </li>
            <li className="p-2 ml-2 flex justify-center items-center">
              <details>
                <summary className="">
                  <span className=" text-lg">Travel Package</span>
                </summary>
                <ul className=" p-2 flex-col">
                  <li className="p-2 flex justify-center items-center mr-3">
                    <a className=" text-lg text-center">Demostik</a>
                  </li>
                  <li className="p-2 flex justify-center items-center">
                    <a className=" text-lg text-center">Internasional</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="p-2 flex justify-center items-center">
              <a className="text-lg ">Gallery</a>
            </li>
            <li className="p-2 flex justify-center items-center">
              <a className="text-lg ">Artikel</a>
            </li>
            <li className="p-2 flex justify-center items-center">
              <a className="text-lg ">Contact</a>
            </li>
            <button className=" btn bg-green-300 border-none text-white w-full">
              Chat Me
            </button>
          </ul>
        </div>
        <div className=" lg:navbar-start navbar-center">
          <img src="/logo.png" className=" w-28 lg:w-32 lg:mb-0 mb-2" alt="" />
        </div>
      </div>

      <div className="navbar-center lg:flex hidden">
        {/* <Image
          width={130}
          className="lg:hidden block"
          src={"/logo.png"}
          alt="logo"
          hidden
        /> */}

        <ul className="menu menu-horizontal px-1 ">
          <li className=" p-1">
            <Link href={"/"} className="text-lg">
              Home
            </Link>
          </li>
          <li className="p-1">
            <details>
              <summary>
                <span className=" text-lg">Paket Wisata</span>
              </summary>
              <ul className="p-2">
                <li>
                  <a className=" text-lg">Demostik</a>
                </li>
                <li>
                  <a className=" text-lg">Internasional</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="p-1">
            <a className="text-lg ">Gallery</a>
          </li>
          <li className="p-1">
            <a className="text-lg ">Artikel</a>
          </li>
          <li className="p-1">
            <a className="text-lg ">Kontak</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex gap-1 p-2">
        <a className="btn bg-green-300 text-white lg:flex hidden">Chat Me</a>
        <button
          className={`btn btn-md shadow`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <LuMoon className=" text-xl" />
          ) : (
            <FaSun className=" text-lg text-yellow-300" />
          )}
        </button>
      </div>
    </div>
  );
};
