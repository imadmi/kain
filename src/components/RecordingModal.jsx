import React from "react";
import { BsRecordCircle } from "react-icons/bs";
import { HiOutlinePhoto } from "react-icons/hi2";

export default function RecordingModal() {
  const [isrecording, setisrecording] = React.useState(null);

  const handleClick = () => {
    setisrecording(true);
    setTimeout(() => {
      setisrecording(false);
    }, 4000);
  };
  return (
    <div
      className="fixed bottom-0 w-full h-[55vh] bg-white z-20 rounded-t-[40px] 
      flex flex-col items-center text-black text-base"
    >
      <img
        src="Rectangle.svg"
        className="w-[20vw] absolute top-5 rounded-full"
      />
      <div className=" mt-[16vw] relative flex flex-row justify-center items-center">
        <div>
          <BsRecordCircle className="mr-2" size={20} />
        </div>
        <div className="relative">
          <div className="border-t-2 w-[70vw] border-black" />
          <div className=" absolute left-4 -top-[7px] border-r-4 h-5 border-black" />
        </div>
        <div className="absolute right-0 -bottom-7 text-sm">Max 16 seconde</div>
      </div>

      <div className="mt-[12vw] text-2xl">Appuyez pour demander</div>
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-center mt-[4vw]"
      >
        <img src="recordingcircle.png" alt="" className="ml-[2vw] w-[30vw] " />
        {isrecording === false ? (
          <img src="loop.svg" className="absolute w-14" />
        ) : (
          <img src="audio.svg" className="absolute w-14" />
        )}
      </button>

      <button className="fixed bottom-[10vh] w-full px-8 flex items-center justify-center">
        <div
          className={`p-[3vw] text-base w-full rounded-full
          flex items-center justify-center text-white font-semibold
          ${isrecording === false ? "bg-[#142183]" : "bg-gray-500"}`}
        >
          <img src="audio.svg" className="mr-3 filter invert " />
          Envoyer
        </div>
      </button>
      <button
        className={`fixed bottom-[2vh] w-full px-8 flex items-center justify-center`}
      >
        <div
          className="border-2 p-[3vw] text-base w-full rounded-full
          flex items-center justify-center text-gray-600 font-semibold"
        >
          <HiOutlinePhoto size={24} className="mr-3 " />
          Ajouter une photo
        </div>
      </button>
    </div>
  );
}
