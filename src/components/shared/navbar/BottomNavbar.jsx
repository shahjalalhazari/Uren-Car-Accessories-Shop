"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaAngleDown, FaBars, FaDollarSign, FaUser } from "react-icons/fa";

const BottomNavbar = ({ navItems, categories, isUser }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="navbar-bottom-part">
      {/* NAVBAR BOTTOM PART FOR LARGE DEVICES */}
      <div className="lg-bottom-nav">
        {/* Category Menu  */}
        <div className="flex items-center gap-x-16">
          <div className="relative group dropdown">
            <div className="categories-list-heading uren-transition">
              <FaBars className="text-4xl" />
              <h2 className="categories-list-heading-text">
                <span>Shop By</span>
                <br />
                <span>Department</span>
              </h2>
              <p className="categories-arrow">
                <FaAngleDown />
              </p>
            </div>

            {/* Category List */}
            <ul className="categories-list">
              {categories.map((item, index) => (
                <li key={index} className="dropdown-list-item">
                  <Link
                    href={`/shop/products/category?${encodeURIComponent(
                      item.name
                    )}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Navigation */}
          <div className="main-nav">
            {navItems.map((item) => (
              <Link
                className={`main-nav-items ${
                  pathname === item.path &&
                  "text-base-100 bg-dark py-[18px] px-5"
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
              <FaDollarSign /> <FaAngleDown className="dropdown-arrow" />
            </button>
            <ul className="dropdown-list">
              <li className="dropdown-list-item dropdown-list-active">
                <Link href="">د.إ UAE Dirhams</Link>
              </li>
              <li className="dropdown-list-item">
                <Link href="">$ US Dollar</Link>
              </li>
              <li className="dropdown-list-item">
                <Link href="">£ Pound Sterling</Link>
              </li>
              <li className="dropdown-list-item">
                <Link href="">€ EUR</Link>
              </li>
            </ul>
          </div>

          {/* Language Dropdown  */}
          <div className="relative group dropdown">
            <button className="dropdown-header">
              <Image
                src="/images/menu/icon/1.jpg"
                width="22"
                height="15"
                alt="English"
              />{" "}
              <FaAngleDown className="dropdown-arrow" />
            </button>
            <ul className="dropdown-list">
              <li className="language-dropdown-item dropdown-list-active">
                <Image
                  src="/images/menu/icon/1.jpg"
                  width="22"
                  height="12"
                  alt="English"
                />{" "}
                English
              </li>
              <li className="language-dropdown-item">
                <Image
                  src="/images/menu/icon/2.jpg"
                  width="22"
                  height="15"
                  alt="English"
                />{" "}
                Français
              </li>
            </ul>
          </div>

          {/* User's Account */}
          <div className="relative group dropdown">
            <button className="dropdown-header">
              <FaUser /> <FaAngleDown className="dropdown-arrow" />
            </button>
            <ul className={"dropdown-list"}>
              {/* TODO */}
              {/* {isUser ? (
                <>
                  <li
                    className={`dropdown-list-item ${
                      pathname.split("/").includes("profile") &&
                      "dropdown-list-active"
                    }`}
                  >
                    <Link href={"/user/profile"}>My Account</Link>
                  </li>
                  <li className="dropdown-list-item">
                    <Link href={"/"}>Logout</Link>
                  </li>
                </>
              ) : (
                <li
                  className={`dropdown-list-item ${
                    pathname.split("/").includes("signin") &&
                    "dropdown-list-active"
                  }`}
                >
                  <Link href={"/user/signin"}>Sign In | Sign Up</Link>
                </li>
              )} */}
              <li
                className={`dropdown-list-item ${
                  pathname.split("/").includes("profile") &&
                  "dropdown-list-active"
                }`}
              >
                <Link href={"/user/profile"}>My Account</Link>
              </li>
              <li
                className={`dropdown-list-item ${
                  pathname.split("/").includes("dashboard") &&
                  "dropdown-list-active"
                }`}
              >
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li className="dropdown-list-item">
                <Link href={"/"}>Logout</Link>
              </li>
              <li
                className={`dropdown-list-item ${
                  pathname.split("/").includes("signin") &&
                  "dropdown-list-active"
                }`}
              >
                <Link href={"/user/signin"}>Sign In | Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* NAVBAR BOTTOM PART FOR MEDIUM DEVICES */}
      <div className="md-bottom-nav">
        <div className="relative group dropdown w-1/3">
          <div
            className="categories-list-heading uren-transition"
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
            className="categories-list-heading uren-transition"
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
    </div>
  );
};

export default BottomNavbar;