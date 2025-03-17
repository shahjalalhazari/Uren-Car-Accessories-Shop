"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaAngleDown, FaBars, FaDollarSign, FaUser } from "react-icons/fa";

const BottomNavbar = ({ navItems, categories }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar-bottom-part">
      {/* NAVBAR BOTTOM PART FOR LARGE DEVICES */}
      {/* NAVBAR BOTTOM PART FOR MEDIUM DEVICES */}
      <div className="md-bottom-nav">
        <div className="relative group dropdown w-1/3">
          <div
            className="categories-list-heading"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="text-4xl" />
            <h2 className="categories-list-heading-text">
              Shop By
              <br />
              Department
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
            <ul className="categories-list">
              {categories.map((item, index) => (
                <li key={index} className="dropdown-list-item">
                  <Link href={`/offers/${encodeURIComponent(item.name)}`}>
                    {item.name}
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

      {/* NAVBAR BOTTOM PART FOR SMALL DEVICES */}
      <div className="sm-bottom-nav">
        <div className="relative w-full">
          <div
            className="categories-list-heading"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className="categories-list-heading-text">
              <span>Shop By</span>
              <br />
              <span>Department</span>
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
            <ul className="categories-list">
              {categories.map((item, index) => (
                <li key={index} className="dropdown-list-item">
                  <Link href={`/offers/${encodeURIComponent(item.name)}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;