import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

const Card = ({ title, img, link }) => {
  const isLessThan370 = useMediaQuery("(max-width: 370px)");
  return (
    <a
      href={link}
      className={`${
        isLessThan370 ? "h-[250px] w-[260px]" : "h-[190px] w-[180px]"
      } sm:h-[230px] sm:w-[220px] md:h-[320px] md:w-[340px] shadow-xl hover:scale-105 transition duration-500 rounded-lg`}
    >
      <img src={img} alt="prod img" className={`rounded-lg`} />
      <span className="flex pt-1 text-center text-lg font-semibold font-serif justify-center relative">
        {title}
      </span>
    </a>
  );
};

export default Card;
