"use client";
import "animate.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const CategoriesList = ({ categoriesList }) => {
  const [isOpen, setIsOpen] = useState(true); // Default open on large screen

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
    <div className="aside-item-container">
      {/* Mobile Header with Toggle Button */}
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Categories</h5>
        <button className="text-2xl">
          {isOpen ? <BiChevronUp /> : <BiChevronDown />}
        </button>
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading hidden md:block">Categories</h5>

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
        <ul className="list-items">
          {categoriesList.map((category, index) => (
            <Link href="/" key={index}>
              <li className="list-item">
                <span>{category.name}</span>
                <span>&#40;12&#41;</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
