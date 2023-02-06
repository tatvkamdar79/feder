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
    <div className="py-[90px]">
      <header className="text-3xl font-playfair font-bold text-center my-2">
        Product {category}
      </header>
      <div className="flex flex-col md:mt-10 place-items-center">
        <div className="w-full md:w-5/6 grid grid-cols-2 md:grid-cols-4 gap-y-7 md:gap-y-14 place-items-center">
          {data.products.map(({ id, name, image, price }) => (
            <a href={`/products/${category}/${id}`} key={id}>
              <div className="flex flex-col h-[165px] w-[180px] md:h-[270px] md:w-[370px] shadow-xl hover:scale-105 transition duration-500 border border-grey rounded-lg">
                <img
                  src={image}
                  alt="prod img"
                  className="relative overflow-hidden rounded-t-lg"
                />
                <div className="flex px-3 py-2 font-playfair font-semibold text-lg text-black justify-between">
                  <h4>{name}</h4>
                  <h4>₹{price}/-</h4>
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
