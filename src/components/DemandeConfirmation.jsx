import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function DemandeConfirmation() {
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
        <DemandeEnCours />
        <Demande />
      </div>
      <DemandModal />
      <div className="absolute bottom-0 -z-50 w-full">
        <img src="ellipse.svg" alt="" className="w-full" />
      </div>
    </div>
  );
}

const Demande = () => {
  return (
    <div
      className="relative flex border border-gray-300 h-32 w-full
      p-4 rounded-xl items-center justify-center text-white text-base mb-12"
    >
      <Audio />
      <button
        className="absolute -bottom-5 left-[7vw] w-[35vw] text-center
         bg-[#EF4136] py-1 px-6 rounded-lg font-semibold"
      >
        Decline
      </button>
      <button
        className="absolute -bottom-5 right-[7vw] w-[35vw] text-center
         bg-[#86D008] py-1 px-6 rounded-lg font-semibold"
      >
        Accept
      </button>
    </div>
  );
};

const DemandeEnCours = () => {
  return (
    <div
      className="relative flex border border-gray-300 h-32 w-full
      p-4 rounded-xl items-center justify-center text-white text-base mb-12"
    >
      <Audio />
      <button
        className="absolute -bottom-5 w-[35vw] text-center
         bg-[#132083] py-1 px-6 rounded-lg font-semibold"
      >
        En cours
      </button>
    </div>
  );
};

const Audio = () => {
  return (
    <div className="flex bg-gray-300 h-14 w-5/6 rounded-full justify-start p-2 text-start mb-4">
      <img src="audioimg.svg" alt="" className="-translate-x-11" />
    </div>
  );
};

import { BsRecordCircle } from "react-icons/bs";
import { HiOutlinePhoto } from "react-icons/hi2";

export function DemandModal() {
  const [isrecording, setisrecording] = React.useState(null);

  const handleClick = () => {
    setisrecording(true);
    setTimeout(() => {
      setisrecording(false);
    }, 4000);
  };
  return (
    <div
      className="fixed bottom-0 w-full h-[35vh] bg-gradient-to-b 
      from-[#142183] to-[#1b213b] z-20 rounded-t-[40px] 
      flex flex-col items-center text-black text-base border border-black"
    >
      <img
        src="Rectangle.svg"
        className="w-[20vw] absolute top-5 rounded-full filter invert"
      />

      <div className="mt-[25vw] text-base px-8 text-white w-full">
        <div className="border border-gray-400 rounded-md p-3 ">Prix</div>
      </div>

      <button className="fixed bottom-[4vh] w-full px-8 flex items-center justify-center">
        <div
          className={`p-[3vw] text-base w-full rounded-full
          flex items-center justify-center text-white font-semibold bg-[#5E94FF]`}
        >
          <img src="audio.svg" className="mr-3 filter invert " />
          Oui, Marhba
        </div>
      </button>
    </div>
  );
}
