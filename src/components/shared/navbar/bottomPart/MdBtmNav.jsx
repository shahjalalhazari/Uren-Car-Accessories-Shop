"use client"
import { useCategory } from '@/context/CategoryContext';
import Link from 'next/link';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaAngleDown, FaBars } from 'react-icons/fa';


// NAVBAR BOTTOM PART FOR MEDIUM SCREEN DEVICES.
const MdBtmNav = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // CATEGORY CONTEXT.
  const {
    handleCategorySelect, 
    getCategoryUrl, 
    isCategorySelected
  } = useCategory();

  // TOGGLE MENU FOR CATEGORY LIST OPEN OR CLOSE.
  const toggleMenu = () => {
    if (isOpen) {
      // Start closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 1000); // Match this with animation duration
    } else {
      setIsOpen(true);
    }
  };  

  const handleCategoryClick = (category) => {
    handleCategorySelect(category);
    toggleMenu();
  };

  return (
    <div className="md-bottom-nav">
      <div className="relative group dropdown w-1/3">
        <div
          className="categories-list-heading uren-transition"
          onClick={toggleMenu}
        >
          <FaBars className="text-4xl" />
          <h2 className="categories-list-heading-text">
            Shop By
            <br />
            Categories
          </h2>
          <p
            className={`categories-arrow ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaAngleDown />
          </p>
        </div>

        {isOpen && (
          <ul
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

      <form className="md-search-form">
        <input
          type="text"
          placeholder="Search Here..."
          className="md-search-input"
        />
        <button className="md-search-btn" type="submit">
          <BiSearch className="inline-block mr-2 text-2xl" />
          Search
        </button>
      </form>
    </div>
  );
};

export default MdBtmNav;