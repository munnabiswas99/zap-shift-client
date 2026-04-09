import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Buttons = () => {
  return (
    <div className="flex gap-2 absolute bottom-20 left-21 z-30">
      <div className="flex">
        <button className="bg-primary px-3 rounded-4xl font-bold">
          Track Your Parcel
        </button>
        <p className="bg-black rounded-full p-3 text-primary">
          <FiArrowUpRight />
        </p>
      </div>
      <button className="font-bold p-2 rounded-lg bg-white border border-gray-400">
        Be A Rider
      </button>
    </div>
  );
};

export default Buttons;
