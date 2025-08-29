"use client"
import Link from "next/link";
import "animate.css";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";


const CategoriesList = ({categoriesList}) => {
    const [isOpen, setIsOpen] = useState(true); // DEFAULT OPEN ON MEDIUM & LARGE SCREEN.

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false); // IF SCREEN IS SMALL.
      }
    };

    // INITIAL CHECK
    updateDeviceType();

    // ADD EVENT LISTENER TO DETECT SCREEN SIZE CHANGE.
    window.addEventListener("resize", updateDeviceType);

    // CLEANUP EVENT LISTENER.
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return (
    <div className="sidebar-item-container">
      {/* MOBILE HEADER WITH TOGGLE BUTTON */}
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Categories</h5>
        <button
          className={`text-2xl uren-transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <BiChevronDown />
        </button>
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading hidden md:block">Categories</h5>

      {/* Divider */}
      <div className="relative mt-2 lg:mt-3">
        <div className="divider-1"></div>
        <div className="divider-2"></div>
      </div>

      <div
        className={`list-items-container uren-transition ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        <ul className="list-items">
          {categoriesList?.map((category, index) => (
            <Link href="/" key={index}>
              <li className="list-item uren-transition">
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