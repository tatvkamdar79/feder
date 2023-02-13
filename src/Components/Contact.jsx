import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

const Contact = () => {
  const isLessThan470 = useMediaQuery("(max-width: 470px)");
  return (
    <div
      className={`flex ${
        isLessThan470 ? "flex-col py-8 gap-y-8" : "flex-row h-[20vh]"
      } bg-orange-500/90 justify-between items-center`}
    >
      <div className={`flex-col ${isLessThan470 ? "w-4/5" : "w-1/2"} mx-auto`}>
        <p className={`text-white text-4xl font-semibold font-playfair mb-2`}>
          For more Information
        </p>
        <p className="text-white/70 text-xl font-semibold font-playfair mt-2">
          Drop your details to get the latest new and updates
        </p>
      </div>
      <div className="mx-auto">
        <button className="bg-white text-xl font-sans font-semibold text-black rounded-md p-3 hover:scale-105 transition duration-500">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Contact;
