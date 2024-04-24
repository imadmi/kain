import React from "react";
import { FaStar } from "react-icons/fa6";

export default function AvailabilityCard({ negocier, price }) {
  return (
    <div
      className="bg-[#F3F3F3] mt-5 flex w-[90vw] h-28 rounded-xl
  flex-row justify-between shadow-lg overflow-hidden relative mb-10"
    >
      <div className="flex flex-col h-[86%] justify-between items-center my-2 ml-2 w-[20%]">
        <img
          src="facepic.svg"
          alt="face pic"
          className="h-[76%] w-[76%] mb-1"
        />
        <div className="bg-[#0015D1] text-center px-2 py-1 text-xs text-white rounded-md mb-1">
          2.4 km
        </div>
      </div>
      <div
        className="flex flex-col h-[84%] justify-start my-2 ml-4 w-[35%]
       text-black text-base"
      >
        <div>Derb Ghallef</div>
        <div className="flex flex-row">
          <FaStar className="text-[#0015D1]" size={20} />
          <FaStar className="text-[#0015D1]" size={20} />
          <FaStar className="text-[#0015D1]" size={20} />
          <FaStar className="text-[#0015D1]" size={20} />
          <FaStar className="text-[#0015D1]" size={20} />
        </div>
        {negocier && (
          <div className="mt-1 font-semibold text-lg  text-black">{price}</div>
        )}
      </div>
      <div className="relative w-[45%] h-[120%] -translate-y-3">
        <div
          className={`${negocier ? "bg-green-400 " : "bg-gray-400 "}
        shadow-inner rounded-lg rotate-6 translate-x-2 absolute right-0 top-0 w-full h-full`}
        ></div>
      </div>
      <div
        className="absolute text-base right-0 top-0 w-[39%] flex flex-col leading-[18px]
        mt-3 mr-1 items-center "
      >
        <img src="comment.svg" alt="comment" className="w-1/3" />
        {negocier ? (
          <div className="text-sm text-center">Négocier</div>
        ) : (
          <div className="text-sm text-center">Confirmation en attente</div>
        )}
      </div>
    </div>
  );
}
