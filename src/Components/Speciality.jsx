import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

const Speciality = () => {
  const isLessThan370 = useMediaQuery("(max-width: 370px)");
  const items = [
    {
      id: 1,
      name: "Soft Close Drawer Systems",
      description:
        "Luxury, Silence, Smooth, Soft Closing, Full Extension. New safety device to prevent drawer fall out.",
    },
    {
      id: 2,
      name: "Tall / Larder units",
      description:
        "Lader storage with adjustable heights and with base anti skid matt with loading capacity of 20 kgs.",
    },
    {
      id: 3,
      name: "Corner Solutions",
      description:
        "Designed for the maximum usage of corner place and with a style to utilise it.",
    },
    {
      id: 4,
      name: "Waste Bin",
      description:
        "Come in different design to store the new asteroid according to our requirement.",
    },
    {
      id: 5,
      name: "Cutlery Organisation",
      description:
        "Help us in organising the small cutleries in different section and requirement.",
    },
    {
      id: 6,
      name: "Base Units",
      description:
        "Which organise all type of bottles and comes with soft close.",
    },
  ];

  return (
    <div className="my-28 w-5/6 mx-auto">
      <div className="text-4xl font-bold font-playfair mb-5">
        Our Speciality Focused Products
      </div>
      <div className="my-5 w-2/12 h-1 bg-yellow" />
      <div
        className={`grid ${
          isLessThan370 ? "grid-cols-1" : "grid-cols-2"
        } sm:grid-cols-3 gap-10 p-4`}
      >
        {items.map(({ id, name, description }) => (
          <div key={id}>
            <p className="text-xl font-semibold pb-2">{name}</p>
            <p className="text-justify">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
