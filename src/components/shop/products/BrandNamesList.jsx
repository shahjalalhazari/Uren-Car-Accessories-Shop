"use client";
import { useCarBrand } from "@/context/CarContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const BrandNamesList = () => {
  const { carBrandList } = useCarBrand();
  const [isOpen, setIsOpen] = useState(true);

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
    <div className="sidebar-item-container">
      {/* Header with toggle button for mobile */}
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Shop By Brands</h5>
        <button
          className={`text-2xl uren-transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <BiChevronDown />
        </button>
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading hidden md:block">Shop By Brands</h5>

      {/* Divider */}
      <div className="relative mt-2 lg:mt-3">
        <div className="divider-1"></div>
        <div className="divider-2"></div>
      </div>

      {/* Brands List */}
      <div
        className={`list-items-container uren-transition ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        <ul className={`list-items`}>
          {carBrandList?.map((brand, index) => (
            <Link href={"/"} key={index}>
              <li className="list-item uren-transition">
                <span>{brand.name}</span>
                <span>&#40;12&#41;</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrandNamesList;
