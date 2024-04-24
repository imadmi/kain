import React, { useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import "../App.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import RecordingModal from "./RecordingModal";

const modalVariants = {
  hidden: { 
     opacity: 0, 
     y: 50, 
     transition: { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] } 
  },
  visible: { 
     opacity: 1, 
     y: 0, 
     transition: { duration: 0, ease: [0.43, 0.13, 0.23, 0.96] } 
  },
  exit: { 
     opacity: 0, 
     transition: { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] } 
  },
 };
 
export default function Home() {
  const [showRecording, setShowRecording] = React.useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowRecording(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="h-dvh w-screen relative
    font-Kodchasan text-2xl overflow-x-hidden"
    >
      <AnimatePresence>
        {showRecording && (
          <motion.div
          initial={{ opacity: 0 , y: 50}}
          animate={{ opacity: 1 , y: 0}}
          exit={{ opacity: 0 , y: 50}}
          ref={modalRef}
          >
            <RecordingModal />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex flex-grow-0 flex-row justify-between 
      text-[#142183] mt-5 mx-4 "
      >
        <div>KAIN</div>
        <div>
          <CgProfile className="" size={30} />
        </div>
      </div>
      <div className="flex flex-grow-0 h-[70vh] relative">
        <img
          src="letrucqui.svg"
          alt="le truc qui"
          className="absolute left-[28vw] top-0"
        />
        <img
          src="mode.svg"
          alt="mode"
          className="absolute right-[10vw] top-[15vh]"
        />
        <img
          src="tech.svg"
          alt="tech"
          className="absolute left-[10vw] top-[15vh]"
        />
        <img
          src="deco.svg"
          alt="deco"
          className="absolute right-[0vw] top-[28vh]"
        />
        <img
          src="sport.svg"
          alt="sport"
          className="absolute left-[0vw] top-[28vh]"
        />
        {/* <Link to="/recording"> */}
        <img
          // onclick to show the Recording modal
          onClick={() => setShowRecording(true)}
          src="beauty.svg"
          alt="beauty"
          className="absolute right-[28vw] top-[26vh]"
        />
        {/* </Link> */}
        <img
          src="9raya.svg"
          alt="9raya"
          className="absolute right-[9vw] top-[44vh]"
        />
        <img
          src="souk.svg"
          alt="souk"
          className="absolute left-[11vw] top-[44vh]"
        />
      </div>
      <div className="relative ">
        <div
          className="absolute sphere rotate-12 w-[200vw] h-[100vw] -translate-x-[10vw]
          bg-gradient-to-t from-[#1d34e4] to-[#1e1e1e] shadow-inner"
        />
        <div
          className="absolute #bg-gradient-to-t from-[#1d34e4] to-[#1d30c6] 
          h-[80vh] w-screen top-40 left-0"
          style={{
            background: `linear-gradient(to bottom, rgba(29, 52, 228, 0) 0%, 
            rgba(29, 52, 228, 1) 10%, rgba(29, 48, 198, 1) 100%)`,
          }}
        />
        <div
          className="absolute z-10 top-[5vw] left-[5vw] text-white text-lg 
        "
        >
          Mes commandes
          <div className="overflow-y-auto h-[85vh] mt-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
