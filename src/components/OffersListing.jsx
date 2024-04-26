import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

export default function OffersListing() {
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
      <div className="h-[70vh] p-6 mt-12 flex flex-col justify-center items-center">
        <div className="font-semibold mb-6 text-3xl">Choumicha</div>
        <img src="facepic.svg" alt="" className="w-[65vw]" />
        <MusicPlayer />
        <Choix />
      </div>
      <div className="absolute bottom-0 -z-50 w-full">
        <img src="ellipse.svg" alt="" className="w-full" />
      </div>
    </div>
  );
}

import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

const Choix = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full mt-4">
      <button className="text-red-500">
        <IoCloseCircle size={80} />
      </button>

      <div className="px-6 py-2 rounded-xl border border-black font-semibold">
        Prix
      </div>
      <button className="text-green-500">
        <IoIosCheckmarkCircle size={80} />
      </button>
    </div>
  );
};

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative border-t border-black w-[60vw] mb-6">
        <div className="absolute border-t-2 border-black w-[25vw]"></div>
        <div
          className="absolute size-3 left-[24vw] bg-black 
            -top-[5px] rounded-full"
        ></div>
      </div>
      <div className="flex items-center justify-center mb-4">
        <button className="text-2xl mx-2 focus:outline-none">
          <FaBackward />
        </button>
        <button
          onClick={handlePlayPause}
          className="text-2xl mx-2 focus:outline-none text-white"
        >
          {isPlaying ? (
            <div className="bg-black  p-3 rounded-full size-10 flex items-center justify-center">
              <FaPause />
            </div>
          ) : (
            <div className="bg-black  p-3 rounded-full size-10 flex items-center justify-center">
              <FaPlay />
            </div>
          )}
        </button>
        <button className="text-2xl mx-2 focus:outline-none">
          <FaForward />
        </button>
      </div>
      <audio src="audio.mp3" controls className="my-4 hidden"></audio>
    </div>
  );
};
