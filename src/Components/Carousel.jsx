import React, { useState } from "react";
import allCategories from "../Assets/Categories/index";
import { useParams } from "react-router-dom";
// import { BiRupee } from "react-icons/bi";
import useMediaQuery from "../Hooks/useMediaQuery";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Carousel = () => {
  const isLessThan500 = useMediaQuery("(max-width: 500px)");
  const isAbove1060 = useMediaQuery("(min-width: 1060px)");
  // console.log(isAbove1060);
  const { category, name } = useParams();
  const productName = name;
  const strCategory = String(category);
  const categoryProducts = allCategories[strCategory].products;
  // console.log(categoryProducts);
  const relatedProducts = [];
  for (
    let i = 0;
    i < categoryProducts.length && relatedProducts.length < 5;
    i++
  ) {
    if (categoryProducts[i].name !== productName) {
      relatedProducts.push(categoryProducts[i]);
    }
  }
  // console.log(relatedProducts);

  let arr = relatedProducts.map(({ id, name, image, description }) => (
    <a
      key={id}
      href={`/products/${category}/${id}`}
      className={`md:w-[340px] shadow-xl hover:scale-105 transition duration-500 rounded-lg`}
    >
      <img src={image} alt="prod img" className={`rounded-lg`} />
      <span className="flex pt-1 text-center text-lg font-semibold font-serif justify-center relative">
        {name}
      </span>
      {/* <p className="px-2 font-mono font-normal text-md">
        <BiRupee size={16} className="inline" /> {price}/-
      </p> */}
    </a>
  ));
  // console.log(arr);

  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((index + arr.length - 1) % arr.length);
  };

  const nextImage = () => {
    setIndex((index + 1) % arr.length);
  };

  return (
    <div className="flex w-full mx-auto justify-center">
      {isAbove1060 ? (
        <div className="flex flex-row justify-center items-center gap-x-4 py-5 w-full mx-10">
          {arr}
        </div>
      ) : isLessThan500 ? (
        <div className="flex flex-row justify-center items-center gap-x-4 py-5 w-5/6 mx-auto">
          <button onClick={prevImage}>
            <GrFormPrevious size={25} className="" />
          </button>
          {arr[index]}
          <button onClick={nextImage}>
            <GrFormNext size={25} className="" />
          </button>
        </div>
      ) : (
        <div className="flex flex-row justify-center gap-x-4 py-5 mx-4">
          <button onClick={prevImage}>
            <GrFormPrevious size={25} className="" />
          </button>
          {arr[index % 5]}
          {arr[(index + 1) % 5]}
          {arr[(index + 2) % 5]}
          <button onClick={nextImage}>
            <GrFormNext size={25} className="" />
          </button>
        </div>
      )}
    </div>
  );
};
export default Carousel;
