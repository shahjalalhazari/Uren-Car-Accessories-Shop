"use client";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const CarModels = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div>
      <h6 className="blog-aside-title">Car Models</h6>
      <hr />
      <div className="tag-list">
        {carModels.map((carModel, index) => (
          <button
            key={index}
            className={`single-tag ${
              selectedModel === carModel && "bg-blue text-white"
            }`}
            onClick={() =>
              setSelectedModel(selectedModel === carModel ? null : carModel)
            }
          >
            {carModel}
            {selectedModel === carModel && (
              <BiPlus
                className="w-4 h-4 cursor-pointer rotate-45"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedModel(null);
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarModels;


const carModels = [
  "BMW 1-Series",
  "BMW 2-Series",
  "BMW i5",
  "BMW i7",
  "BMW i8",
  "BMW Z4",
  "BMW XM",
  "Ford Bronco",
  "Ford Everest",
  "Ford Bronco Raptor",
  "Ford Explorer",
  "Ford Expedition",
  "Ford F-150",
  "Ford Mustang",
  "Ford Ranger Raptor",
  "Hyundai Accent",
  "Hyundai Elantra",
  "Hyundai Santa Fe",
  "Hyundai Tucson",
];