import React from "react";
import pic from "../Assets/home-drawers.jpg";
import useMediaQuery from "../Hooks/useMediaQuery";

import Card from "./Card";
import About from "./About";
import Speciality from "./Speciality";

const Home = () => {
  const isLessThan370 = useMediaQuery("(max-width: 370px)");
  const allCategories = [
    { id: 0, name: "Accessories", category: "/products/accessories" },
    { id: 1, name: "Base Units", category: "/products/baseUnits" },
    { id: 2, name: "Corner Units", category: "/products/cornerUnits" },
    { id: 3, name: "Cutlery", category: "/products/cutlery" },
    { id: 4, name: "Klass Drawers", category: "/products/klassDrawers" },
    { id: 5, name: "Larder Units", category: "/products/larderUnits" },
    { id: 6, name: "Slim Drawers", category: "/products/slimDrawers" },
    { id: 7, name: "Tandem Drawers", category: "/products/tandemDrawers" },
    { id: 8, name: "Wiker Basket", category: "/products/wikerBasket" },
  ];
  return (
    <div className="pt-[90px]">
      <p
        className={`${
          isLessThan370 ? "text-3xl gap-x-5" : "text-4xl gap-x-10"
        } font-playfair font-extrabold sm:text-5xl py-3 flex justify-center`}
      >
        <span className="bg-gradient-to-r from-orange-700 to-gray-700 bg-clip-text text-transparent">
          F E D E R
        </span>
        <span className="bg-gradient-to-r from-gray-700 to-orange-700 bg-clip-text text-transparent">
          I N D I A
        </span>
      </p>
      <div className="flex justify-center">
        <p className="text-xl font-bold font-playfair text-center w-5/6">
          Bring home beautiful interiors that fit your budget.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="w-5/6 text-lg font-playfair font-medium mt-1 text-center">
          Experience unmatched quality and satisfaction.
        </p>
      </div>
      <div
        className={`grid ${
          isLessThan370 ? "grid-cols-1" : "grid-cols-2"
        } sm:grid-cols-3 pt-3 sm:pt-0 sm:mx-10 place-items-center gap-x-0 sm:gap-x-16 md:gap-x-14 gap-y-8 sm:gap-y-16 mt-0 sm:mt-10`}
      >
        {allCategories.map(({ id, name, category }) => (
          <Card key={id} title={name} img={pic} link={category} />
        ))}
      </div>
      <About />
      <Speciality />
    </div>
  );
};

export default Home;
