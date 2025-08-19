"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSearch, BiShoppingBag, BiSolidPhone } from "react-icons/bi";

// NAVBAR TOP PART FOR LARGE SCREEN DEVICES.
const LgTopNav = () => {
  const pathname = usePathname();

  return (
    <div className="lg-top-nav">
      <Link href="/">
        <Image
          width={"220"}
          height={"40"}
          src="/images/menu/logo/2.png"
          alt="Uren's Logo"
        />
      </Link>
      <ul className="flex gap-8 items-center">
        <form className="flex">
          <input
            type="text"
            placeholder="Search Here..."
            className="lg-search-input"
          />
          <button className="lg-search-btn uren-transition" type="submit">
            <BiSearch className="inline-block mr-1.5 text-xl" />
            Search
          </button>
        </form>

        <Link href="/shop/cart">
          <li
            className={`nav-cart-btn uren-transition ${
              pathname.split("/").includes("cart") && "active-cart-btn"
            }`}
          >
            <div className="flex gap-5 items-center">
              <BiShoppingBag className="text-3xl" />
              <div className="grid text-md">
                <span className="cart-qty">3 Items</span>
                <span className="cart-amount">AED 462.40</span>
              </div>
            </div>
          </li>
        </Link>
        <Link href="tel://971589196282">
          <li className="nav-phone-num uren-transition">
            <BiSolidPhone />
            +971 58 919 6282
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default LgTopNav;
