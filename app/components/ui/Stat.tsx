import React from "react";

export const Stat = () => {
  return (
    <div className=" w-full flex gap-3">
      <div className=" p-1 w-24  flex flex-col">
        <p className=" text-3xl font-semibold  text-blue-400">20+</p>
        <p className=" text-base">Years Experience</p>
      </div>
      <div className=" p-1 w-24  flex flex-col">
        <p className=" text-3xl font-semibold  text-blue-400">10+</p>
        <p className=" text-base">Travel Package</p>
      </div>
      <div className=" p-1 w-24  flex flex-col">
        <p className=" text-3xl font-semibold  text-blue-400">100+</p>
        <p className=" text-base">Customer Journey</p>
      </div>
    </div>
  );
};
