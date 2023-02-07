import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";
import { BiRupee } from "react-icons/bi";

const Card = ({ title, img, link, price }) => {
  const isLessThan370 = useMediaQuery("(max-width: 370px)");
  const onHomePage = price == null;
  return (
    <a
      href={link}
      className={`${
        isLessThan370
          ? "h-[250px] w-[260px]"
          : onHomePage
          ? "h-[170px] w-[180px]"
          : "h-[190px] w-[180px]"
      } sm:h-[230px] sm:w-[220px] ${
        onHomePage ? "md:h-[290px]" : "md:h-[320px]"
      } md:w-[340px] shadow-xl hover:scale-105 transition duration-500 rounded-lg`}
    >
      <img src={img} alt="prod img" className={`rounded-lg`} />
      <span className="flex pt-1 text-center text-lg font-semibold font-serif justify-center relative">
        {title}
      </span>
      {price != null ? (
        <p className="px-2 font-mono font-normal text-md">
          <BiRupee size={16} className="inline" /> {price}/-
        </p>
      ) : (
        ""
      )}
    </a>
  );
};

export default Card;
