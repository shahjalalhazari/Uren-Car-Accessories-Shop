"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const SmBtmNav = ({ categories }) => {
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
      }, 500); // Match this with animation duration
    } else {
      setIsOpen(true);
    }
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
            {categories?.map((item, index) => (
              <li key={index} className="dropdown-list-item uppercase">
                <Link
                  href={`/shop/products/category?/${encodeURIComponent(
                    item.name
                  )}`}
                >
                  {item.name}
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