import Image from "next/image";
import Link from "next/link";
import { BiSearch, BiShoppingBag, BiSolidPhone } from "react-icons/bi";

const TopNavbar = () => {
  return (
    <div className="top-nav-bg">
      {/* LOGO */}
      <Link href="/">
        <Image
          width={"190"}
          height={"40"}
          src="/images/menu/logo/2.png"
          alt="Uren's Logo"
        />
      </Link>
      <form action="#" className="">
        <input
          type="text"
          placeholder="Search Here..."
          name="search"
          className="search-input"
        />
        <button className="search-btn" type="submit">
          <span className="">
            <BiSearch className="inline-block mr-2.5 text-2xl" />
            Search
          </span>
        </button>
      </form>
      <ul className="flex gap-8">
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
        <li className="nav-phone-btn">
          <Link href="tel://971589196282" className="nav-phone-num">
            <BiSolidPhone />
            +971 58 919 6282
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
