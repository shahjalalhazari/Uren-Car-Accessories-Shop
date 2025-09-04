"use client"
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaAngleDown, FaBars } from 'react-icons/fa';


// NAVBAR BOTTOM PART FOR MEDIUM SCREEN DEVICES.
const MdBtmNav = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const listRef = useRef(null);

  // GET SELECTED CATEGORY FROM URL
  useEffect(() => {
    const getCategoryFromUrl = () => {
      if (typeof window === 'undefined') return "";
      const params = new URLSearchParams(window.location.search);
      return params.get("category") || "";
    };
    
    setSelectedCategory(getCategoryFromUrl());
    
    // Listen for URL changes (if user navigates via browser buttons)
    const handleUrlChange = () => {
      setSelectedCategory(getCategoryFromUrl());
    };
    
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

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

  // GET URL WITH CATEGORY PARAMETER
  const getCategoryUrl = (category) => {
    if (typeof window === 'undefined') return `/shop/products?category=${category}`;
    
    const params = new URLSearchParams(window.location.search);
    
    if (selectedCategory === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    
    return `/shop/products?${params.toString()}`;
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
              ref={listRef}
              className={`categories-list ${
                isOpen && !isAnimating ? "rolling-up" : "rolling-down"
              }`}
            >
              {categories?.map((category, index) => (
                <li 
                key={index} 
                className={`
                  dropdown-list-item ${
                  selectedCategory === category.name ? 
                  "dropdown-active-item" :
                  ""}`
                }
                onClick={() => toggleMenu()}
                >
                  <Link
                    href={getCategoryUrl(category.name)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
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