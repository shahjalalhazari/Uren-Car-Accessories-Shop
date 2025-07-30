"use client"
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full space-y-4">
      {items?.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className={`border text-body transition-all duration-500 ${
              isActive ? "border-primary" : "border-uren-border"
            }`}
          >
            <button
              className="w-full flex justify-between gap-x-4 items-center p-4 text-left text-sm lg:text-base font-semibold uppercase bg-gray-bg"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <span>{isActive ? <FaMinus /> : <FaPlus />}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 px-4 ${
                isActive ? "max-h-[500px] py-4" : "max-h-0"
              }`}
            >
              <p className="text-sm">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
