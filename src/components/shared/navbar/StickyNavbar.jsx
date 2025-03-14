"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { FaAngleDown, FaUser } from 'react-icons/fa';

const StickyNavbar = ({ navItems }) => {
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
      className={`sticky-navbar ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
      <div className="flex items-center gap-x-8">
        {/* REPLACE */}
        <Link href="/" className="">
          <div className="flex gap-2 items-center">
            <div className="relative">
              <BiShoppingBag className="text-4xl" />
              <p className="cart-items-qty">3</p>
            </div>
            <p className="text-xl font-semibold">$462.40</p>
          </div>
        </Link>

        {/* User's Account */}
        <div className="relative group dropdown">
          <button className="flex items-center gap-x-1 hover:cursor-pointer">
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
    </nav>
  );
};

export default StickyNavbar;