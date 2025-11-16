"use client"
import { userLogout } from "@/utils/userLogout";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiHome, BiMenu, BiSearch, BiShoppingBag, BiSolidPhone, BiStoreAlt, BiX } from "react-icons/bi";


// NAVBAR TOP PART FOR SMALL SCREEN DEVICES.
const SmTopNav = ({navItems, isUser}) => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // GET THE USER.
  const userAuthenticated = isUser.status;

  const closeNavbar = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setNavbarOpen(false);
      setIsAnimatingOut(false);
    }, 500);
  };

  // HANDLER FOR USER LOGOUT.
  const handleLogout = async() => {
    userLogout();
  }

  return (
    <div className="sm-top-nav">
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
        {/* HAMBURGER MENU BTN */}
        <li className="text-5xl" onClick={() => setNavbarOpen(true)}>
          <BiMenu />
        </li>

        {/* SHOPPING CART BTN */}
        <Link href="/shop/cart" className="">
          <li
            className={`nav-cart-btn uren-transition ${
              pathname.split("/").includes("cart") && "active-cart-btn"
            }`}
          >
            <BiShoppingBag className="text-2xl" />
            <div className="grid text-sm ">
              <span className="cart-qty">3 Items</span>
              <span className="cart-amount">$462.40</span>
            </div>
          </li>
        </Link>

        {navbarOpen && (
          <>
            {/* BG OVERLAY (Background Dim) */}
            <div
              className={`sidebar-overlay ${
                navbarOpen && !isAnimatingOut ? "visible" : ""
              }`}
              onClick={closeNavbar}
            ></div>

            {/* SIDEBAR MENU */}
            <div
              className={`menu-sidebar w-3/4 ${
                isAnimatingOut
                  ? "animate-fadeOut"
                  : navbarOpen
                  ? "animate-fadeIn"
                  : ""
              }`}
            >
              {/* CLOSE BTN */}
              <button className="sidebar-close-btn" onClick={closeNavbar}>
                <BiX />
              </button>

              {/* SEARCH FORM */}
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

              {/* MAIN NAV ITEMS */}
              <ul className="sidebar-nav-list">
                {navItems?.map((item) => (
                  <li key={item.path} className="">
                    <Link
                      className={`sidebar-nav-item ${
                        pathname === item.path ? "sidebar-active-nav-item" : ""
                      }`}
                      href={item.path}
                      onClick={() => setNavbarOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <hr className="border border-uren-border my-6" />
              
              <ul className="text-body mx-2">
                <div className="collapse collapse-arrow mb-[-10px]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-semibold">
                    User Settings
                  </div>
                  <div className="collapse-content text-sm ml-4">
                    <ul className="space-y-3">
                      {userAuthenticated === "authenticated" ? 
                      <>
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
                          <p onClick={handleLogout}>Logout</p>
                        </li>
                      </>:<>
                        <li
                          className={`${
                            pathname.split("/").includes("signin") &&
                            "dropdown-list-active"
                          }`}
                          onClick={() => setNavbarOpen(false)}
                        >
                          <Link href={"/user/signin"}>Sign In | Sign Up</Link>
                        </li>
                      </>}
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow mb-[-10px]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-semibold">Currency</div>
                  <div className="collapse-content text-sm ml-4">
                    <ul className="space-y-3">
                      <li className="dropdown-list-active">
                        <Link href="">د.إ UAE Dirhams</Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
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
                        className="dropdown-list-active"
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

              {/* Phone Number */}
              <Link href="tel://971589196282">
                <li className="nav-phone-num m-6">
                  <BiSolidPhone />
                  +971 58 919 6282
                </li>
              </Link>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default SmTopNav;