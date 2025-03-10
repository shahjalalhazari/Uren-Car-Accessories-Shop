"use client";
import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PriceRangeFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  // State to manage the price range
  const [priceRange, setPriceRange] = useState([1, 10000]);

  // Handler for slider change
  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false);
      }
    };

    // Initial check
    updateDeviceType();

    // Add event listener to detect resize
    window.addEventListener("resize", updateDeviceType);

    // Cleanup listener
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return (
    <div className="aside-item-container">
      {/* Mobile Header with Toggle Button */}
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Price</h5>
        <button className="text-2xl">
          {isOpen ? <BiChevronUp /> : <BiChevronDown />}
        </button>
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading hidden md:block">Price</h5>

      {/* Divider */}
      <div className="relative mt-2 lg:my-4">
        <div className="divider-1"></div>
        <div className="divider-2"></div>
      </div>
      <div
        className={`list-items-container md:block ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        <div className="px-2.5">
          <Slider
            className="mt-3 lg:mt-0"
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
        </div>
        {/* Display selected price range */}
        <p className="text-sm mt-3 lg:mt-6">
          Price:{" "}
          {`$${priceRange[0]} - $${priceRange[1]}${
            priceRange[1] > 9999 ? "+" : ""
          }`}
        </p>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
