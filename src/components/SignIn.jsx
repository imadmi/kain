import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SignIn() {
  const [value, setValue] = useState();

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
        <div className=" mt-[16vw] mb-[5vw]">Vous pourrez demander à</div>
        <div className="text-5xl text-[#132083] font-semibold">24,718</div>
        <div className="text-lg text-[#132083] font-thin">Magazins</div>
        <div className="w-[80vw] mt-4 text-center leading-[18px]">
          Entrez votre numéro de téléphone pour continuer
        </div>
        <div className="mt-[7vw]">
          <PhoneInput country={"ma"} value={value} onChange={setValue} />
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
