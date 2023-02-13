import React from "react";
import aboutus from "../Assets/about-us.jpg";
import useMediaQuery from "../Hooks/useMediaQuery";

const About = () => {
  const isAbove1130 = useMediaQuery("(min-width: 1130px)");
  // console.log(isAbove1130);
  return (
    <div
      name="about"
      className={`relative ${
        isAbove1130 ? "flex" : ""
      } my-10 border-4 border-grey bg-gray-100`}
    >
      <img
        src={aboutus}
        alt="abous-us"
        className={`w-full ${isAbove1130 ? "w-1/2 h-[630px]" : ""}`}
      />
      <div
        className={`${
          isAbove1130 ? "block" : "hidden"
        } absolute h-full bg-gray-500/30 w-[10px] left-1/2`}
      />
      <div className={`font-playfair ${isAbove1130 ? "m-10" : ""} flex-col`}>
        <p className={`text-5xl font-bold my-10 mx-6 w-fit`}>Feder India</p>
        <p className={`text-xl text-[#F58227] font-semibold mb-10 mx-6 w-fit`}>
          Modular Kitchen Accessories & Harware Fittings
        </p>
        <p className="font-sans mx-6">
          Feder - A Leading manufacturer and trader into the verticals of
          modular kitchen accessories and hardware fittings with a unique
          experience of giving you the extreme edge of captivating the
          unexplored spaces of your kitchen, with utmost ease and comfort.
          Conceptualized & designed as per European Standards, Feder has a foot
          print all over the Middle East & European B2B businesses and now, is
          foraying into Indian markets to deliver the smooth, durable and
          perfect kitchen hardware and accessories.
        </p>
        <div className="ml-6 mt-12 w-fit rounded-md overflow-hidden hover:scale-105 transition duration-500 ease-in-out">
          <button className="font-opensans text-lg text-white bg-[#F58227] p-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
