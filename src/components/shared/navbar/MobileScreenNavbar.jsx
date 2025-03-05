"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShoppingBag, BiSolidPhone, BiX } from "react-icons/bi";

const MobileScreenNavbar = ({ navItems }) => {
  const pathname = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="mobile-screen md:hidden">
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
      <ul className="mobile-navbar">
        {/* Hamburger Menu Btn */}
        <li className="text-5xl" onClick={() => setNavbarOpen(true)}>
          <BiMenu />
        </li>
        {/* Cart */}
        <li className="nav-cart-btn">
          {/* REPLACE */}
          <Link href="/" className="">
            <div className="mobile-cart-btn">
              <BiShoppingBag className="text-2xl" />
              <div className="grid text-sm ">
                <span className="text-black">3 Items</span>
                <span className="text-secondary font-semibold">$462.40</span>
              </div>
              <BiChevronDown className="text-2xl" />
            </div>
          </Link>
        </li>

        {navbarOpen && (
          <>
            {/* Sidebar Overlay (Background Dim) */}
            <div
              className={`mobile-sidebar-overlay ${
                navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onClick={() => setNavbarOpen(false)}
            ></div>

            {/* Sidebar Menu */}
            <div
              className={`mobile-menu-sidebar ${
                navbarOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close Button */}
              <button
                className="mobile-sidebar-close-btn"
                onClick={() => setNavbarOpen(false)}
              >
                <BiX />
              </button>

              {/* Search Form */}
              <form className="mobile-search-form">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Here..."
                  className="mobile-search-input"
                />
                <button type="submit" className="mobile-search-btn">
                  <BiSearch />
                </button>
              </form>

              {/* Menu Items */}
              <ul className="mobile-nav-list">
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
              
              <ul className="mt-8 text-[#999] mx-4">
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
              <li className="mobile-phone-btn">
                <Link href="tel://971589196282" className="nav-phone-num">
                  <BiSolidPhone />
                  +971 58 919 6282
                </Link>
              </li>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default MobileScreenNavbar;