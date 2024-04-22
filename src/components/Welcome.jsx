import React from "react";
import { PiStarFourDuotone } from "react-icons/pi";
import { IoRemoveOutline } from "react-icons/io5";
import { BsTriangleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6";

const clientArray = [
  "Demandez n’importe quel produit avec simple message Audio",
  "Nous trouverons les meilleures offres à proximité",
  "Réserver, récupérer ou faites vous livrer.",
];

const VendeurArray = ["Augmenter votre visibilité", "Gagner plus de client"];

export default function Welcome() {
  return (
    <div
      className="w-screen h-dvh flex flex-col bg-gradient-to-t 
    from-[#142183] to-[#2A335B] items-center text-white text-2xl
    font-Kodchasan relative overflow-auto"
    >
      <div className="flex flex-col items-center mt-16">
        <div className="text-[54px] mb-3">KAIN</div>
        <div className="text-2xl ">Ghir sewel</div>
      </div>
      <div className="w-full">
        <div className="mt-16 mx-8 font-semibold ">
          <div className="text-2xl mb-5">En tant que client</div>
          {clientArray.map((item, index) => (
            <div
              key={index}
              className=" font-light text-base flex flex-row mb-[3vw]"
            >
              <div className="flex items-center justify-center">
                <PiStarFourDuotone size={40} className="mr-3" />
              </div>
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[3vw] flex flex-row items-center">
        <div>
          <IoRemoveOutline className="inline-block -mr-3" />
          <IoRemoveOutline className="inline-block -mr-3" />
          <IoRemoveOutline className="inline-block -mr-3" />
          <IoRemoveOutline className="inline-block -mr-3" />
          <IoRemoveOutline className="inline-block -mr-3" />
          <BsTriangleFill className=" -rotate-90 inline-block" size={10} />
        </div>
        <div>
          <FaCircle size={10} className="mx-4 mt-1" />
        </div>
        <div>
          <BsTriangleFill className=" rotate-90 inline-block -mr-3" size={10} />
          <IoRemoveOutline className="inline-block -mr-3" />
          <IoRemoveOutline className="inline-block -mr-3" />
          <IoRemoveOutline className="inline-block -mr-3" />
          <IoRemoveOutline className="inline-block -mr-3" />
          <IoRemoveOutline className="inline-block " />
        </div>
      </div>
      <div className="w-full mb-36">
        <div className="mt-[10vw] mx-8 font-semibold ">
          <div className="text-2xl mb-5">En tant que Vendeur</div>
          {VendeurArray.map((item, index) => (
            <div
              key={index}
              className=" font-light text-base flex flex-row mb-[3vw]"
            >
              <div className="flex items-center justify-center">
                <PiStarFourDuotone size={40} className="mr-3" />
              </div>
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-14 w-full px-8 flex items-center justify-center">
        <div
          className="bg-white p-4 text-black text-base w-full rounded-full
          flex items-center justify-center"
        >
          <img src="audio.svg" className="mr-3" />
          Commencer
        </div>
      </div>
    </div>
  );
}
