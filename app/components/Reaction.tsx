import React from "react";
import { CardReaction } from "./ui/CardReaction";
export const Reaction = () => {
  return (
    <div className=" w-full flex justify-center items-center p-1">
      <div className=" w-full p-1 flex justify-start gap-4 flex-col">
        <p className=" text-3xl capitalize font-bold  text-center">
          Loved by over thousand travelers
        </p>
        <div className="w-full p-1 flex flex-col lg:flex-row justify-start gap-3">
          <CardReaction />
        </div>
      </div>
    </div>
  );
};
