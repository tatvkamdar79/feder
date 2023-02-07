import React, { useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav
      className={
        "z-50 w-full fixed top-0 py-2 md:pb-3 bg-white border-b-orange-600 border-b-[3px]"
      }
    >
      <div className="flex items-center justify-between w-full sm:w-5/6 sm:mx-auto">
        <a href="/home">
          <img src={logo} alt="feder-logo" className="ml-2 sm:ml-0" />
        </a>
        {isAboveSmallScreens ? (
          <div className="flex gap-x-8">
            <a
              href="/home"
              className="font-playfair text-lg font-semibold text-black"
            >
              Home
            </a>
            <a
              href="/home"
              className="font-playfair text-lg font-semibold text-black"
            >
              Products
            </a>
            <a
              href="/about"
              className="font-playfair text-lg font-semibold text-black"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="font-playfair text-lg font-semibold text-black"
            >
              Contact Us
            </a>
          </div>
        ) : (
          <div className="mr-3 sm:mr-0">
            <GiHamburgerMenu size={25} onClick={() => setIsMenuToggled(true)} />
          </div>
        )}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed flex flex-col right-0 bottom-0 h-screen bg-gradient-to-b from-grey via-grey to-slate-200 w-[70%]">
            <IoClose
              size={35}
              className="mt-5 mb-10 ml-3"
              onClick={() => setIsMenuToggled(false)}
            />
            <a
              href="/home"
              className="px-4 mt-10 rounded-md font-playfair text-lg font-semibold text-black"
            >
              Home
            </a>
            <a
              href="/home"
              className="px-4 mt-14 rounded-md font-playfair text-lg font-semibold text-black"
            >
              Products
            </a>
            <a
              href="/about"
              className="px-4 mt-14 rounded-md font-playfair text-lg font-semibold text-black"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="px-4 mt-14 rounded-md font-playfair text-lg font-semibold text-black"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
