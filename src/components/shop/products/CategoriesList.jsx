"use client"
import { useCategory } from "@/context/CategoryContext";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BiChevronDown, BiX } from "react-icons/bi";


const CategoriesList = ({categoriesList}) => {
  const [isOpen, setIsOpen] = useState(true); // DEFAULT OPEN ON MEDIUM & LARGE SCREEN.
  const [isClient, setIsClient] = useState(false);

  // CATEGORY CONTEXT.
  const {
    handleCategorySelect, 
    getCategoryUrl, 
    isCategorySelected
  } = useCategory();

  // SET CLIENT-SIDE RENDERING.
  useEffect(() => {
    setIsClient(true);
  },[])

  // IDENTIFY DEVICE SIZE.
  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false); // IF SCREEN IS SMALL.
      }else {
        setIsOpen(true);
      }
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  // CLEARING CATEGORY FILTER.
  const handleCategoryClear = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    handleCategorySelect("");
  }, [handleCategorySelect]);

  // HANDLE CATEGORY CLICK
  const handleCategoryClick = useCallback((e, category) => {
    e.preventDefault();
    handleCategorySelect(category);
  }, [handleCategorySelect]);

  // SHOW LOADING STATE DURING SSR.
  if (!isClient) {
    return (
      <div className="sidebar-item-container">
        <div className="item-collapse-btn">
          <h5 className="item-heading">Categories</h5>
          <button className="text-2xl">
            <BiChevronDown />
          </button>
        </div>
        <h5 className="item-heading hidden md:block">Categories</h5>

        <div className="divider-group">
          <div className="divider-1"></div>
          <div className="divider-2"></div>
        </div>

        <div className="list-items-container">
          <ul className="list-items">
            {categoriesList?.map((_, index) => (
              <li key={index} className="list-item animate-pulse">
                <span className="h-4 bg-gray-200 rounded w-20"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="sidebar-item-container">
      {/* MOBILE HEADER WITH TOGGLE BUTTON */}
      <div 
        className="item-collapse-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5 className="item-heading">Categories</h5>
        <button
          className={`heading-arrow uren-transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <BiChevronDown />
        </button>
      </div>

      {/* DESKTOP HEADER (ALWAYS VISIBLE) */}
      <h5 className="item-heading hidden md:block">Categories</h5>

      {/* DIVIDER */}
      <div className="divider-group">
        <div className="divider-1"></div>
        <div className="divider-2"></div>
      </div>

      <div
        className={`list-items-container uren-transition ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        <ul className="list-items">
          {categoriesList?.map((category, index) => {
            const isActive = isCategorySelected(category.name);

            return (
              <li 
                key={index}
                className={
                `list-item uren-transition ${
                  isActive ? "active-list-item" :""
                }`}
              >
                <Link
                  href={getCategoryUrl(category.name)}
                  onClick={(e) => handleCategoryClick(e, category.name)}
                  className="flex justify-between items-center w-full"
                >
                  <span>{category.name}</span>
                </Link>
                
                {isActive && 
                  <button 
                    className="cross-btn uren-transition"
                    onClick={handleCategoryClear}
                  >
                    <BiX className="transform rotate-45" />
                  </button>
                }
              </li>
            )})}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;