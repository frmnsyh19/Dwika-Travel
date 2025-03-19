import React from "react";

export const Dawer = () => {
  return (
    <div className="drawer lg:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
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
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
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
              <summary className="text-neutral text-lg">Paket Wisata</summary>
              <ul className="w-full bg-base-200 p-1">
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
    </div>
  );
};
