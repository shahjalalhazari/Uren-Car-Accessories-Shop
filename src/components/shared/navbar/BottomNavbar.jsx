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
              className={`categories-arrow transition-transform duration-500 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaAngleDown />
            </p>
          </div>

          {isOpen && (
            <ul className="categories-list">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="dropdown-list-item"
                >
                  <Link
                    href={`/offers/${encodeURIComponent(item.name)}`}
                  >
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