import React from "react";
import { FaWhatsapp } from "react-icons/fa";
export const Whatsapp = () => {
  const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp tujuan
  const message = "Halo, saya ingin bertanya...";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-4 z-10 bottom-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center gap-2">
      <FaWhatsapp size={24} />
    </a>
  );
};
