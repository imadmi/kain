import React from "react";
import { FaStar } from "react-icons/fa6";

export default function Card() {
  return (
    <div
      className="bg-[#F3F3F3] mt-5 flex w-[90vw] h-24 rounded-xl
  flex-row justify-between shadow-lg overflow-hidden relative mb-6"
    >
      <div className="flex flex-col h-[84%] justify-between my-2 ml-2 w-[8%]">
        <img src="makeup.svg" alt="makeup" />
        <img src="bike.svg" alt="bike" />
        <img src="paycreditcard.svg" alt="pay credit card" />
      </div>
      <div className="flex flex-col h-[86%] justify-between items-center my-2 ml-2 w-[20%]">
        <img
          src="facepic.svg"
          alt="face pic"
          className="h-[80%] w-[80%] mb-1"
        />
        <div className="bg-[#132083] text-center px-2 py-1 text-xs rounded-md mb-1">
          2.4 km
        </div>
      </div>
      <div
        className="flex flex-col h-[84%] justify-between my-2 ml-4 w-[62%]
       text-black text-base"
      >
        <div>Derb Ghallef</div>
        <div className="flex flex-row">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="font-semibold">167 MAD</div>
      </div>
      <div className="relative w-[14%] h-full">
        <div className="bg-green-400 shadow-inner rounded-lg rotate-6 translate-x-2 absolute right-0 top-0 w-full h-full"></div>
      </div>
        <div className="absolute -rotate-90 translate-x-4 translate-y-8 text-base right-0 top-0">En cours</div>
    </div>
  );
}
