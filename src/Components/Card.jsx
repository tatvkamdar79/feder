import React from "react";

const Card = ({ title, img, link }) => {
  return (
    <a
      href={link}
      className="h-[130px] w-[180px] md:h-[250px] md:w-[350px] shadow-xl hover:scale-105 transition duration-500"
    >
      <img src={img} alt="prod img" className="rounded-lg" />
      <span className="flex text-center text-xl font-semibold font-serif justify-center relative bottom-2/3">
        {title}
      </span>
    </a>
  );
};

export default Card;
