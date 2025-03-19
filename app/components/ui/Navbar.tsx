"use client";
import React from "react";
import { Dawer } from "./Dawer";

export const Navbar = () => {
  return (
    <div className="bg-base-100 fixed left-0 top-0 z-50 flex  w-full items-center justify-center shadow-md">
      <div className="w-full lg:w-[90%]">
        <div className="navbar bg-base-100 lg:p-0 p-1">
          <div className="navbar-start">
            <Dawer />
            <a className="btn btn-ghost lg:block absolute z-0 left-11 text-xl lg:ms-0">
              <img src="/logo.png" className="w-16" alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="p-1">
                <a href="" className=" text-neutral text-lg">
                  Home
                </a>
              </li>
              <li className="p-1">
                <a className="text-neutral text-lg" href="/tentangkami">
                  Tentang Kami
                </a>
              </li>
              <li className="p-1">
                <details>
                  <summary className="text-neutral text-lg">
                    Paket Wisata
                  </summary>
                  <ul className="w-48 bg-white p-1">
                    <li>
                      <a href="" className="text-base capitalize">
                        Demostik
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-base capitalize">
                        Internasional
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="p-1">
                <a className="text-neutral text-lg" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="p-1">
                <a className="text-neutral text-lg" href="/artikels">
                  Artikel
                </a>
              </li>
              <li className="p-1">
                <a className="text-neutral text-lg" href="/kontak">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-green-400 text-lg text-white">
              <i className="fa-brands fa-whatsapp fa-lg"></i>
              Chat Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
