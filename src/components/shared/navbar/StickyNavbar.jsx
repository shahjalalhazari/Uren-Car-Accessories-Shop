"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaAngleDown, FaUser } from "react-icons/fa";


const StickyNavbar = ({ navItems, isUser }) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

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

  return (
    <nav
      className={`sticky-navbar uren-transition ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="main-nav">
        {navItems.map((item) => (
          <Link
            className={`main-nav-items py-4 lg:py-5 uren-transition ${
              pathname === item.path && "text-base-100 bg-dark px-4 lg:px-5"
            }`}
            key={item.path}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-8 lg:gap-12">
        <Link href="/shop/cart" className="">
          <div className="flex gap-3 items-center">
            <div className="relative">
              <BiShoppingBag className="text-2xl lg:text-3xl" />
              <p className="cart-items-qty">3</p>
            </div>
            <p className="text-lg font-semibold leading-none">
              <span className="text-xs">AED</span> <br /> 462.40
            </p>
          </div>
        </Link>

        {/* User's Account */}
        <div className="relative group dropdown">
          <button className="dropdown-header">
            <FaUser /> <FaAngleDown className="dropdown-arrow" />
          </button>
          <ul className={"dropdown-list"}>
            {isUser ? (
              <>
                {/* <li className="dropdown-list-item dropdown-list-active"> */}
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
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;