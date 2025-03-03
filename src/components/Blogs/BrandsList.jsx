"use client";
import { useCar } from "@/context/CarContext";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const BrandsList = () => {
  const { carBrandList, selectedBrand, handleSelectedBrand } = useCar();

  return (
    <div>
      <h6 className="blog-aside-title">Car Brands</h6>
      <hr />
      <div className="tag-list">
        {carBrandList?.map((brand, index) => (
          <button
            key={index}
            className={`single-tag ${
              selectedBrand === brand.name && "bg-blue text-white"
            }`}
            onClick={() =>
              handleSelectedBrand(
                selectedBrand === brand.name ? null : brand.name
              )
            }
          >
            {brand.name}
            {selectedBrand === brand.name && (
              <BiPlus
                className="w-4 h-4 cursor-pointer rotate-45"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectedBrand(null);
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