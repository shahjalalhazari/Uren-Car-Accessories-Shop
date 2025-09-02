"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaAngleDown, FaBars } from 'react-icons/fa';


// NAVBAR BOTTOM PART FOR MEDIUM SCREEN DEVICES.
const MdBtmNav = ({ categories }) => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const listRef = useRef(null);

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
                    href={`/shop/products?category=${category.name}`}
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