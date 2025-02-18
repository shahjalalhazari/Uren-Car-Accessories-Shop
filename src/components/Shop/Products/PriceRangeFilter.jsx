"use client";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeFilter = () => {
  // State to manage the price range
  const [priceRange, setPriceRange] = useState([1, 10000]);

  // Handler for slider change
  const handleSliderChange = (value) => {
    setPriceRange(value);
  };
  return (
    <div className="bg-[#eee] p-6">
      <h5 className="uppercase text-xl text-[#333] font-bold">Price</h5>
      <div className="relative my-4">
        <div className="bg-[#ddd] w-full h-[3px]"></div>
        <div className="bg-primary w-16 h-[3px] absolute top-0 left-0"></div>
      </div>
      <Slider
        range
        min={1} // Minimum price
        max={10000} // Maximum price
        value={priceRange}
        onChange={handleSliderChange}
        trackStyle={[{ backgroundColor: "#ffc400", height: "10px" }]}
        handleStyle={[
          {
            backgroundColor: "#fff",
            borderColor: "#ffc400",
            height: "20px",
            width: "20px",
          },
          {
            backgroundColor: "#fff",
            borderColor: "#ffc400",
            height: "20px",
            width: "20px",
          },
        ]}
      />
      {/* Display selected price range */}
      <p className="text-sm mt-6">
        Price:{" "}
        {`$${priceRange[0]} - $${priceRange[1]}${
          priceRange[1] > 9999 ? "+" : ""
        }`}
      </p>
    </div>
  );
};

export default PriceRangeFilter;
