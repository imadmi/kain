import React from "react";

export default function Profile() {
  return (
    <div
      className="w-screen h-dvh flex flex-col bg-gradient-to-t 
    from-[#142183] to-[#2A335B] items-center text-white text-2xl
    font-Kodchasan relative overflow-auto "
    >
      <div className="flex flex-col items-center mt-16">
        <div className="text-[54px] mb-3">KAIN</div>
        <div className="text-2xl ">Ghir sewel</div>
      </div>
      <div className="w-5/6 text-center mt-[9vw] font-semibold">
        Comment voulez-vous utiliser l’application ?
      </div>
      <div
        className="w-5/6 h-[55vw] rounded-2xl bg-white mt-[10vw] relative
      flex flex-col justify-center items-center"
      >
        <img src="shopping-cart.svg" />
        <div
          className="absolute -bottom-5 text-xl py-3 bg-[#5E94FF] w-[85%] 
        text-center rounded-full"
        >
          Acheter des articles
        </div>
      </div>
      <div
        className="w-5/6 h-[55vw] rounded-2xl bg-white mt-[15vw] relative
      flex flex-col justify-center items-center"
      >
        <img src="butcher-shop.svg" className="mb-[7vw]"/>
        <div
          className="absolute -bottom-5 text-xl py-3 bg-[#5E94FF] w-[85%] 
        text-center rounded-full"
        >
          Vendre des articles
        </div>
      </div>
    </div>
  );
}
