import React from "react";
import { useParams } from "react-router-dom";
import allCategories from "../Assets/Categories/index";
import useMediaQuery from "../Hooks/useMediaQuery";
import Carousel from './Carousel';

const ProductPage = () => {
  const { category, name } = useParams();
  const productName = name;
  const strCategory = String(category);
  const categoryProducts = allCategories[strCategory].products;
  const product = categoryProducts.find(
    ({ id, name, image }) => name === productName
  );

  const isAbove1060 = useMediaQuery("(min-width: 1060px");
  return (
    <div className="py-[100px] h-screen">
      {isAbove1060 ? (
        <div className="mx-auto font-playfair flex w-11/12">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg hover:scale-105 transition duration-500 mx-auto justify-center"
          />
          <div className="w-full text-start mx-10">
            <h1 className="text-2xl font-bold font-playfair mb-5">
              {product.name}
            </h1>
            <p className="text-xl mb-5">{product.description}</p>
            {/* <p className="text-lg font-bold mb-5">Price: ${product.price}</p> */}
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
              {product.name}
            </h1>
            <p className="text-xl mb-5">{product.description}</p>
            {/* <p className="text-lg font-bold mb-5">Price: ${product.price}</p> */}
          </div>
        </div>
      )}
      <div className="relative sm:top-[30%] w-full mx-auto">
        <h1 className="text-2xl font-semibold font-playfair text-center">
          Related Products
        </h1>
        <Carousel category={category} name={name} />
      </div>
    </div>
  );
};

export default ProductPage;
