import React from "react";
import { useParams } from "react-router-dom";
import allCategories from "../Assets/Categories/index";
import useMediaQuery from "../Hooks/useMediaQuery";

const Products = () => {
  const { category } = useParams();
  const strCategory = String(category);
  // console.log(strCategory)
  const data = allCategories[strCategory];
  // console.log(data);
  const isLessThan370 = useMediaQuery("(max-width: 370px)");
  return (
    <div className="my-[90px] w-screen md:w-5/6 md:mx-auto">
      <header className="text-3xl font-playfair font-bold text-center my-2 sm:mt-8">
        Product {category}
      </header>
      <div className="flex flex-col pt-4 sm:pt-0 pb-10 md:mt-10 place-items-center">
        <div
          className={`w-full grid ${
            isLessThan370 ? "grid-cols-1" : "grid-cols-2"
          } sm:grid-cols-3 gap-y-7 md:gap-y-14 place-items-center`}
        >
          {data.products.map(({ id, name, image }) => (
            <a
              key={id}
              href={`/products/${strCategory}/${name}`}
              className={`mx-2 shadow-xl hover:scale-105 transition duration-500 rounded-lg`}
            >
              <img src={image} alt="prod img" className={`rounded-lg`} />
              <span className="flex pt-1 text-center text-lg font-semibold font-serif justify-center relative">
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
