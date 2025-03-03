"use client";
import { useCar } from "@/context/CarContext";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const CarModels = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const { modelsList } = useCar();

  return (
    <div>
      <h6 className="blog-aside-title">Car Models</h6>
      <hr />
      <div className="tag-list">
        {modelsList?.map((carModel, index) => (
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