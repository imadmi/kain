import React, { useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import "../App.css";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import RecordingModal from "./RecordingModal";
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
      <div className="absolute bottom-[20vh] -z-50">
        <div
          className="absolute sphere rotate-12 w-[200vw] h-[100vw] -translate-x-[10vw]
        bg-gradient-to-t from-[#1d34e4] to-[#1e1e1e] shadow-inner"
        />
        <div
          className="absolute #bg-gradient-to-t from-[#1d34e4] to-[#1d30c6] 
        h-[80vh] w-screen top-40 left-0"
          style={{
            background: `linear-gradient(to bottom, rgba(29, 52, 228, 0) 0%, 
          rgba(29, 52, 228, 1) 10%, rgba(29, 48, 198, 1) 100%)`,
          }}
        />
      </div>
    </div>
  );
}
