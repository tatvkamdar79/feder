import React from "react";
import Card from "./Card";
import pic from "../Assets/home-drawers.jpg";

const Home = () => {
  return (
    <div className="py-[100px] ">
      <p className="font-playfair font-semibold text-xl py-3 text-center">
        F E D E R F E D E R F E D E R F E D E R
        <br />
        Your text goes here. Your text goes here.
        <br />
        Your text goes here. Your text goes here.
        <br />
        Your text goes here. Your text goes here.
        <br />
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:mx-20 place-items-center gap-x-0 sm:gap-x-16 md:gap-x-32 gap-y-10 mt-0 sm:mt-10">
        <Card
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
        />
      </div>
    </div>
  );
};

export default Home;
