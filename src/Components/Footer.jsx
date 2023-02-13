import React from "react";
import logo from "../Assets/logo.png";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import useMediaQuery from "../Hooks/useMediaQuery";

const Footer = () => {
  const isLessThan735 = useMediaQuery("(max-width: 735px)");
  return (
    <footer
      className={`bg-neutral-800 ${
        isLessThan735 ? "h-full py-10" : "h-[50vh]"
      }  w-full`}
    >
      <div
        className={`grid ${
          isLessThan735 ? "grid-cols-1 gap-y-10" : "grid-cols-3"
        } gap-x-4 w-5/6 h-full place-items-center mx-auto`}
      >
        <div className="flex flex-col w-5/6 justify-center h-full text-white">
          <h1 className="text-2xl font-semibold mb-2 text-center">
            Quick Links
          </h1>
          <div className="flex mx-auto bg-yellow w-1/3 h-[5px] mb-4" />
          <ul className="flex flex-col place-items-baseline mx-auto w-1/3 gap-y-1">
            <li><a href="/home">Home                        </a></li>
            <li><a href="/home">About Us                    </a></li>
            <li><a href="/home">Drawers                     </a></li>
            <li><a href="/products/cornerUnits">Corner Units</a></li>
            <li><a href="/products/cutlery">Cutlery         </a></li>
            <li><a href="/products/wikerBasket">Wiker Basket</a></li>
          </ul>
        </div>
        <div className="flex flex-col w-5/6 h-5/6 gap-y-6 justify-center mx-auto">
          <img src={logo} alt="feder-logo" className="mx-auto" />
          <p className="text-white">
            Feder- A Leading manufacturer and trader into the verticals of
            modular kitchen accessories and hardware fittings with a unique
            experience of giving you the extreme edge of captivating the
            unexplored spaces of your kitchen, with utmost ease and comfort.
          </p>
        </div>  
        {/* <div className="flex flex-col w-5/6 justify-center h-5/6 text-white">
          <h1 className="text-2xl font-semibold mb-2 text-center">
            Quick Links
          </h1>
          <div className="flex mx-auto bg-yellow w-1/3 h-[5px] mb-4" />
          <ul className="flex flex-col place-items-baseline mx-auto w-1/3 gap-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Drawers</li>
            <li>Corner Units</li>
            <li>Cutlery</li>
            <li>Wiker Basket</li>
          </ul>
        </div> */}
        <div className="flex flex-col justify-center items-center text-white h-full">
          <h1 className=" text-2xl mb-2">Contact Details</h1>
          <div className="flex mx-auto bg-yellow w-2/3 h-[5px] mb-4" />
          <div className="flex flex-col gap-y-3 px-4">
            <div className="flex w-full">
              <BsTelephone size={25} />
              <p className="text-xl mx-1"> +91 9704 055 522</p>
            </div>{" "}
            <div className="flex w-full">
              <AiOutlineMail size={25} />
              <p className="text-xl mx-1">kamdartatv1@gmail.com</p>
            </div>
            <div className="flex w-full">
              <AiOutlineInstagram size={28} />
              <p className="text-xl mx-1">@tatv_kamdar</p>
            </div>{" "}
            <div className="flex w-full">
              <AiOutlineFacebook size={28} />
              <p className="text-xl mx-1">Tatv Kamdar</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
