"use client";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const BrandsList = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <div>
      <h6 className="blog-aside-title">Brands</h6>
      <hr />
      <div className="tag-list">
        {brandList.map((brand, index) => (
          <button
            key={index}
            className={`single-tag ${
              selectedBrand === brand && "bg-blue text-white"
            }`}
            onClick={() =>
              setSelectedBrand(selectedBrand === brand ? null : brand)
            }
          >
            {brand}
            {selectedBrand === brand && (
              <BiPlus
                className="w-4 h-4 cursor-pointer rotate-45"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedBrand(null);
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandsList;


const brandList = [
  "Toyota",
  "Nissan",
  "Dodge",
  "Ford",
  "Hyundai",
  "GMC",
  "Lincoln",
  "Infinite",
  "Mercedes Benz",
  "Honda",
  "Mitsubishi",
  "BMW",
  "Lexus",
  "Chevrolet",
  "Porsche",
];