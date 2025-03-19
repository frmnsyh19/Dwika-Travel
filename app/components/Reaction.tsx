import React from "react";
import { CardReaction } from "./ui/CardReaction";
export const Reaction = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" w-full flex justify-start gap-4 flex-col">
        <div className=" w-full flex flex-col gap-1">
          <p className=" text-3xl lg:text-3xl capitalize font-bold  text-center">
            Kata Mereka
          </p>
          <p className="text-lg capitalize text-center">
            cintai oleh lebih dari puluhan pelancong
          </p>
        </div>
        <div className="w-full p-1 flex flex-col lg:flex-row justify-start gap-3">
          <CardReaction />
        </div>
      </div>
    </div>
  );
};
