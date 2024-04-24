import React from "react";
import { CgProfile } from "react-icons/cg";
import "../App.css";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="h-dvh w-screen overflow-hidden
    font-Kodchasan text-2xl"
    >
      <div
        className="flex flex-grow-0 flex-row justify-between 
      text-[#142183] mt-5 mx-4"
      >
        <div>KAIN</div>
        <div>
          <CgProfile className="" size={30} />
        </div>
      </div>
      <div className="flex flex-grow-0 h-[70vh] relative">
        <img
          src="letrucqui.svg"
          alt="le truc qui"
          className="absolute left-[28vw] top-0"
        />
        <img
          src="mode.svg"
          alt="mode"
          className="absolute right-[10vw] top-[15vh]"
        />
        <img
          src="tech.svg"
          alt="tech"
          className="absolute left-[10vw] top-[15vh]"
        />
        <img
          src="deco.svg"
          alt="deco"
          className="absolute right-[0vw] top-[28vh]"
        />
        <img
          src="sport.svg"
          alt="sport"
          className="absolute left-[0vw] top-[28vh]"
        />
        <Link to="/recording">
          <img
            src="beauty.svg"
            alt="beauty"
            className="absolute right-[28vw] top-[26vh]"
          />
        </Link>
        <img
          src="9raya.svg"
          alt="9raya"
          className="absolute right-[9vw] top-[44vh]"
        />
        <img
          src="souk.svg"
          alt="souk"
          className="absolute left-[11vw] top-[44vh]"
        />
      </div>
      <div className="relative ">
        <div
          className="absolute sphere rotate-12 w-[200vw] h-[100vw] -translate-x-[10vw]
          bg-gradient-to-t from-[#1d34e4] to-[#1e1e1e] shadow-inner"
        />
        <div
          className="absolute z-10 top-[5vw] left-[5vw] text-white text-lg 
        "
        >
          Mes commandes
          <div className="overflow-y-auto h-[20vh]">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
