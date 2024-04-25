import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

export default function NewChat() {
  return (
    <div
      className="h-dvh w-screen relative
     font-Kodchasan text-2xl overflow-hidden"
    >
      <div
        className="flex flex-grow-0 flex-row justify-between 
    text-[#142183] mt-5 mx-8 overflow-auto"
      >
        <div className="flex flex-row items-center">
          <Link to="/home" className="mr-4">
            <IoHomeOutline className="" size={30} />
          </Link>
          <Link to="/home">
            <img src="back.svg" alt="" className="" />
          </Link>
        </div>
        <div>KAIN</div>
      </div>
      <Details />
      <div className="h-[90vh] overflow-auto p-4 z-10 ">
        <Msg sender={"facepic.svg"} duration={"0:03"} />
        <Msg duration={"0:04"} />
        <Msg sender={"facepic.svg"} duration={"0:02"} />
        <Msg duration={"0:10"} />
        <Msg sender={"facepic.svg"} duration={"0:09"} />
        <Msg duration={"0:05"} />
        <Msg duration={"0:07"} />
       
      </div>
      <div className="fixed bottom-0 left-[28vw] hover:">
        <img src="addimg.svg" alt="" className="w-24 hover:w-[100px]" />
      </div>
      <div className="fixed bottom-0 right-[28vw] hover:">
        <img src="addaudio.svg" alt="" className="w-24 hover:w-[100px]" />
      </div>
    </div>
  );
}

const Msg = ({ sender, duration }) => {
  return (
    <div
      className={`flex justify-end  ${
        !sender ? "flex-row" : "flex-row-reverse"
      } mb-4`}
    >
      <div
        className={`bg-[#F2F3F5] h-16 w-[60%] rounded-full
      flex flex-row justify-between items-center pl-3 pr-4
    `}
      >
        <img src="Playerplay.svg" alt="" className="h-[70%]" />
        <img src="Waveform.svg" alt="" className="h-[60%]" />
        {duration ? (
          <div className="text-base">{duration}</div>
        ) : (
          <div className="text-base">0:02</div>
        )}
      </div>
      <div>
        {sender ? (
          <img
            src={sender}
            alt=""
            className={`h-16 ${!sender ? "ml-4 " : "mr-4 "}`}
          />
        ) : (
          <img
            src="profilpic.svg"
            alt=""
            className={`h-16 ${!sender ? "ml-4 " : "mr-4 "}`}
          />
        )}
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div
      className="bg-white mt-5 flex w-[100vw] h-28 border-b border-[#cfcfcf] border-t
     flex-row justify-between shadow-lg overflow-hidden relative"
    >
      <div
        className="flex flex-col h-[86%] justify-between items-center 
        my-2 ml-2 w-[20%]"
      >
        <img
          src="facepic.svg"
          alt="face pic"
          className="h-[76%] w-[76%] mb-1"
        />
        <div
          className="bg-[#132083] text-center px-2 py-1 text-xs text-white 
            rounded-md mb-1"
        >
          2.4 km
        </div>
      </div>
      <div
        className="flex flex-col h-[84%] justify-start my-2 ml-4 w-[35%]
    text-black text-base"
      >
        <div>ElectroPlanet</div>
        <div className="flex flex-row">
          <FaStar className="text-[#132083]" size={16} />
          <FaStar className="text-[#132083]" size={16} />
          <FaStar className="text-[#132083]" size={16} />
          <FaStar className="text-[#132083]" size={16} />
          <FaStar className="text-[#132083]" size={16} />
        </div>
        <div className="mt-1 font-semibold text-lg  text-black">1.200 DH</div>
      </div>
      <div
        className="text-base right-0 top-0 w-[39%] flex flex-col
        items-center justify-center"
      >
        <img src="contact.svg" alt="contact" className="" />
      </div>
    </div>
  );
};
