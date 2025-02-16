"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaAngleDown, FaDollarSign, FaUser } from "react-icons/fa";

const BottomNavbar = ({ navItems }) => {
  const pathname = usePathname();

  return (
    <div className="btm-nav-bg">
      {/* Category Menu  */}
      <div className="flex items-center gap-x-16">
        <div className="relative group dropdown">
          <div className="category-list-heading">
            <FaBars className="text-4xl" />
            <h2 className="category-list-heading-text">
              <span>Shop By</span>
              <br />
              <span>Department</span>
            </h2>
            <FaAngleDown className="text-3xl" />
          </div>

          {/* Category List */}
          <div className={`category-list`}>
            <ul className="p-4 font-medium category-list-menu">
              {categories.map((item) => (
                <Link className="" key={item.title} href={item.path}>
                  <li className="dropdown-list-item">{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              className={`font-bold uppercase hover:text-secondary transition-all ease-in-out duration-300 ${
                pathname === item.path && "text-base-100 bg-[#000] p-5"
              }`}
              key={item.path}
              href={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Navbar right part */}
      <div className="flex items-center gap-x-8">
        {/* Currency Dropdown */}
        <div className="relative group dropdown">
          <button className="flex gap-x-1 hover:cursor-pointer">
            <FaDollarSign /> <FaAngleDown />
          </button>
          <ul className="dropdown-list">
            <Link href="">
              <li className="dropdown-list-item">$ US Dollar</li>
            </Link>
            <Link href="">
              <li className="dropdown-list-item">£ Pound Sterling</li>
            </Link>
            <Link href="">
              <li className="dropdown-list-item">€ EUR</li>
            </Link>
          </ul>
        </div>

        {/* Language Dropdown  */}
        <div className="relative group dropdown">
          <button className="flex items-center gap-x-1 hover:cursor-pointer">
            <Image
              src="/images/menu/icon/1.jpg"
              width="18"
              height="15"
              alt="English"
            />{" "}
            <FaAngleDown />
          </button>
          <ul className="dropdown-list">
            <li className="dropdown-list-item flex gap-x-2 hover:cursor-pointer">
              <Image
                src="/images/menu/icon/1.jpg"
                width="20"
                height="12"
                alt="English"
              />{" "}
              English
            </li>
            <li className="dropdown-list-item flex gap-x-2 hover:cursor-pointer">
              <Image
                src="/images/menu/icon/2.jpg"
                width="20"
                height="12"
                alt="English"
              />{" "}
              Français
            </li>
          </ul>
        </div>

        {/* User's Account */}
        <div className="relative group dropdown">
          <button className="flex items-center gap-x-1 hover:cursor-pointer">
            <FaUser /> <FaAngleDown />
          </button>
          <ul className={"dropdown-list"}>
            {/* REPLACE */}
            <Link href="user/profile">
              <li className="dropdown-list-item">Profile</li>
            </Link>
            {/* REPLACE */}
            <Link href="user/logout">
              <li className="dropdown-list-item">Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;


const categories = [
  {
    title: "Tires",
    path: "/",
  },
  {
    title: "Spare Parts",
    path: "/",
  },
  {
    title: "Bumpers",
    path: "/",
  },
  {
    title: "Lights",
    path: "/",
  },
  {
    title: "Suspensions",
    path: "/",
  },
];