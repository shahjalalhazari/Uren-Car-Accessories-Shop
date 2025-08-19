"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaAngleDown, FaUser } from "react-icons/fa";


const StickyNavbar = ({ navItems }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userMenuAnimation, setUserMenuAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`sticky-navbar uren-transition ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* MAIN NAVIGATION */}
      <div className="main-nav">
        {navItems?.map((item) => (
          <Link
            className={`main-nav-items uren-transition ${
              pathname === item.path && "sticky-active-nav-items"
            }`}
            key={item.path}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-8 lg:gap-10">
        {/* CART ICON */}
        <Link href="/shop/cart" className="">
          <div className={`sticky-nav-cart uren-transition ${pathname.split("/").includes("cart") && "active-cart"}`}>
            <div className="relative">
              <BiShoppingBag className="text-2xl lg:text-3xl" />
              <p className="cart-items-qty">3</p>
            </div>
            <p className="text-lg font-semibold leading-none">
              <span className="text-xs">AED</span> <br /> 462.40
            </p>
          </div>
        </Link>

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
    </nav>
  );
};

export default StickyNavbar;