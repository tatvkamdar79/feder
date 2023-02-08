import React from "react";
import { useParams } from "react-router-dom";
import allCategories from "../Categories/index";
import useMediaQuery from "../Hooks/useMediaQuery";
import Carousel from "./Carousel";
// import Carousel from "./Carousel";

const ProductPage = () => {
  const { category, id } = useParams();
  // console.log(category, id);
  const strCategory = String(category);
  const idx = parseInt(strCategory[strCategory.length - 1]) - 1;
  const product = allCategories[idx].products[id - 1];

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px");
  return (
    <div className="py-[100px] h-screen">
      {isAboveSmallScreens ? (
        <div className="mx-auto font-playfair flex w-11/12">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg hover:scale-105 transition duration-500 mx-auto justify-center"
          />
          <div className="w-full text-start mx-10">
            <h1 className="text-2xl font-bold font-playfair mb-5">
              {product.name} and id -{">"} {product.id}
            </h1>
            <p className="text-xl mb-5">{product.description}</p>
            <p className="text-lg font-bold mb-5">Price: ${product.price}</p>
          </div>
        </div>
      ) : (
        <div className="font-playfair flex flex-col place-items-center w-full">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg hover:scale-105 transition duration-500 mx-auto justify-center"
          />
          <div className="py-10 w-5/6 text-start">
            <h1 className="text-2xl font-bold font-playfair mb-5">
              {product.name} and id -{">"} {product.id}
            </h1>
            <p className="text-xl mb-5">{product.description}</p>
            <p className="text-lg font-bold mb-5">Price: ${product.price}</p>
          </div>
        </div>
      )}
      <div className="relative sm:top-[30%] w-screen sm:w-screen mx-auto">
        <h1 className="text-2xl font-semibold font-playfair text-center">
          Related Products
        </h1>
        <Carousel category={category} id={id} />
      </div>
    </div>
  );
};

export default ProductPage;
