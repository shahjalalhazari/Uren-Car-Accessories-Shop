"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";


// NAVBAR BOTTOM PART FOR SMALL SCREEN DEVICES.
const SmBtmNav = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isClient, setIsClient] = useState(false);
  const listRef = useRef(null);

  // GET SELECTED CATEGORY FROM URL.
  useEffect(() => {
    setIsClient(true);

    const getCategoryFromUrl = () => {
      if (typeof window === 'undefined') return "";
      const params = new URLSearchParams(window.location.search);
      return params.get("category") || "";
    };
    
    setSelectedCategory(getCategoryFromUrl());

    const handleUrlChange = () => {
      setSelectedCategory(getCategoryFromUrl());
    };

    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

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
    if (!isClient || typeof window === "undefined") {
      return `/shop/products?category=${category}`
    }

    const params = new URLSearchParams(window.location.search);

    if (selectedCategory === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    return `/shop/products?${params.toString()}`;
  }

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
                  ""}`}
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
    </div>
  );
};

export default SmBtmNav;