import React, { useRef, useEffect } from "react";
import "../App.css";
import AvailabilityCard from "./AvailabilityCard";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Availability() {
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
      <div className="h-[90vh] overflow-auto p-4 z-10 ">
        <AvailabilityCard negocier={true} price={"2.300 DH"} />
        <AvailabilityCard />
        <AvailabilityCard negocier={true} price={"4.00 DH"} />
        <AvailabilityCard />
        <AvailabilityCard />
        <AvailabilityCard />
      </div>
      <div className="absolute bottom-0 -z-50 w-full">
        <img src="ellipse.svg" alt="" className="w-full"/>
      </div>
    </div>
  );
}
