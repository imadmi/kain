import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ChatHistory() {
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
      <div
        className="h-[85vh] overflow-y-auto mt-12 flex flex-col 
      justify-start items-center"
      >
        <div className="font-semibold mb-6 text-3xl divide-y divide-collapse border-gray-300
        border-y">
          <Chat />
          <Chat terminer/>
          <Chat />
          <Chat terminer/>
          <Chat terminer/>
          <Chat />
        </div>
      </div>
    </div>
  );
}

const Chat = ({ terminer }) => {
  return (
    <div className="flex flex-row text-base #border-y px-6 
    text-white h-24 items-center ">
      <img src="facepic.svg" alt="" className="w-[15vw]" />
      <div className="w-[60vw] ml-4">
        <div className="text-lg text-black mb-1">Date et Heure</div>
        <div className="flex flex-row text-xs space-x-3">
          <div className="bg-[#353B48] px-2 py-1 rounded-md">Robe</div>
          <div className="bg-[#353B48] px-2 py-1 rounded-md">Robe</div>
        </div>
      </div>
      {terminer ? (
        <div className="w-[20vw] bg-[#1DC8C8] pt-2 h-8 text-center rounded-md text-xs">
          Terminé
        </div>
      ) : (
        <div className="w-[20vw] bg-[#FBD300] pt-2 h-8 text-center rounded-md text-xs">
          En cours
        </div>
      )}
    </div>
  );
};
