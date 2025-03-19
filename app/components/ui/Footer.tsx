import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
export const Footer = () => {
  return (
    <footer className="footer bg-base-200 mt-10 text-base-content p-10">
      <aside>
        <img src="/logo.png" className="w-24" alt="" />
        <div className=" flex flex-col gap-1">
          <div className=" flex flex-row gap-1 items-center">
            <FaWhatsapp className=" text-base" />
            <p className=" text-base">+62-877-8845-4306</p>
          </div>
          <div className=" flex flex-row gap-1 items-center">
            <MdOutlineEmail className=" text-base" />
            <p className=" text-base">dutawisatakautsar@gmail.com</p>
          </div>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Gallery</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};
