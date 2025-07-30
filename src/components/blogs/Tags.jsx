"use client";
import { useEffect, useState } from "react";
import { BiChevronDown, BiPlus } from "react-icons/bi";

const Tags = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isOpen, setIsOpen] = useState(true); // Default open on medium & large screen

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false); // if screen is small then set isOpen "false"
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
    <div className="sidebar-item-container">
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Tags</h5>
        <button
          className={`text-2xl uren-transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <BiChevronDown />
        </button>
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading text-center hidden md:block">Tags</h5>
      <hr className="sidebar-divider" />

      <div
        className={`list-items-container uren-transition ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        <div className="tag-list">
          {tagsList?.map((tag, index) => (
            <button
              key={index}
              className={`single-tag uren-transition ${
                selectedTag === tag && "tag-selected"
              }`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
              {selectedTag === tag && (
                <BiPlus
                  className="w-4 h-4 cursor-pointer rotate-45 uren-transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTag(null);
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;

const tagsList = [
  "SUV",
  "Sport Car",
  "Toyota",
  "Nissan",
  "Hyundai",
  "Petrol",
  "Land Cruiser",
  "Prado",
  "Dodge",
  "Dodge Charger",
  "Dodge Challenger",
  "Ram",
  "Ram 1500",
];
