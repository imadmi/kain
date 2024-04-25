import React, { useRef, useEffect } from "react";
import "../App.css";
import AvailabilityCard from "./AvailabilityCard";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function ListSales() {
  return (
    <div
      className="h-dvh w-screen relative
  font-Kodchasan text-2xl overflow-hidden"
    >
      <div
        className="-z-50 fixed -top-48 sphere w-[150vw] h-[100vw] -translate-x-[40vw]
        bg-gradient-to-t from-[#1d34e4] to-[#1e1e1e] shadow-inner"
        style={{ transform: "rotate(190deg)" }}
      />
      <div
        className="flex flex-grow-0 flex-row justify-between 
    text-[#142183] mt-5 mx-8 overflow-auto"
      >
        <Link to="/home">
          <IoHomeOutline className="text-white" size={30} />
        </Link>
        <div className="text-white">KAIN</div>
      </div>
      <button className="w-full text-white text-base text-center flex flex-row items-center justify-center">
        <div>En cours</div> <img src="triangle.svg" alt="" className="ml-2" />
      </button>

      <div className="h-[90vh] overflow-auto p-4 z-10 pb-20">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      <button
        className=" absolute bg-gradient-to-r from-[#192cbf] to-[#122b49] 
        h-20 w-screen bottom-0 left-0 flex flex-row items-center justify-center text-white
        text-lg"
      >
        <div className="">Historique des commandes</div>
        <img src="archive.svg" alt="" className="ml-5"/>
      </button>
    </div>
  );
}
