"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { FaAngleDown, FaBars, FaDollarSign, FaUser } from "react-icons/fa";

// NAVBAR BOTTOM PART FOR LARGE SCREEN DEVICES.
const LgBtmNav = ({ navItems, categories }) => {
  const pathname = usePathname();
  const listRef = useRef(null);

  // DROPDOWN STATES.
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // ANIMATION STATE
  const [categoryAnimation, setCategoryAnimation] = useState(false);
  const [currencyAnimation, setCurrencyAnimation] = useState(false);
  const [languageAnimation, setLanguageAnimation] = useState(false);
  const [userMenuAnimation, setUserMenuAnimation] = useState(false);

  // CATEGORY TOGGLE TO OPEN CATEGORY MENU.
  const toggleCategory = () => {
    if (isCategoryOpen) {
      // Start closing animation
      setCategoryAnimation(true);
      setTimeout(() => {
        setIsCategoryOpen(false);
        setCategoryAnimation(false);
      }, 1000); // Match this with animation duration
    } else {
      setIsCategoryOpen(true);
    }
  };

  // CURRENCY TOGGLE TO OPEN CURRENCY MENU
  const toggleCurrency = () => {
    if (isCurrencyOpen) {
      // Start closing animation
      setCurrencyAnimation(true);
      setTimeout(() => {
        setIsCurrencyOpen(false);
        setCurrencyAnimation(false);
      }, 1000); // Match this with animation duration
    } else {
      setIsCurrencyOpen(true);
    }
  };

  // LANGUAGE TOGGLE TO OPEN LANGUAGE MENU
  const toggleLanguage = () => {
    if (isLanguageOpen) {
      // Start closing animation
      setLanguageAnimation(true);
      setTimeout(() => {
        setIsLanguageOpen(false);
        setLanguageAnimation(false);
      }, 1000); // Match this with animation duration
    } else {
      setIsLanguageOpen(true);
    }
  };

  // USER TOGGLE TO OPEN USER MENU
  const toggleUserMenu = () => {
    if (isUserMenuOpen) {
      // Start closing animation
      setUserMenuAnimation(true);
      setTimeout(() => {
        setIsUserMenuOpen(false);
        setUserMenuAnimation(false);
      }, 1000); // Match this with animation duration
    } else {
      setIsUserMenuOpen(true);
    }
  };

  return (
    <div className="lg-bottom-nav">
      {/* CATEGORY MENU */}
      <div className="relative group dropdown" onClick={toggleCategory}>
        <div className="categories-list-heading">
          <FaBars className="text-4xl" />
          <h2 className="categories-list-heading-text">
            <span>Shop By</span>
            <br />
            <span>Categories</span>
          </h2>
          <p
            className={`categories-arrow uren-transition ${
              isCategoryOpen ? "rotate-180" : ""
            }`}
          >
            <FaAngleDown />
          </p>
        </div>
        {/* CATEGORY LIST */}
        {isCategoryOpen && (
          <ul
            ref={listRef}
            className={`categories-list ${
              isCategoryOpen && !categoryAnimation
                ? "rolling-up"
                : "rolling-down"
            }`}
          >
            {categories?.map((category, index) => (
              <li key={index} className="dropdown-list-item">
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

      {/* MAIN NAVIGATION */}
      <div className="main-nav">
        {navItems?.map((item) => (
          <Link
            className={`main-nav-items uren-transition ${
              pathname === item.path && "main-active-nav-items"
            }`}
            key={item.path}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* NAVBAR RIGHT SIDE */}
      <div className="nav-right-side">
        {/* CURRENCY DROPDOWN */}
        <div className="relative group dropdown" onClick={toggleCurrency}>
          <button className="dropdown-header">
            <FaDollarSign />
            <FaAngleDown
              className={`uren-transition ${
                isCurrencyOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isCurrencyOpen && (
            <ul
              ref={listRef}
              className={`dropdown-list ${
                isCurrencyOpen && !currencyAnimation
                  ? "rolling-up"
                  : "rolling-down"
              }`}
            >
              <li className="dropdown-list-item dropdown-list-active">
                <Link href="">د.إ UAE Dirhams</Link>
              </li>
              <li className="dropdown-list-item">
                <Link href="">$ US Dollar</Link>
              </li>
              <li className="dropdown-list-item">
                <Link href="">£ GBP</Link>
              </li>
              <li className="dropdown-list-item">
                <Link href="">€ EUR</Link>
              </li>
            </ul>
          )}
        </div>

        {/* LANGUAGE DROPDOWN */}
        <div className="relative group dropdown" onClick={toggleLanguage}>
          <button className="dropdown-header">
            <Image
              src="/images/menu/icon/1.jpg"
              width="22"
              height="15"
              alt="English"
            />{" "}
            <FaAngleDown
              className={`uren-transition ${
                isLanguageOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isLanguageOpen && (
            <ul
              ref={listRef}
              className={`dropdown-list ${
                isLanguageOpen && !languageAnimation
                  ? "rolling-up"
                  : "rolling-down"
              }`}
            >
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
          )}
        </div>

        {/* USER MENU DROPDOWN */}
        <div className="relative group dropdown" onClick={toggleUserMenu}>
          <button className="dropdown-header">
            <FaUser />{" "}
            <FaAngleDown
              className={`uren-transition ${
                isUserMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isUserMenuOpen && (
            <ul
              ref={listRef}
              className={`dropdown-list ${
                isUserMenuOpen && !userMenuAnimation
                  ? "rolling-up"
                  : "rolling-down"
              }`}
            >
              <li
                className={`dropdown-list-item ${
                  pathname.split("/").includes("profile") &&
                  "dropdown-list-active"
                }`}
              >
                <Link href={"/user/profile"}>My Account</Link>
              </li>
              <li className="dropdown-list-item">
                <p onClick={() => signOut()}>Logout</p>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default LgBtmNav;