import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

const Card = ({ title, img, link }) => {
  const isLessThan370 = useMediaQuery("(max-width: 370px)");
  return (
    <a
      href={link}
      className={`${
        isLessThan370 ? "h-[160px] w-[220px]" : "h-[130px] w-[180px]"
      } sm:h-[160px] sm:w-[220px] md:h-[225px] md:w-[320px] shadow-xl hover:scale-105 transition duration-500`}
    >
      <img src={img} alt="prod img" className="rounded-lg" />
      <span className="flex text-center text-lg font-semibold font-serif justify-center relative">
        {title}
      </span>
    </a>
  );
};

export default Card;
