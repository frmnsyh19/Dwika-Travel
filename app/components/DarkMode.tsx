"use client";
import { LuMoon } from "react-icons/lu";
import React, { useState } from "react";

export const DarkMode = () => {
  const [theme, setTheme] = useState<string>("");
  return (
    <>
      <button
        onClick={() => setTheme("dark")}
        className=" btn btn-neutral btn-sm">
        <LuMoon className=" text-lg" />
      </button>
      {theme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className=" btn btn-neutral btn-sm">
          <LuMoon className=" text-lg" />
        </button>
      ) : (
        ""
      )}
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className=" btn btn-neutral btn-sm">
          <LuMoon className=" text-lg" />
        </button>
      ) : (
        ""
      )}
    </>
  );
};
