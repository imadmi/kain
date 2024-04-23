import React from "react";
import "../App.css";

export default function Searching() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = () => {
    const randomIncrement = Math.floor(Math.random() * 10) + 1;
    setCounter(counter + randomIncrement);
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      incrementCounter();
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div
      className="w-screen h-dvh flex flex-col bg-gradient-to-t 
    from-[#142183] to-[#2A335B] items-center text-white text-2xl
    font-Kodchasan relative overflow-auto "
    >
      <img
        src="map.svg"
        className="w-full absolute top-0 right-0 h-[60vh] object-cover"
      />
      <div className="flex flex-col items-center mt-16">
        <div className="text-[54px] mb-3 z-10">KAIN</div>
      </div>
      <div
        className="text-2xl h-1/3 flex justify-center items-end z-10 text-base
      w-4/6 text-center relative "
      >
        <img src="edit.svg" className="absolute top-4 right-7" />
        <img src="edit.svg" className="absolute bottom-32 left-4" />
        <img src="edit.svg" className="absolute top-52 right-16" />
        <img src="search.svg" className="absolute animate-move" />
        <div className="z-20">Recherche de disponibilité en cours</div>
      </div>
      <div
        className="fixed bottom-0 w-full h-[45vh] bg-white z-10 rounded-t-[40px] 
      flex flex-col items-center text-black text-base"
      >
        <img
          src="Rectangle.svg"
          className="w-[20vw] absolute top-5 rounded-full"
        />

        <div className=" mt-[16vw] w-[80vw] text-center text-lg">
          Nous avons découvert
        </div>
        <div className="mt-[8vw] text-6xl text-[#132083] font-semibold">
          {counter}
        </div>
        <div className=" mt-[4vw] w-[80vw] text-center text-xl text-[#132083]">
          Potentielles disponibilités
        </div>
        <div className="fixed bottom-[4vh] w-full px-8 flex items-center justify-center">
          <div
            className="bg-[#132083] p-[4vw] text-base w-full rounded-full
          flex items-center justify-center text-white font-semibold"
          >
            Afficher les disponibilités
          </div>
        </div>
      </div>
    </div>
  );
}
