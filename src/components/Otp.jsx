import React, { useState } from "react";

export default function Otp() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div
      className="w-screen h-dvh flex flex-col bg-gradient-to-t 
    from-[#142183] to-[#2A335B] items-center text-white text-2xl
    font-Kodchasan relative overflow-auto "
    >
      <img src="map.svg" className="w-full absolute top-0 right-0 " />
      <div className="flex flex-col items-center mt-16">
        <div className="text-[54px] mb-3 z-10">KAIN</div>
      </div>
      <div
        className="text-2xl h-1/3 flex justify-center items-center z-10 text-base
      w-4/6 text-center "
      >
        Recherche de disponibilité en cours
      </div>
      <div
        className="fixed bottom-0 w-full h-[55vh] bg-white z-10 rounded-t-[40px] 
      flex flex-col items-center text-black text-base"
      >
        <img
          src="Rectangle.svg"
          className="w-[20vw] absolute top-5 rounded-full"
        />
        <div className=" mt-[16vw] mb-[5vw] text-lg text-[#132083]">
          Confirmation
        </div>
        <div className="w-[80vw] mt-4 text-center leading-[18px]">
          Nous avons envoyé un code vérification au +212 6 60606060
        </div>

        <div className="relative">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Entrez le code de vérification"
            className="border border-gray-800 rounded px-3 py-2 w-[90vw] mt-[7vw] placeholder:text-sm"
          />
          <div
            className="absolute left-2 -top-3 mt-[7vw] mr-4 text-sm
           bg-violet-100 px-2 rounded-3xl"
          >
            Code de vérification
          </div>
        </div>

        <div className="fixed bottom-[4vh] w-full px-8 flex items-center justify-center">
          <div
            className="bg-[#132083] p-[4vw] text-base w-full rounded-full
          flex items-center justify-center text-white font-semibold"
          >
            <img src="audio.svg" className="mr-3 filter invert " />
            Commencer
          </div>
        </div>
      </div>
    </div>
  );
}
