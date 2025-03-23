"use client";
import { useCarBrand } from "@/context/CarContext";
import { useEffect, useState } from "react";
import { BiChevronDown, BiPlus } from "react-icons/bi";

const BrandsList = () => {
  const { carBrandList, selectedBrand, handleSelectedBrand } = useCarBrand();
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
    // <div>
    //   <h6 className="blog-aside-title"></h6>
    //   <hr />

    // </div>

    <div className="sidebar-item-container">
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Car Brands</h5>
        <button
          className={`text-2xl uren-transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <BiChevronDown />
        </button>
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading text-center hidden md:block">Car Brands</h5>
      <hr className="sidebar-divider" />

      <div
        className={`list-items-container uren-transition ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        <div className="tag-list">
          {carBrandList?.map((brand, index) => (
            <button
              key={index}
              className={`single-tag uren-transition ${
                selectedBrand === brand.name && "tag-selected"
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
                  className="w-4 h-4 cursor-pointer rotate-45 uren-transition"
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
    </div>
  );
};

export default BrandsList;
