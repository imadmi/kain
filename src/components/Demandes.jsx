import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Demandes() {
  return (
    <div
      className="h-dvh w-screen relative
  font-Kodchasan text-2xl overflow-hidden"
    >
      <div
        className="flex flex-grow-0 flex-row justify-between 
    text-[#142183] mt-5 mx-8 overflow-auto"
      >
        <Link to="/home">
          <IoHomeOutline className="" size={30} />
        </Link>
        <div>KAIN</div>
      </div>
      <div className="h-[90vh] overflow-auto p-6 pt-12">
        <Demande />
        <Demande />
      </div>
      <div className="absolute bottom-0 -z-50 w-full">
        <img src="ellipse.svg" alt="" className="w-full" />
      </div>
    </div>
  );
}

const Demande = () => {
    return (
      <div className="relative flex border border-gray-300 h-32 w-full
      p-4 rounded-xl items-center justify-center text-white text-base mb-12">
        <Audio />
        <button className="absolute -bottom-5 left-[7vw] w-[35vw] text-center
         bg-[#EF4136] py-1 px-6 rounded-lg font-semibold">Decline</button>
        <button className="absolute -bottom-5 right-[7vw] w-[35vw] text-center
         bg-[#86D008] py-1 px-6 rounded-lg font-semibold">Accept</button>
      </div>
    );
  };

  const Audio = () => {
    return (
      <div className="flex bg-gray-300 h-14 w-5/6 rounded-full justify-start p-2 text-start mb-4">
        <img src="audioimg.svg" alt="" className="-translate-x-11"/>
      </div>
    );
  };