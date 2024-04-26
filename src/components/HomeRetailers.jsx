import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function HomeRetailers() {
  return (
    <div
      className="h-dvh w-screen relative
  font-Kodchasan text-2xl overflow-hidden"
    >
      <div
        className="flex flex-grow-0 flex-row justify-between 
    text-[#142183] mt-5 mx-8 overflow-auto"
      >
        <div>KAIN</div>
        <div>
          <CgProfile className="" size={30} />
        </div>
      </div>
      <div className="h-[90vh] overflow-auto p-6 z-10 flex flex-col">
        <div
          className="border-2 border-[#0015D1] flex flex-col text-[#0015D1] p-4
         rounded-3xl mt-6 pb-8"
        >
          <div className="font-semibold mt-3">Salam, Pospara</div>
          <div className="text-lg mt-4">
            Merhba bik end KAIN, Lyum ljaw zwin bzaf, ntemnaw ijiwk deals.
          </div>
        </div>
        <div
          className="bg-[#132083] flex flex-row text-white text-xl p-4
         rounded-3xl mt-8 justify-between items-center px-8 relative"
        >
          <div className="">Comptoire</div>
          <img src="desk.svg" alt="" />
          <div className="absolute bg-[#EF4136] rounded-full -right-2 -top-2 p-2 size-8
          text-center flex items-center justify-center text-base">
            <div>21</div>
          </div>
        </div>
        <div
          className="bg-[#132083] flex flex-row text-white text-xl p-4
         rounded-3xl mt-6 justify-between items-center px-8 relative"
        >
          <div className="">Historique</div>
          <img src="list.svg" alt="" />
        </div>
      </div>
      <div className="absolute bottom-0 -z-50 w-full">
        <img src="ellipse.svg" alt="" className="w-full" />
      </div>
    </div>
  );
}
