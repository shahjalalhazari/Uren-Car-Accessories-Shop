"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { BiMenu, BiSearch, BiShoppingBag, BiSolidPhone, BiX } from 'react-icons/bi';


// NAVBAR TOP PART FOR MEDIUM SCREEN DEVICES.
const MdTopPart = ({ navItems }) => {
  const pathname = usePathname();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  
    const closeNavbar = () => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setNavbarOpen(false);
        setIsAnimatingOut(false);
      }, 500);
  };
  
    return (
      <div className="md-top-nav">
        <Link href="/">
          <Image
            width={"190"}
            height={"40"}
            src="/images/menu/logo/2.png"
            alt="Uren's Logo"
          />
        </Link>
        <div className="flex gap-x-6">
          {/* Hamburger Menu Btn */}
          <div className="text-5xl pr-5" onClick={() => setNavbarOpen(true)}>
            <BiMenu />
          </div>
          {/* SHOPPING CART BTN */}
          <Link href="/shop/cart">
            <div className="nav-cart-btn">
              <BiShoppingBag className="text-2xl" />
              <div className="grid text-sm ">
                <span className="text-black">3 Items</span>
                <span className="text-secondary font-semibold">$462.40</span>
              </div>
            </div>
          </Link>
          {/* PHONE NUMBER */}
          <Link href="tel://971589196282">
            <div className="nav-phone-num">
              <BiSolidPhone />
              +971 58 919 6282
            </div>
          </Link>
        </div>
        {navbarOpen && (
          <>
            {/* Sidebar Overlay (Background Dim) */}
            <div
              className={`sidebar-overlay ${
                navbarOpen && !isAnimatingOut ? "visible" : ""
              }`}
              onClick={closeNavbar}
            ></div>

            {/* Sidebar Menu */}
            <div
              className={`menu-sidebar w-1/2 ${
                isAnimatingOut
                  ? "animate-fadeOut"
                  : navbarOpen
                  ? "animate-fadeIn"
                  : ""
              }`}
            >
              {/* Close Button */}
              <button
                className="sidebar-close-btn uren-transition"
                onClick={closeNavbar}
              >
                <BiX />
              </button>

              {/* Search Form */}
              <form className="sidebar-search-form">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Here..."
                  className="sidebar-search-input"
                />
                <button type="submit" className="sidebar-search-btn">
                  <BiSearch />
                </button>
              </form>

              {/* Menu Items */}
              <ul className="sidebar-nav-list">
                {navItems?.map((item) => (
                  <li key={item.path}>
                    <Link
                      className={`font-semibold uppercase ${
                        pathname === item.path && "text-secondary"
                      }`}
                      href={item.path}
                      onClick={() => setNavbarOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <hr className="border-uren-border mx-8 mt-6 mb-2" />

              <ul className="text-body mx-4">
                <div className="collapse collapse-arrow mb-[-10px]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-semibold">
                    User Settings
                  </div>
                  <div className="collapse-content text-sm ml-4">
                    <ul className="space-y-3">
                      <li
                        className={`${
                          pathname.split("/").includes("profile") &&
                          "dropdown-list-active"
                        }`}
                        onClick={() => setNavbarOpen(false)}
                      >
                        <Link href={"/user/profile"}>My Account</Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
                        <p>Logout</p>
                      </li>
                      <li
                        className={`${
                          pathname.split("/").includes("signin") &&
                          "dropdown-list-active"
                        }`}
                        onClick={() => setNavbarOpen(false)}
                      >
                        <Link href={"/user/signin"}>Sign In | Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow mb-[-10px]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-semibold">Currency</div>
                  <div className="collapse-content text-sm ml-4">
                    <ul className="space-y-3">
                      <li
                        className="text-secondary"
                        onClick={() => setNavbarOpen(false)}
                      >
                        <Link href="/">$ US Dollar</Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link href="">£ Pound Sterling</Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link href="">€ EUR</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-semibold">Language</div>
                  <div className="collapse-content text-sm ml-4">
                    <ul className="space-y-3">
                      <li
                        className="text-secondary"
                        onClick={() => setNavbarOpen(false)}
                      >
                        <Link href="/">English</Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link href="/">Français</Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link href="/">Romanian</Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link href="/">Japanese</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </>
        )}
      </div>
    );
};

export default MdTopPart;