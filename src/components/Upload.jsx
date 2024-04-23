import React from "react";
import { CgVoicemailR } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Upload() {
  const fileInputRef = React.useRef(null);
  const [pic, setpic] = React.useState(null);
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setpic(URL.createObjectURL(file));
    }
  };
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

      <div
        className="fixed bottom-0 w-full h-[55vh] bg-white z-10 rounded-t-[40px] 
      flex flex-col items-center text-black text-base"
      >
        <img
          src="Rectangle.svg"
          className="w-[20vw] absolute top-5 rounded-full"
        />
        <div className=" mt-[16vw] relative flex flex-row justify-center items-center">
          <div>
            <CgVoicemailR className="mr-2" size={25} />
          </div>
          <div className="relative">
            <div className="border-t-2 w-[70vw] border-black" />
            <div className=" absolute right-4 -top-[7px] border-r-4 h-5 border-black" />
          </div>
          <div className="absolute right-0 -bottom-7 text-sm">00:14</div>
        </div>

        <div className="mt-[12vw] text-2xl">Sélectionnez votre photo</div>
        <button
          onClick={handleUploadClick}
          className="w-full flex items-center justify-center mt-[4vw]"
        >
          <img
            src="recordingcircle.png"
            alt=""
            className="ml-[2vw] w-[30vw] "
          />
          {!pic && <img src="upload.svg" className="absolute w-12 pb-3" />}
          {pic && <img src={pic} className="absolute w-28 h-28 rounded-full" />}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/jpeg, image/png, image/gif"
          />
        </button>

        <button className="fixed bottom-[10vh] w-full px-8 flex items-center justify-center">
          <div
            className="bg-[#142183] p-[3vw] text-base w-full rounded-full
          flex items-center justify-center text-white font-semibold"
          >
            <img src="audio.svg" className="mr-3 filter invert " />
            Envoyer
          </div>
        </button>
        <button onClick={() => setpic(null)}
        className="fixed bottom-[2vh] w-full px-8 flex items-center justify-center">
          <div
            className="border-2 p-[3vw] border-red-400 text-base w-full rounded-full
          flex items-center justify-center text-red-600 font-semibold"
          >
            <RiDeleteBinLine size={24} className="mr-3 " />
            Abandenner
          </div>
        </button>
      </div>
    </div>
  );
}
