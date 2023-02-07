import React from "react";
import { useParams } from "react-router-dom";
import allCategories from "../Categories/index";
import useMediaQuery from "../Hooks/useMediaQuery";
import Card from "./Card";

const Products = () => {
  const { category } = useParams();
  const strCategory = String(category);
  const idx = parseInt(strCategory[strCategory.length - 1]) - 1;
  // console.log(idx);
  const data = allCategories[idx];
  // console.log(data);
  const isLessThan370 = useMediaQuery("(max-width: 370px)");
  return (
    <div className="my-[90px] w-screen">
      <header className="text-3xl font-playfair font-bold text-center my-2 sm:mt-8">
        Product {category}
      </header>
      <div className="flex flex-col pt-4 sm:pt-0 pb-10 md:mt-10 place-items-center">
        <div
          className={`w-full md:w-full grid ${
            isLessThan370 ? "grid-cols-1" : "grid-cols-2"
          } sm:grid-cols-3 gap-y-7 md:gap-y-14 place-items-center`}
        >
          {data.products.map(({ id, name, image, price }) => (
            <Card
              key={id}
              title={name}
              img={image}
              link={`/products/${category}/${id}`}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
