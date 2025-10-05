"use client"
import { useCategory } from "@/context/CategoryContext";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

// NAVBAR BOTTOM PART FOR SMALL SCREEN DEVICES.
const SmBtmNav = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // CATEGORY CONTEXT.
  const {
    handleCategorySelect, 
    getCategoryUrl, 
    isCategorySelected 
  } = useCategory();


  // TOGGLER FOR OPEN & CLOSE THE LIST.
  const toggleMenu = () => {
    if (isOpen) {
      // Start closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 1000);
    } else {
      setIsOpen(true);
    }
  };

  // HANDLE CATEGORY CLICK
  const handleCategoryClick = (category) => {
    handleCategorySelect(category);
    toggleMenu();
  };

  return (
    <div className="sm-bottom-nav">
      <div className="relative w-full">
        <div
          className="categories-list-heading uren-transition"
          onClick={toggleMenu}
        >
          <h2 className="categories-list-heading-text">
            <span>Shop By</span>
            <br />
            <span>Categories</span>
          </h2>
          <p
            className={`categories-arrow uren-transition ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <FaAngleDown />
          </p>
        </div>

        {isOpen && (
          <ul
            // ref={listRef}
            className={`categories-list ${
              isOpen && !isAnimating ? "rolling-up" : "rolling-down"
            }`}
          >
            {categories?.map((category, index) => {
              const isActive = isCategorySelected(category);

              return (
                <li 
                key={index} 
                className={`dropdown-list-item ${
                  isActive ? "dropdown-active-item" : ""
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <Link 
                  onClick={(e) => e.preventDefault()}
                  href={getCategoryUrl(category.name)} 
                >
                  {category.name}
                </Link>
              </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SmBtmNav;