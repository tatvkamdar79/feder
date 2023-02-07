import React from "react";
import Card from "./Card";
import pic from "../Assets/home-drawers.jpg";
import { categoryNames } from "../Categories/allCategoryNames";
import useMediaQuery from "../Hooks/useMediaQuery";

const pascalCaseToNormal = (str) => {
  let result = str.replace(/([A-Z])/g, " $1").toLowerCase();
  let words = result.split(" ");
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
};

const Home = () => {
  const isLessThan370 = useMediaQuery("(max-width: 370px)");
  // console.log(isLessThan370);
  return (
    <div className="py-[90px]">
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
        {categoryNames.map(({ id, name }) => (
          <Card
            key={id}
            title={pascalCaseToNormal(name)}
            img={pic}
            link={"/products/category1"}
          />
        ))}
        {/* <Card
          title={"Product Category 1"}
          img={pic}
          link={"/products/category1"}
        />
        <Card
          title={"Product Category 2"}
          img={pic}
          link={"/products/category2"}
        />
        <Card
          title={"Product Category 3"}
          img={pic}
          link={"/products/category3"}
        />
        <Card
          title={"Product Category 4"}
          img={pic}
          link={"/products/category4"}
        />
        <Card
          title={"Product Category 5"}
          img={pic}
          link={"/products/category5"}
        />
        <Card
          title={"Product Category 6"}
          img={pic}
          link={"/products/category6"}
        />
        <Card
          title={"Product Category 7"}
          img={pic}
          link={"/products/category7"}
        />
        <Card
          title={"Product Category 8"}
          img={pic}
          link={"/products/category8"}
        /> */}
      </div>
    </div>
  );
};

export default Home;
