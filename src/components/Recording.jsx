import React from "react";
import RecordingModal from "./RecordingModal";

export default function Recording() {

  return (
    <div
      className="w-screen h-dvh flex flex-col bg-gradient-to-t 
    from-[#142183] to-[#2A335B] items-center text-white text-2xl
    font-Kodchasan relative overflow-auto "
    >
      <div className="flex flex-col items-center mt-16">
        <div className="text-[54px] mb-3 z-10">KAIN</div>
        <div className="text-2xl ">Ghir sewel</div>
      </div>

      <RecordingModal />
    </div>
  );
}
