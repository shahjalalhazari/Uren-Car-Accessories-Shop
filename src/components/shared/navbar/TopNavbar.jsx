import Image from 'next/image';
import Link from 'next/link';
import { BiSearch, BiShoppingBag, BiSolidPhone } from "react-icons/bi";

const TopNavbar = () => {
  return (
    <div className="nav-top-part">
      {/* NAVBAR TOP PART FOR LARGE (DEFAULT) DEVICES */}
      <div className="lg-top-nav">
        <Link href="/">
          <Image
            width={"230"}
            height={"40"}
            src="/images/menu/logo/2.png"
            alt="Uren's Logo"
          />
        </Link>
        <ul className="flex gap-8">
          <form className="flex">
            <input
              type="text"
              placeholder="Search Here..."
              className="lg-search-input"
            />
            <button className="lg-search-btn" type="submit">
              <BiSearch className="inline-block mr-1.5 text-xl" />
              Search
            </button>
          </form>
          <li className="nav-cart-btn">
            <Link href="/" className="">
              {/* REPLACE */}
              <div className="flex gap-5 items-center">
                <BiShoppingBag className="text-3xl" />
                <div className="grid text-md">
                  <span className="text-black">3 Items</span>
                  <span className="text-secondary text-xl font-semibold">AED 462.40</span>
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
      {/* NAVBAR TOP PART FOR MEDIUM DEVICES */}
      <div className="md-top-nav">
        <h1>Top nav for medium device</h1>
      </div>
      {/* NAVBAR TOP PART FOR SMALL DEVICES */}
      <div className="sm-top-nav">Top nav for small device</div>
    </div>
  );
};

export default TopNavbar;