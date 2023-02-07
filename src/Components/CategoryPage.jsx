import React from "react";
import { useParams } from "react-router-dom";
import allCategories from "../Categories/index";

const Products = () => {
  const { category } = useParams();
  const strCategory = String(category);
  const idx = parseInt(strCategory[strCategory.length - 1]) - 1;
  // console.log(idx);
  const data = allCategories[idx];
  // console.log(data);
  return (
    <div className="my-[100px] w-screen">
      <header className="text-3xl font-playfair font-bold text-center my-2 sm:mt-8">
        Product {category}
      </header>
      <div className="flex flex-col pt-4 sm:pt-0 pb-10 md:mt-10 place-items-center">
        <div className="w-full md:w-5/6 grid grid-cols-2 md:grid-cols-3 gap-y-7 md:gap-y-14 place-items-center">
          {data.products.map(({ id, name, image, price }) => (
            <a href={`/products/${category}/${id}`} key={id}>
              <div className="flex flex-col md:h-[270px] md:w-[370px] shadow-xl hover:scale-105 transition duration-500 border border-grey rounded-lg">
                <img
                  src={image}
                  alt={name}
                  className="h-[165px] w-[180px] sm:h-[100%] sm:w-[100%] relative overflow-hidden rounded-t-lg"
                />
                <div className="px-3 py-2 font-playfair font-semibold text-lg text-black mx-2">
                  <p>{name}</p>
                  <p className="font-mono font-normal text-md">
                    ₹{" " + price}/-
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
