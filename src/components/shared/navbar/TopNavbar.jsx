"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BiChevronDown,
  BiMenu,
  BiSearch,
  BiShoppingBag,
  BiSolidPhone,
  BiX,
} from "react-icons/bi";

const TopNavbar = ({ navItems }) => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="navbar-top-part">
      {/* NAVBAR TOP PART FOR SMALL DEVICES */}
      <div className="sm-top-nav">
        {/* LOGO */}
        <Link href="/">
          <Image
            width={"190"}
            height={"40"}
            src="/images/menu/logo/2.png"
            alt="Uren's Logo"
            className="uren-logo"
          />
        </Link>
        <ul className="sm-top-navbar">
          {/* Hamburger Menu Btn */}
          <li className="text-5xl" onClick={() => setNavbarOpen(true)}>
            <BiMenu />
          </li>
          {/* Cart */}
          {/* REPLACE */}
          <Link href="/" className="">
            <div className="nav-cart-btn">
              <BiShoppingBag className="text-2xl" />
              <div className="grid text-sm ">
                <span className="text-black">3 Items</span>
                <span className="text-secondary font-semibold">$462.40</span>
              </div>
            </div>
          </Link>

          {navbarOpen && (
            <>
              {/* Sidebar Overlay (Background Dim) */}
              <div
                className={`sidebar-overlay ${
                  navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setNavbarOpen(false)}
              ></div>

              {/* Sidebar Menu */}
              <div
                className={`menu-sidebar w-3/4 ${
                  navbarOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {/* Close Button */}
                <button
                  className="sidebar-close-btn"
                  onClick={() => setNavbarOpen(false)}
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
                  {navItems.map((item) => (
                    <li>
                      <Link
                        className={`font-semibold uppercase ${
                          pathname === item.path && "text-secondary"
                        }`}
                        key={item.path}
                        href={item.path}
                        onClick={() => setNavbarOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <hr className="border-[#ccc] mx-8 mt-6 mb-2" />
                <ul className="text-[#999] mx-4">
                  <div className="collapse collapse-arrow mb-[-25px]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">
                      User Settings
                    </div>
                    <div className="collapse-content text-sm ml-4">
                      <ul className="space-y-3">
                        <li>
                          <Link href={"/user/profile"}>My Account</Link>
                        </li>
                        <li>
                          <Link href={"/"}>Sign In | Sign Up</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow mb-[-25px]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Currency</div>
                    <div className="collapse-content text-sm ml-4">
                      <ul className="space-y-3">
                        <li className="text-secondary">
                          <Link href="/">$ US Dollar</Link>
                        </li>
                        <li>
                          <Link href="">£ Pound Sterling</Link>
                        </li>
                        <li>
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
                        <li className="text-secondary">
                          <Link href="/">English</Link>
                        </li>
                        <li>
                          <Link href="/">Français</Link>
                        </li>
                        <li>
                          <Link href="/">Romanian</Link>
                        </li>
                        <li>
                          <Link href="/">Japanese</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>

                {/* Phone Number */}
                <Link href="tel://971589196282">
                  <li className="nav-phone-num m-8">
                    <BiSolidPhone />
                    +971 58 919 6282
                  </li>
                </Link>
              </div>
            </>
          )}
        </ul>
      </div>

      {/* NAVBAR TOP PART FOR MEDIUM DEVICES */}
      <div className="md-top-nav">
        {/* LOGO */}
        <Link href="/">
          <Image
            width={"190"}
            height={"40"}
            src="/images/menu/logo/2.png"
            alt="Uren's Logo"
            className="uren-logo"
          />
        </Link>
        {/* Hamburger Menu Btn */}
        <div className="text-5xl" onClick={() => setNavbarOpen(true)}>
          <BiMenu />
        </div>
        <div className="flex gap-x-6">
          {/* Cart */}
          <Link href="/" className="">
            <div className="nav-cart-btn">
              <BiShoppingBag className="text-2xl" />
              <div className="grid text-sm ">
                <span className="text-black">3 Items</span>
                <span className="text-secondary font-semibold">$462.40</span>
              </div>
            </div>
          </Link>

          {/* Phone Number */}
          <Link href="tel://971589196282">
            <div className="nav-phone-num px-12">
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
                navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onClick={() => setNavbarOpen(false)}
            ></div>

            {/* Sidebar Menu */}
            <div
              className={`menu-sidebar w-1/2 ${
                navbarOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close Button */}
              <button
                className="sidebar-close-btn"
                onClick={() => setNavbarOpen(false)}
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
                {navItems.map((item) => (
                  <li>
                    <Link
                      className={`font-semibold uppercase ${
                        pathname === item.path && "text-secondary"
                      }`}
                      key={item.path}
                      href={item.path}
                      onClick={() => setNavbarOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <hr className="border-[#ccc] mx-8 mt-6 mb-2" />

              <ul className="text-[#999] mx-4">
                <div className="collapse collapse-arrow mb-[-25px]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-semibold">
                    User Settings
                  </div>
                  <div className="collapse-content text-sm ml-4">
                    <ul className="space-y-3">
                      <li>
                        <Link href={"/user/profile"}>My Account</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Sign In | Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow mb-[-25px]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-semibold">Currency</div>
                  <div className="collapse-content text-sm ml-4">
                    <ul className="space-y-3">
                      <li className="text-secondary">
                        <Link href="/">$ US Dollar</Link>
                      </li>
                      <li>
                        <Link href="">£ Pound Sterling</Link>
                      </li>
                      <li>
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
                      <li className="text-secondary">
                        <Link href="/">English</Link>
                      </li>
                      <li>
                        <Link href="/">Français</Link>
                      </li>
                      <li>
                        <Link href="/">Romanian</Link>
                      </li>
                      <li>
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

      {/* NAVBAR TOP PART FOR LARGE DEVICES */}
      <div className="lg-top-nav">
        <Link href="/">
          <Image
            width={"190"}
            height={"40"}
            src="/images/menu/logo/2.png"
            alt="Uren's Logo"
          />
        </Link>
        <ul className="flex gap-4">
          <form className="">
            <input
              type="text"
              placeholder="Search Here..."
              className="lg-search-input"
            />
            <button className="lg-search-btn" type="submit">
              <BiSearch className="inline-block mr-2.5 text-2xl" />
              Search
            </button>
          </form>
          <li className="nav-cart-btn">
            {/* REPLACE */}
            <Link href="/" className="">
              <div className="flex gap-3 items-center">
                <BiShoppingBag className="text-3xl" />
                <div className="grid text-md font-semibold">
                  <span className="text-black">3 Items</span>
                  <span className="text-secondary text-xl">$462.40</span>
                </div>
              </div>
            </Link>
          </li>
          <Link href="tel://971589196282">
            <li className="nav-phone-num">
              <BiSolidPhone />
              +971 58 919 6282
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
