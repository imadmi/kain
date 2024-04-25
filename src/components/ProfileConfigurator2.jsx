import React from "react";

export default function ProfileConfigurator2() {
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
        <div className="text-xl font-thin">Ghir sewel</div>
      </div>
      <div
        className="text-xl h-[20vh] flex justify-center items-center font-semibold
    w-4/6 text-center "
      >
        Désormais, configurons votre profil de vente !
      </div>
      <div
        className="fixed bottom-0 w-full h-[60vh] bg-white z-10 rounded-t-[40px] 
    flex flex-col items-center text-black text-base"
      >
        <img
          src="Rectangle.svg"
          className="w-[20vw] absolute top-5 rounded-full"
        />
        <div
          className="mt-14 h-[40vh] w-full mb-[10vh] overflow-y-auto flex flex-col items-center
        justify-between"
        >
          <input
            type="text"
            className="border border-gray-500 w-[85vw] py-2 mt-6 pl-2 rounded-lg"
            placeholder="Adresse"
          />
        </div>

        <button className="fixed bottom-[4vh] w-full px-8 flex items-center justify-center">
          <div
            className="bg-[#132083] p-[4vw] text-base w-full rounded-full
        flex items-center justify-center text-white font-semibold"
          >
            <img src="audio.svg" className="mr-3 filter invert " />
            Continuer
          </div>
        </button>
      </div>
    </div>
  );
}
