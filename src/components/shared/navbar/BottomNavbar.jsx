"use client";
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
      {/* NAVBAR BOTTOM PART FOR SMALL DEVICES */}
      <div className="sm-bottom-nav">
        <div className="relative w-full">
          <div
            className="category-list-heading"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className="category-list-heading-text">
              <span>Shop By</span>
              <br />
              <span>Department</span>
            </h2>
            <p
              className={`category-arrow ${isOpen ? "rotate-180" : "rotate-0"}`}
            >
              <FaAngleDown />
            </p>
          </div>

          {isOpen && (
            <ul className="category-list">
              {categories.map((item, index) => (
                <Link
                  className="category-list-item"
                  key={index}
                  href={item.path}
                >
                  <li className="dropdown-list-item">{item.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* NAVBAR BOTTOM PART FOR MEDIUM DEVICES */}
      <div className="md-bottom-nav">
        <div className="relative group dropdown w-1/3">
          <div
            className="category-list-heading"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="text-4xl" />
            <h2 className="category-list-heading-text">
              Shop By
              <br />
              Department
            </h2>
            <p
              className={`category-arrow ${isOpen ? "rotate-180" : "rotate-0"}`}
            >
              <FaAngleDown />
            </p>
          </div>

          {isOpen && (
            <ul className="category-list">
              {categories.map((item, index) => (
                <Link
                  className="category-list-item"
                  key={index}
                  href={item.path}
                >
                  <li className="dropdown-list-item">{item.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <form className="lg-search-form">
          <input
            type="text"
            placeholder="Search Here..."
            className="lg-search-input"
          />
          <button className="lg-search-btn" type="submit">
            <BiSearch className="inline-block mr-2 text-2xl" />
            Search
          </button>
        </form>
      </div>

      {/* NAVBAR BOTTOM PART FOR LARGE DEVICES */}
      <div className="lg-bottom-nav">
        {/* Category Menu  */}
        <div className="flex items-center gap-x-16">
          <div className="relative group dropdown">
            <div className="category-list-heading">
              <FaBars className="text-4xl" />
              <h2 className="category-list-heading-text">
                <span>Shop By</span>
                <br />
                <span>Department</span>
              </h2>
              <p className="category-arrow">
                <FaAngleDown />
              </p>
            </div>

            {/* Category List */}
            <ul className="category-list">
              {categories.map((item, index) => (
                <Link
                  className="category-list-item"
                  key={index}
                  href={item.path}
                >
                  <li className="dropdown-list-item">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Main Navigation */}
          <div className="main-nav">
            {navItems.map((item) => (
              <Link
                className={`main-nav-items ${
                  pathname === item.path && "text-base-100 bg-[#000] p-5"
                }`}
                key={item.path}
                href={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Navbar right part */}
        <div className="nav-right-side">
          {/* Currency Dropdown */}
          <div className="relative group dropdown">
            <button className="dropdown-header">
              <FaDollarSign /> <FaAngleDown />
            </button>
            <ul className="dropdown-list">
              <Link href="">
                <li className="dropdown-list-item dropdown-list-active">
                  $ US Dollar
                </li>
              </Link>
              <Link href="">
                <li className="dropdown-list-item">£ Pound Sterling</li>
              </Link>
              <Link href="">
                <li className="dropdown-list-item">€ EUR</li>
              </Link>
            </ul>
          </div>

          {/* Language Dropdown  */}
          <div className="relative group dropdown">
            <button className="dropdown-header">
              <Image
                src="/images/menu/icon/1.jpg"
                width="18"
                height="15"
                alt="English"
              />{" "}
              <FaAngleDown />
            </button>
            <ul className="dropdown-list">
              <li className="language-dropdown-item dropdown-list-active">
                <Image
                  src="/images/menu/icon/1.jpg"
                  width="20"
                  height="12"
                  alt="English"
                />{" "}
                English
              </li>
              <li className="language-dropdown-item">
                <Image
                  src="/images/menu/icon/2.jpg"
                  width="20"
                  height="12"
                  alt="English"
                />{" "}
                Français
              </li>
            </ul>
          </div>

          {/* User's Account */}
          <div className="relative group dropdown">
            <button className="dropdown-header">
              <FaUser /> <FaAngleDown />
            </button>
            <ul className={"dropdown-list"}>
              {/* REPLACE */}
              <Link href="user/profile">
                <li className="dropdown-list-item">My Account</li>
              </Link>
              {/* REPLACE */}
              <Link href="user/logout">
                <li className="dropdown-list-item">Logout</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
